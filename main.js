const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const thumbsUp = document.getElementById('tu');
const thumbsUpText = document.getElementById('tu-text');
const thumbsDown = document.getElementById('td');
const thumbsDownText = document.getElementById('td-text');
const subscribe = document.getElementById("subscribe-btn");
const subscribers = document.getElementById("subs");


moreBtn.addEventListener('click', ()=> {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

subscribe.addEventListener('click', ()=>{
    if(subscribe.innerText == "SUBSCRIBE"){
        subscribe.innerText = "unsubscribe";
        subscribers.innerText = "420K Subscribers";
    } else{
        subscribe.innerText = "subscribe";
        subscribers.innerText = "419K Subscribers";
    }
});

thumbsUp.addEventListener('click', ()=>{
    if(thumbsUpText.innerText == "99k"){
        thumbsUp.style.color = "#045fd4";
        thumbsUpText.innerText = "100k";
        thumbsDown.classList.add("disabled");
    } else{
        thumbsUp.style.color = "#909090";
        thumbsUpText.innerText = "99k";
        thumbsDown.classList.remove("disabled");
    }
});

thumbsDown.addEventListener('click', ()=>{
    if(thumbsDownText.innerText == "42"){
        thumbsDown.style.color = "#045fd4";
        thumbsDownText.innerText = "43";
        thumbsUp.classList.add("disabled");
    } else{
        thumbsDown.style.color = "#909090";
        thumbsDownText.innerText = "42";
        thumbsUp.classList.remove("disabled");
    }
});

