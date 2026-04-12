"use client";

import { useEffect } from "react";

export function CalEmbed() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      // @ts-ignore
      C.Cal = C.Cal || function () {
        // @ts-ignore
        let cal = C.Cal as any;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            // @ts-ignore
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            // @ts-ignore
            p(cal.ns[namespace], ar);
            // @ts-ignore
            p(cal, ["initNamespace", namespace]);
          } else {
            // @ts-ignore
            p(cal, ar);
          }
          return;
        }
        // @ts-ignore
        p(cal, ar);
      };
      // @ts-ignore
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    window.Cal("init", "hirel-ai-demo", { origin: "https://app.cal.com" });

    // @ts-ignore
    window.Cal.ns["hirel-ai-demo"]("inline", {
      elementOrSelector: "#my-cal-inline-hirel-ai-demo",
      config: {
        layout: "week_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      },
      calLink: "hirelai/hirel-ai-demo",
    });

    // @ts-ignore
    window.Cal.ns["hirel-ai-demo"]("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "week_view",
    });
  }, []);

  return (
    <div className="w-full h-full min-h-[600px] overflow-auto rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-xl">
      <div 
        style={{ width: "100%", height: "100%", overflow: "scroll" }} 
        id="my-cal-inline-hirel-ai-demo"
      ></div>
    </div>
  );
}
