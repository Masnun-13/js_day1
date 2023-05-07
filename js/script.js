function alerting(){
    alert("ALERT!")
}
let i = 1

function inc(){
    let counter = document.getElementById("counter")
    let countx = Number(counter.innerText)
    countx=countx+i
    if(countx<0){
        countx=0
        alert("No negative value allowed")
    }
    counter.innerText = countx
}

function dec(){
    let counter = document.getElementById("counter")
    let countx = Number(counter.innerText)
    countx=+countx-i
    if(countx<0){
        countx=0
        alert("No negative value allowed")
    }
    counter.innerText = countx
}

function save(){
    let counter = document.getElementById("counter")
    let countx = Number(counter.innerText)
    let permission = confirm("Save Value?")
    if(permission==true){
        localStorage.setItem("counter", countx)
        alert("Save Complete")
    }
    
}

function load(){
    let counter = document.getElementById("counter")
    let countx = localStorage.getItem("counter")
    let permission = confirm("Load Value?")
    if(permission==true){
        counter.innerText = countx
        alert("Load Complete")
    }
    
}

function kill(){
    let counter = document.getElementById("counter")
    let countx = Number(counter.innerText)
    let permission = confirm("Reset Value?")
    if(permission==true){
        countx = 0
        i=1
        counter.innerText = countx
        document.getElementById("value").innerText=1
        localStorage.setItem("counter", countx)
        alert("Reset Complete")
    }
    
}

function amount(){
    let val = prompt("Value to increment/decrement", i);
    if (val != null) {
        i=Number(val)
        document.getElementById("value").innerText=i
    }
}

//button1
{
    let x = document.getElementById("clicker1")

    function colorchange1(){
        x.style.backgroundColor = "#cc25cc";
    }
    
    function colorfade1(){
        x.style.backgroundColor = "#a71fa7";
    }
}


//button2
{
    let x = document.getElementById("clicker2")

    function colorchange2(){
        x.style.backgroundColor = "#d0dbff";
    }
    
    function colorfade2(){
        x.style.backgroundColor = "#9adaf3";
    }
}

//button3
{
    let x = document.getElementById("clicker3")

    function colorchange3(){
        x.style.backgroundColor = "#eae51b";
    }
    
    function colorfade3(){
        x.style.backgroundColor = "#eaff8b";
    }
}

//button4
{
    let x = document.getElementById("clicker4")

    function colorchange4(){
        x.style.backgroundColor = "green";
    }
    
    function colorfade4(){
        x.style.backgroundColor = "#357528";
    }
}

//button5
{
    let x = document.getElementById("clicker5")

    function colorchange5(){
        x.style.backgroundColor = "red";
    }
    
    function colorfade5(){
        x.style.backgroundColor = "#8a0505";
    }
}

//button6
{
    let x = document.getElementById("clicker6")

    function colorchange6(){
        x.style.backgroundColor = "rgb(44, 42, 42)";
    }
    
    function colorfade6(){
        x.style.backgroundColor = "black";
    }
}

