import VueRouter from 'vue-router'
import AddBlog from './components/addBlog'
import UpdateBlog from './components/updateBlog'
import ListBlog from './components/ListBlog'
import HomeBlog from './components/HomeBlog'
import Article from './components/article'

// 1、创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/listBlog', component: ListBlog },
        { path: '/addBlog', component: AddBlog },
        { path: '/updateBlog/:id', component: UpdateBlog },
        { path: '/', component: HomeBlog },
        { path: '/article', component: Article }
    ]
})

// 2、把路由对象暴露出去
export default router