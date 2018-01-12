import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MapComponent } from '@ioniczoo/eagle-map-component';

@NgModule({
  declarations: [
    HomePage,
    MapComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
