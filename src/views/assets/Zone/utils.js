export async function confirmZoneOverwrite(vm, assetIds, targetZoneId = null) {
  if (!assetIds.length) {
    return true
  }

  const assetIdChunks = []
  for (let i = 0; i < assetIds.length; i += 100) {
    assetIdChunks.push(assetIds.slice(i, i + 100))
  }

  const results = await Promise.all(assetIdChunks.map(async (ids) => {
    const data = await vm.$axios.get('/api/v1/assets/assets/', {
      params: {
        id__in: ids.join(','),
        limit: ids.length
      }
    })
    return Array.isArray(data) ? data : data.results || []
  }))
  const assets = results.reduce((all, items) => all.concat(items), [])
  const conflicts = assets.filter((asset) => {
    const zoneId = asset.zone?.id
    return zoneId && String(zoneId) !== String(targetZoneId)
  })

  if (!conflicts.length) {
    return true
  }

  const conflictAssets = conflicts
    .map(asset => `${asset.name} (${asset.zone.name})`)
    .join(', ')

  try {
    await vm.$confirm(
      vm.$t('AssetsInOtherZonesConfirm', { assets: conflictAssets }),
      vm.$t('Confirm'),
      {
        confirmButtonText: vm.$t('Confirm'),
        cancelButtonText: vm.$t('Cancel'),
        type: 'warning'
      }
    )
    return true
  } catch (e) {
    return false
  }
}
