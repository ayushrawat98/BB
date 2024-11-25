module.exports = function isNotEnglish(req, res, next) {
    const regex = /[a-zA-Z]/;
    console.log(req.body.message)
    if(req.body.message && regex.test(req.body.message)){
        res.status(500).send('वेश्या के पुत्र')
    }else{
        next()  
    }
  }