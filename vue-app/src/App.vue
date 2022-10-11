<template>
  <section>
    <div id="nav">
      <router-link to="/">Contact</router-link> 
      <router-link to="/listrender">Goals</router-link> 
      <router-link to="/learning">Learning</router-link>
      <router-link to="/handlingform">Form</router-link>
      <router-link to="/httprequest">Requests</router-link>
    </div>
    <router-view />
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #0ec472;
}

#nav a {
  font-weight: bold;
  color: #0a0a0a;
  text-decoration: none;
  font-size: 1.5rem;
}

#nav a.router-link-exact-active {
  color: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(45, 40, 40, 0.4);
  transition: all 0.3s;
}
</style>
