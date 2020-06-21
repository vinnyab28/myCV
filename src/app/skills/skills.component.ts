import { Component, OnInit } from '@angular/core';

interface Skills {
  name: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Skills[] = [
    { name: 'HTML' },
    { name: 'Javascript' },
    { name: 'Angular' },
    { name: 'Node' },
    { name: 'JQuery' },
    { name: 'Express.js' },
    { name: 'Linux' },
    { name: 'PHP' },
    { name: 'Zend Framework' },
    { name: 'CSS' },
    { name: 'Chart.js' },
    { name: 'UI/UX' },
    { name: 'MySQL' },
    { name: 'Bootstrap' },
    { name: 'Material Design'},
    { name: 'React.js'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
