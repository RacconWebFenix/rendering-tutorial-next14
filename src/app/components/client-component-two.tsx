"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("Batmam");

  return <h1>Client Component Two</h1>;
};
