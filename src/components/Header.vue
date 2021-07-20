<template>
  <header>
    <h1>{{ msg }}</h1>
    <CreateTask @update-task="updateEmit" />
  </header>
</template>
    

<script>
import Button from "./Button.vue";
import CreateTask from "./CreateTask.vue";
export default {
  name: "Header",
  props: {
    msg: String,
  },
  components: { Button, CreateTask },
  methods: {
    updateEmit(task) {
      this.$emit("update-task", task);
    },
  },
  emits: ["update-task"],
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