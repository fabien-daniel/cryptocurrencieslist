<template>
  <li
    @click="getCrypto(cryptocurrency)"
  >{{cryptocurrency.id}} | {{cryptocurrency.symbol}} | {{cryptocurrency.name}} | {{cryptovalue | currency}}</li>
</template>

<script>
export default {
  name: "CryptoCurrencyItem",
  props: {
    cryptocurrency: Object
  },
  data() {
    return {
      cryptovalue: 0
    };
  },
  methods: {
    getCrypto(cryptoname) {
      fetch("https://api.coingecko.com/api/v3/coins/" + cryptoname.id)
        .then(data => {
          if (data.status === 200) {
            return data.json();
          }
          throw "Erreur durant le fetch";
        })
        .then(user => {
          this.cryptovalue = user.market_data.current_price.eur;
        })
        .catch(err => alert(err));
    }
  },
  filters: {
    currency: (value) => {
      return `${value} €`
    }, 
  }
};
</script>

<style>
</style>
