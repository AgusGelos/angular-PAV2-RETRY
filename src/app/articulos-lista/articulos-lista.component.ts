import { Component, OnInit } from '@angular/core';
import {ArticulosFamilia} from '../modelos/articulofamilia'
import {ArticulosFamilias} from '../modelos/articulosfamilia-colection'

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  listaArticulos: ArticulosFamilia[];
  verGrilla = false;
  mensajebtn = 'Mostrar Grilla'

  constructor() { }

  ngOnInit() {
    this.listaArticulos = ArticulosFamilias
  }

  MostrarGrilla(){
    this.mensajebtn = this.verGrilla? 'Mostrar Grilla': 'Ocultar';
   this.verGrilla = !this.verGrilla;
   

  }

}