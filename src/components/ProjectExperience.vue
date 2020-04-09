<template id="ProjectExperience">
    <div class="contentdiv">
      <div>
        <div>
          <div><br><br>
            <h2>Project Experience</h2>
            <ul class="timeline">
              <li>
                <a class="name">第二代旅宿網建置案(與旭海國際科技股份有限公司合作)</a>
                <a class="date">May 2019 – Aug. 2019</a>
                <p class="note">Core developer/Team lead</p>
                <p class="tech">使用技術：HTML、CSS、JavaScript、jQuery、PHP Laravel Framework、MySQL</p>
                <p>本專案是與旭海國際科技股份有限公司合作，為交通部觀光局開發建置第二代旅宿網平台。
                    本平台可以透過動態 Filter 顯示旅宿業者之住宿資訊、以及實作政府專案補助的商業邏輯。
                    在專案之中，我與兩位夥伴共同負責這個 project，包含旅宿網後台、飯店業者後台部分邏輯，以及
                    專案補助前台及後台，並實際串接公司的 API。
                </p>
              </li>
              <li>
                <a class="name">揪趣米募資平台(與巧禾數位設計股份有限公司合作)</a>
                <a class="date">Nov. 2018 – Dec. 2018</a>
                <p class="note">Core developer/Team lead</p>
                <p class="tech">使用技術：HTML、CSS、JavaScript、jQuery、Vue.js、Nuxt.js、Firebase</p>
                <p>本專案是與巧禾數位設計股份有限公司合作，開發一個募資平台。在專案之中，我與一位夥伴負責
                    Firebase 即時聊天室以及留言板的設計與實作，並實際串接公司的 API。
                </p>
              </li>
              <li>
                <a class="name">HP RS6 Ratio Tracking File</a>
                <a class="date">June. 2019 – July. 2019</a>
                <p class="note">Core developer</p>
                <p class="tech">使用技術: Visual Basic for Application(VBA)</p>
                <p>本專案是為了分析HP智慧型設備(NB、DT)中的軟體在各個地區(Region)的比率，透過VBA自動化執行Excel中的函數，
                  不必再透過拖拉選取來操縱資料，只要輸入資料，立即透過VBA進行運算並呈現在畫面上。</p>
              </li>
                <li>
                <a class="name">HP Product Life Cycle Tracking Tool</a>
                <a class="date">July. 2018 – Nov. 2018</a>
                <p class="note">Core developer</p>
                <p class="tech">使用技術：HTML、CSS、JavaScript、jQuery、Node.js、Express.js、Knex.js、MySQL</p>
                <p>本專案透過整合 HP 各個 Business Unit 的資料，進行專案管理中各個 Milestone 的時間排程，讓
                    Project Manager 可以有更宏觀的視野，了解組織內部的資料流及時間動向。
                </p>
              </li>
               <li>
                <a class="name">Receipts Monster 票據識別系統</a>
                <a class="date">Dec. 2017 – Feb. 2018</a>
                <p class="note">Core developer</p>
                <p class="tech">使用技術：Java(Android)、Python、Firebase、OCR</p>
                <p>本專案是開發一個手機應用程式，可以讓使用者透過拍照的方式，儲存自己的發票和收據資料，並
                    透過 Google OCR 文字辨識技術，進行票據資料的識別，最後將資料存進 Google 的雲端平台
                    Firebase 中。
                </p>
              </li>
                <li>
                <a class="name">桃園地價王土地資訊平台(碩士班課程專題))</a>
                <a class="date">Oct. 2017 – Dec. 2017</a>
                <p class="note">Core developer</p>
                <p class="tech">使用技術：HTML、CSS、JavaScript、PHP、R、MySQL</p>
                <p>本專案是使用政府開放資料呈現地段資訊，並結合商業應用，打造出一個可以呈現土地買賣資訊的地
                    價平台，並透過 R 語言的視覺化功能，快速幫助使用者了解地價趨勢變動。
                </p>
              </li>
              <li>
                <a class="name">Fun4 揪目標社群網站(大學專題)</a>
                <a class="date">July. 2016 – Oct. 2016 </a>
                <p class="note">Core developer</p>
                <p class="tech">使用技術：HTML、CSS、JavaScript、Ajax、JQuery、PHP、MySQL</p>
                <p>本專案為發展一目標社群網站，使用者可於網站中成立社群招募有相同目標的戰友一起努力，藉由自
                    訂達標保證金與裁判審查的契約機制，並設計多種社群互賴模式供使用者選擇。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</template>
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
