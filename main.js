import { Rdm, Alphabets } from "./func.js";

const word = document.getElementById("word");
const ans = document.getElementById("answer");
const smt = document.getElementById("submit");
const next = document.getElementById("next");
const description = document.getElementById("description")
let key;

let generateWrd = () => {
    key = Rdm();
    word.innerText = key;
}

let submit = () => {
    console.log("Ans - ", ans.value)
    let correct = Alphabets[key];
    if(ans.value.toLowerCase() == correct[0])
    {
        description.innerHTML = `
        <span style="color: green">Correct!</span><br>
        It's <span style="text-decoration: underline;">${correct[0]}</span> of ${correct[1]}
        `
    }
    else
    {
        description.innerHTML = `
        <span style="color: red">False!</span><br>
        It's <span style="text-decoration: underline;">${correct[0]}</span> of ${correct[1]}
        `
    }

}

smt.onclick = submit;
next.onclick = () => {
    description.innerHTML = '';
    generateWrd();
}
window.onload = generateWrd