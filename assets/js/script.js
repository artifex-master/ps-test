'use strict'

const toggleFunc = (elem) => {
  elem.classList.toggle('active');
};

const btn = document.querySelector('.btn-dropdwn');
const resources_wrapper = document.querySelector('.resources-dropdwn-wrapper');

btn.addEventListener('click', function() {
  toggleFunc(btn);
  toggleFunc(resources_wrapper);
});