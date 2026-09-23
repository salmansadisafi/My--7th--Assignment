import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
  BellIcon,
  ArchiveBoxIcon,
  TrashIcon,
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
        setLoading(false);}); }, [id]);

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

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left Side */}
        <div>
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
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1
                ${getStatusClass(
                friend.status)}`}>

              {friend.status}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {friend.tags?.map((tag,index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm mt-3">
              {friend.bio}
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Email: {friend.email}
            </p>
          </div>

          {/* Sidebar Buttons */}
          <div className="mt-3 space-y-2">

            <button className="w-full p-3 bg-white rounded-xl shadow">
              <BellIcon className="w-4 inline mr-2" />
              Snooze 2 Weeks
            </button>

            <button className="w-full p-3 bg-white rounded-xl shadow">
              <ArchiveBoxIcon className="w-4 inline mr-2" />
              Archive
            </button>

            <button className="w-full p-3 bg-white rounded-xl shadow text-red-500">
              <TrashIcon className="w-4 inline mr-2" />
              Delete
            </button>

          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">
                {friend.days_since_contact}
              </h2>

              <p className="text-xs text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">
                {friend.goal}
              </h2>

              <p className="text-xs text-gray-500">
                Goal Days
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">
                {friend.next_due_date}
              </h2>

              <p className="text-xs text-gray-500">
                Next Due
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
