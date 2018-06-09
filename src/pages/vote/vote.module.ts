import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotePage } from './vote';
import { PipeModule } from '../../app/pipeModule';
@NgModule({
  declarations: [
    VotePage,
  ],
  imports: [
    IonicPageModule.forChild(VotePage),
    PipeModule
  ],
  exports:[
  ]
})
export class VotePageModule {}
