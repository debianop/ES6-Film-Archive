const form = document.getElementById("film-form");
const titleElement= document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const mtypeElement = document.querySelector("#type");
const platformElement = document.querySelector("#platform");
const publishyearElement = document.querySelector("#publishyear");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// All Event Loading
eventListener();

function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = Storage.getFilmFromStorage();
        UI.loadAllFilms(films);
    });

    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    const mtype = mtypeElement.value;
    const platform = platformElement.value;
    const publishyear = publishyearElement.value;

    if(title === "" | director === "" || url === "" || mtype === "" || platform === "" || publishyear === ""){
        //Error
        UI.displayMessages("Fill in the all blanks", "danger");


    }
    else{
        // New Film
        const newFilm = new Film(title, director, url, mtype, platform, publishyear);

        UI.addFilmToUI(newFilm); // Add to UI
        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Movies&Series has been added", "success");

    }

    UI.clearInputs(titleElement, directorElement, urlElement, mtypeElement, platformElement, publishyearElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Remove has been removed", "success");
    }

}

function clearAllFilms(){

    if(confirm("Are you sure you want to clear all items?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
   
}