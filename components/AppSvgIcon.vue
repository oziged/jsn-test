<template>
  <svg
    v-if="type == 'arrow-down'"
    class="svg-icon__arrow-down"
    version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
    <polygon points="0,63.75 127.5,191.25 255,63.75 		"/>
  </svg>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>

<style lang="scss">
  .svg-icon__arrow-down {
    transition: .3s;
  }
</style>
