// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
const firstNameButton = document.querySelector("#firstName");
const fsLabel  = document.querySelector("#firstNameLabel");
const lastNameButton = document.querySelector("#lastName");
const lsLabel  = document.querySelector("#lastNameLabel");
const jobTitleButton = document.querySelector("#jobTitle");
const jtLabel  = document.querySelector("#jobTitleLabel");
const homeOfficeButton = document.querySelector("#homeOffice");
const hoLabel  = document.querySelector("#homeOfficeLabel");
const tellmeMoreButton = document.querySelector("#tellmeMore");
const tmmLabel  = document.querySelector("#tellmeMoreLabel");
const btback = document.querySelector("#back");

function displayFirstName(){
  //document.body.innerHTML ="Praveen";
  fsLabel.hidden=false;
}

function displayLastName(){
  lsLabel.hidden=false;
}

function displayJobTitle(){
  jtLabel.hidden=false;
}

function displayHomeOffice(){
  hoLabel.hidden=false;
}

function displaytellmeMore(){
  firstNameButton.hidden=true;
  fsLabel.hidden=true;
  lastNameButton.hidden=true;
  lsLabel.hidden=true;
  jobTitleButton.hidden=true;
  jtLabel.hidden=true;
  homeOfficeButton.hidden=true;
  hoLabel.hidden=true;
  tellmeMoreButton.hidden=true;
  tmmLabel.hidden=false;
  btback.hidden=false;
}

function goBack(){

  firstNameButton.hidden=false;
  fsLabel.hidden=true;
  lastNameButton.hidden=false;
  lsLabel.hidden=true;
  jobTitleButton.hidden=false;
  jtLabel.hidden=true;
  homeOfficeButton.hidden=false;
  hoLabel.hidden=true;
  tellmeMoreButton.hidden=false;
  tmmLabel.hidden=true;
  btback.hidden=true;
}

firstNameButton.addEventListener("click",displayFirstName);
lastNameButton.addEventListener("click",displayLastName);
jobTitleButton.addEventListener("click",displayJobTitle);
homeOfficeButton.addEventListener("click",displayHomeOffice);
tellmeMoreButton.addEventListener("click",displaytellmeMore);
btback.addEventListener("click",goBack);




// using jQuery and the object above, display the information as the appropriate button is clicked
