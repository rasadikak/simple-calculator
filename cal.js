display = document.getElementById("display").value ;
 function append_display(value){
    display.value = display.value + value;
    
 }
//console.log(typeof display.value);
 function clearDisplay(){
   display.value = "";
   
 }
function del_element(){
    display.value = display.value.slice(0,-1)+'';
    //console.log(typeof display.value);
}

 function result(){
    expression = display.value;
    final_result = "";
    try{
        final_result = eval(expression);
        display.value = final_result;
        document.getElementById("display").innerHTML = display.value;

    }
    catch(e){
        msg = "error!";
        display.value = msg;
        document.getElementById('display').innerHTML = display.value ;

    }

 }
// we cant use expression variable outside the function(globally)
//this code got 'display' variable as the displays id name. idk why
//the 'value' object with display and the 'value' in the function brackets are different. we can use any name for  + value;(3 line) and append_display(value).
//assign msg and final_result to display.value unless it wont print on display