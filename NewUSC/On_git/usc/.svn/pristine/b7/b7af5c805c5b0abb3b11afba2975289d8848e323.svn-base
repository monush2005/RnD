(function(_) {
    'use strict';
    _.mixin({
        trimAppDetails, //function removes extra details from app obj leaving appid and appname
        trimServiceDetails, //function removes extra details from service obj leaving serviceid and servicename
        markSelectedBy, //marks items in an array as 'selected' for an array of ids passed and the key to match those id to
        exists, //returns corrosponding boolean for existence of item in array
        existsBy, //  same as above, but checks based on key
        parseInteger, // parses integer for base 10 always, if NaN, returns zero
        parseFloatSafe, //if NaN, returns zero
        swap, //swaps values at indices or keys
        insertMissing, // inserts null for missing data, eg data for few dates is not available
        insertSorted, // inserts element in a sorted array
        insertSortedBy, //inserts element in a sorted array based on proprty
        chunkReverse,
        groupBynSum,
        sortMutipleArrays //sorts an object of same length arrays with respect to a particular array
    })

    function groupBynSum(data, gbKeyOrFn, sumKey) {
        return _(data).groupBy(gbKeyOrFn).map((item, key) => {
            return {
                [_.isFunction(gbKeyOrFn)?gbKeyOrFn(item):gbKeyOrFn]: key,
                [sumKey]: _(item).map(sumKey).map(_.parseInteger).sum()
            }
        }).value();
    }

    function chunkReverse(array, num) {
        let res = _(array).reverse().chunk(num).reverse().map(_.reverse).value();
        _.reverse(array);
        return res;
    }

    function swap(array, index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    function trimAppDetails(app) {
        return {
            appid: app.appid,
            appname: app.appname
        }
    }

    function trimServiceDetails(service) {
        return {
            serviceid: service.serviceid,
            servicename: service.servicename
        }
    }

    function markSelectedBy(arrayToMark, ids, key, selectedKey = 'selected') {
        return _.map(arrayToMark, (item) => {
            item[selectedKey] = _.exists(ids, item[key]);
            return item;
        })
    }

    function exists(arrayToSearchIn, item) {
        return _.indexOf(arrayToSearchIn, item) > -1;
    }

    function existsBy(arrayToSearchIn, item, key) {
        var matchObj = {};
        matchObj[key] = item
        return !!_.find(arrayToSearchIn, matchObj);
    }

    function parseInteger(num) {
        var val = parseInt(num);
        if (isNaN(val))
            return 0;
        else return val;
    }

    function parseFloatSafe(num) {
        var val = parseFloat(num);
        if (isNaN(val))
            return 0;
        else return val;
    }

    function insertMissing(masterArray, partialArray, key, valueKeys) {
        return _(masterArray).map((item) => {
            var match = {}
            match[key] = item;
            var value = _.find(partialArray, match);

            if (value) {
                return value;
            } else {
                var returnObj = {};
                returnObj[key] = item;
                if (!(valueKeys instanceof Array))
                    valueKeys = [valueKeys];

                _.each(valueKeys, (valueKey) => {
                    returnObj[valueKey] = null;
                })
                return returnObj;
            }
        }).value();
    }


    function insertSorted(array, value) {
        array.splice(_.sortedIndex(array, value), 0, value);
    }

    function insertSortedBy(array, value, by) {
        let iterator;
        if (typeof value[by] == "string")
            iterator = item => item[by].toLowerCase();
        else
            iterator = by;
        array.splice(_.sortedIndexBy(array, value, iterator), 0, value);
    }

    function sortMutipleArrays(arrays, keyToSort, order) {
        let allKeys = _.keys(arrays);
        let mergedArray = _.map(arrays[keyToSort], (item, index) => {
            let returnValue = {};
            _.each(allKeys, (key) => {
                returnValue[key] = arrays[key][index];
            })
            return returnValue;
        })
        
        mergedArray = _.orderBy(mergedArray, keyToSort, [order]);

        let unmergedObject = {};
        _.each(allKeys, (key) => {
            unmergedObject[key] = _.map(mergedArray, key);
        })
        return unmergedObject;
    }

})(_);