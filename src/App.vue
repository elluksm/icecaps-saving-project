<template>
  <div id="app">
    <SignUpForm/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUpForm from "./components/SignUpForm/SignUpForm.vue";

@Component({
  components: {
    SignUpForm,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
