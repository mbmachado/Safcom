import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestfulProvider } from '@ioniczoo/pigeon-restful-provider';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-products',
  templateUrl: 'my-products.html',
})
export class MyProductsPage {
  subcategory: any;
  products: any = [];
  backup: any = [];
  constructor(private restful: RestfulProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.subcategory = navParams.get('subcategory');

    this.restful.request('get', '/farmers/' + 1 + '/products', {}, data => {
      this.products = data;
      this.backup = data;
      console.log(data)
    }, err => {
      console.log(err);
    })
  }

  recovery() {
    this.products = this.backup;
  }

  search(ev: any) {
    // Reset items back to all of the items
    this.recovery();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.products = this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemTapped(ev, product) {
    this.navCtrl.push('ProductPage', {'product': product});
  }
}
