import Image from "next/image";
import Page from "@/components/Layout/Page";
import { WEBSITE_NAME } from "@/lib/constants";

const TeamMemberPage = ({ member }) => {
  return (
    <Page title={`${member.name} - ${member.title} | ${WEBSITE_NAME}`}>
      <div className="my-16 bg-gradient-to-r from-lightBlue-500 to-indigo-600 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            ></div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div
                style={{ fontSize: 0 }}
                className="rounded-xl shadow-xl overflow-hidden"
                // className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
              >
                <Image
                  className="object-cover lg:h-full lg:w-full"
                  src={member.avatar}
                  alt={`Photo of ${member.name}`}
                  height="464"
                  width="378.4"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <div>
                <h1 className="mt-6 text-4xl font-medium text-white">
                  {member.name}
                </h1>
                <p className="text-white">{member.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export async function getStaticProps({ params }) {
  const teamMembers = require("@/data/team");

  const member = teamMembers.find((obj) => obj.slug === params.slug);

  return {
    props: {
      member,
    },
  };
}

export async function getStaticPaths() {
  const teamMembers = require("@/data/team");

  return {
    paths: teamMembers?.map(({ slug }) => `/team/${slug}` ?? []),
    fallback: true,
  };
}

export default TeamMemberPage;
