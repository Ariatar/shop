<template>
  <v-container grid-list-lg>
    <v-layout justify-center row wrap>
      <v-flex v-for="product in getProducts" :key="product.article" md4>
        <v-card elevation="12">
          <v-img height="300px" :src="product.image"></v-img>
          <v-card-title>{{product.name}}</v-card-title>
          <v-card-subtitle>{{product.price}}</v-card-subtitle>
          <v-card-actions>
            <v-btn class="success" @click="$emit('addTCart', product)">add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getproductsFromApi"])
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  mounted() {
    this.getproductsFromApi();
  }
};
</script>

<style lang="scss" scoped>
</style>