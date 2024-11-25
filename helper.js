exports.isNotEnglish = (text) => {
    const regex = /[a-zA-Z]/;
    if(text && regex.test(text)){
        return false
    }
    return true
}