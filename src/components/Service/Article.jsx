import { useState, useEffect } from "react";
import { supabase } from "./Fetch";

export const useArticle = (tabel) => {
  const [article, setArticle] = useState([]);
  const fetchData = async () => {
    const { data } = await supabase
      .from(tabel)
      .select("*")
      .limit(10)
      .order("id");
    setArticle(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data: article,
    fetchData,
  };
};
