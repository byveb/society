import { Component, OnInit } from '@angular/core';
import { GridStack, GridStackWidget } from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';


@Component({
  selector: 'society-grid-stack',
  templateUrl: './grid-stack.component.html',
  styleUrls: ['./grid-stack.component.scss']
})
export class GridStackComponent implements OnInit {
  // private items: GridStackWidget[] = [
  //   { x: 0, y: 0, w: 9, h: 6, content: '0' },
  //   { x: 9, y: 0, w: 3, h: 3, content: '1' },
  //   { x: 9, y: 3, w: 3, h: 3, content: '2' },
  // ];

  // private grid: GridStack | any;

  constructor() {
    
  }

  ngOnInit(): void {
    // this.grid = GridStack.init({
    //   cellHeight: 70,
    // })
    //   .load(this.items);
  }

  // public add() {
  //   this.grid.addWidget({ w: 3, content: 'new content' });
  // }

  // public delete() {
  //   this.grid.removeWidget(this.grid.engine.nodes[0].el);
  // }

  // public change() {
  //   this.grid.update(this.grid.engine.nodes[0].el, { w: 1 });
  // }
}
