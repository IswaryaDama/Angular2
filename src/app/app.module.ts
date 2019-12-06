import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesService } from './services/notes.service';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [ HeaderComponent, AppComponent, DashboardComponent, LoginComponent ],
  imports: [ HttpClientModule, BrowserModule ,
            MatToolbarModule, MatExpansionModule, MatFormFieldModule,
            BrowserAnimationsModule, MatInputModule, FormsModule,
            MatCardModule,
            RoutingModule, ReactiveFormsModule, MatButtonModule],
  providers: [ NotesService, RouterService, AuthenticationService, CanActivateRouteGuard ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
