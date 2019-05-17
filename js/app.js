'use strict';

// windows into the DOM
var headerContent = document.getElementById('header-content');
var mainContent = document.getElementById('main-content');

//having link address here makes code more readable
var linkContent = 'https://docs.google.com/presentation/d/1V-iOYsCIT2AogMVRMIl6h605QURtCYm3YV-lPKh8rSo/edit?usp=sharing';


function renderHeader(){
  var hOneEl = document.createElement('h1');
  hOneEl.textContent = 'GitHub Deployment';
  headerContent.appendChild(hOneEl);  
}

function renderMain(link){

  //image
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', 'img/wiener.png');
  imgEl.setAttribute('id', 'wiener');
  mainContent.appendChild(imgEl);

  // <p> and <a> elements
  var pEl = document.createElement('p');
  pEl.textContent = 'Wow... this site is fancy.  Follow the link below.';
  mainContent.appendChild(pEl);

  pEl = document.createElement('p');
  var aEl = document.createElement('a');
  aEl.setAttribute('href', `${link}`);
  aEl.setAttribute('target', '_blank');

  aEl.textContent = 'Google Slide Show has the \'how to\' for deployment';
  pEl.appendChild(aEl);

  mainContent.appendChild(pEl);
}


renderHeader();
renderMain(linkContent);
