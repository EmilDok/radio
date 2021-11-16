const ListOfInputs = document.getElementsByClassName('length-side');
const imageElem = document.getElementById("imagge");

Array.prototype.slice.call(ListOfInputs).forEach(element => {
    element.addEventListener('input', updateValue);
});

function updateValue() {
    let len1 = Number(ListOfInputs[0].value);
    let len2 = Number(ListOfInputs[1].value);
    let len3 = Number(ListOfInputs[2].value);

    if (len1 != 0 && len2 != 0 && len3 != 0) {
        if (len1 < len2 + len3 && len2 < len1 + len3 && len3 < len1 + len2) {

            if (len1 == len2 && len2 == len3 && len1 == len3)
                imageElem.src = "images/tr-3.jpg";
            else if (len1 == len2 || len2 == len3 || len1 == len3)
                imageElem.src = "images/tr-2.jpg";
            else
                imageElem.src = "images/tr-1.jpg";

        } else {
            imageElem.src = "images/tr-4.jpg";
        }
    } else {
        imageElem.src = "images/tr-4.jpg";
    }
}

//for menu functions
function createButtons() {
    let cont = document.querySelector('.cont-of-words-numbers');
    let alo = document.querySelector('.input-words-numbers').value;
    let arr = alo.split('-');
    arr.sort();

    //создаем словарь
    let map = new Map();

    //ищем индекс первого слова
    let ind_of_words_bgn = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]))
            ind_of_words_bgn = i + 1;
    }

    //заносим в словарь слова
    for (let i = ind_of_words_bgn; i < arr.length; i++) {
        map.set('a' + (i + 1 - ind_of_words_bgn), arr[i]);
    }

    //заносим в словарь цифры
    for (let i = 0; i < ind_of_words_bgn; i++) {
        map.set('n' + (i + 1), arr[i]);
    }

    //создаем новые элементы li в ul - слова
    for (let i = ind_of_words_bgn; i < map.size; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = 'a' + (i + 1 - ind_of_words_bgn) + ' ' + map.get('a' + (i + 1 - ind_of_words_bgn));
        newLi.className = "btn-li";
        cont.appendChild(newLi);
    }

    //создаем новые элементы li в ul - цифры
    for (let i = 0; i < ind_of_words_bgn; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = 'n' + (i + 1) + ' ' + map.get('n' + (i + 1));
        newLi.className = "btn-li";
        cont.appendChild(newLi);
    }

    let list_of_buttons = document.getElementsByClassName('btn-li');

    for (let index = 0; index < list_of_buttons.length; index++) {
        list_of_buttons[index].addEventListener( "click" , createTitle);
    }
}

function createTitle() {
    let btnListContainer = document.querySelector('.list-of-buttons');

    let newLi = document.createElement("li");
    newLi.innerHTML = this.innerHTML.split(' ')[1];
    btnListContainer.appendChild(newLi);
}