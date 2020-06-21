import { Component, OnInit } from '@angular/core';

interface SocialProfile {
  title: string;
  link: string;
  icon?: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public profiles: SocialProfile[] = [
    { title: 'Linkedin', link: 'https://www.linkedin.com/in/vineeth-prakash'},
    { title: 'Github', link: 'https://github.com/vinnyab28'},
    { title: 'YouTube', link: 'https://www.youtube.com/user/VinnysCrib'},
    { title: 'Quora', link: 'https://www.quora.com/profile/Vineeth-Prakash'},
    { title: 'Instagram', link: 'https://www.instagram.com/vinny_ab28'},
    { title: 'Twitter', link: 'https://twitter.com/vinny_ab28'},
    { title: 'Pinterest', link: 'https://www.pinterest.com/vinny_ab28/'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
