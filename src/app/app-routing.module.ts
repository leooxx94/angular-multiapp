import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuartecopieComponent } from './quartecopie/quartecopie.component';
import { AccessoserverComponent } from './accessoserver/accessoserver.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'server', component: AccessoserverComponent, canActivate:[AuthGuard]}, //canActivate:[AuthGuard]},
  {path: 'formulari', component: QuartecopieComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
