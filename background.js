

var isDay = true;
const changeColor = () => {
    var container = document.getElementById("container");
    var btn = document.getElementById("btn");
   

    btn.addEventListener("click", function() {
        if (isDay) {
            container.classList.add("day");
            container.classList.remove("night");
        } else {
            container.classList.add("night");
            container.classList.remove("day");
        }
        isDay = !isDay;
    });
}



const text=()=>{
btn.addEventListener("click",function () {
    var text = document.getElementById("text");
    if (isDay) {
        text.innerHTML="Now, you like background color white.";
    } else {
        text.innerHTML="Now, you like background color black.";
    }
});
}



changeColor(text());
