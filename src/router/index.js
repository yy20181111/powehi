import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
//解决相同路由跳转报错问题
VueRouter.prototype.push = function push(localtion) {
  return originalPush.call(this, localtion).catch(err => err)
}


const routes = [
  {
    path: '/',
    redirect: '/home',
   
  },{
    path:'/home',
    component: () => import('../views/Home'),
  },
  {
    path: '/matching',
    component: () => import('../views/Matching'),
  }, {
    path: '/topic',
    component: () => import('../views/TopicCenter'),
  }, {
    path: '/personal',
    component: () => import('../views/PersonalCenter'),
  }, {
    path: '/about',
    component: () => import('../views/AboutUs'),
  }]


const router = new VueRouter({
  routes
})

export default router



// const routers = new VueRouter({
//   routes: [
//     { path: '/',redirect: '/home' },
//     { path: '/home', component: Home },
//     { path: '/matching', component: Matching },
//     { path: '/topic', component: Topic },
//     { path: '/personal', component: Personal },
//     { path: '/about', component: About }
//   ]
// })

// export default routers
