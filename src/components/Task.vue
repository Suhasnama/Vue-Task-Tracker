<template>
  <div
    @dblclick="$emit('toogle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.id }}. {{ task.text }}

      <i @click="$emit('delete-task', this.task.id)" class="fas fa-times"></i>
    </h3>
    <p>on {{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  emits: ["delete-task", "toogle-reminder"],
};
</script>


<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>