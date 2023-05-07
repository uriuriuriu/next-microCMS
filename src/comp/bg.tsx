"use client";
import { usePathname } from "next/navigation";

export default function Bg() {
  // ページの生成された時間を取得
  const time = new Date().toLocaleString();
  const pathName = usePathname();
  return (
    <p>
      <span>{time}</span> ? <span>{pathName}</span>
    </p>
  );
}
