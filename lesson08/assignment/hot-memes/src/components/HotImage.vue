<script>
// Create Image component for Hot Memes Page
export default {
  name: "hot-image",
  props: ["imageTitle", "imageSrc", "imageAlt", "imageDescription"],
};
</script>

<template>
  <div class="image card shadow-sm">
    <div class="card-body">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="d-block w-50 img-fluid mx-auto"
      />
    </div>
    <div class="card-text">
      <div>
        <h4>{{ imageTitle }}</h4>
        <p>{{ imageDescription }}</p>
        <div class="btn-group">
          <a :href="imageSrc"
            ><button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
