import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'getAllBatchStatus'})
export class GetBatchStatusPipe implements PipeTransform {
    transform(value: any)
    {
        let status: Array<string> = [];
        value.forEach((element: any) => {
            if (element.STATUS !== undefined && !status.includes(element.STATUS)) {
                status.push(element?.STATUS.toString());
            }
        });
        return status;
    }
}