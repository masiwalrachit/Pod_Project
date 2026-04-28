import { AlertCircle, ArrowRight } from 'lucide-react';
import { budgetData } from '../../data/mockData';

export default function DynamicBudgetProjection() {
  const projectedSpend = 4800; // Mock calculation based on itinerary
  const overBudget = projectedSpend - budgetData.yourBudget;

  if (overBudget <= 0) return null;

  return (
    <div className="mb-6 bg-red-50 border border-red-100 rounded-2xl p-4 shadow-sm animate-fade-in">
      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertCircle className="w-5 h-5 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-red-900">Budget Projection Warning</h3>
          <p className="text-sm text-red-700 mt-1 leading-relaxed">
            Based on your planned itinerary, you have <strong>2 high-end dinners</strong> and <strong>3 paid entries</strong>. 
            Your projected spend is <span className="font-bold">₹{projectedSpend.toLocaleString()}/day</span>. 
            This exceeds your set budget of ₹{budgetData.yourBudget.toLocaleString()}/day by <span className="font-bold">₹{overBudget.toLocaleString()}</span>.
          </p>
          <div className="mt-3 bg-white/60 rounded-xl p-3 border border-red-100/50 flex items-center justify-between">
            <span className="text-xs font-semibold text-red-800">Suggestion: Swap one dinner for a local pizza place to save ~₹1,500.</span>
            <button className="text-red-700 hover:text-red-900 flex items-center gap-1 text-xs font-bold transition-colors">
              View Alternatives <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
