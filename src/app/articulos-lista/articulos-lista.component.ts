import { Component, OnInit } from '@angular/core';
import {ArticulosFamilia} from '../modelos/articulofamilia'
import {ArticulosFamilias} from '../articulosfamilia-colection'

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  listaArticulos: ArticulosFamilia[];

  constructor() { }

  ngOnInit() {
    this.listaArticulos = ArticulosFamilias
  }

}