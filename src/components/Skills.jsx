import React from 'react';

export default function Skills() {
  const skills = {
    "Front-End": [
      { name: "HTML", img: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" },
      { name: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "JavaScript", img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
      { name: "React", img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
      { name: "Vite.js", img: "https://vitejs.dev/logo.svg" },
      { name: "Redux", img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
      { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Bootstrap", img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" }
    ],
    "Back-End": [
      { name: "Laravel", img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
      { name: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "MySQL", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" }
    ],
    "Tools": [
      { name: "Git", img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
      { name: "GitHub", img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
      { name: "Jira", img: "https://seeklogo.com/images/J/jira-logo-FD39F795A7-seeklogo.com.png" },
      { name: "VSCode", img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
      { name: "Canva", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRoE5DcalLnKRtZfuKddbpQxE2rGNLe6jXw&s" },
      { name: "WordPress", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhNUS5emquOnd63nSxHHhN3Ow_16X_rdokA&s" }
    ]
  };

  return (
    <section id="Skills">
      {/* Title */}
      <div className="flex justify-center py-20">
        <h1 className="border-b-4 border-[#218873] p-3 text-5xl font-bold text-black">
          Skills
        </h1>
      </div>

      {/* Skill Categories */}
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h1 className="text-center text-3xl mb-16 font-bold text-black">{category}</h1>
          <div className="grid grid-cols-2 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4 sm:gap-8 md:px-20 mb-16">
            {items.map(({ name, img }) => (
              <div key={name} className="rounded-xl text-center shadow-lg py-6 px-4 font-mono overflow-hidden transition-transform duration-300 hover:scale-90 sm:w-full">
                <img src={img} className="h-20 w-20 mx-auto mb-4 object-contain" alt={`${name} Logo`} />
                <p className="text-sm font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
