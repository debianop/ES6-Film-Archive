class UI{
    
static addFilmToUI(newFilm){

   
    const filmList = document.getElementById("films");

    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" width="200px"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td>${newFilm.mtype}</td>
        <td>${newFilm.platform}</td>
        <td>${newFilm.publishyear}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
    </tr>
    `; 
}

static clearInputs(element1, element2, element3, element4, element5, element6) {
    element1.value = '';
    element2.value = '';
    element3.value = '';
    element4.value = '';
    element5.value = '';
    element6.value = '';
}

static displayMessages(message, type) {
    const cardBody = document.querySelector(".card-body");

    //alert Div
    
    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function() {
        div.remove();
    },1000)
}

static loadAllFilms(films) {
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail" width="200px"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td>${film.mtype}</td>
            <td>${film.platform}</td>
            <td>${film.publishyear}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
        </tr>
        `; 
    });
}

static deleteFilmFromUI(element){
    element.parentElement.parentElement.remove();
}

static clearAllFilmsFromUI(element){
    const filmList = document.getElementById("films");

    while(filmList.firstElementChild !==null){
        filmList.firstElementChild.remove();
    }
}

}
