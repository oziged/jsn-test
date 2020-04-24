<template>
  <div class="heroes-list">
    <div class="heroes-list__title">
      <span>superheroes</span>
    </div>
    <HeroesListHeader/>
    <div
      class="
        heroes-list__items"
        ref="heroes-list"
        :style="{minHeight: heroesListMinHeight + 'px'}"
      >
      <HeroItem
        v-for="(hero, index) in heroes"
        :key="index"
        :hero="hero"
      />
    </div>
    <HeroesListFooter/>
  </div>
</template>

<script>
import HeroesListHeader from '@/components/heroes/HeroesListHeader'
import HeroesListFooter from '@/components/heroes/HeroesListFooter'
import HeroItem from '@/components/heroes/HeroItem'

export default {
  components: {HeroItem, HeroesListHeader, HeroesListFooter},


  data() {
    return {
      heroesListMinHeight: 0,
    }
  },


  computed: {
    heroes() {
      return this.$store.getters['heroes/paginatedItems']
    }
  },


  mounted() {
    this.updateHeroesListHeight()
  },


  methods: {
    updateHeroesListHeight() {
      let height = this.$refs['heroes-list'].offsetHeight
      if (height > this.heroesListMinHeight)  this.heroesListMinHeight = height
    }
  },
}
</script>

<style lang="scss">
  .heroes-list {
    padding: 0 20px;

    &__title {
      text-align: center;
      padding: 10px 0;
      text-transform: uppercase;
      font-size: 1.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    &__items {
      margin-bottom: 20px;
    }
  }
</style>
