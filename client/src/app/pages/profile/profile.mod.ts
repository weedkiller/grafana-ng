import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from './profile.mod-r';
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { ProfileChangePasswordComponent } from './change-password/change-pwd';
import { ProfilePreferencesComponent } from './prefs/prefs';
import { UserService } from 'src/app/core/services/users.s';
import { DashboardService } from 'src/app/core/services/dashboard.s';

@NgModule({
  declarations:[
    ProfilePreferencesComponent,
    ProfileChangePasswordComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileRoutingModule,
    
    UilibModule,
  ],
  providers: [
    UserService,
    DashboardService
    
  ]
})
export class ProfileModule{

}