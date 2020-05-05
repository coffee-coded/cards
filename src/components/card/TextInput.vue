<template>

    <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <h4>Edit Text:</h4>
                <textarea class="form-control" cols="50" rows="4"
                        placeholder="Add text here!"
                        v-model="textBoxInput" @keyup="textChanged"></textarea>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data: function(){
        return{
            textBoxInput : ''
        }
    },
    methods:{
        textChanged : function(){
            this.$emit('displayTextChanged',this.textBoxInput)
        }
    }

}
</script>
<style>
  textarea::-webkit-scrollbar {
    width: 0.3rem;
  }

  textarea::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  textarea::-webkit-scrollbar-thumb {
    background: #f0ad4e;
  }
</style>
