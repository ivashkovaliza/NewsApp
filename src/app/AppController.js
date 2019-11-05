export default class AppController {
  constructor() {
  this.loader.getNews(sourceId)
  .then(data => {
    this.drawNews(data.articles);
  });
}
  async loadNews () {
    const { data, error } = await model.getNews();

    if (error) {
      view.renderErrorPopup()
    } else if (data) {
      view.renderNews(data)
    }
  }
}