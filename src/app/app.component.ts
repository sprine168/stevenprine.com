import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Steven Prine';

  // for cursor
  top: any;
  left: any;
  expand = false;

  @HostListener('document:click', ['$event'])
  onClick($event) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 10) + "px";
    this.left = ($event.pageX - 10) + "px";
  }


  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-163627892-2', {
        'page_path': event.urlAfterRedirects
      });
    });

  } //endConstructor;



}
