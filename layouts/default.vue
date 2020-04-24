<template>
  <div>
    <nuxt class="app-container"/>
    <CreateHeroForm ref="create-form"/>
    <EditHeroForm ref="edit-form"/>
  </div>
</template>


<script>
import CreateHeroForm from '@/components/hero-forms/CreateHeroForm'
import EditHeroForm from '@/components/hero-forms/EditHeroForm'

export default {
  components: {CreateHeroForm, EditHeroForm},
}
</script>


<style lang="scss">
@import '@/assets/scss/main.scss';

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.app-container {
  width: 70vw;
  max-width: 1200px;
  max-height: 1000px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 7px #00000030;
  border-radius: 20px;
  font-family: 'Manrope', sans-serif;font-family: 'Manrope', sans-serif;
}
</style>



