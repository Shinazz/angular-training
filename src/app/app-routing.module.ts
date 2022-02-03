import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { Content2Component } from './pages/content2/content2.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'content2',
    component: Content2Component,
  },
  {
    path: '',
    redirectTo: 'content2',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
