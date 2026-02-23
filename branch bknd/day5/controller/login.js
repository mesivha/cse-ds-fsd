import { readFile } from './readFile.js';
const FILE = './users.json';
const userlogin = async (userDetails) => {
    const { email, password } = userDetails;
    const users = await readFile(FILE);
    if(users.lenght === 0) {
        console.log ('No users found');
        return;     
    }
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
        console.log('user not registered');
        return;
    }
    
}   