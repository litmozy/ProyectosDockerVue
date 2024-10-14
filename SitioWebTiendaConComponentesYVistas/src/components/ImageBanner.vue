<template>
  <div class="banner">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :class="{ active: index === currentImageIndex }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://picsum.photos/1200/400?random=1',
        'https://picsum.photos/1200/400?random=2',
        'https://picsum.photos/1200/400?random=3'
      ],
      currentImageIndex: 0
    }
  },
  mounted() {
    setInterval(this.nextImage, 5000)
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }
  }
}
</script>

<style scoped>
.banner {
  height: 400px;
  position: relative;
  overflow: hidden;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.banner img.active {
  opacity: 1;
}
</style>
