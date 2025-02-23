const mainImages = document.querySelectorAll(".default .main-img img");
const thumbLists = document.querySelectorAll(".default .thumb-list div")
const lightBoxMainImages = document.querySelectorAll(".lightbox .main-img img")
const lightBoxThumbnails = document.querySelectorAll(".lightbox .thumb-list div") 

const lightbox = document.querySelector(".lightbox");
const iconClose = document.querySelector('.icon-close');
const iconPrev = document.querySelector('.icon-prev');
const iconNext = document.querySelector('.icon-next')

let currentIndex = 0; 

const changeImages = (index, mainImages, thumbLists) =>{
    mainImages.forEach((img) => {
        img.classList.remove('active')
    });

    thumbLists.forEach((thumb) =>{
        thumb.classList.remove('active')
    });

    mainImages[index].classList.add("active");
    thumbLists[index].classList.add('active');
    currentIndex = index;
};

thumbLists.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImages(index, mainImages, thumbLists)
    });
});

lightBoxThumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImages(index, lightBoxMainImages, lightBoxThumbnails)
    });
});

 mainImages.forEach((img, index)=>{
    img.addEventListener('click', ()=> {
        lightbox.classList.add('active');
        changeImages(index, lightBoxMainImages, lightBoxThumbnails)
    })
 })

 iconPrev.addEventListener('click', () => {
    if(currentIndex <=0 ){
        changeImages(mainImages.length -1, lightBoxMainImages, lightBoxThumbnails)
    } else{
        changeImages(currentIndex -1, lightBoxMainImages, lightBoxThumbnails)
    }
 })

 
 iconNext.addEventListener('click', () => {
    if(currentIndex >= mainImages.length -1 ){
        changeImages(0,  lightBoxMainImages, lightBoxThumbnails)
    } else{
        changeImages(currentIndex + 1, lightBoxMainImages, lightBoxThumbnails)
    }
 });


 iconClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
 });
