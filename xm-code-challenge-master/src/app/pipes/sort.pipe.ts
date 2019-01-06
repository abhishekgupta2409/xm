import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, filterString: string): any {

    if (filterString === '') {
      return value;
    }
    const resultArray = [];
    if (filterString === 'asc') {
      return value.sort((a, b) => (a.name.split(' ')[1] >
        b.name.split(' ')[1]) ? 1 : ((b.name.split(' ')[1] > a.name.split(' ')[1]) ? -1 : 0));
    } else {
      return value.sort((a, b) => (a.name.split(' ')[1] >
        b.name.split(' ')[1]) ? -1 : ((b.name.split(' ')[1] > a.name.split(' ')[1]) ? 1 : 0));
    }
  }

}
