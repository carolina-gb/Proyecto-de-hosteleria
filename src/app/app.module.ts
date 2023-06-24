import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './home/hero/hero.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './admin/rooms/rooms.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { EditRoomsComponent } from './admin/edit-rooms/edit-rooms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home/home.component';
import { ListRoomsComponent } from './rooms/list-rooms/list-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RoomsComponent,
    EditRoomsComponent,
    HomeComponent,
    ListRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
