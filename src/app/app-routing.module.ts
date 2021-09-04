import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router'
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';


 const routes : Routes = [

  
   
   {path:'' ,pathMatch:'full' , redirectTo:'/dashboard'},
   {path:'**', pathMatch:'full', component:NopagefoundComponent}



 ] 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
