<template>
  <div class="keepInTouch">
    <h3>Keep in touch</h3>
    <p>Stay up to date with the latest on wild games.</p>
    <div class="inputWrap">
      <input type="text" name="email" />
      <button>Submit</button>
    </div>
  </div>
</template>
<script>

export default{
  name:'keep-in-touch'
}
</script>
<style scoped lang="scss">
$blue:#2359bc;
$darkblue:#0f2959;
$green:#66bc23;
.keepInTouch{
  background:$darkblue;
  box-sizing: border-box;
  padding: 45px 0 70px;
  h3{
    text-align: center;
    color: #2359bc;
    text-transform: uppercase;
    margin: 0;
    font-weight: bold;
    font-size: 48px;
    line-height: 40px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
  }
  p{
    text-align: center;
    color:#fff;
    margin: 20px 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    line-height: 16px;
  }
  .inputWrap{
    width: 670px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    input[name="email"]{
      width: 380px;
      font-size: 16px;
      padding: 6px;
      border: none;
      border-radius: 3px;
    }
    button{
      background: $green;
      color:#fff;
      font-size: 25px;
      font-family: 'Open Sans Condensed', sans-serif;
      font-weight: 300;
      padding: 0px 30px 3px;
      margin: 0 12px;
      border-radius: 50px;
      line-height: 1.273;
      text-align: center;
      -webkit-transition: background .2s ease-out;
      transition: background .2s ease-out;
      -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      border: none;
      &:hover, &:focus{
        background: lighten($green, 10%);
      }
    }
  }
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}
@media only screen and (max-width: 979px) {
  .keepInTouch{
    .inputWrap{
      width: 380px;
      justify-content: center;
      flex-wrap: wrap;
      button{
        margin-top: 15px;
      }
    }
  }
}

</style>
