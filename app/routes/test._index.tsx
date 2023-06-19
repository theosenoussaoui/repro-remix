import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Sub hello</h2>
      <Link to="/test/catalog">catalog</Link>
    </div>
  );
}
