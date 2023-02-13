import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoryComponent } from './story.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { StoryRoutingModule } from './story-routing.module';

@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    StoryRoutingModule,
  ],
  exports: [],
})
export class StoryModule {}
