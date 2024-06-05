// router.js

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // 首頁
    {
      path: '/home',
      name: 'Home',
      component: () => import('./components/router/Home.vue'),
    },
    //戰績
    {
      path: '/record',
      name: 'Record',
      component: () => import('./components/router/Record.vue'),
      meta: {
        title: '2023-24 戰績'
      }
    },
    // 賽程比分
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import('./components/router/Schedule.vue'),
      meta: {
        title: '2023-24 賽程'
      }
    },
    // 數據(綜合排行)
    {
      path: '/raking',
      name: 'raking',
      component: () => import('./components/router/Raking.vue'),
      meta: {
        title: '2023-24 綜合排行 | P.LEAGUE+'
      }
    },
    // 數據(特殊表現)
    {
      path: '/performance',
      name: 'performance',
      component: () => import('./components/router/performance.vue'),
      meta: {
        title: '2023-24 特殊表現 | P.LEAGUE+'
      }
    },
    // 數據(球隊數據)
    {
      path: '/team',
      name: 'team',
      component: () => import('./components/router/Team.vue'),
      meta: {
        title: '2023-24 球隊數據 | P.LEAGUE+'
      }
    },
    // 數據(球隊chart)
    {
      path: '/chart',
      name: 'chart',
      component: () => import('./components/router/Chart.vue'),
      meta: {
        title: '2023-24 數據 | P.LEAGUE+'
      }
    },
    // 關於
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/router/About.vue'),
    },
    // 消息---新聞總攬
    {
      path: '/news',
      name: 'news',
      component: () => import('./components/router/News.vue'),
      meta: {
        title: '新聞總攬 | P.LEAGUE+'
      }
    },
    // 消息---照片圖輯
    {
      path: '/album',
      name: 'album',
      component: () => import('./components/router/Album.vue'),
      meta: {
        title: '照片圖輯 | P.LEAGUE+'
      }
    },
    // 消息---影音紀錄
    {
      path: '/video',
      name: 'video',
      component: () => import('./components/router/Video.vue'),
      meta: {
        title: '影音紀錄 | P.LEAGUE+'
      }
    },
    // 球隊---富邦勇士
    {
      path: '/fubonbraves',
      name: 'fubonbraves',
      component: () => import('./components/router/basketBallTeam/fubonbraves.vue'),
      meta: {
        title: '台北富邦勇士 | P.LEAGUE+'
      }
    },
    // 球隊---新北國王
    {
      path: '/newtaipeikings',
      name: 'newtaipeikings',
      component: () => import('./components/router/basketBallTeam/newtaipeikings.vue'),
      meta: {
        title: '新北國王 | P.LEAGUE+'
      }
    }, 
    // 球隊---桃園璞園領航員
    {
      path: '/pilots',
      name: 'pilots',
      component: () => import('./components/router/basketBallTeam/pilots.vue'),
      meta: {
        title: '桃園璞園領航員 | P.LEAGUE+'
      }
    }, 
    // 球隊---新竹御頂攻城獅
    {
      path: '/lioneers',
      name: 'lioneers',
      component: () => import('./components/router/basketBallTeam/lioneers.vue'),
      meta: {
        title: '新竹御頂攻城獅 | P.LEAGUE+'
      }
    },   
    // 球隊---福爾摩沙台新夢想家
    {
      path: '/formosadreamers',
      name: 'formosadreamers',
      component: () => import('./components/router/basketBallTeam/formosadreamers.vue'),
      meta: {
        title: '福爾摩沙台新夢想家 | P.LEAGUE+'
      }
    },  
    // 球隊---高雄17直播鋼鐵人
    {
      path: '/steelers',
      name: 'steelers',
      component: () => import('./components/router/basketBallTeam/steelers.vue'),
      meta: {
        title: '高雄17直播鋼鐵人 | P.LEAGUE+'
      }
    },    
    // 商品
    {
      path: '/commodity',
      name: 'commodity',
      component: () => import('./components/router/Commodity.vue'),
      meta: {
        title: '商品 | P.LEAGUE+'
      }
    },
    // 商品細項
    {
      path: '/:productName/id=:productId',
      name: 'ProductDetail',
      component: () => import('./components/router/ProductDetail.vue'),
      meta: {
        title: '商品細項 | P.LEAGUE+'
      },
      props:true
    },
    // 購物車
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./components/router/Cart.vue'),
      meta: {
        title: '購物車 | P.LEAGUE+'
      },
    },
    // 搜尋
    {
      path: '/search',
      name: 'search',
      component: () => import('./components/router/Search.vue'),
      meta: {
        title: '搜尋 | P.LEAGUE+'
      },
    },
    // 登入
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/router/Login.vue'),
      meta: {
        title: '登入 | P.LEAGUE+'
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;
  document.title = pageTitle || 'P.LEAGUE+';
  next();
});

export default router
