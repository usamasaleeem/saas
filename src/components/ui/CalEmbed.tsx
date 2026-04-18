"use client";

import { useEffect } from "react";
 
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal: any;
  }
}

export function CalEmbed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let isMounted = true;

    /* eslint-disable prefer-const, @typescript-eslint/no-explicit-any, prefer-rest-params */
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;

      C.Cal =
        C.Cal ||
        function () {
          let cal: any = C.Cal;
          let ar = arguments;

          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            script.async = true;
            d.head.appendChild(script);
            cal.loaded = true;
          }

          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];

            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }

          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // INIT
    window.Cal("init", "hirel-ai-demo", {
      origin: "https://app.cal.com",
    });

    // INLINE EMBED (FORCE CALENDAR VIEW)
    window.Cal.ns["hirel-ai-demo"]("inline", {
      elementOrSelector: "#cal-embed",
      calLink: "hirelai/hirel-ai-demo",
      config: {
        layout: "month_view", // 👈 FIX: show calendar first
        useSlotsViewOnSmallScreen: true, // 👈 FIX: boolean
      },
    });

    // UI CONFIG
    window.Cal.ns["hirel-ai-demo"]("ui", {
      theme: "light",
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full h-[700px] rounded-xl border bg-background shadow-xl overflow-hidden">
      <div id="cal-embed" className="w-full h-full" />
    </div>
  );
}