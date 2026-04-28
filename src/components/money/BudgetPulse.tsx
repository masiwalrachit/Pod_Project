import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { budgetData } from '../../data/mockData';

export default function BudgetPulse() {
  const totalListed = budgetData.categories.reduce((sum, c) => sum + c.listed, 0);
  const totalActual = budgetData.categories.reduce((sum, c) => sum + c.actual, 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-bold text-lg text-slate-800">Budget Pulse</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5">{budgetData.destination} — Based on community data</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</th>
              <th className="text-right py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Listed</th>
              <th className="text-right py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Actual Avg</th>
              <th className="text-right py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Diff</th>
            </tr>
          </thead>
          <tbody>
            {budgetData.categories.map((cat) => {
              const diff = cat.actual - cat.listed;
              const isOver = diff > 0;
              const isEqual = diff === 0;

              return (
                <tr key={cat.category} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{cat.icon}</span>
                      <span className="font-medium text-slate-700">{cat.category}</span>
                    </div>
                  </td>
                  <td className="text-right py-3 text-slate-600 font-mono">
                    {budgetData.currency}{cat.listed.toLocaleString()}
                  </td>
                  <td className="text-right py-3 text-slate-600 font-mono">
                    {budgetData.currency}{cat.actual.toLocaleString()}
                  </td>
                  <td className="text-right py-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg ${
                        isEqual
                          ? 'bg-slate-100 text-slate-500'
                          : isOver
                          ? 'bg-red-50 text-red-600'
                          : 'bg-green-50 text-green-600'
                      }`}
                    >
                      {isEqual ? (
                        <Minus className="w-3 h-3" />
                      ) : isOver ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {isOver ? '+' : ''}{budgetData.currency}{Math.abs(diff).toLocaleString()}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-slate-200">
              <td className="py-3 font-bold text-slate-800">Total / Day</td>
              <td className="text-right py-3 font-bold text-slate-800 font-mono">
                {budgetData.currency}{totalListed.toLocaleString()}
              </td>
              <td className="text-right py-3 font-bold text-slate-800 font-mono">
                {budgetData.currency}{totalActual.toLocaleString()}
              </td>
              <td className="text-right py-3">
                <span className={`text-xs font-bold ${totalActual > totalListed ? 'text-red-600' : 'text-green-600'}`}>
                  {totalActual > totalListed ? '+' : ''}{budgetData.currency}{Math.abs(totalActual - totalListed).toLocaleString()}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-5 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
        <p className="text-sm text-slate-700 leading-relaxed">
          Travelers like you spent ~<strong className="text-amber-600">{budgetData.currency}{budgetData.avgDailySpend.toLocaleString()}/day</strong> in {budgetData.destination.split(',')[0]}.
          Your current budget: <strong className={budgetData.yourBudget < budgetData.avgDailySpend ? 'text-red-600' : 'text-green-600'}>
            {budgetData.currency}{budgetData.yourBudget.toLocaleString()}/day
          </strong>.
        </p>
      </div>
    </div>
  );
}
