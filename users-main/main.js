fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {
        let divMainUsers = document.createElement('div');
        divMainUsers.classList.add('divMainUsers');
        for (const user of data) {
            let userBox = document.createElement('div');
            userBox.classList.add('userBox');
            let h2 = document.createElement('h2');
            h2.innerText = `${user.id} ${user.name}`;
            let btn = document.createElement('button');
            btn.innerText = 'About user';
            let a = document.createElement('a');
            a.href = '../user-details/user-details.html?id=' + user.id;
            a.appendChild(btn);
            userBox.append(h2, a);
            divMainUsers.append(userBox);
        }
        document.body.appendChild(divMainUsers);
    });