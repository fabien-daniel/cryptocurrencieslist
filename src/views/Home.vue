<template>
  <div>
    <h1>Liste des cryptos</h1>
    <button @click="getCrypto">Get crypto</button>

    <CryptoCurrenciesList :cryptocurrencies="listCrypto" />
  </div>
</template>

<script>
import CryptoCurrenciesList from "@/components/CryptoCurrenciesList";
export default {
  name: "Home",
  components: {
    CryptoCurrenciesList
  },
  computed: {
    
  },
  data() {
    return {
      listCrypto: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    getCrypto() {
      fetch("https://api.coingecko.com/api/v3/coins/list")
        .then(data => {
          if (data.status === 200) {
            return data.json();
          }
          throw "Erreur durant le fetch";
        })
        .then(user => {
          this.listCrypto = user.slice(0, 5);
        })
        .catch(err => alert(err));
    }
  },
  created() {
    console.log("creation ok.................");
  },
  mounted() {
    this.getCrypto();
    console.log("chargement ok.................");
  },
  updated() {
    console.log("maj ok.................");
  },
  destroyed() {
    console.log("destruction ok.................");
  }
};
</script>

<style scoped>
</style>
