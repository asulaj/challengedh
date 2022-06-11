import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if (value < 0.3) {
      return 'Bassa'
    }

    if (0.31 < value || 0.5 < value) {
      return 'Media'
    }

    if (value > 0.5) {
      return 'Alta'
    }

  }

}
