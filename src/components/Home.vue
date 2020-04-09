<template id="Home">
    <div>
      <div class="contentdiv">
        <div class="home"><br><br>
          <p>Hi, I am Grant.</p><br>
          <p>A Software Engineer in Taiwan.</p><br>
          <div>
            {{msg1}}
          </div><br><br>
          <div>
            {{msg2}}}
           </div><br><br>
            <div>
            {{msg3}}
           </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'HelloGuest',
  data() { 
    return {
      msg1: "I am a passionate, aggressive person with several years professional experience in software engineering field and also have several working experience in global IT company and start-up company.",
      msg2: "These experiences allowed me to get hands-on knowledge about how to communicate with different people and also have knowledge to deal with tough situation in engineering side and project management side.",
      msg3: "This site is a single page application(SPA) built with Vue.js, Vuex, JavaScript and Firebase."
    };
  }
};
</script>
