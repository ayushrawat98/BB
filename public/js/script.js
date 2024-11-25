
function addThreadId(id){
    let messagebox = document.getElementById('message')
    if(isnumber(id)){
        messagebox.value += `>>${id}\n`
    }
}

function isnumber(num){
    if (typeof num === 'number') {
        return num - num === 0;
      }
      if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
}