<template>
  <div id="app">
    <main-page v-if="showUnlimited() === false" ></main-page>
    <unlimited-play v-if="showUnlimited()"></unlimited-play>
  </div>
</template>
<script>


import mainPage from './MainPage.vue';
import unlimitedPlay from './Unlimitedplay.vue';



export default {
  name: 'app',
  data:function() {
    return {
      //showUnlimited: true,
      showUnlimited:function(){

        let uri = window.location.href.split('?');
        if (uri.length == 2){
           let vars = uri[1].split('&');
           let getVars = {};
           let tmp = '';
           vars.forEach(function(v){
             tmp = v.split('=');
             if(tmp.length == 2)
             getVars[tmp[0]] = tmp[1];
           });
           //console.log(getVars);
           // do
           if(getVars.unlimitedplay == "true"){
             //page is unlimited
             return true
           }else{
             //page is not unlimited
             return false
           }

         }else { //page is not unlimited
          return false
         }

      }
      // msg: 'No limits, ad-free gaming for wild members',
      // show: false,
      // lang: function(){
      //   var userLanguage;
      //   if(typeof dataLayer !== 'undefined'){
      //     userLanguage = dataLayer[0].userLanguage.toLowerCase()
      //   }else{
      //     userLanguage = "en-us"
      //   }
      //   return userLanguage
      // }
    }
  },
  components:{
    'main-page': mainPage,
    'unlimited-play': unlimitedPlay,
  },
  methods:{
    // handleScroll:function(evt){
    //   let headerHeight = this.$refs.wildHeader.$el.offsetHeight,
    //       headerTop = this.$refs.wildHeader.$el.offsetTop,
    //       headerYPos = headerHeight + headerTop,
    //       benefitsSectionTop = this.$refs.benefitsSection.$el.offsetTop;
    //
    //   this.show=!!(window.pageYOffset >= benefitsSectionTop);
    //
    //   // if(window.pageYOffset >= benefitsSectionTop){
    //   //   this.show = true;
    //   // }else{
    //   //   this.show = false
    //   // }
    // }
  },
  beforeCreate: function(){
  },
  created: function(){
     // window.addEventListener('scroll', this.handleScroll);
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Open+Sans:400,600,700');
body, html{
  margin:0;
  padding:0;
}
#app.unlimitedPlay{
  main-page{
    display: none;
  }
}
</style>
