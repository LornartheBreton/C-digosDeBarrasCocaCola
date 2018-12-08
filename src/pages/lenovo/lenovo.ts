import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
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
  systems=SystemsPage;
  items=[];
  computadora={
    PN: "",
    SN: "",
    RAM: "",
    CPU:"",
    URL:"",
    DEP: " ",
    MAR: "Lenovo"
  };
  //systems=SystemsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.items=this.navParams.get("items");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LenovoPage');
  }
  givePage(){
    console.log(this.computadora.CPU);
    this.items.push(this.computadora);
    this.storage.set('systems', JSON.stringify(this.items));
    this.navCtrl.push(this.systems,{value:1});
  }

}
