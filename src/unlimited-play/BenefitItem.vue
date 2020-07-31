<template>
  <div :id="wildBenefit.id" :class="`${wildBenefit.id} benefit`">
    <a v-if="wildBenefit.a"
       :href="wildBenefit.a.href"
       data-event-category="Landing Page"
       data-event-action="Join wild"
       :data-event-label="wildBenefit.a.label" ><div class="icon"></div></a>
    <div v-else class="icon"></div>
    <h3>{{ wildBenefit.h3[this.lang()] }}</h3>
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
    font-size:1.1em;
    text-transform:uppercase;
    margin: 0 auto;
    width: 80%;
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


.signUp{
  .icon{
    background: url(../assets/benefits-icons/signup-icon.png) no-repeat;
    background-size:82%;
  }
}
.explore{
  .icon{
    background: url(../assets/benefits-icons/explore-icon.png) no-repeat;
    background-size:77%;
  }
}
.download{
  .icon{
    background: url(../assets/benefits-icons/download-icon.png) no-repeat;
    background-size:104%;
  }
}
.repeat{
  .icon{
    background: url(../assets/benefits-icons/repeat-icon.png) no-repeat;
    background-size:66%;
  }
}

.benefit .icon{
  margin: 0 auto;
  width:188px;
  height: 172px;
  background-position: center;
}
@media only screen and (max-width: 979px) {
  .benefit .icon{
    margin: 10px auto 0;
    width:150px;
    height: 118px;
    background-position: center;
  }
  div.benefit{
    h3{
      font-size:.9em;
      width: 100%;
    }
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
      font-size:1.1em;
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
