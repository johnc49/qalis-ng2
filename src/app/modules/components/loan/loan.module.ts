import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoanComponent } from './loan.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { LoanRoutingModule } from './loan-routing.module';

@NgModule({
  declarations: [LoanComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    LoanRoutingModule,
  ],
  exports: [],
})
export class LoanModule {}
