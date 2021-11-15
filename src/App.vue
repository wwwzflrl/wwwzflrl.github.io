<template>
  <v-app>
    <top-toolbar />

    <v-main>
      <router-view/>
    </v-main>

    <bottom-nav />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TopToolbar from './components/TopToolbar.vue';
import BottomNav from './components/BottomNav.vue';

@Component({
  components: {
    TopToolbar,
    BottomNav,
  },
})
export default class extends Vue {
}
</script>
