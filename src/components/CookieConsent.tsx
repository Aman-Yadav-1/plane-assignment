import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 flex-1">
          With your consent, we use cookies to optimize performance and enable
          functions on this site.
        </p>

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-sm"
          >
            Accept required
          </Button>
          <Button
            size="sm"
            onClick={() => setIsVisible(false)}
            className="bg-plane-blue hover:bg-plane-blue-alt text-white text-sm"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
