const toggleMode = document.querySelector("#mode");
const toggleStyle = document.querySelector("#clockStyle");
const clockAnalog = document.querySelector("#clockAnalog");
const clockDigital = document.querySelector("#clockDigital");

const styleChanged = () =>{
    if(toggleStyle.checked){
        clockAnalog.style.display= "flex";
        clockDigital.style.display= "flex";
    }else{
        clockAnalog.style.display= "flex";
        clockDigital.style.display= "flex";
    }
}

const modeChanged = () => {
    document.styleSheets[2].disabled= toggleMode.checked;
}

styleChanged();
modeChanged();