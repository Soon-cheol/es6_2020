<template>
  <li>
    <div class="card" @click="select">
      <span :class="[className]">{{ value }}</span>
    </div>
    <div class="mask" onClick="alert('완료된 카드입니다.')"></div>
  </li>
</template>

<script>
export default {
  name: "card",
  props: ["props"],
  data: function() {
    return {
      value: this.props,
      className: "card" + this.props
    };
  },
  methods: {
    select(e) {
      this.$emit("click", e.target);
    }
  }
};
</script>
