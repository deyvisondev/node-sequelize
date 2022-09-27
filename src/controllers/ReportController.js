const User = require('../models/User')
const { Op } = require('sequelize')


module.exports = {

    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
            }
        }, 
        include: [
            { association: 'addresses', where: { street: 'teste@gmail.com' } },
            { association: 'techs',
              required: false,
              where: {
                name: {
                    [Op.iLike]: 'Javascript'
                }
              }}
        ]
        })
            return res.json(users)
    }

}