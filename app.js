const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cashgiven");
const checkButton = document.querySelector("#chck-btn");
const  resetButton = document.querySelector("#rst-button");
const message = document.querySelector("#error-message");
const cashTable =document.querySelector(".cashtable");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// cashTable.style.display ="none";

checkButton.addEventListener("click", cashamountValidate);


function cashamountValidate(){
 message.style.display = "none";
 const billAmountValue = Number(billAmount.value);
 const cashGivenValue = Number(cashGiven.value);

 if (billAmountValue > 0){
     if(cashGivenValue > billAmountValue){ 
         const moneyToReturn = cashGivenValue - billAmountValue;
         calculateChange(moneyToReturn);
         cashTable.style.display ="block";

     }else if(cashGivenValue === billAmountValue){
        console.log("both are equal"); 
         showMessage("The cash given is equal to bill amount, hence no return money");

     }else {
        console.log("atlest equal to bill amount");
         showMessage("The cash given should be atleast equal to bill amount");

     }

 }else{

    showMessage("Invalid bill amount")
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
    console.log("here");
    message.style.display ="block";
    message.innerText = msg;

}