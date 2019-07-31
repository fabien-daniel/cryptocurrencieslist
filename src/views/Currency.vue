<template>
  <h1>Détail de {{cryptocurrency.name}}</h1>
</template>

<script>
export default {
  data() {
    return {
      cryptocurrency: {}
    };
  },
  methods: {
    getCrypto() {
      fetch("https://api.coingecko.com/api/v3/coins/" + this.$route.params.id)
        .then(data => {
          if (data.status === 200) {
            return data.json();
          }
          throw "Erreur durant le fetch";
        })
        .then(user => {
          this.cryptocurrency = user;
        })
        .catch(err => alert(err));
    }
  },
  mounted() {
    this.getCrypto();
  }
};
</script>

<style>
</style>
