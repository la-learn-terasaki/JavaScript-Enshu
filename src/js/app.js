import $ from 'dom7';
import Framework7, { getDevice } from 'framework7/bundle';

// Import F7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
//反映させたいcssファイルをインポートする
import '../css/icons.css';
import '../css/app.scss';
import '../css/study.scss';
import '../css/styleStudy.scss';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';

var device = getDevice();
var app = new Framework7({
  name: 'hello world', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  id: 'com.cordovaHW.HW', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,

  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }

      // 紙吹雪保存処理
      var confetti_timer;
      store.state.confettiStore = confettiStore
      function confettiStore() {
        confettiAnime()
        confetti_timer = setInterval(function(){
          requestAnimationFrame(confettiAnime)
        }, 800)
      }

      // 紙吹雪表示処理
      const confettiAnime = () => {
        // 紙吹雪の設定
        confetti({
          shapes:['square'],
          scalar:1.5,
          gravity:0.5,
          spread: 130,
          origin: {
            x: Math.random(),
            y: 0
          },
          particleCount: 7,
          ticks: 1000,
          zIndex: 10501,
          colors: [
            '#00A8F4',
            '#F6D037',
            '#FA96AA',
            '#47CA2E',
          ]
        })
      }

      // 紙吹雪停止処理
      store.state.confettiStop = intervalClear
      function intervalClear() {
        clearInterval(confetti_timer);
        confetti.reset();
      }

      store.state.image = {
        "image_data": {
          "image1": {
            "image_url": "..\/..\/img\/studyIcon\/0a16fa82381c4bb981d07841408329f1_t.jpeg",
            "link_path": "/"
          },
          "image2": {
            "image_url": "..\/img\/studyIcon\/51bb32664f5d1c379c45d348939eee4b_t.jpeg",
            "link_path": "/form/"
          },
          "image3": {
            "image_url": "..\/img\/studyIcon\/cc46614da92cf990a3609ffa2d1f3e0e_t.jpeg",
            "link_path": "/about/"
          }
        }
      };
    },
  },
});
