import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Root</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
