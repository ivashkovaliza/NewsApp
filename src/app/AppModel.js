import LoaderForNewsApi from 'core/LoaderForNewsApi';

export default class AppModel {
  constructor(view) {
    this.loader = new LoaderForNewsApi();
    this.view = view;
  }

  getSources() {
    return this.loader.sourcesReq();
  }

  getNews(sourceId) {
    return this.loader.newsReq(sourceId);
  }

  loadSources() {
    this.getSources()
      .then(data => {
        this.view.drawSources(data);
    });
  }

  loadNews(sourceId) {
    this.getNews(sourceId)
      .then(data => {
        this.view.drawNews(data);
    });
  }
}
