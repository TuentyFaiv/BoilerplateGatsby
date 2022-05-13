import { useMemo } from "react";

export default function useQuery(search) {
  const searchParams = new URLSearchParams(search);
  const query = useMemo(() => ({}), []);

  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  return query;
}
