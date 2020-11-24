import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { AppRoutingModule } from '../app-routing.module';
import { TermsComponent } from './terms/terms.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ]
})
export class PortalModule { }
