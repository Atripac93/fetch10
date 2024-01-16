const ok = function (stringa) {
  return stringa + "-suffisso";
};
let aggiungiami = ["e", "shh", "dhdh"];
let sin = aggiungiami.map(ok);
console.log(sin);

let dop = ["sh", "shshsh", "ahahah"];
let ops = "domani";
let result = dop.map((str) => str + ops);
console.log(result);

let zo = ["dd", " ", "hshssh", "jdjdjd"];
let si = zo.pop("");
console.log(zo);

let io = ["fede", "carlo", "gigi"];
let re = io.forEach((elem) => console.log(elem));

let fios = ["suocce", "serena", "ciao"];
let tre = fios.filter((fio) => fio.length > 3);
console.log(tre);
