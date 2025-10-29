<template>
  <GenericListPage ref="GenericListPage" :header-actions="headerActions" :table-config="tableConfig" />
</template>

<script>
import {GenericListPage} from '@/layout/components'
import {DetailFormatter} from '@/components/Table/TableFormatters'
import orgUtil from '@/utils/org'

export default {
  name: 'TicketFlow',
  components: {
    GenericListPage
  },
  data() {
    const vm = this
    return {
      tableConfig: {
        url: '/api/v1/tickets/flows/',
        columnsExclude: ['rules', 'users'],
        columnsShow: {
          min: ['name', 'priority', 'type', 'actions'],
          default: [
            'name', 'priority', 'type', 'created_by', 'org_name',
            'date_created', 'date_updated', 'actions'
          ]
        },
        columnsMeta: {
          org_name: {
            formatter: function(row, col, cell) {
              const currentOrg = vm.$store.getters.currentOrg
              return currentOrg['is_root'] ? row.org_name : currentOrg.name
            }
          },
          type: {
            formatter: DetailFormatter,
            formatterArgs: {
              permissions: 'tickets.view_ticketflow',
              route: 'FlowDetail',
              getTitle: function({ row }) {
                return row.type.label
              }
            }
          },
          actions: {
            prop: 'actions',
            formatterArgs: {
              hasUpdate: true,
              hasClone: true,
              hasDelete: true,
              onClone: ({ row }) => {
                vm.$router.push({ name: 'TicketFlowCreate', query: { clone_from: row.id }})
              },
              canClone: () => {
                return vm.$hasPerm('tickets.add_ticketflow')
              },
              canUpdate: ({ row }) => {
                return vm.$hasPerm('tickets.change_ticketflow') && row.org_id !== orgUtil.GLOBAL_ORG_ID
              },
              onUpdate: ({ row }) => {
                vm.$router.push({ name: 'TicketFlowUpdate', params: { id: row.id }})
              },
              canDelete: ({ row }) => {
                return vm.$hasPerm('tickets.delete_ticketflow') && !(row.internal && row.org_id === orgUtil.GLOBAL_ORG_ID)
              }
            }
          }
        }
      },
      headerActions: {
        createRoute: 'TicketFlowCreate',
        canCreate: () => this.$hasPerm('tickets.add_ticketflow'),
        hasRefresh: true,
        hasExport: false,
        hasImport: false,
        hasMoreActions: false
      }
    }
  }
}
</script>

<style>

</style>
