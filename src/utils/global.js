import urljoin from 'url-join';
import moment from 'moment';
import config from '../../data/SiteConfig';

/* import 'moment/locale/ar';
moment.locale('ar'); */

const formatDate = date => moment.utc(date).format(config.dateFormat);

const editOnGithub = post => {
  const date = moment.utc(post.date).format(config.dateFromFormat);
  var slugArray = post.slug.split('/');

  return urljoin(
    config.repo,
    '/blob/master/content/posts',
    `${date}-${slugArray[slugArray.length - 1]}.md`
  );
};

export { formatDate, editOnGithub };
