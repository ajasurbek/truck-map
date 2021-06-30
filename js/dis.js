

var body = document.body
// var header = document.querySelector('.header');
// var btn = document.querySelector('.header__button-toggler');
// btn.addEventListener('click', () => {
//     header.classList.toggle('header--open');
//     btn.classList.toggle('btn__fixed')
// });
// body.classList.remove("body--nojs")
// header.classList.remove("header--nojs")

// let date =  new Date();
// let year = date.getFullYear()
// let month = date.getMonth()+1
// let hour = date.getHours()
// let minute = date.getMinutes()
// let todayDate = String(date.getDate()).padStart(2,'0')
// let datePattern = year +'-'+ '0' + month   +'-'+ todayDate + 'T' + hour + ':' + minute
// document.querySelector('.input__date').value = datePattern


// let elBtnDel = document.querySelector('.delete__btn') 
// let elSelect = document.querySelector('.select_a')
// let elButton = document.querySelector('.select__transport-form')
// elBtnDel.addEventListener('click', () => {
//     elSelect.classList.toggle('select__active');
// });
// elButton.addEventListener('click', () => {
//     elSelect.classList.toggle('select__active');
// });



// let elBtnTarif = document.querySelector('.form__btn-tarif')
// let elTarifWrapper = document.querySelector('.form__tarif-wrapper')
// elBtnTarif.addEventListener('click', () => {
//     elBtnTarif.classList.toggle('btn__radius');
//     elTarifWrapper.classList.toggle('tarif__active');
// });

// ===================================
// let sizes = [25, 30, 35];
// let elTarifInfo = document.querySelector('.tarif__info')
// for (let i = 0; i < sizes.length; i++) {
//     let elSizeLabel = document.createElement('label');
//     let elSizeInput = document.createElement('input');
//     let elNarhSpan = document.createElement('span');
//     let elSizeSpan = document.createElement('span');
  
//     elSizeInput.type = 'radio';
//     elSizeInput.name = 'size';
//     elSizeInput.classList.add('size-radio', 'js-size-radio');
//     elSizeInput.value = sizes[i];
  
//     elNarhSpan.textContent = `${sizes[i]} 0,00 cm`;
  
//     elSizeInput.addEventListener('change', function () {
//         elTarifInfo.textContent = this.value;
//     });
  
//     elSizeLabel.append(elNarhSpan,elSizeInput, elSizeSpan);
//     elTarifWrapper.appendChild(elSizeLabel);
//   }







// ======================================

// ==================================
// let elSlider = document.querySelector('.slider')
// const imgs = document.getElementById('imgs')
// const leftBtn = document.getElementById('left')
// const rightBtn = document.getElementById('right')

// const img = document.querySelectorAll('#imgs img')

// let idx = 0

// function run() {
//     idx++
//     changeImage()
// }

// function changeImage() {
//     if(idx > img.length - 1) {
//         idx = 0
//     } else if(idx < 0) {
//         idx = img.length - 1
//     }

//     imgs.style.transform = `translateX(${-idx * 220}px)`
// }


// rightBtn.addEventListener('click', () => {
//     idx++
//     changeImage()
// })

// leftBtn.addEventListener('click', () => {
//     idx--
//     changeImage()
// })
// ======================================


var body = document.body
var header = document.querySelector('.header');
var btn = document.querySelector('.header__button-toggler');
btn.addEventListener('click', () => {
    header.classList.toggle('header--open');
    btn.classList.toggle('btn__fixed')
});
body.classList.remove("body--nojs")
header.classList.remove("header--nojs")