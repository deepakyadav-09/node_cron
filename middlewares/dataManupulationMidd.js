const receiveData = (req, res, next) => {
    res.locals.userData = {
        name: 'deepak',
        city: 'surat'
    }
    next()
}

module.exports = {
    receiveData
}