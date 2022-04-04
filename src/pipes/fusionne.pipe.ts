import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FusionnePipe implements PipeTransform {
  transform(value:{skills:string[]}, metadata: ArgumentMetadata) {
    if(metadata.type==='body'){
      return value.skills.map((s:string)=>s.toUpperCase()).join('-');
    }
    return value.skills;
  }
}
