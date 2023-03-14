<template>
  <Nav :login="login" />

  <form class="max-w-md mt-8 min-[100px]:px-4 md:px-16" >
    <div class="mb-4">
      <label class="text-sm block">Date in the future</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Title</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Details</label>
      <textarea class="border w-full sm:w-96 rounded-md p-1" name="" id="" cols="30" rows="8"></textarea>
    </div>

    <div class="text-center mt-8">
      <button class="btn bg-secondary">Save</button>
    </div>
  </form>
</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {
    Nav
  },
  data() {
    return {
      login: true
    }
  }
}
</script>

<style>

</style>