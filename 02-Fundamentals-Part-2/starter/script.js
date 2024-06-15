'use strict'; 

const teacher = {
    firstName: `Jonas`,
    lastName : 'Schmenet',
    age : 27,
    friends : [`steve`, `micheal`, `mnm`],
    hasDrivingLicense : true,

    licenseStatus: function(){
        let status = (this.hasDrivingLicense) ? "a" : "no";
        return status;
    }
};

console.log(`${teacher.firstName} has ${teacher.friends.length } and his best friend name is ${teacher.friends[1]} and he has ${teacher.licenseStatus()} driving license`);














