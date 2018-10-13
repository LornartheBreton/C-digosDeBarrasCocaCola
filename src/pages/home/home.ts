import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManualPage } from '../manual/manual'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanOutput: string;
  manual=ManualPage;
  constructor(public navCtrl: NavController,
  private barcodeScanner: BarcodeScanner) {

  }

  cambiarPagina( pagina: number){
    switch(pagina){
      case 1:
        this.navCtrl.push(this.manual);
      break;
      default:
      break;

    }

  }

  scanBarcode(){

    this.barcodeScanner.scan().then(data => {

       this.scanOutput = data.text

     });

  }

}
