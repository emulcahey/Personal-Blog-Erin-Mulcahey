function lightDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode-body");
    element = document.querySelector(".navBoxBorder");
    element.classList.toggle("dark-mode-navBoxBorder");
    element = document.querySelector(".mainContainerBorders");
    element.classList.toggle("dark-mode-mainContainerBorders");
    element = document.querySelector(".newDiv");
    element.classList.toggle("dark-mode-newDiv");
    element = document.querySelector(".footerBoxBorder");
    element.classList.toggle("dark-mode-footerBoxBorder");
    element = document.querySelector(".postTitle");
    element.classList.toggle("dark-mode-postTitle");
}

document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();

    for (let i = 0; i < localStorage.length; i++){
        var blogPostInfo = JSON.parse(localStorage.getItem(localStorage.key(i)));

        // Create a new div element
        var newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        newDiv.innerHTML = `
            <div class="postTitle">
                <h3>${blogPostInfo.title}</h3>
            </div>
            <div class="postContent">
                <p>${blogPostInfo.content}</p>
            </div>
            <div class="postUsername">
                By ${blogPostInfo.username}</p>
            </div>` 
            ;

        // Append the new div to the main container
        document.getElementById('mainContainer').appendChild(newDiv);
    }
});