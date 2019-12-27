<template>
  <div class="box">
    <div class="title bold">商店列表</div>
<!--    <mt-cell-group>-->
      <mt-cell
        title="店铺名称"
        is-link>
          <span style="margin-right: 35px">状态</span>
          <span style="margin-left: 35px">操作</span>
      </mt-cell>

<!--    <mt-cell-group>-->
<!--      <mt-cell title="标题文字" value="左侧title图标icon 自定义图片">-->
<!--        <mt-image slot="icon" src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" width="24px" height="24px" smile-display="inline-block"></mt-image>-->
<!--      </mt-cell>-->
<!--    </mt-cell-group>-->
      <mt-cell
        v-for="item in shopList"
        :key="item.shopId"
        :title="item.shopName"
        is-link
        :to="{path:'/shop/modifyShop',query:{shopId:item.shopId}}"
        @cellClick="cellClick">
        <a style="padding-right: 35px">{{item.advice}}</a>
<!--        <a style="margin-left:35px;color: dodgerblue;z-index: 1000" @click="modifyShop(item.shopId)">进入</a>-->
        <router-link style="margin-left:35px;color: dodgerblue;z-index: 1000" :to="{path:'/shop/modifyShop',query:{shopId:item.shopId}}">进入</router-link>
      </mt-cell>
<!--    </mt-cell-group>-->

  </div>

</template>

<script>
  import { url } from '@/url.js';
  export default {
    name: 'shopList',
    data(){
      return{
        shopList : [],
      }
    },
    created () {
      this.axios(url.getShopList).then(response=>{
        if(response && response.status == 200){
          this.shopList = response && response.data && response.data.shopList || [];
        }
      })
    },
    methods:{
      modifyShop(shopId){
        console.log(shopId);
        // this.$router.push({
        //   name: `shop.modifyShop`,
        //   params: {
        //     shopId: shopId
        //   }
        // })
      },
      cellClick(e){
        console.log(e.target)
      }
    }
  }
</script>

<style scoped>

</style>
