'use strict';
// BMI = mass / height ** 2
const mark ={
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI = this.mass/this.height ** 2;
        return this.BMI;
    }
}

const john ={
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI: function() {
        this.BMI = this.mass/this.height ** 2;
        return this.BMI;
    }
}
console.log(`Johns BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? "higher" : "lower"} than Mark's (${mark.calcBMI()})`);
