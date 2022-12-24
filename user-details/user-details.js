let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(value => {
        let divMain = document.createElement('div');
        divMain.classList.add('container-details');
        let id = document.createElement('h2');
        id.innerText = `${value.id}`;
        let name = document.createElement('h2');
        name.innerText = `${value.name}`;
        let username = document.createElement('h2');
        username.innerText = `${value.username}`;
        let email = document.createElement('h3');
        email.innerText = `${value.email}`;
        let divAddress = document.createElement('div');
        divAddress.classList.add('address');
        let street = document.createElement('h5');
        street.innerText = `${value.address.street}`;
        let suite = document.createElement('h5');
        suite.innerText = `${value.address.suite}`;
        let city = document.createElement('h5');
        city.innerText = `${value.address.city}`;
        let zipcode = document.createElement('h5');
        zipcode.innerText = `${value.address.zipcode}`;
        let divGeo = document.createElement('div');
        divGeo.classList.add('geo')
        let lat = document.createElement('h5');
        lat.innerText = `${value.address.geo.lat}`;
        let lng = document.createElement('h5');
        lng.innerText = `${value.address.geo.lng}`;
        divGeo.append(lat, lng);
        divAddress.append(street, suite, city, zipcode, divGeo);
        let phone = document.createElement('h3');
        phone.innerText = `${value.phone}`;
        let website = document.createElement('h3');
        website.innerText = `${value.website}`;
        let divCompany = document.createElement('div');
        divCompany.classList.add('company')
        let companyName = document.createElement('h5');
        companyName.innerText = `${value.company.name}`;
        let catchPhrase = document.createElement('h5');
        catchPhrase.innerText = `${value.company.catchPhrase}`;
        let bs = document.createElement('h5');
        bs.innerText = `${value.company.bs}`;
        divCompany.append(companyName, catchPhrase, bs)
        divMain.append(id, name, username, email, divAddress, phone, website, companyName, catchPhrase, bs);
        document.body.appendChild(divMain);
    });