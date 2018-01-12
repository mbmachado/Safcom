import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategories',
  templateUrl: 'subcategories.html',
})
export class SubcategoriesPage {
  categories: any;
  backup: any;
  result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = navParams.get('category');
    this.categories = this.result.categories;
    this.backup = this.result.categories;
  }

  showProducts(subcategory) {
    this.navCtrl.push('ProductsPage', {'subcategory': subcategory});
  }

  recovery() {
    this.categories = this.backup;
  }

  search(ev: any) {
    // Reset items back to all of the items
    this.recovery();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.categories = this.categories.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
