import { useMemo } from "react";

import type { ObjStrCustom } from "@typing/types";

export default function useQuery(search: string) {
  const query: ObjStrCustom<string> = useMemo(() => (
    Object.fromEntries(new URLSearchParams(search).entries())
  ), [search]);

  return query;
}
