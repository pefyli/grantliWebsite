<template id="Login">
    <div class="content">
      <div class="contentDiv">
        <ul>
        <li>登入</li><br>
        <li>帳號: <input type="text" v-model="account"></li><br>
        <li>密碼: <input type="text" v-model="password"></li><br>
        <li><button class="loginbtn" @click="Authenication()">送出</button></li>
        </ul>
      </div>
    </div>
</template>
<script>
import router from 'vue-router';
export default {
  data: function() {
    return {
     account:'',
     password:''
    };
  },
  methods:{
    Authenication(){
        let firebaseAuth = window.firebaseAuth;
        let account = this.account;
        let password = this.password;
        firebaseAuth.signInWithEmailAndPassword(account, password)
        .then(res => {
          this.$router.replace({ name: "HelloGuest" });
        }).catch(err => {
            console.log(err);
        });
      var user = firebase.auth().currentUser;
        if (user) {
          console.log("User has already signed in.")
        } else {
          console.log("Cannot find any user.")
        }
    },
  },
}
</script>
<style scoped>
  .content{
    height: 200px;
    width: 400px;
    position: absolute;    
    top: 50%;              
    left: 50%;             
    margin-top: -100px;     
    margin-left: -200px;    
    font-size:20px;
    border-width:medium; border-style:dashed;
  }
  .contentDiv{
    margin-top:30px;
    text-align: center;
  }
</style>