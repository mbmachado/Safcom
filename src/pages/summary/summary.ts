import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {

  summary: any = {load_type: '', deadline: '', wheight: '', type: '', description: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.summary = this.navParams.get('summary');
  }

}
