<template>
	<div id="app">
    <TaskProgress :progress="progress"/>
		<h1>Tarefas</h1>
    <NewTask @taskAdded="addTask"/>
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @taskStateChange="changeTaskState"
    />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid';
import NewTask from './components/NewTask';
import TaskProgress from './components/TaskProgress';

export default {
  components: { TaskGrid, NewTask, TaskProgress },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true, //não só os elementos, mas tbm mudanças de estados no array
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
    },
  },
  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      } else {
        alert('Não é possível adicionar mais de uma tarefa com o mesmo nome!');
      }
    },
    deleteTask(task) {
      const i = this.tasks.indexOf(task);
      if (i >= 0) this.tasks.splice(i, 1);
    },
    changeTaskState(task) {
      const i = this.tasks.indexOf(task);
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  created() {
    const json = localStorage.getItem('tasks');
    const array = JSON.parse(json);
    if (Array.isArray(array)) {
      this.tasks = array;
    } else {
      this.tasks = [];
    }
  },
};
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
