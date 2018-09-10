import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path:'login', component:LoginComponent},
{ path:'nav' , component: NavComponent
	,children:[
		{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
		{ path: 'dashboard', component: DashboardComponent },		
		{ path: 'detail/:id', component: HeroDetailComponent },
		{ path: 'heroes', component: HeroesComponent },
		{ path:'HerosSearch' , component:HeroSearchComponent}
		]
}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}