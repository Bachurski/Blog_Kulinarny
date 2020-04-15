/****** zmienne *******/
const headerSec = document.body.querySelector('.header');
const widthNav = document.body.querySelector('ul.contenerNav');
const phone = 746;
const tablet = 1024;
/**** Zmiana width przy scroll ***/
window.addEventListener("scroll", function () {
    if (window.pageYOffset > headerSec.offsetHeight) {
        widthNav.style.width = "80vw";
    } else widthNav.style.width = "100vw";
});
/****** RWD ********/
// const mediaPhone = window.matchMedia("(max-width: 1000px)");



/**** Body section ****/


const sectionBody = document.querySelector('.bodySection');
/**** Przepisy szybkie dodawanie*****/
const divList = [{
        img: "img/obiad1.jpg",
        textName: "Obiad 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid."
    },
    {
        img: "img/obiad2.jpg",
        textName: "Obiad 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid."
    },
    {
        img: "img/obiad3.jpg",
        textName: "Obiad 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid."
    },
    {
        img: "img/obiad4.jpg",
        textName: "Obiad 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid."
    },
    {
        img: "img/obiad5.jpg",
        textName: "Obiad 5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid."
    }
]

const addContener = () => {
    for (let i = 0; i < divList.length; i++) {
        const div = document.createElement("div");
        const spn = document.createElement("p");
        const h1 = document.createElement("h1");
        const image = document.createElement("img");
        /*** przypisanie obiektow do diva *****/
        sectionBody.appendChild(div).classList.add("contener");
        document.querySelectorAll('.contener')[i].appendChild(image).classList.add("fotka");
        document.querySelectorAll('.contener')[i].appendChild(h1).classList.add("naglowek");
        document.querySelectorAll('.contener')[i].appendChild(spn).classList.add("opis");
        image.src = divList[i].img;
        h1.textContent = divList[i].textName;
        spn.textContent = divList[i].text;
        /** Style do przepisow *****/
        image.style.width = '40vw';
        image.style.margin = "0 20vw";
        div.style.width = "80vw";
        image.style.display = "column"
        document.querySelectorAll('.contener')[i].style.paddingTop = '50px';
        h1.style.display = 'flex';
        h1.style.flexDirection = 'column';
        h1.style.textAlign = "center";
        spn.style.textAlign = "center";
        spn.style.padding = "20px 0";
        h1.style.paddingTop = "10px";
    }
}
addContener();