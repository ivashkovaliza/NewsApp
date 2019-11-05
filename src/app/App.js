import Sources from 'sources/sources.js';
import News from 'news/news.js';
import LoaderForNewsApi from 'core/LoaderForNewsApi';

export default class App {
  //getData????
  /*init() {
    const loader =  new LoaderForNewsApi();
    const sources = new Sources(loader);
    const news = new News(loader);
    sources.init(news.showNews);
  }*/
  async getData(url, options) {
    let response = await fetch(url, options);

    if(response.ok) {
      let data = await response.json();
      return {data};
    } else {
      return {error: true};
    }
  }
}
