// Activity 5: Privates Fields

// Task 9

class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }

  get balance() {
    return this.#balance;
  }
  deposit(amount) {
    if (amount < 100) {
      console.error("Deposit amount should be at least 100");
      return;
    }
    this.#balance += amount;
    console.log("Amount deposited successfully");
  }
  withdraw(amount) {
    if (amount >= this.#balance) {
      console.error("Insufficient Balance, Please deposit some amount");
      return;
    }
    if (amount <= 0) {
      console.error("Withdrawal amount must be greater than 0.");
      return;
    }
    this.#balance -= amount;
    console.log("Amount withdrawn successfully");
  }
}

// Task 10
const ac1 = new Account();
console.log(ac1.balance);
ac1.deposit(0);
console.log(ac1.balance);
ac1.withdraw(4000);
console.log(ac1.balance);
