import api from '@/config/api';
import { GITHUB_REPOSITORIES_URL } from '@/config/constants';

export default class GithubApi {
  static getTrends() {
    return api.get(`${GITHUB_REPOSITORIES_URL}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
