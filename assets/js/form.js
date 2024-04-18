function lightDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode-body");
    element = document.querySelector(".form-container");
    element.classList.toggle("dark-mode-form-container");
    element = document.querySelector(".navBoxBorder");
    element.classList.toggle("dark-mode-navBoxBorder");
}

//takes form entries and writes to local memory
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission refresh
    
    // Get form values
    var username = document.getElementById('username').value;
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    if (!validate()){
    }
    else {

        var timestamp = Math.floor(Date.now());
        const blogPostItems = {
            "username": username,
            "title": title,
            "content": content
        }

        localStorage.setItem(`blogPostItems_${timestamp}`, JSON.stringify(blogPostItems));
        
        //brings user to blog page
        location.href = "blog.html";

        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
});

function validate() {
   
    if( document.getElementById('username').value.length == "" ) {
       return false;
    }
    if( document.getElementById('title').value.length == "" ) {
       return false;
    }
    if( document.getElementById('content').value.length == "" ) {
       return false;
    }
    return( true );
 }