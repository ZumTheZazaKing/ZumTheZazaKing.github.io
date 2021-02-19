const loader = document.querySelector('#loader');

function hideLoader(){

    loader.style.opacity = 0;

    setTimeout(() => {loader.style.display = 'none'}, 1000);

}

setTimeout(hideLoader, 2000);