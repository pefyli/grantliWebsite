<template id="Education">
    <div class="contentdiv">
    <div>
      <div>
        <div>
          <h2 style="margin-top:30px">Education</h2>
          <ul class="timeline">
            <li>
              <div>
                <img class="company" src="../assets/central.png">
              </div>
              <div>
                  <a class="name">National Central University(國立中央大學)</a>
                  <a class="date">Sep.2017 – June.2019</a>
                  <p class="note">資訊管理學系碩士班</p>
              </div>
            </li>
            <li>
              <div>
                <img class="company" src="../assets/chiayi.png">
              </div>
              <div>
                  <a class="name">National Chiayi University(國立嘉義大學)</a>
                  <a class="date">Sep. 2013 – June.2017</a>
                  <p class="note">資訊管理學系學士</p>
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

