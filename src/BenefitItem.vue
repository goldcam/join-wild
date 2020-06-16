<template>
  <div :id="wildBenefit.id" :class="`${wildBenefit.id} benefit`">
    <div class="icon"></div>
    <h3>{{ wildBenefit.h3[this.lang()] }}</h3>
    <p>{{ wildBenefit.p[this.lang()] }} <a v-if="wildBenefit.a" :href="wildBenefit.a.href"> {{ wildBenefit.a.lang[this.lang()] }}</a></p>
  </div>
</template>
<script>
export default{
  name:'benefit-item',
  props:['wildBenefit', 'lang'],
  data: function(){
    return {
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
  }
}
</script>
<style scoped lang="scss">
$black:#0d0d14;
div.benefit{
  font-size: 16px;
  h3{
    font-weight: bold;
    font-size:1.17em;
  }
  h3,p{
    text-align: center;
    color: $black;
    font-family: 'Open Sans', sans-serif;
  }
  p{
    font-size: 1em;
    line-height: 1.4em;
    margin: 1em 0;
    a{
      color: #2359bc;
      text-decoration: none;
    }
  }
}

.unlimitedPlay{
  .icon{
    background: url(assets/benefits-icons/unlimited-play-3.png) no-repeat;
    background-size:85%;
  }
}
.adFreeGaming{
  .icon{
    background: url(assets/benefits-icons/ad-free-gaming-2.png) no-repeat;
    background-size:70%;
  }
}
.rental{
  .icon{
    background: url(assets/benefits-icons/rental-to-purchace-2.png) no-repeat;
    background-size:75%;
  }
}
.purchaseDiscounts{
  .icon{
    background: url(assets/benefits-icons/discounts-2.png) no-repeat;
    background-size:63%;
  }
}
.benefit .icon{
  margin: 0 auto;
  width:203px;
  height: 160px;
  background-position: center;
}
// @media only screen and (max-width: 1319px) {
// div.benefit{
//
//   }
// }
@media only screen and (max-width: 979px) {
  .benefit .icon{
    margin: 10px auto 0;
    width:150px;
    height: 118px;
    background-position: center;
  }

}
@media only screen and (max-width: 767px) {
  .adFreeGaming{
    .icon{
      background-size:78%;
    }
  }
  div.benefit{
    h3{
      height: 25px;
    }
    p{
      font-size: .875em;
    }
  }
}
@media only screen and (max-width: 699px) {
  div.benefit{
    h3{
      font-size: 1em;
    }
  }
}
@media only screen and (max-width: 570px) {
  div.benefit{
    h3{
      height: 32px;
    }
  }
}
</style>
