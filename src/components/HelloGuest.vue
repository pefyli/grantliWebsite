<template>
  <div id=app class="hello">
    <img class="picture" src="../assets/logo.jpg">
    <div><br>
      <span class="title">{{ msg }}</span>
    </div>
    <br><br>
    <ul>
      <li>
         <router-link :to="{path: '/aboutme'}" class="tag" title="關於我">
          About Me
         </router-link>
      </li>
      <li>
        <router-link :to="{path: '/mainpage'}"  title="個人主頁" class="tag">
          Main Page
        </router-link>
      </li>
      <li>
        <a
          href="https://grantliblog.wordpress.com/" target="_blank" title="部落格" class="tag">
          Blog
        </a>
      </li>
    </ul><br>
    <template>
    <ul v-if="!user.loggedIn">
      <li><router-link :to="{path: '/login'}"  title="登入" class="login_tag">
          Login
        </router-link></li>
    </ul>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HelloGuest',
  data() { 
    return {
      msg: "Welcome to my personal website"
    };
  },
   computed: {
    ...mapGetters({
    // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 769px) {
  img {
    height: auto;
    max-width: 100%;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
    font-size: 22px;
  }
  .decorate {
    width: 40px;
  }
  .title {
    font-size: 30px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .tag:hover {
    width: 100px;
    height: 50px;
    font-size: 28px;
  }
  .login_tag {
    font-size: 18px;
  }
  .login_tag:hover {
    width: 80px;
    height: 50px;
    font-size: 20px;
  }

  #app {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .picture {
    width: 250px;
  }
}
@media only screen and (min-width: 321px) and (max-width: 768px) {
  img {
    height: auto;
    max-width: 100%;
  }

  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
    font-size: 22px;
  }
  .decorate {
    width: 30px;
  }
  .title {
    font-size: 20px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .tag {
    font-size: 20px;
  }
  .tag:hover {
    width: 100px;
    height: 40px;
    font-size: 25px;
  }

  .login_tag {
    font-size: 18px;
  }
  .login_tag:hover {
    width: 80px;
    height: 50px;
    font-size: 20px;
  }

  #app {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .picture {
    width: 200px;
  }
}
@media only screen and (min-width: 0px) and (max-width: 320px) {
  img {
    height: auto;
    max-width: 100%;
  }

  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
    font-size: 22px;
  }
  .decorate {
    width: 15px;
  }
  .title {
    font-size: 8px;
  }
  .tag {
    font-size: 10px;
  }
  .tag:hover {
    width: 100px;
    height: 40px;
    font-size: 15px;
  }
  .login_tag {
    font-size: 15px;
  }
  .login_tag:hover {
    width: 60px;
    height: 30px;
    font-size: 18px;
  }

  #app {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .picture {
    width: 200px;
  }
}
</style>
