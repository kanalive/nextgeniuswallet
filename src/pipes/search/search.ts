import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      if(it.name!=null){
        return it.name.toLowerCase().includes(terms); 
      }
      if(it.abbr!=null){
        return it.abbr.toLowerCase().includes(terms); 
      }
      if(it.url!=null){
        return it.name.toLowerCase().includes(terms); 
      }
      if(it.description!=null){
        return it.name.toLowerCase().includes(terms); 
      }
    });
  }
}
