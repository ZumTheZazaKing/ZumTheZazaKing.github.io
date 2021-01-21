let appsFilterButton = document.getElementById('appsFilter');

let gamesFilterButton = document.getElementById('gamesFilter');

let allFilterButton = document.getElementById('allFilter');

let gameProjects = document.getElementsByClassName('games');

let appProjects = document.getElementsByClassName('apps');

function filterAll(){

    allFilterButton.classList.add('filterSelected');

    gamesFilterButton.classList.remove('filterSelected');

    appsFilterButton.classList.remove('filterSelected');

    for(var i = 0; i < gameProjects.length; i++){

        gameProjects[i].classList.remove('hideProject');

    }

    for(var j = 0; i < appProjects.length; j++){

        appProjects[j].classList.remove('hideProject');

    }

}

function filterGames(){

    allFilterButton.classList.remove('filterSelected');

    gamesFilterButton.classList.add('filterSelected');

    appsFilterButton.classList.remove('filterSelected');

    for(var i = 0; i < gameProjects.length; i++){

        gameProjects[i].classList.remove('hideProject');

    }

    for(var j = 0; i < appProjects.length; j++){

        appProjects[j].classList.add('hideProject');

    }

}

function filterApps(){

    allFilterButton.classList.remove('filterSelected');

    gamesFilterButton.classList.remove('filterSelected');

    appsFilterButton.classList.add('filterSelected');

    for(var i = 0; i < gameProjects.length; i++){

        gameProjects[i].classList.add('hideProject');

    }

    for(var j = 0; i < appProjects.length; j++){

        appProjects[j].classList.remove('hideProject');

    }

}