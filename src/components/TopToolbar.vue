<template>
  <div>
    <v-app-bar
      app
      fixed
      dark
      color="primary">
        <v-toolbar-title>移民项目</v-toolbar-title>

        <v-btn icon style="position: absolute; right: 15px">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TopToolbar extends Vue {
    showMenu = false;

    toggleMenu(): void {
      this.showMenu = !this.showMenu;
    }

    doNothing(): void {
      console.log(this.showMenu);
    }
}
</script>
