// class Shapes{
//     area: number = 0;
//     name: string;

//     constructor(name: string){ // Argument constructor
//         this.name = name;
//     }

//     // Setters and getters

//     set calculatedArea(result: number){
//         this.area = result;
//     }

//     get areaOfShape(): number{
//         return this.area;
//     }

//     calculateArea(){
//         return this.area * 2;
//     }

// }

// const sqr = new Shapes("square");

// Create a Bank System using OOP
// This bank system has Account for Users
// Simulate these operations using class methods and properties
// 1. Depositing into the bank
// 2. Withdrawing from the account
// 3. Transferring to another bank [Assignment]

// The Account class for the user should contain properties such as
// 1. Bank name
// 2. The owner
// 3. Balance
// 4. Account Number

// Implement methods such as
// 1. Deposit
// 2. Withdraw
// 3. Transfer[Assignment]

// make aa properties of the account class private and assign getters to each of them
// feel free to add any other thing you think

class UsersAccount {
  private _bankName: string;
  private _owner: string;
  private _balance: number;
  private _pin: number;

  constructor(bankName: string, owner: string, balance: number, pin: number) {
    this._bankName = bankName;
    this._owner = owner;
    this._balance = balance;
    this._pin = pin;
  }
  // Setting getters for the private properities
  get bankName() {
    return this._bankName;
  }
  get owner() {
    return this._owner;
  }
  get balance() {
    return this._balance;
  }
  get pin() {
    return this._pin;
  }

  // Simulate these operations using class methods and properties
  // Depositing into the bank
  public deposit(pin: number, amount: number): string {
    if (this._pin !== pin) {
      return `The pin number ${pin} you entered is incorrect`;
    } else {
      this._balance += amount;
    }
    return `${amount}$ successfully deposited`;
  }

  // Simulate these operations using class methods and properties
  // withdraw
  public withdraw(pin: number, amount: number): string {
    if (this._pin !== pin) {
      return `Invalid pin entered`;
    } else if (amount > this._balance) {
      return `Insufficent funds`;
    } else {
      this._balance -= amount;
    }
    return `Your withdraw of ${amount}$ was successful, your balance is ${this._balance}$`;
  }
  // Simulate these operations using class methods and properties
  // Transfer
  public transfer(pin: number, amount: number, account: UsersAccount) {
    if (this._pin !== pin) {
      return `Invalid pin entered`;
    } else if (amount > this._balance) {
      return `Insufficent funds`;
    } else {
      this._balance -= amount;
      account.deposit(pin, amount);
      // var TreasureBankDetails = this._balance += amount;
    }
    return `Your transfer of ${amount}$ was successful, your balance is ${this._balance}$`;
  }
}
const PaschalBankDetails = new UsersAccount("First-Bank", "Paschal", 400, 2004);
const TreasureBankDetails = new UsersAccount(
  "Access-Bank",
  "Treasure",
  100,
  2005
);

console.log(PaschalBankDetails.transfer(2004, 200, TreasureBankDetails));
console.log(TreasureBankDetails);
