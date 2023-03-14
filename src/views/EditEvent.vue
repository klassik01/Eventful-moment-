<template>
  <Nav :login="login" />

  <form class="max-w-md mt-8 min-[100px]:px-4 md:px-16" >
    <div class="mb-4">
      <label class="text-sm block">Date in the future</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="date">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Title</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="title">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Details</label>
      <textarea class="border w-full sm:w-96 rounded-md p-1" name="" id="" cols="30" rows="8" v-model="detail"></textarea>
    </div>

    <div class="text-center mt-8">
      <button class="btn bg-secondary">Update</button>
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
      login: true,
      date: '20/07/2050',
      title: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century.',
      detail: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.'
    }
  }
}
</script>

<style>

</style>