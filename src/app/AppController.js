export default class AppController {
  constructor(model) {
    this.model = model;
    this.showNews = this.showNews.bind(this);
  }

  showNews(event) {
    const eventTarget = event.target;

    if(eventTarget.matches('.dropdown-content__item')) {
      const sourceId = eventTarget.getAttribute('id');

      this.model.loadNews(sourceId)
    }
  }

  run() {
    document.querySelector('.nav-wrapper').addEventListener('click', this.showNews);
    this.model.loadSources();  
  }
}
