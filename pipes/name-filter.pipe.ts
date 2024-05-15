import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchText: string): any[] {
    let searchTextLowerCase = searchText.toLowerCase();
    return pets.filter(pet => {
      return pet.name.toLowerCase().includes(searchTextLowerCase);
    });
  }
}
