import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    console.log('sidebar is clicked');
    this.opened = !this.opened;
    console.log('sidebar is already clicked');
  }

}
