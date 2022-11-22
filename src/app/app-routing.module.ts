import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { FutureCollectionComponent } from './future-collection/future-collection.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { StoriesComponent } from './stories/stories.component';
import { LinksDetailComponent } from './links-detail/links-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, data: { breadcrumb: "home" },
  },
  { path: 'links', 
    component: LinksComponent,
    children: [
      { path: ':name', component: LinksDetailComponent },
  ]
  },
  { path: 'community', component: CommunityComponent },
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
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'V-msaUH1bi9eTOemGILScHsD0qESnFxRqDPOxOIbL9ZhSZkCzlF6A61rwqoTXDUH.M0-GObbb5ePi63ASQsPKBrDqfgayGnOWpyrEF0nHqug',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
