"use client";
import "client-only";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dayjs from "@libs/dayjs";

export default function Bg() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(dayjs().tz().format("YYYY-MM-DD HH:mm:ss"));
  }, []);
  // ページの生成された時間を取得
  const pathName = usePathname();
  return (
    <p>
      <span>{time}</span> ? <span>{pathName}</span>
    </p>
  );
}
