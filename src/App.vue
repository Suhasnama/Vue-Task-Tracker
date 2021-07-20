<template>
  <div class="container">
    <Header @update-task="addTask" msg="Task Tracker"> </Header>
    Task Count : {{ tasks.length }}
    <Tasks
      @toogle-reminder="toogleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    ></Tasks>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(taskId) {
      console.log("App ", taskId);
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskId;
      });
    },
    toogleReminder(taskId) {
      this.tasks = this.tasks.map((task) => {
        if (task.id == taskId) {
          task = { ...task, reminder: !task.reminder };
        }
        return task;
      });
    },
    addTask(task) {
      this.tasks.push({
        id: this.tasks.length + 1,
        text: task.taskTitle,
        day: task.taskTime,
        reminder: task.taskReminder,
      });
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Prep",
        day: "August 1st",
        reminder: true,
      },
      {
        id: 2,
        text: "Pratice",
        day: "August 2st",
        reminder: true,
      },
      {
        id: 3,
        text: "Interview",
        day: "August 4st",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 600px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
