const Users = require("../users")

//DTO => Data Transfer Object
const UsersDto = (result, index = 0) => {
    return Users (
        result.rows[index].id,
        result.rows[index].username,
        result.rows[index].email
    )
}

module.exports = UsersDto;