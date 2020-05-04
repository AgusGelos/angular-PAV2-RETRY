import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HelloComponent } from './hello.component';
import { MeunComponent } from './meun/meun.component';
import { PrincipalComponent } from './principal/principal.component';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [  HelloComponent, MeunComponent, PrincipalComponent, ArticulosListaComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
