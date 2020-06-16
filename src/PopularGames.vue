<template>
  <section class="popularGames">
    <div>
      <section class="games">
        <div v-for="(game, i) in games"
        :data-game="game.productkey"
        :style="`background:url(https://optimizedimages.wildtangent.com/${game.productkey}/big_icon.png?h=145&w=145&auto=compress&cs=tinysrgb) 0% 0% / contain no-repeat;`"
        :data-id="`${game.id}`"
        :key="game.id" class="gameImg"></div>
      </section>
      <section class="text">
        <h3>{{ this.content.headline[lang()] }}</h3>
        <p>{{ this.content.text[lang()] }}</p>
      </section>
    </div>
  </section>
</template>
<script>
export default{
  name:'popular-games',
  props:['lang'],
  data:function(){
    return{
      games: [],
      content: {
        headline:{
          "en-us": "popular games",
          "es-mx": "comprar juegos",
          "de-de": "Beliebte Spiele",
          "fr-fr": "jeux populaires",
          "it-it": "acquista giochi",
          "es-es": "comprar juegos",
          "pt-br": "jogos populares"
        },
        text: {
          "en-us": "With a continuously growing library (over 4,000 games!), you can be sure to find some of your beloved titles or discover a new favorite!",
          "es-mx": "Con una biblioteca en continuo crecimiento (¡más de 4,000 juegos!), Puedes estar seguro de encontrar algunos de tus títulos más queridos o descubrir un nuevo favorito.",
          "de-de": "Unser Portfolio wird immer größer (über 4.000 Spiele)! Bei uns findest du also bestimmt einige deiner Lieblingstitel oder entdeckst den ein oder anderen neuen Favoriten!",
          "fr-fr": "Avec une bibliothèque en croissance constante (plus de 4 000 jeux!), Vous pouvez être sûr de trouver certains de vos titres préférés ou de découvrir un nouveau favori!",
          "it-it": "Con una libreria in continua crescita (oltre 4.000 giochi!), Puoi essere sicuro di trovare alcuni dei tuoi titoli preferiti o scoprire un nuovo preferito!",
          "es-es": "Con una biblioteca en continuo crecimiento (¡más de 4,000 juegos!), Puedes estar seguro de encontrar algunos de tus títulos más queridos o descubrir un nuevo favorito.",
          "pt-br": "Com uma biblioteca em constante crescimento (mais de 4.000 jogos!), Você pode ter certeza de encontrar alguns dos seus amados títulos ou descobrir um novo favorito!"
        }
      }
    }
  },
  mounted: function() {
    var gamesArr = ['racing-games', 'adventure-games', 'steam-games', 'time-management-games', 'hidden-object-games', 'action-games'];
    var THIS = this;

    for(let i = 0; i < gamesArr.length; i++){
      //https://products.wildtangent.com/tags/v1.0/wildgames/us/en-us/steam-games?sort=mostpopular&sortorder=asc&output=json&pagesize=20
      this.axios.get(`https://products.wildtangent.com/tags/v1.0/wildgames/us/en-us/${gamesArr[i]}?sort=mostpopular&sortorder=asc&output=json&pagesize=20&scope=all`)
      .then(function(response){
        //check if item has wild benifits
        let prods = response.data.results[0].products.results;
        //console.log(prods.length);
        for(let x = 0; x < prods.length; x++){
          let item = prods[x];
          var rentWild = item.prices.some(function(el){
            return el.ordercode === "rentwild";
          }),
          wmp = item.prices.some(function(el){
            return el.ordercode === "wmp";
          }),
          unlimitedPlay = item.tags.some(function(el){
            return el.key === "unlimitedplay";
          });

          if(rentWild || unlimitedPlay || wmp){
            if(!THIS.games.filter(game => game.productkey === prods[x].productkey).length > 0){
              THIS.games.push({
                'productkey':prods[x].productkey,
                'gameChannel': gamesArr[i],
                'i': i
              });
              THIS.games.sort(function(a,b){
                if (a.i < b.i)
                  return -1;
                if (a.i > b.i)
                  return 1;
                return 0;
              });
              break;
            }
          }
        }
      });
    }
  }
}
</script>
<style scoped lang="scss">
  section.popularGames{
    background: #f1f1f1 url(assets/grayangle.png) no-repeat;
    background-position: 100% 0;
    box-sizing: border-box;
    padding: 10px 110px;
    &> div{
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      section{
        &:first-of-type{
        }
        &:last-of-type{
          //margin:60px 0 0;
        }
      }
    }
    .games{
      display: flex;
      flex-wrap: wrap;
      max-width: 500px;
      div.gameImg{
        margin: 8px;
        width: 145px;
        height: 145px;




        background-size: contain;
      }
    }
    .text{
      max-width: 370px;
      p{
        margin: 0 0 10px 0;
        text-align: left;
        line-height: 1.35em;
        font-size: 1em;
      }
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
  }
  @media only screen and (max-width: 1319px) {
    section.popularGames{
      &> div{
        section{
          &:last-of-type{
            margin:10px 0 0;
          }
        }
      }
      .games{
        max-width: 400px;
        div.gameImg{
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  @media only screen and (max-width: 979px) {
    section.popularGames{
      padding: 10px 50px;

      .games{
        max-width: 380px;
        div.gameImg{
          width: 80px;
          height: 80px;
        }
      }
    }
  }
</style>
