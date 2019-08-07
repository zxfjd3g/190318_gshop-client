<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中...'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
         
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <Shops/>
  </section>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'
  import Shops from 'components/Shops/Shops.vue'

  
  export default {

    mounted() {
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
      //setTimeout(() => {
        /* 
        创建swiper对象的时机?   必须在列表页面显示之后
        */
        /* new Swiper('.swiper-container', {
          loop: true, // 循环模式
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        }) */
      // }, 1000);

    },

    computed: {
      ...mapState(['address', 'categorys']),

      /* 
      分类的二维数组
      小数组的最大长度要为8
      一个小数组中俑被添加到大数组一次
      */
      categorysArr () {
        const bigArr = []
        let smallArr = []
        const {categorys} = this

        // 遍历总数组
        categorys.forEach(c => {
          // 将小数组添加到大数组(只能添加一次)
          if (smallArr.length===0) {
            bigArr.push(smallArr)
          }
          // 将c添加到小数组
          smallArr.push(c)

          // 小数组的最大长度要为8
          if (smallArr.length===8) {
            smallArr = []
          }
        })

        return bigArr
      }
    },


    /* 
    1. watch + nextTick()
    */
    watch: {

      // 更新状态数据 ==> 调用监视的回调 ==> 异步更新界面
      categorys () {// categorys发生改变了/ 数组数据来了

        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它
        this.$nextTick(() => {
           /* 
          创建swiper对象的时机?   必须在列表页面显示之后
          */
          new Swiper('.swiper-container', {
            loop: true, // 循环模式
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },

    components: {
      Shops
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
            
</style>
