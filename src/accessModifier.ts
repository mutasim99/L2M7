class BankAccount {
    name: string;
    readonly accId: number;
    private accountBalance: number;

    constructor(name: string, accId: number, accountBalance: number) {
        this.name = name;
        this.accId = accId;
        this.accountBalance = accountBalance;
    };

    addBalance = (balance: number) => {
        return this.accountBalance = this.accountBalance + balance;

    }
};


const mutasimBackAcc = new BankAccount('mutasim', 555, 10);
mutasimBackAcc.addBalance(500);
console.log(mutasimBackAcc);





