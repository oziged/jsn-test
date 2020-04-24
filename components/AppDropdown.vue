<template>
  <div class="dropdown">
    <div
      class="dropdown__title"
      @click="titleClick"
    >
      <span>{{ options.default }}</span>
      <AppSvgIcon
        type="arrow-down"
        :style="{transform: !isOpened ? 'rotate(90deg)' : ''}"
        class="dropdown__title-arrow"
      />
    </div>

    <div
      :class="{dropdown__items: true, dropdown__items_visible: isOpened}"
    >
      <div
        class="dropdown__item"
        v-for="(item, index) in options.items"
        :key="index"
        @click="dropdownItemClick(item[0])"
      >
        {{ item[1] }}
      </div>
    </div>
  </div>
</template>

<script>
import AppSvgIcon from '@/components/AppSvgIcon'

export default {
  components: {AppSvgIcon},

  props: {
    options: Object
  },


  data() {
    return {
      isOpened: false
    }
  },


  methods: {
    titleClick() {
      this.toggleDropdown()
    },

    dropdownItemClick(value) {
      this.$emit('change', value)
      this.closeDropDown()
    },

    openDropdown() {
      this.isOpened = true
    },

    closeDropDown() {
      this.isOpened = false
    },

    toggleDropdown() {
      this.isOpened = !this.isOpened
    }
  },
}
</script>

<style lang="scss">
  .dropdown {
    position: relative;
    cursor: pointer;

    &__items {
      position: absolute;
      left: 0;
      transform: translateY(-50%) scale(0);
      transition: .3s;
      background-color: white;
      border: 1px solid #0000000f;

      &_visible {
        transform: translate(0,0) scale(1);
      }
    }

    &__item {
      padding: 10px;

      &:hover {
        background-color: rgb(240, 240, 240);
      }
    }

    &__title {
      span {
        margin-right: 7px;
      }

      display: flex;
      align-items: center;
    }

    &__title-arrow {
      width: 10px;
      height: 10px;
    }
  }
</style>
