const bitsNumbers={
    0 : [true, true, true, true, true, true, false],
    1 : [false, true, true, false, false, false, false],
    2 : [true, true, false, true, true, false, true],
    3 : [true, true, true, true, false, false, true],
    4 : [false, true, true, false, false, true, true],
    5 : [true, false, true, true, false, true, true],
    6 : [true, false, true, true, true, true, true],
    7 : [true, true, true, false, false, false, false],
    8 : [true, true, true, true, true, true, true],
    9 : [true, true, true, true, false, true, true],
}

const getDigitalNumber = (number)=>{
    const bits= bitsNumbers[number];
    let divNumber = `<div class="number">`;
    
    bits.forEach((bit, index) => {
        divNumber +=`<span class="digital-${bit?'on':'off'} position-${index}"></span>`
    });

    divNumber+=`</div>`;    
    return divNumber;
}

const getSeparator = ()=>{
    return '<div class="digital-separator">'+
                '<span class="dot"></span>'+
                '<span class="dot"></span>'+
            '</div>';
}


const container= document.querySelector("#digitalContainer");

const digitalUpdate=(function digitalUpdate(){
    const now = new Date();
    container.innerHTML= getDigitalNumber(Math.trunc(now.getHours()/10));
    container.innerHTML+= getDigitalNumber(now.getHours()%10);
    container.innerHTML+= getSeparator();
    
    container.innerHTML+= getDigitalNumber(Math.trunc(now.getMinutes()/10));
    container.innerHTML+= getDigitalNumber(now.getMinutes()%10);
    container.innerHTML+= getSeparator();
    
    container.innerHTML+= getDigitalNumber(Math.trunc(now.getSeconds()/10));
    container.innerHTML+= getDigitalNumber(now.getSeconds()%10);
    return digitalUpdate;
}());

setInterval(digitalUpdate, 1000);


