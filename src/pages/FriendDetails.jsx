import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
  BellIcon,
  ArchiveBoxIcon,
  TrashIcon,
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const FriendDetails = () => {
  const { id } = useParams();

  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  // Friend data load
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load friends data");}

        return res.json();})
      .then((data) => {
        const person = data.find(
          (item) => item.id === parseInt(id));

        setFriend(person);
        setLoading(false);})

      .catch((err) => {
        console.error(err);
        setLoading(false);});}, 
        [id]);

  // Status color
  const getStatusClass = (status) => {
    if (status === "overdue") {
      return "bg-red-100 text-red-600";}

    if (status === "almost due") {
      return "bg-yellow-100 text-yellow-700";}

    if (status === "on-track") {
      return "bg-green-100 text-green-700";}

    return "bg-gray-100 text-gray-600";};

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <div className="w-10 h-10 border-4 border-green-200 border-t-green-700 rounded-full animate-spin"></div>
      </div>);}

  // Friend not found
  if (!friend) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl text-red-500 font-bold">
          Friend Not Found!
        </h2>

        <Link
          to="/"
          className="text-green-700 underline mt-3 inline-block">
          Back to Home
        </Link>
      </div>);}

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ==LEFT SIDE ===*/}
        <div>

          {/* Friend Info */}
          <div className="bg-white p-6 rounded-xl shadow text-center">

            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto object-cover"/>

            <h1 className="text-xl font-bold mt-3">
              {friend.name}
            </h1>

            {/* Status */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${getStatusClass(
                friend.status
              )}`}>
              {friend.status}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>))}
            </div>


            {/* Bio */}
            <p className="text-sm mt-3">
              {friend.bio}
            </p>

            {/* Email */}
            <p className="text-xs text-gray-400 mt-2">
              Email: {friend.email}
            </p>
          </div>

          {/* Sidebar Buttons */}
          <div className="mt-3 space-y-2">

            <button className="w-full p-3 bg-white rounded-xl shadow hover:bg-gray-50 transition">
              <BellIcon className="w-4 inline mr-2" />
              Snooze 2 Weeks
            </button>

            <button className="w-full p-3 bg-white rounded-xl shadow hover:bg-gray-50 transition">
              <ArchiveBoxIcon className="w-4 inline mr-2" />
              Archive
            </button>

            <button className="w-full p-3 bg-white rounded-xl shadow text-red-500 hover:bg-red-50 transition">
              <TrashIcon className="w-4 inline mr-2" />
              Delete
            </button>

          </div>
        </div>

        {/* == RIGHT SIDE == */}
        <div className="lg:col-span-2">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">

            {/* Days Since Contact */}
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">
                {friend.days_since_contact}
              </h2>

              <p className="text-xs text-gray-500">
                Days Since Contact
              </p>
            </div>

            {/* Goal */}
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">
                {friend.goal}
              </h2>

              <p className="text-xs text-gray-500">
                Goal Days
              </p>
            </div>

            {/* Next Due */}
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">
                {friend.next_due_date}
              </h2>

              <p className="text-xs text-gray-500">
                Next Due
              </p>
            </div>

          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mt-6">

            <div>
              <h3 className="font-bold text-emerald-900 text-base">
                Relationship Goal
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Connect every{" "}
                <span className="font-bold text-gray-800">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <button className="px-3 py-1.5 bg-gray-100 text-xs font-semibold text-gray-700 rounded-md hover:bg-gray-200 transition">
              Edit
            </button>

          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mt-6">

            <h3 className="font-bold text-emerald-900 text-base mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3">

              {/* Call */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition">
                <PhoneIcon className="w-6 h-6 text-gray-700 mb-1" />

                <span className="text-xs font-semibold text-gray-700">
                  Call
                </span>
              </button>

              {/* Text */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition">
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-gray-700 mb-1" />

                <span className="text-xs font-semibold text-gray-700">
                  Text
                </span>
              </button>

              {/* Video */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition">
                <VideoCameraIcon className="w-6 h-6 text-gray-700 mb-1" />

                <span className="text-xs font-semibold text-gray-700">
                  Video
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div> );
};

export default FriendDetails;
