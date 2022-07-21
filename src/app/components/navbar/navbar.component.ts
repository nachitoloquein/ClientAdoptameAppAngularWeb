import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../masterStyle.css']
})
export class NavbarComponent implements OnInit {

  title: string = '';

  constructor(private titleService: Title, private routerService: Router) { 
    this.titleService.setTitle(this.routerService.url.slice(1));
    this.title = this.titleService.getTitle();
  }

  ngOnInit(): void {
  }

  preguntar(){
    if (confirm('Estás seguro que deseas cerrar sesión?')){
      console.log("cerrando...");
    }
  }

}
