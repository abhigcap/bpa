import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'getFilteredBatches'})
export class GetFilteredBatchesPipe implements PipeTransform {
    transform(value: any, batchId: string, formulations: string, status: string)
    {
        let filtered: any = value.filter((element:any) => 
            ((element['BATCH ID'].includes(batchId) || batchId.trim() === '') && (formulations === 'All' || element['FORMULATIONS'].includes(formulations) && (status ==='All' || element['STATUS'].includes(status)))));
        return filtered;
    }
}