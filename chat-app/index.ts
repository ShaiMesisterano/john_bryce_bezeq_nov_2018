const mysql = require('promise-mysql');

(async function () {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'chatapp'
    });

    // Messages
    const queryMessages = "select * from messages";
    const messages = await conn.query(queryMessages);

    for (let i=0;i<messages.length;i++){
        console.log(messages[i].message);
    }

    // Users
    const queryUsers = "select * from users";
    const users = await conn.query(queryUsers);
    // for-loop
    for (let i=0; i<users.length; i++) {
        console.log(users[i].firstname + " " + users[i].lastname);
    }
    // for-of
    for (let user of users) {
        console.log(user.firstname + " " + user.lastname);
    }
    // forEach
    users.forEach(function(user) {
        console.log(user.firstname + " " + user.lastname);
    })
    // map
    users.map(function(user) {
        console.log(user.firstname + " " + user.lastname);
    });

    // SQL Update
    // const updateUser = "update users set firstname='moshe' where firstname='avi'";
    // const result = await conn.query(updateUser);
    // console.log(`RESULT: ${JSON.stringify(result)}`);

    conn.end();
})();