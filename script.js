document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const postForm = document.getElementById('post-form');

    
    function createPostHTML(post) {
        return `
            <div class="post">
                <h3 class="resultTitle">${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    }

    
    function addPostToContainer(postHTML) {
        postsContainer.innerHTML += postHTML;
    }

  
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('postTitle').value;
        const body = document.getElementById('postBody').value;

       
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(newPost => {
            const postHTML = createPostHTML(newPost);
            addPostToContainer(postHTML);
            postForm.reset();
        });
    });
});