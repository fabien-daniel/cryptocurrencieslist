<template>
  <li>{{cryptocurrency.id}} | {{cryptocurrency.symbol}} | {{cryptocurrency.name}}</li>
</template>

<script>
export default {
  name: "CryptoCurrencyItem",
  props: {
    cryptocurrency: Object
  }
};
</script>

<style>
</style>
