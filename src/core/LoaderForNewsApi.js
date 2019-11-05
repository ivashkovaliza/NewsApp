import Loader from 'core/Loader';
import CONSTANTS from 'constants.js';

export default class LoaderForNewsApi extends Loader {
  newsReq(sourceId) {
    const pageSize = 10;
    const urlNews = `https://newsapi.org/v2/everything?sources=${sourceId}&pageSize=${pageSize}&apiKey=${CONSTANTS.APIKEY}`;
    return this.getResponse(urlNews);
  }

  sourcesReq() {
    const urlSources = `https://newsapi.org/v2/sources?apiKey=${CONSTANTS.APIKEY}`;
    return this.getResponse(urlSources);
  }
}
