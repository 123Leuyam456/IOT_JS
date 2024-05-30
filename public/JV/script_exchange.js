let selectedCard = null;
/* on detecte quelle carte l'utilisateur selectionne*/
function selectCard(cardNumber) {
    const card = document.getElementById(`card${cardNumber}`);
    if (card.classList.contains('selected')) {
        /*si les cartes ne sont pas sélectionées alors le bouton exchange ne marche pas*/
        card.classList.remove('selected');
        document.getElementById('exchangeButton').disabled = true;
    } else {
        card.classList.add('selected');
        selectedCard = cardNumber;
        checkSelectedCards();
    }
}
/*si les cartes ne sont pas sélectionées alors le bouton exchange ne marche pas*/
function checkSelectedCards() {
    if (document.querySelectorAll('.card.selected').length === 2) {
        document.getElementById('exchangeButton').removeAttribute('disabled');
    } else {
        document.getElementById('exchangeButton').disabled = true;
    }
}
/*on creer la fonction pour echanger les cartes de place*/
function exchangeCards() {
    /*on fait correspondre cahaque choix à un carde html*/
    const card1 = document.getElementById('cardImage_01');
    const card2 = document.getElementById('cardImage_02');

    const tempSrc = card1.src;
    card1.src = card2.src;
    card2.src = tempSrc;

    document.querySelectorAll('.card.selected').forEach(card => {
        card.classList.remove('selected');
    });
    selectedCard = null;
    document.getElementById('exchangeButton').disabled = true;
}
/*fait en sorte que la carte selectionné dans le selecteur s'affiche dans le cadre correspondant*/
function showImage_01(imageId) {
    const imageSrc = getImageSrc(imageId);
    const cardImage = document.getElementById('cardImage_01');
    cardImage.src = imageSrc;
}
/*fait en sorte que la carte selectionné dans le selecteur s'affiche dans le cadre correspondant*/
function showImage_02(imageId) {
    const imageSrc = getImageSrc(imageId);
    const cardImage = document.getElementById('cardImage_02');
    cardImage.src = imageSrc;
}


/*agit sur le selecteur qui envoie la source de l'image aux fonctions plus haut selon le choix de l'utilisateur*/
function getImageSrc(imageId) {
    switch (imageId) {
        case 'image1':
            return 'img/dumbledore.png';
        case 'image2':
            return 'img/hagrid.png';
        case 'image3':
            return 'img/voldemort.png';
        case 'image4':
            return 'img/Harry_Potter_Card.png';
        case 'image5':
            return 'img/ron weasley.png';
        case 'image6':
            return 'img/Hermione granger.png';
        default:
            return '';
    }
}

/*Permet d'afficher le nom de la personne avec qui on veut echanger sur l'ecran*/
document.addEventListener('DOMContentLoaded', function() {
    const selectPers = document.getElementById('selectPers');
    const persDisplay = document.getElementById('persDisplay');
  
    selectPers.addEventListener('change', function() {
      persDisplay.textContent = selectPers.value;
    });
});

const magicButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

magicButton.addEventListener("click", toggleNav)
/*Permet de dévérouiller/montrer le menu nav*/
function toggleNav(){
  magicButton.classList.toggle("active")
  navigation.classList.toggle("active")
}