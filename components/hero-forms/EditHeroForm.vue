<template>
  <modal
    name="edit-hero-form"
    height="auto"
    :adaptive="true"
    @before-open="fillData"
  >
    <v-form
      ref="form"
      class="edit-hero-form"
    >
      <v-text-field
        label="Nickname"
        v-model="heroForUpdate.nickname"
      />
      <v-text-field
        label="Real name"
        v-model="heroForUpdate.real_name"
      />
      <v-text-field
        label="description"
        v-model="heroForUpdate.origin_description"
      />
      <v-text-field
        label="Superpowers"
        v-model="heroForUpdate.superpowers"
      />
      <v-text-field
        label="Catch phrase"
        v-model="heroForUpdate.catch_phrase"
      />
      <v-file-input
        accept=".png,.jpeg,.jpg"
        multiple
        label="Images"
        @change="fileInputChange"
      />

      <client-only>
        <swiper class="edit-hero-form__slider" v-if="hero">
          <swiper-slide
            class="edit-hero-form__slide"
            v-for="(src, index) in heroForUpdate.images"
            :key="index"
          >
            <img
              :src="src"
              alt=""
              class="edit-hero-form__slider-img"
            >
            <span
              class="edit-hero-form__slide-del"
              @click="deleteImage(index)"
            >
              delete
            </span>
          </swiper-slide>
        </swiper>
      </client-only>

      <v-btn class="mr-4 edit-hero-form__upd-btn" @click="updateButtonClick">Update Hero</v-btn>
    </v-form>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      heroForUpdate: {
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',

        images: []
      }

    }
  },


  computed: {
    hero() {
      let hero = this.$store.state.heroes.editingItem
      return hero
    }
  },


  watch: {
    '$store.state.heroes.editingItem': function() {
      this.fillData()
    }
  },


  methods: {
    fillData() {
      Object.assign(this.$data.heroForUpdate, this.hero)
      this.heroForUpdate.images = [...this.hero.images]
    },

    updateHero() {
      this.$store.dispatch('heroes/updateHero', {heroId: this.hero.id, newHero: this.heroForUpdate})
      this.$modal.hide('edit-hero-form')
    },

    updateButtonClick() {
      this.updateHero()
    },

    fileInputChange(files) {
      files.forEach(file => {
        this.addImage(file)
      })
    },

    addImage(file) {
      this.heroForUpdate.images.push(URL.createObjectURL(file))
    },

    deleteImage(index) {
      this.heroForUpdate.images.splice(index, 1)
    },
  },
}
</script>

<style lang="scss">
  .edit-hero-form {
    font-family: Roboto;
    padding: 30px;

    &__slider {
      width: 200px;
      height: 200px;
      margin-bottom: 30px;
    }

    &__slider-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__slide-del {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      text-transform: uppercase;
      background: #ffffff94;
      cursor: pointer;
      padding: 5px;
      box-shadow: 0 0 4px #0000006e;
    }

    &__upd-btn {
      margin: 0 auto;
      display: block;
    }
  }
</style>
