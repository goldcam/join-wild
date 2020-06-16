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
        "en-us": "wild Members Benefits",
        "es-mx": "Beneficios para miembros wild",
        "de-de": "Vorteile für Wild-Mitglieder",
        "fr-fr": "wild members avantages",
        "it-it": "Vantaggi dei membri wild",
        "es-es": "Beneficios para miembros wild",
        "pt-br": "Benefícios para membros wild"
      },
      wildBenefits:[
        {
          id:'unlimitedPlay',
          h3: {
            "en-us": "Unlimited Play",
            "es-mx": "Juego ilimitado",
            "de-de": "Unbegrenztes Spielen",
            "fr-fr": "Jeu illimité",
            "it-it": "Gioco illimitato",
            "es-es": "Juego ilimitado",
            "pt-br": "Jogo Ilimitado"
          },
          p: {
            "en-us": "Play as much as you want on over 2,000 select games.",
            "es-mx": "Juega todo lo que quieras en más de 2.000 juegos selectos.",
            "de-de": "Spielen Sie in über 2.000 ausgewählten Spielen so viel, wie Sie wollen.",
            "fr-fr": "Jouez autant que vous voulez à plus de 2 000 parties sélectionnées.",
            "it-it": "Gioca quanto vuoi su oltre 2.000 giochi selezionati.",
            "es-es": "Juega todo lo que quieras en más de 2.000 juegos selectos.",
            "pt-br": "Jogue o quanto quiser em mais de 2.000 jogos selecionados."
          },
          a:{
            "lang":{
              "en-us": "Browse Unlimited Play games",
              "es-mx": "Navegar Ilimitado Jugar juegos",
              "de-de": "Stöbern Sie in Unlimited Play Spielen",
              "fr-fr": "Parcourir les jeux illimités",
              "it-it": "Sfoglia giochi illimitati",
              "es-es": "Navegar Ilimitado Jugar juegos",
              "pt-br": "Navegar Ilimitado Jogos de azar Ilimitado"
            },
            "href": "/channels/unlimited-play"
          }
        },
        {
          id:'purchaseDiscounts',
          h3: {
            "en-us": "Purchase Discounts",
            "es-mx": "Descuentos de compra",
            "de-de": "Rabatte",
            "fr-fr": "Remises d'achat",
            "it-it": "Sconti sugli acquisti",
            "es-es": "Descuentos de compra",
            "pt-br": "Descontos de compra"
          },
          p: {
            "en-us": "Members get discounts on rentals and purchases on 1,000s of games.",
            "es-mx": "Los miembros obtienen descuentos en alquileres y compras en miles de juegos.",
            "de-de": "Sichere dir Rabatte beim Mieten und Kaufen von tausenden von Spielen.",
            "fr-fr": "Les membres bénéficient de réductions sur les locations et les achats de milliers de jeux.",
            "it-it": "I membri ottengono sconti su noleggi e acquisti su 1.000 di giochi.",
            "es-es": "Los miembros obtienen descuentos en alquileres y compras en miles de juegos.",
            "pt-br": "Os membros recebem descontos em aluguéis e compras em milhares de jogos."
          }
        },
        // {
        //   id:'rental',
        //   h3: 'Rental Applies to Purchase',
        //   p: 'Highest rental will go towards the purchase of the game.'
        // },
        {
          id:'adFreeGaming',
          h3: {
            "en-us": "Ad Free Gaming",
            "es-mx": "Anuncio gratuito de juegos web",
            "de-de": "Spielen ohne Werbung",
            "fr-fr": "Jeu web sans publicité",
            "it-it": "Gioco web pubblicitario gratuito",
            "es-es": "Anuncio gratuito de juegos web",
            "pt-br": "Jogos sem anúncios"
          },
          p: {
            "en-us": "Maximize your gaming on free-to-play games with no ads and a larger game screen.",
            "es-mx": "Maximice su juego en juegos gratuitos sin anuncios y con una pantalla de juego más grande.",
            "de-de": "Spiele kostenlose Spiele ohne Werbung und mit mehr Platz für deine Spielfläche! ",
            "fr-fr": "Maximisez votre jeu sur des jeux gratuits sans publicité et avec un écran de jeu plus grand.",
            "it-it": "Massimizza i tuoi giochi su giochi free-to-play senza pubblicità e una schermata di gioco più ampia.",
            "es-es": "Maximice su juego en juegos gratuitos sin anuncios y con una pantalla de juego más grande.",
            "pt-br": "Maximize seus jogos em jogos gratuitos sem anúncios e uma tela de jogo maior."
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
  background:#f1f1f1;
  margin: 0 auto;
  box-sizing: border-box;
  padding:10px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: baseline;
  h2{
    width:100%;
    text-align: center;
    font-size:48px;
    margin:0;
    text-transform: none;
    color: $black;
  }
  &> div{
    width:27%;
    margin: 0 2%;
  }
}

@media only screen and (max-width: 1319px) {}
@media only screen and (max-width: 979px) {}
@media only screen and (max-width: 767px) {
  section#benefitsSection{
    padding:10px 5px;
    &> div{
      width:28%;
      margin:0 2%;
    }
  }

}
@media only screen and (max-width: 699px) {
}

</style>
