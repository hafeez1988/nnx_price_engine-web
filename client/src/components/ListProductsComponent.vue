<template>
  <div class="container">
    <h3>All Products</h3>
    <div v-if="message" class="alert alert-success">
      {{ message }}
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Unit Price</th>
            <th>Carton Price</th>
            <th>Units Per Carton</th>
            <th>Required Units</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" v-bind:key="product.productId">
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>

            <td>{{ product.productConfig.pricePerUnit }}</td>
            <td>{{ product.productConfig.pricePerCarton }}</td>
            <td>{{ product.productConfig.unitsPerCarton }}</td>
            <td>
              <button
                class="btn btn-warning"
                v-on:click="decreaseCount(product.productId)"
              >
                -
              </button>
              <label :id="'countlbl_' + product.productId">0</label>
              <button
                class="btn btn-warning"
                v-on:click="increaseCount(product.productId)"
              >
                +
              </button>
              <button
                class="btn btn-warning"
                v-on:click="calculateProductCostClicked(product.productId)"
              >
                Calculate Price
              </button>
            </td>
            <td>
              <label :id="'costlbl_' + product.productId">0.00</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../service/ProductDataService";
export default {
  name: "ProductList",
  data() {
    return {
      products: [],
      message: null
    };
  },
  methods: {
    refreshProducts() {
      ProductDataService.retrieveAllProducts()
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          this.message = error;
          console.error(error);
        });
    },

    calculateProductCostClicked(product_id) {
      var number_of_units = document.getElementById("countlbl_" + product_id)
        .innerHTML;
      ProductDataService.calculateProductCost(product_id, number_of_units)
        .then(response => {
          document.getElementById("costlbl_" + product_id).innerHTML =
            response.data.calculatedTotalPrice;
        })
        .catch(error => {
          this.message = error;
          console.error(error);
        });
    },

    decreaseCount(product_id) {
      console.log(document.getElementById("countlbl_" + product_id).innerHTML);
      document.getElementById("countlbl_" + product_id).innerHTML =
        parseInt(document.getElementById("countlbl_" + product_id).innerHTML) -
        1;
    },

    increaseCount(product_id) {
      document.getElementById("countlbl_" + product_id).innerHTML =
        parseInt(document.getElementById("countlbl_" + product_id).innerHTML) +
        1;
    }
  },
  created() {
    this.refreshProducts();
    this.message = null;
  }
};
</script>

<style></style>
