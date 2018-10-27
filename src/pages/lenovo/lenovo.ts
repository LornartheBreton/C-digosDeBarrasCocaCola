import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LenovoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lenovo',
  templateUrl: 'lenovo.html',
})

export class LenovoPage {
  model: string;
  ram: number;
  storage: number;
  gpu: string;
  cpu: string;
  os: string;
  home=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LenovoPage');
  }
  switchPage(){
    this.navCtrl.push(this.home);
  }

}
