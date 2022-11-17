require('../../public/supreme/css/style.css');
require('../../public/supreme/css/bootstrap.min.css');
require('../../public/supreme/js/bootstrap.min.js');
require('../../public/supreme/js/jquery-1.12.1.min.js');
require('../../public/supreme/js/popper.min.js');

require('../../public/supreme/css/animate.css');

require('../../public/supreme/css/themify-icons.css');
require('../../public/supreme/css/magnific-popup.css');
require('../../public/supreme/css/slick.css');

require('../../public/supreme/js/bootstrap.min.js');
require('../../public/supreme/js/jquery.magnific-popup.js');
require('../../public/supreme/js/swiper.min.js');

import { createApp } from 'vue';
import Home from './components/Home.vue';

const app = createApp({});

app.component('Home', Home);

app.mount('#app');

