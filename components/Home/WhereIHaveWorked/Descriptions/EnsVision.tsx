import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Developed responsive and scalable web applications using the MERN stack , employing RESTful APIs and GraphQL for efficient data retrieval and manipulation.",
      keywords: ["MERN stack", "RESTful APIs", "GraphQL"],
    },
    {
      text: "Implemented advanced front-end features with React.js and Next.js, including state management with Redux, context API, and hooks, ensuring optimal performance.",
      keywords: ["React.js", "Next.js", "Redux","context API","hooks"],
    },
    {
      text: "Designed and optimized MongoDB databases, leveraging aggregation pipelines, indexing strategies, and schema design for efficient data storage and retrieval.",
      keywords: ["MongoDB","aggregation pipelines","schema design"],
    },
    {
      text: "Implemented continuous integration/continuous deployment (CI/CD) pipelines to streamline development processes.",
      keywords: ["streamline", "(CI/CD)"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Developer <span className="text-AAsecondary">@ SDC-SI</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://silive.in/", "_blank")}
          >
            www.silive.in
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
