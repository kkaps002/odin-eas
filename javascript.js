
// create column and row divs and fill those with 16 blocks , flex direction to set direction 
const gridContainer = document.querySelector(".grid-container");
const numbtn = document.querySelector("#numbtn");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
const btnRandom = document.querySelector("#btnRandom");
const btnText = document.querySelector("#btnText");

let numofboxes = 16; // init with default value
let colourMode = "normal";

let firstLoad = true; //this prevents bug where the hellomessage would be printed again everytime the dimensions change

sliderValue.textContent = `Dimensions:\n${numofboxes} X ${numofboxes}`; // initialise the dimensions display
makeBoxes(); //generate initial 16 box grid 

slider.addEventListener("input", function() {
    numofboxes = slider.value; 
    sliderValue.textContent = `Dimensions:\n${numofboxes} X ${numofboxes}`;

    if(numofboxes > 100){ // maximum number of boxes
        numofboxes = 100; 
    }
        gridContainer.innerHTML = ""; // clear grid
        makeBoxes(); // and create 
    
}); 
btnRandom.addEventListener("click", function(){
    if (colourMode==="normal"){
        colourMode = "random";
    }
    else if (colourMode=== "random"){
        colourMode = "shadow";
    }
    else {
        colourMode ="normal";
    }
    btnText.textContent = colourMode;
})

function makeBoxes() { // 
    for (let j =0; j < numofboxes ; j++) {  // create a column container 

        const columnContainer = document.createElement('div');
        columnContainer.style.display = "flex";
        columnContainer.style.flex = "1";
        columnContainer.style.flexFlow = "column wrap";
        columnContainer.style.margin = "0px";
        gridContainer.appendChild(columnContainer);
    
        //fill an individual row container with blocks
        for (let i = 0; i < numofboxes; i++) { 
            // Create a new <div> element
            const newBlock = document.createElement('div');
        
            // Append the new <div> to a container element 
            columnContainer.appendChild(newBlock);
            
            newBlock.style.border = "1px solid black";

            let blockShade = 0; // block opacity
            newBlock.classList.add("block"); // Add the "block" class to created divs for css styling 


            // ------------------------------ HELLO MESSAGE TO PRINT WHEN PAGE FIRST LOADS
            if (firstLoad){
                helloMessage(i,j,newBlock);
            }
                
            newBlock.addEventListener("mouseover", function(){
                if(colourMode==="shadow"){ 
                    if (blockShade <1){
                        blockShade += 0.1;
                    }    
                    newBlock.style.backgroundColor = `rgba(0,0,0,${blockShade})`;
                }
                else if(colourMode ==="random"){
                    randomColour();
                }
                else {
                    newBlock.style.backgroundColor ="black";
                }  
            })
            //function defined within the scope of makeBoxes to read newBlock variable
            function randomColour (){
                let rgbValue1 = Math.floor(Math.random() * 256);
                let rgbValue2 = Math.floor(Math.random() * 256);
                let rgbValue3 = Math.floor(Math.random() * 256);
                newBlock.style.backgroundColor = `rgb(${rgbValue1},${rgbValue2},${rgbValue3})`;
            }
        }
    }
    firstLoad = false;  // set to false after first time running 
}

function helloMessage (i,j,newBlock) {

            //this code only executes once when firstLoad is true
            // j - horziontal
            // i - vertical
            
            let vertLine = (i == 3 || i == 4 || i == 5 || i == 6 || i == 7);



            if (vertLine && j == 0 || // letter H
                i == 5 && j == 1 ||
                vertLine && j == 2 ||
                vertLine && j == 4 || // letter E
                i == 3 && j == 5 ||
                i == 5 && j == 5 ||
                i == 7 && j == 5 || 
                vertLine && j == 7 || // letter L
                i == 7 && j == 8 ||
                vertLine && j == 10 || // letter L
                i == 7 && j == 11 || 
                vertLine && j == 13 || // letter O
                i == 3 && j == 14 ||
                i == 7 && j == 14 ||
                vertLine && j == 15 )
            {
                newBlock.style.backgroundColor = `rgba(0,0,0,1)`;
            }
        }







