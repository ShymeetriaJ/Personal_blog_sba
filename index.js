const form = document.getElementById('blogform');
const newtitile = document.getElementById('newposttitle');
const textarea = document.getElementById('blogtext');
const postbtn = document.getElementById('postbtn');




//the event listener for submitting the form and function for validation
form.addEventListener('submit', function(event) {
    event.preventDefault();             //stops the form from submitting to check for v     
});

