<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <HomeComponent />
  <!-- <ButtonForCount /> -->
</template>

<script>
// import ButtonForCount from './ButtonForCount.vue';
import HomeComponent from './HomeComponent.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    HomeComponent,
    // ButtonForCount,
  }
}
</script>

