<template>
  <div>{{ msg }}</div>
</template>

<script>
import eventBus from "../eventBus";
export default {
  data() {
    return {
      msg: "",
      count: 0,
    };
  },
  destroyed() {
    console.log("destroyed");
  },
  created() {
    eventBus.$on("push-msg", (payload) => {
      this.msg = payload;
      this.count++;
      console.log(this.count);
    });
  },
};
</script>
