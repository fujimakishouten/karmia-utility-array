/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



/**
 * KarmiaUtilityArray
 *
 * @class
 */
class KarmiaUtilityArray {
    /**
     * Properties
     */
    public unique = KarmiaUtilityArray.unique;
    public count = KarmiaUtilityArray.count;
    public range = KarmiaUtilityArray.range;
    public flip = KarmiaUtilityArray.flip;
    public intersection = KarmiaUtilityArray.intersection;
    public difference = KarmiaUtilityArray.difference;

    /**
     * Removes duplicate values from an array
     *
     * @param   {Array} list
     * @returns {Array}
     */
    static unique(list: Array<any>): Array<any> {
        return Array.from(new Set(list));
    }


    /**
     * Count item in list
     *
     * @param   {Array} list
     * @param   {*} item
     * @returns {number}
     */
    static count(list: Array<any>, item: any): number {
        return list.reduce(function (collection, value) {
            if (item === value) {
                collection = collection + 1;
            }

            return collection;
        }, 0);
    }

    /**
     * Get array of integer from start to end
     *
     * @param   {number} start
     * @param   {number} [stop]
     * @param   {number} [step=1]
     * @returns {Array}
     */
    static range(start: number, stop?: number, step=1): Array<number> {
        if (stop) {
            step = step || 1;
        } else {
            stop = start;
            start = 0;
            step = 1;
        }

        const length = Math.ceil((stop - start) / step),
            result = new Array(length);

        let i = 0;
        while (i < length) {
            result[i++] = start;
            start = start + step;
        }

        return result;
    }

    /**
     * Get object that exchanges index with their value
     *
     * @param   {Array} list
     * @returns {Object}
     */
    static flip(list: Array<any>): Array<any> {
        return list.reduce(function (collection, item, index) {
            collection[item] = index;

            return collection;
        }, {});
    }

    /**
     * Get intersection of two arrays
     *
     * @param   {Array} list1
     * @param   {Array} list2
     * @returns {Array}
     */
    static intersection(list1: Array<any>, list2:Array<any>): Array<any> {
        const dictionary = KarmiaUtilityArray.flip(list2);

        return Array.from(new Set(list1.filter(function (value) {
            return (value in dictionary);
        })));
    }

    /**
     * Get difference of two arrays
     *
     * @param   {Array} list1
     * @param   {Array} list2
     * @returns {Array}
     */
    static difference(list1: Array<any>, list2: Array<any>): Array<any> {
        const intersection = KarmiaUtilityArray.flip(KarmiaUtilityArray.intersection(list1, list2));

        return [].concat(list1, list2).filter(function (item) {
            return !(item in intersection);
        });
    }
}


// Export module
export = KarmiaUtilityArray;



/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
