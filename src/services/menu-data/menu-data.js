import micro from './images/micro.jpg';
import microSe from './images/micro_se.jpg';
import adiva from './images/adiva.jpg';
import adivaSe from './images/adiva_se.jpg';
import microDroplet from './images/micro_droplet.jpg';
import microSeDroplet from './images/micro_se_droplet.jpg';
import adivaDroplet from './images/adiva_droplet.jpg';
import adivaSeDroplet from './images/adiva_se_droplet.jpg';
import strada2 from './images/strada_2.jpg';
import subwoofers from './images/subwoofers.jpg';
import accessories from './images/accessories.jpg';

function menuData() {
  return [
    {
      id: 1,
      dataImage: micro,
      href: `/micro#productPagePart`,
      linkText: 'micro',
    },
    {
      id: 2,
      dataImage: microSe,
      href: `/micro_se#productPagePart`,
      linkText: 'micro se',
    },
    {
      id: 3,
      dataImage: adiva,
      href: `/adiva#productPagePart`,
      linkText: 'adiva',
    },
    {
      id: 4,
      dataImage: adivaSe,
      href: `/adiva_se#productPagePart`,
      linkText: 'adiva se',
    },
    {
      id: 5,
      dataImage: microDroplet,
      href: `/micro_droplet#productPagePart`,
      linkText: 'micro droplet',
    },
    {
      id: 6,
      dataImage: microSeDroplet,
      href: `/micro_se_droplet#productPagePart`,
      linkText: 'micro se droplet',
    },
    {
      id: 7,
      dataImage: adivaDroplet,
      href: `/adiva_droplet#productPagePart`,
      linkText: 'adiva droplet',
    },
    {
      id: 8,
      dataImage: adivaSeDroplet,
      href: `/adiva_se_droplet#productPagePart`,
      linkText: 'adiva se droplet',
    },
    {
      id: 9,
      dataImage: strada2,
      href: `/strada_2#productPagePart`,
      linkText: 'strada 2',
    },
    {
      id: 10,
      dataImage: subwoofers,
      href: `/subwoofers#productPagePart`,
      linkText: 'subwoofers',
    },
    {
      id: 11,
      dataImage: accessories,
      href: `/accessories#productPagePart`,
      linkText: 'accessories',
    },
  ];
}

export default menuData();
