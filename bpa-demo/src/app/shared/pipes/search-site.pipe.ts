import { Pipe, PipeTransform } from "@angular/core";
import { SiteDetails } from "../interface/site-details";

@Pipe({
    name:'searchSite'
})
export class SearchSitePipe implements PipeTransform {
    transform(value: Array<SiteDetails>, searchStr: string = '') {
        if(searchStr.length === 0)
        {
            return value;
        }
        const fileredvalue = value.filter( e => e?.name?.toLowerCase()?.includes(searchStr.toLowerCase()));
        return fileredvalue;
    }
}