
// create column and row divs and fill those with 16 blocks , flex direction to set direction 
const gridContainer = document.querySelector(".grid-container")
const numbtn = document.querySelector("#numbtn");


let numofboxes = 16; // init with default value
makeBoxes(); //generate initial 16 box grid 

numbtn.addEventListener("click", function (){ //click checks what the number of boxes is and behaves accordingly
    if(numofboxes === 64){ // maximum number of boxes
        gridContainer.innerHTML = ""; // clear grid
        numofboxes = 16; // reset to 16 
        makeBoxes();
    }
    else{
        gridContainer.innerHTML = ""; // clear grid
        numofboxes *= 2; // duplicate num of boxes to make 
        makeBoxes(); // and create 
    }
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







