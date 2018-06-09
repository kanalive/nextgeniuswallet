import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokenDetailPage } from './token-detail';

@NgModule({
  declarations: [
    TokenDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TokenDetailPage),
  ],
})
export class TokenDetailPageModule {}
