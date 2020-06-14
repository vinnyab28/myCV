import { Component, OnInit } from '@angular/core';
import { RedirectService } from '../services/redirect.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public redirectService: RedirectService) { }

  ngOnInit(): void {
  }

}
