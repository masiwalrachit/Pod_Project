import { Wallet } from 'lucide-react';
import BudgetPulse from '../components/money/BudgetPulse';
import ExpenseSplit from '../components/money/ExpenseSplit';
import DynamicBudgetProjection from '../components/money/DynamicBudgetProjection';

export default function Money() {
  return (
    <div className="max-w-7xl mx-auto animate-slide-up">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Money</h1>
            <p className="text-slate-500 text-sm">Track spend, stay on budget, split with friends.</p>
          </div>
        </div>
      </div>

      <DynamicBudgetProjection />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetPulse />
        <ExpenseSplit />
      </div>
    </div>
  );
}
