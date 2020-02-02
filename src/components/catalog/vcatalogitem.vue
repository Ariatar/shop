<template>
  <v-container class="grey" grid-list-lg>
    <v-layout justify-center row wrap>
      <v-flex md4>
        <v-card-title>{{product_data.title}}</v-card-title>
        <v-card class="red" elevation="12">
          <v-card-subtitle>{{product_data.price}}</v-card-subtitle>
          <v-card-actions>
            <v-btn large block class="success" @click="$emit('addTCart', product_data)">add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-img class="transform" width="400px" height="400px" :src="product_data.image"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    },
    data() {
      return {};
    }
  }
};
</script>

<style lang="scss" scoped>
.transform:hover {
  transform: scale(1.2);
  transition: 0.9s;
  overflow: hidden;
}
</style>