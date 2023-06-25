import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ListRoomsComponent } from './rooms/list-rooms/list-rooms.component';
import { ListServComponent } from './hotelServ/list-serv/list-serv.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'habitaciones', component: ListRoomsComponent },
  { path: 'servicios', component: ListServComponent },
  { path: 'contactanos', component: ContactosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
