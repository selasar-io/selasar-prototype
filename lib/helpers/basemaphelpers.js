import L from 'leaflet'

const BingTileLayer = L.TileLayer.extend({
  getTileUrl: function (coords) {
    const quadkey = this._coordsToQuadKey(coords)
    const url = L.Util.template(this._url, {
      q: quadkey,
      s: this._getSubdomain(coords)
    })
    return url
  },
  _coordsToQuadKey: ({ x, y, z }) => {
    let quadKey = ''
    for (let i = z; i > 0; i--) {
      let digit = 0
      const mask = 1 << (i - 1)
      if ((x & mask) !== 0) digit++
      if ((y & mask) !== 0) digit += 2
      quadKey += digit.toString()
    }
    return quadKey
  }
})

const bingTileLayer = (templateUrl, options) => {
  const defaultOptions = {
    attribution: '&copy; Microsoft',
    subdomains: ['t0', 't1', 't2', 't3', 't5', 't6'],
    minZoom: 2,
    maxZoom: 19
  }
  return new BingTileLayer(templateUrl, Object.assign({}, defaultOptions, options))
}

export { bingTileLayer }
