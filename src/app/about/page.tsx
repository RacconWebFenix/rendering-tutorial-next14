import { cookies } from "next/headers";
import { useState } from "react";

export default function AboutPage() {
  //   const [first, setfirst] = useState("");
  const store = cookies();

  const theme = store.get("theme");

  console.log(theme);

  console.log("About server component");

  return <h1>About page {new Date().toLocaleTimeString()}</h1>;
}
