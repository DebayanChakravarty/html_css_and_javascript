document.addEventListener('DOMContentLoaded',function(){

   
    const element = document.getElementById('elements');
    const ind = document.getElementById('index');
    const inPut = document.querySelector('input');
    const btn = document.querySelector('button');
    const errorDisplay = document.getElementById('errorMessage');
    const lenDisplay = document.getElementById('len');
    const sizeDisplay = document.getElementById('size');



/* Add Array Elements 
push(element): Add an element to the end.
unshift(element): Add an element to the start. 
https://debayanchakravarty.in/JavaScript_Array_Methods_and_Features/
*/

function getTheSize(arrSize){

    sizeDisplay.innerHTML = "<td>Size in Bytes = </td>"
    //1 number = 8 byte;

    let totalSizeinBytes = arrSize.length * 8;

    const sizeTd = document.createElement('td');
    sizeTd.textContent = totalSizeinBytes;
    sizeDisplay.appendChild(sizeTd);
}

function getTheLength(arrLen){

    lenDisplay.innerHTML = "<td>Length = </td>"
    let len = arrLen.length;
    const lentd = document.createElement('td');
    lentd.textContent = len;
    lenDisplay.appendChild(lentd);

    getTheSize(arrLen);
}

    function loopIt(arr){
        element.innerHTML = "<th>Array Elements = </th>";
        ind.innerHTML = "<td>Array Index = </td>";

        let arrSize = arr.length - 1;

        arr.forEach((ele,index) => {

            const thEle = document.createElement('th');
            const trInd = document.createElement('td');

            if(index === arrSize){
                thEle.style.border = "2px solid blue"
                trInd.style.border = "2px solid blue"
            }
           
            thEle.textContent = ele;
            element.appendChild(thEle);

            trInd.textContent = index;
            ind.appendChild(trInd);
        });

        getTheLength(arr);
    } 


    function pushIt(val){
        array.push(val);
      
        loopIt(array);
    }


    function isValidInput(input) {
        // Remove leading and trailing whitespace
        let trimmedInput = input.trim();

        // Check if the input is empty after trimming
        if (trimmedInput.length === 0) {
            errorDisplay.textContent = "Enter valid Input!!"
            errorDisplay.style.color= "red";
        }
        else{
            inPut.value = "";
            errorDisplay.textContent = "";
            pushIt(trimmedInput);
        }

     
        
       
    }


    

    const array = [];
    btn.addEventListener('click',function(){
        isValidInput(inPut.value);
    })
})









//Remove Array Elements
//pop(): Remove an element from the end.
//shift(): Remove an element from the start.



//Merge Arrays
//concat(): Combines two or more arrays.
//Use flat() for nested arrays.


//Searching
//indexOf(value): Returns the first index of the value, or -1 if not found.
//includes(value): Checks if the array contains the value.
//find(callback): Returns the first element that satisfies the condition.
//findIndex(callback): Returns the index of the first element that satisfies the condition.






