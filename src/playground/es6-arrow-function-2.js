const user = {
    name: 'Falgun',
    places: ['Surat', 'Junagadh', 'Bhavnagar'],
    printPlacesLived() {
        return this.places.map((place) => this.name+' has lived in '+place)
    }
};

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1, 4, 7],
    multiplyBy: 12,
    multiply() { // same as multiply: function() {} | We can not use => fun here cause then we can not access 'this' here.
        return this.numbers.map((number) => number*this.multiplyBy)
    }
};

console.log(multiplier.multiply())