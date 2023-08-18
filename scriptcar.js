//-------------------------------------nav-bar------------------------------------------>
var open = document.getElementById("front-ul")
function menu(){
    if(open){
        open.style.display = "inline"
       
    }
    else{
        open.style.display = "none"
    }
}




//-------------------------------------speack-search------------------------------------------>


const button = document.querySelector("#car");
const text_box = document.querySelector("#search-bar2")

button.addEventListener("click", () => {

    const text = new SpeechSynthesisUtterance(text_box.value);
    speechSynthesis.speak(text);
});

//---------------------------------------------------------car-btn-more----------------------------------------------------------------------->

function myFunction(){
    // window.alert("hello")
 
    var moreText = document.getElementById("show-more")
    var  btnText = document.getElementById("myBtn")

    if(moreText.style.display === "none"){

      
        btnText.innerHTML = "View Less";
        moreText.style.display = "inline";
    }

    else{
       
        btnText.innerHTML = "View More &#8595; "
        moreText.style.display= "none"
       
    }
  
}




//-------------------------------------car-budget-btn------------------------------------------>
var x = document.getElementById("color-btn");
var y = document.getElementById("toggle-btn")
var t2 = document.getElementById("toggle-btn2")
var t3 = document.getElementById("toggle-btn3")
var t4 = document.getElementById("toggle-btn4")
var t5 = document.getElementById("toggle-btn5")
var t6 = document.getElementById("toggle-btn6")
var t7 = document.getElementById("toggle-btn7")

function lakh5(){
   if(x , y){
        x.style.visibility = "visible";
        // x.style.backgroundColor = "black";
        y.style.color= 'snow'
        x.style.left = "0px";
        t2.style.color = "black";
        t3.style.color = "black";
        t4.style.color = "black";
        t5.style.color = "black";
        t6.style.color = "black";
        t7.style.color = "black";
    }
 

 }

 function lakh55(){
    if(x , y ,t2){
         x.style.left = "162px";
         x.style.visibility = "visible";
         t2.style.color = "snow";
         y.style.color = "black";
         t3.style.color = "black";
         t4.style.color = "black";
         t5.style.color = "black";
         t7.style.color = "black";
     }
  }
  function lakh10(){
    if(x , y ,t3){
         x.style.left = "328px";
         x.style.visibility = "visible";
         t3.style.color = "snow";
         y.style.color = "black";
         t2.style.color = "black";
         t4.style.color = "black";
         t5.style.color = "black";
         t7.style.color = "black";
     }
  }

  function lakh15(){
    if(x , y ,t4){
         x.style.left = "490px";
         x.style.visibility = "visible";
         t4.style.color = "snow";
         y.style.color = "black";
         t2.style.color = "black";
         t3.style.color = "black";
         t4.style.color = "snow";
         t5.style.color = "black";
         t7.style.color = "black";
     }
  }

  function lakh20(){
    if(x , y ,t5){
         x.style.left = "655px";
         x.style.visibility = "visible";
         t5.style.color = "snow";
         y.style.color = "black";
         t2.style.color = "black";
         t3.style.color = "black";
         t4.style.color = "black";
         t7.style.color = "black";
         t6.style.color = "black";
     }
  }

  function lakh50(){
    if(x , y ,t6){
         x.style.left = "817px";
         x.style.visibility = "visible";
         t6.style.color = "snow";
         y.style.color = "black";
         t2.style.color = "black";
         t3.style.color = "black";
         t4.style.color = "black";
         t5.style.color = "black";
         t7.style.color = "black";
     }
  }
  function core1(){
    if(x , y ,t7){
         x.style.left = "980px";
         x.style.visibility = "visible";
         t7.style.color = "snow";
         y.style.color = "black";
         t2.style.color = "black";
         t3.style.color = "black";
         t4.style.color = "black";
         t5.style.color = "black";
         t6.style.color = "black";
     }
  }
