const data = document.forms[0];
const userKeys = ['email', 'password'];

data.oninvalid = () => {
    alert('invalid element');
}

data.onsubmit = () => {
    const user = {};
    for(let i of userKeys){
        user[i] = data[i].value;
    }
    localStorage.setItem('user', JSON.stringify(user));
    //history.back();
    location.replace(location.origin);
    return false;
};

