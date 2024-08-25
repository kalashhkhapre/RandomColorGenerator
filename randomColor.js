let obj ={
    0:"white",
    1:"red",
    2:"black",
    3:"brown",
    4:"pink",
    5:"grey",
    6:"green",
    7:"yellow",
    8:"blue",
    9:"purple",
    10:"orange"
} 
let box = document.getElementsByClassName("box");
for (let index = 0; index < box.length; index++) {
    box[index].style.backgroundColor=obj[Math.round(Math.random()*10)];
    box[index].style.color=obj[Math.round(Math.random()*10)]
}