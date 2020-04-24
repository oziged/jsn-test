<template>
  <div class="pagination">
    <v-btn
      :class="{
        pagination__item: true,
        pagination__item_current: currentPage == 0
      }"
      @click="$emit('change', 0)"
    >1</v-btn>

    <span class="pagination__dots">- -</span>

    <v-btn
      :disabled="number > lastPage + 1"
      :class="{
        'mr-4': true,
        pagination__item: true,
        pagination__item_current: currentPage == number - 1
      }"
      v-for="(number, index) in tempPages" :key="index"
      @click="number <= lastPage + 1 ? $emit('change', number - 1) : ''"
    >
      {{ number }}
    </v-btn>

    <span class="pagination__dots">- -</span>

    <v-btn
      :class="{
        pagination__item: true,
        pagination__item_current: currentPage == lastPage
      }"
      @click="$emit('change', lastPage)"
    >
      {{ lastPage + 1}}
    </v-btn>
  </div>
</template>

<script>
import { range } from '@/utils/array.js'

export default {
  props: {
    items: Array,
    perPage: Number,
    currentPage: Number,
  },


  computed: {
    lastPage() {
      return Math.ceil((this.items.length-1) / this.perPage) - 1
    },

    tempPages() {
      if (this.currentPage < 4) return [2,3,4,5,6]
      if (this.currentPage > this.lastPage - 3) return range(this.lastPage-4, this.lastPage)
      else return range(this.currentPage - 1, this.currentPage + 3)
    }
  }
}
</script>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;

    &__item {
      margin-right: 10px;

      &_current {
        background-color: #ff3c3c59 !important; // important is needed because of vuetify's nuxt bugs or maybe i'm a little bit stuppied ^_^
      }
    }

    &__dots {
      margin-right: 10px;
    }
  }

</style>
