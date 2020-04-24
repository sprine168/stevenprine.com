import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports for routing section

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { PermissionComponent } from './permission/permission.component';

// End Imports for routing section

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: HomeComponent },
  { path: 'resume', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chat_room', component: ChatRoomComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '403', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
