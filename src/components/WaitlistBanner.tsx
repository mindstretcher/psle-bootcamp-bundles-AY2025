import React from 'react';
import { Bell } from 'lucide-react';

const WAITLIST_URL = 'https://sprw.io/stt-d7RnQ';

const WaitlistBanner = () => {
  return (
    <div className="w-full bg-educational-blue text-white py-2">
      <div className="max-w-4xl mx-auto flex items-center justify-center px-4">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <span className="font-medium text-sm sm:text-base">
            2026 PSLE Bootcamps Coming Soon!
          </span>
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline hover:no-underline text-sm sm:text-base font-medium"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default WaitlistBanner;
