<script setup>
import contributors from '../../contributors.json'
// console.debug('%c Contributors', 'color: Cyan', 'contributors:', contributors)
const imageStyle = {}
const props = defineProps({
  size: { type: String, default: null },
})
if (props.size) {
  imageStyle.height = props.size
  imageStyle.width = props.size
}
</script>

<template>
  <div class="contributors">
    <a
      v-for="{ login, avatar_url } of contributors"
      :key="login"
      :aria-label="`${login} on GitHub`"
      :href="`https://github.com/${login}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :alt="login" :src="avatar_url" :style="imageStyle" loading="lazy" />
    </a>
  </div>
</template>

<style scoped>
div.contributors {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
}

.contributors img {
  margin: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  /* styles for img:hover transform */
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.contributors img:hover {
  transform: scale(1.08);
}
</style>
