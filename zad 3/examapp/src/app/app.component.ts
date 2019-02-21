import { Component } from '@angular/core';
import { TREE } from './mock_tree.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examapp';
  table: TREE;
}
