'use strict'
var gCurrLang = 'en';
var gTrans = {
    en: {
        title: 'Book Shop',
        add: 'Add New Book',
        'add-name': 'Book Name',
        'add-price': 'Book Price',
        'update-price': 'Update Price',
        'update-price-inp': 'Enter Price',
        id: 'Id',
        name: 'Name',
        price: 'Price',
        picture: 'Picture',
        actions: 'Actions',
        'update-btn': 'Update',
        'delete-btn': 'Delete',
        'read-btn': 'Read'
    },
    es: {
        title: 'Librería',
        add: 'Añadir nuevo libro',
        'add-name': 'Nombre del libro',
        'add-price': 'Precio del libro',
        'update-price': 'Actualizar precio',
        'update-price-inp': 'Ingrese precio',
        id: 'Id',
        name: 'Nombre',
        price: 'Precio',
        picture: 'Imagen',
        actions: 'Comportamiento',
        'update-btn': 'Actualizar',
        'delete-btn': 'Eliminar',
        'read-btn': 'Leer'
    },
    he: {
        title: 'חנות ספרים',
        add: 'הוסף ספר חדש',
        'add-name': 'שם הספר',
        'add-price': 'מחיר הספר',
        'update-price': 'עדכן מחיר',
        'update-price-inp': 'הכנס מחיר',
        id: 'מ.ס',
        name: 'שם',
        price: 'מחיר',
        picture: 'תמונה',
        actions: 'פעולות',
        'update-btn': 'עדכן',
        'delete-btn': 'מחק',
        'read-btn': 'קרא'
    }
}

function setLang(lang) {
    gCurrLang = lang;
}
function getTrans(transKey) {
    var txt = gTrans[gCurrLang][transKey];
    return txt;
}

function getCuntryCurrency(){
    var price=gBooks.foreach(function(book){

    })
    if(gCurrLang==='en')return price
    else if(gCurrLang==='es')return price*0.8+'€'
    else if(gCurrLang === 'he')return price*3.5 +'₪'
}