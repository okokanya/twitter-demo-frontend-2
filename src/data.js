import avatar from './img/avatar.png';
import resources from './img/resources.png';
import ill from './img/ill.png';
import re1 from './img/re1.png';
import re2 from './img/re2.png';
import re3 from './img/re3.png';
import Avatar1 from './img/Avatar1.png';
import Avatar2 from './img/Avatar2.png';
import Avatar3 from './img/Avatar3.png';
import Avatar4 from './img/Avatar4.png';
import Avatar5 from './img/Avatar5.png';
import Avatar6 from './img/Avatar6.png';
export const tweets = [
  {
    avatar: avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 10, retweet: 2, like: 3, message: 4, liked: true },
    textSize: 'big',
    html: `We’ve made some more resources for all you wonderful #design folk
      <a href="everyinteraction.com/resources/">
        everyinteraction.com/resources/
      </a>
      #webdesign #UI`,
    image: resources
  },
  {
    avatar: avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 1, retweet: 20, like: 9, message: 4, liked: false },
    textSize: 'big',
    html: `Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/`
  },
  {
    avatar: avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 1, retweet: 20, like: 9, message: 4, liked: false },
    html: `Variable web fonts are coming, and will open a world of opportunities 
    for weight use online`,
    embed: {
      img: ill,
      title: 'The Future of Web Fonts',
      text:
        'We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…',
      link: 'vilijamis.com',
      linkUrl: 'http://vilijamis.com/'
    }
  }
];

export const trends = [
  {
    title: '#BringYourDogToWorkDay',
    link: '',
    count: 234
  },
  {
    title: '#FridayFeeling',
    link: '#',
    count: 12123
  },
  {
    title: '#BrexitAnniversary',
    link: '#',
    count: '',
    text: "It's one year since the UK voted to leave the European Union"
  },
  {
    title: '#Joe Budden',
    link: '#',
    count: 1036
  }
];

export const followersSuggest = [
  {
    img: re1,
    name: 'AppleInsider',
    username: 'appleinsider'
  },
  {
    img: re2,
    name: 'Creode',
    username: 'Creode'
  },
  {
    img: re3,
    name: 'Epiphany Search',
    username: 'Epiphan'
  }
];

export const followersYouKnow = [
  {
    img: Avatar1,
    link: '#'
  },
  {
    img: Avatar2,
    link: '#'
  },
  {
    img: Avatar3,
    link: '#'
  },
  {
    img: Avatar4,
    link: '#'
  },
  {
    img: Avatar5,
    link: '#'
  },
  {
    img: Avatar6,
    link: '#'
  }
];
