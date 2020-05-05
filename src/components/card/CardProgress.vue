<template>
  <div class="row">
    <div class="col-sm-12">
      <p>Completed: <span id="counter">0</span>/4:</p>
      <div class="progress" style="height: 10px;">
        <div id='bar' class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
             aria-valuenow="25" aria-valuemin="10" aria-valuemax="100"></div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
  import {EventBus} from "../../main";

  export default {
    created: function () {
      EventBus.$on('mark-as-completed',function (data) {
        if(data){
          console.log('counter received');
          document.getElementById('counter').innerText++;
          document.getElementById('bar').style.width
            = document.getElementById('counter').innerText*25+'%';
        }
        else{
          document.getElementById('counter').innerText--;
        }
      })
    }
  }
</script>

<style>

</style>
