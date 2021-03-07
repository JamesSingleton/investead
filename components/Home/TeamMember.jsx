import Image from "next/image";

const TeamMember = ({ avatar, name, title }) => (
  <li>
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Image
        className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
        src={avatar}
        alt={`Phone of ${title} ${name}`}
        height="64"
        width="64"
      />
      <div className="font-medium text-lg leading-6 space-y-1">
        <h3>{name}</h3>
        <p className="text-indigo-600">{title}</p>
      </div>
    </div>
  </li>
);

export default TeamMember;
