let url = new URL(location.href);
let id = url.searchParams.get('id');


fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(value => {

            //------------user info(details)----------------


            let divUserDetails = document.createElement('div');
            divUserDetails.classList.add('divUserDetails');

            let id = document.createElement('h2');
            id.innerText = 'User ID: ' + `${value.id}`;

            let name = document.createElement('h2');
            name.innerText = 'Name: ' + `${value.name}`;

            let username = document.createElement('h2');
            username.innerText = 'Username: ' + `${value.username}`;

            let email = document.createElement('h3');
            email.innerText = 'Email: ' + `${value.email}`;

            let divAddress = document.createElement('div');
            divAddress.classList.add('address');

            let street = document.createElement('h5');
            street.innerText = 'Street: ' + `${value.address.street}`;

            let suite = document.createElement('h5');
            suite.innerText = 'Suite: ' + `${value.address.suite}`;

            let city = document.createElement('h5');
            city.innerText = 'City: ' + `${value.address.city}`;

            let zipcode = document.createElement('h5');
            zipcode.innerText = 'Zipcode: ' + `${value.address.zipcode}`;

            let divGeo = document.createElement('div');
            divGeo.classList.add('geo')

            let lat = document.createElement('h5');
            lat.innerText = 'Lat: ' + `${value.address.geo.lat}`;

            let lng = document.createElement('h5');
            lng.innerText = 'Lng: ' + `${value.address.geo.lng}`;

            divGeo.append(lat, lng);

            divAddress.append(street, suite, city, zipcode, divGeo);

            let phone = document.createElement('h3');
            phone.innerText = 'Phone: ' + `${value.phone}`;

            let website = document.createElement('h3');
            website.innerText = 'Website: ' + `${value.website}`;

            let divCompany = document.createElement('div');
            divCompany.classList.add('company');

            let companyName = document.createElement('h5');
            companyName.innerText = 'Company: ' + `${value.company.name}`;

            let catchPhrase = document.createElement('h5');
            catchPhrase.innerText = 'Catch phrase: ' + `${value.company.catchPhrase}`;

            let bs = document.createElement('h5');
            bs.innerText = 'Bs: ' + `${value.company.bs}`;

            divCompany.append(companyName, catchPhrase, bs);


            divUserDetails.append(id, name, username, email, divAddress, phone, website, divCompany);
            document.body.appendChild(divUserDetails);


            //------------user info(details)----------------

});


//------------button "Show posts of current user"----------------


let divShowHidePostsButton = document.createElement('div');
divShowHidePostsButton.classList.add('divButton');

let btnShowHidePosts = document.createElement('div');
btnShowHidePosts.classList.add('btnShowHidePosts')

let divPostsTitle = document.createElement('div');
divPostsTitle.classList.add('divPostsTitle');

let btnShowPosts = document.createElement('button');
btnShowPosts.innerText = 'Show posts of current user';

let btnHidePosts = document.createElement('button');
btnHidePosts.innerText = 'Hide posts of current user';
btnHidePosts.style.display = 'none';

fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    .then(value => value.json())
    .then(posts => {
            for (const post of posts) {
                    let divPostTitle = document.createElement('div');
                    let postTitle = document.createElement('h2');
                    postTitle.innerText = post.title;
                    let a = document.createElement('a');
                    let btn = document.createElement('button');
                    btn.innerText = 'Read post';
                    a.append(btn);
                    a.href = '../post-details/post-details.html?post=' + JSON.stringify(post);
                    divPostTitle.append(postTitle, a);
                    divPostsTitle.append(divPostTitle);
            }
    });

divPostsTitle.style.display = 'none';

btnShowPosts.onclick = function () {
    divPostsTitle.style.display = 'block'
    btnShowPosts.style.display = 'none';
    btnHidePosts.style.display = 'block';
};

btnHidePosts.onclick = function () {
    divPostsTitle.style.display = 'none';
    btnHidePosts.style.display = 'none';
    btnShowPosts.style.display = 'block';

};


btnShowHidePosts.append(btnShowPosts, btnHidePosts);
divShowHidePostsButton.append(btnShowHidePosts, divPostsTitle);
document.body.appendChild(divShowHidePostsButton);


//------------button "Show posts of current user"----------------