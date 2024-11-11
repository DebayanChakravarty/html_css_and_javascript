//will create a button in html 

document.addEventListener('DOMContentLoaded',function(){

    //we will add click event to the button 

    const btn = document.querySelector('button');
    const spa = document.querySelector('span');


    let counter = 0;
    function increment(){
        return counter++;
    }


    btn.addEventListener('click',function(){

        spa.textContent = increment();
        changeBtnColr(counter)
        
       

       
    })
    function changeBtnColr(n){
        if(n%2 === 0){
            btn.style.backgroundColor = "yellow"
        }else{
            btn.style.backgroundColor = "green"
        }

    }
     

      


})





//on click of the button we will increment the value to 1
