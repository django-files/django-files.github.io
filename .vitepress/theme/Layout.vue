<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="features-after">
        <a href="https://ko-fi.com/cssnr" target="_blank" rel="noopener">
          <img alt="Ko-Fi" src="/images/ko-fi.gif" />
        </a>
      </div>
    </template>
  </Layout>
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
.features-after {
  margin-top: 64px;
  padding: 0 24px;
  text-align: center;
}
.features-after img {
  margin: auto;
  display: inline-block;
  vertical-align: middle;
  /*    transform: translateZ(0);*/
  /*    box-shadow: 0 0 1px rgba(0, 0, 0, 0);*/
  /*    backface-visibility: hidden;*/
  /*    -moz-osx-font-smoothing: grayscale;*/
  /*    transition-duration: 0.3s;*/
  /*    transition-property: transform;*/
  /*}*/
  /*.features-after img:hover {*/
  /*    transform: scale(1.02);*/
}
</style>
