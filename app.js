const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pw1 = document.querySelector("#pw-1");
const pw2 = document.querySelector("#pw-2");
const pwInputEl = document.querySelector("#inputPwLength");
pwInputEl.defaultValue = 10;

function generatePw() {
    pw1.textContent = ""
    for (let i = 0; i < pwInputEl.value; i++) {
        pw1.textContent += characters[Math.floor(Math.random()*characters.length + 1)]
    }
    pw2.textContent = ""
    for (let i = 0; i < pwInputEl.value; i++) {
        pw2.textContent += characters[Math.floor(Math.random()*characters.length + 1)]
    }
}

generatePw()
