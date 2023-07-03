import Cookies from "cookies";
import { IncomingMessage, ServerResponse } from "http";
import cookie from "react-cookies";
import { v4 as uuidv4 } from "uuid";
import { ReactNode, useEffect, useState } from "react";

/**
 * Creates a cookie that lasts between browser visits. We are providing some sample functionality here but in a real
 * application you should use your persistent browser logic.
 *
 * @param context the context of the current session.
 */
export function getOrMakeDeviceId(context?: {
  req: IncomingMessage;
  res: ServerResponse;
}): string {
  if (context) {
    const cookies = new Cookies(context.req, context.res);
    const deviceId = cookies.get("deviceId");
    if (deviceId !== undefined) {
      return deviceId;
    }

    const id = uuidv4();
    const date = new Date();
    date.setFullYear(2050);
    cookies.set("deviceId", id, { expires: date, httpOnly: false });
    return id;
  } else {
    let id;
    if (typeof window == "undefined") {
      id = "next-build";
    } else {
      const device = cookie.load("deviceId");
      if (device !== undefined) return device;

      id = uuidv4();
      const date = new Date();
      date.setFullYear(2050);
      cookie.save("deviceId", id, { expires: date });
    }
    return id;
  }
}

/**
 * A component that only renders child components on the client side
 */
export function ClientOnly({ children }: { children?: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}