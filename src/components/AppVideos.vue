<template>  
    <v-container fluid grid-list-md text-xs-center pa-1>
      <v-layout row wrap justify-space-between>
          <v-flex v-for="card in cards" :key="card.title" d-flex xs12 sm6 md6 pa-2>
          <!-- <v-flex v-for="card in cards" :key="card.title" d-flex md4 pa-2> -->
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 5}`">
                 <h3 class="headline mb-0 text-xs-center">{{card.title}}</h3>
                <div class="video-container"><iframe :src="card.src" frameborder="0"></iframe></div>
              </v-card>
            </v-hover>
          </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  data: () => ({
      cards: [
        { title: '', src: 'https://www.youtube.com/embed/LYdiJL0_F9A' },
        { title: '', src: 'https://www.youtube.com/embed/11Ih2RC1Cik' },
      ]
    })
}
</script>

<style scope>
.video-container {
	position:relative;
	padding-bottom:56.25%;
	padding-top:30px;
	height:0;
	overflow:hidden;
}

.video-container iframe, .video-container object, .video-container embed {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
</style>
