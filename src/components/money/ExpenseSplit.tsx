import { Receipt, Users, ArrowRight } from 'lucide-react';
import { expenseData } from '../../data/mockData';

export default function ExpenseSplit() {
  // Calculate per-person totals
  const personTotals: Record<string, number> = {};
  expenseData.members.forEach((m) => (personTotals[m] = 0));

  expenseData.expenses.forEach((exp) => {
    const perPerson = Math.round(exp.amount / exp.splitAmong.length);
    exp.splitAmong.forEach((person) => {
      personTotals[person] = (personTotals[person] || 0) + perPerson;
    });
  });



  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-bold text-lg text-slate-800">Group Expense Split</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5">{expenseData.tripName} — {expenseData.members.join(', ')}</p>

      {/* Expense List */}
      <div className="space-y-2 mb-5 max-h-[300px] overflow-y-auto pr-1">
        {expenseData.expenses.map((exp) => {
          const perPerson = Math.round(exp.amount / exp.splitAmong.length);
          return (
            <div
              key={exp.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-700 flex-shrink-0">
                D{exp.day}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">{exp.description}</p>
                <p className="text-xs text-slate-400">
                  Split: {exp.splitAmong.join(', ')}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-slate-800">₹{exp.amount.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400">₹{perPerson.toLocaleString()}/person</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Balances Summary */}
      <div className="border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-slate-400" />
          <h4 className="text-sm font-semibold text-slate-700">Total per person</h4>
        </div>

        <div className="space-y-2 mb-4">
          {expenseData.members.map((member) => (
            <div key={member} className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white text-xs font-bold flex items-center justify-center">
                  {member[0]}
                </div>
                <span className="text-sm font-medium text-slate-700">{member}</span>
              </div>
              <span className="text-sm font-bold text-slate-800 font-mono">₹{personTotals[member]?.toLocaleString()}</span>
            </div>
          ))}
        </div>

        {/* Settlements */}
        <div className="space-y-2 mb-4">
          {expenseData.balances.map((bal, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 border border-amber-100">
              <span className="text-sm font-medium text-amber-800">{bal.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-sm font-medium text-amber-800">{bal.owedBy}</span>
              <span className="ml-auto text-sm font-bold text-amber-600">₹{bal.owes.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <button className="w-full btn-secondary text-sm flex items-center justify-center gap-2">
          <Receipt className="w-4 h-4" />
          Settle Up
        </button>
      </div>
    </div>
  );
}
