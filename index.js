const form = document.getElementById('blogform');
const titleInput = document.getElementById('newpost-title');
const textArea = document.getElementById('blogtext');
const postBtn = document.getElementById('postbtn');

//Declaration for title span 
const titleError = document.getElementById('titleError');

//Declaration for blog text span
const textError = document.getElementById('blogtextError');

//Declaration for completed blogs
const postsList = document.getElementById('completedBlogs')


//Functions to showErrors
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('blog-group-new error');
    const span = formGroup.querySelector('span');
    span.innerText = message;
}
//clear error input
function clearError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('blog-group-new error');
    const span = formGroup.querySelector('span');
    span.innerText = '';
}
//function to make post go to list
function postBlog(title, content) {
    const li = document.createElement('li');
    li.className = 'post-item';
    return li;

// calling the title of the post
const blogTitle = document.createElement('blogTitle');
blo

}



