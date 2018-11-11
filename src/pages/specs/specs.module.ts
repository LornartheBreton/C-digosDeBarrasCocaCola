import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecsPage } from './specs';

@NgModule({
  declarations: [
    SpecsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecsPage),
  ],
})
export class SpecsPageModule {}
