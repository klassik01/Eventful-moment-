<template>
  <div class="font-body text-base flex flex-col relative min-h-screen">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer"


export default {
  name: "App",
  components: { Footer, },
}
</script>
