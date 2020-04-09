<template>
<div class="aboutContainer">
 <div class="aboutDiv">
     <img class="about_img" src="../assets/2.jpg">
     <div class="aboutContent">
         {{msg1}}<br>
         {{msg2}}
     </div>
 </div>
</div>
</template>
<script>
export default {
  name: 'HelloGuest',
  data() { 
    return {
      msg1: "Hi! I am Grant. Welcome to my personal website. I am a software engineer in Taiwan.",
      msg2: "If you have any questions or topics want to disscuss with me, please feel free to send me a message with my email."
    };
  }
};
</script>
