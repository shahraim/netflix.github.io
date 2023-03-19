function navsignin() {
  document.getElementById("none").style.display = "none";
  document.getElementById("noneTwo").style.display = "none";
  document.getElementById("signNav").style.display = "block";
}
let emailarray = new Array();
function SignupDone() {
  if (document.getElementById("signUpEmail").value != "") {
    emailarray.push(document.getElementById("signUpEmail").value);
    console.log(emailarray)
    document.getElementById("signNav").style.display="none"
    document.getElementById("none").style.display = "block";
  document.getElementById("noneTwo").style.display = "block";
  }
}

function checkuser(){
  let hgv=0
  for(let i=0; i<emailarray.length;i++){
    int++;
    if(document.getElementById){
      console.log("done")
    }
  }
}

// var x = document.getElementById("none");
// var y = document.getElementById("noneTwo");
// var z = document.getElementById("signNav");
// if (x.style.display === "none",y.style.display === "none",z.style.display === "none") {
//   x.style.display = "block";
//   y.style.display = "block";
//   z.style.display = "none";
// } else {
//   x.style.display = "none";
//   y.style.display = "none";
//   z.style.display = "block";
// }
