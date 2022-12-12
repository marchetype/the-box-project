let btnDiv = document.getElementById('btn-div')
let photoEl = document.getElementById('photo-result');
let favBtn = document.getElementById('fav-btn');
let favPhotosList = document.getElementById('fav-photos')


// Opening joke modal
$(document).ready(function (){
  $('#jokebox').modal()
})

// API grabbing random joke
function getaJoke() {
  var jokeAPI = 'https://official-joke-api.appspot.com/random_joke'
  fetch(jokeAPI)
  .then(function (response){
      return response.json()
  })
  .then(function (data) {
      renderJoke(data);
  });
}

// Render jokes
function renderJoke(data) {
   
  var grabSetup = document.querySelector('#setup');
  var setupLocation = data.setup;
 grabSetup.innerHTML = setupLocation;
  
  var grabPunchline = document.querySelector('#punchline');
  var punclineLocation = data.punchline;
  grabPunchline.innerHTML = punclineLocation;
  
}

// Grabbing the joke button
var jokeBtn = document.getElementById('joke-btn')

// Adding a click event listener to the button
jokeBtn.addEventListener('click', getaJoke)



// Displays 'favorite' button if photoEl does not have an empty source.
function favBtnDisplay(){
  if (photoEl.src === '') {
    favBtn.style.visibility = "hidden";
  } else {
    favBtn.style.visibility = "visible";
  }
}

// Image is rendered to the center photoEl
function renderImage(data2) {
  photoEl.src = data2[0];
  favBtnDisplay();
}

// Function below is used to fetch API link based on the button selected within btnDiv
function getAnimal (event) {

  var shibeAPI
  let btn = event.target;

  if (btn.textContent === 'Doge') {
    shibeAPI = 'https://shibe.online/api/shibes?count=[1-100]&urls=true&httpsUrls=true'

  } else if (btn.textContent === 'Birds') {
    shibeAPI = 'https://shibe.online/api/birds?count=[1-100]&urls=true&httpsUrls=true';

  } else if (btn.textContent === 'Cats') {
    shibeAPI = 'https://shibe.online/api/cats?count=[1-100]&urls=true&httpsUrls=true';

  }
  fetch(shibeAPI)
  .then(function (response){
      return response.json()
  })
  .then(function (data2) {
      renderImage(data2)
  });
}

function setStorage() {
  let imgArr = localStorage.getItem('saved-images');
  let img = photoEl.src;

  if (imgArr === null || imgArr === undefined) {
    imgArr = [];
    imgArr.push(photoEl.src);
    localStorage.setItem('saved-images', JSON.stringify(imgArr));

  } else {
    imgArr = JSON.parse(imgArr);
    if (imgArr.length > 5) {
      console.log(imgArr + " I can't save it");
    } else {
      imgArr.push(img);
      localStorage.setItem('saved-images', JSON.stringify(imgArr));
    }}}

// Function below is used to display the saved images within localStorage.
function displayFavorites() {
  let favImages = localStorage.getItem('saved-images');
  favImages = JSON.parse(favImages);

// While statement is used to remove any outdated array of appended children
  while (favPhotosList.firstChild) {
      favPhotosList.removeChild(favPhotosList.firstChild);
  }

// Appending child images.
  if (favImages !== null) {
    for (let i = 0; i < favImages.length; i++) {
      let image = document.createElement('img');
      image.className = 'fav-photo';
      image.src = favImages[i];
      favPhotosList.appendChild(image);
    }}}

function favoritePhoto () {
  setStorage();
  displayFavorites();
}

displayFavorites();
favBtnDisplay();

favBtn.addEventListener('click', favoritePhoto);
btnDiv.addEventListener('click', getAnimal);


/* Bored Box */
/*Api used - https://www.boredapi.com/documentation#endpoints-key */
/* Targets used */
const openMagsModal = document.querySelector('#open-Mags-Modal');
const magsModal = document.getElementById('mags-Modal');
const close = document.querySelector('.close');
const activity = document.querySelector('.activity');
const firstForm = document.querySelector('.first-Form');
const textSuggestion = document.getElementById('text-Suggestion');
const userInput = document.getElementById('user-Input');
const suggestSubmit = document.getElementById('suggest-Submit');
const secondForm = document.querySelector('.second-Form');
const seriously =  document.getElementById('seriously');
const numberSubmit = document.getElementById('number-Submit');
const numberSelect = document.getElementById('number-Select');
const funIdea = document.querySelector('.fun-Idea');
const ideaOutput = document.getElementById('idea-Output');
const tryAgain = document.getElementById('try-Again');
const storeIdea = document.getElementById('store-Idea');
const gotoStored = document.getElementById('goto-Stored');
const viewStored = document.querySelector('.view-Stored');
const storedIdea = document.getElementById('stored-Idea');
const storedOutput = document.querySelector('#stored-Output');
const goBack = document.getElementById('go-Back');
const noStorage = document.querySelector('.no-Storage');
const noStored = document.getElementById('no-Stored');
const back = document.getElementById('back');
const Directions = 'Hit the button for a fun idea. Or enter a number "2-5" for more friends to join you.';
const myArray = [1, 2, 3, 4, 5];//may try the array again at some point



/* Start Box Functioning */
openMagsModal.addEventListener('click', function(e){
    magsModal.style.display = 'block';
startBox(e);
})

/* Close Bored Box */
close.addEventListener('click', function(){
    magsModal.style.display = 'none';
})

/* Function Beginning of Box */
function startBox(e){


    if(e.target.id == 'open-Mags-Modal'){
        userInput.value = Directions;
        activity.style.display = 'block';
        firstForm.classList.add('first-Fade');
    }

    else if(e.target.id == 'go-Back'){
        firstForm.style.display = 'block';
        firstForm.classList.add('first-Fade');
        viewStored.classList.remove('move-right-to-place');
        viewStored.classList.add('move-right-back');       
    }

    else if(e.target.id == 'try-Again'){
        if(secondForm.classList.contains('move-top-back')){
            secondForm.classList.remove('move-top-back');
        }
        userInput.value = Directions;
        funIdea.classList.remove('move-left-to-place');
        funIdea.classList.add('move-left-back');
        firstForm.style.display = 'block';
        firstForm.classList.add('first-Fade');
    }
    else if(e.target.id == 'back'){
        noStorage.classList.remove('move-bottom-to-place');
        noStorage.classList.add('move-bottom-back');
        firstForm.style.display = 'block';
        firstForm.classList.add('first-Fade');
    }

}

/* Event for no storage to display go 'Back' */
back.addEventListener('click', function(e){
startBox(e);
})

/* Event handler to refresh div */
tryAgain.addEventListener('click', function(e){
startBox(e);
})

/* First Form Submit Button */
textSuggestion.addEventListener('submit', function(e){
e.preventDefault();
    let input = userInput.value;
    if(input == Directions){
        input = 1;
    }
    if(input == 1 || input == 2 || input == 3 || input == 4 || input == 5){  //i tried iterating through an array with no luck
        getIdea(input);
    }
    else{
        firstForm.style.display = 'none';
        firstForm.classList.remove('first-Fade');
        secondForm.classList.add('move-top-to-place');
    }
})

/* Second Form Submit Button */
seriously.addEventListener('submit', function(e){
e.preventDefault();
    firstForm.classList.remove('first-Fade');
    let input = 1;
    getIdea(input);
})

/* Second Form Selection menu */
function selectionInput(){
    let input = numberSelect.value;
    getIdea(input);
}

/* Event Storage to local for later view */
storeIdea.addEventListener('click', function (){
    let storeThisIdea = ideaOutput.innerHTML;
    let Idea = storeThisIdea;    
    localStorage.setItem('Idea', JSON.stringify(Idea));
})


/* Event View Stored Idea */
gotoStored.addEventListener('click', function(){
    if(localStorage.getItem('Idea') == null){
        if(noStorage.classList.contains('move-bottom-back')){
            noStorage.classList.remove('move-bottom-back');
        }
        firstForm.style.display = 'none';
        noStorage.classList.add('move-bottom-to-place');
    }
    else{
        if(viewStored.classList.contains('move-right-back')){
            viewStored.classList.remove('move-right-back');
        }
        let viewStoredIdea = JSON.parse(localStorage.getItem('Idea'));
        storedOutput.textContent = viewStoredIdea;
        firstForm.style.display = 'none';
        firstForm.classList.remove('first-Fade');
        viewStored.classList.add('move-right-to-place');
    }
})

/* Event to Go back to Beginning */
goBack.addEventListener('click', function(e){
    startBox(e);
})

/* Show Idea AFTER fetch */
function showIdea(activity){
    if(funIdea.classList.contains('move-left-back')){
        funIdea.classList.remove('move-left-back');
    }
    firstForm.style.display = 'none';
    firstForm.classList.remove('first-Fade');
    funIdea.classList.add('move-left-to-place');

    secondForm.classList.remove('move-top-to-place');
    secondForm.classList.add('move-top-back');
    ideaOutput.innerHTML = activity + `.`;
}

/* Get Idea Function- Input true from either form submit type*/
async function getIdea(input){
    let urlBeginning = 'https://www.boredapi.com/api/';
    let personActivity = 'activity?participants=' + input;
    let url = urlBeginning + personActivity;
    let response = await fetch(url);
    let json = await response.json();
    let {activity} = json;
showIdea(activity);
}
/* zMaG33z */