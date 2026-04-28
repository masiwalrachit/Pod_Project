import { AlertTriangle, Info } from 'lucide-react';
import { transportAlerts } from '../../data/travelIntelligence';

export default function TransportAlerts() {
  if (!transportAlerts || transportAlerts.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="w-4 h-4 text-amber-500" />
        <h3 className="font-bold text-sm text-slate-800">Transport Alerts</h3>
      </div>
      <div className="space-y-3">
        {transportAlerts.map((alert) => (
          <div 
            key={alert.id}
            className={`p-3 rounded-xl border ${
              alert.severity === 'high' 
                ? 'bg-amber-50 border-amber-200' 
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex gap-2 items-start">
              {alert.severity === 'high' ? (
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              ) : (
                <Info className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <h4 className={`text-sm font-semibold ${
                  alert.severity === 'high' ? 'text-amber-900' : 'text-slate-800'
                }`}>
                  {alert.title}
                </h4>
                <p className={`text-xs mt-1 ${
                  alert.severity === 'high' ? 'text-amber-800' : 'text-slate-600'
                }`}>
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
