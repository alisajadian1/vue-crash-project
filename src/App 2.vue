<script>
  export default {
    data() {
      return {
        name: 'john due',
        status: 'pending',
        tasks: ['Task one', 'Task two', 'Task three'],
        link: 'https://google.com'
      }
    },
    methods: {
      toggleStatus() {
        if(this.status === 'active') {
          this.status ='pending'
        } else if(this.status === 'pending') {
          this.status = 'inactive'
        } else {
          this.status = 'active'
        }
      }
    }
  }
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">user is pending</p>
  <p v-else>user is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">hi</a> -->
  <a :href="link">click for google</a>
  <br />
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>


<style scoped>

</style>

