import Bg from "@comp/bg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Bg />
      <div>{children}</div>
    </div>
  );
}
