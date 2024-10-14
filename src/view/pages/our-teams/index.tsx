"use client";
import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface TeamList {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  phone: string;
}

export default function OurTeamsView() {
  const [TeamMember, setTeamMember] = useState<TeamList[]>([]);

  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        setTeamMember(data.results);
      } catch (error) {}
    };

    fetchTeamMember();
  }, []);

  return (
    <section className="w-full h-auto flex flex-col items-center  pt-24 pb-16 md:pt-32 bg-white px-4 md:px-0">
      <div className="flex flex-col items-center mb-8 text-center">
        <h2 className="flex items-center text-[#1a79af] text-lg md:text-xl font-bold mb-4">
          <TiThMenu className="mr-2" /> OUR TEAMS
        </h2>
        <h3 className="text-3xl md:text-[50px] font-semibold mb-8 md:mb-16">
          Meet The Team
        </h3>
      </div>
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {TeamMember.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-[#1a79af] hover:scale-105 hover:rotate-3 transition-all duration-300 transform"
          >
            <div className="p-6 text-center bg-gradient-to-r from-[#1a79af] to-[#58c8ef] hover:from-[#58c8ef] hover:to-[#1a79af] transition-all duration-300">
              <img
                src={member.picture.large}
                alt={member.name.first}
                className="rounded-full w-24 h-24 mx-auto border-4 border-white"
              />
            </div>
            <div className="p-6 text-center space-y-2">
              <h3 className="text-lg font-semibold">
                {`${member.name.first} ${member.name.last}`}
              </h3>
              <p className="text-sm text-gray-600">
                <MdEmail className="inline mr-2" /> {member.email}
              </p>
              <p className="text-sm text-gray-600">
                <FaPhoneSquareAlt className="inline mr-2" /> {member.phone}
              </p>
              <p className="text-sm text-gray-600">
                <FaMapMarkerAlt className="inline mr-2" />
                {member.location.city} , {member.location.state} ,
                {member.location.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
