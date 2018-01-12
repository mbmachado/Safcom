import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestfulProvider } from '@ioniczoo/pigeon-restful-provider';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  banners: any;
  categories: any = [];

  constructor(private restful: RestfulProvider, public navCtrl: NavController) {
    this.getBanners();
    this.getCategories();
  }

  getCategories() {
    this.categories = [
      {
        name: 'frutas',
        categories: [
          {
            name: 'teste'
          }
        ]
      }
    ]
    this.restful.request('get', '/categories', {}, data => {
        this.categories = data;
        console.log(data)
      }, err => {
        console.log(err);
      })
  }

  openSubcategories(category) {
    this.navCtrl.push('SubcategoriesPage', {'category': category});
  }

  getBanners() {
    this.banners = [
      {
        image: "assets/imgs/a.jpg"
      },
      {
        image: "assets/imgs/b.jpg"
      },
      {
        image: "assets/imgs/c.jpg"
      }
    ]
  }
}
