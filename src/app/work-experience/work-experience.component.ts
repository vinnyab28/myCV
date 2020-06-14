import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatAccordion, MatExpansionPanel} from '@angular/material/expansion';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  public expanded: boolean = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.expanded = this.expansionPanel.expanded;
  }
  
  toggleAccordion() {
    !this.expansionPanel.expanded ? this.accordion.openAll() : this.accordion.closeAll();
  }
}
