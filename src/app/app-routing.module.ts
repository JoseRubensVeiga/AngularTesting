import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { RepositoryComponent } from './repository';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'repository/:owner/:repositoryName', component: RepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
