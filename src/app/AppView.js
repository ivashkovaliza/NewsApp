import Sources from 'sources/Sources';
import News from 'news/News';

export default class AppView{
  constructor() {
    this.sources = new Sources();
    this.news = new News();
  }

  drawSources(data) {
    this.sources.drawNewsSources(data.sources)
  }

  drawNews(data) {
    this.news.drawNews(data.articles)
  }
}
