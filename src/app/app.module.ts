import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoriesComponent } from './stories/stories.component';
import { FutureCollectionComponent } from './future-collection/future-collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LinksComponent } from './links/links.component';
import { CommunityComponent } from './community/community.component';
import { LinksDetailComponent } from './links-detail/links-detail.component';
import { UserService } from './user.service';
import { VMsaUH1bi9eTOemGILScHsD0qESnFxRqDPOxOIbL9ZhSZkCzlF6A61rwqoTXDUHM0GObbb5ePi63ASQsPKBrDqfgayGnOWpyrEF0nHqugComponent } from './v-msa-uh1bi9e-toem-gilsc-hs-d0q-esn-fx-rq-dpox-oib-l9-zh-szk-czl-f6-a61rwqo-txduh.m0-gobbb5e-pi63-asqs-pkbr-dqfgay-gn-owpyr-ef0n-hqug/v-msa-uh1bi9e-toem-gilsc-hs-d0q-esn-fx-rq-dpox-oib-l9-zh-szk-czl-f6-a61rwqo-txduh.m0-gobbb5e-pi63-asqs-pkbr-dqfgay-gn-owpyr-ef0n-hqug.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StoriesComponent,
    FutureCollectionComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    LinksComponent,
    CommunityComponent,
    LinksDetailComponent,
    VMsaUH1bi9eTOemGILScHsD0qESnFxRqDPOxOIbL9ZhSZkCzlF6A61rwqoTXDUHM0GObbb5ePi63ASQsPKBrDqfgayGnOWpyrEF0nHqugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
