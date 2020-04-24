<template>
  <div class="heroes-list-header">
    <div class="heroes-list-header__image">
      <span>image</span>
    </div>
    <div class="heroes-list-header__nickname">
      <span>nickname</span>
    </div>
    <div class="heroes-list-header__dynamic">
      <AppDropdown
        :options="dropdownOptions"
        class="heroes-list-header__dropdown"
        @change="dropdownChange"
      />
    </div>
  </div>
</template>

<script>
import AppDropdown from '@/components/AppDropdown'

export default {
  components: {
    AppDropdown
  },

  data() {
    return {
      dropdownOptions: {
        default: 'real name',
        items: [
          ['catch_phrase', 'catch phrase'],
          ['real_name', 'real name'],
          ['origin_description', 'description']
        ]
      }
    }
  },


  methods: {
    dropdownChange(value) {
      this.$store.dispatch('heroes/updateState', {key: 'dynamicField', value})
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/variables.scss';

  .heroes-list-header {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin-bottom: 10px;

    &__image {
      width: $first-column-width;
    }

    &__nickname {
      width: $second-column-width;
    }

    &__dynamic {
      width: $third-column-width;
    }

    &__dropdown {
      .dropdown__items {
        margin-top: 12px;
        border-top: none;
      }
    }
  }
</style>
