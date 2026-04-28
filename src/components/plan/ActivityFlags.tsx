import { AlertTriangle, Clock, Banknote, Shirt, CalendarClock, CameraOff } from 'lucide-react';
import { activityFlagsData } from '../../data/travelIntelligence';

export default function ActivityFlags({ activityName, time }: { activityName: string, time: string }) {
  // Find matching key
  const matchKey = Object.keys(activityFlagsData).find(key => activityName.toLowerCase().includes(key.toLowerCase()));
  if (!matchKey) return null;
  const flags = activityFlagsData[matchKey];

  let closedWarning = false;
  if (flags.operatingHours) {
    const hour = parseInt(time.split(':')[0], 10);
    if (flags.operatingHours.close) {
      const closeHour = parseInt(flags.operatingHours.close.split(':')[0], 10);
      if (hour >= closeHour) closedWarning = true;
    }
  }

  const showRealTime = flags.realTimeActual && flags.realTimeBlocked && (flags.realTimeActual - flags.realTimeBlocked >= 0.75);

  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {closedWarning && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 text-red-700 text-[10px] font-semibold border border-red-100">
          <AlertTriangle className="w-3 h-3" />
          ⚠ Usually closed at this time — check before going
        </span>
      )}
      {showRealTime && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-semibold border border-amber-100">
          <Clock className="w-3 h-3" />
          Travelers spend ~{flags.realTimeActual} hrs here incl. queue. You've blocked {flags.realTimeBlocked} hrs.
        </span>
      )}
      {flags.cashOnly && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
          <Banknote className="w-3 h-3" />
          Cash only
        </span>
      )}
      {flags.dressCode && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-semibold border border-amber-100">
          <Shirt className="w-3 h-3" />
          Dress code — cover shoulders & knees
        </span>
      )}
      {flags.advanceBooking && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-semibold border border-teal-100">
          <CalendarClock className="w-3 h-3" />
          Book in advance — fills up fast
        </span>
      )}
      {flags.noPhoto && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
          <CameraOff className="w-3 h-3" />
          No photography inside
        </span>
      )}
    </div>
  );
}
