import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { TermsComponent } from './pages/terms/terms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { EventComponent } from './components/event/event.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LandingComponent,
    TermsComponent,
    NavbarComponent,
    HeroComponent,
    SpeakersComponent,
    ScheduleComponent,
    EventComponent,
    SocialMediaComponent,
    CountdownComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
