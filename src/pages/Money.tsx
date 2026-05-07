import { Wallet } from 'lucide-react';
import ExpenseSplit from '../components/money/ExpenseSplit';

export default function Money() {
  return (
    <div className="max-w-4xl mx-auto animate-slide-up">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Money & Splitting</h1>
            <p className="text-slate-500 text-sm">Track group expenses and settle up.</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ExpenseSplit />
      </div>
    </div>
  );
}
