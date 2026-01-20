let blogPosts = [];

function loadPostsFromStorage() {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
        blogPosts = JSON.parse(savedPosts);
    }
}

function savePostsToStorage() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

const form = document.getElementById('blogform');
const titleInput = document.getElementById('newpost-title');
const textArea = document.getElementById('blogtext');
const postBtn = document.getElementById('postbtn');
const titleError = document.getElementById('titleError');
const textError = document.getElementById('blogtextError');
const postsList = document.getElementById('completedBlogs');


function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const span = formGroup.querySelector('span');
    span.innerText = message;
}

function clearError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const span = formGroup.querySelector('span');
    span.innerText = '';
}


function createNewPost(title, content) {
    const newPost = {
        id: Date.now(),
        title: title,
        content: content,
        timestamp: new Date().toLocaleString()
    };
    
    blogPosts.push(newPost);
    savePostsToStorage();
    renderAllPosts();
}


function renderAllPosts() {
    postsList.innerHTML = '';

    blogPosts.forEach(function(post) {
        const li = document.createElement('li');
        li.className = 'post-item';
        li.setAttribute('data-id', post.id);

        const titleElement = document.createElement('h3');
        titleElement.className = 'post-title';
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.className = 'post-content';
        contentElement.textContent = post.content;

        const timestampElement = document.createElement('small');
        timestampElement.className = 'post-timestamp';
        timestampElement.textContent = post.timestamp;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'post-buttons';

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(titleElement);
        li.appendChild(contentElement);
        li.appendChild(timestampElement);
        li.appendChild(buttonsDiv);

        postsList.appendChild(li);

        editBtn.addEventListener('click', function() {
            editPost(post.id);
        });


         deleteBtn.addEventListener('click', function() {
            deletePost(post.id);
        });
    })
}

function deletePost(postId) {
    const postIndex = blogPosts.findIndex(function(post) {
        return post.id === postId;
    });

    if (postIndex !== -1) {
        blogPosts.splice(postIndex, 1);
        savePostsToStorage();
        renderAllPosts();
    }
}

function editPost(postId) {
    const post = blogPosts.find(function(p) {
        return p.id === postId;
    });

    if (post) {
        titleInput.value = post.title;
        textArea.value = post.content;

        postBtn.textContent = 'Update';

        postBtn.setAttribute('data-editing-id', postId);

        form.scrollIntoView({ behavior: 'smooth' });
    }
}
function updatePost(postId, newTitle, newContent) {
  
    const post = blogPosts.find(function(p) {
        return p.id === postId;
    });
    
    if (post) {
        post.title = newTitle;
        post.content = newContent;
        post.timestamp = new Date().toLocaleString();
        
      
        savePostsToStorage();
        renderAllPosts();
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = titleInput.value.trim();
    const content = textArea.value.trim();
    
    clearError(titleInput);
    clearError(textArea);
    
    let isValid = true;
    
    if (title === '') {
        showError(titleInput, 'Title is required');
        isValid = false;
    }
    
    if (content === '') {
        showError(textArea, 'Content is required');
        isValid = false;
    }
    
    if (isValid) {
        const editingId = postBtn.getAttribute('data-editing-id');
        
        if (editingId) {
            
            updatePost(parseInt(editingId), title, content); 
          
            postBtn.textContent = 'Post';
            postBtn.removeAttribute('data-editing-id');
        } else {
          
            createNewPost(title, content);
        }
        
        titleInput.value = '';
        textArea.value = '';
    }
});


loadPostsFromStorage();
renderAllPosts();