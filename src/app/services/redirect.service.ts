import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  private url: string;

  constructor(private router: Router) { }

  redirect(url) {
    console.log(url);
    this.router.navigate([url])
  }
}
