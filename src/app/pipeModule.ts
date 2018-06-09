import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPipe } from '../pipes/search/search';

@NgModule({
  declarations: [
      SearchPipe
  ],
  imports: [
      
  ],
  exports:[
    SearchPipe
  ],
  providers:[ 
    SearchPipe 
  ]

})
export class PipeModule {}
