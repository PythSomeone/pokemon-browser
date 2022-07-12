import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Paths} from "./models/paths";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-browser';

  constructor(
    private router: Router,
  ) {
  }

  start() {
    this.router.navigate([Paths.START])
  }
}
