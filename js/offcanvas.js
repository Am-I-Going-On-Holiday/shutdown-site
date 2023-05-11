(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })

    document.querySelector('#navbarMobileSearch').addEventListener('click', function () {
    document.querySelector('.mobile-search-bar').classList.toggle('open')
  })
})()