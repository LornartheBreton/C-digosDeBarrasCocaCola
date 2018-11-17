import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpecsPage } from '../specs/specs';
/**
 * Generated class for the SystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-systems',
  templateUrl: 'systems.html',
})
export class SystemsPage {
  system=0;
  specs=SpecsPage;
  systems:any[]=[];
  temp={
    CPU:"",
    RAM:"",
    PN:"",
    SN:"",
    URL:"",
    DEP: "",
    MAR: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(this.navParams.get('computadora').CPU);
    this.temp.CPU=this.navParams.get('CPU');
    this.temp.RAM=this.navParams.get('RAM');
    this.temp.PN=this.navParams.get('PN');
    this.temp.SN=this.navParams.get('SN');
    this.temp.URL=this.navParams.get('URL');
    this.temp.DEP=this.navParams.get('DEP');
    this.temp.MAR=this.navParams.get('MAR');
    this.systems.push(this.temp);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemsPage');
  }
  seeSpecs(thing: any){
    this.navCtrl.push(this.specs, thing)
  }

}
