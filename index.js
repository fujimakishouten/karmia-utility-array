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
    constructor() {
        /**
         * Properties
         */
        this.unique = KarmiaUtilityArray.unique;
        this.count = KarmiaUtilityArray.count;
        this.range = KarmiaUtilityArray.range;
        this.flip = KarmiaUtilityArray.flip;
        this.intersection = KarmiaUtilityArray.intersection;
        this.difference = KarmiaUtilityArray.difference;
    }
    /**
     * Removes duplicate values from an array
     *
     * @param   {Array} list
     * @returns {Array}
     */
    static unique(list) {
        return Array.from(new Set(list));
    }
    /**
     * Count item in list
     *
     * @param   {Array} list
     * @param   {*} item
     * @returns {number}
     */
    static count(list, item) {
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
    static range(start, stop, step = 1) {
        if (stop) {
            step = step || 1;
        }
        else {
            stop = start;
            start = 0;
            step = 1;
        }
        const length = Math.ceil((stop - start) / step), result = new Array(length);
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
    static flip(list) {
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
    static intersection(list1, list2) {
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
    static difference(list1, list2) {
        const intersection = KarmiaUtilityArray.flip(KarmiaUtilityArray.intersection(list1, list2));
        return [].concat(list1, list2).filter(function (item) {
            return !(item in intersection);
        });
    }
}
module.exports = KarmiaUtilityArray;
