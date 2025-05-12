function setup(){
    createCanvas(500,400)
    textAlign(CENTER, CENTER)
}
 let zonaCollor = ["blue", "red"]
 let butonAlternanta = false
 let intervalID 

 function draw(){
    background(255)

    fill(zonaCollor[0]),
    rect(120, 100, 100, 50)

    fill(zonaCollor[1])
    rect(260, 100, 100, 50)

    fill("blue")
    rect(120, 200, 100, 40)
    fill("black")
    text("START", 170, 220)

    fill("red")
    rect(260, 200, 100, 40)
    fill("black")
    text("STOP", 310, 220)
 }

 function mousePressed(){
    if(mouseX > 120 && mouseX < 220 && mouseY > 200 && mouseY < 240){
        if(!butonAlternanta)
            startAlternativ()
    }
    if(mouseX > 260 && mouseX < 360 && mouseY > 200 && mouseY < 240)
        stopAlternativ()
 }

 function startAlternativ(){
    butonAlternanta = true
    intervalID = setInterval(() => {
        zonaCollor.reverse()
    }, 1000)
 }

 function stopAlternativ(){
    butonAlternanta = false
    clearInterval(intervalID)
 }