import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mapCenter, touristTraps, safetyZones, emergencyFacilities } from '../../data/mockData';
import { waterFountains } from '../../data/travelIntelligence';

interface MapViewProps {
  showSafety: boolean;
}

// Color map shared across setup and CSS class naming
const SAFETY_COLORS: Record<string, string> = {
  Safe:     '#10B981',
  Moderate: '#F59E0B',
  Caution:  '#EF4444',
};

export default function MapView({ showSafety }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef       = useRef<L.Map | null>(null);
  const safetyRef    = useRef<L.LayerGroup | null>(null);

  /* ── Init map once ──────────────────────────────────── */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [15.51, 73.80],
      zoom: 12,
      zoomControl: false,
      dragging: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      touchZoom: true,
    });

    // Dark CartoDB tiles
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      }
    ).addTo(map);

    L.control.zoom({ position: 'topright' }).addTo(map);

    /* ── Tourist trap markers ───────────────────────── */
    const makeWarningIcon = () =>
      L.divIcon({
        className: '',
        html: `
          <div class="trap-marker">
            <span>⚠</span>
            <div class="trap-ring"></div>
          </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

    touristTraps.forEach((trap) => {
      L.marker(trap.position, { icon: makeWarningIcon() })
        .addTo(map)
        .bindPopup(
          `<div style="min-width:210px;font-family:'Plus Jakarta Sans',sans-serif;">
            <div style="font-weight:700;color:#F59E0B;margin-bottom:6px;font-size:13px;">⚠️ Tourist Trap</div>
            <div style="font-size:12px;color:#E2E8F0;line-height:1.6;">${trap.warning}</div>
            <div style="font-size:11px;margin-top:8px;color:#94A3B8;border-top:1px solid rgba(255,255,255,0.1);padding-top:6px;">
              🚩 ${trap.reports} travelers warned
            </div>
           </div>`
        );
    });

    /* ── Safety zones ───────────────────────────────── */
    const safetyLayer = L.layerGroup();

    safetyZones.forEach((zone) => {
      const color   = SAFETY_COLORS[zone.daytime] ?? '#F59E0B';
      const isSafe  = zone.daytime === 'Safe';
      const cssClass = isSafe ? 'zone-safe' : 'zone-danger';

      const circle = L.circle(zone.center, {
        radius:      1200,
        color,
        fillColor:   color,
        fillOpacity: 0.15,
        weight:      2,
        className:   cssClass,
      });

      circle.bindTooltip(
        `<div style="color: #000; font-size:12px;line-height:1.8;font-family:'Plus Jakarta Sans',sans-serif;">
          <strong style="font-size:13px;">📍 ${zone.name}</strong><br/>
          🌞 Daytime: <span style="color:${SAFETY_COLORS[zone.daytime]};font-weight:600;">${zone.daytime}</span><br/>
          🌙 Night: <span style="color:${SAFETY_COLORS[zone.night]};font-weight:600;">${zone.night}</span><br/>
          👩 Solo women: <em style="color: #000;">${zone.soloWomen}</em>
        </div>`,
        { direction: 'top', sticky: true }
      );

      safetyLayer.addLayer(circle);
    });
    
    /* ── Drinking Water (Nasoni) ────────────────────── */
    const makeWaterIcon = () =>
      L.divIcon({
        className: '',
        html: `
          <div style="background:#0D9488;color:white;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(0,0,0,0.3);border:2px solid white;font-size:12px;">
            💧
          </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

    waterFountains.forEach((fountain) => {
      L.marker(fountain.position as L.LatLngExpression, { icon: makeWaterIcon() })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:'Plus Jakarta Sans',sans-serif;">
            <div style="font-weight:700;color:#0D9488;font-size:13px;">${fountain.name}</div>
            <div style="font-size:11px;color:#64748B;margin-top:2px;">Free drinking water</div>
           </div>`
        );
    });

    safetyRef.current = safetyLayer;

    /* ── Emergency Facilities ───────────────────────── */
    const makeEmergencyIcon = (type: string) => {
      const isHospital = type === 'Hospital';
      const color = isHospital ? '#EF4444' : '#3B82F6';
      const icon = isHospital ? '🏥' : '🚓';
      
      return L.divIcon({
        className: '',
        html: `
          <div style="position:relative;width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:${color};border-radius:50%;border:2px solid white;box-shadow:0 0 10px ${color};">
            <div style="position:absolute;inset:-4px;border-radius:50%;border:2px solid ${color};animation:ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;opacity:0.7;"></div>
            <span style="font-size:14px;z-index:10;">${icon}</span>
          </div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
    };

    emergencyFacilities.forEach((facility) => {
      L.marker(facility.position, { icon: makeEmergencyIcon(facility.type) })
        .addTo(map)
        .bindPopup(
          `<div style="min-width:180px;font-family:'Plus Jakarta Sans',sans-serif;">
            <div style="font-weight:700;color:${facility.type === 'Hospital' ? '#EF4444' : '#60A5FA'};margin-bottom:4px;font-size:13px;">${facility.name}</div>
            <div style="font-size:12px;color:#E2E8F0;">${facility.type}</div>
            <div style="font-size:12px;margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.1);font-weight:600;color:#94A3B8;">📞 ${facility.phone}</div>
           </div>`
        );
    });

    /* ── Current Location ───────────────────────────── */
    const makeCurrentLocationIcon = () =>
      L.divIcon({
        className: '',
        html: `
          <div style="position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center;">
            <div style="position:absolute;inset:-4px;background:#3B82F6;border-radius:50%;animation:ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;opacity:0.6;"></div>
            <div style="width:14px;height:14px;background:#2563EB;border-radius:50%;border:2px solid white;z-index:10;box-shadow:0 0 10px rgba(59,130,246,0.8);"></div>
          </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

    // Offset slightly from mapCenter so it doesn't overlap the tourist trap
    const userLocation: [number, number] = [mapCenter[0] - 0.0035, mapCenter[1] - 0.0055];

    L.marker(userLocation, { icon: makeCurrentLocationIcon(), zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup(
        `<div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;color:#3B82F6;font-size:13px;text-align:center;">
          📍 You are here
         </div>`
      );

    mapRef.current    = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      safetyRef.current = null;
    };
  }, []);

  /* ── Toggle safety layer ────────────────────────────── */
  useEffect(() => {
    if (!mapRef.current || !safetyRef.current) return;
    if (showSafety) {
      mapRef.current.addLayer(safetyRef.current);
    } else {
      mapRef.current.removeLayer(safetyRef.current);
    }
  }, [showSafety]);

  return (
    /**
     * KEY: The div Leaflet mounts into must NOT have overflow:hidden.
     * Border-radius clipping goes on an absolutely-positioned frame BEHIND it.
     * The map div fills the frame, but pointer events flow freely.
     */
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 500 }}>
      {/* Rounded clip frame (pointer-events:none so it doesn't block drag) */}
      <div
        style={{
          position: 'absolute', inset: 0,
          borderRadius: 16,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 2,
          boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
        }}
      />
      {/* Leaflet target — no overflow:hidden, full size */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute', inset: 0,
          borderRadius: 16,
          zIndex: 1,
        }}
      />
    </div>
  );
}
