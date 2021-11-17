import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutwpComponent } from './aboutwp/aboutwp.component';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component'

const routes: Routes = [
  {path:'aboutwp-component',component:AboutwpComponent},
  {path:'frontpage-component',component:FrontpageComponent},
  { path: '',   redirectTo: '/frontpage-component', pathMatch: 'full' }, // redirect to `first-component`
]

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
