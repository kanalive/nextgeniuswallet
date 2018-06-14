import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Transfer2Page } from './transfer2';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    Transfer2Page,
  ],
  imports: [
    NgxQRCodeModule,
    IonicPageModule.forChild(Transfer2Page),
  ],
})
export class Transfer2PageModule {}
