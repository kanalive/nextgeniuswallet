import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotePage } from './vote';
import { SearchPipe } from '../../pipes/search/search';
@NgModule({
  declarations: [
    VotePage,
    SearchPipe
  ],
  imports: [
    IonicPageModule.forChild(VotePage),
  ],
  exports: [
    SearchPipe
  ]
})
export class VotePageModule {}
