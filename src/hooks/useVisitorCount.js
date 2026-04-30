import { useEffect, useState } from "react";
import { supabase } from "../pages/Blogs/supabase-config";

const SESSION_KEY = "portfolio_visitor_id";

function getOrCreateSessionId() {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function getDeviceInfo() {
  const ua = navigator.userAgent;

  const isTablet = /Tablet|iPad/i.test(ua);
  const isMobile = /Mobi|Android/i.test(ua);
  const device = isTablet ? "Tablet" : isMobile ? "Mobile" : "Desktop";

  let browser = "Unknown";
  if (/Edg/i.test(ua))          browser = "Edge";
  else if (/Chrome/i.test(ua))  browser = "Chrome";
  else if (/Safari/i.test(ua))  browser = "Safari";
  else if (/Firefox/i.test(ua)) browser = "Firefox";
  else if (/MSIE|Trident/i.test(ua)) browser = "IE";

  let os = "Unknown";
  if (/Windows NT 10.0/i.test(ua))      os = "Windows 10";
  else if (/Windows NT 6.3/i.test(ua))  os = "Windows 8.1";
  else if (/Windows NT 6.2/i.test(ua))  os = "Windows 8";
  else if (/Windows NT 6.1/i.test(ua))  os = "Windows 7";
  else if (/Windows NT 5.1/i.test(ua))  os = "Windows XP";
  else if (/Mac OS X (10[._]\d+)/i.test(ua)) os = ua.match(/Mac OS X (10[._]\d+)/i)[0].replace(/_/g, ".");
  else if (/Mac OS X/i.test(ua))        os = "macOS";
  else if (/Android/i.test(ua))         os = "Android";
  else if (/iPhone|iPad|iOS/i.test(ua)) os = "iOS";
  else if (/Linux/i.test(ua))           os = "Linux";

  const referrer = document.referrer || "Direct";

  // More descriptive device name
  const device_name = `${os} ${browser} ${device}`;

  return { device, browser, os, referrer, device_name };
}


async function getLocationInfo() {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    return {
      country: data.country_name || "Unknown",
      city: data.city || "Unknown",
      region: data.region || "Unknown"
    };
  } catch {
    return { country: "Unknown", city: "Unknown", region: "Unknown" };
  }
}

export function useVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const track = async () => {
      // Don't count the site owner's own visits
      const { data: { session } } = await supabase.auth.getSession();
      const isOwner = !!session;

      if (!isOwner) {
        const sessionId = getOrCreateSessionId();
        const { device, browser, os, referrer, device_name } = getDeviceInfo();
        const { country, city, region } = await getLocationInfo();

        await supabase.from("visitors").upsert(
          {
            session_id: sessionId,
            last_seen: new Date().toISOString(),
            browser,
            os,
            device,
            device_name,
            country,
            city,
            region,
            referrer,
          },
          { onConflict: "session_id" }
        );
      }

      // Always fetch the current total
      const { count: total } = await supabase
        .from("visitors")
        .select("*", { count: "exact", head: true });

      setCount(total);
    };

    track();
  }, []);

  return count;
}
