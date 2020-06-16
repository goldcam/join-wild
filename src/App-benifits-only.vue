<template>
  <div id="app">
    <section class="lpWrapper">
      <benefits-section :lang="this.lang" ref="benefitsSection"></benefits-section>
    </section>
  </div>
</template>
<script>
import benefitsSection from './Benefits.vue';

export default {
  name: 'app',
  data:function() {
    return {
      msg: 'No limits, ad-free gaming for wild members',
      show: false,
      lang: function(){
        var userLanguage;
        if(typeof dataLayer !== 'undefined'){
          lang = dataLayer[0].userLanguage.toLowerCase()
        }else{
          userLanguage = "en-us"
        }
        return userLanguage
      }
    }
  },
  components:{
    'benefits-section': benefitsSection
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
</style>
