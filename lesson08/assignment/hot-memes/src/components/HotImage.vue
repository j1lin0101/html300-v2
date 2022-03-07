<script>
import showHide from "../mixins/showHide";
// Create Image component for Hot Memes Page
export default {
  name: "hot-image",
  props: ["imageTitle", "imageSrc", "imageAlt", "imageDescription"],
  mixins: [showHide],
};
</script>

<template>
  <div class="image card shadow-sm">
    <div class="card-body">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="d-block w-50 img-fluid mx-auto"
        :class="isHidden ? 'image-border' : 'no-border'"
      />
    </div>
    <div class="card-text">
      <div>
        <h4>{{ imageTitle }}</h4>
        <p>{{ imageDescription }}</p>
        <div class="btn-group">
          <button
            @click="toggleShowHide"
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Click for a Surprise
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-border {
  border: 1px solid red;
}

.no-border {
  border: none;
}
</style>
