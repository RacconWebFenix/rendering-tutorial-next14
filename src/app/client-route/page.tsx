"use client";

import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "../utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();

  const result = clientSideFunction();

  return (
    <div>
      <h1
        style={{
          color: theme.colors.primary,
        }}
      >
        <p>Client route rendered {result}</p>
      </h1>
    </div>
  );
}
