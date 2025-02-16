import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const ContributorCard = () => {
  return (
    <div className="w-full">
      <div className="min-h-[300px] bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-300 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col">
        <h2 className="font-bold text-3xl sm:text-4xl mb-4 text-white text-center drop-shadow-lg">
          Wachangiaji
        </h2>
        {/* Safu ya Avatar */}
        <div className="flex flex-wrap justify-start gap-4 sm:gap-4 lg:gap-6">
          {[
            "lughatausi",
            "laughing-joker",
            "blackhacker120",
            "ChrissTuruka",
            "wenses",
            "FESG3002",
          ].map((username, index) => (
            <motion.div
              key={index}
              className="relative rounded-full overflow-hidden"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)", // Golden glow
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-gray-700 hover:border-amber-500 rounded-full transition-all duration-300">
                  <AvatarImage
                    src={`https://avatars.githubusercontent.com/${username}`}
                    alt={`Mchangiaji ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
              </a>
            </motion.div>
          ))}
          {/* Instagram Avatars */}
          {[
            { username: "thisismasako", image: "/Masako.jpg" },
            { username: "np_graphicshot", image: "/Allen.jpg" },
          ].map((user, index) => (
            <motion.div
              key={index + 100} // Ensure unique keys
              className="relative rounded-full overflow-hidden"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)", // Golden glow
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <a
                href={`https://www.instagram.com/${user.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-gray-700 hover:border-amber-500 rounded-full transition-all duration-300">
                  <AvatarImage
                    src={user.image}
                    alt={`Mchangiaji ${user.username}`}
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback>
                    {user.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
