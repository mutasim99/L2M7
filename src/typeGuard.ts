//* using typeof
type AlphaNumeric = {
    num1: number | string;
    num2: number | string
}

const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    } else {
        return num1.toString() + num2.toString();
    };
};

//* using guard

type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: string;
};

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
       return console.log(`${user.name} is an Amin`);
        
    }else{
       return  console.log(`${user.name} is a normal user`);
        
    }
}