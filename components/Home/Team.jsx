import TeamMember from "./TeamMember";
import teamMembers from "@/data/team";

const Team = () => (
  <div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet our team
          </h2>
          <p className="text-xl text-gray-500">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            {teamMembers.map(({ avatar, name, title }) => (
              <TeamMember
                key={`${name}_${title}`}
                avatar={avatar}
                name={name}
                title={title}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
