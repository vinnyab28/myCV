import { Component, OnInit } from '@angular/core';

interface personalProject {
  projectName: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  public projects: personalProject[] = [
    {
      projectName: 'Linux From Scracth (LFS)',
      startDate: new Date(2017, 11),
      endDate: new Date(2018, 3),
      description: 'Built Linux From Scratch (LFS 8.0) for my Final Year Project and much appreciated in the department'
    },
    {
      projectName: 'Event Websites',
      startDate: new Date(2017, 1),
      endDate: new Date(2017, 4),
      description: 'Designed and launched two websites for Karunya University for event highlights and registration using Bootstrap, HTML, CSS, JavaScript technologies.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
