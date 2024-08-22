"use client";
import { useEffect } from "react";
import { load } from "@fingerprintjs/botd";
import { useCookies } from "react-cookie";
import { set } from "zod";

const BotDetection = () => {
  const [cookie, setCookie] = useCookies(["isBot"]);
  useEffect(() => {
    load()
      .then((botd) => botd.detect())
      .then((result) => {
        setCookie("isBot", "false");
      })
      .catch((error) => {
        setCookie("isBot", "true");
      });
  }, []);

  return null;
};

export default BotDetection;
