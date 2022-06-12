import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSearch'
})
export class TimeSearchPipe implements PipeTransform {

  transform(oldDate: number, ...args: unknown[]): any {
    let newDate: number = new Date().getTime();
    let differenceDate: number = newDate - oldDate

    if (differenceDate < 1000) {
      return 0 + ' seconds ago'
    }

    if (differenceDate < 60000) {
      let seconds = Math.round(differenceDate / 1000)
      return seconds + ' seconds ago'
    }

    if (differenceDate >= 60000) {
      let minutes = Math.round((differenceDate / 1000) / 60)
      if (minutes === 1) {
        return minutes + ' minute ago'
      } else {
        return minutes + ' minutes ago'
      }

    }
    if (differenceDate >= 3600000) {
      let houres = Math.round((differenceDate / 1000) / 3600)
      if (houres === 1) {
        return houres + ' houre ago'
      } else {
        return houres + ' houres ago'
      }
    }

  }

}
