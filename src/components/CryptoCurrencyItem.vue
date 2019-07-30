<template>
<span>
  <li
    @click="getCrypto(cryptocurrency)">{{cryptocurrency.id}} | {{cryptocurrency.symbol}} | {{cryptocurrency.name}} | </li>
    <h2 v-if="cryptovalue">{{cryptovalue | currency}}</h2> <h2><img :src="cryptoimg" v-if="cryptoimg" /></h2>
</span>
</template>

<script>
export default {
  name: "CryptoCurrencyItem",
  props: {
    cryptocurrency: Object
  },
  data() {
    return {
      cryptovalue: "",
      cryptoimg:""
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
          this.cryptoimg = user.image.large;
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
