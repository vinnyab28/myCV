import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  checked: boolean = false;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit(): void {
  }

  toggleDarkTheme() {
    this.checked = !this.checked;
    this.themeService.setDarkTheme(this.checked);
  }
}
