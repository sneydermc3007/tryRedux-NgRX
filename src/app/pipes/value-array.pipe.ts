import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueArray'
})
export class ValueArrayPipe implements PipeTransform {

  transform(value: {[key: string]: any }): any[] {
    return Object.values(value);
  }

}
