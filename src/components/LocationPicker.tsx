import { useEffect, useRef } from "react"
import * as L from "leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

const TASHKENT: [number, number] = [41.2995, 69.2401]

export default function LocationPicker({
  latitude,
  longitude,
  onChange,
}: {
  latitude: string
  longitude: string
  onChange: (lat: string, lng: string) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)

  const lat = latitude ? Number(latitude) : null
  const lng = longitude ? Number(longitude) : null
  const hasCoords = lat !== null && lng !== null

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: hasCoords ? [lat, lng] as [number, number] : TASHKENT,
      zoom: hasCoords ? 15 : 10,
      scrollWheelZoom: true,
    })

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    if (hasCoords) {
      const marker = L.marker([lat, lng] as [number, number], { icon: DefaultIcon, draggable: true }).addTo(map)
      marker.on("dragend", () => {
        const { lat: dLat, lng: dLng } = marker.getLatLng()
        onChange(dLat.toFixed(6), dLng.toFixed(6))
      })
      markerRef.current = marker
    }

    map.on("click", (e: L.LeafletMouseEvent) => {
      const { lat: cLat, lng: cLng } = e.latlng
      if (markerRef.current) {
        markerRef.current.setLatLng([cLat, cLng])
      } else {
        const marker = L.marker([cLat, cLng], { icon: DefaultIcon, draggable: true }).addTo(map)
        marker.on("dragend", () => {
          const { lat: dLat, lng: dLng } = marker.getLatLng()
          onChange(dLat.toFixed(6), dLng.toFixed(6))
        })
        markerRef.current = marker
      }
      onChange(cLat.toFixed(6), cLng.toFixed(6))
    })

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
      markerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return
    if (hasCoords && lat !== null && lng !== null) {
      mapRef.current.setView([lat, lng], 15)
      if (!markerRef.current) {
        const marker = L.marker([lat, lng], { icon: DefaultIcon, draggable: true }).addTo(mapRef.current)
        marker.on("dragend", () => {
          const { lat: dLat, lng: dLng } = marker.getLatLng()
          onChange(dLat.toFixed(6), dLng.toFixed(6))
        })
        markerRef.current = marker
      }
    }
  }, [lat, lng])

  return (
    <div className="space-y-3">
      <div ref={containerRef} className="h-[320px] w-full overflow-hidden rounded-lg border" />
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <div className="flex-1">
          <span className="font-medium">Lat:</span>{" "}
          {lat !== null ? lat.toFixed(6) : "—"}
        </div>
        <div className="flex-1">
          <span className="font-medium">Lng:</span>{" "}
          {lng !== null ? lng.toFixed(6) : "—"}
        </div>
      </div>
      {!hasCoords && (
        <p className="text-xs text-muted-foreground">
          Click on the map to set the hotel location.
        </p>
      )}
    </div>
  )
}
