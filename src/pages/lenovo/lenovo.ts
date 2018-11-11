import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LenovoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { SystemsPage } from '../systems/systems';
@IonicPage()
@Component({
  selector: 'page-lenovo',
  templateUrl: 'lenovo.html',
})
export class LenovoPage {
  computadora={
    PN: "",
    SN: "",
    RAM: "",
    CPU:"",
    URL:"",
    DEP: " "
  };
  systems=SystemsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LenovoPage');
  }
  givePage(){
    console.log(this.computadora.CPU);
    this.navCtrl.push(this.systems, this.computadora);
  }

}
