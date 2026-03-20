
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import QuoteSection from '@/components/home/QuoteSection';
import InfiniteCarousel from '@/components/home/InfiniteCarousel';
import ToolsCarousel from '@/components/projects/ToolsCarousel';

  const tools1 = [


    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png', // Postman
    'https://avatars.githubusercontent.com/u/19369327?s=200&v=4', // RestAssured
    'https://miro.medium.com/v2/resize:fit:1400/1*musVE9e4bgjTWeoRmc-P_w.png', // Selenium
    'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/TestNG.png', // TestNG
    'https://avatars.githubusercontent.com/u/5879127?s=280&v=4', // Allure
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/intellij.png', // IntelliJ IDEA
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png', // Jira
    'https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png', // Figma
    'https://img.utdstc.com/icon/5c6/b29/5c6b29f8bc2051f62849b1e218dfe5bc190a197aedbdf7649d390dd0754df28f:200', // Google Sheets
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/960px-Google_Docs_2020_Logo.svg.png', // Google Docs
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1280px-2023_Obsidian_logo.svg.png', // Obsidian
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_2HF00IYMQ-1a8ttv92SpGeS2OVvUFDTFA&s', // Chrome Devtools 
  ];

    const tools2 = [
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png', // Git
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png', // GitHub
    'https://avatars.githubusercontent.com/u/44036562?s=280&v=4', // GitHub Actions
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', // Python
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c.png', // C
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png', // C++
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png', // Java
    'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png',  // HTML
    'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png', // CSS
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png', // Linux
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/matlab.png', // MATLAB
    'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg', // SQL Server
    ]

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <InfiniteCarousel />
      <div className="mt-16 py-6 bg-secondary overflow-hidden">
        <h3 className="text-center text-2xl font-bold mb-8">Technologies & Tools</h3>
        <ToolsCarousel tools={tools1} />
        <ToolsCarousel tools={tools2} />
      </div>
    </>
  );
};

export default Home;
