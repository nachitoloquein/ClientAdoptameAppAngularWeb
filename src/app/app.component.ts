import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';

  constructor(private titleService: Title, private router: Router, private activePage: ActivatedRoute){
    this.changeTitle();
  }

  changeTitle(){
    this.router.events.subscribe(event => {
      switch (true){
        case event instanceof NavigationEnd:
          this.titleService.setTitle(this.activePage.firstChild?.snapshot.data.title + ' | AdoptameApp');
          break;

        default:
          break;
      }
    });
  }

}
