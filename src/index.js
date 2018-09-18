class Sorter {

    constructor() {
        this.array = [];
        this.compareFunction = null;
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        var sortElements = [];

        function compare(a, b) {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }

            return 0;
        }

        indices.sort(compare);

        for(var i = 0; i<indices.length; i++){
            sortElements.push(this.array[ indices[i] ]);
        }

        if(this.compareFunction){
            sortElements.sort(this.compareFunction);
        } else {
            sortElements.sort(compare);
        }

        for( i = 0; i < indices.length; i++){
            this.array[ indices[i] ] = sortElements[i];
        }

        return this.array;
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}


module.exports = Sorter;