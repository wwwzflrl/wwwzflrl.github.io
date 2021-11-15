<template>

  <v-bottom-navigation
    app
    fixed
    grow
    v-model="activeItem"
    color="primary"
  >
    <v-btn value="top">
      <span>首页</span>
      <v-icon>thumb_up</v-icon>
    </v-btn>

    <v-btn value="code">
      <span>关于我们</span>
      <v-icon>code</v-icon>
    </v-btn>

    <v-btn value="favorites" @click="show = !show">
      <span>微信咨询</span>
      <v-icon>wechat</v-icon>
    </v-btn>

    <v-dialog
      v-model="show"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          xxx的工作微信
        </v-card-title>

        <v-img src="@/assets/qr.png"></v-img>
      </v-card>
    </v-dialog>
  </v-bottom-navigation>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BottomNav extends Vue {
    activeItem = 'top';

    show = false
}
</script>
