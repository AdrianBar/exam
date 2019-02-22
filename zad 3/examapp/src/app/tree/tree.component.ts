import { Component, OnInit, Input } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() element: [];
  @Input() hidden: boolean;
  constructor() {
    this.element = [];
    this.hidden = false;
  }
  ngOnInit() {
  }

  toggle() {
    this.hidden = !this.hidden;
  }

  afterClick() {

  }
}
