import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Éste archivo solo tiene unas variables locales que iguala en el constructor
  a los elementos del diccionario recibido.
 */

@IonicPage()
@Component({
  selector: 'page-specs',
  templateUrl: 'specs.html',
})
export class SpecsPage {
  CPU: string;
  RAM: string;
  PN: string;
  SN: string;
  DEP: string;
  URL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CPU=this.navParams.get('CPU');
    this.RAM=this.navParams.get('RAM');
    this.PN=this.navParams.get('PN');
    this.SN=this.navParams.get('SN');
    this.URL=this.navParams.get('URL');
    this.DEP=this.navParams.get('DEP');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecsPage');
  }

}
