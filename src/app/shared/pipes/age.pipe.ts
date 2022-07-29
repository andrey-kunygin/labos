import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  pure: true,
})
export class AgePipe implements PipeTransform {
  transform(date: string): number | null {
    if (!date) {
      return null;
    }
    return Math.abs(
      new Date(Date.now() - new Date(date).getTime()).getUTCFullYear() - 1970
    );
  }
}
