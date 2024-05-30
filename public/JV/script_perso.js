function fetchInfoCard(carte) {
  return fetch('https://hp-api.lainocs.fr/characters/'+ carte)
      .then(response => response.json())
}

async function displayCardInfo(carte) {
  const data = await fetchInfoCard(carte)
  /*Ajout de l'image dans l'HTML*/
  document.getElementById("img-plan").innerHTML =` 
      <img src="${data.image}" alt="${data.name}" /> 
      `
  /*Ajout du personnage dans l'HTML*/
  document.getElementById("titre-plan").innerHTML =` 
      <h3 id="persNameTitle">${data.name}</h3>
      `

  /*on définit une variable qui prend le nom du patronus du personnage*/
  var patronu = data.patronus
  /*On vérifie si le personnage a un patronus et qu'il n'est pas vide*/
  if (patronu == ""){
    /*Si il est vide alors on préviens l'utilisateur que ce personnage n'a pas de patronus*/
    patronu = "This character don't have a patronus";  
    console.log("patronus vide")
  }
  /*Ajout du contenu dans l'HTML*/
  document.getElementById("contenu").innerHTML =` 
      <h3>Actor : ${data.actor}</h3>
      <h3>Eyes: ${data.eyes}</h3>
      <h3>Hairs : ${data.hairs}</h3>
      <h3>Date of birth : ${data.birthday}</h3>
      <h3>Blood : ${data.blood}</h3>
      <h3>Role : ${data.role}</h3>
      <h3>House : ${data.house}</h3>
      <h3>Wand : ${data.wand}</h3>
      <h3>Patronus : ${patronu}</h3>
      `

    async function updateLastCard (){
        
      const response = await fetch("/tutu", {
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          lastHouseVisited : data.house,
        }),
      });
      
      const newData = await response.json();
      const card = newData.message
      console.log("house ", card);
      
    }
  updateLastCard()
}


/*On vient ici vérifier quel personnage sur lequel l'utilisateur à cliqué*/
const persCard = document.getElementsByTagName('p')[0].id

/*Ici si l'id de la page est harry alors on lance la fonction displayCardInfo avec els informations d'harry*/
if (persCard == "harry"){
  displayCardInfo("harry-potter")
  console.log("harry")}
else if (persCard == "hermione"){
  displayCardInfo("hermione-granger")
  console.log("hermione")
}
else if (persCard == "ron"){
  displayCardInfo("ron-weasley")
  console.log("ron")
}
else if (persCard == "voldemort"){
  displayCardInfo("lord-voldemort")
  console.log("voldemort")
}
else if (persCard == "dumbledore"){
  displayCardInfo("albus-dumbledore")
  console.log("dumbledore")
}
else if (persCard == "hagrid"){
  displayCardInfo("rubeus-hagrid")
  console.log("hagrid")
}



/*on défifint l'accordeon*/
let accordeons = document.querySelectorAll(".accordeon")

for (let i = 0; i <accordeons.length; i++){
  /*si l'accordeon est cliquer alors il s'ouvre*/
    accordeons[i].addEventListener("click",function (){
        this.classList.toggle("open")
    })
}



const magicButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

magicButton.addEventListener("click", toggleNav)
/*Permet de dévérouiller/montrer le menu nav*/
function toggleNav(){
  magicButton.classList.toggle("active")
  navigation.classList.toggle("active")
}





