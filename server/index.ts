import express from 'express';
import {users} from '../shared/users';
const app = express();
app.get('/', (req, res) => {
    res.send(users);
})