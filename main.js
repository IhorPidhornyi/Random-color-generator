"use strict";


document.addEventListener("DOMContentLoaded", ()=>{
    const body = document.body;
    const colorSpan = document.querySelector(".color");
    const btn = document.querySelector(".btn");

    const randomGenerator = () =>{
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return{
            r,
            g,
            b,
        }
    }

    const numberToHex = (num) =>{
        let hex = num.toString(16);
        return hex.length === 1? "0": hex;
    }

    const hexHandler = (rgbObj) =>{
        const r = rgbObj.r;
        const g = rgbObj.g;
        const b = rgbObj.b;

        return `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`;
    }

    btn.addEventListener("click", ()=>{
        const colorObj = randomGenerator();
        
        body.style.backgroundColor = hexHandler(colorObj);
        colorSpan.textContent = hexHandler(colorObj);
    });
});