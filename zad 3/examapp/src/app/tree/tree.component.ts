import { Component, OnInit, Input, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, AfterViewInit {

  @ViewChildren('test', { read: ElementRef }) test: QueryList<ElementRef>;

  @Input() element: [];
  @Input() hidden: boolean;
  checked: boolean;
  constructor() {
    this.element = [];
    this.hidden = false;
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggle() {
    this.hidden = !this.hidden;
  }

  afterClick() {
    for (let i = 0; i < this.test.toArray().length; i++) {
    this.test.toArray()[i].nativeElement['checked'] = true;
    }
  }
}
