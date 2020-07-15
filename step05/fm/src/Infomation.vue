<template>
  <div>
    <!-- <ul v-for="p in playerlist" :key="p.id"> -->
    <ul>
      <li class="name">
        <span>{{info.number}}.</span>
        <span>{{info.name}}</span>
      </li>
      <li>
        <img :src="info.image" />
      </li>
      <li>
        <span>소속팀 :</span>
        <span>{{info.team}}</span>
      </li>
      <li>
        <span>포지션 :</span>
        <span>{{info.position}}</span>
      </li>
      <li>
        <span>국가 :</span>
        <span>{{info.nation}}</span>
      </li>
      <li>
        <span>나이 :</span>
        <span>{{info.age}}</span>
      </li>
      <li>
        <span>키 :</span>
        <span>{{info.height}}</span>
      </li>
      <li>
        <span>몸무게 :</span>
        <span>{{info.weight}}</span>
      </li>
      <li>
        <span>주발 :</span>
        <span>{{info.foot}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import eventBus from "./eventBus";

export default {
  created: function() {
    eventBus.$on("player-info", this.playerInfo);
  },
  data: function() {
    return {
      info: {
        number: "",
        name: "",
        image: "",
        team: "",
        position: "",
        nation: "",
        age: "",
        height: "",
        foot: ""
      }
    };
  },
  // props: ['props'],
  methods: {
    playerInfo: function(info) {
      // let value = Object.values(info);
      // let values = Object.keys(info);
      // for(var i = 0; i < values.length; i++){
      // console.log(this.info.values)
      // }
      if (info == 0) {
        this.info.number = "";
        this.info.name = "";
        this.info.image = "";
        this.info.team = "";
        this.info.position = "";
        this.info.nation = "";
        this.info.age = "";
        this.info.height = "";
        this.info.foot = "";
      } else {
        this.info.number = info.number;
        this.info.name = info.name;
        this.info.image =
          "/src/assets/images/" + info.nation + "/" + info.uname + ".jpg";
        this.info.team = info.team;
        this.info.position = info.position;
        this.info.nation = info.nation;
        this.info.age = info.age;
        this.info.height = info.height;
        this.info.foot = info.foot;
      }
    }
  }
};
</script>