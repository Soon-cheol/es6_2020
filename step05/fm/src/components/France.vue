<template>
    <div>
        <Player v-for="p in playerlist" :props="p" :key="p.id" />
    </div>
</template>
<script>
import Player from './Player.vue'
export default {
    components: {
        Player
    },
    props: ['props'],
    data : function() {
        return {
            playerlist : this.props.France
        }
    }
};
</script>