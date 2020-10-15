import { Component, OnInit } from '@angular/core';
import { Edge, Node, Network, DataSet } from 'vis-network/standalone';
import set = Reflect.set;

@Component({
  selector: 'app-custom-nodes',
  templateUrl: './custom-nodes.component.html',
  styleUrls: ['./custom-nodes.component.css']
})
export class CustomNodesComponent implements OnInit {

  network: Network;
  nodes: DataSet<Node>;
  edges: DataSet<Edge>;
  on = true ;
  i = 2;
  node1: number;
  node2: number;
  update1(value) {
    this.node1 = value;
  }
  update2(value: number) {
    this.node2 = value;
  }

  constructor() {
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

  add() {
    this.nodes.add({ id: this.i, label: 'Node' + this.i , color: {
        background: 'rgb(159, 249, 0)',
        border: 'black',
      }});
    this.i++;
  }

  link() {
    console.log(this.node1);
    console.log(this.node2);
    this.edges.add({from: this.node1, to: this.node2 });

  }
  toggle_labels() {
    this.nodes.getIds();
    if (this.on) {
      for (let j = 1; j < this.i ; j++) {
        this.nodes.update([{id: j , font: {color: 'rgb(159, 249, 0)'} }]);
        this.on = false;

      }
    } else {
      for (let j = 1; j < this.i ; j++) {
        this.nodes.update([{id: j , font: {color: 'black'} }]);
        this.on = true;
    }
  }

}}
