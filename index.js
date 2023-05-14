var level = 0;
var userClickedPattern = []
var botPattern = []

function NextSequence() {
    return Math.floor((Math.random()*4));
}

var randomChosenColour = () => {

    var value = NextSequence();
    
    switch(value){
        case 0:
            return "red";
        case 1:
            return "blue";
        case 2:
            return "green";
        case 3:
            return "yellow";
    }

}

$("h1").click(() => { 
    if($("h1").text()=="try again! (click here)"){
        location.reload();
    }    
});

$("body").keypress(function () { 
    if($("h1").text()=="Press A Key to Start"){
        $("h1").text("Level 0");
    let trick = randomChosenColour();
    switch(trick) {
        case "red":
            $("#red").animate({opacity: 0.3}).animate({opacity: 1})
            botPattern.push("red");
            break;
        case "blue":
            $("#blue").animate({opacity: 0.3}).animate({opacity: 1})
            botPattern.push("blue");
            break;
        case "green":
            $("#green").animate({opacity: 0.3}).animate({opacity: 1})
            botPattern.push("green");
            break;
        case "yellow":
            $("#yellow").animate({opacity: 0.3}).animate({opacity: 1})
            botPattern.push("yellow");
            break;
    }
    console.log(botPattern);
    }
});


$("#green").on("click", function () {
    if($("h1").text()=="Press A Key to Start" || $("h1").text()=="try again! (click here)"){
        return false;
    }
    $("#green").addClass("pressed");
    setTimeout(() => {
        $("#green").removeClass("pressed");
    }, 200)
    var sound = new Audio("sounds/green.mp3");
    sound.play();
    $("#green").animate({opacity: 0.5}).animate({opacity: 1})
    userClickedPattern.push("green");
    console.log(userClickedPattern.slice(-1).toString())
    console.log(botPattern.slice(userClickedPattern.length-1).toString())
    if(userClickedPattern.length<botPattern.length && userClickedPattern.slice(-1).toString()!=botPattern[userClickedPattern.length-1].toString()){
        $("h1").text("try again! (click here)");
        $("body").addClass("game-over")
        var sound = new Audio("sounds/wrong.mp3")
        sound.play()
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)
    }

    if(userClickedPattern.length===botPattern.length){
        checkAnswer()
    }
    console.log(userClickedPattern);
    
});

$("#red").on("click", function () {
    if($("h1").text()=="Press A Key to Start" || $("h1").text()=="try again! (click here)"){
        return false;
    }
    $("#red").addClass("pressed");
    setTimeout(() => {
        $("#red").removeClass("pressed");
    }, 200)
    var sound = new Audio("sounds/red.mp3");
    sound.play();
    $("#red").animate({opacity: 0.5}).animate({opacity: 1})
    userClickedPattern.push("red")
    console.log(userClickedPattern.slice(-1).toString())
    console.log(botPattern.slice(userClickedPattern.length-1).toString())
    if(userClickedPattern.length<botPattern.length && userClickedPattern.slice(-1).toString()!=botPattern[userClickedPattern.length-1].toString()){
        $("h1").text("try again! (click here)");
        $("body").addClass("game-over")
        var sound = new Audio("sounds/wrong.mp3")
        sound.play()
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)
    }

    if(userClickedPattern.length===botPattern.length){
        checkAnswer()
    }
    console.log(userClickedPattern);
});

$("#yellow").on("click", function () {
    if($("h1").text()=="Press A Key to Start" || $("h1").text()=="try again! (click here)"){
        return false;
    }
    $("#yellow").addClass("pressed");
    setTimeout(() => {
        $("#yellow").removeClass("pressed");
    }, 200)
    var sound = new Audio("sounds/yellow.mp3");
    sound.play();
    $("#yellow").animate({opacity: 0.5}).animate({opacity: 1})
    userClickedPattern.push("yellow")
    console.log(userClickedPattern.slice(-1).toString())
    console.log(botPattern.slice(userClickedPattern.length-1).toString())
    if(userClickedPattern.length<botPattern.length && userClickedPattern.slice(-1).toString()!=botPattern[userClickedPattern.length-1].toString()){
        $("h1").text("try again! (click here)");
        $("body").addClass("game-over")
        var sound = new Audio("sounds/wrong.mp3")
        sound.play()
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)
    }

    if(userClickedPattern.length===botPattern.length){
        checkAnswer()
    }
    console.log(userClickedPattern);
});

$("#blue").on("click", function () {
    if($("h1").text()=="Press A Key to Start" || $("h1").text()=="try again! (click here)"){
        return false;
    }
    $("#blue").addClass("pressed");
    setTimeout(() => {
        $("#blue").removeClass("pressed");
    }, 200)
    var sound = new Audio("sounds/blue.mp3");
    sound.play();
    $("#blue").animate({opacity: 0.5}).animate({opacity: 1})
    userClickedPattern.push("blue")
    console.log(userClickedPattern.slice(-1).toString())
    console.log(botPattern.slice(userClickedPattern.length-1).toString())
    if(userClickedPattern.length<botPattern.length && userClickedPattern.slice(-1).toString()!=botPattern[userClickedPattern.length-1].toString()){
        $("h1").text("try again! (click here)");
        $("body").addClass("game-over")
        var sound = new Audio("sounds/wrong.mp3")
        sound.play()
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)
    }

    if(userClickedPattern.length===botPattern.length){
        checkAnswer()
    }
    console.log(userClickedPattern);
});

function checkAnswer(){
    console.log("user input: " +userClickedPattern)
    console.log("game pattern: " +botPattern)

    if(userClickedPattern.slice(-1).toString()===botPattern.slice(-1).toString()){
        userClickedPattern = []
        level += 1;
        $("h1").text("level " +level);
        setTimeout(() => {
            let trick = randomChosenColour();
        switch(trick) {
            case "red":
                $("#red").animate({opacity: 0.3}).animate({opacity: 1})
                botPattern.push("red");
                console.log(botPattern)
                break;
            case "blue":
                $("#blue").animate({opacity: 0.3}).animate({opacity: 1})
                botPattern.push("blue");
                console.log(botPattern)
                break;
            case "green":
                $("#green").animate({opacity: 0.3}).animate({opacity: 1})
                botPattern.push("green");
                console.log(botPattern)
                break;
            case "yellow":
                $("#yellow").animate({opacity: 0.3}).animate({opacity: 1})
                botPattern.push("yellow");
                console.log(botPattern)
                break;
        }}, 1500)
    } else if(userClickedPattern.slice(-1).toString()!==botPattern.slice(-1).toString()){
        $("h1").text("try again! (click here)");
        $("body").addClass("game-over")
        var sound = new Audio("sounds/wrong.mp3")
        sound.play()
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)
    }

}