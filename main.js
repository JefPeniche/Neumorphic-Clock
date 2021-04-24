const toggleMode = document.querySelector("#mode");
const toggleStyle = document.querySelector("#clockStyle");
const clockAnalog = document.querySelector("#clockAnalog");
const clockDigital = document.querySelector("#clockDigital");

const styleChanged = () =>{
    if(toggleStyle.checked){
        clockAnalog.style.left= "-100%";
        clockDigital.style.left= "calc(50% - 35em)";
    }else{
        clockAnalog.style.left= "calc(50% - 25em)";
        clockDigital.style.left= "-100%";
    }
}

const modeChanged = () => {
    document.styleSheets[2].disabled= toggleMode.checked;
}

styleChanged();
modeChanged();