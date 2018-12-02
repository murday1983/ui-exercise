import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/// Web Page Components ///
import { AboutuspageComponent } from '../components/aboutuspage/aboutuspage.component';
import { BlogpageComponent } from '../components/blogpage/blogpage.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutuspageComponent,
    BlogpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialAppModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
