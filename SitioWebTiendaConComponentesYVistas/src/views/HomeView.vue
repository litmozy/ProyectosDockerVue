<template>
  <div>
    <ImageBanner />
    <MainContent />
  </div>
</template>

<script>
import ImageBanner from '@/components/ImageBanner.vue'
import MainContent from '@/components/MainContent.vue'

export default {
  components: {
    ImageBanner,
    MainContent
  }
}
</script>
