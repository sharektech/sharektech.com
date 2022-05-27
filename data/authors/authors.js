import photo_aalmulla from './avatars/aalmulla.jpeg';
import photo_malnajdi from './avatars/malnajdi.jpeg';


const aalmulla = {
  name: 'أحمد بن عبداللطيف الملا',
  photo: photo_aalmulla,
  bio:
    ' خبير تقني لدي خبرة في مختلف التقنيات مثل تطوير وإدارة المواقع الإلكترونية وإدارة قواعد البيانات المختلفة.  ',
  website: '',
  social: {
    facebook: '',
    twitter: '',
    github: 'https://github.com/ahmedalmulla',
    linkedin: 'https://linkedin.com/in/ahmed-al-mulla-dba'
  }
};

const malnajdi = {
  name: 'محمد بن يوسف النجدي',
  photo: photo_malnajdi,
  bio:
    'محب لنشر العلم و المعرفة التقنية في جميع المجالات، مجال خبرتي يتمحور حول بناء الأنظمة وتكاملها، متمكن من Python, Django, Ansible, Linux, DevOps, DevSecOps',
  website: '',
  social: {
    twitter: 'https://twitter.com/malnajdi',
    github: 'https://github.com/malnajdi',
    linkedin: 'https://linkedin.com/in/mohmmedalnajdi',
    youtube: 'https://www.youtube.com/channel/UC-JynZkN0ET5KHkBXhZjUhw'
  }
};

const personList = {
  aalmulla,
  malnajdi
}

export default personList;