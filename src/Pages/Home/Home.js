import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      {allNews.map((news) => (
        <NewsSummaryCard key={news.id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Home;
