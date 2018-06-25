import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countColour'
})
export class CountColorPipe implements PipeTransform {

  transform(fabrics: any[], colour: string): number {
    if (!fabrics || fabrics.length === 0) return 0;
    return fabrics.reduce((count, fabric) => fabric.colour === colour ? count + 1 : count, 0);
  }

}
