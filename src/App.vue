<template>
  <Navbar/>
  <router-view/>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800&family=Dancing+Script:wght@400;700&family=Electrolize&family=Open+Sans:wght@300;400;500;600;700&family=Yusei+Magic&display=swap');

body{
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  font-family: 'Yusei Magic', sans-serif;
  background-color: #F9FBE7;
}
p,h1,h2,h3,a,ul{
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #643843;
}
h2{
  margin-bottom: 40px;
}
h3{
  text-transform: capitalize;
  margin-bottom: 8px;
}
</style>
