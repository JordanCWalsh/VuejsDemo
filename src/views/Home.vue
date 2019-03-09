<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div id="stage" class="search-input-stack-container">
      <div class="search-card" ref="starwars" @click="setStarwarsFocus()">
        <img src="https://via.placeholder.com/150">
        <!-- <search-input genre="starwars"></search-input> -->
      </div>
      <div class="search-card" ref="pokemon" @click="setPokemonFocus()">
        <img src="https://via.placeholder.com/150">
        <!-- <search-input genre="pokemon"></search-input> -->
      </div>
      <div class="search-card" ref="stargate" @click="setStargateFocus()">
        <img src="https://via.placeholder.com/150">
        <!-- <search-input genre="stargate"></search-input> -->
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  // import SearchInput from '@/components/SearchInput.vue'

  export default {
    name: "home",
    components: {
      HelloWorld,
      // SearchInput
    },
    methods: {
      setStarwarsFocus() { this.$refs.starwars.$el.focus() },
      setPokemonFocus() { this.$refs.pokemon.$el.focus() },
      setStargateFocus() { this.$refs.stargate.$el.focus() }
    },
  }
</script>

<style lang="css" scoped>
  div#stage{
    perspective: 600px;
  }
  div.search-card {
    transition-property: transform;
    transition-duration: 0.7s;
    transform: matrix3d(0.7109, 0, -0.703279, 0,
                        0, 1, 0, 0,
                        0.703279, 0, 0.7109, 0,
                        0, 0, 0, 1);
    box-reflect:below 15px
                      gradient(
                        linear,
                        left top,
                        left bottom,
                        from(transparent),
                        color-stop(0.7, transparent),
                        to(#ff0000));
  }
  div.search-card:focus {
    transition-property: transform;
    transition-duration: 0.7s;
    transform: matrix3d(1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 200, 1);
  }
</style>
