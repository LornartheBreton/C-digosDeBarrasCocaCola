import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
/*
  Ésta página permite definir manualmente los atributos que normalmente daría el link 
  ya que Lenovo no tiene página de soporte equivalente a la de HP o la de Dell.
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
