import { Project } from "@prisma/client";
import { useEffect, useState } from "react";

export function useGetProjects() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRefetch, setIsRefetch] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const refetch = () => {
    setIsRefetch(true);
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setIsRefetch(false);
        setLoading(false);
      });
  }, [isRefetch]);

  return { data, loading, error, refetch };
}
