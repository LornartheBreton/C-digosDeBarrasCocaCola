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
  constructor(public navCtrl: NavController,
  private barcodeScanner: BarcodeScanner,
  private iab: InAppBrowser) {

  }

  scanBarcode(){
    //this.scanOutput="f112jl2";
    this.barcodeScanner.scan().then(data => {

       this.scanOutput = data.text

     });
     const browser = this.iab.create('https://www.dell.com/support/home/mx/es/mxbsdt1/product-support/servicetag/'+ this.scanOutput);


  }

}
