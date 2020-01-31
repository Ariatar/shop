<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-card width="150px" elevation="12">
          <v-img :src="cartproductitems.image" height="100px"></v-img>
          <v-card-title>{{cartproductitems.name}}</v-card-title>
          <v-card-subtitle>{{cartproductitems.price}}</v-card-subtitle>
          <p class="ml-5">Qty: {{cartproductitems.quantity}}</p>
          <v-card-actions>
            <v-btn @click="$emit('deleteCart')" class="error">delete</v-btn>
          </v-card-actions>
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
</style>