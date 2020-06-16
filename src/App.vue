<template>
  <div id="app">
    <section class="lpWrapper">
      <sticky-button :lang="this.lang" :class="[show ? 'buttonSlideIn' : 'buttonSlideOut']"></sticky-button>
      <wild-header :lang="this.lang" ref="wildHeader" ></wild-header>
      <benefits-section :lang="this.lang" ref="benefitsSection"></benefits-section>
      <genres-section :lang="this.lang"></genres-section>
      <popular-games :lang="this.lang"></popular-games>
      <!-- <keep-in-touch></keep-in-touch> -->
      <wild-footer :lang="this.lang"></wild-footer>
    </section>
  </div>
</template>
<script>


import wildHeader from './Header.vue';
import benefitsSection from './Benefits.vue';
import stickyButton from './StickyButton.vue';
import genres from './Genres.vue';
import popularGames from './popularGames.vue';
import keepIntouch from './KeepInTouch.vue';
import wildFooter from './Footer.vue';



export default {
  name: 'app',
  data:function() {
    return {
      msg: 'No limits, ad-free gaming for wild members',
      show: false,
      lang: function(){
        var userLanguage;
        if(typeof dataLayer !== 'undefined'){
          userLanguage = dataLayer[0].userLanguage.toLowerCase()
        }else{
          userLanguage = "it-it"
        }
        return userLanguage
      }
    }
  },
  components:{
    'wild-header': wildHeader,
    'benefits-section': benefitsSection,
    'sticky-button': stickyButton,
    'genres-section': genres,
    'popular-games': popularGames,
    'keep-in-touch': keepIntouch,
    'wild-footer':wildFooter
  },
  methods:{
    handleScroll:function(evt){
      let headerHeight = this.$refs.wildHeader.$el.offsetHeight,
          headerTop = this.$refs.wildHeader.$el.offsetTop,
          headerYPos = headerHeight + headerTop,
          benefitsSectionTop = this.$refs.benefitsSection.$el.offsetTop;

      this.show=!!(window.pageYOffset >= benefitsSectionTop);

      // if(window.pageYOffset >= benefitsSectionTop){
      //   this.show = true;
      // }else{
      //   this.show = false
      // }
    }
  },
  created: function(){
     window.addEventListener('scroll', this.handleScroll);
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Open+Sans:400,600,700');
body, html{
  margin:0;
  padding:0;
}
section.lpWrapper{
    font-size: 16px;
    background: #f1f1f1;
    font-family: 'Open Sans', sans-serif;
    h2{
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 3.15em;
      text-transform: uppercase;
      font-weight: 700;
    }
    h3{

    }
    .stickyWrap{
      position: fixed;
      width: 100%;
      top: 0;
      transition: transform .3s ease;
      z-index: 20000;
      &.buttonSlideIn{
        transform: translateY(0px);
      }
      &.buttonSlideOut{
        transform: translateY(-100px);
      }
    }
}

@media only screen and (max-width: 1319px) {}
@media only screen and (max-width: 979px) {}
@media only screen and (max-width: 767px) {}
@media only screen and (max-width: 699px) {}

</style>
