<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ fullName }}</p>
    <button @click="changeName('David')">change name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Julian',
      lastName: 'Lo Dico',
    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.lastName
    },
  },
  methods: {
    changeName(name) {
      this.name = name
    },
  },
}
</script>

<style></style>
