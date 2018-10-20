import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LenovoPage } from './lenovo';

@NgModule({
  declarations: [
    LenovoPage,
  ],
  imports: [
    IonicPageModule.forChild(LenovoPage),
  ],
})
export class LenovoPageModule {}
