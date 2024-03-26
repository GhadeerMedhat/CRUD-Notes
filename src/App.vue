<template>
  <div id="app">
    <nav>
  
</nav>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

nav {
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #007bff;
}

</style>
