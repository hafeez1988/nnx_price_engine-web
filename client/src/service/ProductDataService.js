import axios from "axios";

const PRICE_ENGINE_API_URL = "http://localhost:8050/nnxpriceengine";

class ProductDataService {
  retrieveAllProducts() {
    return axios.get(`${PRICE_ENGINE_API_URL}/products`);
  }

  calculateProductCost(product_id, number_of_units) {
    return axios.post(`${PRICE_ENGINE_API_URL}/product/price`, {
      productId: `${product_id}`,
      numberOfUnits: `${number_of_units}`
    })
  }

  provisionProduct(product_name, category, price_per_carton, units_per_carton) {
    return axios.put(`${PRICE_ENGINE_API_URL}/product`, {
      name: `${product_name}`,
      category: `${category}`,
      pricePerCarton: `${price_per_carton}`,
      unitsPerCarton: `${units_per_carton}`
    })
  }
}

export default new ProductDataService();
