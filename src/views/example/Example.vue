<template>
  <div>
    <h1>Example Page Component</h1>
    <section>
      {{ pageData }}
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

export default {
  computed: {
    pageData() {
      return this.$store.state.example.pageData
    },
  },
} as ThisTypedComponentOptionsWithRecordProps<Vue, {}, {}, {}, {}>
</script>
