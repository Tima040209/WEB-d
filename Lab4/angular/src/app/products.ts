export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating:number;
  img:string;
  href:string,
  width:number,
  height:number,
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13, 128 gb black',
    price: 357999,
    description: 'технология NFC: Да. Цвет: черный.Тип экрана: OLED, Super Retina XDR. Диагональ: 6.1 дюйм. Размер оперативной памяти: 4 ГБ. Процессор: 6-ядерный Apple A15 Bionic. Объем встроенной памяти: 128 ГБ. Емкость аккумулятора: 3095 мАч',
    rating: 7.8,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    href: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    width:220,
    height:300
  },
  {
    id: 2,
    name: 'iPhone 14 pro max, 256 gb purple',
    price: 698270,
    description: 'технология NFC: Да. Цвет: фиолетовый.Тип экрана: OLED, Super Retina XDR. Диагональ: 6.7 дюйм. Размер оперативной памяти: 6 ГБ. Процессор: 6-ядерный Apple A16 Bionic. Объем встроенной памяти: 256 ГБ. Емкость аккумулятора: 3095 мАч',
    rating: 8.6,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    href:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    width:220,
    height:300
  },
  {
    id: 3,
    name: 'Apple iPad Pro 2022 11 128GB Wi-Fi gray',
    price: 443940,
    description: 'диагональ: 11 дюйм. Разрешение экрана: 2388x1668. Технология изготовления экрана: Liquid Retina. Размер оперативной памяти: 8 Гб. Размер встроенной памяти: 128 ГБ. Емкость аккумулятора: 7538 мАч. Цвет: серый',
    rating: 9.0,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/hd0/64895797952542/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg',
    href:'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534/?c=750000000#!/item',
    width:250,
    height:300
  },
  {
    id: 4,
    name: 'Apple iPad Air 2022 10.9 64Gb Wi-Fi blue',
    price: 305250,
    description:'диагональ: 10.9 дюйм. Разрешение экрана: 2360x1640. Технология изготовления экрана: TFT IPS. Размер оперативной памяти: 8 Гб. Размер встроенной памяти: 64 ГБ. Емкость аккумулятора: 7600 мАч. Цвет: синий',
    rating: 8.2,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/hf4/49580860047390/apple-ipad-air-5-2022-wi-fi-mm9e3rk-a-10-9-dujmov-8-gb-64-gb-fioletovyj-104235571-1.jpg',
    href: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-10-9-64gb-wi-fi-sinii-104235571/?c=750000000#!/item',
    width:250,
    height:300
  },
  {
    id: 5,
    name: 'Apple MacBook Air 13 MGND3 gold',
    price:498000,
    description:'диагональ экрана: 13.3 дюйм. Процессор: Apple M1. Видеокарта: Apple M1 8 core. Размер оперативной памяти: 8 ГБ. Тип жесткого диска: SSD. Общий объем накопителей: 256 ГБ',
    rating: 9.0,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h48/h65/33286638993438/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
    href: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000#!/item',
    width:300,
    height:200
  },
  {
    id: 6,
    name: 'Apple MacBook Pro 14 MKGP3 gray',
    price:993430,
    description:'диагональ экрана: 14.2 дюйм. Процессор: Apple Pro M1. Видеокарта: Apple M1 Pro 14 core. Размер оперативной памяти: 16 ГБ. Тип жесткого диска: SSD. Общий объем накопителей: 512 ГБ',
    rating: 9.5,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h93/47153374134302/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    href:'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    width:300,
    height:200
  },
  {
    id:7,
    name:'Apple Watch Series 8 45 mm Aluminum black',
    price:231000,
    description:'поддержка платформ: iOS. Mатериал корпуса: алюминий. Цвет корпуса: черный. Технология экрана: OLED. Объем встроенной памяти: 32 Гб. Интерфейсы: Bluetooth, ,Wi-Fi, ,NFC. Время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    rating: 8.8,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    href:'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    width:200,
    height:200
  },
  {
    id: 8,
    name: '',
    price:167298,
    description:'',
    rating:8.0,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/he8/62711073374238/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    href:'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    width:200,
    height:200
  },
  {
    id: 9,
    name: 'Apple AirPods Max black',
    price:350221,
    description:'тип: гарнитура. Вид: накладные. Подключение: беспроводное. Тип акустического оформления: закрытые. Тип крепления: оголовье. Система активного шумоподавления: Да. Микрофон: Да',
    rating: 9.5,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/hcf/33518224441374/apple-airpods-max-cernyj-100950846-1-Container.jpg',
    href:'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000#!/item',
    width:200,
    height:250

  },
  {
    id:10,
    name: 'Apple AirPods Pro with Magsafe Charging Case white',
    price:104875,
    description:'',
    rating: 8.9,
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/h66/47209266282526/apple-airpods-pro-magsafe-charging-case-belyj-102891649-1.jpg',
    href:'https://kaspi.kz/shop/p/apple-airpods-pro-with-magsafe-charging-case-belyi-102891649/?c=750000000#!/item',
    width:200,
    height:250
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
