<template>
  <div>
    <h1>Liste des cryptos</h1>
    <button @click="getCrypto">Get crypto</button>
    <CryptoCurrenciesList :cryptocurrencies="listCrypto"/>
  </div>
</template>

<script>
import CryptoCurrenciesList from "@/components/CryptoCurrenciesList";
export default {
  name: "Home",
  components: {
    CryptoCurrenciesList
  },
  data() {
    return {
      listCrypto: []
    };
  },
  methods: {
    getCrypto() {
      fetch("https://api.coingecko.com/api/v3/coins/list")
        .then(data => {
          if (data.status === 200) {
            return data.json();
          }
          throw "Erreur durant le fetch";
        })
        .then(user => {
          this.listCrypto = user;
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<style scoped>
</style>
