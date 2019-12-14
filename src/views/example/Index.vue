<script>
import Example from './Example.vue'
// import { registerModule } from '@/store/module-register'

export default {
  asyncData({ store }) {
    store.commit('example/update', 'Hello Example Data!')
  },
  render(h) {
    return h(Example)
  },
}
</script>
