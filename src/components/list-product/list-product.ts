import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { MercadoLibreProvider } from '../../providers/mercado-libre/mercado-libre';
import { ProductoPage } from "../producto/producto";

/**
 * Generated class for the ListProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {

  product: string = ""
  exist: Boolean = false
  respuestas: any
  results: any = []

  constructor(public navParams: NavParams,
              private _mlService: MercadoLibreProvider,
              public navCtrl: NavController) {
      this.product = this.navParams.get('product');
      this.buscar()
  }

  buscar(){
    this._mlService.buscarProducto(this.product)
    .then( (response) => {
      this.exist = true
      this.respuestas = response
      this.results = this.respuestas.results
      console.log(this.respuestas)
    }).catch( (err) => {
      this.exist = false
    })
  }

  itemSelected(producto: string){
      this.navCtrl.push(ProductoPage, { 'producto': producto });
  }

}
