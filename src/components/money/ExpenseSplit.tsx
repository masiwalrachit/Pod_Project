import { useState } from 'react';
import { Receipt, Users, ArrowRight, Plus, Search, Utensils, Car, Ticket, Coffee, CreditCard, Banknote } from 'lucide-react';
import { expenseData } from '../../data/mockData';

export default function ExpenseSplit() {
  const [activeTab, setActiveTab] = useState<'transactions' | 'balances'>('transactions');
  
  // Calculate per-person totals and overall balances for currentUser
  const currentUser = expenseData.currentUser || expenseData.members[0];
  let currentUserTotalPaid = 0;
  let currentUserTotalShare = 0;
  let totalGroupExpense = 0;

  const personTotals: Record<string, number> = {};
  expenseData.members.forEach((m) => (personTotals[m] = 0));

  expenseData.expenses.forEach((exp) => {
    totalGroupExpense += exp.amount;
    const perPerson = Math.round(exp.amount / exp.splitAmong.length);
    if (exp.paidBy === currentUser) {
      currentUserTotalPaid += exp.amount;
    }
    if (exp.splitAmong.includes(currentUser)) {
      currentUserTotalShare += perPerson;
    }
    
    exp.splitAmong.forEach((person) => {
      personTotals[person] = (personTotals[person] || 0) + perPerson;
    });
  });

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'Food': return <Utensils className="w-4 h-4" />;
      case 'Drinks': return <Coffee className="w-4 h-4" />;
      case 'Transport': return <Car className="w-4 h-4" />;
      case 'Entertainment':
      case 'Activity': return <Ticket className="w-4 h-4" />;
      default: return <Receipt className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'Food': return 'bg-orange-100 text-orange-600';
      case 'Drinks': return 'bg-purple-100 text-purple-600';
      case 'Transport': return 'bg-blue-100 text-blue-600';
      case 'Entertainment':
      case 'Activity': return 'bg-pink-100 text-pink-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Top Header & Actions */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg text-slate-800">{expenseData.tripName}</h3>
            <p className="text-sm font-medium text-slate-500 mt-0.5">Total Group Expense: <span className="font-bold text-slate-800">₹{totalGroupExpense.toLocaleString()}</span></p>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white p-2.5 rounded-xl flex items-center justify-center transition-colors shadow-sm">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        
        {/* Current User Summary Box */}
        <div className="bg-slate-900 rounded-xl p-5 text-white shadow-md relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <p className="text-slate-400 text-xs font-medium mb-1">Your Total Share</p>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-bold font-mono">₹{currentUserTotalShare.toLocaleString()}</span>
            <span className="text-sm text-slate-400 mb-1">paid ₹{currentUserTotalPaid.toLocaleString()}</span>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-white/10 hover:bg-white/20 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <Banknote className="w-4 h-4" /> Add Money
            </button>
            <button className="flex-1 bg-teal-500 hover:bg-teal-400 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 text-slate-900">
              <CreditCard className="w-4 h-4" /> Settle Balances
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100">
        <button 
          onClick={() => setActiveTab('transactions')}
          className={`flex-1 py-3.5 text-sm font-medium transition-colors ${activeTab === 'transactions' ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50/30' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
        >
          Transactions
        </button>
        <button 
          onClick={() => setActiveTab('balances')}
          className={`flex-1 py-3.5 text-sm font-medium transition-colors ${activeTab === 'balances' ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50/30' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
        >
          Balances
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-5 flex-1 overflow-y-auto">
        {activeTab === 'transactions' && (
          <div className="animate-fade-in">
            <div className="relative mb-5">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search expenses..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>
            <div className="space-y-3">
              {expenseData.expenses.map((exp) => {
                const perPerson = Math.round(exp.amount / exp.splitAmong.length);
                const isCurrentUserInvolved = exp.splitAmong.includes(currentUser) || exp.paidBy === currentUser;
                
                return (
                  <div
                    key={exp.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${isCurrentUserInvolved ? 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-sm' : 'bg-slate-50 border-transparent opacity-60'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getCategoryColor(exp.category)}`}>
                      {getCategoryIcon(exp.category)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-800 truncate">{exp.description}</p>
                      <p className="text-[10px] font-medium text-slate-500 mt-1">
                        {exp.paidBy === currentUser ? 'You' : exp.paidBy} paid • {exp.date}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-slate-800 font-mono">₹{exp.amount.toLocaleString()}</p>
                      <p className={`text-[10px] font-bold mt-1 ${exp.splitAmong.includes(currentUser) ? 'text-amber-500' : 'text-slate-400'}`}>
                        {exp.splitAmong.includes(currentUser) ? `Your share: ₹${perPerson.toLocaleString()}` : 'Not involved'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'balances' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Group Summary</h4>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {expenseData.members.map((member) => (
                  <div key={member} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
                      {member[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700">{member === currentUser ? 'You' : member}</p>
                      <p className="text-sm font-bold font-mono text-slate-600">₹{personTotals[member]?.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">How to Settle Up</h4>
              <div className="space-y-3">
                {expenseData.balances.map((bal, i) => {
                  const isYou = bal.name === currentUser;
                  const owesYou = bal.owedBy === currentUser;
                  
                  return (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${isYou ? 'bg-amber-50 border-amber-100' : owesYou ? 'bg-teal-50 border-teal-100' : 'bg-slate-50 border-slate-100'}`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`text-sm font-bold ${isYou ? 'text-amber-800' : 'text-slate-700'}`}>{isYou ? 'You' : bal.name}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isYou ? 'text-amber-400' : owesYou ? 'text-teal-400' : 'text-slate-400'}`} />
                          <span className={`text-sm font-bold ${owesYou ? 'text-teal-800' : 'text-slate-700'}`}>{owesYou ? 'You' : bal.owedBy}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium">Suggested transfer via UPI</p>
                      </div>
                      <div className="text-right flex flex-col items-end gap-2">
                        <span className={`text-lg font-bold font-mono ${isYou ? 'text-amber-600' : owesYou ? 'text-teal-600' : 'text-slate-700'}`}>
                          ₹{bal.owes.toLocaleString()}
                        </span>
                        {(isYou || owesYou) && (
                          <button className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors ${isYou ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-teal-100 text-teal-700 hover:bg-teal-200'}`}>
                            {isYou ? 'Pay Now' : 'Remind'}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
