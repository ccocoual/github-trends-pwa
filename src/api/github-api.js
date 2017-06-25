import moment from 'moment';
import api from '@/config/api';
import { GITHUB_API_URL, GITHUB_REPOSITORIES_URL, GITHUB_AUTHENTICATE_URL } from '@/config/constants';
import { CLIENT_ID, CLIENT_SECRET } from '@/config/credentials';

export default class GithubApi {
  static authParams = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  static getToken() {
    api.get(GITHUB_AUTHENTICATE_URL, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
    }).then(resp => resp);
  }

  static getLastWeekTrends() {
    const lastWeek = moment().subtract(7, 'd').format('YYYY-MM-DD');
    return api.get(GITHUB_REPOSITORIES_URL, {
      params: {
        ...GithubApi.authParams,
        q: `created:${lastWeek}`,
        sort: 'stars',
        order: 'desc',
      },
    });
  }

  static getCommitStats(owner, repo) {
    const statsUrl = `${GITHUB_API_URL}/repos/${owner}/${repo}/stats/participation`;

    return api.get(statsUrl, {
      params: {
        ...GithubApi.authParams,
      },
    });
  }
}
