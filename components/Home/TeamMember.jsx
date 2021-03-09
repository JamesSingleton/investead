import Image from "next/image";
import Link from "next/link";

const TeamMember = ({ avatar, name, title, slug }) => (
  <li>
    <Link className="h-full" as={`/team/${slug}`} href="/team/[slug]">
      <a>
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
      </a>
    </Link>
  </li>
);

export default TeamMember;
