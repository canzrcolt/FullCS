const gaDropDown = document.querySelector(".gaDropDown");
const today = new Date();
let initialYear = 2021;
let currentYear = today.getFullYear();
let currentGA = 134;

while (currentYear >= initialYear + 2) {
  currentGA++;
  initialYear = initialYear + 2;
}
const gaDropDownValues = [
  currentGA,
  currentGA - 1,
  currentGA - 2,
  currentGA - 3,
];
gaDropDownValues.forEach((x) => {
  let opt = document.createElement("option");
  opt.appendChild(document.createTextNode(x));
  gaDropDown.appendChild(opt);
});
