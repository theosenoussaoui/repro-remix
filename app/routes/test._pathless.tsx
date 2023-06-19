import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Pathless</h2>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
