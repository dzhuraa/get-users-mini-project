fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((value) => {
        let data = value
        console.log(data);
        for (const user of data) {
            let div = document.createElement('div');
            div.classList.add('user-box');
            let h2 = document.createElement('h2');
            h2.innerText = `${user.id} ${user.name}`;
            let btn = document.createElement('button');
            btn.innerText = 'About user';
            let a = document.createElement('a');
            a.href = '../user-details/user-details.html?id=' + user.id;
            a.appendChild(btn);
            div.append(h2, a);
            document.body.appendChild(div);
        }
    });