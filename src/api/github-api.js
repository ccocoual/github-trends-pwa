import moment from 'moment';
import api from '@/config/api';
import { GITHUB_REPOSITORIES_URL } from '@/config/constants';

export default class GithubApi {
  static getLastWeekTrends() {
    const lastWeek = moment().subtract(7, 'd').format('YYYY-MM-DD');

    return api.get(`${GITHUB_REPOSITORIES_URL}`, {
      params: {
        q: `created:${lastWeek}`,
        sort: 'stars',
        order: 'desc',
      },
    });
  }
}
