let cardsArray=[
  {
    name:"CSS",
 property:"CSS" 
  },
  {
    name:"JS",
    property:"JS"
  },
  {
    name:"Mongo",
    property:"Mongo"
  },
  {
    name:"nodeJS",
    property:"nodeJS"
  },
  {
    name:"pyhton",
    property:"python"
  },
  {
    name:"React",
    property:"React"
  },
 
]

let duobleArray =cardsArray.concat(cardsArray)

let shuffleArray=Array.from(duobleArray).sort(()=>.5 - Math.random() )
let clickCount=0
let firstcard=""
let secondCard=""
let matcdPairs=0
let totalPairs=cardsArray.length

let cardContainer=document.querySelector("#card-container")
for(let i=0;i<shuffleArray.length;i++){
  const card=document.createElement("div")
card.classList.add("card");
card.dataset.name=shuffleArray[i].name
card.innerHTML=shuffleArray[i].property

cardContainer.appendChild(card)



}

function card_match(){
let card_selected=document.querySelectorAll(".card-selected")

  card_selected.forEach((currcard_selected)=>{
    currcard_selected.classList.add("cardMatch")
  })
 matcdPairs++
  if(matcdPairs===totalPairs){
    setTimeout(()=>{
        alert("Congratulations matched all the pairs")
        // resetGame()
        location.reload()
    },1000)
  }
}


function resetGame(){
  firstcard=""
  secondCard=""
  clickCount=0
  let card_selected=document.querySelectorAll(".card-selected")

  card_selected.forEach((currcard_selected)=>{
    currcard_selected.classList.remove("card-selected")
  })
}

cardContainer.addEventListener("click",(e)=>{
    let selectedCard=e.target

  clickCount++

    if(clickCount<3){
   
      
        if(clickCount===1){
          firstcard=selectedCard.dataset.name
          selectedCard.classList.add("card-selected")
        }else{
          secondCard=selectedCard.dataset.name
          selectedCard.classList.add("card-selected")
        }
        if(firstcard!=="" && secondCard!==""){

          if(firstcard===secondCard){
            
              setTimeout(()=>{

                card_match()
                resetGame()
              },600)
          }else{
            setTimeout(()=>{

             
              resetGame()
            },600)
          }
        }
    

    }
    if(selectedCard.id==="card-container"){
      selectedCard.classList.remove("card-selected")
    }
})











