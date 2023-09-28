
// create column and row divs and fill those with 16 blocks , flex direction to set direction 
const gridContainer = document.querySelector(".grid-container");
const numbtn = document.querySelector("#numbtn");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");

let numofboxes = 16; // init with default value
sliderValue.textContent = `Dimensions:\n${numofboxes} X ${numofboxes}`; // initialise the dimensions display
makeBoxes(); //generate initial 16 box grid 

//numbtn.addEventListener("click", function (){ //click checks what the number of boxes is and behaves accordingly
slider.addEventListener("input", function() {
    numofboxes = slider.value; 
    sliderValue.textContent = `Dimensions:\n${numofboxes} X ${numofboxes}`;

    if(numofboxes > 100){ // maximum number of boxes
        numofboxes = 100; 
    }
        gridContainer.innerHTML = ""; // clear grid
        makeBoxes(); // and create 
    
}); 

function makeBoxes() { // 
    for (let j =0; j < numofboxes ; j++) {  // create a column container 

        const columnContainer = document.createElement('div');
        columnContainer.style.display = "flex";
        columnContainer.style.flex = "1";
        columnContainer.style.flexFlow = "column wrap";
        columnContainer.style.margin = "0px";
        gridContainer.appendChild(columnContainer);
    
        //fill an individual column container with blocks
        for (let i = 0; i < numofboxes; i++) { 
            // Create a new <div> element
            const newBlock = document.createElement('div');
        
            // Append the new <div> to a container element 
            columnContainer.appendChild(newBlock);
            
            
            newBlock.style.border = "1px solid black";
            newBlock.classList.add("block"); // Add the "block" class to created divs for css styling 
    
    
            newBlock.addEventListener("mouseover", function(){
                newBlock.style.background = "grey";
            })
        }
    }
}







