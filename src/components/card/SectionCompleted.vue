<template>
  <div class="row">
    <div class="form-check form-check-inline">
      <div class="start form-check-label"  style="margin-left: 70%;width: 100%">
        <input id="sectionComplete" type="checkbox"
               class="form-check-input" v-model="checked" @click="sectionCompleted">
        <label for="sectionComplete">Mark section as completed</label>
      </div>
    </div>
  </div>
</template>

<script>
  import {EventBus} from '../../main'

  export default {
    data: function () {
      return{
        checked: '',
      }
    },

    methods:{
      sectionCompleted: function () {
        this.checked = document.getElementById('sectionComplete').checked;
        EventBus.$emit('mark-as-completed',this.checked );
      }
    }
  }
</script>
