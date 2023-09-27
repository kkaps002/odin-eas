
// create column and row divs and fill those with 16 blocks , flex direction to set direction 
const gridContainer = document.querySelector(".grid-container")

gridContainer.style.height = "100vh";
gridContainer.style.width = "100%"
gridContainer.style.display = "flex";
gridContainer.style.gap = "0";
// gridContainer.style.flexWrap = "wrap";


for (let j =0; j < 16 ; j++) {  // create a column container 

    const columnContainer = document.createElement('div');
    columnContainer.textContent = "column container"; // fix!!!!! this sets the min width 
    columnContainer.style.display = "flex";
    columnContainer.style.flexFlow = "column wrap";
    columnContainer.style.minHeight = '0px';
    columnContainer.style.margin = "0px";
    gridContainer.appendChild(columnContainer);

    //fill an individual column container with blocks
    for (let i = 0; i < 16; i++) { 
        // Create a new <div> element
        const newBlock = document.createElement('div');
    
        // for debugging 
        //newBlock.textContent = `block ${i + 1}`;
    
        // Append the new <div> to a container element 
        columnContainer.appendChild(newBlock);
        
        
        newBlock.style.flexGrow = "1";
        newBlock.style.justifyContent = "center";
        newBlock.style.alignItems = "center";
        newBlock.style.border = "1px solid black";
        newBlock.classList.add("block"); // Add the "block" class to created divs for css styling 


        newBlock.addEventListener("click", function(){
            newBlock.style.background = "grey";
        })
    }

}


