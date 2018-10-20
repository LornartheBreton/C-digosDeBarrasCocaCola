import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {
  marca:string;
  modelo:string;
  equipo:string;
  departamento:string;
  resultante: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualPage');
  }

  inputData(){
    this.resultante="AC.MX"+this.marca.charCodeAt(0)+this.marca.charCodeAt(1)
    +this.modelo+this.equipo+this.departamento+Math.floor((Math.random() * 100)).toString();
  }

}
