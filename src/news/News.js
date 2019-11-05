import './news.scss';

export default class News {
  drawNews(newsArr) {
    this.clearNews();

    const tmpl = document.querySelector('#newsItemTemplate');
    const newsContainer = document.querySelector('.news');

    if(!newsArr.length) {
      this.showNoNewsMessage(newsContainer);

      return;
    }

    newsArr.forEach(element => {
      const newsElement = tmpl.content.cloneNode(true);
      const receivedDescription = element.description || '';
      const newsDescription = this.createNewsDescription(receivedDescription);
      const date = new Date(element.publishedAt);

      newsElement.querySelector('.news__item-img').setAttribute('src', element.urlToImage ? element.urlToImage : 'https://picsum.photos/1200/630');
      newsElement.querySelector('.news__item-title').innerHTML = element.title;
      newsElement.querySelector('.news__item-description').innerHTML = newsDescription;
      newsElement.querySelector('.news__item-link').setAttribute('href', element.url);
      newsElement.querySelector('.news__item-day-month').innerHTML = date.getDate() + '/' + date.getMonth();
      newsElement.querySelector('.news__item-year').innerHTML = date.getFullYear();

      newsContainer.appendChild(newsElement);
    });
  }

  showNoNewsMessage(newsContainer) {
    const h2 = document.createElement('h2');
    const noNewsMessage = 'Sorry, there are no news on this channel yet.';

    h2.className  = 'error-message';
    h2.innerHTML = noNewsMessage;
    newsContainer.appendChild(h2);
  }

  clearNews() {
    document.querySelector('.news').innerHTML = '';
  }

  createNewsDescription (description) {
    const maxNumberOfCharacters = 120;
    const isValidDescription = description.length < maxNumberOfCharacters;

    return isValidDescription ? description : `${description.slice(0, maxNumberOfCharacters - 1)}...`;
  }
}
