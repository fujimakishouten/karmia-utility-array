declare class KarmiaUtilityArray {
    unique(list: Array<any>): Array<any>;
    count(list: Array<any>, item: any): number;
    range(start: number, stop?: number, step?: number): Array<number>;
    flip(list: Array<any>): Array<any>;
    intersection(list1: Array<any>, list2: Array<any>): Array<any>;
    difference(list1: Array<any>, list2: Array<any>): Array<any>;
}

declare function karmia_utility_array(options: object): KarmiaUtilityArray;
export = karmia_utility_array;
