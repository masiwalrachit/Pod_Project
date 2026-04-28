import { MessageCircle, MapPin } from 'lucide-react';

interface QuestionCardProps {
  destination: string;
  question: string;
  author: { name: string; avatar: string };
  timePosted: string;
  answers: number;
  tags: string[];
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

export default function QuestionCard({
  destination,
  question,
  author,
  timePosted,
  answers,
  tags,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm card-hover cursor-pointer">
      {/* Destination Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-teal-100 text-teal-700 rounded-full">
          <MapPin className="w-3 h-3" />
          {destination}
        </span>
        {tags.map((tag) => (
          <span key={tag} className={tagMap[tag] || 'tag-blue'}>
            {tag}
          </span>
        ))}
      </div>

      {/* Question */}
      <p className="text-sm font-medium text-slate-800 leading-relaxed mb-4">{question}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-7 h-7 rounded-full ring-1 ring-slate-200"
          />
          <div>
            <p className="text-xs font-medium text-slate-700">{author.name}</p>
            <p className="text-[10px] text-slate-400">{timePosted}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <MessageCircle className="w-4 h-4" />
          <span className="font-medium">{answers} answers</span>
        </div>
      </div>
    </div>
  );
}
