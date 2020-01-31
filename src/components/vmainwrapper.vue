<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="text-center">
        <div>Hello Vue</div>
      </v-flex>
    </v-layout>
    <keep-alive>
      <router-view />
    </keep-alive>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {};
</script>

<style lang="scss" scoped>
</style>