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
  on = true ;
  i = 2;

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
    this.nodes.add({ id: this.i, label: 'Node' + this.i });
    this.i++;
  }

  link() {
    if (this.on) {
    this.nodes.update([{font : {color: 'rgb(159, 249, 0)'} }]);
    }
    else {
      this.nodes.update([{ font : {color: 'black'} }]);

    }
    this.edges.add({from: 1, to: 2});

  }

}
