import Cookies from "cookies";
import { IncomingMessage, ServerResponse } from "http";
import cookie from "react-cookies";
import { v4 as uuidv4 } from "uuid";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import TextGraphic from "./TextGraphic";
import React from "react";

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

/**
 * Format text based on the following rules:
 * - Text surrounded by __ will be rendered with the green underline (i.e TextGraphic component)
 * - Newlines will be rendered as <br> tags (new lines are actually "\\n" here b/c users will type in \n)
 *
 * @param text text to format
 * @returns formatted react element
 */
export const formatText = (text: string | undefined): ReactElement => {
  if (text === undefined) return <></>;
  const parts = text.split("__");

  const formattedParts = parts.flatMap((part, index) => {
    if (index % 2 === 1) {
      return [<TextGraphic key={index}>{part}</TextGraphic>];
    } else {
      const lines = part.split("\\n");
      return lines
        .flatMap((line, i) => [
          <span key={index} style={{ whiteSpace: "pre" }}>
            {line}
          </span>,
          i !== lines.length - 1 && <br className="hidden lg:inline-block" />,
        ])
        .filter((l) => l !== undefined);
    }
  });

  return <>{formattedParts}</>;
};
