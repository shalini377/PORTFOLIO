let typingText=document.querySelector('.change_txt');
let Designation=['Web Developer','Designer','Programmer'];
let arrayIndex=1;
function changingTxt(){
    if(arrayIndex<Designation.length)
    {
        typingText.innerHTML=Designation[arrayIndex];
        arrayIndex= arrayIndex+1;
    }
    else{
        arrayIndex=0;
        typingText.innerHTML=Designation[arrayIndex];
        arrayIndex= arrayIndex+1;

    }
}
changingTxt()
setInterval(changingTxt,5000)