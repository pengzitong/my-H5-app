<template>
  <div class="welcome">
    <img src="../assets/welcome_bc.jpeg" alt="欢迎页图">
    <div class="user">
      <img src="../assets/user_bc.jpeg" alt="头像" @click="navToHome">
    </div>
    <router-link class="enterHome" to="shopList">{{enterTip}}
      <i class="fa fa-arrow-circle-right" style="margin-left:0.1rem"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data(){
    return{
      enterTip: 'Enter In'
    }
  },
  methods:{
    navToHome(){
       const fs = require('fs');
       console.log('111');
      console.log(fs);
      const data = new Uint8Array(Buffer.from('Node.js中文网'));
      fs.writeFile('./wenjian.txt', data, (err) => {
        if (err) throw err;
        console.log('文件已被保存');
      });
      console.log(111);
      // this.$router.push("home");
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.05rem 0.18rem;
  border-radius: 0.04rem;
  font-size: 0.14rem;
  font-style:italic;
  font-family:'Times New Roman', Times, serif;
  text-decoration: none;
}
.user{
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
.user>img{
  width: 100%;
  height: 100%;
}
.welcome{
  height: 100%;
  position: relative;
}
.welcome>img{
  width: 100%;
  height: 100%;
  opacity: 0.9;
}
.enterHome{
  position: absolute;
  left:50%;
  top:65%;
  transform: translate(-50%,-50%);
}

</style>
