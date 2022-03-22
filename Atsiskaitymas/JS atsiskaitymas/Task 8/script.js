/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum = (number1, number2) => {
        console.log(`Skaičius 1 + skaičius 2 = ${number1+number2}`)
    }
    subtraction = (number1, number2) => {
        console.log(`Skaičius 1 - skaičius 2 = ${number1 - number2}`)
        console.log(`Skaičius 2 - skaičius 1 = ${number2 - number1}`)

    }
    multiplication = (number1, number2) => {
        console.log(`Skaičius 1 * skaičius 2 = ${number1*number2}`)
    }
    division = (number1, number2) => {
        console.log(`Skaičius 1 / skaičius 2 = ${number1 / number2}`)
        console.log(`Skaičius 2 / skaičius 1 = ${number2 / number1}`)
    }
}

let veiksmai = new Calculator

veiksmai.sum(10,5);
veiksmai.subtraction(10,5)
veiksmai.multiplication(10,5)
veiksmai.division(10,5)