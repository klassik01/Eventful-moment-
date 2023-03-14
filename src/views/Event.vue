<template>
  <Nav :login="login" />

  <div class="min-[100px]:px-4 md:px-16">
    <h1 class="font-bold mb-1 font-normal mt-10 text-2xl mb-1">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century.</h1>
    <small class="text-gray-500">10/03/2023</small>
    <p class="my-12 text-sm leading-5">
      Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.<br/><br/>
      Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.<br/><br/>
      Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
    </p>
    <div class="text-center my-16 mb-24 flex">
      <button class="btn bg-info mr-4">
        <router-link :to="{ name: 'EditEvent' }">Edit</router-link>
      </button>
      <button class="btn bg-danger">Delete</button>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav"

export default {
  components: { Nav },
  props: ['id'],
  data(){
    return {
      login: true
    }
  }
}
</script>