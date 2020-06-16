<template>
  <section class="genresSection">
    <div>
      <section class="text">
        <h3>{{ this.content.headline[lang()] }}</h3>
        <p>{{ this.content.text[lang()] }}</p>
      </section>
      <section class="iconSection">
        <div v-for="genre in genres" :class="`iconContainier ${genre.className}`"  >
          <div class="iconImage"></div>
          <p>{{genre.text[lang()]}}</p>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
export default{
  name:'genres',
  props:['lang'],
  data:function(){
    return{
      genres: [
        {
          className:'rpg',
          text:{
            "en-us": "Role-Playing",
            "es-mx": "Juego de rol",
            "de-de": "Rollenspiel",
            "fr-fr": "Jouer un rôle",
            "it-it": "Giochi di ruolo",
            "es-es": "Juego de rol",
            "pt-br": "Objecto escondido"
          }
        },
        {
          className:'hiddenObject',
          text:{
            "en-us": "Hidden Object",
            "es-mx": "Objeto oculto",
            "de-de": "Wimmelbild",
            "fr-fr": "Objets cachés",
            "it-it": "Oggetto nascosto",
            "es-es": "Objeto oculto",
            "pt-br": ""
          }
        },
        {
          className:'strategy',
          text:{
            "en-us": "Strategy",
            "es-mx": "Estrategia",
            "de-de": "Strategie",
            "fr-fr": "Stratégie",
            "it-it": "Strategia",
            "es-es": "Estrategia",
            "pt-br": "Estratégia"
          }
        },
        {
          className:'action',
          text:{
            "en-us": "Action & Adventure",
            "es-mx": "Acción Aventura",
            "de-de": "Action & Abenteuer",
            "fr-fr": "Action & Aventure",
            "it-it": "Azione avventura",
            "es-es": "Acción Aventura",
            "pt-br": "Ação e aventura"
          }
        },
        {
          className:'racing',
          text:{
            "en-us": "Racing",
            "es-mx": "Carreras",
            "de-de": "Rennspiele",
            "fr-fr": "Courses",
            "it-it": "Da corsa",
            "es-es": "Carreras",
            "pt-br": "Corridas"
          }
        },
        {
          className:'cards',
          text:{
            "en-us": "Cards & Casino",
            "es-mx": "Tarjetas y Casino",
            "de-de": "Karten & Casino",
            "fr-fr": "Cartes et casino",
            "it-it": "Carte e casinò",
            "es-es": "Tarjetas y Casino",
            "pt-br": "Cartões e Cassino"
          }
        },
        {
          className:'puzzle',
          text:{
            "en-us": "Puzzle",
            "es-mx": "Rompecabezas",
            "de-de": "Puzzle",
            "fr-fr": "Puzzle",
            "it-it": "Puzzle",
            "es-es": "Rompecabezas",
            "pt-br": "Enigma"
          }
        },
        {
          className:'timeManagement',
          text:{
            "en-us": "Time Management",
            "es-mx": "Gestión del tiempo",
            "de-de": "Zeit-Management",
            "fr-fr": "Gestion du temps",
            "it-it": "Gestione del tempo",
            "es-es": "Gestión del tiempo",
            "pt-br": "Gerenciamento de tempo"
          }
        }
      ],
      content: {
        headline:{
          "en-us": "all the best genres",
          "es-mx": "todos los mejores géneros",
          "de-de": "Die besten Genres",
          "fr-fr": "tous les meilleurs genres",
          "it-it": "tutti i migliori generi",
          "es-es": "todos los mejores géneros",
          "pt-br": "todos os melhores gêneros"
        },
        text:{
          "en-us": "Whether you love to delve deep into dungeons, solve master puzzles, race the clock, beat your solitaire time, or go on adventures, we’ve got your favorite genres covered!",
          "es-mx": "Ya sea que te guste profundizar en las mazmorras, resolver rompecabezas principales, correr el reloj, superar tu tiempo de solitario o aventuras, ¡tenemos tus géneros favoritos cubiertos!",
          "de-de": "Du hältst dich am liebsten in dunklen Höhlen auf? Du meisterst ein Puzzle nach dem anderen? Du willst jeden Wettlauf gegen die Zeit gewinnen? Du bist Meister im Solitaire oder immer auf der Suche nach dem nächsten Abenteuer? Wir haben für jeden das passende Genre!",
          "fr-fr": "Que vous aimiez plonger dans les donjons, résoudre des énigmes majeures, jouer à l'horloge, battre votre temps au solitaire ou partir à l'aventure, vos genres préférés sont couverts!",
          "it-it": "Che ti piaccia immergerti nei sotterranei, risolvere rompicapi, correre il tempo, battere il tuo tempo solitario, o andare in avventure, abbiamo coperto i tuoi generi preferiti!",
          "es-es": "Ya sea que te guste profundizar en las mazmorras, resolver rompecabezas principales, correr el reloj, superar tu tiempo de solitario o aventuras, ¡tenemos tus géneros favoritos cubiertos!",
          "pt-br": "Se você gosta de se aprofundar nas masmorras, resolver quebra-cabeças, correr o relógio, bater o seu tempo de solitário ou ir em aventuras, nós temos seus gêneros favoritos cobertos!"
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
section.genresSection{
  box-sizing: border-box;
  padding: 20px 110px;
  background:#99afd7 url(assets/blueangle.png) no-repeat;
  background-position:0 50%;
  &> div{
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3{
    text-transform: none;
    color:#0d0d14;
    font-size: 32px;
    margin:0;
    line-height: 1.5;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
  .text{
    //flex:1;
    max-width: 380px;
    p{
      margin:0 20px 0 0;
      text-align: left;
      line-height: 1.35em;
      font-size: 1em;
    }
  }
  .iconSection{
    display: flex;
    flex-wrap: wrap;
    //flex:2;
    max-width: 700px;
    &> div{
      width:25%;
      margin: 15px 0;
      .iconImage{
        margin: 0 auto;
        background-position: center;
      }
      p{
        font-size: 12px;
        text-align: center;
      }
    }
  }
  .hiddenObject{
    .iconImage{
      background: url(assets/genre-icons/icon_hog.png) no-repeat;
      width: 60px;
      height:73px;
    }
  }
  .rpg{
    .iconImage{
      background: url(assets/genre-icons/icon_rpg.png) no-repeat;
      width: 47px;
      height:73px;
    }
  }
  .strategy{
    .iconImage{
      background: url(assets/genre-icons/icon_strategy.png) no-repeat;
      width: 60px;
      height:73px;
    }
  }
  .action{
    .iconImage{
      background: url(assets/genre-icons/icon_adventure.png) no-repeat;
      width: 72px;
      height:73px;
    }
  }
  .racing{
    .iconImage{
      background: url(assets/genre-icons/icon_racing.png) no-repeat;
      width: 61px;
      height:73px;
    }
  }
  .cards{
    .iconImage{
      background: url(assets/genre-icons/icon_cards.png) no-repeat;
      width: 58px;
      height:73px;
    }
  }
  .puzzle{
    .iconImage{
      background: url(assets/genre-icons/icon_puzzle.png) no-repeat;
      width: 51px;
      height:73px;
    }
  }
  .timeManagement{
    .iconImage{
      background: url(assets/genre-icons/icon_timemanagement.png) no-repeat;
      width: 61px;
      height:73px;
    }
  }
}
@media only screen and (max-width: 1319px) {
  section.genresSection{
    .iconSection{
      //flex:1;
    }
  }
}
@media only screen and (max-width: 979px) {
  section.genresSection{
    padding: 20px 50px;
  }
}
@media only screen and (max-width: 767px) {

}
@media only screen and (max-width: 699px) {}

</style>
