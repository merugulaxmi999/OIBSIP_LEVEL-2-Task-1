let str="";
let display=document.querySelector("input");
let buttons=Array.from(document.getElementsByTagName("button")); //array of buttons
buttons.forEach((button)=>{ //extracting each button
    button.addEventListener("click",()=>{ //adding eventListener to each button
        str=button.innerHTML;
        if(str=="DEL")
            display.value=display.value.slice(0,-1);
        else if(str=="CLR")
            display.value="";
        else if(str=="ENTER")
            try{
                display.value=eval(display.value);
            }
            catch{
                display.value="ERROR!ERROR!ERROR!";
            }
        else
            display.value+=str;
    })
})