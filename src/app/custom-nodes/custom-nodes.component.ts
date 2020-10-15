import { Component, OnInit } from '@angular/core';
import { Edge, Node, Network, DataSet } from 'vis-network/standalone';

@Component({
  selector: 'app-custom-nodes',
  templateUrl: './custom-nodes.component.html',
  styleUrls: ['./custom-nodes.component.css']
})
export class CustomNodesComponent implements OnInit {
  //  Network contains all the view( nodes and edges and other information )
  network: Network;
  nodes: DataSet<Node>;
  edges: DataSet<Edge>;
  // contains if label is on or off
  on = true ;
  // contains next node
  i = 2;
  // contains user input as number
  node1: number;
  node2: number;
  node3: number;
  node4: number;
  node5: number;
  node6; number;
  // try
  person;
  // functions that store the input
  // see html code
  update1(value) {
    this.node1 = value;
  }
  update2(value) {
    this.node2 = value;
  }
  update3(value) {
    this.node3 = value;
  }
  update4(value) {
    this.node4 = value;
  }
  update5(value) {
    this.node5 = value;
  }
  update6(value) {
    this.node6 = value;
  }

  constructor() {
    // test
    this.person = {0: 0 };
    // Adding  Node1
    this.nodes = new DataSet([
      {
        id: 1, label: 'Node 1', color: {
          background: 'rgb(159, 249, 0)',
          border: 'black',
        }
      }
    ]);
    this.edges = new DataSet([]);
    }
  ngOnInit() {
    const options = {};
    const container = document.getElementById('mynetwork-vis');
    const data = { nodes: this.nodes, edges: this.edges };
    this.network = new Network(container, data, options);
  }
  // adds a node
  add() {
    this.nodes.add({ id: this.i, label: 'Node' + this.i , color: {
        background: 'rgb(159, 249, 0)',
        border: 'black',
      }});
    this.i++;
  }
  // links 2 nodes
  link() {
    // testing if user input is stored correctly
    console.log(this.node1);
    console.log(this.node2);
    // adding the edge
    if ((this.person.hasOwnProperty((this.node1) * 10 + this.node2)) === false) {
      console.log(((this.node1) * 10 + this.node2));
      this.edges.update({id: ((this.node1) * 10 + this.node2) * 1, from: this.node1, to: this.node2 , color : 'blue' });
      this.person[(this.node1) * 10 + this.node2] = ((this.node1) * 10 + this.node2) * 10;
      } else {
      this.edges.update({id: this.person[(this.node1) * 10 + this.node2], from: this.node1, to: this.node2 , color : 'blue' });
      this.person[(this.node1) * 10 + this.node2] = this.person[(this.node1) * 10 + this.node2] * 10;
    }
  }
  // toggles label
  toggle_labels() {
    // if label is on
    if (this.on) {
      for (let j = 1; j < this.i ; j++) {
        this.nodes.update([{id: j , font: {color: 'rgb(159, 249, 0)'} }]);
        this.on = false;

      }
      // label is off
    } else {
      for (let j = 1; j < this.i ; j++) {
        this.nodes.update([{id: j , font: {color: 'black'} }]);
        this.on = true;
    }
  }
  }
  // deletes a node
  unlink() {
    console.log(this.node3);
    console.log(this.node4);
    console.log(this.person[(this.node3) * 10 + this.node4] / 10);
    this.edges.remove(this.person[(this.node3) * 10 + this.node4] / 10);
    this.person[(this.node3) * 10 + this.node4] = this.person[(this.node3) * 10 + this.node4] / 10;
    console.log(this.edges.getIds());
  }
  // deletes all nodes linking to one edge
  delete_edges() {
    this.edges.clear();
  }
  Delete_node() {
    console.log(this.node6);
    this.edges.clear(this.node6);
  }
}
