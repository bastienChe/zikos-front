import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { AppRoutingModule } from '../app-routing.module';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TermsComponent
  ]
})
export class PortalModule { }
