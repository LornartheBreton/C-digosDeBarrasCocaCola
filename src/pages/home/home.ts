import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanOutput: string;
  constructor(public navCtrl: NavController,
  private barcodeScanner: BarcodeScanner) {

  }
  scanBarcode(){

    this.barcodeScanner.scan().then(data => {

       this.scanOutput = data.text

     });

  }

}
