import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CartaComponent } from './components/carta/carta.component';
import { MenuDiaComponent } from './components/menu-dia/menu-dia.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'menu-dia', component: MenuDiaComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
