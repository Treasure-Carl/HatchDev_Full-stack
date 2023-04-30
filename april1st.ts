// interface myProps {
//   data?: Array<string>;
//   length?: number;
//   isValid?: boolean;
// }

// function getData( myProps) {
//    console.log(myProps) 
// }
// type param = {
//   data?: Array<string> | Array<number> | undefined;
//   length?: number;
//   isValid?: boolean;
// }

// class April {
//   name: string;
//   age: number;
//   constructor(myName: string, myAge: number) {
//     this.name = myName;
//     this.age = myAge;
//   }
//     birthdayList(){
//         return this.age++
    
//   }
// }
// const newMonth = new April("Paschal", 2)
// console.log(newMonth)

class Calculator {
  private result: number;
  constructor() {
    this.result = 0;
  }

  addition(num1: number, num2: number) {
    const addNum = num1 + num2;
    this.result = addNum;
  }
  substration(num1: number, num2: number) {
    const subNum = num1 - num2;
    this.result = subNum;
  }
  divition(num1: number, num2: number) {
    if (num2 === 0) {
      throw new Error("it cannno go");
    }
    const divNum = num1 / num2;
    this.result = divNum;
  }
  multiplication(num1: number, num2: number) {
    
    const mulNum = num1 * num2;
    this.result = mulNum;
  }
  getResult(){
    return this.result;
  }
}
const newCalc = new Calculator()
console.log(newCalc.addition(2, 3))
console.log(newCalc.getResult())


