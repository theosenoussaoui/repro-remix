import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Catalog</h2>
      <Link to="/test">test</Link>
    </div>
  );
}
