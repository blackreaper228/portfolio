import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import BlurredImage from './components/BlurredImage.jsx'
import imageData from './javascript/images.js'

// page.jsx

const renderImage = (containerId, imageProps) => {
  const container = document.getElementById(containerId)
  if (container) {
    const root = createRoot(container)
    root.render(
      <BlurredImage
        imageUrl={imageProps.imageUrl}
        blurhash={imageProps.blurhash}
        className={imageProps.className}
      />
    )
  }
}

const mediaQuery = window.matchMedia('(min-width: 462px)')

function renderImagesIfScreenWidthMatches(e) {
  if (e.matches) {
    // Если ширина экрана больше 462px
    document.addEventListener('DOMContentLoaded', () => {
      renderImage('00', imageData[0])
      renderImage('1', imageData[2])
      renderImage('2', imageData[3])
      renderImage('3', imageData[4])
      renderImage('4', imageData[5])
      renderImage('5', imageData[6])
      renderImage('6', imageData[7])
      renderImage('7', imageData[8])
      renderImage('8', imageData[9])
      renderImage('9', imageData[10])
      renderImage('10', imageData[11])
      renderImage('11', imageData[12])
      renderImage('12', imageData[13])
      renderImage('13', imageData[14])
      renderImage('14', imageData[15])
      renderImage('15', imageData[16])
      renderImage('16', imageData[17])
      renderImage('17', imageData[18])
      renderImage('18', imageData[19])
      renderImage('19', imageData[20])
      renderImage('20', imageData[21])
      renderImage('21', imageData[22])
      renderImage('22', imageData[23])
      renderImage('23', imageData[24])
      renderImage('24', imageData[25])
      renderImage('25', imageData[26])
      renderImage('26', imageData[27])
      renderImage('27', imageData[28])
      renderImage('28', imageData[29])
      renderImage('29', imageData[30])
      renderImage('30', imageData[31])
      renderImage('31', imageData[32])
      renderImage('32', imageData[33])
      renderImage('33', imageData[34])
      renderImage('34', imageData[35])
      renderImage('35', imageData[36])
      renderImage('36', imageData[37])
      renderImage('37', imageData[38])
      renderImage('38', imageData[39])
      renderImage('gif1', imageData[40])
      renderImage('gif2', imageData[41])
      renderImage('gif3', imageData[42])
      renderImage('gif4', imageData[43])
      renderImage('gif5', imageData[44])
    })
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      renderImage('00', imageData[38])
      renderImage('1', imageData[2])
      renderImage('2', imageData[3])
      renderImage('3', imageData[4])
      renderImage('4', imageData[5])
      renderImage('5', imageData[39])
      renderImage('6', imageData[7])
      renderImage('7', imageData[8])
      renderImage('8', imageData[9])
      renderImage('9', imageData[40])
      renderImage('10', imageData[11])
      renderImage('11', imageData[12])
      renderImage('12', imageData[13])
      renderImage('13', imageData[14])
      renderImage('14', imageData[15])
      renderImage('15', imageData[41])
      renderImage('16', imageData[17])
      renderImage('17', imageData[18])
      renderImage('18', imageData[19])
      renderImage('19', imageData[20])
      renderImage('20', imageData[21])
      renderImage('21', imageData[22])
      renderImage('22', imageData[23])
      renderImage('23', imageData[24])
      renderImage('24', imageData[42])
      renderImage('25', imageData[26])
      renderImage('26', imageData[27])
      renderImage('27', imageData[28])
      renderImage('28', imageData[29])
      renderImage('29', imageData[30])
      renderImage('30', imageData[31])
      renderImage('31', imageData[32])
      renderImage('32', imageData[33])
      renderImage('33', imageData[34])
      renderImage('34', imageData[35])
      renderImage('35', imageData[36])
      renderImage('36', imageData[37])
      renderImage('37', imageData[38])
      renderImage('38', imageData[39])
      renderImage('gif1', imageData[40])
      renderImage('gif2', imageData[41])
      renderImage('gif3', imageData[42])
      renderImage('gif4', imageData[43])
      renderImage('gif5', imageData[44])
    })
  }
}

renderImagesIfScreenWidthMatches(mediaQuery)
mediaQuery.addListener(renderImagesIfScreenWidthMatches)

//index.js

function Element(e) {
  document.querySelector(e).classList.remove('U_Hide')
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav_kolya').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  document.getElementById('nav_unimate').addEventListener('click', function () {
    const Unimate = document.getElementById('Unimate')
    const elementPosition = Unimate.getBoundingClientRect().top + window.scrollY
    const offset = window.innerWidth * 0.02773 // vw

    window.scrollTo({
      top: elementPosition - offset,
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
    const unimate = document.getElementById('Unimate')
    const adc = document.getElementById('ADC')
    const pog = document.getElementById('pog')
    const chat = document.getElementById('chat')
    const jinx = document.getElementById('jinx')
    const nice = document.getElementById('nice')

    const nav_adc = document.getElementById('nav_adc')
    const nav_unimate = document.getElementById('nav_unimate')
    const nav_pog = document.getElementById('nav_pog')
    const nav_chat = document.getElementById('nav_chat')
    const nav_jinx = document.getElementById('nav_jinx')
    const nav_nice = document.getElementById('nav_nice')

    // Получаем позиции элемента ADC относительно окна просмотра
    const unimateRect = unimate.getBoundingClientRect()
    const adcRect = adc.getBoundingClientRect()
    const pogRect = pog.getBoundingClientRect()
    const chatRect = chat.getBoundingClientRect()
    const jinxRect = jinx.getBoundingClientRect()
    const niceRect = nice.getBoundingClientRect()

    // Проверяем, виден ли элемент ADC в пределах видимости
    if (unimateRect.top < window.innerHeight && unimateRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_unimate.classList.add('highlight')
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_unimate.classList.remove('highlight')
    }

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
})
