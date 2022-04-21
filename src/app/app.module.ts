import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoSectionComponent } from './repo-section/repo-section.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data-service/data.service';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    UserDetailsComponent,
    RepoSectionComponent,
    FormSearchComponent,
    HighlightDirective,
    DateCountPipe,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
