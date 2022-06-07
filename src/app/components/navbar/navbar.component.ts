import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../masterStyle.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  preguntar(){
    if (confirm('Estás seguro que deseas cerrar sesión?')){
      console.log("cerrando...");
    }
  }

}
