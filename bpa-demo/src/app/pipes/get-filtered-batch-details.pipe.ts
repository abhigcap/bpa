import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'getFilteredBatchDetails'})
export class GetFilteredBatchDetailsPipe implements PipeTransform {
    transform(value: any, batchId: string, formulations: string, status: string)
    {
        let filtered: any = value.filter((element:any) => 
            ((element['BATCH ID'] === batchId || batchId.trim() === '') && (formulations === 'All' || formulations === element['FORMULATIONS']) && (status ==='All' || element['STATUS'] === status)));
        return filtered;
    }
}