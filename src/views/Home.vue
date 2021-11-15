<template>
  <div>
    <v-carousel
      cycle
      height="200"
      hide-delimiter-background
      show-arrows-on-hover>
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i">
        <v-sheet
          height="100%">
         <v-card height="200" color="light-blue lighten-3">
           <v-card-title> {{ slide.title }} </v-card-title>
           <v-card-text>
             {{ slide.body }}
           </v-card-text>
         </v-card>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class extends Vue {
  colors= [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ];

  slides = [
    {
      title: '专注新斯科舍省移民',
      body: '哈利法克斯移民, 为出国梦想保驾护航',
    },
    {
      title: '哈利法克斯',
      body: '加拿大最适合居住的城市之一，加拿大东部海洋四省的经济中心',
    },
    {
      title: '中国-哈利法克斯直营',
      body: '无缝对接出国一条龙服务',
    },
  ];

  cards = [
    { title: '哈利法克斯介绍', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    { title: '新斯科舍省（NS省）大学/院校介绍', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    { title: '留学移民项目', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
    { title: '新省雇主类移民项目', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    { title: '新移民抵加服务', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    { title: '其他类型签证办理', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
  ];
}
</script>
