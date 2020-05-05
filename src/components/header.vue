<template>
  <div>
    <h1 class="text-center"> Creative Cards </h1>
    <ul class="nav justify-content-center">

      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardFront'">Front</a></li>
      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardInsideLeft'">Inside Left</a></li>
      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardInsideRight'">Inside Right</a></li>
      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardBack'">Back</a></li>
    </ul>
  </div>


</template>

<script>
  export default {
    data: function() {
      return{
        pageSelected: 'cardFront',
        pages:{
          cardFront:"Front",
          cardInsideLeft:"Inside Left",
          cardInsideRight:"Inside Right",
          cardBack:"Back",
        }
      }
    },
    watch: {
      pageSelected: function(){
        this.$emit('pageWasChanged', this.pageSelected)
      }
    }

  }
</script>

<style scoped>
  h1{
    margin-top: 10px;
  }



  .nav-link{
    background-color: #f0ad4e;
    margin: 2px 28px;
    border-radius:10px;
    font-weight: bold;
    color: white;


  }

  .nav-link:hover{
    background: #e68a00;
  }

</style>
