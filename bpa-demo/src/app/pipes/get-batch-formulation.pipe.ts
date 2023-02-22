import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'getAllBatchFormulations'})
export class GetBatchFormulationsPipe implements PipeTransform {
    transform(value: any)
    {
        let formulations: Array<string> = [];
        value.forEach((element: any) => {
            if (element.STATUS !== undefined && !formulations.includes(element.STATUS)) {
                formulations.push(element?.FORMULATIONS.toString());
            }
        });
        return formulations;
    }
}