export type TeamMember = {
  name: string;
  linkedin: string;
  posClass: string;
  tailType: "left" | "right";
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Kowshika S",
    linkedin: "https://www.linkedin.com/in/kowshika-selvakumar/",
    posClass: "left-[6.5%] top-[43.5%]",
    tailType: "right",
  },
  {
    name: "Abdul Munaf Z",
    linkedin: "https://www.linkedin.com/in/abdul-munaf-z-6380a8251/",
    posClass: "left-[36%] top-[40.5%]",
    tailType: "right",
  },
  {
    name: "Prathiksha J",
    linkedin: "https://www.linkedin.com/in/prathiksha-j-169715354/",
    posClass: "right-[8.5%] top-[43.5%]",
    tailType: "left",
  },
];
