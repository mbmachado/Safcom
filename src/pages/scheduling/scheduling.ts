import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchedulingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheduling',
  templateUrl: 'scheduling.html',
})
export class SchedulingPage {
  summary: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  itemTapped(ev) {
    let summary = this.summary;
    this.navCtrl.push('SummaryPage', {'summary': summary});
  }

}
