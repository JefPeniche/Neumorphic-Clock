
const hours= document.querySelector("#hours");
const minutes= document.querySelector("#minutes");
const seconds= document.querySelector("#seconds");

const clockUpdate=()=>{
    const now = new Date();
    hours.style.transform = 'rotate(' + (now.getHours() * 30 + (Math.floor(now.getMinutes() / 12) * 6)) + 'deg)';
    minutes.style.transform = 'rotate(' + (now.getMinutes() * 6) + 'deg)';
    seconds.style.transform = 'rotate(' + (now.getSeconds() * 6) + 'deg)';
};

clockUpdate();
setInterval(clockUpdate, 1000);
