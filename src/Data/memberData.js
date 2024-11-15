const occupations = [
  'Software Engineer', 'Doctor', 'Lawyer', 'Business Owner', 
  'Architect', 'Teacher', 'Accountant', 'Sales Manager',
  'Marketing Director', 'Civil Engineer', 'Bank Manager', 'Consultant'
];

export const fullMemberData = [
  {
      id: 1,
      name: "Gunwa Emida Adesina",
      position: "Chairman",
      email: "emidasinang@gmail.com",
      phone: "+234 803 441 7149",
      joinDate: "2021-01-15",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-11-15",
      occupation: "Business",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwac1.jpg",
      contributions: 42,
      lastActive: "2024-11-01"
  },
  {
      id: 2,
      name: "Gunwa Afolashade Adeniyi",
      position: "Chairperson",
      email: "pics11@example.com",
      phone: "+234 802 234 5672",
      joinDate: "2021-02-20",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1981-11-12",
      occupation: "Business",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa011.jpg",
      contributions: 38,
      lastActive: "2024-11-02"
  },
  {
      id: 3,
      name: "Bobagunwa",
      position: "Vice Chairman",
      email: "pics13@example.com",
      phone: "+234 803 234 5673",
      joinDate: "2021-03-10",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-03-15",
      occupation: "Lawyer",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa logo.jpg",
      contributions: 35,
      lastActive: "2024-10-15"
  },
  {
      id: 4,
      name: "Gunwa Adebambo Ademoye",
      position: "Secretary",
      email: "pics14@example.com",
      phone: "+234 804 234 5674",
      joinDate: "2021-04-05",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-11-11",
      occupation: "Business Owner",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa004.jpg",
      contributions: 45,
      lastActive: "2024-11-03"
  },
  {
      id: 5,
      name: "Gunwa Abiola Nuberu",
      position: "Treasurer",
      email: "pics16@example.com",
      phone: "+234 805 234 5675",
      joinDate: "2021-05-12",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-05-30",
      occupation: "Architect",
      location: "Lagos",
      imageUrl: "/Images/gunwa15.jpg",
      contributions: 40,
      lastActive: "2024-11-04"
  },
  {
      id: 6,
      name: "Gunwa Faith Ibukunola",
      position: "Secretary II",
      email: "pics3@example.com",
      phone: "+234 806 234 5676",
      joinDate: "2021-06-18",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-06-10",
      occupation: "Teacher",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa00.jpg",
      contributions: 33,
      lastActive: "2024-10-20"
  },
  {
      id: 7,
      name: "Gunwa Olasunkanmi Odusi",
      position: "Social Sec.",
      email: "pics12_7@example.com",
      phone: "+234 807 234 5677",
      joinDate: "2021-07-05",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-07-15",
      occupation: "Accountant",
      location: "Lagos",
      imageUrl: "/Images/gunwa006.jpg",
      contributions: 37,
      lastActive: "2024-11-05"
  },
  {
      id: 8,
      name: "Gunwa Bukola Adeoye",
      position: 'Social Sec II',
      email: "pics11_8@example.com",
      phone: "+234 808 234 5678",
      joinDate: "2021-08-15",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-08-20",
      occupation: "Sales Manager",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa002.jpg",
      contributions: 41,
      lastActive: "2024-11-06"
  },
  {
      id: 9,
      name: 'Gunwa Idera Sikiru',
      position: 'P.R.O',
      email: "iderasikiru@yahoomail.com",
      phone: "+234 8075410701",
      joinDate: "2021-09-20",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1981-04-03",
      occupation: "Politics/Farmer",
      location: "Ago Iwoye",
      imageUrl: "/Images/idera.jpg",
      contributions: 39,
      lastActive: "2024-11-07"
  },
  {
      id: 10,
      name: 'Gunwa Olatunbosun Adebanjo',
      position: 'Welfare',
      email: "pics14_10@example.com",
      phone: "+234 810 234 5680",
      joinDate: "2021-10-25",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-10-05",
      occupation: "Civil Engineer",
      location: "United Kingdom",
      imageUrl: "/Images/gunwa001.jpg",
      contributions: 36,
      lastActive: "2024-11-08"
  },
  {
      id: 11,
      name: 'Gunwa Deborah Hamzat',
      position: 'Welfare II',
      email: "pics16_11@example.com",
      phone: "+234 811 234 5681",
      joinDate: "2021-11-30",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-11-10",
      occupation: "Bank Manager",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa010.jpg",
      contributions: 44,
      lastActive: "2024-11-09"
  },
  {
      id: 12,
      name: 'Gunwa Adekunle Oshilalu',
      position: 'Project Sec.',
      email: "pics3_12@example.com",
      phone: "+234 812 234 5682",
      joinDate: "2021-12-05",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-12-15",
      occupation: "Consultant",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa003.jpg",
      contributions: 38,
      lastActive: "2024-11-10"
  },
  {
      id: 13,
      name: 'Gunwa Abiola Ajasa',
      position: 'Project Sec II',
      email: "pics12_13@example.com",
      phone: "+234 813 234 5683",
      joinDate: "2022-01-10",
      status: "active",
      birthYear: "1980",
      dateOfBirth: "1980-01-20",
      occupation: "Software Engineer",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa2.jpg",
      contributions: 41,
      lastActive: "2024-11-11"
  },
  {
      id: 14,
      name: 'Gunwa Kazzim Adewunmi',
      position: 'Chief Whip',
      email: "pics11_14@example.com",
      phone: "+234 814 234 5684",
      joinDate: "2022-02-15",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-02-25",
      occupation: "Doctor",
      location: "Lagos",
      imageUrl: "/Images/gunwa005.jpg",
      contributions: 35,
      lastActive: "2024-11-12"
  },
  {
      id: 15,
      name: "Owoseni Oluwasesan Motunrayo",
      position: 'Member',
      email: "owoseni0816@gmail.com",
      phone: "+234 812 385 5252",
      joinDate: "2022-03-20",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-03-05",
      occupation: "Software Developer",
      location: "Lagos",
      imageUrl: "/Images/guwa0.jpg",
      contributions: 43,
      lastActive: "2024-11-13"
  },
  {
      id: 16,
      name: "Gunwa Sesan Adekoya",
      email: "pics14_16@example.com",
      phone: "+234 816 234 5686",
      joinDate: "2022-04-25",
      status: "active",
      birthYear: "1980",
      dateOfBirth: "1980-04-15",
      occupation: "Business Owner",
      location: "Lagos",
      imageUrl: "/Images/gunwam01.jpg",
      contributions: 37,
      lastActive: "2024-11-14"
  },
  {
      id: 17,
      name: "Gunwa Olufemi Adetowubo",
      email: "pics16_17@example.com",
      phone: "+234 817 234 5687",
      joinDate: "2022-05-30",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-05-20",
      occupation: "Architect",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwam02.jpg",
      contributions: 40,
      lastActive: "2024-11-15"
  },
  {
      id: 18,
      name: "Gunwa Adenike Oduneye",
      email: "pics3_18@example.com",
      phone: "+234 818 234 5688",
      joinDate: "2022-06-05",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-06-25",
      occupation: "Teacher",
      location: "Lagos",
      imageUrl: "/Images/gunwam03.jpg",
      contributions: 34,
      lastActive: "2024-11-16"
  },
  {
      id: 19,
      name: "Gunwa Ganiu Bello",
      email: "pics12_19@example.com",
      phone: "+234 819 234 5689",
      joinDate: "2022-07-10",
      status: "active",
      birthYear: "1980",
      dateOfBirth: "1980-07-30",
      occupation: "Accountant",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwam04.jpg",
      contributions: 42,
      lastActive: "2024-11-17"
  },
  {
      id: 20,
      name: "Gunwa Olumide Oguntimehin",
      email: "pics11_20@example.com",
      phone: "+234 820 234 5690",
      joinDate: "2022-08-15",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-08-05",
      occupation: "Sales Manager",
      location: "Lagos",
      imageUrl: "/Images/gunwam05.jpg",
      contributions: 36,
      lastActive: "2024-11-18"
  },
  {
      id: 21,
      name: "Gunwa Wasiu Olalekan",
      email: "pics13_21@example.com",
      phone: "+234 821 234 5691",
      joinDate: "2022-09-20",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-09-10",
      occupation: "Marketing Director",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa06.jpg",
      contributions: 39,
      lastActive: "2024-11-19"
  },
  {
      id: 22,
      name: "Gunwa Adeniyi Onanaye ",
      email: "pics14_22@example.com",
      phone: "+234 822 234 5692",
      joinDate: "2022-10-25",
      status: "active",
      birthYear: "1980",
      dateOfBirth: "1980-10-15",
      occupation: "Civil Engineer",
      location: "Lagos",
      imageUrl: "/Images/gunwa07.jpg",
      contributions: 41,
      lastActive: "2024-11-20"
  },
  {
      id: 23,
      name: "Gunwa Wasiu Olalekan",
      email: "pics16_23@example.com",
      phone: "+234 823 234 5693",
      joinDate: "2022-11-30",
      status: "active",
      birthYear: "1981",
      dateOfBirth: "1981-11-20",
      occupation: "Bank Manager",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa08.jpg",
      contributions: 35,
      lastActive: "2024-11-21"
  },
  {
      id: 24,
      name: "Gunwa Oloruntoba Maba",
      email: "pics3_24@example.com",
      phone: "+234 824 234 5694",
      joinDate: "2022-12-05",
      status: "active",
      birthYear: "1982",
      dateOfBirth: "1982-12-25",
      occupation: "Consultant",
      location: "Lagos",
      imageUrl: "/Images/gunwa09.jpg",
      contributions: 43,
      lastActive: "2024-11-22"
  },
  {
      id: 25,
      name: "Gunwa Oluwaseun Ogunsemowo",
      email: "pics12_25@example.com",
      phone: "+234 825 234 5695",
      joinDate: "2023-01-10",
      status: "active",
      birthYear: "1980",
      dateOfBirth: "1980-01-30",
      occupation: "Software Engineer",
      location: "Ago Iwoye",
      imageUrl: "/Images/gunwa03.jpg",
      contributions: 37,
      lastActive: "2024-11-23"
  },
  {
    id: 26,
    name: "Gunwa Oluwatosin Odubanjo",
    email: "pics11_26@example.com",
    phone: "+234 826 234 5696",
    joinDate: "2023-02-15",
    status: "active",
    birthYear: "1981",
    dateOfBirth: "1981-02-20",
    occupation: "Doctor",
    location: "Lagos",
    imageUrl: "/Images/gunwa04.jpg",
    contributions: 40,
    lastActive: "2024-11-24"
},
{
    id: 27,
    name: "Gunwa Olubukola Samba ",
    email: "pics13_27@example.com",
    phone: "+234 827 234 5697",
    joinDate: "2023-03-20",
    status: "active",
    birthYear: "1982",
    dateOfBirth: "1982-03-25",
    occupation: "Lawyer",
    location: "Ago Iwoye",
    imageUrl: "/Images/gunwa05.jpg",
    contributions: 34,
    lastActive: "2024-11-25"
},
{
    id: 28,
    name: "Gunwa Oluwatosin Ariyibi",
    email: "pics14_28@example.com",
    phone: "+234 828 234 5698",
    joinDate: "2023-04-25",
    status: "active",
    birthYear: "1980",
    dateOfBirth: "1980-04-30",
    occupation: "Business Owner",
    location: "Lagos",
    imageUrl: "/Images/gunwam5.jpg",
    contributions: 42,
    lastActive: "2024-11-26"
},
{
    id: 29,
    name: "Gunwa Adeshola Bashorun",
    email: "pics16_29@example.com",
    phone: "+234 829 234 5699",
    joinDate: "2023-05-30",
    status: "active",
    birthYear: "1981",
    dateOfBirth: "1981-05-15",
    occupation: "Architect",
    location: "Ago Iwoye",
    imageUrl: "/Images/gunwam4.jpg",
    contributions: 36,
    lastActive: "2024-11-27"
},
{
    id: 30,
    name: "Gunwa Olufunke Afolabi",
    email: "pics3_30@example.com",
    phone: "+234 830 234 5700",
    joinDate: "2023-06-05",
    status: "active",
    birthYear: "1982",
    dateOfBirth: "1982-06-10",
    occupation: "Teacher",
    location: "Lagos",
    imageUrl: "/Images/gunwam6.jpg",
    contributions: 39,
    lastActive: "2024-11-28"
},
{
    id: 31,
    name: "Gunwa Oluwabukola Oyefeso ",
    email: "pics12_31@example.com",
    phone: "+234 831 234 5701",
    joinDate: "2023-07-10",
    status: "active",
    birthYear: "1980",
    dateOfBirth: "1980-07-15",
    occupation: "Accountant",
    location: "Ago Iwoye",
    imageUrl: "/Images/gunwam7.jpg",
    contributions: 41,
    lastActive: "2024-11-28"
},
{
    id: 32,
    name: "Gunwa Taiwo Adeyemo",
    email: "pics11_32@example.com",
    phone: "+234 832 234 5702",
    joinDate: "2023-08-15",
    status: "active",
    birthYear: "1981",
    dateOfBirth: "1981-08-20",
    occupation: "Sales Manager",
    location: "Lagos",
    imageUrl: "/Images/gunwam8.jpg",
    contributions: 35,
    lastActive: "2024-11-29"
},
{
    id: 33,
    name: "Gunwa Afolashade Ogunshiji",
    email: "pics13_33@example.com",
    phone: "+234 833 234 5703",
    joinDate: "2023-09-20",
    status: "active",
    birthYear: "1982",
    dateOfBirth: "1982-09-25",
    occupation: "Marketing Director",
    location: "Ago Iwoye",
    imageUrl: "/Images/gunwam10.jpg",
    contributions: 43,
    lastActive: "2024-11-30"
},
{
    id: 34,
    name: "Gunwa Ogede Azeez",
    email: "pics14_34@example.com",
    phone: "+234 834 234 5704",
    joinDate: "2023-10-25",
    status: "active",
    birthYear: "1980",
    dateOfBirth: "1982-10-30",
    occupation: "Civil Engineer",
    location: "Lagos",
    imageUrl: "/Images/guwa01.jpg",
    contributions: 37,
    lastActive: "2024-12-01"
},
{
    id: 35,
    name: "Gunwa  Ibikunle Abudu",
    email: "pics16_35@example.com",
    phone: "+234 803 718 3693",
    joinDate: "2023-11-30",
    status: "active",
    birthYear: "1981",
    dateOfBirth: "1981-11-14",
    occupation: "Bank Manager",
    location: "Ago Iwoye",
    imageUrl: "/Images/guwa02.jpg",
    contributions: 40,
    lastActive: "2024-12-02"
},
{
    id: 36,
    name: "Gunwa Idowu Idris",
    email: "pics3_36@example.com",
    phone: "+234 906 199 2299",
    joinDate: "2023-12-05",
    status: "active",
    birthYear: "1982",
    dateOfBirth: "1982-12-10",
    occupation: "Consultant",
    location: "Lagos",
    imageUrl: "/Images/guwa03.jpg",
    contributions: 34,
    lastActive: "2024-12-03"
},
{
    id: 37,
    name: "Gunwa Sakiru Adebanjo",
    email: "pics12_37@example.com",
    phone: "+234 905 114 2313",
    joinDate: "2024-01-10",
    status: "active",
    birthYear: "1980",
    dateOfBirth: "1980-01-15",
    occupation: "Software Engineer",
    location: "Ago Iwoye",
    imageUrl: "/Images/guwa04.jpg",
    contributions: 42,
    lastActive: "2024-12-04"
},
{
    id: 38,
    name: "Gunwa Abiodun Adelaja",
    email: "pics11_38@example.com",
    phone: "+234 838 234 5708",
    joinDate: "2024-02-15",
    status: "active",
    birthYear: "1981",
    dateOfBirth: "1981-02-20",
    occupation: "Doctor",
    location: "Lagos",
    imageUrl: "/Images/guwa05.jpg",
    contributions: 36,
    lastActive: "2024-12-05"
},
{
    id: 39,
    name: "Gunwa Oluseye Odumala",
    email: "pics13_39@example.com",
    phone: "+234 839 234 5709",
    joinDate: "2024-03-20",
    status: "active",
    birthYear: "1982",
    dateOfBirth: "1982-03-25",
    occupation: "Lawyer",
    location: "Ago Iwoye",
    imageUrl: "/Images/guwa06.jpg",
    contributions: 39,
    lastActive: "2024-12-06"
},
{
    id: 40,
    name: "Gunwa Fasasi Owodunni",
    email: "pics14_40@example.com",
    phone: "+234 840 234 5710",
    joinDate: "2024-04-25",
    status: "active",
    birthYear: "1980",
    dateOfBirth: "1980-04-30",
    occupation: "Business Owner",
    location: "Lagos",
    imageUrl: "/Images/guwa07.jpg",
    contributions: 41,
    lastActive: "2024-12-07"
},
{
    id: 41,
    name: "Gunwa Alh. Nurudeen Adeniyi",
    email: "pics16_41@example.com",
    phone: "+234 841 234 5711",
    joinDate: "2024-05-30",
    status: "active",
    birthYear: "1981",
    dateOfBirth: "1981-05-15",
    occupation: "Architect",
    location: "Ago Iwoye",
    imageUrl: "/Images/guwa08.jpg",
    contributions: 35,
    lastActive: "2024-12-08"
},
{
    id: 42,
    name: "Gunwa Aolat Abdul",
    email: "pics3_42@example.com",
    phone: "+234 842 234 5712",
    joinDate: "2024-06-05",
    status: "active",
    birthYear: "1982",
    dateOfBirth: "1982-06-10",
    occupation: "Teacher",
    location: "Lagos",
    imageUrl: "/Images/guwa09.jpg",
    contributions: 43,
    lastActive: "2024-12-09"
},
{
    id: 43,
    name: "Bobagunwa Asiwaju",
    email: "pics12_43@example.com",
    phone: "+234 843 234 5713",
    joinDate: "2024-07-10",
    status: "active",
    birthYear: "1980",
    dateOfBirth: "1980-07-15",
    occupation: "Accountant",
    location: "Ago Iwoye",
    imageUrl: "/Images/gunwa logo.jpg",
    contributions: 37,
    lastActive: "2024-12-10"
},
{
    id: 44,
    name: "Bobagunwa Asiwaju",
    email: "pics14_44@example.com",
    phone: "+234 844 234 5714",
    joinDate: "2024-08-15",
    status: "active",
    birthYear: "1981",
    dateOfBirth: "1981-11-12",
    occupation: "Civil Engineer",
    location: "Lagos",
    imageUrl: "/Images/gunwa logo.jpg",
    contributions: 39,
    lastActive: "2024-11-07"
},
{
    id: 45,
    name: "Bobagunwa Asiwaju",
    email: "pics16_45@example.com",
    phone: "+234 845 234 5715",
    joinDate: "2024-09-01",
    status: "active",
    birthYear: "1982",
    dateOfBirth: "1982-11-13",
    occupation: "Consultant",
    location: "Ago Iwoye",
    imageUrl: "/Images/gunwa logo.jpg",
    contributions: 36,
    lastActive: "2024-11-08"
}
];
    
export const memberStats = {
  // Total members count
  totalMembers: fullMemberData.length,
  
  // Active members count
  activeMembers: fullMemberData.filter(m => m.status === "active").length,
  
  // Recent members (last 30 days from Nov 10, 2024)
  newMembers30Days: fullMemberData.filter(m => {
    const joinDate = new Date(m.joinDate);
    const referenceDate = new Date('2024-11-10');
    const thirtyDaysAgo = new Date(referenceDate);
    thirtyDaysAgo.setDate(referenceDate.getDate() - 30);
    return joinDate >= thirtyDaysAgo;
  }).length,

  // Age-based statistics
  ageStats: (() => {
    const referenceDate = new Date('2024-11-10');
    
    const calculateAge = (birthDate) => {
      const birth = new Date(birthDate);
      let age = referenceDate.getFullYear() - birth.getFullYear();
      const monthDiff = referenceDate.getMonth() - birth.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && referenceDate.getDate() < birth.getDate())) {
        age--;
      }
      return age;
    };

    const ages = fullMemberData.map(member => calculateAge(member.dateOfBirth));
    
    return {
      averageAge: Math.round(ages.reduce((sum, age) => sum + age, 0) / ages.length),
      youngestAge: Math.min(...ages),
      oldestAge: Math.max(...ages),
      ageGroups: {
        '40-42': ages.filter(age => age >= 40 && age <= 42).length,
        '43-44': ages.filter(age => age >= 43 && age <= 44).length,
        '45+': ages.filter(age => age >= 45).length
      },
      membersByMonth: fullMemberData.reduce((acc, member) => {
        const birthMonth = new Date(member.dateOfBirth).getMonth();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
        acc[monthNames[birthMonth]] = (acc[monthNames[birthMonth]] || 0) + 1;
        return acc;
      }, {})
    };
  })(),
  
  // Members by location
  membersByLocation: {
    'Ago Iwoye': fullMemberData.filter(m => m.location === 'Ago Iwoye').length,
    'Lagos': fullMemberData.filter(m => m.location === 'Lagos').length,
    'United Kingdom': fullMemberData.filter(m => m.location === 'United Kingdom').length
  },
  
  // Members by birth year (kept for historical reference)
  membersByYear: fullMemberData.reduce((acc, member) => {
    acc[member.birthYear] = (acc[member.birthYear] || 0) + 1;
    return acc;
  }, {}),
  
  // Members by status
  membersByStatus: {
    active: fullMemberData.filter(m => m.status === "active").length,
    inactive: fullMemberData.filter(m => m.status === "inactive").length
  },
  
  // Average contributions
  averageContributions: Math.round(
    fullMemberData.reduce((sum, member) => sum + member.contributions, 0) / 
    fullMemberData.length
  ),
  
  // High contributors (above 40 contributions)
  highContributors: fullMemberData.filter(m => m.contributions > 40).length,

  // Birthday upcoming (next 30 days)
  upcomingBirthdays: fullMemberData.filter(member => {
    const birthday = new Date(member.dateOfBirth);
    const referenceDate = new Date('2024-11-10');
    
    // Set birthday to current year
    birthday.setFullYear(referenceDate.getFullYear());
    
    // If birthday has passed this year, check for next year
    if (birthday < referenceDate) {
      birthday.setFullYear(referenceDate.getFullYear() + 1);
    }
    
    // Calculate days until birthday
    const daysDiff = Math.ceil((birthday - referenceDate) / (1000 * 60 * 60 * 24));
    
    return daysDiff <= 30;
  }).map(member => ({
    name: member.name,
    date: member.dateOfBirth,
    daysUntil: Math.ceil(
      (new Date(member.dateOfBirth).setFullYear(2024) - new Date('2024-11-10')) / 
      (1000 * 60 * 60 * 24)
    )
  }))
};