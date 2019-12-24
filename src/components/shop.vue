<template>
    <div class="box">
      <!-- <nav class="header">
          <router-link to="welcome">注册</router-link>
          <router-link to="home">店铺列表</router-link>
          <router-link to="welcome">详情</router-link>
          <router-link to="welcome">管理</router-link>
      </nav> -->
      <div class="title"><strong>商店信息</strong></div>
      <div class="container">
          <div class="label">商铺名称:</div>
          <div class="formPart">
            <input type="text" placeholder="商铺名称" v-model="shop.shopName">
          </div>

          <div class="label">商铺分类:</div>
          <div class="formPart">
            <select v-model="shop.shopCategory.shopCategoryId">
              <option value="-1">select...</option>
              <option v-for="item in shopCategoryList" :key="item.shopCategoryId" :value="item.shopCategoryId">{{item.shopCategoryName}}</option>
            </select>
          </div>

          <div class="label">所属区域:</div>
          <div class="formPart">
            <select v-model="shop.area.areaId">
              <option value="-1">select...</option>
              <option v-for="(item,index) in areaList" :key="index" :value="item.areaId">{{item.areaName}}</option>
            </select>
          </div>

          <div class="label">详细地址:</div>
          <div class="formPart">
            <input type="text" placeholder="详细地址" v-model="shop.shopAddr">
          </div>

          <div class="label">联系电话:</div>
          <div class="formPart">
            <input type="text" placeholder="联系电话" v-model="shop.phone">
          </div>

          <div class="label">缩略图:</div>
          <div class="formPart">
            <input type="file" @change="imgChange($event)" ref="shopImg">
          </div>

          <div class="label">店铺简介:</div>
          <div class="formPart">
            <input type="text" placeholder="店铺简介" v-model="shop.shopDesc">
          </div>

          <div class="label">验证码:</div>
          <div class="formPart">
              <input class="verifyCode" type="text" placeholder="请输入验证码" style="width:57%;vertical-align: middle" v-model="verifyCodeActual">
              <img ref="verifyCode" v-bind:src="imgUrl" style="width:32%;vertical-align: middle" @click="changeVerifyCode($event)"/>
          </div>
      </div>
      <div class="container-button">
        <mt-button class="button" @click.native="handleClick" type="default">取消</mt-button>
        <mt-button class="button" @click.native="handleClick" type="primary" style="background-color:#555">确认</mt-button>
      </div>

    </div>
</template>

<script>
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';
import { axios } from 'axios';
import { url } from '../url';
import { commonMethods } from '../common/util'



export default {
  name: 'shop',
  data () {
    return {
      msg: 'Welcome to view my H5 demo!',
      shopCategoryId:'-1',
      shopCategoryList:[],
      areaId:'-1',
      areaList:[],
      imgUrl:url.baseUrl + url.kaptcha,
      shop:{
        shopCategory:{},
        area:{}
      },
      shopImg:null,
      verifyCodeActual:'',
      param:{},
      isEdit:null
    }
  },
  created(){
    console.log('route' + this.$route.name);
    let shopId = commonMethods.getQueryString("shopId");
    this.isEdit = shopId ? true : false;
    console.log(this.isEdit);
    this.axios(url.shopInitInfo).then((response)=>{
      if(response.status == 200) {
        this.shopCategoryList = response && response.data && response.data.shopCategoryList || [];
        this.areaList = response && response.data && response.data.areaList || [];
        if (this.isEdit) {
          this.axios.post(url.getByShopId, {shopId: shopId}).then(response => {
            if(response.status == 200){
              this.shop = response && response.data && response.data.shop ||
                {
                  shopCategory:{},
                  area:{}
                };
            }
          })
        }
      }

    }).catch((err)=>{
        console.log(err);
    })


  },
  methods:{
    handleClick(){
      console.log(this.isEdit)
      if(!this.verifyCodeActual || this.verifyCodeActual == ''){
        Toast('请输入验证码！');
        return;
      }
      this.param.shop = this.shop;
      var formdata = new FormData();
      formdata.append("shopStr",JSON.stringify(this.shop));
      formdata.append("shopImg",this.shopImg);
      formdata.append("verifyCodeActual",this.verifyCodeActual);

      this.axios.post(this.isEdit ? url.modifyShop : url.registerShop,formdata).then((response)=>{
        console.log(response);
        if(response.status == 200 && response.data && response.data.success){
          let message = this.isEdit ? "修改成功！" : "创建成功！";
          Toast(message);
        }else{
          Toast("操作失败！");
        }
      }).catch((err)=>{
        console.log(err);
      })
    },
    changeVerifyCode(e){
      this.$refs.verifyCode.src = url.baseUrl + url.kaptcha + '?' + Math.floor(Math.random()*100);
    },
    imgChange(e){
      console.log(e);

      console.log(this.$refs.shopImg.files[0]);
      this.shopImg = this.$refs.shopImg.files[0];
      // shopStr
    }
  }
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 0.6rem;
    background-color: #428bca;
    border-bottom: 1px solid #eee;
  }
  .header>*{
    display: block;
    float: left;
    height: 100%;
    line-height: 0.6rem;
    width: 25%;
  }
  .header>a{
    text-decoration: none;
    color:#fff;
  }
  .router-link-active{
    background-color: #6099ca!important;
  }
  *{
    box-sizing: border-box;
  }
  .container{
    width: 100%;
    /* height: 3.6rem; */
    /* border: 1px solid #ff0000; */
    display: flex;
    flex-flow: wrap;
    align-content: flex-start;
    background-color: #fff;
  }
  div.label{
    width: 25%;
    height: 0.5rem;
    /* border: 1px solid #f00; */
    text-align: right;
    line-height: 0.5rem;
  }
  div.formPart{
    width: 70%;
    height: 0.5rem;
    padding-top: 0.1rem;
    /* border: 1px solid #f00; */
  }
  div.formPart>input,div.formPart>select,div.formPart>span{
    width: 90%;
    height: 80%;
    /* margin-top: 0.1rem; */
    border: 1px solid #eee;
    padding-left: 0.1rem;
  }

  div.formPart input[type="file"]{
    background-color: #eee;
    padding-top: 0.01rem;
  }
  .container-button{
    width: 100%;
    height: 0.5rem;
    margin-top: 0.3rem;
    /* border: 1px solid #ff0000; */
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
  }
  .container-button .button{
    width: 40%;
  }
  .title{
    padding: 0.2rem 0;
  }
  .box{
    height: 100%;
    /* background-color: #eef; */
  }
</style>
