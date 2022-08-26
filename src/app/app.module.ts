import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CardsComponent } from './cards/cards.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ObesepageComponent } from './obesepage/obesepage.component';
import { NormalComponent } from './normal/normal.component';
import { LeanpageComponent } from './leanpage/leanpage.component';
import { OverweightpageComponent } from './overweightpage/overweightpage.component';
import { AboutComponent } from './about/about.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeanSidenavComponent } from './lean-sidenav/lean-sidenav.component';
import { LeanHeaderComponent } from './lean-header/lean-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { LeanDietComponent } from './lean-diet/lean-diet.component';
import { LeanWoComponent } from './lean-wo/lean-wo.component';
import { LeanProfileComponent } from './lean-profile/lean-profile.component';
import { LeanImageComponent } from './lean-image/lean-image.component';
import { LeanHistoryComponent } from './lean-history/lean-history.component';
import { NormalImageComponent } from './normal-image/normal-image.component';
import { NormalDietComponent } from './normal-diet/normal-diet.component';
import { NormalWoComponent } from './normal-wo/normal-wo.component';
import { NormalProfileComponent } from './normal-profile/normal-profile.component';
import { NormalHistoryComponent } from './normal-history/normal-history.component';
import { NormalSidenavComponent } from './normal-sidenav/normal-sidenav.component';
import { NormalHeaderComponent } from './normal-header/normal-header.component';
import { OwSidenavComponent } from './ow-sidenav/ow-sidenav.component';
import { OwHeaderComponent } from './ow-header/ow-header.component';
import { OwDietComponent } from './ow-diet/ow-diet.component';
import { OwWoComponent } from './ow-wo/ow-wo.component';
import { OwProfileComponent } from './ow-profile/ow-profile.component';
import { OwHistoryComponent } from './ow-history/ow-history.component';
import { OwImageComponent } from './ow-image/ow-image.component';
import { OSidenavComponent } from './o-sidenav/o-sidenav.component';
import { OHeaderComponent } from './o-header/o-header.component';
import { OImageComponent } from './o-image/o-image.component';
import { ODietComponent } from './o-diet/o-diet.component';
import { OWoComponent } from './o-wo/o-wo.component';
import { OHistoryComponent } from './o-history/o-history.component';
import { OProfileComponent } from './o-profile/o-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    LoginpageComponent,
    CardsComponent,
    SignuppageComponent,
    MainpageComponent,
    ObesepageComponent,
    NormalComponent,
    LeanpageComponent,
    OverweightpageComponent,
    AboutComponent,
    ProfilepageComponent,
    LeanSidenavComponent,
    LeanHeaderComponent,
    LeanDietComponent,
    LeanWoComponent,
    LeanProfileComponent,
    LeanImageComponent,
    LeanHistoryComponent,
    NormalImageComponent,
    NormalDietComponent,
    NormalWoComponent,
    NormalProfileComponent,
    NormalHistoryComponent,
    NormalSidenavComponent,
    NormalHeaderComponent,
    OwSidenavComponent,
    OwHeaderComponent,
    OwDietComponent,
    OwWoComponent,
    OwProfileComponent,
    OwHistoryComponent,
    OwImageComponent,
    OSidenavComponent,
    OHeaderComponent,
    OImageComponent,
    ODietComponent,
    OWoComponent,
    OHistoryComponent,
    OProfileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
