<template>
  <div id="curriculum">
    <h1>{{message}}</h1>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
var socket = io("http://localhost:3000");

export default {
  name: "curriculum",
  data(){
    return{ 
      message: "This is the curriculum"
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
};
</script>