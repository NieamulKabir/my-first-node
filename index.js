const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellow my World!')
});

const users = [
    { id: 0, name: 'Kabir', email: 'kabir@gmail.com', phone: '01911605179' },
    { id: 1, name: 'Nieamul', email: 'nieamulr@gmail.com', phone: '01911605179' },
    { id: 2, name: 'Molu', email: 'molu@gmail.com', phone: '01911605179' },
    { id: 3, name: 'Faria', email: 'faria@gmail.com', phone: '01911605179' },
    { id: 4, name: 'Gulu', email: 'gulu@gmail.com', phone: '01911605179' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Lisenning ', port);
});