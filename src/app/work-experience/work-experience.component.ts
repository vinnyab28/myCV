import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatAccordion, MatExpansionPanel} from '@angular/material/expansion';

interface workExperience {
  company: string;
  timeline: string;
  icon: string;
  position: string;
  description: string[];
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  public expanded: boolean = false;
  public workExperiences: workExperience[] = [
    {
      company: 'Tata Elxsi',
      timeline: '2018 - Present',
      icon: 'work',
      position: 'Associate Engineer',
      description: [
        'Full Stack Web Developer',
        'Experienced in all project phases using Waterfall and Agile Methodologies',
        'Designed UI/UX for three Web Portals Applications using the below technologies',
        'Worked on the front-end using HTML, CSS, JS, Angular, JQuery, Bootstrap,  and Material Design',
        'Worked on the back-end using Node.js, Express, PHP, and MySQL',
        'Hands-on experience in PHP framework such as Zend Framework 3 (ZF3)',
        'Deployed the product using AWS Services',
        'Author of documentation of Wire-frame and User Manual for the projects worked on'
      ]
    }
  ]

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.expanded = this.expansionPanel.expanded;
  }
}
