const sequelize = require('./main')
const { DataTypes } = require('sequelize')

const Threads = sequelize.define(
    'Threads',
    {
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        threadId: {
            type: DataTypes.INTEGER,
            allowNull : true
        }
    }
)

syncThreads = async () => {
    await Threads.sync()
}

syncThreads()

// async function a(){
//     let r = await(Threads.findAll())
//     console.log(r)
// }

// a()
module.exports = Threads
