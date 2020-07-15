<template>
  <div id="app">
    <div class="matching-result" v-if="matching">
      <div class="success" v-if="success">매칭 성공 !!</div>
      <div class="fail" v-if="fail">매칭 실패 !!</div>
    </div>
    <ul>
      <card v-for="(c, i) in cardList" :key="i + 1" :props="c.number" @click="select" />
    </ul>
  </div>
</template>

<script>
import data from "./data";
import card from "./components/card";

export default {
  name: "app",
  components: {
    card
  },
  data: function() {
    return {
      cardList: null,
      data1: data,
      data2: null,
      selCard1: null,
      selCard2: null,
      matching: false,
      success: false,
      fail: false
    };
  },
  created: function() {
    this.data2 = this.data1.map(item => {
      return {
        ...item,
        id: item.id + 10
      };
    });
    this.shuffle(this.data1, this.data2);
    setTimeout(this.gameStart, 3000);
  },
  methods: {
    shuffle: function(data1, data2) {
      let arr = data1.concat(data2);
      var j, x, i;
      for (i = arr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
      }
      this.cardList = arr;
    },
    gameStart: function() {
      for (let i = 1; i < this.data1.length + 1; i++) {
        let name = ".card" + i;
        let nameAll = document.querySelectorAll(name);
        // 적을 경우 직접 써도 되고, 많을 경우는 for 문
        // nameAll[0].parentNode.classList.add("rotate90");
        // nameAll[1].parentNode.classList.add("rotate90");
        for (let i = 0; i < nameAll.length; i++) {
          nameAll[i].parentNode.classList.add("rotate90");
        }
      }
    },
    select: function(t) {
      const _this = this;
      console.log(t.childNodes[0]);
      // console.log("셀렉 실행");
      // t.parentNode.childNodes[0].classList.remove("hidden");
      if (t !== undefined) {
        t.classList.add("rotate0");
        if (this.selCard1 === null) {
          // 한장도 선택이 되지 않은 경우
          this.selCard1 = t;
          // console.log("this.selCard1", this.selCard1);
        } else {
          // 한장이 선택된 경우
          this.selCard2 = t;

          if (
            this.selCard1.childNodes[0].className ===
            this.selCard2.childNodes[0].className
          ) {
            // 두장이 맞은 경우
            console.log("두장이 맞은 경우");
            _this.selCard1.parentNode.childNodes[0].classList.add("complete");
            _this.selCard2.parentNode.childNodes[0].classList.add("complete");
            _this.selCard1.classList.remove("rotate90");
            _this.selCard2.classList.remove("rotate90");
            _this.success = _this.matching = true;
            _this.selCard1 = _this.selCard2 = null;

            setTimeout(function() {
              _this.success = _this.success = _this.matching = false;
            }, 1000);
          } else {
            // 두장이 맞지 않은 경우
            console.log("두장이 맞지 않은 경우");
            console.log("selCard1", this.selCard1.childNodes);
            console.log("selCard2", this.selCard2.childNodes);
            _this.fail = _this.matching = true;
            _this.selCard1 = _this.selCard2 = null;

            setTimeout(function() {
              _this.success = _this.fail = _this.matching = false;
              const li = document.querySelectorAll(".rotate90");
              for (let i = 0; i < li.length; i++) {
                li[i].classList.remove("rotate0");
              }
            }, 1000);
          }
        }
      }
    }
  }
};
</script>
