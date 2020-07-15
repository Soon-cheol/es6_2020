<template>
  <div class="player" @click="playerInfo">
    <span class="name">{{name}}</span>
    <span class="number">{{number}}</span>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="90" height="90" viewBox="0 0 1280.000000 1167.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1167.000000) scale(0.1,-0.1)" stroke="none">
<path d="M4475 11559 c-522 -262 -4438 -2303 -4467 -2328 -4 -3 38 -112 94
-241 55 -129 231 -541 390 -915 160 -374 357 -835 438 -1025 l147 -345 44 2
c37 1 1367 171 1482 189 l37 6 0 -3451 0 -3451 3760 0 3760 0 0 3451 0 3451
38 -6 c114 -18 1444 -188 1481 -189 l44 -2 147 345 c81 190 278 651 438 1025
159 374 335 786 390 915 56 129 98 238 94 241 -26 23 -3919 2052 -4384 2285
l-307 155 -43 -33 c-146 -111 -455 -184 -998 -235 -265 -25 -1055 -25 -1320 0
-542 51 -852 124 -998 234 -23 18 -43 33 -45 33 -1 -1 -101 -50 -222 -111z
m372 -510 c80 -34 295 -106 415 -138 361 -97 678 -139 1098 -148 490 -10 883
38 1260 154 122 37 319 114 358 139 13 9 25 14 27 12 8 -7 -67 -153 -118 -231
-377 -574 -1152 -836 -1907 -646 -468 117 -873 405 -1149 817 -23 34 -40 62
-37 62 2 0 26 -9 53 -21z"/>
</g>
</svg>
  </div>
</template>
<script>
import eventBus from '../eventBus'

export default {
  data : function() {
      return {
          name: this.props.uname,
          number: this.props.number
      }
  },
  props: ['props'],
  methods : {
    playerInfo : function(){
      eventBus.$emit('player-info', this.props);
    }
  }
}
</script>