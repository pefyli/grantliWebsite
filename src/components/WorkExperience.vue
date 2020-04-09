<template id="WorkExperience">
    <div class="contentdiv">
    <div>
      <div>
        <div>
          <h2 style="margin-top:30px">Work Experience</h2>
          <ul class="timeline">
             <li>
              <div>
                <img class="company" src="../assets/alpha.png">
              </div>
              <div>
                  <a class="name">Alpha Camp</a>
                  <a class="date">March. 2020 – present</a>
                  <p>Teaching Assistant</p>
              </div>
            </li>
            <li>
              <div>
                <img class="company" src="../assets/micron.png">
              </div>
              <div>
                  <a class="name">Micron Technology(台灣美光)</a>
                  <a class="date">Feb. 2020 – present</a>
                  <p>Software Engineer</p>
              </div>
            </li>
            <li>
              <div>
                <img class="company" src="../assets/hp.png">
              </div>
              <div>
                  <a class="name">HP Inc.(台灣惠普)</a>
                  <a class="date">July. 2018 – July.2019</a>
                  <p>Software Engineering Intern</p>
              </div>
            </li>
            <li>
              <div>
                <a><img class="company" src="../assets/knap.png"></a>
              </div>
              <div>
                <a class="name">Knap Inc.(巧禾數位設計股份有限公司)</a>
                <a class="date">Nov. 2018 – Dec. 2018</a>
                <p>Project Engineer</p>
              </div>
            </li>
            <li>
              <div>
                <a><img class="company" src="../assets/jiafang.png"></a>
              </div>
              <div>
                <a class="name">Jia Feng Tech. Co.,Ltd(佳峰科技有限公司)</a>
                <a class="date">Aug. 2016 – Aug.2016</a>
                <p>Summer Intern</p>
              </div>
            </li>
          </ul>
        </div>
	</div>
</div>
    </div>
</template>
<script>

export default {

}
</script>
<style>
ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
.date{
  font-size: 15px;
  margin-left:15px;
  color:	#000088

}
.name{
  font-size: 18px;
}
.note{
  margin-top:5px;
  margin-bottom:5px;
  color:#CC0000;
}
.tech{
  margin-bottom: 8px;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 60px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #22c0e8;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>

