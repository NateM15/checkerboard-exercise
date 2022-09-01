// Your JS goes here
let tileDiv;
let randomColor;
let rgbR;
let rgbG;
let rgbB;
// let tileWidth;
// let tileHeight;
// let tilePaddingBottom;
// let tileFloat;
// let tileColor;
// let divFinder;



function tileDivMaker(color){
     tileDiv = document.createElement('div')
     tileDiv.style.width = "11.1%"
     tileDiv.style.paddingBottom = "11.1%"
     tileDiv.style.float = 'left'
     tileDiv.style.backgroundColor = color
     console.log('tileDivMaker:', tileDiv)
     document.body.appendChild(tileDiv)
}



function checkerboardMaker() {
//makes a black and white checkerboard
    for (let i = 0; i < 81; i++){
        if (i % 2 === 0){
            tileDivMaker('black')
        } else {
            tileDivMaker('red')
        }
    }
}

// checkerboardMaker()

function randomColorBoard() {
//makes a random color checkerboard
         for (let i = 0; i < 81; i++){
        rgbR = Math.floor(Math.random() * 255) + 1
        rgbG = Math.floor(Math.random() * 255) + 1
        rgbB = Math.floor(Math.random() * 255) + 1
        tileDivMaker(`rgb(${rgbR}, ${rgbG}, ${rgbB})`)
        }
}

// randomColorBoard()


function gradiantBoard() {
//Makes a gradient color checkerboard
    for (let i = 0; i < 81; i++){
        if (i <= 8){
            if (i % 2 === 0){
                tileDivMaker('rgb(207, 103, 126)')
            } else {
                tileDivMaker('rgb(191, 95, 128')
            }
        } else if (i > 9 && i <= 18){
            if (i % 2 === 0){
                tileDivMaker('rgb(215, 107, 124)')
            } else {
                tileDivMaker('rgb(182, 92, 129)')
            }
        } else if (i > 18 && i <= 27){
            if (i % 2 === 0){
                tileDivMaker('rgb(222, 112, 123)')
            } else {
                tileDivMaker('rgb(173, 89, 129)')
            }
        } else if (i > 27 && i <= 36){
            if (i % 2 === 0){
                tileDivMaker('rgb(229, 116, 121)')
            } else {
                tileDivMaker('rgb(164, 86, 129)')
            }
        } else if (i > 36 && i <= 45){
            if (i % 2 === 0){
                tileDivMaker('rgb(235, 122, 118)')
            } else {
                tileDivMaker('rgb(145, 81, 127)')
            }
        } else if (i > 45 && i <= 54){
            if (i % 2 === 0){
                tileDivMaker('rgb(255, 153, 106)')
            } else {
                tileDivMaker('rgb(96, 69, 115)')
            }
        } else if (i > 54 && i <= 63){
            if (i % 2 === 0){
                tileDivMaker('rgb(255, 200, 96)')
            } else {
                tileDivMaker('rgb(87, 67, 111)')
            }
        } else if (i > 63 && i <= 72){
            if (i % 2 === 0){
                tileDivMaker('rgb(255, 225, 99)')
            } else {
                tileDivMaker('rgb(68, 62, 103)')
            }
        } else if (i >= 81) {
            if (i % 2 === 0){
                tileDivMaker('rgb(250, 250, 110)')
            } else {
                tileDivMaker('rgb(42, 53, 88)')
            }
        }
    }
}


gradiantBoard()

function flashingTileMaker(color){
    tileDiv = document.createElement('div')
    tileDiv.style.width = "11.1%"
    tileDiv.style.paddingBottom = "11.1%"
    tileDiv.style.float = 'left'
    tileDiv.style.backgroundColor = color
    console.log('tileDivMaker:', tileDiv)
    document.body.appendChild(tileDiv)
}

// function flashingBoard(){
//     setInterval(function(){
//        randomColor = for (let i = 0; i < 81; i++){
//        rgbR = Math.floor(Math.random() * 255) + 1
//        rgbG = Math.floor(Math.random() * 255) + 1
//        rgbB = Math.floor(Math.random() * 255) + 1
//        tileDivMaker(`rgb(${rgbR}, ${rgbG}, ${rgbB})`)
//        }
//    },2000)
// }