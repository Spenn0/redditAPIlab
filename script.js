"use strict"

var redditPost = document.querySelector(".redditPost");
var div = document.querySelector("div");
var form = document.querySelector(".inputForm");


form.addEventListener('submit', setName);

function setName(event){
event.preventDefault()
    let data = new FormData(form);
    let input = data.get('userInput');
    console.log(input);

apiCall(input)
}

function apiCall(subreddit){
let url = `https://www.reddit.com/r/` + `${subreddit}` + `/.json`;
fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    let postArray = data.data.children
    postArray.forEach(post => {
        console.log(post.data.title);
        console.log(post.data.thumbnail);

        var h1 = document.createElement('h1');
        var img = document.createElement('img');
        var a = document.createElement('a');
        var div = document.createElement('div');

        h1.innerText = post.data.title;
        img.src = post.data.thumbnail;
        a.innerText = post.data.url;
        a.href = post.data.url
        div.classList.add("tdivBox")
    

        div.appendChild(h1);
        div.appendChild(img);
        div.appendChild(a);
        redditPost.appendChild(div);

    })
})
}