import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './componente/cards/cards.component';
import { ListaComponent } from './componente/lista/lista.component';


const routes: Routes = [
  {path:`cardsApi`, component:CardsComponent},
  {path:'listaAPi', component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
