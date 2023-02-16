let newsList = document.getElementById("news-list");

document.querySelector("#news-btn").onclick = function(){
   
    if(newsList.style.display === 'block') {
        newsList.style.display = "none"
    } else {
        newsList.style.display = "block"
    }
}
