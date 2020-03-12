document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!

  document.addEventListener('keydown', function(e) {
    let move_bot

    let ul = document.getElementById("moves-container");

    if (e.key === "ArrowLeft") {
      move_bot = "left"
    }
    else if (e.key === "ArrowRight"){
      move_bot = "right"
    }
    else if (e.key === "ArrowUp"){
      move_bot = "up"
    }
    else if (e.key === "ArrowDown"){
      move_bot = "down"
    }

    let li = document.createElement("li")
      li.innerText = move_bot
      
      ul.append(li)

    
    move(move_bot)
    

  })

  
  





//   document.addEventListener('keydown', function(e) {
//     if (e.key === "ArrowRight") {
//       console.log("ArrowRight") 
//     }
//   })

//   document.addEventListener('keydown', function(e) {
//     if (e.key === "ArrowUp") {
//       console.log("ArrowUp") 
//     }
//   })

//   document.addEventListener('keydown', function(e) {
//     if (e.key === "ArrowRight") {
//       console.log("ArrowRight") 
//     }
//   })
})
