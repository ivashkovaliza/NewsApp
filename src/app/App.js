import Sources from 'sources/sources.js';
import News from 'news/news.js';
import LoaderForNewsApi from 'core/LoaderForNewsApi';

export default class App {
  init() {
    const loader =  new LoaderForNewsApi();
    const sources = new Sources(loader);
    const news = new News(loader);
    sources.init(news.showNews);
  }
}
