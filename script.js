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