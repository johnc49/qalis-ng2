import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { HomeComponent } from './modules/components/home/home.component';
import { AboutComponent } from './modules/components/about/about.component';
import { LoanComponent } from './modules/components/loan/loan.component';
import { CommunityComponent } from './modules/components/community/community.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { SignupComponent } from './modules/components/signup/signup.component';
import { LoginComponent } from './modules/components/login/login.component';
import { StoryComponent } from './modules/components/story/story.component';
import { AboutModule } from './modules/components/about/about.module';
import { CommunityModule } from './modules/components/community/community.module';
import { ContactModule } from './modules/components/contact/contact.module';
import { HomeModule } from './modules/components/home/home.module';
import { LoanModule } from './modules/components/loan/loan.module';
import { StoryModule } from './modules/components/story/story.module';
import { LoginModule } from './modules/components/login/login.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HomeModule,
    AboutModule,
    LoanModule,
    CommunityModule,
    ContactModule,
    StoryModule,
    StoryModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
