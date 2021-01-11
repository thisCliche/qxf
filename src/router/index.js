import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import My from '../views/my/My.vue'
import MyWrapper from '../views/my/MyWrapper.vue'
import Tag from '../views/my/Tag.vue'
import Colle from '../views/my/Collection.vue'
import Order from '../views/my/Order.vue'
import Evaluate from '../views/my/Evaluate.vue'
import Reserve from '../views/my/Reserve.vue'
import Contact from '../views/my/Contact.vue'
import Problem from '../views/my/Problem.vue'
import Feedback from '../views/my/Feedback.vue'
import Notice from '../views/my/Notice.vue'
import Information from '../views/my/Information.vue'
import Setting from '../views/my/Setting.vue'
import Changepwd from '../views/my/Changepwd.vue'
import Search from '../views/search/Search.vue'
import Location from '../views/search/Location.vue'

import VideoWrapper from '../views/video/VideoWrapper.vue'
import Video from '../views/video/Video.vue'
import VideoCon from '../views/video/VideoCon.vue'
import ServeConsul from '../views/video/ServeConsul.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mywrapper',
    name: 'MyWrapper',
    redirect: '/my',
    component: MyWrapper,
    children:[
      {
        path: '/my',
        component: My,
      },
      {
        path: '/tag',
        component: Tag,
      },  
      {
        path: '/colle',
        component: Colle,
      },
      {
        path: '/order',
        component: Order,
      },
      {
        path: '/evaluate',
        component: Evaluate,
      }
      ,{
        path: '/reserve',
        component: Reserve,
      }
      ,{
        path: '/contact',
        component: Contact,
      }
      ,{
        path: '/problem',
        component: Problem,
      }
      ,{
        path: '/feedback',
        component: Feedback,
      }
      ,{
        path: '/notice',
        component: Notice,
      }
      ,{
        path: '/information',
        component: Information,
      }
      ,{
        path: '/setting',
        component: Setting,
      }
      ,{
        path: '/changepwd',
        component: Changepwd,
      }
    ]
  }
  ,{
    path: '/search',
    component: Search,
  },
  {
    path: '/location',
    component: Location,
  },
  {
    path: '/videowrapper',
    component: VideoWrapper,
    redirect: Video,
    children: [
      {
        path: '/video',
        component: Video
      },
      {
        path: '/videocon',
        component: VideoCon
      },
      {
        path: '/serveconsul',
        component: ServeConsul
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
