//该文件专门用于创建整个应用的路由器

// 创建并暴露路由器
import VueRouter from 'vue-router'

// 引入相应组件
import about from '../pages/about.vue'
import home from '../pages/home'
import message from '../pages/home_message/message'
import news from '../pages/home_message/news.vue'
import detail from '../pages/home_message/detail.vue'

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
                    component:message,
                    children:[
                        {
                            name:'name',  //路由器配置中添加name项
                            path:'detail',  //使用占位符声明接受params参数
                            component:detail,
                            // 第一种写法
                            // props:{id:1,b:'hello'},
                            // 第二种,若布尔值为真，就回吧该路由所有params参数以props的形式传给detail组件
                            // props:true,

                            // // props第三种写法，值为函数
                            // props({query:{id,title}})  //使用了一个连续结构赋值，$route=>{query}=>{query:{id,title}}
                            // {
                            //     return {id,title}   // $route.query.id => query.id => id
                            // }
                        }
                    ]
                },
                {
                    path:'news',
                    component:news,
                }
            ]
        },

    ]
})