import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FutureCollectionComponent } from './future-collection/future-collection.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'stories',
    component: StoriesComponent,
  },
  {
    path: 'collections',
    component: FutureCollectionComponent,
  },
  {
    path: 'About us',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
