import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr'
})
export class SqrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*value;
  }

}
