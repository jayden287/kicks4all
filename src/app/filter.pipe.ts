import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {

  transform(languages: any[], searchInput: any): any[]{     
    if(!searchInput) {
        return  [];
    }
   searchInput = searchInput.toLowerCase();
   return languages.filter(
       x =>x.toLowerCase().includes(searchInput)
   )
 }
}