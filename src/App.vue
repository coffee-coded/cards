<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">

        <nav-header @pageWasChanged="currentPage=$event">

        </nav-header>
        <keep-alive>
          <component :is="currentPage" ></component>
        </keep-alive>
        <cc-footer>

          <p class="text-center">&copy;{{appName}}</p>
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item"><a class="nav-link">Home</a></li>
              <li class="nav-item"><a class="nav-link">About Us</a></li>
              <li class="nav-item"><a class="nav-link">Contact Us</a></li>

            </ul>
          </nav>
        </cc-footer>
      </div>
    </div>i


  </div>

</template>

<script>
  import Header from './components/header'
  import Footer from './components/Footer'
  import cardFront from './components/card/CardFront'
  import cardInsideLeft from './components/card/CardInsideLeft'
  import cardInsideRight from './components/card/CardInsideRight'
  import cardBack from './components/card/CardBack'
  import FirebaseConfig from './FirebaseConfig'

  export default {
    data: function(){
      return{
        currentPage: 'cardFront',
        appName: 'Creative Cards',
      }
    },
    components:{
      navHeader: Header,
      cardFront: cardFront,
      cardInsideLeft:cardInsideLeft,
      cardInsideRight:cardInsideRight,
      cardBack:cardBack,
      ccFooter: Footer,

    }
  }
</script>

<style>
  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #333
  }

  a{
    cursor: pointer;
    /* color:white; */
  }
</style>
