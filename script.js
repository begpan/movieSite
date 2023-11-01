const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length
    console.log(imageItem)
    
  arrow.addEventListener("click", function () {
    clickCounter++;
    if(imageItem - (5 + clickCounter) >= 0){
   
    
    movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
     }px)`
  
}else{
    movieLists[i].style.transform = "translateX(0)"
}
});
});

// 

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sideball i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title,.body")

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))

});