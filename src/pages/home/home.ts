import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanOutput: string;
  marca:string;
  determiner=0;
  constructor(public navCtrl: NavController,
  private barcodeScanner: BarcodeScanner,
  private iab: InAppBrowser) {

  }

  scanBarcode(){
    this.scanOutput="mxl310186c";
    /*this.barcodeScanner.scan().then(data => {

       this.scanOutput = data.text.toLowerCase();

     });*/


     if(this.marca=="dell"){
       const browser =
       this.iab.create('https://www.dell.com/support/home/mx/es/mxbsdt1/product-support/servicetag/'
       + this.scanOutput);
       this.determiner=1;
     }
     if(this.marca=="hp"){
       const browser =
       this.iab.create('https://support.hp.com/mx-es/search?q='
       + this.scanOutput+'&filter=-1');
       this.determiner=1;
     }
     if(this.marca=="hp"){
       this.determiner=0;
     }

  }

}
