"use strict"

let searchValue;
let maxValue = 100; // enter max value here

primeCycle:
    for(searchValue = 2; searchValue < maxValue; searchValue++) {
/*  This cycles through current value and tries to divide it by iterative number.
    Only in case where the current number does not divide on any number (2 – current-1),
    alert triggers, otherwise function breaks and the next number starts iterating.*/
        for(let i=2; i<searchValue; i++) {
            if(searchValue % i == 0) {
                continue primeCycle;
            }
                alert(`${searchValue} is a simple number`);
        }
}