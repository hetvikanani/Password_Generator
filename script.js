const passwordShow = document.getElementById("pw");
const copyBtn = document.getElementById("copybtn");
const passwordLength = document.getElementById("len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");

const UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerLetters = "abcdefghijklmnopqrstuvwxyz";
const Number = "1234567890";
const Symbol = "!@#$%^&*()+=";

const getUppercase = () => {
    const random = UpperLetters[Math.floor(Math.random() * UpperLetters.length)];
    return random;
};

const getLowercase = () => {
    const random = LowerLetters[Math.floor(Math.random() * LowerLetters.length)];
    return random;
};

const getNumber = () => {
    const random = Number[Math.floor(Math.random() * Number.length)];
    return random;
};

const getSymbol = () => {
    const random = Symbol[Math.floor(Math.random() * Symbol.length)];
    return random;
};

const generateX = () => {
    const arr = [];
    if (upper.checked) arr.push(getUppercase());
    if (lower.checked) arr.push(getLowercase());
    if (number.checked) arr.push(getNumber());
    if (symbol.checked) arr.push(getSymbol());
    console.log(arr);
    return arr[Math.floor(Math.random() * arr.length)];
};

generateBtn.addEventListener("click", () => {
    let pwdLength = passwordLength.value;
    let password = "";
    for (let i = 0; i < pwdLength; i++) {
        const x = generateX();
        password += x;
    }
    passwordShow.innerText = password;
});
