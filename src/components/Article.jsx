import React from "react";
import "bulma/css/bulma.css";

export const Article = ({ title, date, text }) => {
  const dataTime = date.toISOString().slice(0, 10);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={dataTime} data-cy="date">
          {formattedDate}
        </time>
      </p>

      <p data-cy="text">{text}</p>
    </div>
  );
};
