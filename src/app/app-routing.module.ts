import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutuspageComponent } from '../components/aboutuspage/aboutuspage.component';
import { BlogpageComponent } from '../components/blogpage/blogpage.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'aboutus',
    component: AboutuspageComponent
  },
  {
    path: 'ourblogs',
    component: BlogpageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
