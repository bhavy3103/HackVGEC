import React from "react";
import SentApprovals from "./sentApprovals";

const pendingReqData = [
  {
    topic: "Achievement",
    title: "1st rank in CodeMonk Coding Event",
    description: "I participated in CodeMonk Coding Event at GTU University and Got 1st rank among 200 participants",
    faculty: "J.R.D",
    date: "10/10/2020"
  },
];

export default function PendingReq() {
  return (
    <div className="pendingreq">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {pendingReqData.map((item) => (
          <SentApprovals
            topic={item.topic}
            title={item.title}
            description={item.description}
            faculty={item.faculty}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
