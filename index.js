// Your code here
const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
   return function(adj="special") {
       return `You are ${string}${adj}${string}!`
    }
}

const Calculator = {
    add: function add(x, y) {
        return x + y
    },
    subtract: function subtract(x, y) {
        return x - y
    },
    multiply: function multiply(x, y) {
        return x * y
    },
    divide: function divide(x,y) {
        return x / y
    }
}

function actionApplyer(int, arr) {
    let a = int
    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a)
    }

    return a
}