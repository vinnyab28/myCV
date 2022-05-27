import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { PersonalProjectsComponent } from './personal-projects.component';

describe('PersonalProjectsComponent', () => {
  let component: PersonalProjectsComponent;
  let fixture: ComponentFixture<PersonalProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
