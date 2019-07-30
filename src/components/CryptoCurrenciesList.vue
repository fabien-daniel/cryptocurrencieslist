<template>
  <div>
    <ul v-for="cryptocurrency of cryptocurrencies" :key="cryptocurrency.id">
      <CryptoCurrencyItem :cryptocurrency="cryptocurrency"/>
    </ul>
  </div>
</template>

<script>
import CryptoCurrencyItem from "@/components/CryptoCurrencyItem";
export default {
  name: "CryptoCurrenciesList",
  components: {
    CryptoCurrencyItem
  },
  props: {
      cryptocurrencies: Array
  }
};
</script>

<style>
</style>
