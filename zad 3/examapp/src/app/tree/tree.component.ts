import { Component, OnInit, Input, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, AfterViewInit {

  @ViewChildren('test', { read: ElementRef }) test: QueryList<ElementRef>;

  @Input() element: [];
  @Input() hidden: boolean;
  @Input() checked: boolean;
  constructor() {
    this.element = [];
    this.hidden = false;
    this.checked = false;
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggle() {
    this.hidden = !this.hidden;
  }

  afterClick() {
    this.checked = !this.checked;
    for (let i = 0; i < this.test.toArray().length; i++) {
    this.test.toArray()[i].nativeElement['checked'] = this.checked;
    }
  }
}
