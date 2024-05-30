let form = document.querySelector("form")


form.addEventListener("submit", function(event){
    event.preventDefault();
    /*On déclare toutes les variable à prendre en compte*/
    let errorContainer = document.querySelector('.message-error')
    let errorList= document.querySelector('.message-error ul')
    errorList.innerHTML=""
    errorContainer.classList.remove('visible')
    let pseudo = document.querySelector("#pseudo")
    let email = document.querySelector('#email')
    let password=document.querySelector("#password")
    let passCheck= new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])"
    );
    let passwordInitial = document.querySelector("#password")
    let password2 = document.querySelector("#password2")
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')



    /*Si le pseudo est plus petit que 6 caracteres*/
    if(pseudo.value.length<6){
        /*afficher une erreur*/
        errorContainer.classList.add("visible")
        pseudo.classList.add('defeat')
        pseudo.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "The pseudo must have at least 6 letters"
        errorList.appendChild(err)
    }else{
        /*sinon afficher un succès*/
        pseudo.classList.remove('defeat')
        pseudo.classList.add('success')
    }


    
    /*Si le mail est null*/
    if (email.value == '') {
        /*afficher une erreur*/
        errorContainer.classList.add('visible')
        email.classList.add('defeat')
        email.classList.remove("success")

        let err = document.createElement("li")
        err.innerText = "The email field can't be empty"
        errorList.appendChild(err)
    }else{
        /*sinon afficher un succès*/
        email.classList.remove('defeat')
        email.classList.add('success')
    }



    
    /*Si le mdp est plus petit de 10 caracteres*/
    if(password.value.length<10 || passCheck.test(password.value) == false) {
        /*afficher une erreur*/
        errorContainer.classList.add("visible")
        password.classList.add('defeat')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Password must be 10 characters minimum, contain lowercase, uppercase, digit, special character"
        errorList.appendChild(err)
    }else{
        /*sinon afficher un succès*/
        errorContainer.classList.remove('visible')
        password.classList.remove('defeat')
        password.classList.add("success")
    }


    /* on vérifie que les 2 mdp correspondent*/
    if (passwordInitial.value != passwordRepeat.value){
        /*si non afficher erreur*/
        errorContainer.classList.add("visible")
        password2.classList.add('defeat')
        password2.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "The passwords differs"
        errorList.appendChild(err)
    }else{
        /*si oui afficher succes*/
        password2.classList.remove('defeat')
        password2.classList.add('success')
    }


    /*Si tout les élements sont vérifiés positifs alors*/
    if(
        /*afficher message de succès*/
        pseudo.classList.contains("success")&&
        email.classList.contains("success")&&
        password.classList.contains("success")&&
        password2.classList.contains("success")
    ){
        successContainer.classList.add('visible')
    }
})

const magicButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

magicButton.addEventListener("click", toggleNav)
/*Permet de dévérouiller/montrer le menu nav*/
function toggleNav(){
  magicButton.classList.toggle("active")
  navigation.classList.toggle("active")
}
