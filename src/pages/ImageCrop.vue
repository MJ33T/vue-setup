<template>
  <div class="flex items-center justify-center mt-10 gap-9">
    <input type="file" @change="imageUpload($event)" />
    <cropper
      ref="cropper"
      :src="img"
      :stencil-props="stencilProps"
      :auto-zoom="true"
      :auto-orientation="true"
      @change="change"
      class="cropper"
    />
    <button class="btn px-8" @click="cropImage">Crop</button>
    <img
      :src="croppedImgUrl"
      alt="Cropped Image"
      v-if="croppedImgUrl"
      class="cropped-image"
    />
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

export default {
  components: {
    Cropper,
  },
  data() {
    return {
      img: null,
      croppedImgUrl: null,
      croppedFile: null,
      stencilProps: {
        aspectRatio: 1,
      },
    };
  },
  methods: {
    change({ coordinates, canvas }) {
      // Optionally handle the cropper's change event
    },
    imageUpload(event) {
      const file = event.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      this.img = fileUrl;
    },
    cropImage() {
      const cropper = this.$refs.cropper;
      if (cropper) {
        // Get the cropped canvas from the cropper
        const croppedCanvas = cropper.getResult().canvas;
        if (croppedCanvas) {
          // Convert the canvas to a Blob and then to a File
          croppedCanvas.toBlob((blob) => {
            const fileName = "cropped-image.png";
            this.croppedFile = new File([blob], fileName, {
              type: "image/png",
            });
            console.log(this.croppedFile);

            // Create a URL for the cropped file to display it
            this.croppedImgUrl = URL.createObjectURL(this.croppedFile);
          }, "image/png");
        }
      }
    },
  },
};
</script>

<style>
.cropper {
  width: 30%;
  height: 500px; /* Set a specific height */
}
.cropped-image {
  margin-top: 20px;
  max-width: 40%;
  height: auto;
}
</style>
