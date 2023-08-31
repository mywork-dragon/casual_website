import { ClientOnly, getOrMakeDeviceId } from "@/components/utils";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  return (
    <ClientOnly>
      <RegistrationPage />
    </ClientOnly>
  );
}

export function RegistrationPage() {
  const router = useRouter();
  window.localStorage.setItem("_causal_registered", "true");
  const deviceId = getOrMakeDeviceId();
  router.push(`https://tools.causallabs.io/QA?persistentId=${deviceId}`);
  return <></>;
}
