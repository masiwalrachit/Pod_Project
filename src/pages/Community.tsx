import { useState } from 'react';
import { MessageCircle, BookOpen, Plus, Send } from 'lucide-react';
import QuestionCard from '../components/community/QuestionCard';
import CapsuleCard from '../components/community/CapsuleCard';
import { communityQuestions, tripCapsules } from '../data/mockData';

type Tab = 'ask' | 'capsules';

export default function Community() {
  const [activeTab, setActiveTab] = useState<Tab>('ask');
  const [showAskForm, setShowAskForm] = useState(false);
  const [showShareForm, setShowShareForm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto animate-slide-up">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Community</h1>
        <p className="text-slate-500 text-sm mt-1">Learn from travelers who've been there.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-slate-100 rounded-2xl p-1 mb-6 w-fit">
        <button
          onClick={() => setActiveTab('ask')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            activeTab === 'ask'
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          Ask a Traveler
        </button>
        <button
          onClick={() => setActiveTab('capsules')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            activeTab === 'capsules'
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Trip Capsules
        </button>
      </div>

      {/* Ask a Traveler Tab */}
      {activeTab === 'ask' && (
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-slate-500">{communityQuestions.length} questions from the community</p>
            <button
              onClick={() => setShowAskForm(!showAskForm)}
              className="btn-primary text-sm flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Ask a Question
            </button>
          </div>

          {/* Ask Form */}
          {showAskForm && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-5 animate-slide-up">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Ask the community</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Destination (e.g. Goa, Coorg)"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
                <textarea
                  placeholder="What would you like to know?"
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none"
                />
                <input
                  type="text"
                  placeholder="Travel dates (e.g. May 2026)"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
                <button className="btn-primary text-sm flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Post Question
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {communityQuestions.map((q) => (
              <QuestionCard key={q.id} {...q} />
            ))}
          </div>
        </div>
      )}

      {/* Trip Capsules Tab */}
      {activeTab === 'capsules' && (
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-slate-500">{tripCapsules.length} trip stories shared</p>
            <button
              onClick={() => setShowShareForm(!showShareForm)}
              className="btn-primary text-sm flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Share Your Trip
            </button>
          </div>

          {/* Share Form */}
          {showShareForm && (
            <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border border-amber-100 shadow-sm p-5 mb-5 animate-slide-up">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Share your travel capsule</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full px-4 py-2.5 bg-white border border-amber-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                  <input
                    type="text"
                    placeholder="Trip dates"
                    className="w-full px-4 py-2.5 bg-white border border-amber-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1 block">
                    ✨ Best Moment (max 150 chars)
                  </label>
                  <textarea
                    maxLength={150}
                    rows={2}
                    placeholder="The one moment you'll never forget..."
                    className="w-full px-4 py-2.5 bg-white border border-amber-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                    😔 One Regret (max 100 chars)
                  </label>
                  <textarea
                    maxLength={100}
                    rows={2}
                    placeholder="What would you do differently?"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none"
                  />
                </div>
                <button className="btn-primary text-sm flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Share Capsule
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tripCapsules.map((capsule) => (
              <CapsuleCard
                key={capsule.id}
                traveler={capsule.traveler}
                destination={capsule.destination}
                dates={capsule.dates}
                bestMoment={capsule.bestMoment}
                oneRegret={capsule.oneRegret}
                photo={capsule.photo}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
