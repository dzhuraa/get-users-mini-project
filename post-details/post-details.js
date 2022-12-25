let url = new URL(location.href);
let post = url.searchParams.get('post');
let parse = JSON.parse(post);

//--------post---------

let div = document.createElement('div');
div.classList.add('div-main-post-details');
let userId = document.createElement('h2');
userId.innerText = 'User ID: ' + parse.userId;
let postId = document.createElement('h2');
postId.innerText = 'Post ID: ' + parse.id;
let title = document.createElement('h2');
title.innerText = 'Title: ' + parse.title;
let body = document.createElement('p')
body.innerText = parse.body;

div.append(userId, postId, title, body);
document.body.append(div);

//--------post---------


//--------comments-----


fetch('https://jsonplaceholder.typicode.com/posts/' + parse.id + '/comments')
    .then(value => value.json())
    .then(comments => {
            let divContainerComments = document.createElement('div');
            divContainerComments.classList.add('divContainerComments');
            let titleCOMMENTS = document.createElement('h2');
            titleCOMMENTS.classList.add('titleCOMMENTS');
            titleCOMMENTS.innerText = 'Comments:';
            document.body.appendChild(titleCOMMENTS);
            for (const comment of comments) {
                    let divComments = document.createElement('div');
                    divComments.classList.add('divComments');
                    let titleOfComment = document.createElement('h2');
                    titleOfComment.classList.add('titleOfComment');
                    titleOfComment.innerText = comment.name;
                    let bodyOfComment = document.createElement('p');
                    bodyOfComment.classList.add('bodyOfComment');
                    bodyOfComment.innerText = comment.body;
                    divComments.append(titleOfComment, bodyOfComment);
                    divContainerComments.append(divComments);
                    document.body.appendChild(divContainerComments);
            }
    });

//--------comments-----