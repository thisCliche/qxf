import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "login_home_welcome" */ '../views/home/Home.vue')
const Detail = () => import(/* webpackChunkName: "login_home_welcome" */ '../views/home/Detail.vue')
const Search = () => import(/* webpackChunkName: "login_home_welcome" */ '../views/search/Search.vue')
const Location = () => import(/* webpackChunkName: "login_home_welcome" */ '../views/search/Location.vue')
const LocationTemp = () => import(/* webpackChunkName: "login_home_welcome" */ '../views/search/LocationTemp.vue')

const VideoWrapper = () => import(/* webpackChunkName: "video_welcome" */ '../views/video/VideoWrapper.vue')
const Video = () => import(/* webpackChunkName: "video_welcome" */ '../views/video/Video.vue')
const VideoColumn = () => import(/* webpackChunkName: "video_welcome" */ '../views/video/VideoColumn.vue')
const VideoCon = () => import(/* webpackChunkName: "video_welcome" */ '../views/video/VideoCon.vue')

const AssessWrapper = () => import(/* webpackChunkName: "assess_welcome" */ '../views/assess/AssessWrapper.vue')
const Assess = () => import(/* webpackChunkName: "assess_welcome" */ '../views/assess/Assess.vue')
const AssessSynopsis = () => import(/* webpackChunkName: "assess_welcome" */ '../views/assess/AssessSynopsis.vue')
const AssessPolicy = () => import(/* webpackChunkName: "assess_welcome" */ '../views/assess/AssessPolicy.vue')
const AssessStart = () => import(/* webpackChunkName: "assess_welcome" */ '../views/assess/AssessStart.vue')
const AssessTest = () => import(/* webpackChunkName: "assess_welcome" */ '../views/assess/AssessTest.vue')
const AssessReport = () => import(/* webpackChunkName: "assess_welcome" */ '../views/assess/AssessReport.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/location',
    component: Location,
  },
  {
    path: '/locationtemp',
    component: LocationTemp,
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
        path: '/videocon/:id',
        component: VideoCon
      },
      {
        path: '/videocolumn',
        component: VideoColumn
      },
      
    ]
  },
  {
    path: '/assesswrapper',
    component: AssessWrapper,
    redirect: Assess,
    children: [
      {
        path: '/assess',
        component: Assess
      },
      {
        path: '/assesssynopsis',
        component: AssessSynopsis
      },
      {
        path: '/assesspolicy',
        component: AssessPolicy
      },
      {
        path: '/assessstart',
        component: AssessStart
      },
      {
        path: '/assesstest',
        component: AssessTest
      },
      {
        path: '/assessreport',
        component: AssessReport
      },
    ]
  }
]

const router = new VueRouter({
  routes,
  // 当切换路由时，滚动到顶部位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  
})

export default router
