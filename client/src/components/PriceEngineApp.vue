<template>
  <div>
    <h1 style="color: teal">99X Price Engine Application</h1>
    <br />
    <ListProductsComponent></ListProductsComponent>
    <hr />
    <ProvisionProductsComponent></ProvisionProductsComponent>
  </div>
</template>

<script>
import ListProductsComponent from "./ListProductsComponent";
import ProvisionProductsComponent from "./ProvisionProductsComponent";

export default {
  name: "PriceEngineApp",
  components: {
    ListProductsComponent,
    ProvisionProductsComponent
  }
};
</script>

<style scoped></style>
