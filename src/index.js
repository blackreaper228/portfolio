import './index.css'
import jpg from './images/image.jpg'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav_kolya').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  document.getElementById('nav_adc').addEventListener('click', function () {
    const ADC = document.getElementById('ADC')
    const elementPosition = ADC.getBoundingClientRect().top + window.scrollY
    const offset = window.innerWidth * 0.02773 // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  })

  document.getElementById('nav_pog').addEventListener('click', function () {
    const pog = document.getElementById('pog')
    const elementPosition = pog.getBoundingClientRect().top + window.scrollY
    const offset = window.innerWidth * 0.02773 // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  })

  document.getElementById('nav_chat').addEventListener('click', function () {
    const chat = document.getElementById('chat')
    const elementPosition = chat.getBoundingClientRect().top + window.scrollY
    const offset = window.innerWidth * 0.02773 // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  })

  document.getElementById('nav_jinx').addEventListener('click', function () {
    const jinx = document.getElementById('jinx')
    const elementPosition = jinx.getBoundingClientRect().top + window.scrollY
    const offset = window.innerWidth * 0.02773 // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  })

  document.getElementById('nav_nice').addEventListener('click', function () {
    const nice = document.getElementById('nice')
    const elementPosition = nice.getBoundingClientRect().top + window.scrollY
    const offset = window.innerWidth * 0.02773 // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  })

  window.addEventListener('scroll', function () {
    const adc = document.getElementById('ADC')
    const pog = document.getElementById('pog')
    const chat = document.getElementById('chat')
    const jinx = document.getElementById('jinx')
    const nice = document.getElementById('nice')

    const nav_adc = document.getElementById('nav_adc')
    const nav_pog = document.getElementById('nav_pog')
    const nav_chat = document.getElementById('nav_chat')
    const nav_jinx = document.getElementById('nav_jinx')
    const nav_nice = document.getElementById('nav_nice')

    // Получаем позиции элемента ADC относительно окна просмотра
    const adcRect = adc.getBoundingClientRect()
    const pogRect = pog.getBoundingClientRect()
    const chatRect = chat.getBoundingClientRect()
    const jinxRect = jinx.getBoundingClientRect()
    const niceRect = nice.getBoundingClientRect()

    // Проверяем, виден ли элемент ADC в пределах видимости
    if (adcRect.top < window.innerHeight && adcRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_adc.classList.add('highlight')
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_adc.classList.remove('highlight')
    }

    if (pogRect.top < window.innerHeight && pogRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_pog.classList.add('highlight')
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_pog.classList.remove('highlight')
    }

    if (chatRect.top < window.innerHeight && chatRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_chat.classList.add('highlight')
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_chat.classList.remove('highlight')
    }

    if (jinxRect.top < window.innerHeight && jinxRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_jinx.classList.add('highlight')
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_jinx.classList.remove('highlight')
    }

    if (niceRect.top < window.innerHeight && niceRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_nice.classList.add('highlight')
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_nice.classList.remove('highlight')
    }
  })

  // const image = new Image()
  // image.src = jpg
  // document.querySelector('.images').appendChild(image)

  document.querySelectorAll('.Q_BigPic').forEach((img) => {
    const placeholder = img.src // Изображение, которое загружается по умолчанию

    // Обработчик загрузки основной версии
    img.addEventListener('load', () => {
      img.classList.add('loaded') // Когда загружено, делаем изображение видимым
    })

    // Заменяем на основную версию после загрузки миниатюры
    const fullSrc = img.getAttribute('src')
    img.setAttribute('src', placeholder) // Показываем миниатюру
    img.src = fullSrc // Подменяем на основное изображение
  })
})
