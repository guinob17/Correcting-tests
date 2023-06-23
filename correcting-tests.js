let input = require('readline-sync')

//functions declaration
function header(){
    console.log('==========================')
    console.log(' *** CORRECTING TESTS *** ')
    console.log('==========================')
}

function footer(){
    console.log('==========================')
}

//variables declaration
const questions = 5
const students = 3
let register = []
let names = []
let studentsRegister = []
let averages = []
let sum_average = 0
let class_average = 0

//data input

//template register
header();
for(let cont = 0;cont < questions;cont++){
    register[cont] = input.question(`Register of the ${cont+1}th question: `)
}

//students register
console.clear();
header();
for(let cont = 0;cont < students;cont++){
    names[cont] = input.question(`Name of the ${cont+1}th student: `)
}

//each student's template register
for(let contA = 0;contA <students;contA++){
    console.clear();
    header();
    averages[contA] = 0

    console.log(`Type the register from the student ${names[contA]}`)
    for(let contQ = 0; contQ < questions;contQ++){
        studentsRegister[contQ] = input.question(`Reply of the ${contQ+1}th question: `)
        //processing data
        if(studentsRegister[contQ] == register[contQ]){
            averages[contA] += 2
        }
    }
    sum_average += averages[contA]
}

class_average = sum_average / students

//data output
console.clear();
header();
for(let cont = 0; cont < students;cont++){
    console.log(`${names[cont]} - media: ${averages[cont].toFixed(2)}`)
}
footer();
console.log(`The class average is: ${class_average.toFixed(2)}`)
footer();