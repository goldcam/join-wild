<template>
  <section id="benefitsSection">
    <h2>{{ this.headline[lang()] }}</h2>
    <benefit-item :lang="lang" v-for="wildBenefit in wildBenefits" :wildBenefit="wildBenefit" :key="wildBenefit.id"></benefit-item>
  </section>
</template>
<script>
import BenefitItem from './BenefitItem.vue';

export default{
  name:'benefits-section',
  props:['lang'],
  components:{
    'benefit-item': BenefitItem
  },
  data:function(){
    return{
      headline:{
        "en-us": "How It Works",
        "es-mx": "",
        "de-de": "",
        "fr-fr": "",
        "it-it": "",
        "es-es": "",
        "pt-br": ""
      },
      wildBenefits:[
        {
          id:'signUp',
          h3: {
            "en-us": "Sign up for Your wild membership",
            "es-mx": "",
            "de-de": "",
            "fr-fr": "",
            "it-it": "",
            "es-es": "",
            "pt-br": ""
          },
          a:{
            href:"/wildsignup",
            label:"Signup Icon"
          }
        },
        {
          id:'explore',
          h3: {
            "en-us": "Explore unlimited play games",
            "es-mx": "",
            "de-de": "",
            "fr-fr": "",
            "it-it": "",
            "es-es": "",
            "pt-br": ""
          }
        },
        {
          id:'download',
          h3: {
            "en-us": "Download, Play and have fun",
            "es-mx": "",
            "de-de": "",
            "fr-fr": "",
            "it-it": "",
            "es-es": "",
            "pt-br": ""
          }
        },
        {
          id:'repeat',
          h3: {
            "en-us": "Repeat step 2 and 3",
            "es-mx": "",
            "de-de": "",
            "fr-fr": "",
            "it-it": "",
            "es-es": "",
            "pt-br": ""
          }
        }

      ]
    }
  }
}
</script>
<style scoped lang="scss">
$black:#0d0d14;
section#benefitsSection{
  max-width: 1300px;
  margin: 0 auto;
  box-sizing: border-box;
  padding:10px 20px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: baseline;
  h2{
    width:100%;
    text-align: center;
    font-size:48px;
    margin:1rem 0 2.5rem;
    text-transform: none;
    color: $black;
    text-transform: uppercase;
  }
  &> div{
    width:20%;
    margin: 0 2%;
    position: relative;
  }
}

@media only screen and (max-width: 1319px) {}
@media only screen and (max-width: 979px) {}
@media only screen and (max-width: 767px) {
  section#benefitsSection{
    padding:10px 5px 40px;
    &> div{
      width:40%;
      margin:2%;
    }
  }

}
@media only screen and (max-width: 699px) {
}

</style>
