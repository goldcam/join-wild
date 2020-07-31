<template>
  <section class="popularGames">
    <div>
      <section class="games">
        <div v-for="(game, i) in games"
        :data-game="game.orderItemId"
        :style="`background:url(https://optimizedimages.wildtangent.com/${game.orderItemId}/big_icon.png?h=145&w=145&auto=compress&cs=tinysrgb) 0% 0% / contain no-repeat;`"
        :data-id="`${game.orderItemId}`"
        :key="i" class="gameImg"></div>
      </section>
        <h3>{{ this.content.headline[lang()] }}</h3>
        <!-- <p>{{ this.content.text[lang()] }}</p> -->
        <!-- <p>
          Subscribe to wild at a low monthly price and get unlimited access to play these top games plus more! <a target="_blank" href="/Channels/unlimited-play" data-event-category="Landing Page" data-event-action="Join wild" data-event-label="Browse Unlimited Play Games" >Browse Unlimited Play games</a>. wild Members also enjoy up to 30% exclusive member discounts on game purchases and rentals!
        </p> -->
        <ul>
          <li>
            One monthly low price and get unlimited access to play over <a href="/Channels/unlimited-play" data-event-category="Landing Page" data-event-action="Join wild" data-event-label="Browse Unlimited Play Games" >2,000+ select games</a>
          </li>
          <li>
            Enjoy exclusive member discounts on select game purchases and rentals
          </li>
          <li>
            No ad interruptions on web games
          </li>
        </ul>

    </div>
  </section>
</template>
<script>
import { GraphQLClient } from 'graphql-request'

export default{
  name:'popular-games',
  props:['lang'],
  data:function(){
    return{
      games: [],
      content: {
        headline:{
          "en-us": "and even more benefits!",
          "es-mx": "",
          "de-de": "",
          "fr-fr": "",
          "it-it": "",
          "es-es": "",
          "pt-br": ""
        },
        text: {
          "en-us": "Subscribe to wild at a low monthly price and get unlimited access to play these top games plus more! Browse Unlimited Play games. wild Members also enjoy up to 30% exclusive member discounts on game purchases and rentals!",
          "es-mx": "",
          "de-de": "",
          "fr-fr": "",
          "it-it": "",
          "es-es": "",
          "pt-br": ""
        }
      }
    }
  },
  created: function() {
    let THIS = this;
    async function getGames(){
          const endpoint = 'https://api.wildtangent.com/products-graphql/v1/graphql'

          const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
              'X-scalatra-workaround': 'requires-at-least-one-header',
            },
          })

          const query = `
          query games{
            find(sortBy: "ranking", unlimitedPlay: true, pageSize: 8) {
              totalCount
              products {
                orderItemId
                title
              }
            }
          }
          `
          const data = await graphQLClient.request(query)

           THIS.games = data.find.products
          //console.log(JSON.stringify(data, undefined, 2))
          //this.games = JSON.stringify(data, undefined, 2);
        }
      getGames().catch((error) => console.error(error))
  }
}
</script>
<style scoped lang="scss">
  section.popularGames{
    background: #99afd7 url(../assets/blueangle-3.png) no-repeat;
    background-position: 100% 0;
    box-sizing: border-box;
    padding: 10px 110px;
    &> div{
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: 20px;
      column-gap: 70px;
    }
    .games{
      grid-column: 1/4;
      grid-row: 1/6;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;

      div.gameImg{
        margin: 8px;
        width: 145px;
        height: 145px;
        background-size: contain;
      }
    }
    h3{
      grid-column: 4/6;
      grid-row: 2/3;
      text-transform: none;
      color:#0d0d14;
      font-size: 28px;
      margin:0 0;
      line-height: 1.5em;
      display: inline-block;
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
    }
    ul{
      padding: 0;
      list-style-position: inside;
      list-style-type: disc;
    }
    p, ul{
      margin: 0 0;
      text-align: left;
      line-height: 1.65em;
      font-size: 1em;
      grid-column: 4/6;
      grid-row: 3/4;
      a{
        text-decoration: none;
        font-weight: 700;
        color:#265fc9;
      }
    }

  }
  @media only screen and (max-width: 1319px) {
    section.popularGames{
      padding: 10px 20px;

      &> div{
        grid-gap: 20px;
        column-gap: 20px;

        section{
          &:last-of-type{
            margin:10px 0 0;
          }
        }
      }
      .games{
        div.gameImg{
          width: 122px;
          height: 122px;
        }
      }
    }
  }
  @media only screen and (max-width: 979px) {
    section.popularGames{
      padding: 10px 45px 30px;
      row-gap:10px;
      background-position: 100% 100%;
      background-size: cover;

      .games{
        order: 2;
        grid-column: 1/6;
        grid-row: 2/3;
        div.gameImg{
          width: 150px;
          height: 150px;
        }
      }
      h3{
        order: 1;
        grid-column: 1/6;
        grid-row: 1/2;
        text-align: center;
      }

      p, ul{
        order: 3;
        text-align: center;
        grid-column: 1/6;
        grid-row: 3/4;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    section.popularGames{
      padding: 10px 55px 30px;

      .games{
        div.gameImg{
          max-width: 120px;
          max-height: 120px;
        }
      }
    }
  }
</style>
