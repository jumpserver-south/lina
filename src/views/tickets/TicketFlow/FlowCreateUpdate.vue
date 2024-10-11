<template>
  <GenericCreateUpdatePage :initial="initial" v-bind="$data" />
</template>

<script>
import {GenericCreateUpdatePage} from '@/layout/components'
import FlowRuleField from './FlowRuleField'
import {userJSONSelectMeta} from '@/views/users/const'
import rules from '@/components/Form/DataForm/rules'

export default {
  name: 'FlowCreateUpdate',
  components: {
    GenericCreateUpdatePage
  },
  data() {
    return {
      loading: true,
      initial: {
        priority: 50,
        type: 'apply_asset',
        internal: false,
        approval_level: 1,
        rules: [
          {
            strategy: {
              value: 'super_admin'
            },
            assignees_read_only: []
          }
        ]
      },
      fields: [
        [this.$t('common.Basic'), ['name', 'priority', 'type', 'internal']],
        [this.$t('users.Users'), ['users']],
        [this.$t('common.ApprovaLevel'), ['approval_level', 'rules']]
      ],
      fieldsMeta: {
        priority: {
          rules: [rules.Required]
        },
        type: {
          disabled: true
        },
        internal: {
          hidden: true
        },
        users: userJSONSelectMeta(this),
        rules: {
          label: this.$t('tickets.ApprovalProcess'),
          component: FlowRuleField,
          el: {
            level: 1
          },
          hidden: (form) => {
            this.fieldsMeta.rules.el.level = form['approval_level']
          }
        }
      },
      url: `/api/v1/tickets/flows/`,
      // getUrl() {
      //   const params = this.$route.params
      //   let url = `/api/v1/tickets/flows/`
      //   if (params.id) {
      //     url = `${url}${params.id}/`
      //   }
      //   return `${url}`
      // },
      cleanFormValue(data) {
        data['rules'] = data['rules'].slice(0, data['approval_level'])
        return data
      },
      updateSuccessNextRoute: { name: 'TicketFlow' },
      createSuccessNextRoute: { name: 'TicketFlow' }
    }
  },
  computed: {
    // initial() {
    //   return this.$route.query
    // }
  },
  mounted() {
    if (this.$store.getters.consoleOrgs) {
      this.initial.org_id = this.$store.getters.consoleOrgs[0].id
    }

    // Clone: Copy Params
    const flowId = this.$route.query.clone_from
    if (flowId) {
      const extraColumns = ['type', 'approval_level']
      const columns = this.fields.flatMap(item => item[1]).filter(item => !extraColumns.includes(item))
      this.$axios['get'](`/api/v1/tickets/flows/${flowId}/`).then(response => {
        console.log(response)
        columns.map(c => this.initial[c] = response[c])
        extraColumns.map(c => this.initial[c] = response[c].value)
        this.initial.name = this.$t('common.cloneFrom') + response['name']
        this.loading = false
      })
    } else {
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>
