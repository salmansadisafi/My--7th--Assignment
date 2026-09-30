import React, { useState, useEffect } from "react";

import callIcon from "../../Assets/call.png";
import textIcon from "../../Assets/text.png";
import videoIcon from "../../Assets/video.png";
import meetupIcon from "../../Assets/meetup.png";

// timeline data
const initialTimelineData = [
  {id: 1, type: "Meetup",friendName: "Tom Baker",date: "March 29, 2026",},
 
  {id: 2,type: "Text",friendName: "Sarah Chen",date: "March 28, 2026",},

  {id: 3,type: "Meetup",friendName: "Olivia Martinez", date: "March 26, 2026",},

  {id: 4,type: "Meetup", friendName: "Sarah Chen",date: "March 21, 2026",},

  {id: 5, type: "Meetup",friendName: "Aisha Patel", date: "March 17, 2026", },
  
  {id: 6,type: "Video",friendName: "Marcus Johnson",date: "March 6, 2026", },

  {id: 7,type: "Video",friendName: "Ryan O'Brien",date: "February 24, 2026",},

  {id: 8,type: "Call",friendName: "Marcus Johnson",date: "March 19, 2026",},

  {id: 9,type: "Call",friendName: "Lisa Nakamura",date: "March 11, 2026",},

  { id: 10,type: "Call", friendName: "Sarah Chen",date: "March 11, 2026", },

  {id: 11,type: "Video",friendName: "Aisha Patel",date: "March 23, 2026",},
];

const Timeline = () => {
  const [interactions, setInteractions] = useState([]);

  // Load timeline data from localStorage
  useEffect(() => {
    try {
      const savedInteractions = localStorage.getItem(
        "timeline_interactions"
      );

      if (savedInteractions) {
        setInteractions(JSON.parse(savedInteractions));
      } else {
        setInteractions(initialTimelineData);

        localStorage.setItem(
          "timeline_interactions",
          JSON.stringify(initialTimelineData)
        );
      }
    } catch (error) {
      console.error("Failed to load timeline:", error);

      setInteractions(initialTimelineData);
    }
  }, []);


  // Icon selector
  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return (
          <img
            src={callIcon}
            alt="Call"
            className="w-5 h-5 object-contain"/>
        );

      case "Text":
        return (
          <img
            src={textIcon}
            alt="Text"
            className="w-5 h-5 object-contain" />);

      case "Video":
        return (
          <img
            src={videoIcon}
            alt="Video"
            className="w-5 h-5 object-contain"  />);

      case "Meetup":
        return (
          <img
            src={meetupIcon}
            alt="Meetup"
            className="w-5 h-5 object-contain"/> );

      default:
        return (
          <img
            src={callIcon}
            alt="Interaction"
            className="w-5 h-5 object-contain"/>);}};
            

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-[70vh]">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
        Timeline
      </h1>

      {/* Timeline List */}
      <div className="space-y-3">
        {interactions.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between
             hover:border-slate-200 transition-all" >
            <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-center">
                {getIcon(item.type)}
              </div>

              {/* Details */}
              <div>
                <h3 className="text-[20px] text-slate-700">
                  <span className="font-bold text-slate-900">
                    {item.type}
                  </span>{" "}
                  with{" "}
                  {item.friendName ||
                    item.title?.replace(
                      `${item.type} with `,"" )}
                </h3>

                <p className="text-[15px] font-extrabold text-slate-400 mt-0.5">
                  {item.date}
                </p>
              </div>
            </div>
          </div>))}
      </div>
    </div>
  );
};

export default Timeline;
