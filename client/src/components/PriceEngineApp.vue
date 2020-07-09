<template>
  <div>
    <h1>99X Price Engine Application</h1>
    <ListProductsComponent></ListProductsComponent>
  </div>
</template>

<script>
import ListProductsComponent from "./ListProductsComponent";

export default {
  name: "PriceEngineApp",
  components: {
    ListProductsComponent
  }
};
</script>

<style scoped></style>
