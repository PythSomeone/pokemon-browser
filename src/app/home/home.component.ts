import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ColorSchemeService} from "../services/color-scheme.service";
import {Paths} from "../models/paths";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  ngOnInit(): void {
  }
}
