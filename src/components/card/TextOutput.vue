<template>
    <div @mouseover="showOptions=true"
          @mouseleave="showOptions=false">
        <form class="small" v-show="showOptions">

          <label for="selectBox">Font Size:</label>
          <select class="custom-select" id="selectBox" v-model="setFontSize">
            <option value="42">42 px</option>
            <option value="48">48 px</option>
            <option value="56">56 px</option>
            <option value="64">64 px</option>
          </select>
          <div class="form-check form-check-inline">
              <label class="form-check-label">
              <input type="radio" class="form-check-input" value="left" v-model="setTextAlign"> Left
              </label>
          </div>
          <div class="form-check form-check-inline">
              <label class="form-check-label">
              <input type="radio" class="form-check-input" value="center" v-model="setTextAlign"> Center
              </label>
          </div>
          <div class="form-check form-check-inline">
              <label class="form-check-label">
              <input type="radio" class="form-check-input" value="right" v-model="setTextAlign"> Right
              </label>
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" v-model="setBold">
              Bold
            </label>
          </div>

          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" v-model="setItalic">
              Italic
            </label>
          </div>


        </form>

        <p :style="styleObject" :class="{bold: setBold, italic: setItalic}">
          {{ displayText }}
        </p>

    </div>
</template>


<script>
export default {
    props: {
      displayText:[String],
      containerHeight:{
        type: Number,
        default:200
      }
    },
    data: function(){
      return{
        showOptions:false,
        setFontSize: '42',
        setTextAlign: 'left',
        setBold: false,
        setItalic: false,
      }
    },
    computed:{
          styleObject:function () {
            return{
              fontSize: this.setFontSize + 'px',
              height:this.containerHeight +'px',
              textAlign: this.setTextAlign,

            }
          }
    }
}
</script>

<style scoped>
  p{
    font-family: 'Tangerine', cursive;
    font-size: 42px;
    line-height: 42px;
    text-shadow: 2px 2px 2px #bbb;
    color: #4d4d4d;
    margin: 5px 0;
    border: 1px  dotted grey;
    white-space: pre-line;
    overflow: hidden;
  }

  .bold{
    font-weight: bold;
  }
  .italic{
    font-style: italic;
  }


  form{
    position: absolute;
    border-bottom: 1px dotted gray;
    margin-top: 10px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    margin-left: 5%;
  }

  select{
    height: 40%;
  }
</style>
