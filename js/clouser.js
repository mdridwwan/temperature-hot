// const bank = owner => {
//     balance = 0;
//     return amount => {
//         balance += amount;
//         return balance;
//     }
// }
const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}
const amrBank = bank('amr');
console.log(amrBank.deposit(200));
console.log(amrBank.deposit(120));
console.log(amrBank.deposit(300));
console.log(amrBank.withdraw(500));