import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/friends.json');

        if (!response.ok) {
          throw new Error('Failed to fetch friends data');
        }

        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error('Error loading friends:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();}, []);

  // Status color
  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'on-track':
        return 'bg-emerald-100 text-emerald-700';

      case 'almost due':
        return 'bg-amber-100 text-amber-700';

      case 'overdue':
        return 'bg-rose-100 text-rose-700';

      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Banner */}
 <section className="text-center max-w-2xl mx-auto mb-10">
  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Friends to keep close in your life
        </h1>

<p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
Your personal shelf of meaningful connections. Browse, tend,
    and nurture the relationships that matter most.
        </p>

<button className="inline-flex items-center gap-2 bg-[#244B3B] 
hover:bg-[#1b3a2e] text-white font-medium 
text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all">
  <PlusIcon className="w-4 h-4 stroke-[3]" />
          Add a Friend
        </button>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

        {/* Total Friends */}
        <div className="bg-white p-5 rounded-xl border border-slate-100
         shadow-sm text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            {friends.length}
          </h3>

          <p className="text-xs font-medium text-slate-500">
            Total Friends
          </p>
        </div>

        {/* On Track */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 
        shadow-sm text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            {friends.filter((friend) => friend.status === 'on-track').length}
          </h3>

          <p className="text-xs font-medium text-slate-500">
            On Track
          </p>
        </div>

        {/* Need Attention */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 
        shadow-sm text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            {friends.filter((friend) => friend.status !== 'on-track').length}
          </h3>

          <p className="text-xs font-medium text-slate-500">
            Need Attention
          </p>
        </div>

        {/* Interactions */}
        <div className="bg-white p-5 rounded-xl border border-slate-100
         shadow-sm text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            12
          </h3>

          <p className="text-xs font-medium text-slate-500">
            Interactions This Month
          </p>
        </div>

      </section>

      {/* Friends */}
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-6">
          Your Friends
        </h2>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#244B3B]"></div>
          </div>
        ) : (
          /* Friend Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {friends.map((friend) => (
              <Link
                key={friend.id}
                to={`/friend/${friend.id}`}
                className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md 
            transition-all p-5 flex flex-col items-center text-center group cursor-pointer" >

                {/* Avatar */}
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full object-cover mb-3 border
                   border-slate-100 group-hover:scale-105 transition-transform"
                />

                {/* Name */}
                <h3 className="font-bold text-slate-900 text-sm mb-0.5">
                  {friend.name}
                </h3>

                {/* Days Since Contact */}
                <p className="text-xs text-slate-400 mb-3">
                  {friend.days_since_contact}d ago
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1 mb-3">
                  {friend.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-emerald-50 text-emerald-700 text-[10px] 
                      font-semibold px-2 py-0.5 rounded uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <span
                  className={`mt-auto text-[11px] font-semibold px-3 py-1 rounded-full capitalize 
                    ${getStatusBadgeClass(
                    friend.status)}`}>
                  {friend.status}
                </span>

              </Link>))}

          </div> )}
      </section>

    </div> );};

export default Home;
