const page = window.location.pathname;
const lagnuage = document.getElementById('language');
const logoTitle = document.querySelector('.logo .title');
const title = document.querySelector('.welcome.title');
const items = document.querySelectorAll('.squr-text .mr15');


const english = {
    "logoTitle": "Nepal",
    "title": "Welcome to Nepal",
    "place": "places",
    "restaurant": "restaurant",
    "travel" : "travel",
    "culture": "culture",
} 

const japanese = { 
    "logoTitle": "ネパール",
    "title": "ネパールへようこそ",
    "place": "場所",
    "restaurant": "レストラン",
    "travel" : "旅行",
    "culture": "文化",
}

const nepali = {
    "logoTitle": "नेपाल",
    "title": "नेपालमा स्वागत छ",
    "place": "स्थानहरू",
    "restaurant": "रेस्टुरेन्ट",
    "travel" : "यात्रा",
    "culture": "संस्कृति",
}


console.log('Current page:', page + ' Language: ', lagnuage.value);


lagnuage.addEventListener('change', () => {
    if(lagnuage.value === 'en') {
        logoTitle.textContent = english.logoTitle;
        title.textContent = english.title;
        items[0].textContent = english.place;
        items[1].textContent = english.restaurant;
        items[2].textContent = english.travel;
        items[3].textContent = english.culture;
    } else if (lagnuage.value === 'jp') {
        logoTitle.textContent = japanese.logoTitle;
        title.textContent = japanese.title;
        items[0].textContent = japanese.place;
        items[1].textContent = japanese.restaurant;
        items[2].textContent = japanese.travel;
        items[3].textContent = japanese.culture;
    } else if (lagnuage.value === 'ne') {
        logoTitle.textContent = nepali.logoTitle;
        title.textContent = nepali.title;
        items[0].textContent = nepali.place;
        items[1].textContent = nepali.restaurant;
        items[2].textContent = nepali.travel;
        items[3].textContent = nepali.culture;
    }
});







