import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    { path: '',
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
        { path: 'progress', component: ProgressComponent, data: {titulo: 'Ejemplo ProgressBars'}},
        { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Ejemplo Graficas'}},
        { path: 'promesas', component: PromesasComponent, data: {titulo: 'Ejemplo Promesas'}},
        { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Ejemplo Observable'}},
        { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuraci{on de cuenta'}},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: {titulo: 'Dashboard'}}
      ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
