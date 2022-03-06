<template>
  <div class="container py-4">
    <h1>Hottest Memes of the Week</h1>

    <h3>Highlights</h3>

    <h3>Other Hot Memes</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div
        class="col"
        v-for="image in images"
        v-bind:image="image"
        v-bind:key="image.id"
      >
        <div class="card shadow-sm">
          <img v-bind:src="image.src" class="d-block w-50 img-fluid mx-auto" />

          <div class="card-body">
            <p class="card-text">
              This is a place holder meme taken from (Source)
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a v-bind:href="image.src"
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotView",
  data() {
    return {
      images: [
        {
          id: 1,
          src: "../../images/ceo.jpg",
          description: "CEO Meme",
        },
        {
          id: 2,
          src: "../../images/2010/knee.jpeg",
          description: "Arrow to the Knee",
        },
        {
          id: 3,
          src: "../../images/2010/morpheus.jpeg",
          description: "Morpheus",
        },
      ],
    };
  },
};
</script>
