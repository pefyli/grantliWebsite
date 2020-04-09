<template>  
  <div class="contentdiv">
      <transition name="modal">
        <div v-if="isOpen">
          <div class="overlay" @click.self="isOpen = false;">
            <div class="modal">
              <div class="modal_title">
                <h1>上傳圖片</h1><br>
                <p>Hi there, upload your pictures now.</p>
              </div>
              <div class="modal_content">
                <textarea v-model="picDescription" style="width:300px; height:100px;margin-top:20px" placeholder="為你的圖片寫點敘述吧!"></textarea>
                <input type="file" @change="processFile($event)">
              </div>
              <div class="modal_footer">
                <button @click="upload()">送出</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    <div v-if="user.loggedIn" class="btn_container">
      <button @click="isOpen = !isOpen;">Upload</button>
    </div>
    <div>
      <ul v-for="photo in photos" :key="photo.id">
        <li><img :src="photo.picURL" class="photo"></li>
        <li>{{ photo.picDescription}}</li>
      </ul>
    </div>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      isOpen: false,
      picDescription:'',
      photos: vm.photos
    };
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    processFile(event) {
      this.dataFile = event.target.files[0];
      //console.log(this.someData);
    },
    
    upload(){
      const storageRef = window.firebaseStorage.ref(`Photos/${this.dataFile.name}`);
      const metadata = { contentType: this.dataFile.type };
      const task = storageRef.put(this.dataFile, metadata);
      task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          const realtimeDbRef = window.firebaseDB.ref('Photos/');
          realtimeDbRef.push().set({
            pictureName: this.dataFile.name,
            picDescription: this.picDescription,
            picURL:url 
          });
          window.location.reload();
        })
    },
    async getData(){
      var photos = [];
      const realtimeDbRef = window.firebaseDB.ref('Photos/');
        await realtimeDbRef.on("value",function(snapshot) {
        //console.log(snapshot.val());
        vm.photos = snapshot.val();
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    }

  },
  computed: {
    ...mapGetters({
    // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  
  created(){
     this.getData();
  }

};
</script>

<style scoped>
.modal {
  width: 300px;
  height: 300px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.modal div{
  display: inline;
  top: 20;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>