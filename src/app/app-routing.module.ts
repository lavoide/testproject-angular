import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticComponent } from './statistic/general-statistic/statistic.component';
import { ReviewFormComponent } from './review/review-form/review-form.component';
import { PlanningFormComponent } from './planning/planning-form/planning-form.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

// router service: the global Angular Router service in our application
// router configuration: definition of all possible router states our application can be in
// router state: the state of the router at some point in time, expressed as a tree of activated route snapshots
// activated route snapshot: provides access to the URL, parameters, and data for a router state node
// guard: script that runs when a route is loaded, activated or deactivated
// resolver: script that fetches data before the requested page is activated
// router outlet: location in the DOM where Angular Router can place activated components.

// path: string, path to match the URL
// patchMatch: string, how to match the URL
// component: class reference, component to activate when this route is activated
// redirectTo: string, URL to redirect to when this route is activated
// data: static data to assign to route
// resolve: dynamic data to resolve and merge with data when resolved
// children: child routes.


// Обычное описание роутов без ленивой подгрузки модулей;
// const routes: Routes = [
//   { path: '', redirectTo: '/statistic', pathMatch: 'full' },
//   { path: 'statistic', component: StatisticComponent},
//   { path: 'review', component: ReviewFormComponent },
//   { path: 'planning', component: PlanningFormComponent, data: { preload: true }},
//   { path: '**', component: PageNotFoundComponent}
// ];
//
const routesWithLazyLoading: Routes = [
  { path: 'statistic', loadChildren: './statistic/statistic.module#StatisticModule'}, // Лениво грузим StatisticModule
  { path: 'review', loadChildren: '../app/review/review.module#ReviewModule' },
  { path: 'planning', loadChildren: '../app/planning/planning.module#PlanningModule'},
  { path: 'auth', loadChildren: '../app/auth/auth.module#AuthModule'},
  { path: '', redirectTo: '/statistic', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routesWithLazyLoading)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

