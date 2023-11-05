import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:([
        {
          path:"",
          component:()=>import("@/views/Home/home.vue")
        },
        {
          path:"/home",
          component:()=>import("@/views/Home/home.vue")
        },
        {
          path:"/quote",
          component:()=>import("@/views/Quotes/quotes.vue"),
          children:[
            {
              path:"",
              component:()=>import("@/views/Quotes/components/optional.vue")
            },
            {
              path:"/optional",
              component:()=>import("@/views/Quotes/components/optional.vue")
            },
            {
              path:"/usdt",
              component:()=>import("@/views/Quotes/components/usdt.vue")
            }
          ]
        },
        {
          path:"/mine",
          component:()=>import("@/views/Mine/mine.vue")
        },
        {
          path:"/wallet",
          component:()=>import("@/views/Wallet/wallet.vue")
        }
      ])
    },
  ]
})

export default router
