import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokensPage } from './tokens';
import { PipeModule } from '../../app/pipeModule';

@NgModule({
  declarations: [
    TokensPage,
  ],
  imports: [
    IonicPageModule.forChild(TokensPage),
    PipeModule
  ]
})
export class TokensPageModule {}
