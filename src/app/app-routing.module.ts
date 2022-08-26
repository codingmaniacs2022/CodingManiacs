import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LeanpageComponent } from './leanpage/leanpage.component';
import { NormalComponent } from './normal/normal.component';
import { OverweightpageComponent } from './overweightpage/overweightpage.component';
import { ObesepageComponent } from './obesepage/obesepage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LeanDietComponent } from './lean-diet/lean-diet.component';
import { LeanWoComponent } from './lean-wo/lean-wo.component';
import { LeanProfileComponent } from './lean-profile/lean-profile.component';
import { LeanImageComponent } from './lean-image/lean-image.component';
import { LeanHistoryComponent } from './lean-history/lean-history.component';
import { NormalDietComponent } from './normal-diet/normal-diet.component';
import { NormalWoComponent } from './normal-wo/normal-wo.component';
import { NormalProfileComponent } from './normal-profile/normal-profile.component';
import { NormalImageComponent } from './normal-image/normal-image.component';
import { NormalHistoryComponent } from './normal-history/normal-history.component';
import { OwDietComponent } from './ow-diet/ow-diet.component';
import { OwWoComponent } from './ow-wo/ow-wo.component';
import { OwProfileComponent } from './ow-profile/ow-profile.component';
import { OwImageComponent } from './ow-image/ow-image.component';
import { OwHistoryComponent } from './ow-history/ow-history.component';
import { ODietComponent } from './o-diet/o-diet.component';
import { OWoComponent } from './o-wo/o-wo.component';
import { OProfileComponent } from './o-profile/o-profile.component';
import { OImageComponent } from './o-image/o-image.component';
import { OHistoryComponent } from './o-history/o-history.component';

const routes: Routes = [
  {
    path:'firstpage',
    component:FirstpageComponent
  },
  {
    path:'',
    redirectTo:'firstpage',
    pathMatch:'full'
  },
  {
    path:'loginpage',
    component:LoginpageComponent
  },
  {
    path:'signuppage',
    component:SignuppageComponent
  },
  {
    path:'mainpage',
    component:MainpageComponent
  },
  
  {
    path:'profilepage',
    component:ProfilepageComponent
  },
  {path:'leanpage',component:LeanpageComponent, children: [{path: 'lean-diet',component: LeanDietComponent},{path: 'lean-wo',component: LeanWoComponent},{path:'lean-profile',component: LeanProfileComponent},{path:'lean-image',component: LeanImageComponent},{path:'lean-history', component:LeanHistoryComponent}]},
  {path:'normal',component:NormalComponent, children:[{path: 'normal-diet', component: NormalDietComponent}, {path: 'normal-wo', component: NormalWoComponent}, {path: 'normal-profile', component: NormalProfileComponent}, {path:'normal-image',component:NormalImageComponent},{path:'normal-history',component:NormalHistoryComponent}]},
  {path:'overweightpage',component:OverweightpageComponent, children:[{path:'ow-diet',component: OwDietComponent}, {path:'ow-wo', component: OwWoComponent},{path:'ow-profile',component:OwProfileComponent},{path:'ow-image',component: OwImageComponent}, {path: 'ow-history', component: OwHistoryComponent}]},
  {path:'obesepage',component:ObesepageComponent,children:[{path:'o-diet',component: ODietComponent},{path:'o-wo',component: OWoComponent},{path:'o-profile',component:OProfileComponent},{path:'o-image',component: OImageComponent},{path: 'o-profile', component: OProfileComponent},{path: 'o-history',component:OHistoryComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
