const Threads = require('../model/thread')
const isnumber = require('is-number')
const { Op } = require('sequelize')
const helper = require('../helper')

exports.postThread = async (req, res, next) => {
    if(helper.isNotEnglish(req.body.message.trim())){
        await Threads.create({message : req.body.message.trim()})
        res.redirect('/') 
    }else{
        res.status(500).send('वेश्या के पुत्र')
    }
}


exports.getAllThreads = async (req, res, next) => {
    let allthreads =  await Threads.findAll({
        where:{
            threadId : null
        }
    })
    allthreads = allthreads.map(user => user.toJSON())
    res.render('index',{
        data : allthreads
    })
}

exports.getThreadById = async (req, res, next) => {
    let id = req.params.id
    if(isnumber(id)){
        let result = await Threads.findAll({
            where: {
              [Op.or]: [{id : id}, {threadId : id}],
            },
          });
          result = result.map(user => user.toJSON())
          let title = result.filter(x => x.threadId == null)
          let comments = result.filter(x => x.threadId != null)
          res.render('thread',{
              title : title,
              comments : comments,
              link : '<a href="https://google.com>google</a>'
          })   
    }else{
        res.status(500).send('वेश्या के पुत्र')
    }
}

exports.postThreadById = async (req, res, next) => {
    let id = req.params.id
    let message = req.body.message
    if(isnumber(id) && helper.isNotEnglish(message.trim())){
        await Threads.create({message : message.trim(), threadId : id}) 
        res.redirect('/'+id) 
    }else{
        res.status(500).send('वेश्या के पुत्र')
    }
}

