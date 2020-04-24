<template>
  <div class="heroes-item">
    <div class="heroes-item__left">
        <client-only>
          <swiper class="heroes-item__slider" :options="swiperOptions">
            <swiper-slide
              class="heroes-item__slide"
              v-for="(src, index) in hero.images"
              :key="index"
            >
              <img
                :src="src"
                alt=""
                class="heroes-item__slider-img"
              >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>

      <div class="heroes-item__manage">
        <v-btn class="mr-4 heroes-item__manage-btn" @click="editButtonClick">Edit</v-btn>
        <v-btn class="mr-4 heroes-item__manage-btn" @click="deleteButtonClick">Delete</v-btn>
      </div>
    </div>

    <div class="heroes-item__right">
      <div class="heroes-item__info">
        <div
          class="heroes-item__row"
          v-for="(value, name, index) in heroForDisplay"
          :key="index"
        >
          <div class="heroes-item__row-left">
            {{ name }}
          </div>
          <div class="heroes-item__row-right">
            {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },


  computed: {
    hero() {
     return this.$store.state.heroes.items.find(item => item.id == this.$route.params.id) || {}
    },

    heroForDisplay() {
      let {images, ...hero} = this.hero
      return hero
    }
  },


  methods: {
    editButtonClick() {
      this.$store.dispatch('heroes/updateState', {key: 'editingItem', value: this.hero})
      this.$modal.show('edit-hero-form', '', '', {closed: () => console.log(1)})
    },

    deleteButtonClick() {
      this.deleteHero()
      this.$store.dispatch('heroes/updateState', {key: 'currentPage', value: 0})
      this.$router.push('/heroes')
    },

    deleteHero() {
      this.$store.dispatch('heroes/deleteHero', this.hero.id)
    }
  },
}
</script>

<style lang="scss">
  .heroes-item {
    padding: 30px;
    display: flex;

    &__left {
      width: 30%;
      max-width: 300px;
    }

    &__right {
      width: 65%;
      margin-left: auto;
      overflow: hidden;
    }

    &__slider{
      margin: 0 auto;
      width: 100%;
      height: 300px;
      margin-bottom: 20px;
    }

    &__slider-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &__manage {
      justify-content: space-between;
    }

    &__manage-btn {
      width: 46%;
    }

    &__row {
      display: flex;
    }

    &__row-left {
      width: 40%;
    }

    &__row-right {
      width: 60%;
    }
  }
</style>
