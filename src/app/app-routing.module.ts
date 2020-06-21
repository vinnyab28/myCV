import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentBoxComponent } from './content-box/content-box.component';
import { MainComponent } from './main/main.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'work-experience', component: WorkExperienceComponent, data: {animation: 'WorkPage'} },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '', component: MainComponent, pathMatch: 'full', data: {animation: 'MainPage'} },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
