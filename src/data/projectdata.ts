export type ClientOrganization = {
  name: string;
  /** Public description of the organization itself. */
  org: string;
  sector: string;
  logo: string;
};

export const dataProject: ClientOrganization[] = [
  {
    name: "Department of Probation",
    org: "Ministry of Justice, Thailand",
    sector: "Public sector",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Emblem_of_the_Department_of_Probation.svg/250px-Emblem_of_the_Department_of_Probation.svg.png?20250602055823",
  },
  {
    name: "Royal Irrigation Department",
    org: "Ministry of Agriculture and Cooperatives, Thailand",
    sector: "Public sector",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Emblem_of_the_Royal_Irrigation_Department.svg",
  },
  {
    name: "Office of Insurance Commission",
    org: "Independent insurance regulator, Thailand",
    sector: "Regulatory",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_of_Office_of_Insurance_Commission.svg/330px-Logo_of_Office_of_Insurance_Commission.svg.png?20240822155556",
  },
];
