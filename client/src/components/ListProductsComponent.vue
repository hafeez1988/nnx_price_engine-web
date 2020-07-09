<template>
  <div class="container">
    <h3>Products</h3>
    <br />
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

            <td>Rs. {{ product.productConfig.pricePerUnit }}</td>
            <td>Rs. {{ product.productConfig.pricePerCarton }}</td>
            <td>{{ product.productConfig.unitsPerCarton }}</td>
            <td>
              <button
                class="btn btn-warning"
                v-on:click="decreaseCount(product.productId)"
              >
                -
              </button>

              &nbsp;&nbsp;
              <label :id="'countlbl_' + product.productId">0</label>
              &nbsp;&nbsp;

              <button
                class="btn btn-info"
                v-on:click="increaseCount(product.productId)"
              >
                +
              </button>

              &nbsp;&nbsp;
              <button
                class="btn btn-secondary"
                v-on:click="calculateProductCostClicked(product.productId)"
              >
                Get Price
              </button>
            </td>
            <td>
              Rs. <label :id="'costlbl_' + product.productId">0.00</label>
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
          this.message =
            "Error code: " +
            error.response.headers["x-nnx-code"] +
            " | Error message: " +
            error.response.headers["x-nnx-message"];
          console.error(error);
        });
    },

    calculateProductCostClicked(product_id) {
      var number_of_units = document.getElementById("countlbl_" + product_id)
        .innerHTML;
      ProductDataService.calculateProductCost(product_id, number_of_units)
        .then(response => {
          this.message = null;
          document.getElementById("costlbl_" + product_id).innerHTML =
            response.data.calculatedTotalPrice;
        })
        .catch(error => {
          this.message =
            "Error code: " +
            error.response.headers["x-nnx-code"] +
            " | Error message: " +
            error.response.headers["x-nnx-message"];
          document.getElementById("costlbl_" + product_id).innerHTML = "0.00";
          console.error(error);
        });
    },

    decreaseCount(product_id) {
      console.log(document.getElementById("countlbl_" + product_id).innerHTML);
      document.getElementById("countlbl_" + product_id).innerHTML =
        parseInt(document.getElementById("countlbl_" + product_id).innerHTML) -
        1;
      this.message = null;
    },

    increaseCount(product_id) {
      document.getElementById("countlbl_" + product_id).innerHTML =
        parseInt(document.getElementById("countlbl_" + product_id).innerHTML) +
        1;
      this.message = null;
    }
  },
  created() {
    this.refreshProducts();
    this.message = null;
  }
};
</script>

<style></style>
