import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { RestfulProvider } from '@ioniczoo/pigeon-restful-provider';

/**
 * Generated class for the SalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
})
export class SalesPage {
  @ViewChild('barCanvas') barCanvas;

  sales: any = [];
  barChart: any;
  month: any;

  constructor(private restful: RestfulProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.month = new Date().getMonth() + 1;
    console.log(this.month)
  }

  ionViewDidLoad() {
    this.restful.request('get', '/sales/1/', {}, data => {
      this.sales = data;
      console.log(this.sales)
      // this.sales.map(x => {
      //
      // });
      this.top5();
    })
  }

  top5() {
    var lbls = [];
    var vls = [];

    lbls = ['mar', 'abr', 'mai', 'jun', 'jul', 'ago'];
    vls = [2, 1, 12, 13, 45, 88];

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: lbls,
        datasets: [{
          label: '★',
          data: vls,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

}
