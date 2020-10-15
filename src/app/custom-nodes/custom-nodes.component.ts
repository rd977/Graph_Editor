import { Component, OnInit } from '@angular/core';
import { Edge, Node, Network, DataSet } from 'vis-network/standalone';

@Component({
  selector: 'app-custom-nodes',
  templateUrl: './custom-nodes.component.html',
  styleUrls: ['./custom-nodes.component.css']
})
export class CustomNodesComponent implements OnInit {

  network: Network;
  nodes: DataSet<Node>;
  edges: DataSet<Edge>;
  isAdded: boolean;

  constructor() {
    this.nodes = new DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
    ]);
    this.edges = new DataSet([
      {from: 1,to: 2}
    ]);
  }

  ngOnInit() {
    const options = {};
    const container = document.getElementById('mynetwork-vis');
    const data = { nodes: this.nodes, edges: this.edges };
    this.network = new Network(container, data, options);
  }

  add() {
  }

  link() {
  }

}
