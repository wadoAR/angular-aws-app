import {Component, OnInit} from '@angular/core';
import {Data} from '../models/data';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  items = Data.topBarMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
