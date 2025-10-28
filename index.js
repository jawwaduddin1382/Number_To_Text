const input = document.querySelector("#input");
const output = document.querySelector(".output");
const changeBtn = document.querySelector(".buttton");
let hundreds = [
  ["", "یک ", "دو", "سه ", "چهار", "پنج ", "شش ", "هفت ", "هشت ", "نه "],
  [
    "",
    "ده ",
    "بیست ",
    "سی ",
    "چهل ",
    "پنجاه ",
    "شست ",
    "هفتاد",
    "هشتاد",
    "نود",
    "صد",
  ],
  ["", "صد", "صد", "صد", "صد", "صد", "صد", "صد", "صد", "صد"],
  ["", "و", "و", "و", "و", "و", "و", "و", "و", "و"],
];

let thousends = [
  "",
  "هزارو",
  "هزارو",
  "هزارو",
  "هزارو",
  "هزارو",
  "هزارو",
  "هزارو",
  "هزارو",
  "هزارو",
];
let milion = [
  "",
  "میلیون و",
  "میلیون و",
  "میلیون و",
  "میلیون و",
  "میلیون و",
  "میلیون و",
  "میلیون و",
  "میلیون و",
  "میلیون و",
];
let melyarad = [
  "",
  "میلیارد",
  "میلیارد",
  "میلیارد",
  "میلیارد",
  "میلیارد",
  "میلیارد",
  "میلیارد",
  "میلیارد",
  "میلیارد",
];
let bilion = [
  "",
  "بیلیون و",
  "بیلیون و",
  "بیلیون و",
  "بیلیون و",
  "بیلیون و",
  "بیلیون و",
  "بیلیون و",
  "بیلیون و",
  "بیلیون و",
];
let tarlion = [
  "",
  "تریلیون و",
  "تریلیون و",
  "تریلیون و",
  "تریلیون و",
  "تریلیون و",
  "تریلیون و",
  "تریلیون و",
  "تریلیون و",
  "تریلیون و",
];
let kwatarlion = [
  "",
  "کوادرلیون و",
  "کوادرلیون و",
  "کوادرلیون و",
  "کوادرلیون و",
  "کوادرلیون و",
  "کوادرلیون و",
  "کوادرلیون و",
  "کوادرلیون و",
  "کوادرلیون و",
];
let kwentarlion = [
  "",
  "کوینتلیون و",
  "کوینتلیون و",
  "کوینتلیون و",
  "کوینتلیون و",
  "کوینتلیون و",
  "کوینتلیون و",
  "کوینتلیون و",
  "کوینتلیون و",
  "کوینتلیون و",
];

let teenNumbers = [
  "",
  "یازده",
  "دوازده",
  "سیزده",
  "چهارده",
  "پانزده",
  "شانزده",
  "هفده",
  "هشده",
  "نوزده",
];

changeBtn.addEventListener("click", validation);
let arrayOfNumbers;
let inputnumber;
let inpu;

function validation() {
  inpu = input.value;
  let check = Number(inpu);
  check = check.toString();
  if (check == "NaN") {
    output.style.color = "red";
    output.textContent = "لطفا تنها عدد وارد نماید " + inpu + " عدد نیست ";
  } else {
    convert(inpu);
  }
}

function convert(inp) {
  inputnumber = inp;
  arrayOfNumbers = inputnumber.split("");
  if (arrayOfNumbers.length < 24) {
    j = 24 - arrayOfNumbers.length;
    for (let i = 0; i < j; i++) {
      arrayOfNumbers.unshift(0);
    }
  }

  let hun = getHundreds();
  let thou = getThousends();
  let mili = getMilion();
  let miliya = getmiliyard();
  let bili = getBilion();
  let terli = getTerlion();
  let kawter = getKwaterlion();
  let kawentil = getkawentelion();

  let fainalText = `${kawentil}${kawter}${terli}${bili}${miliya}${mili}${thou}${hun}`;
  fainalText = fainalText.trim();
  if (fainalText.charAt(fainalText.length - 1) == "و") {
    fainalText = fainalText.split("");
    fainalText.pop();
    fainalText = fainalText.join("");
  }
  if (fainalText.charAt(0) == "و") {
    fainalText = fainalText.split("");
    fainalText.shift();
    fainalText = fainalText.join("");
  }
  fainalText = fainalText.replace("  ", " ");
  fainalText = fainalText.replace("   ", " ");
  fainalText = fainalText.replace(" ", " ");
  output.style.color = "#000";
  output.textContent = fainalText;
}

function getHundreds() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[21]]}${hundreds[2][arrayOfNumbers[21]]}${
    hundreds[3][arrayOfNumbers[22]]
  }`;
  if (arrayOfNumbers[22] == 1 && !(arrayOfNumbers[23] == 0)) {
    teens = teenNumbers[arrayOfNumbers[23]];
    hundre = "";
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[22]]} ${
      hundreds[3][arrayOfNumbers[23]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[23]]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  return `${ones} ${teens} ${hundre}`;
}

function getThousends() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[18]]}${hundreds[2][arrayOfNumbers[18]]}${
    hundreds[3][arrayOfNumbers[19]]
  }`;
  if (arrayOfNumbers[19] == 1 && !(arrayOfNumbers[20] == 0)) {
    teens = teenNumbers[arrayOfNumbers[20]];
    hundre = thousends[2];
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[19]]} ${
      hundreds[3][arrayOfNumbers[20]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[20]]}${thousends[2]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  let fText = `${ones} ${teens} ${hundre}`;
  fText = fText.trim();
  return fText == thousends[3] ? "" : fText;
}

function getMilion() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[15]]}${hundreds[2][arrayOfNumbers[15]]}${
    hundreds[3][arrayOfNumbers[16]]
  }`;
  if (arrayOfNumbers[16] == 1 && !(arrayOfNumbers[17] == 0)) {
    teens = teenNumbers[arrayOfNumbers[17]];
    hundre = milion[2];
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[16]]} ${
      hundreds[3][arrayOfNumbers[17]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[17]]}${milion[2]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  let fText = `${ones} ${teens} ${hundre}`;
  fText = fText.trim();
  return fText == milion[3] ? "" : fText;
}

function getmiliyard() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[12]]}${hundreds[2][arrayOfNumbers[12]]}${
    hundreds[3][arrayOfNumbers[13]]
  }`;
  if (arrayOfNumbers[13] == 1 && !(arrayOfNumbers[14] == 0)) {
    teens = teenNumbers[arrayOfNumbers[14]];
    hundre = milion[2];
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[13]]} ${
      hundreds[3][arrayOfNumbers[14]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[14]]}${melyarad[2]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  let fText = `${ones} ${teens} ${hundre}`;
  fText = fText.trim();
  return fText == melyarad[3] ? "" : fText;
}
function getBilion() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[9]]}${hundreds[2][arrayOfNumbers[9]]}${
    hundreds[3][arrayOfNumbers[10]]
  }`;
  if (arrayOfNumbers[10] == 1 && !(arrayOfNumbers[11] == 0)) {
    teens = teenNumbers[arrayOfNumbers[11]];
    hundre = milion[2];
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[10]]} ${
      hundreds[3][arrayOfNumbers[11]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[11]]}${bilion[2]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  let fText = `${ones} ${teens} ${hundre}`;
  fText = fText.trim();
  return fText == bilion[3] ? "" : fText;
}
function getTerlion() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[6]]}${hundreds[2][arrayOfNumbers[6]]}${
    hundreds[3][arrayOfNumbers[7]]
  }`;
  if (arrayOfNumbers[7] == 1 && !(arrayOfNumbers[8] == 0)) {
    teens = teenNumbers[arrayOfNumbers[8]];
    hundre = milion[2];
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[7]]} ${
      hundreds[3][arrayOfNumbers[8]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[8]]}${tarlion[2]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  let fText = `${ones} ${teens} ${hundre}`;
  fText = fText.trim();
  return fText == tarlion[3] ? "" : fText;
}
function getKwaterlion() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[3]]}${hundreds[2][arrayOfNumbers[3]]}${
    hundreds[3][arrayOfNumbers[4]]
  }`;
  if (arrayOfNumbers[4] == 1 && !(arrayOfNumbers[5] == 0)) {
    teens = teenNumbers[arrayOfNumbers[5]];
    hundre = milion[2];
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[4]]} ${
      hundreds[3][arrayOfNumbers[5]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[5]]}${kwatarlion[2]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  let fText = `${ones} ${teens} ${hundre}`;
  fText = fText.trim();
  return fText == kwatarlion[3] ? "" : fText;
}
function getkawentelion() {
  let ones;
  let teens;
  let hundre;
  ones = `${hundreds[0][arrayOfNumbers[0]]}${hundreds[2][arrayOfNumbers[0]]}${
    hundreds[3][arrayOfNumbers[1]]
  }`;
  if (arrayOfNumbers[1] == 1 && !(arrayOfNumbers[2] == 0)) {
    teens = teenNumbers[arrayOfNumbers[2]];
    hundre = milion[2];
  } else {
    //
    teens = `${hundreds[1][arrayOfNumbers[1]]} ${
      hundreds[3][arrayOfNumbers[2]]
    }`;
    hundre = `${hundreds[0][arrayOfNumbers[2]]}${kwentarlion[2]}`;
  }
  ones = ones.trim();
  teens = teens.trim();
  hundre = hundre.trim();
  let fText = `${ones} ${teens} ${hundre}`;
  fText = fText.trim();
  return fText == kwentarlion[3] ? "" : fText;
}
