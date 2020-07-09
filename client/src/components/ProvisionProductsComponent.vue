<template>
  <div class="container">
    <h3>Add New Product</h3>
    <br />
    <div v-if="message" class="alert alert-success">
      {{ message }}
    </div>
    <div class="container">
      <table class="table">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input v-model="product_name" placeholder="Name of the product" />
            </td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>
              <input
                v-model="product_category"
                placeholder="Product category"
              />
            </td>
          </tr>
          <tr>
            <td>Carton Price:</td>
            <td>
              <input v-model="carton_price" placeholder="Price of a carton" />
            </td>
          </tr>
          <tr>
            <td>Units Per Carton:</td>
            <td>
              <input
                v-model="units_per_carton"
                placeholder="Units in a carton"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button
                class="btn btn-dark"
                v-on:click="
                  provisionProduct(
                    product_name,
                    product_category,
                    carton_price,
                    units_per_carton
                  )
                "
              >
                Provision
              </button>
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
  name: "ProductProvision",
  data() {
    return {
      products: [],
      message: null
    };
  },
  methods: {
    provisionProduct(
      product_name,
      category,
      price_per_carton,
      units_per_carton
    ) {
      ProductDataService.provisionProduct(
        product_name,
        category,
        price_per_carton,
        units_per_carton
      )
        .then(response => {
          this.products = response.data;
          console.log(this.products);
          location.reload();
        })
        .catch(error => {
          this.message =
            "Error code: " +
            error.response.headers["x-nnx-code"] +
            " | Error message: " +
            error.response.headers["x-nnx-message"];
          console.error(error);
        });
    }
  },
  created() {
    this.message = null;
  }
};
</script>

<style></style>
