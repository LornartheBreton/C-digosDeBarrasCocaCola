import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LenovoPage } from '../lenovo/lenovo';
import { SystemsPage } from "../systems/systems";
import { DataProvider } from '../../providers/data/data';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { Storage } from "@ionic/storage";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanOutput: string;
  marca:string;
  determiner=0;
  lenovo=LenovoPage;
  systems=SystemsPage;
  items=[];
  computadora={
    PN: "",
    SN: "",
    RAM: "",
    CPU:"",
    URL:"",
    DEP: " ",
    MAR: ""
  };
  constructor(public navCtrl: NavController,
  private barcodeScanner: BarcodeScanner,
  private iab: InAppBrowser,
  public alertCtrl: AlertController,
  public tasksService: TasksServiceProvider, 
  public navParams: NavParams,
  public storage: Storage) {
    this.items=this.navParams.get("items");
  }

  switchPage(){
    this.navCtrl.push(this.lenovo, {items: this.items});
  }

  scanBarcode(){
    //this.scanOutput="mxl310186c";
    this.barcodeScanner.scan().then(data => {

       this.scanOutput = data.text.toLowerCase();

     });
     
  }
  lookup(){
    if(this.scanOutput==""||this.scanOutput==null
    || this.computadora.MAR==""||this.computadora.MAR==null){
      let alert= this.alertCtrl.create({
        title: "Error",
        subTitle: "Faltan datos",
        buttons: ["OK"]
      });
      alert.present();
    }else{
     if(this.computadora.MAR=="Dell"){
       const browser =
       this.iab.create('https://www.dell.com/support/home/mx/es/mxbsdt1/product-support/servicetag/'
       + this.scanOutput);
       this.determiner=1;
     }
     if(this.computadora.MAR=="HP"){
       const browser =
       this.iab.create('https://support.hp.com/mx-es/search?q='
       + this.scanOutput+'&filter=-1');
       this.determiner=1;
     }
    }

  }
  registerDevice(){
    if(this.scanOutput==""|| this.scanOutput==null||
    this.computadora.MAR==""||this.computadora.DEP==""
    ||this.computadora.MAR==null|| this.computadora.DEP==null){
      let alert = this.alertCtrl.create({
        title: "Error",
        subTitle: "Faltan datos",
        buttons: ["OK"]
      });
      alert.present();
    }else{
      if(this.computadora.MAR=="Dell"){
        this.computadora.URL='https://www.dell.com/support/home/mx/es/mxbsdt1/product-support/servicetag/'
        + this.scanOutput;
      }
      if(this.computadora.MAR=="HP"){
        this.computadora.URL='https://support.hp.com/mx-es/search?q='
        + this.scanOutput+'&filter=-1';
      }
      this.items.push(this.computadora);
      this.storage.set('systems', JSON.stringify(this.items));
      this.navCtrl.push(this.systems,{value:1});
    }


  }
}
