import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {Data} from '../models/data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu: MenuItem[] = Data.sideBarMainMenu;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this.router.navigate([path]).then();
  }
}
