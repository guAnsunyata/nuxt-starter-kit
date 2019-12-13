<script>
import Example from './Example.vue'
import { registerModule } from '@/store/module-register'

export default {
  async asyncData({ app, store }) {
    await registerModule(app, store, 'example')
    store.commit('example/update', 'Hello Example Data!')
  },
  render(h) {
    return h(Example)
  },
}
</script>
