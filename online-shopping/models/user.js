const db = require('../db/config');

const User = {};

User.findOrCreate = user => {
    return db.oneOrNone(
        `
        INSERT INTO users 
            (id, name)
        VALUES
            ($1, $2)
        `,
        [user.id, user.name]
    );

};

User.findById = (id) => {
    return db.query(
        `
        SELECT * FROM users where id =  $1
        `,
        [id]
    );
};

module.exports = User;
