<template>
  <div class="create-task">
    Task Title :
    <input
      v-model="taskTitle"
      type="text"
      name="task-text"
      id="task-text"
      placeholder="Task Title"
    />
    <br />

    Task Time :
    <input
      v-model="taskTime"
      type="text"
      name="task-date"
      id="task-date"
      placeholder="Task Time"
    />
    <br />

    Reminder :
    <input
      v-model="taskReminder"
      type="checkbox"
      name="reminder"
      id="reminder"
    />
    <br />

    <Button @add-task="updateTask" color="black" text="Add task"></Button>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "CreateTask",
  data() {
    return {
      taskTitle: String,
      taskTime: String,
      taskReminder: Boolean,
      task: Object,
    };
  },
  methods: {
    updateTask() {
      console.log(this.taskTitle);
      this.$emit("update-task", {
        taskTitle: this.taskTitle,
        taskTime: this.taskTime,
        taskReminder: this.taskReminder,
      });
    },
  },
  components: {
    Button,
  },
  emits: ["update-task"],
  created() {
    this.taskTitle = "";
    this.taskTime = "";
  },
};
</script>

<style scope>
.create-task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>