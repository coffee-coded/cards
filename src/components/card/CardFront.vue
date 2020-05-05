<template>

    <div class="row">

        <div class="col-sm-6 card edit-area">
            <cc-text-input @displayTextChanged="textBoxValue1=$event"></cc-text-input>
            <cc-image-upload @displayImageChanged="imageName=$event"></cc-image-upload>
            <hr>
            <cc-text-input @displayTextChanged="textBoxValue2=$event"></cc-text-input>
            
            <cc-text-input @displayTextChanged="textBoxValue3=$event"></cc-text-input>
        </div>

        <div class="col-sm-6 card card-display">
            <cc-text-output :displayText="textBoxValue1" :containerHeight="130"></cc-text-output>
            <cc-image-output :displayImage="imageName"   :containerHeight="350"></cc-image-output>
            <cc-text-output :displayText="textBoxValue2" :containerHeight="130"></cc-text-output>
            <cc-text-output :displayText="textBoxValue3" :containerHeight="130"></cc-text-output>
        </div>
    </div>

</template>

<script>
import TextOutputVue from "./TextOutput.vue";
import TextInput from "./TextInput";
import ImageUpload from './ImageUpload';
import ImageOutput from './ImageOutput'

export default {
    data: function(){
        return{
            textBoxValue1: '',
            textBoxValue2: '',
            textBoxValue3: '',
            imageName: ''

        }
    },
    components:{
        ccTextInput: TextInput,
        ccTextOutput: TextOutputVue,
        ccImageUpload: ImageUpload,
        ccImageOutput: ImageOutput,
    }
}
</script>

<style>
    .edit-area {
        background: #d2f9f9;
        padding: 20px;
        height: 800px;
    }

    .card-display {
        padding: 20px;
        height: 800px;
    }
</style>