<template>
  <header>
    <h1>{{ msg }}</h1>
    <Button color="black" text="Add task"></Button>
  </header>
</template>
    

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  props: {
    msg: String,
  },
  components: { Button },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>