<template>
  <div class="hello">
    <button v-on:click="clickBtn">HelloWorld</button>
    <button v-on:click="changeComponent">Change Component</button>
    <ByWorld v-if="isComponent"></ByWorld>
  </div>
</template>

<script>
import eventBus from "../eventBus";
import ByWorld from "./ByWorld";

export default {
  name: "HelloWorld",
  components: {
    ByWorld,
  },
  data() {
    return {
      isComponent: true,
    };
  },
  methods: {
    clickBtn() {
      eventBus.$emit("push-msg", "안녕");
    },
    changeComponent() {
      this.isComponent = !this.isComponent;
    },
  },
};
</script>
