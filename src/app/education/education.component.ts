import { Component, OnInit } from '@angular/core';

interface education {
  degree: string;
  institute: string;
  startDate: Date;
  endDate: Date;
  location: string;
  isGPA: boolean;
  gradeValue: number;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public degrees: education[] = [
    {
      degree: 'Bachelor\'s Degree (B.Tech)',
      institute: 'Karunya Institue of Technology & Sciences',
      startDate: new Date(2014, 6),
      endDate: new Date(2018, 5),
      location: 'Coimbatore, India',
      isGPA: true,
      gradeValue: 8.42
    },
    {
      degree: 'Associate Degree',
      institute: 'Sri Chaitanya Junior College',
      startDate: new Date(2012, 5),
      endDate: new Date(2014, 4),
      location: 'Hyderabad, India',
      isGPA: false,
      gradeValue: 85
    },
    {
      degree: 'High School',
      institute: 'Kakatiya Vidhyaniketan High School',
      startDate: new Date(2008, 5),
      endDate: new Date(2012, 4),
      location: 'Hyderabad, India',
      isGPA: true,
      gradeValue: 9.3
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
