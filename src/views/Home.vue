<template>
  <Nav :login="login" />

  <div class="min-[100px]:px-4 md:px-16">
    <div class="md:flex justify-between items-center my-12">
      <div class="mb-4">
        <h1 class="text-black text-2xl mb-1 font-semibold">Welcome John Doe,</h1>
        <p>Here are items in your eventful moment bucket.</p>
      </div>
      <router-link :to="{ name: 'CreateEvent' }">
        <button class="btn bg-secondary">Add Item</button>
      </router-link>
    </div>

    <!-- cards -->
    <div class="my-8 grid lg:grid-cols-2 gap-10">
      <!-- card -->
      <div v-for="para in paras" :key="para.id" class="shadow p-5 rounded hover:bg-active">
          <h4 class="font-bold text-base mb-1 leading-5">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</h4>
          <p class="mb-1 text-sm">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
          <div class="mt-4 flex items-center justify-between">
            <router-link class="grow" :to="{ name: 'Event', params: { id: para.id} }">
              <small class="text-secondary">View Details</small>
            </router-link>
            <small class="text-gray-300 px-5">10/03/2023</small>
            <small>10/03/2023</small>
          </div>
      </div>
    </div>

    <div class="text-center my-24">
      <button class="btn bg-secondary">Load More</button>
    </div>
  </div>
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
      paras: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ]
    }
  }
}
</script>