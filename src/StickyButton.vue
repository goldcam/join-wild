<template>
  <div class="stickyWrap" >
    <div class="buttonWrap">
      <a class="stickyButton" data-event-category="Landing Page" data-event-action="Join wild" data-event-label="Join Now follower" href="/wildsignup">{{ this.content.cta[lang()] }}</a>
    </div>
  </div>
</template>
<script>
import VueSticky from 'vue-sticky';

export default{
  name:'sticky-button',
  props:['lang'],
  directives: {
    'sticky': VueSticky
  },
  data: function(){
    return{
      content: {
        cta:{
          "en-us":"Join Now",
          "es-mx": "ÚNETE AHORA",
          "de-de": "MITGLIED WERDEN",
          "fr-fr": "ADHÉRER",
          "it-it": "ISCRIVITI ADESSO",
          "es-es": "ÚNETE AHORA",
          "pt-br": "ENTRAR"
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
$blue:#2359bc;
$green:#66bc23;
div.buttonWrap{
  background: #0d0d14;
  display: flex;
  justify-content: flex-end;
  a.stickyButton{
    background:$green ;
    color:#fff;
    font-family: 'wf_SegoeUI','Segoe UI','Segoe','Segoe WP','Tahoma','Verdana','Arial','sans-serif';
    font-size: 18px;
    letter-spacing: 0px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    width:180px;
    display: block;
    padding:15px 10px;
    -webkit-transition: background .2s ease-out;
    transition: background .2s ease-out;
    &:hover{
      background: lighten($green, 10%);
    }
  }
}
</style>
