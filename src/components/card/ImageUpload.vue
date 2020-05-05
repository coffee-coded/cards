<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Upload Image:</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">

      </div>

      <div class="progress" style="height: 10px;width: 250px">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
             id="progressBar" aria-valuenow="15" aria-valuemin="10" aria-valuemax="100"></div>
      </div>

      <br>
      <img id="image" src="">
      <button type="button" id="setImageButton" hidden @click="setImage">Set Image</button>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  export default {
    data: function () {
      return{
        file:'',
      }
    },
    methods:{
      uploadFile: function (event) {

        document.getElementById('setImageButton').hidden = true;

        this.file =event.target.files[0];
        const upload = Firebase.storage().ref('user_uploads/'+this.file.name).put(this.file);
        const reader = new FileReader();

        // create thumbnail
        reader.readAsDataURL(this.file);
        reader.onload=function (e) {
          document.getElementById('image').src= e.target.result
        };
        // progress bar
          upload.on('state_changed',function (snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById('progressBar').style.width =  progress + '%';

          // unhide the set image button
          if(progress ===  100){
            document.getElementById('setImageButton').hidden = false;
          }

        })


      },

      setImage: function() {
        this.$emit('displayImageChanged',this.file.name)
      }
    },
  }
</script>


<style scoped>
  img{
    max-width: 200px;
  }
</style>
