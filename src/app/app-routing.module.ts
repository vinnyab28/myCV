import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentBoxComponent } from './content-box/content-box.component';
import { MainComponent } from './main/main.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
