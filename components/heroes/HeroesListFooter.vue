<template>
  <div class="heroes-list-footer">
    <AppPagination
      class="heroes-list-footer__pag"
      :items="$store.state.heroes.items"
      :perPage="5"
      :currentPage="$store.state.heroes.currentPage"
      @change="paginationChange"
    />
    <v-btn class="mr-4 heroes-list-footer__create-hero" @click="createButtonClick">Create Hero</v-btn>
  </div>
</template>

<script>
import AppPagination from '@/components/AppPagination'

export default {
  components: {AppPagination},

  methods: {
    createButtonClick() {
      this.$modal.show('create-hero-form')
    },

    paginationChange(page) {
      this.$store.dispatch('heroes/updateState', {key: 'currentPage', value: page})
    }
  },
}
</script>

<style lang="scss">
  .heroes-list-footer {
    &__pag {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    &__create-hero {
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }
</style>
