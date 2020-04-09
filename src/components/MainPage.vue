<template id="switchhover">
 <div class="container">
   <div class="menu">
      <div class="title">
        <div>
         <img src="../assets/title.jpg" class="min_picture">
        </div>
         <div>
           <p>Grant Li(李培華)</p><br><br><br><br>
         </div>

      </div>
       <ul>
        <li @click="changeView(Home)" class="liststyle">Home(首頁)</li>
        <li @click="changeView(Education)" class="liststyle">Education(學歷)</li>
        <li @click="changeView(WorkExperience)" class="liststyle">Work Experience(工作經歷)</li>
        <li @click="changeView(ProjectExperience)" class="liststyle">Project Experience(專案經歷)</li>
        <li @click="changeView(Portfolio)" class="liststyle">Portfolio(作品集)</li>
        <li @click="changeView(Photo)" class="liststyle">Photo(相片)</li>
        <li class="liststyle">
          <router-link :to="{path: '/'}">Back to Navigation Page<br>(回導覽頁)
          </router-link>
        </li>
      </ul>
    <div class="link">
        <a href="https://www.facebook.com/profile.php?id=100001824960776">
          <div class="fb"></div>
        </a>
        <a href="https://github.com/PefyLi">
          <div class="github"></div>
        </a>
        <a href="https://www.linkedin.com/in/grant-li-3a6680150/">
          <div class="linkedin"></div>
        </a>
         <a href="mailto:pefy19950714@gmail.com">
          <div class="gmail"></div>
        </a>
    </div>
   </div>
   <div class="content">
        <div class="banner">
          <div>
           <div class="picture">
             <img src="../assets/title.jpg" class="bar_picture">
           </div>
           <div>
              <span class="intro">李培華
                <p class="introduction">正在努力邁向前端工程師之路。</p>
                </span>
           </div>
          </div>
        </div>
         <component :is="currentTab" keep-alive></component>
    </div>
   </div>
</template>
<script>
import Home from './Home'
import WorkExperience from './WorkExperience'
import ProjectExperience from './ProjectExperience'
import Photo from './Photo'
import Portfolio from './Portfolio'
import Education from './Education'

export default {
  data(){ 
    return{
      currentTab:Home,
      Home:Home,
      WorkExperience:WorkExperience,
      ProjectExperience:ProjectExperience,
      Photo:Photo,
      Portfolio:Portfolio,
      Education:Education
    }
  },

    methods:{
      changeView: function(viewName) {
      this.currentTab = viewName
      }
    },
    components: {
      Home:{ template: Home},
      WorkExperience:{ template: WorkExperience},
      ProjectExperience:{template: ProjectExperience},
      Photo:{template:Photo},
      Portfolio:{template: Portfolio},
      Education:{template: Education}
    }
}
</script>
