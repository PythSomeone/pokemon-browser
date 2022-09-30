import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Paths} from "./models/paths";
import {ColorSchemeService} from "./services/color-scheme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-browser';
  checked = false;

  constructor(
    private router: Router,
    private colorSchemeService: ColorSchemeService

  ) {
    this.colorSchemeService.load();
  }

  setTheme(): void {
    if (localStorage.getItem('prefers-color') === 'light') {
      this.colorSchemeService.update('dark');
    } else {
      this.colorSchemeService.update('light');
    }

  }
  start() {
    this.router.navigate([Paths.START])
  }
}
