<template>
  <v-card width="1050px">
    <v-layout>
      <v-flex md4 xs12>
        <v-card width="420px">
          <v-toolbar class="primary">
            <v-flex class="text-center">
              <v-toolbar-title>search</v-toolbar-title>
            </v-flex>
          </v-toolbar>

          <v-select :items="items" label="search" single-line></v-select>
        </v-card>
      </v-flex>
      <v-flex md9>
        <v-img src="http://img10.reactor.cc/pics/avatar/tag/article/2851"></v-img>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>