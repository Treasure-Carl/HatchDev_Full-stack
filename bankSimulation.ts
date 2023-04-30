class BankingSystem {
  static newArr: Account[] = [];
  deposit(account: Account, money: number) {
    const newBalance = account.getBalance + money;
    account.setBalance = newBalance;

    return console.log("New balance is " + account.getBalance);
  }
  withdraw(account: Account, money: number) {
    if (account.getBalance > money) {
      const newBalance = account.getBalance - money;
      account.setBalance = newBalance;
      return console.log("New balance is " + account.getBalance);
    } else {
      console.log("Insufficient funds");
    }
  }
  transfer(sender: Account, receiver: Account, amount: number) {
    if (sender.getBalance > amount) {
      receiver.setBalance = receiver.getBalance + amount;
      sender.setBalance = sender.getBalance - amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}
class Account {
  static BankName: string = "Nithub Bank";

  private name: string;
  private accountNumber: number;
  private pin: number;
  private balance: number = 0;

  constructor(name: string, accountNumber: number, pin: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.pin = pin;
  }

  get getAccountNumber() {
    return this.accountNumber;
  }
  set setAccountNumber(result: number) {
    this.accountNumber = result;
  }
  get getName() {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }
  get getPin() {
    return this.pin;
  }
  get getBalance() {
    return this.balance;
  }

  set setBalance(balance: any) {
    this.balance = balance;
  }
}
const account = new Account("Jack", 2121427797, 1234);
const account2 = new Account("Bower", 190805505, 1234);
const account3 = new Account("Black", 303030303, 1234);
const newArr = [account, account2, account3];

const bank = new BankingSystem();
// bank.deposit(400)
// bank.withdraw(200)
// const button = document.querySelector("button");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const firstInput = document.querySelector("#input1") as HTMLInputElement;
const secondInput = document.querySelector("#input2") as HTMLInputElement;
const amountInput = document.querySelector("#input3") as HTMLInputElement;

const content = document.querySelector("#content");

btn1.addEventListener("click", function (e) {
  var div = document.createElement("div");
  if (firstInput && firstInput.value) {
    const foundAccount = newArr.some((account) => {
      return account.getAccountNumber === parseInt(firstInput.value);
    });
    if (foundAccount && amountInput.value != "") {
      bank.deposit(account, parseFloat(amountInput.value));
      // Create child elements within the div
      var p1 = document.createElement("p");
      p1.textContent = `You just deposited ${amountInput.value} into ${firstInput.value}`;
      var p2 = document.createElement("p");
      p2.textContent = `New Balance is ${account.getBalance}`;
      // Add the child elements to the div
      div.appendChild(p1);
      div.appendChild(p2);
    } else {
      var p1 = document.createElement("p");
      p1.textContent = `Invalid account number or amount`;
      var p2 = document.createElement("p");
      p2.textContent = `New Balance is ${account.getBalance}`;
      // Add the child elements to the div
      div.appendChild(p1);
    }
  }
  // Add the div to the content element
  content.innerHTML = "";
  content.appendChild(div);
});
btn2.addEventListener("click", function () {
  var div = document.createElement("div");
  if (firstInput && firstInput.value) {
    const foundAccount = newArr.some((account) => {
      return account.getAccountNumber === parseInt(firstInput.value);
    });
    if (foundAccount && amountInput.value != "") {
      bank.withdraw(account, parseFloat(amountInput.value));
      // Create child elements within the div
      var p1 = document.createElement("p");
      p1.textContent = `You just withdrawn ${amountInput.value} from ${firstInput.value}`;
      var p2 = document.createElement("p");
      p2.textContent = `New Balance is ${account.getBalance}`;
      // Add the child elements to the div
      div.appendChild(p1);
      div.appendChild(p2);
    } else {
      var p1 = document.createElement("p");
      p1.textContent = `Invalid account number or amount`;
      var p2 = document.createElement("p");
      p2.textContent = `New Balance is ${account.getBalance}`;
      // Add the child elements to the div
      div.appendChild(p1);
    }
  }
  // Add the div to the content element
  content.innerHTML = "";
  content.appendChild(div);
});
btn3.addEventListener("click", function () {
  var div = document.createElement("div");
  if (firstInput && firstInput.value) {
    const foundAccount1 = newArr.some((account1) => {
      return account1.getAccountNumber === parseInt(firstInput.value);
    });
    if (secondInput && secondInput.value) {
      const foundAccount2 = newArr.some((account2) => {
        return account2.getAccountNumber === parseInt(secondInput.value);
      });
      if (foundAccount1 && foundAccount2 && amountInput.value != "") {
        bank.transfer(account, account2, parseFloat(amountInput.value));
        // Create child elements within the div
        var p1 = document.createElement("p");
        p1.textContent = `You just transferred ${amountInput.value} from ${firstInput.value} to ${secondInput.value} `;
        var p2 = document.createElement("p");
        p2.textContent = `New Balance is ${account.getBalance}`;
        // Add the child elements to the div
        div.appendChild(p1);
        div.appendChild(p2);
      } else {
        var p1 = document.createElement("p");
        p1.textContent = `Invalid account number or amount`;
        var p2 = document.createElement("p");
        p2.textContent = `New Balance is ${account.getBalance}`;
        // Add the child elements to the div
        div.appendChild(p1);
      }
    }
  }
  // Add the div to the content element
  content.innerHTML = "";
  content.appendChild(div);
});
