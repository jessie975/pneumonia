<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
