import topSliderOne from './images/top-slider/micro_micro-se.jpg';
import topSliderTwo from './images/top-slider/droplet.jpg';
import topSliderThree from './images/top-slider/PROFILESUBx2.jpg';

import bottomSliderOne from './images/bottom-slider/micro.jpg';
import bottomSliderTwo from './images/bottom-slider/micro-se.jpg';
import bottomSliderThree from './images/bottom-slider/micro-droplet.jpg';
import bottomSliderFour from './images/bottom-slider/adiva.jpg';
import bottomSliderFive from './images/bottom-slider/strada-2.jpg';
import bottomSliderSix from './images/bottom-slider/PROFILESUBx2.jpg';

class SlidersData {
  topSliderData = [
    {
      id: 1,
      href: 'https://gallo.pult.ru/micro#productPagePart',
      alt: 'Micro_micro-se',
      source: topSliderOne,
      whiteText: 'побалуй ',
      blackText: 'себя выбором',
      footerTitle: 'Micro и micro se',
      footerText: 'спутниковые колонки',
    },
    {
      id: 2,
      href: 'https://gallo.pult.ru/micro_droplet#productPagePart',
      alt: 'droplet',
      source: topSliderTwo,
      whiteText: 'Давай ',
      blackText: 'зажжём',
      footerTitle: 'droplet',
      footerText: 'подвесная акустика',
    },
    {
      id: 3,
      href: 'https://gallo.pult.ru/subwoofers#productPagePart',
      alt: 'Micro_micro-se',
      source: topSliderThree,
      whiteText: 'держаться ',
      blackText: 'в тени',
      footerTitle: 'PROFILESUB',
      footerText: 'сабвуфер',
    },
  ];

  getTopSliderData() {
    return this.topSliderData;
  }

  bottomSliderData = [
    {
      id: 1,
      href: 'https://gallo.pult.ru/micro#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderOne,
      discount: '30%',
      footerTitle: 'Micro',
    },
    {
      id: 2,
      href: 'https://gallo.pult.ru/micro_se#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderTwo,
      discount: '30%',
      footerTitle: 'Micro se',
    },
    {
      id: 3,
      href: 'https://gallo.pult.ru/micro_droplet#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderThree,
      discount: '30%',
      footerTitle: 'micro droplet',
    },
    {
      id: 4,
      href: 'https://gallo.pult.ru/micro_se_droplet#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderThree,
      discount: '30%',
      footerTitle: 'micro se droplet',
    },
    {
      id: 5,
      href: 'https://gallo.pult.ru/adiva_droplet#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderThree,
      discount: '30%',
      footerTitle: 'adiva droplet',
    },
    {
      id: 6,
      href: 'https://gallo.pult.ru/adiva_se_droplet#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderThree,
      discount: '30%',
      footerTitle: 'adiva se droplet',
    },
    {
      id: 7,
      href: 'https://gallo.pult.ru/adiva#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderFour,
      discount: '30%',
      footerTitle: 'adiva',
    },
    {
      id: 8,
      href: 'https://gallo.pult.ru/adiva_se#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderFour,
      discount: '30%',
      footerTitle: 'adiva se',
    },
    {
      id: 9,
      href: 'https://gallo.pult.ru/strada_2#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderFive,
      right: true,
      discount: '30%',
      footerTitle: 'strada 2',
    },
    {
      id: 10,
      href: 'https://gallo.pult.ru/subwoofers#productPagePart',
      alt: 'Micro_micro-se',
      source: bottomSliderSix,
      discount: '30%',
      footerTitle: 'subwoofers',
    },
  ];

  getBottomSliderData() {
    return this.bottomSliderData;
  }
}

export default new SlidersData();
