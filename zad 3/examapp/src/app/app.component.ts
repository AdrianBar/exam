import { Component, OnInit } from '@angular/core';
import { TREE } from './mock-tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'examapp';
  table;

  ngOnInit() {
    this.table = TREE;
    console.log(this.table);
  }
}
