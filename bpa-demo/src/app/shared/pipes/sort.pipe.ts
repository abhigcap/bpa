import { Pipe, PipeTransform } from "@angular/core";
import { SiteDetails } from "../interface/site-details";

export type SortOrder = 'asc' | 'desc' | 'unsorted';

@Pipe({
    name:'sort'
})
export class SortPipe implements PipeTransform {
    transform(value: Array<SiteDetails>, sortOrder: SortOrder = 'unsorted') {
        let sortedValue: Array<SiteDetails> = [];
        if(sortOrder === 'unsorted') {
            return value;
        }
        else if (sortOrder === 'asc') {
            const sortedName = value.map(e => e.name).sort();
            sortedName.forEach(element => {
                let item = value?.find(e => e?.name === element);
                if (item){
                    sortedValue.push(item);
                }
            });
        }
        else {
            const sortedName = value.map(e => e.name).sort().reverse();
            sortedName.forEach(element => {
                let item = value?.find(e => e?.name === element);
                if (item){
                    sortedValue.push(item);
                }
            });
        }
        return sortedValue;
    }
}