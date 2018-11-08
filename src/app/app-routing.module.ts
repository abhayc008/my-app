import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { CasecadedropdownComponent } from './casecadedropdown/casecadedropdown.component';
import { SidenavComponent } from './sidenav/sidenav.component';
const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path:'login', component:LoginComponent},
//{ path:'login', component:NewLoginComponent},
{ path : 'SidenavComponent',  component:SidenavComponent },
// { path:'' , component: NavComponent
{ path:'' , component: SidenavComponent
	,children:[
		{ path: '', redirectTo: 'Casecadedropdown', pathMatch: 'full' },
		{ path: 'dashboard', component: DashboardComponent },		
		{ path: 'detail/:id', component: HeroDetailComponent },
		{ path: 'heroes', component: HeroesComponent },
		{ path: 'HerosSearch' , component:HeroSearchComponent},
		{ path: 'Casecadedropdown', component:CasecadedropdownComponent}		
		]
}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}