import { AlertCircle, RefreshCw, X } from 'lucide-react';
import { useState } from 'react';

export default function DynamicReorder() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 24,
        left: 16,
        right: 16,
        zIndex: 1000,
      }}
      className="animate-slide-up"
    >
      <div className="bg-navy-900/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/10">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertCircle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Live Update</p>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Heavy crowd at Fort Aguada detected. Suggested: swap Day 2 morning with afternoon for a smoother experience.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <button className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all">
                <RefreshCw className="w-3.5 h-3.5" />
                Accept Swap
              </button>
              <button
                onClick={() => setVisible(false)}
                className="text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
