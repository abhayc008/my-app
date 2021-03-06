import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './_services/in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule,MatFormFieldModule,MatProgressSpinnerModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { TableExampleComponent } from './table-example/table-example.component';
import { NavComponent } from './nav/nav.component';

//import {fakeBackendProvider} from './_helper/fake-backend';
import { JwtInterceptor } from './_helper/jwt.interceptor';
//import {ErrorInterceptor} from './_helper/error.interceptor';
import { NewLoginComponent } from './new-login/new-login.component';
import { CasecadedropdownComponent } from './casecadedropdown/casecadedropdown.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //Ng4LoadingSpinnerModule.forRoot(),
    NgxSpinnerModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent,
    TableExampleComponent,
    NavComponent,
    NewLoginComponent,
    CasecadedropdownComponent,
    SidenavComponent    
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }