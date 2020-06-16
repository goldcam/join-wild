<template>
  <section class="lpFooter">
    <h2>{{ this.content.headline[lang()] }}</h2>
    <div class="button-wrapper">
      <a class="trialBtn" href="/wildsignup" data-event-category="Landing Page" data-event-action="Join wild" data-event-label="Join Now footer">
        {{ this.content.cta[lang()] }}
      </a>
    </div>
    <p>
      <span class="wildPrice">{{ this.prices[this.domain] }}</span>{{ this.content.priceDetails[lang()] }}
    </p>
  </section>
</template>
<script>
export default{
  name:'wild-footer',
  props:['lang'],
  data:function(){
    return{
      prices:{
          "localhost": "$7.99",
          ".com": "$7.99",            //usd
          ".eu": "7.99 €",            //eur
          ".de": "7.99 €",            //eur
          ".fr": "7.99 €",            //eur
          ".it": "7.99 €",            //eur
          ".es": "7.99 €",            //eur
          ".ca": "$10.99",            //cad
          ".co.uk": "£6.99",          //gbp
          ".mx": "$149",              //mxn
          ".com.br": "R$ 25,99",       //brl
          ".co.nz": "NZ$ 11.49",      //nzd
          ".com.au": "$9.99",          //aud
          ".kr": "₩8900",             //krw
          ".sg": "$11",               //sgd
          ".hk": "HK$ 60",            //hkd
          ".in":"₹499"                //inr
      },
      domain: window.location.hostname.replace('www.wildtangent',''),
      content: {
        headline:{
          "en-us": "Ready to Join",
          "es-mx": "Listo para unirse",
          "de-de": "Werde jetzt Mitglied!",
          "fr-fr": "Prêt à rejoindre",
          "it-it": "Pronto per iscriverti",
          "es-es": "Listo para unirse",
          "pt-br": "Pronto para entrar"
        },
        cta:{
          "en-us":"Join Now",
          "es-mx": "ÚNETE AHORA",
          "de-de": "MITGLIED WERDEN",
          "fr-fr": "ADHÉRER",
          "it-it": "ISCRIVITI ADESSO",
          "es-es": "ÚNETE AHORA",
          "pt-br": "ENTRAR"
        },
        priceDetails:{
          "en-us":"/month. Cancel anytime.",
          "es-mx": "/ mes. Cancelar en cualquier momento.",
          "de-de": "/Monat. Jederzeit kündbar.",
          "fr-fr": " / mois. Annuler à tout moment.",
          "it-it": "/ mese. Annulla in qualsiasi momento.",
          "es-es": "/ mes. Cancelar en cualquier momento.",
          "pt-br": "/mês. Cancelar a qualquer momento."
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
$green:#66bc23;
section.lpFooter{
    display: block;
    background:#0f2959 url(assets/wildfooter.jpg) no-repeat;//0f2959
    background-size: cover;
    background-position: center;
    min-height: 190px;
    box-sizing:border-box;
    padding:25px 110px 0;
    color:#fff;
    margin:0;
    h2{
      text-transform: capitalize;
      font-weight: bold;
      line-height: 1;
      text-align: center;
      letter-spacing: -1px;
      margin:0 0 14px;
      color: #fff;
    }
    .button-wrapper{
      display: flex;
      justify-content: center;
      padding: .5em;
    }
    a.trialBtn{
      background-color: $green;
      color:#fff;
      font-family: 'wf_SegoeUI','Segoe UI','Segoe','Segoe WP','Tahoma','Verdana','Arial','sans-serif';
      font-size: 18px;
      letter-spacing: 0px;
      text-transform: uppercase;
      font-weight: 500;
      padding: 5px 30px;
      border-radius: 2px;
      line-height: 1.273;
      text-align: center;
      text-decoration: none;
      -webkit-transition: background .2s ease-out;
      transition: background .2s ease-out;
      -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover, &:focus{
        background: lighten($green, 10%);
      }
    }
    p{
      font-size: 10px;
      line-height: 15px;
      color: #fff;
      text-align: center;
      display: block;
      width: 150px;
      margin: 0 auto;
    }
}
@media only screen and (max-width: 979px) {
  section.lpFooter{
      padding:25px 50px 0;
    }
}
</style>
