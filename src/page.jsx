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
      renderImage('39', imageData[40])
      renderImage('40', imageData[41])
      renderImage('41', imageData[42])
      renderImage('42', imageData[43])
      renderImage('43', imageData[44])
      renderImage('44', imageData[45])
      renderImage('45', imageData[46])
      renderImage('gif1', imageData[47])
      renderImage('gif2', imageData[48])
      renderImage('gif3', imageData[49])
      renderImage('gif4', imageData[50])
      renderImage('gif5', imageData[51])
      renderImage('avatar', imageData[1])
    })
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      renderImage('00', imageData[52])
      renderImage('1', imageData[2])
      renderImage('2', imageData[3])
      renderImage('3', imageData[4])
      renderImage('4', imageData[5])
      renderImage('5', imageData[53])
      renderImage('6', imageData[7])
      renderImage('7', imageData[8])
      renderImage('8', imageData[9])
      renderImage('9', imageData[54])
      renderImage('10', imageData[11])
      renderImage('11', imageData[12])
      renderImage('12', imageData[13])
      renderImage('13', imageData[14])
      renderImage('14', imageData[15])
      renderImage('15', imageData[55])
      renderImage('16', imageData[17])
      renderImage('17', imageData[18])
      renderImage('18', imageData[19])
      renderImage('19', imageData[20])
      renderImage('20', imageData[56])
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
      renderImage('38', imageData[57])
      renderImage('39', imageData[58])
      renderImage('40', imageData[41])
      renderImage('41', imageData[42])
      renderImage('42', imageData[43])
      renderImage('43', imageData[44])
      renderImage('44', imageData[45])
      renderImage('45', imageData[46])
      renderImage('gif1', imageData[47])
      renderImage('gif2', imageData[48])
      renderImage('gif3', imageData[49])
      renderImage('gif4', imageData[50])
      renderImage('gif5', imageData[51])
      renderImage('avatar', imageData[59])
    })
  }
}

renderImagesIfScreenWidthMatches(mediaQuery)
mediaQuery.addListener(renderImagesIfScreenWidthMatches)

//index.js

function Element(e) {
  document.querySelector(e).classList.remove('U_Hide')
}

// Функция для анимации элемента .top_title_scroll_down
function setupScrollDownAnimation() {
  const scrollDownElement = document.querySelector('.top_title_scroll_down')

  if (scrollDownElement) {
    // Функция для запуска анимации
    const triggerAnimation = () => {
      scrollDownElement.style.animation = 'tilting-sharp 0.8s steps(2, end) 2'

      // Сбрасываем анимацию после завершения
      setTimeout(() => {
        scrollDownElement.style.animation = ''
      }, 1600)
    }

    // Запускаем анимацию сразу
    triggerAnimation()

    // Запускаем каждые 15 секунд
    setInterval(triggerAnimation, 3000)

    // Добавляем обработчик клика для скролла к h2 "Просто крутые проекты"
    scrollDownElement.addEventListener('click', () => {
      // Ищем h2 с текстом "Просто крутые проекты"
      const h2Elements = document.querySelectorAll('h2')
      let targetElement = null

      h2Elements.forEach((h2) => {
        if (h2.textContent.includes('Просто крутые проекты')) {
          targetElement = h2
        }
      })

      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - 100

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    })
  }
}

// Функция для прелоадера с отслеживанием загрузки
function setupPreloader() {
  const loadingModal = document.querySelector('.loading_modal')
  const progressBar = document.querySelector('.loading_progress_bar')

  let loadedCount = 0
  let totalCount = 0

  // Функция обновления прогресса
  const updateProgress = () => {
    const percentage = Math.round((loadedCount / totalCount) * 100)
    if (progressBar) {
      // Создаем стиль для псевдоэлемента
      const styleId = 'progress-bar-style'
      let style = document.getElementById(styleId)
      if (!style) {
        style = document.createElement('style')
        style.id = styleId
        document.head.appendChild(style)
      }
      style.textContent = `
        .loading_progress_bar::after {
          width: ${percentage}% !important;
        }
      `
    }

    // Когда всё загружено, скрываем прелоадер
    if (loadedCount >= totalCount) {
      setTimeout(() => {
        if (loadingModal) {
          loadingModal.classList.add('hide')
          // Полностью удаляем элемент через 500ms после анимации
          setTimeout(() => {
            loadingModal.style.display = 'none'
          }, 500)
        }
      }, 500) // Небольшая задержка для показа 100%
    }
  }

  // Получаем все элементы первого экрана для отслеживания
  const firstScreenElements = []

  // Добавляем background-image элементы
  const bgElements = [
    '.top_title_bg',
    '.top_title_bg_avatar',
    '.top_title_bg_lines',
    '.top_title_bg_avatar_big',
    '.loading_anim'
  ]

  bgElements.forEach((selector) => {
    const element = document.querySelector(selector)
    if (element) {
      const computedStyle = getComputedStyle(element)
      const bgImage = computedStyle.backgroundImage
      if (bgImage && bgImage !== 'none') {
        const url = bgImage.match(/url\(["']?([^"')]*)["']?\)/)
        if (url && url[1]) {
          firstScreenElements.push({
            type: 'background',
            url: url[1],
            element: element
          })
        }
      }
    }
  })

  // Добавляем обычные img элементы (если есть)
  const imgElements = document.querySelectorAll('.top_title_wrap img')
  imgElements.forEach((img) => {
    if (img.src) {
      firstScreenElements.push({
        type: 'image',
        url: img.src,
        element: img
      })
    }
  })

  totalCount = firstScreenElements.length

  if (totalCount === 0) {
    // Если нет элементов для загрузки, сразу скрываем прелоадер
    updateProgress()
    return
  }

  // Загружаем каждый элемент
  firstScreenElements.forEach((item) => {
    const img = new Image()

    img.onload = () => {
      loadedCount++
      updateProgress()
    }

    img.onerror = () => {
      loadedCount++ // Считаем ошибки как загруженные, чтобы не блокировать
      updateProgress()
    }

    img.src = item.url
  })

  // Устанавливаем начальный прогресс
  updateProgress()
}

document.addEventListener('DOMContentLoaded', () => {
  // Инициализируем прелоадер
  setupPreloader()

  // Инициализируем анимацию scroll down
  setupScrollDownAnimation()

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

  document
    .getElementById('nav_schizofiles')
    .addEventListener('click', function () {
      const pog = document.getElementById('schizofiles')
      const elementPosition = pog.getBoundingClientRect().top + window.scrollY
      const offset = window.innerWidth * 0.02773 // vw

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    })

  // document.getElementById('nav_chat').addEventListener('click', function () {
  //   const chat = document.getElementById('chat')
  //   const elementPosition = chat.getBoundingClientRect().top + window.scrollY
  //   const offset = window.innerWidth * 0.02773 // vw

  //   window.scrollTo({
  //     top: elementPosition - offset,
  //     behavior: 'smooth'
  //   })
  // })

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
    // const chat = document.getElementById('chat')
    const schizofiles = document.getElementById('schizofiles')
    const jinx = document.getElementById('jinx')
    const nice = document.getElementById('nice')

    const nav_adc = document.getElementById('nav_adc')
    const nav_unimate = document.getElementById('nav_unimate')
    const nav_pog = document.getElementById('nav_pog')
    // const nav_chat = document.getElementById('nav_chat')
    const nav_schizofiles = document.getElementById('nav_schizofiles')
    const nav_jinx = document.getElementById('nav_jinx')
    const nav_nice = document.getElementById('nav_nice')

    // Получаем позиции элемента ADC относительно окна просмотра
    const unimateRect = unimate.getBoundingClientRect()
    const adcRect = adc.getBoundingClientRect()
    const pogRect = pog.getBoundingClientRect()
    // const chatRect = chat.getBoundingClientRect()
    const schizofilesRect = schizofiles.getBoundingClientRect()
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

    if (
      schizofilesRect.top < window.innerHeight &&
      schizofilesRect.bottom > 0
    ) {
      // Меняем цвет текста на белый
      nav_schizofiles.classList.add('highlight')
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_schizofiles.classList.remove('highlight')
    }

    // if (chatRect.top < window.innerHeight && chatRect.bottom > 0) {
    //   // Меняем цвет текста на белый
    //   nav_chat.classList.add('highlight')
    // } else {
    //   // Восстанавливаем цвет текста на черный, если элемент не виден
    //   nav_chat.classList.remove('highlight')
    // }

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
})
