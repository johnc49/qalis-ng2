import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommunityComponent } from './community.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { CommunityRoutingModule } from './community-routing.module';

@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    CommunityRoutingModule,
  ],
  exports: [],
})
export class CommunityModule {}
