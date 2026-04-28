import { MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CommunityQAWidget() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mt-6">
      <div className="flex items-center gap-2 mb-3">
        <MessageCircle className="w-4 h-4 text-teal-600" />
        <h3 className="font-bold text-sm text-slate-800">Community Insights</h3>
      </div>
      <p className="text-xs text-slate-500 mb-4">Travelers are discussing places in your itinerary.</p>
      
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors group">
          <h4 className="text-sm font-semibold text-slate-800 mb-1 group-hover:text-teal-700 transition-colors">
            Is the Colosseum underground tour worth the extra cost?
          </h4>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-slate-500">12 answers</span>
            <Link to="/community" className="text-teal-600 hover:text-teal-800 flex items-center gap-1 text-xs font-semibold">
              Read thread <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
        
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors group">
          <h4 className="text-sm font-semibold text-slate-800 mb-1 group-hover:text-teal-700 transition-colors">
            Dress code strictness at Vatican in summer?
          </h4>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-slate-500">8 answers</span>
            <Link to="/community" className="text-teal-600 hover:text-teal-800 flex items-center gap-1 text-xs font-semibold">
              Read thread <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
