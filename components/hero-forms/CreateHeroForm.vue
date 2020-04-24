<template>
  <modal
    name="create-hero-form"
    height="auto"
    :adaptive="true"
  >
    <v-form
      ref="form"
      class="create-hero-form"
    >
      <v-text-field
        label="Nickname"
        v-model="heroForCreate.nickname"
        :rules="baseRules"
      />
      <v-text-field
        label="Real name"
        v-model="heroForCreate.real_name"
        :rules="baseRules"
      />
      <v-text-field
        label="description"
        v-model="heroForCreate.origin_description"
        :rules="baseRules"
      />
      <v-text-field
        label="Superpowers"
        v-model="heroForCreate.superpowers"
        :rules="baseRules"
      />
      <v-text-field
        label="Catch phrase"
        v-model="heroForCreate.catch_phrase"
        :rules="baseRules"
      />
      <v-file-input
        accept=".png,.jpeg,.jpg"
        multiple
        label="Images"
        @change="fileInputChange"
        :rules="baseRules"
      />

      <v-btn class="mr-4 create-hero-form__create-btn" @click="createButtonClick">Create Hero</v-btn>
    </v-form>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      heroForCreate: {
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: [],
      },
      formIsValid: false,
      baseRules: [
        v => !!v || 'required',
      ],
    }
  },


  methods: {
    createButtonClick() {
      if (!this.$refs.form.validate()) return
      this.createHero()
      this.$modal.hide('create-hero-form')
      Object.assign(this.$data, this.$options.data())
    },

    async createHero() {
      let id = await this.$store.dispatch(
        'heroes/createHero',
        this.heroForCreate
      )
      this.$router.push(`/heroes/${id}`)
    },

    fileInputChange(files) {
      files.forEach(file => {
        this.heroForCreate.images.push(URL.createObjectURL(file))
      })
    },
  },
}
</script>

<style lang="scss">
  .create-hero-form {
    font-family: Roboto;
    padding: 30px;

    &__create-btn {
      display: block;
      margin: 0 auto;
    }
  }

  // vuetify fix

  label.v-label {
    transform-origin: left;
    &--active {
      transform: translateY(-22px) scale(0.75) !important;
    }
  }
</style>
