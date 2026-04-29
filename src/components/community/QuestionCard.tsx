import { useState } from 'react';
import { MessageCircle, MapPin, ArrowBigUp, ArrowBigDown, Share, Send } from 'lucide-react';

interface Comment {
  id: number;
  author: { name: string; avatar: string };
  timePosted: string;
  text: string;
  upvotes: number;
}

interface QuestionCardProps {
  id?: number;
  destination: string;
  question: string;
  author: { name: string; avatar: string };
  timePosted: string;
  answers: number;
  tags: string[];
  initialUpvotes?: number;
  initialComments?: Comment[];
}

const tagMap: Record<string, string> = {
  Budget: 'tag-teal',
  Tips: 'tag-amber',
  Solo: 'tag-purple',
  Safety: 'tag-red',
  Transport: 'tag-blue',
  Food: 'tag-amber',
  Local: 'tag-teal',
};

// Default mock comments if none provided
const mockComments: Comment[] = [
  {
    id: 1,
    author: { name: "David Park", avatar: "https://i.pravatar.cc/36?img=22" },
    timePosted: "1 hour ago",
    text: "I did this last month! If you're going to Borghese and the Colosseum, the pass is absolutely worth it. It covers both and lets you skip the massive ticket lines.",
    upvotes: 14,
  },
  {
    id: 2,
    author: { name: "Elena Rossi", avatar: "https://i.pravatar.cc/36?img=1" },
    timePosted: "30 mins ago",
    text: "Make sure you still book your entry time slot for Borghese even with the pass! It's mandatory.",
    upvotes: 5,
  }
];

export default function QuestionCard({
  destination,
  question,
  author,
  timePosted,
  tags,
  initialUpvotes,
  initialComments
}: QuestionCardProps) {
  const [upvotes, setUpvotes] = useState(initialUpvotes || Math.floor(Math.random() * 50) + 10);
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState<Comment[]>(initialComments || mockComments);
  const [replyText, setReplyText] = useState('');

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (voteStatus === 'up') {
      setUpvotes(prev => prev - 1);
      setVoteStatus(null);
    } else {
      setUpvotes(prev => voteStatus === 'down' ? prev + 2 : prev + 1);
      setVoteStatus('up');
    }
  };

  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (voteStatus === 'down') {
      setUpvotes(prev => prev + 1);
      setVoteStatus(null);
    } else {
      setUpvotes(prev => voteStatus === 'up' ? prev - 2 : prev - 1);
      setVoteStatus('down');
    }
  };

  const submitReply = () => {
    if (!replyText.trim()) return;
    
    const newComment: Comment = {
      id: Date.now(),
      author: { name: "You", avatar: "https://i.pravatar.cc/36?img=33" },
      timePosted: "Just now",
      text: replyText,
      upvotes: 0,
    };
    
    setComments([newComment, ...comments]);
    setReplyText('');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-200 overflow-hidden mb-4 hover:border-slate-300">
      <div className="flex">
        {/* Voting Sidebar */}
        <div className="bg-slate-50/50 p-3 flex flex-col items-center gap-1 border-r border-slate-100 min-w-[50px]">
          <button onClick={handleUpvote} className={`p-1 rounded hover:bg-slate-200 transition-colors ${voteStatus === 'up' ? 'text-amber-500' : 'text-slate-400'}`}>
            <ArrowBigUp className="w-5 h-5" fill={voteStatus === 'up' ? 'currentColor' : 'none'} />
          </button>
          <span className={`text-xs font-bold ${voteStatus === 'up' ? 'text-amber-500' : voteStatus === 'down' ? 'text-indigo-500' : 'text-slate-700'}`}>
            {upvotes}
          </span>
          <button onClick={handleDownvote} className={`p-1 rounded hover:bg-slate-200 transition-colors ${voteStatus === 'down' ? 'text-indigo-500' : 'text-slate-400'}`}>
            <ArrowBigDown className="w-5 h-5" fill={voteStatus === 'down' ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="p-4 flex-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full ring-1 ring-slate-200" />
              <span className="text-xs font-medium text-slate-700">{author.name}</span>
              <span className="text-slate-300 text-xs">•</span>
              <span className="text-[10px] text-slate-500">{timePosted}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                <MapPin className="w-3 h-3" />
                {destination}
              </span>
            </div>
          </div>

          {/* Title / Question */}
          <h2 className="text-base font-bold text-slate-900 leading-snug mb-2 pr-4">{question}</h2>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {tags.map((tag) => (
              <span key={tag} className={`text-[10px] ${tagMap[tag] || 'tag-blue'}`}>
                {tag}
              </span>
            ))}
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-4 text-slate-500 mt-2">
            <button className="flex items-center gap-1.5 text-xs font-medium hover:bg-slate-100 px-2 py-1.5 rounded transition-colors">
              <MessageCircle className="w-4 h-4" />
              {comments.length} Comments
            </button>
            <button className="flex items-center gap-1.5 text-xs font-medium hover:bg-slate-100 px-2 py-1.5 rounded transition-colors" onClick={(e) => { e.stopPropagation(); /* share logic */ }}>
              <Share className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Comments Section */}
      {isExpanded && (
        <div className="border-t border-slate-100 bg-slate-50/80 p-4">
          {/* Reply Input */}
          <div className="flex gap-3 mb-6">
            <img src="https://i.pravatar.cc/36?img=33" alt="You" className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm" />
            <div className="flex-1 relative">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="What are your thoughts?"
                className="w-full text-sm px-4 py-3 pb-10 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none shadow-sm"
                rows={2}
              />
              <button 
                onClick={submitReply}
                disabled={!replyText.trim()}
                className="absolute bottom-2 right-2 p-1.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:hover:bg-amber-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <img src={comment.author.avatar} alt={comment.author.name} className="w-8 h-8 rounded-full" />
                  <div className="w-px h-full bg-slate-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-800">{comment.author.name}</span>
                    <span className="text-[10px] text-slate-400">{comment.timePosted}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{comment.text}</p>
                  
                  {/* Comment Actions */}
                  <div className="flex items-center gap-3 mt-2 text-slate-400">
                    <button className="flex items-center gap-1 hover:text-amber-500 transition-colors group">
                      <ArrowBigUp className="w-4 h-4 group-hover:fill-amber-500" />
                      <span className="text-[10px] font-bold">{comment.upvotes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-indigo-500 transition-colors group">
                      <ArrowBigDown className="w-4 h-4 group-hover:fill-indigo-500" />
                    </button>
                    <button className="text-[10px] font-bold hover:text-slate-600 transition-colors ml-2">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
