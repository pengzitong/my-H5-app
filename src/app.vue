<template>
  <div id="app">
    <!-- <img src="./assets/welcome.jpeg"> -->
    <!-- <router-link to="/home">welcome</router-link> -->
    <header class="header" v-show="$route.path != '/' && $route.path != '/welcome' ">
      <a class="showMenu" href="javascript:void(0);" @click="ifShow"><i class="fa fa-bars" @click="ifShow"></i></a>
    </header>
    
    <div class="drawer-layout" ref="containerBox" :class="{'active':isActive}" v-show="$route.path != '/'  && $route.path != '/welcome'">
          <router-link to="home">注册</router-link>
          <router-link to="home">编辑</router-link>
          <router-link to="home">店铺列表</router-link>
          <router-link to="welcome">详情</router-link>
          <router-link to="welcome">管理</router-link>
          <router-link to="welcome">退出</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { commonMethods }  from "./common/util"

export default {
  name: 'app',
  data(){
    return{
      isActive:false,
    }
  },
  mounted(){
    console.log(commonMethods);
    console.log(commonMethods.getQueryString("shopId"));
    console.log(this.$route.path);
    let elem = document.querySelector(".drawer-layout");
    let self = this;
    document.addEventListener("click",function(e){
      if(e.target.classList[0] != "drawer-layout" && e.target.classList[0] != "showMenu" ){
        console.log(this);
         self.isActive = false;
      }else{
        console.log(2);
      }
     
      // this.$refs.containerBox.style.height = '100px';
    })
  },
  methods:{
    ifShow(e){
      e.stopPropagation();
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style>
html,body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.drawer-layout{
  width: 0;
  background-color: #555;
  /* opacity: 0.8; */
  box-shadow:2px 2px 5px #333333 ;
  height: 100%;
  position: absolute;
  /* left: -100%; */
  z-index: 100;
  transition:all .3s ease-in-out;
  opacity: 0;
}
.drawer-layout>*{
  display: block;
  width: 100%;
  font-size: 0.15rem;
  font-weight: 500;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid #000;

}
/* .moving{
  transition:transform .3s ease;
} */
.active{
  /* left: 0; */
  width: 35%;
  transition:all .3s ease-in-out;
  opacity: 1;
}
.showMenu{
  position:absolute;
  left:0.1rem;
  top:0.1rem;
  height: 0.3rem;
}
.showMenu i{
  font-size: 0.3rem;
  color:#fff;
}
.header{
  height: 0.5rem;
  background-color: #333;
}
</style>
