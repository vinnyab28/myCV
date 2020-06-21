import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs/Observable';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  checked: boolean = false;
  url: string;
  navLinks: NavLink[] = [
    { path: 'work-experience', label: 'Work Experience' },
    { path: 'personal-projects', label: 'Personal Projects' },
    { path: 'education', label: 'Education' },
    { path: 'skills', label: 'Skills' },
    { path: 'interests', label: 'Interests' },
    { path: 'about-me', label: 'About Me'}
  ]

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit(): void { }

  toggleDarkTheme() {
    this.checked = !this.checked;
    this.themeService.setDarkTheme(this.checked);
  }
}
