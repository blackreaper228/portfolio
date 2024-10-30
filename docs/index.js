/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/image.jpg
const image_namespaceObject = __webpack_require__.p + "images/6373cac8eccfb40124d1.jpg";
;// CONCATENATED MODULE: ./src/index.js


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('nav_kolya').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  document.getElementById('nav_adc').addEventListener('click', function () {
    var ADC = document.getElementById('ADC');
    var elementPosition = ADC.getBoundingClientRect().top + window.scrollY;
    var offset = window.innerWidth * 0.02773; // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  });
  document.getElementById('nav_pog').addEventListener('click', function () {
    var pog = document.getElementById('pog');
    var elementPosition = pog.getBoundingClientRect().top + window.scrollY;
    var offset = window.innerWidth * 0.02773; // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  });
  document.getElementById('nav_chat').addEventListener('click', function () {
    var chat = document.getElementById('chat');
    var elementPosition = chat.getBoundingClientRect().top + window.scrollY;
    var offset = window.innerWidth * 0.02773; // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  });
  document.getElementById('nav_jinx').addEventListener('click', function () {
    var jinx = document.getElementById('jinx');
    var elementPosition = jinx.getBoundingClientRect().top + window.scrollY;
    var offset = window.innerWidth * 0.02773; // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  });
  document.getElementById('nav_nice').addEventListener('click', function () {
    var nice = document.getElementById('nice');
    var elementPosition = nice.getBoundingClientRect().top + window.scrollY;
    var offset = window.innerWidth * 0.02773; // vw

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  });
  window.addEventListener('scroll', function () {
    var adc = document.getElementById('ADC');
    var pog = document.getElementById('pog');
    var chat = document.getElementById('chat');
    var jinx = document.getElementById('jinx');
    var nice = document.getElementById('nice');
    var nav_adc = document.getElementById('nav_adc');
    var nav_pog = document.getElementById('nav_pog');
    var nav_chat = document.getElementById('nav_chat');
    var nav_jinx = document.getElementById('nav_jinx');
    var nav_nice = document.getElementById('nav_nice'); // Получаем позиции элемента ADC относительно окна просмотра

    var adcRect = adc.getBoundingClientRect();
    var pogRect = pog.getBoundingClientRect();
    var chatRect = chat.getBoundingClientRect();
    var jinxRect = jinx.getBoundingClientRect();
    var niceRect = nice.getBoundingClientRect(); // Проверяем, виден ли элемент ADC в пределах видимости

    if (adcRect.top < window.innerHeight && adcRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_adc.classList.add('highlight');
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_adc.classList.remove('highlight');
    }

    if (pogRect.top < window.innerHeight && pogRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_pog.classList.add('highlight');
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_pog.classList.remove('highlight');
    }

    if (chatRect.top < window.innerHeight && chatRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_chat.classList.add('highlight');
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_chat.classList.remove('highlight');
    }

    if (jinxRect.top < window.innerHeight && jinxRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_jinx.classList.add('highlight');
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_jinx.classList.remove('highlight');
    }

    if (niceRect.top < window.innerHeight && niceRect.bottom > 0) {
      // Меняем цвет текста на белый
      nav_nice.classList.add('highlight');
    } else {
      // Восстанавливаем цвет текста на черный, если элемент не виден
      nav_nice.classList.remove('highlight');
    }
  }); // const image = new Image()
  // image.src = jpg
  // document.querySelector('.images').appendChild(image)

  document.querySelectorAll('.Q_BigPic').forEach(function (img) {
    var placeholder = img.src; // Изображение, которое загружается по умолчанию
    // Обработчик загрузки основной версии

    img.addEventListener('load', function () {
      img.classList.add('loaded'); // Когда загружено, делаем изображение видимым
    }); // Заменяем на основную версию после загрузки миниатюры

    var fullSrc = img.getAttribute('src');
    img.setAttribute('src', placeholder); // Показываем миниатюру

    img.src = fullSrc; // Подменяем на основное изображение
  });
});
/******/ })()
;