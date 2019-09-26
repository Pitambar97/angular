import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  /*transform(value: any, ...args: any[]): any {
    const result=value.length>args[0]?value.substring(0,args[0])+"...":value;
    console.log(value,args);
    return result;
    
  }*/
 /* transform(value:any,arg?:any){
    return arg===''?value:value.filter(el=>el.title===arg);
  }*/

  transform(value:any,arg?:any){
    return arg===''|| arg===undefined?value:value.filter(el=>el.title.toLowerCase().indexOf(arg.toLowerCase())!==-1);
  }

}
