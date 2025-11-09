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
blogTitle.className = 'post-title';
blogTitle.textContent = title;
li.appendChild(blogTitle);

// calling the content area of the post
const contentArea = document.createElement('contentArea');
contentArea.className = 'post-content';
contentArea.textContent = 'content'
li.appendChild(contentArea);

//creating the container for the recent posts
const recents = document.createElement('div');
recents.className = 'post-recents';

//creating the edit button
const editBtn = document.createElement('button');
editBtn.type = 'button';
editBtn.className = 'edit-btn';
editBtn.textContent = 'Edit'
recents.appendChild(editBtn);

//creating the delete post button
const deleteBtn = document.createElement('button');
deleteBtn.type = 'button';
deleteBtn.className = 'delete-btn';
deleteBtn.textContent = 'Delete';
recents.appendChild(deleteBtn);

li.appendChild(recents);

//event listener for button and conditional statements






}




