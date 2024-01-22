import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect } from "react";

const Fathom = () => {
  const location = useLocation();

  useEffect(() => {
    load("TRUYKXEJ", {
      includedDomains: ["compressed.fm"],
    });
  }, []);

  useEffect(() => {
    trackPageview();
  }, [location.pathname, location.search]);

  return null;
};

export default Fathom;
