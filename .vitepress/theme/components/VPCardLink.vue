<script setup>
const props = defineProps({
  title: { type: String, required: true },
  href: { type: String, required: true },
  text: { type: String, default: '' },
  src: { type: String, default: '' },
})

const isExternal = /^https?:\/\//.test(props.href)
</script>

<template>
  <a
    class="link-card no-icon"
    :href="props.href"
    :target="isExternal ? '_blank' : null"
    :rel="isExternal ? 'noopener noreferrer' : null"
  >
    <div class="link-card-content">
      <img class="link-card-logo" v-if="props.src" :src="props.src" :alt="props.title" />
      <div class="link-card-text">
        <div class="link-card-title">{{ title }}</div>
        <div class="link-card-desc">{{ text || href }}</div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: block;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1em;
  margin-top: 20px;
  margin-bottom: 1em;
  text-decoration: none;
  border: 2px solid transparent;
  transition: border-color 0.25s ease;
  color: inherit;
}

.link-card:hover {
  border-color: var(--vp-c-brand-1);
}

.link-card-content {
  display: flex;
  align-items: center;
  gap: 1em;
}

.link-card-logo {
  color: var(--vp-c-text-1);
  width: 3em;
  height: 3em;
  flex-shrink: 0;
  border-radius: 10px;
}

.link-card-text {
  flex: 1;
  min-width: 0;
}

.link-card-title {
  color: var(--vp-c-text-1);
  font-weight: bold;
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.link-card-desc {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 639px) {
  .link-card-title {
    font-size: 0.95em;
  }

  .link-card-desc {
    font-size: 0.85em;
    max-width: 90%;
  }

  .link-card {
    padding: 0.75em;
  }

  .link-card-logo {
    width: 2.5em;
    height: 2.5em;
  }
}
</style>
