<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card class="yellow">
          <v-layout>
            <v-flex xs12 md3>
              <v-img height="200px" :src="cartproductitems.image"></v-img>
            </v-flex>

            <v-flex xs12 offset-md5 md9>
              <div>
                <v-card-title>{{ cartproductitems.name }}</v-card-title>
                <v-card-subtitle>
                  {{
                  cartproductitems.price
                  }}
                </v-card-subtitle>

                <p class="ml-5">
                  <span @click="$emit('decrement')">-</span>
                  Qty: {{ cartproductitems.quantity }}
                  <span
                    @click="$emit('increment')"
                  >+</span>
                </p>

                <v-card-actions>
                  <v-btn @click="$emit('deleteCart')" class="error ml-3">delete</v-btn>
                </v-card-actions>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  props: {
    cartproductitems: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.$set(this.cartproductitems, "quantity", 1);
  }
};
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
  padding: 0 5px;
  color: red;
  font-size: 25px;
}
</style>