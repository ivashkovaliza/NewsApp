import './sources.scss';
import CONSTANTS from 'constants.js';

export default class Sources {
  async getSourcesAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  init(handler) {
    const urlSources = `https://newsapi.org/v2/sources?apiKey=${CONSTANTS.APIKEY}`;

    this.getSourcesAsync(urlSources)
      .then(data => {
        this.drawNewsSources(data.sources);
        document.querySelector('.nav-wrapper').addEventListener('click', handler);
      });
  }

  drawAlphabetNav(navItemsNamesArr, navItemElement, sourceFirstLetter) {
    const nav = document.querySelector('.nav-wrapper');
    const menuBtn = document.querySelector('.menu-btn');

    if (!navItemsNamesArr.includes(sourceFirstLetter)) {
      navItemsNamesArr.push(sourceFirstLetter);
      navItemElement.querySelector('.dropbtn').innerHTML = sourceFirstLetter;
      navItemElement.querySelector('.dropdown-content').setAttribute('id', `${sourceFirstLetter}-sources`);
      nav.appendChild(navItemElement);
    }

    menuBtn.addEventListener('click', this.changeSourcesPresentation);
  }

  drawNewsSources(sourcesArr) {
    const navItemTemplate = document.querySelector('#navItemTemplate');
    const sourceItemTemplate = document.querySelector('#sourceItemTemplate');
    const navItemsNamesArr = [];

    sourcesArr.forEach(element => {
      const navItemElement = navItemTemplate.content.cloneNode(true);
      const sourceItemElement = sourceItemTemplate.content.cloneNode(true);
      const sourceFirstLetter = element.name[0];

      this.drawAlphabetNav(navItemsNamesArr, navItemElement, sourceFirstLetter);

      sourceItemElement.querySelector('.dropdown-content__item').innerHTML = element.name;
      sourceItemElement.querySelector('.dropdown-content__item').setAttribute('id', element.id);
      document.querySelector(`#${sourceFirstLetter}-sources`).appendChild(sourceItemElement);
    });
  }

  changeSourcesPresentation() {
    const nav = document.getElementById("topNav");
    if (nav.className === "nav-wrapper") {
      nav.className += " responsive";
    } else {
      nav.className = "nav-wrapper";
    }
  }
}
