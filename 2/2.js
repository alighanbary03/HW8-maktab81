var myBtn = document.createElement("button");
function myFunc(myBtn, callback) {
  document.body.appendChild(myBtn);
  myBtn.innerHTML = "element";
  callback(myBtn);
}
const callback = (elem) => {
  elem.style.backgroundColor = "red";
  elem.style.width = "100px";
  elem.style.height = "100px";
};
