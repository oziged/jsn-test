<template>
<div class="hero-item" @click="$router.push(`/heroes/${hero.id}`)">
    <div class="hero-item__avatar">
      <img :src="hero.images[0]" alt="">
    </div>

    <div class="hero-item__nickname">
      {{ hero.nickname }}
    </div>

    <div class="hero-item__dynamic">
      {{ hero[$store.state.heroes.dynamicField] }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: Object,
    dynamic: String
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/variables.scss';

  .hero-item {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: 10px;
    cursor: pointer;
    transition: .1s;

    &:hover {
      box-shadow: 0 0 5px #00000017;
    }

    &__avatar {
      width: $first-column-width;

      img {
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &__nickname {
      width: $second-column-width;
    }

    &__dynamic {
      width: $third-column-width;
    }
  }
</style>
