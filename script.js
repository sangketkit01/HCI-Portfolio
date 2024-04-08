function buttonOnClick(button, page, sub) {
    var buttons = document.querySelectorAll('.navigator button');
    buttons.forEach(btn => {
        btn.classList.remove('clicked');
    });

    button.classList.add('clicked');

    var baseUrl = window.location.origin; 
    var newPath = page + ".html"; 
    if (sub !== null) {
        newPath = page  + ".html"; 
    }
    var newUrl = baseUrl + "/" + newPath; 

    window.location.href = newUrl; 
}

function moreButton(){
     var contentElement = document.getElementById('Message');
    contentElement.scrollIntoView({ behavior: 'smooth' });
}
function mouseEnter(button){
    button.style.backgroundColor = "rgba(239,239,239,0.6)"
    button.style.color = "gray"
}
function mouseLeave(button){
    button.style.backgroundColor = "rgba(255,255,255,0.2)"
    button.style.color = "black"
}

function learnMoreButtonEntered(button){
    button.style.backgroundColor = "rgba(224,224,224,0.6)"
}
function learnMoreButtonLeave(button){
    button.style.backgroundColor = "rgba(255,255,255,0.2)"
}
function enterDropdown(button){
    button.style.backgroundColor = "rgb(192,192,192)"
}
function leaveDropdown(button){
    button.style.backgroundColor = "rgb(255,255,255)"
}
function enterContact(button){
    button.style.backgroundColor = "rgb(251, 70, 118)"
}
function leaveContact(button){
    button.style.backgroundColor = "rgb(231, 30, 78)"
}