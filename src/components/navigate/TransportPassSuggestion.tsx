import { Ticket, ArrowRight } from 'lucide-react';

export default function TransportPassSuggestion() {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100 shadow-sm p-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
          <Ticket className="w-4 h-4 text-teal-600" />
        </div>
        <h3 className="font-bold text-sm text-teal-900">Roma Pass 72H</h3>
        <span className="ml-auto bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
          RECOMMENDED
        </span>
      </div>
      <p className="text-xs text-teal-800 mb-3 leading-relaxed">
        You have 8 public transit trips and 2 major museums planned. Buying the <strong>Roma Pass 72H (€52)</strong> will save you ~€18 and let you skip the ticket lines.
      </p>
      <button className="w-full bg-white border border-teal-200 text-teal-700 hover:bg-teal-50 text-xs font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-sm">
        Get Pass <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}
