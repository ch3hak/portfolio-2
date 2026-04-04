"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import { Button } from "../ui/button";

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "about-me" });

      cal("ui", {
        styles: { branding: { brandColor: "#141415" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace="about-me"
      data-cal-link="tanayvaswani/about-me"
      data-cal-config='{"layout":"month_view"}'
    >
      Click me
    </Button>
  );
};

export default CalEmbed;
