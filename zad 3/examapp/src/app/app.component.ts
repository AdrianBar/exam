import { Component, OnInit } from '@angular/core';
import { TREE } from './mock-tree';
import { TreeComponent } from './tree/tree.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'examapp';
  public table;

  ngOnInit() {
    this.table = TREE;
    console.log(this.table);
  }

  toggle(element) {
    console.log(element.children);
    const x = document.getElementById('test');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
}
