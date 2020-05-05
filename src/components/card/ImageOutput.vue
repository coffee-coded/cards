<template>
    <div class="img-container" :style="styleObject">
        <img id="outputImage">{{ displayImage }}
    </div>
</template>

<script>
import Firebase from 'firebase'

export default {
    props: {
        displayImage: {
            type: String
        },
        containerHeight: {
            type: Number,
            default: 200,
        }
    },

    watch:{
        displayImage: function(){
            var storageRef = Firebase.storage().ref('user_uploads/'+this.displayImage);
            storageRef.getDownloadURL().then(function(url){
                document.getElementById('outputImage').src = url
            })
        }
    },

    computed:{
        styleObject:function () {
        return{
            height:this.containerHeight +'px'}
        },

    }
}
</script>

<style scoped>
    .img-container {
        border: 1px dotted gray;
        overflow: hidden;
        margin: 5px 0px;
    }
    img{
        border: none;
        width: 100%;
    }
</style>