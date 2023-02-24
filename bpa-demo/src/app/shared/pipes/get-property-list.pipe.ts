import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'getPropertyList'})
export class GetPropertyListPipe implements PipeTransform {
    transform(value: any, propName: string, isUniqueItems = false)
    {
        let items: Array<string> = [];
        value.forEach((element: any) => {
            if (element[propName] !== undefined && ((!items.includes(element[propName]) && isUniqueItems) || !isUniqueItems)) {
                items.push(element[propName].toString());
            }
        });
        return items;
    }
}