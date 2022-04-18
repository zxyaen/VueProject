//该文件专门用于创建整个应用的路由器

// 创建并暴露路由器
import VueRouter from 'vue-router'

// 引入相应组件
import about from '../pages/about.vue'
import home from '../pages/home'
import message from '../pages/home_message/message'
import news from '../pages/home_message/news.vue'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: about,
        },
        {
            path: '/home',
            component: home,
            children:[
                {
                    path:'message',
                    component:message
                },
                {
                    path:'news',
                    component:news,
                }
            ]
        },

    ]
})