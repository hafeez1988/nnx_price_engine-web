<template>
  <div class="app-root-style">
    <h1 style="color: #f47e47" class="text-center">
      𝟡𝟡𝕏 ℙ𝕣𝕚𝕔𝕖 𝔼𝕟𝕘𝕚𝕟𝕖 𝔸𝕡𝕡𝕝𝕚𝕔𝕒𝕥𝕚𝕠𝕟
    </h1>
    <br />
    <ListProductsComponent></ListProductsComponent>
    <br />
    <br />
    <hr />
    <div class="text-center">
      <button class="btn btn-dark" v-on:click="toggleProvisionComponent()">
        Click to provision products
      </button>
    </div>
    <br />
    <br />
    <ProvisionProductsComponent
      v-if="isShowProvision"
    ></ProvisionProductsComponent>
    <br />
    <br />
    <div class="text-right">
      Developed by Hafeez Marzuk©2020
    </div>
  </div>
</template>

<script>
import ListProductsComponent from "./ListProductsComponent";
import ProvisionProductsComponent from "./ProvisionProductsComponent";

export default {
  name: "PriceEngineApp",
  data() {
    return {
      isShowProvision: false
    };
  },
  methods: {
    toggleProvisionComponent() {
      this.isShowProvision = !this.isShowProvision;
    }
  },
  components: {
    ListProductsComponent,
    ProvisionProductsComponent
  }
};
</script>

<style scoped>
.app-root-style {
  background-color: black;
  background-image: radial-gradient(
      white,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 40px
    ),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
    radial-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 2px,
      transparent 30px
    );
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  color: white;
  font-family: "Times New Roman", Times, serif;
}
</style>
