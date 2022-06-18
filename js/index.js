const user = {
    imgSrc: '#',
    fullName: 'Tom Fox',
    stats: {
        fb: '10000',
        insta: '12500',
        tel: '8600'
    }
};

const card = document.createElement('div');
card.classList.add('card_container');

// container for user image
const imgCont = document.createElement('div');

const imgUser = document.createElement('img');
imgUser.setAttribute('src', user.imgSrc);
imgUser.setAttribute('alt', 'photo');

imgCont.append(imgUser);
card.append(imgCont);

// info container
const infoCont = document.createElement('div');
infoCont.classList.add('info_container');

const userFullName = document.createElement('p');
userFullName.classList.add('user_fullname');
userFullName.innerText = user.fullName;
infoCont.append(userFullName);

// btn container
const btnContainer = document.createElement('div');
btnContainer.classList.add('button_container');

//fb
const stat1 = document.createElement('div');
stat1.classList.add('stat', 'fb');
stat1.innerText = user.stats.fb;
btnContainer.append(stat1);
//insta
const stat2 = document.createElement('div');
stat2.classList.add('stat', 'insta');
stat2.innerText = user.stats.insta;
btnContainer.append(stat2);
// tel
const stat3 = document.createElement('div');
stat3.classList.add('tel', 'fb');
stat3.innerText = user.stats.tel;
btnContainer.append(stat3);
// присоединение btnContainer в инфо блок
infoCont.append(btnContainer);
// инфо контейнер добавляем на карту
card.append(infoCont);


const userCards = document.getElementById('userCardsContainer');
userCards.append(card);

