import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/accounts/login/login.component';
import { UploadImageComponent } from './components/houses/upload-image/upload-image.component';
import { RegisterComponent } from './components/accounts/register/register.component';
import { PostnewsComponent } from './components/houses/postnews/postnews.component';
import { UpdatePasswordComponent } from './components/accounts/update-password/update-password.component';
import { ManageHouseComponent } from './components/houses/manage-house/manage-house.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { BookingHouseComponent } from './components/houses/booking-house/booking-house.component';
import { ListHouseComponent } from './components/houses/list-house/list-house.component';
import { ViewHouseComponent } from './components/houses/view-house/view-house.component';

import { ListAccountComponent } from './components/accounts/list-account/list-account.component';
import { UpdateUserInformationComponent } from './components/accounts/update-user-information/update-user-information.component';

import { ProfileComponent } from './components/accounts/profile/profile.component';
import { FeedbackHouseComponent } from './components/houses/feedback-house/feedback-house.component';
import { SearchHouseComponent } from './components/houses/search-house/search-house.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent,
  },
  { path: "upload-image", component: UploadImageComponent },
  { path: "register", component: RegisterComponent },
  { path: "postnews", component: PostnewsComponent },
  { path: "update-password", component: UpdatePasswordComponent },
  { path: "view-house/:id", component: ViewHouseComponent },
  { path: "manage-house", component: ManageHouseComponent },
  { path: "home", component: HomeComponent },
  { path: "houses", component: ListHouseComponent },
  { path: "booking-house", component: BookingHouseComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'search-house', component:SearchHouseComponent,},
  { path: 'list-house', component:ListHouseComponent,},




  { path: "list-account", component: ListAccountComponent },
  { path: 'update-user-information/:id', component: UpdateUserInformationComponent },

  {path : 'feedback-house', component : FeedbackHouseComponent},
  {
    path: "Profile/:info",
    component: ProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
