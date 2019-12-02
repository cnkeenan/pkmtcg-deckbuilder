import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showOverlay = true;

  public search: FormControl = new FormControl();

  ngOnInit() {
    this.search.valueChanges.subscribe(c => console.log(c));
  }

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }

    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }

    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }


}
