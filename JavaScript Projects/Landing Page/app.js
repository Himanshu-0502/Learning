const Time = document.getElementById('time');
const Greeting = document.getElementById('greeting');
const Name = document.getElementById('name');

function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec= today.getSeconds();

    Time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n) < 10 ? '0' : '') + n;
}

function setBackground(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 10){
        document.body.style.backgroundImage = "url('../Landing Page/Images/Morning Image.jpg')";
        Greeting.textContent = 'Good Morning';
    }
    else if(hour < 18){
        document.body.style.backgroundImage = "url('../Landing Page/Images/Afternoon Image.jpg')";
        Greeting.textContent = 'Good Afternoon';
    }
    else{
        document.body.style.backgroundImage = "url('../Landing Page/Images/Night Image.jpg')";
        Greeting.textContent = 'Good Evening';
    }
}

function getName(){
    if(localStorage.getItem('name') === null){
        Name.textContent = 'Himanshu';
    }
    else{
        Name.textContent = localStorage.getItem('name');
    }
}

function setName(event){
    if(event.type === 'keypress'){
        if(event.which == 13 || event.keyCode == 13){
            localStorage.setItem('name', event.target.innerHTML);
            Name.blur();
        }
    }
    else{
        localStorage.setItem('name', event.target.innerHTML);
    }
}

Name.addEventListener('keypress', setName);
Name.addEventListener('blur', setName);

showTime();
setBackground();
getName();