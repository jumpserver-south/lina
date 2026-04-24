<template>
  <GenericTicketDetail :object="object" :special-card-items="specialCardItems" />
</template>

<script>
import { STATUS_MAP } from '../../const'
import GenericTicketDetail from '@/views/tickets/components/GenericTicketDetail'

export default {
  name: 'AssetTicketDetail',
  components: {
    GenericTicketDetail
  },
  props: {
    object: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      statusMap: this.object.status.value === 'open' ? STATUS_MAP['pending'] : STATUS_MAP[this.object.state.value],
      imageUrl: require('@/assets/img/avatar.png'),
      form: {
        comments: ''
      },
      comments: ''
    }
  },
  computed: {
    specialCardItems() {
      const { object } = this
      const items = object.type === 'login_confirm' ? [] : [
        {
          key: this.$t('ApplyLoginAsset'),
          value: object.apply_login_asset?.name
        },
        {
          key: this.$t('ApplyLoginAccount'),
          value: object.apply_login_account
        },
        {
          key: this.$t('ApplyLoginUser'),
          value: object.apply_login_user.name
        }
      ]
      if (object.apply_reason) {
        items.push({ key: this.$t('ApplyReason'), value: object.apply_reason })
        items.push({ key: this.$t('OperationContent'), value: object.apply_operation_content })
        items.push({ key: this.$t('OperationDuration'), value: object.apply_operation_duration })
      }
      return items
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
