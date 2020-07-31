<template>
    <section class="lpWrapper">
      <wild-header :lang="this.lang" ref="wildHeader" ></wild-header>
      <benefits-section :lang="this.lang" ref="benefitsSection"></benefits-section>
      <popular-games :lang="this.lang"></popular-games>
      <wild-footer :lang="this.lang"></wild-footer>
    </section>
</template>
<script>


import wildHeader from './unlimited-play/Header.vue';
import benefitsSection from './unlimited-play/Benefits.vue';
import popularGames from './unlimited-play/popularGames.vue';
import wildFooter from './unlimited-play/Footer.vue';



export default {
  name: 'main-page',
  data:function() {
    return {
      msg: 'No limits, ad-free gaming for wild members',
      show: false,
      lang: function(){
        var userLanguage;
        if(typeof dataLayer !== 'undefined'){
          userLanguage = dataLayer[0].userLanguage.toLowerCase()
        }else{
          userLanguage = "en-us"
        }
        return userLanguage
      }
    }
  },
  components:{
    'wild-header': wildHeader,
    'benefits-section': benefitsSection,
    'popular-games': popularGames,
    'wild-footer':wildFooter
  },
  methods:{
    handleScroll:function(evt){
      let headerHeight = this.$refs.wildHeader.$el.offsetHeight,
          headerTop = this.$refs.wildHeader.$el.offsetTop,
          headerYPos = headerHeight + headerTop,
          benefitsSectionTop = this.$refs.benefitsSection.$el.offsetTop;

      this.show=!!(window.pageYOffset >= benefitsSectionTop);
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
    background: #fff;
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
@media only screen and (max-width: 850px) {
  section.lpWrapper{
      h2{
        font-size: 2.5em;
      }
    }
}
@media only screen and (max-width: 699px) {}

</style>
