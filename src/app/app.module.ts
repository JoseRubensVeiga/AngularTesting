import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository';
import { DashboardComponent } from './dashboard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, RepositoryComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
