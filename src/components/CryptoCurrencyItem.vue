<template>
  <span>
    <li @click="getCrypto(cryptocurrency)">{{cryptocurrency.name}} ({{cryptocurrency.symbol}})</li>
    <h2 v-if="cryptovalue">{{cryptovalue | currency}}</h2>
    <h2>
      <router-link :to="getCurrencyUrl(cryptocurrency)"><img :src="cryptoimg" v-if="cryptoimg" /></router-link>
    </h2>
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
      cryptoimg: ""
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
    },
    getCurrencyUrl(crypto){
      return "/currency/"+crypto.id;
    }
  },
  filters: {
    currency: value => {
      return `${value} €`;
    }
  },
  mounted() {
    this.getCrypto(this.cryptocurrency);
  }
};
</script>

<style>
</style>
