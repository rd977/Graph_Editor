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
  // functions that store the input
  // see html code
  update1(value) {
    this.node1 = value;
  }
  update2(value) {
    this.node2 = value;
  }

  constructor() {
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
    this.edges.update({from: this.node1, to: this.node2 , color : 'blue' });

  }
  // toggles label
  toggle_labels() {
    // if label is on
    if (this.on) {
      for (let j = 1; j < this.i ; j++) {
        this.nodes.add([{id: j , font: {color: 'rgb(159, 249, 0)'} }]);
        this.on = false;

      }
      // label is off
    } else {
      for (let j = 1; j < this.i ; j++) {
        this.nodes.update([{id: j , font: {color: 'black'} }]);
        this.on = true;
    }
  }
}}
