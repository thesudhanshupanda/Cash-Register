const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cashgiven");
const checkButton = document.querySelector("#chck-btn");
const  resetButton = document.querySelector("#rst-button");
const message = document.querySelector("#error-message");
const cash =document.querySelector(".cashtable");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const rstButton = document.querySelector("#rst-btn");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

cash.style.display = "none";

checkButton.addEventListener("click", cashamountValidate);

rstButton.addEventListener("click", reset);

function cashamountValidate(){
 message.style.display = "none";
 const billAmountValue = Number(billAmount.value);
 const cashGivenValue = Number(cashGiven.value);

 if (billAmountValue > 0){
     if(cashGivenValue > billAmountValue){ 
         const moneyToReturn = cashGivenValue - billAmountValue;
         calculateChange(moneyToReturn);
         cash.style.display ="block";
     }else if(cashGivenValue === billAmountValue){
         showMessage("The cash given is equal to bill amount, hence no return money");

     }else {
         showMessage("The cash given should be atleast equal to bill amount");
         cash.style.display ="none";
     }
 }else{
    showMessage("Invalid bill amount")
    cash.style.display ="none";
 }
}

function calculateChange(moneyToReturn) {

 for ( let i=0 ; i < availableNotes.length ; i++) {
     const numOfNotes = Math.trunc(moneyToReturn / availableNotes[i]) ;
     moneyToReturn = moneyToReturn % availableNotes[i];
     noOfNotes[i].innerText = numOfNotes ;
 }
}

function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg;

}

function reset() {
    location.reload();
 }