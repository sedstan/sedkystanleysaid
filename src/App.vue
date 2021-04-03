<template>
  <nav id="nav-bottom">
    <router-link to="/">Home |</router-link>
    <router-link to="/#projects"> Projects</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-bottom {
  padding: 30px;
}

#nav-bottom a {
  font-weight: bold;
  color: #2c3e50;
}

#nav-bottom a.router-link-exact-active {
  color: #42b983;
}
</style>
