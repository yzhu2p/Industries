const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Imports
content = content.replace(
  'import React, { useState } from "react";',
  `import React, { useState } from "react";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faGear, faRobot, faBox, faMagnifyingGlass, faBolt, faWind, faEye, faFolder, faRotate, faSatelliteDish, faShield, faSparkles, faPlay, faFileLines, faIndustry, faBook, faChevronDown, faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";`
);

// 2. applications array icons
content = content.replace('icon: "⚙️",', 'icon: faGear,');
content = content.replace('icon: "🦾",', 'icon: faRobot,');
content = content.replace('icon: "📦",', 'icon: faBox,');
content = content.replace('icon: "🔍",', 'icon: faMagnifyingGlass,');

// 3. categories array icons
content = content.replace(
`const categories = [
  { name: "Robotics", icon: "🤖" },
  { name: "Motion Control", icon: "⚡" },
  { name: "Pneumatics", icon: "💨" },
  { name: "Vision Systems", icon: "👁️" },
  { name: "Control Panels", icon: "🗂️" },
  { name: "Drives & Motors", icon: "🔄" },
  { name: "Sensors", icon: "📡" },
  { name: "Safety", icon: "🛡️" },
];`,
`const categories = [
  { name: "Robotics", icon: faRobot },
  { name: "Motion Control", icon: faBolt },
  { name: "Pneumatics", icon: faWind },
  { name: "Vision Systems", icon: faEye },
  { name: "Control Panels", icon: faFolder },
  { name: "Drives & Motors", icon: faRotate },
  { name: "Sensors", icon: faSatelliteDish },
  { name: "Safety", icon: faShield },
];`
);

// 4. ApplicationCard icons
content = content.replace(
  '<span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{app.icon}</span>',
  '<span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}><FontAwesomeIcon icon={app.icon} /></span>'
);

content = content.replace(
  `      >
        ▾
      </span>`,
  `      >
        <FontAwesomeIcon icon={faChevronDown} />
      </span>`
);

content = content.replace(
  'Browse related products →',
  'Browse related products <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 4 }} />'
);

// 5. Featured products
content = content.replace(
  `                  justifyContent: "center",
                  fontSize: 48,
                }}
              >
                🤖
              </div>`,
  `                  justifyContent: "center",
                  fontSize: 48,
                }}
              >
                <FontAwesomeIcon icon={faRobot} />
              </div>`
);

content = content.replace(
  'View product →',
  'View product <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 4 }} />'
);

// 6. Product Categories
content = content.replace(
  '<span style={{ fontSize: 24 }}>{cat.icon}</span>',
  '<span style={{ fontSize: 24 }}><FontAwesomeIcon icon={cat.icon} /></span>'
);

// 7. New Series
content = content.replace(
  `                  justifyContent: "center",
                  fontSize: 36,
                }}
              >
                ✨
              </div>`,
  `                  justifyContent: "center",
                  fontSize: 36,
                }}
              >
                <FontAwesomeIcon icon={faSparkles} />
              </div>`
);

// 8. Videos
content = content.replace(
  `                      fontSize: 22,
                      paddingLeft: 4,
                    }}
                  >
                    ▶
                  </div>`,
  `                      fontSize: 22,
                      paddingLeft: 4,
                    }}
                  >
                    <FontAwesomeIcon icon={faPlay} style={{ marginLeft: 4 }} />
                  </div>`
);

// 9. Resources
content = content.replace(
  `          {([
            { label: "White Papers", icon: "📄", items: resources.whitepapers },
            { label: "Case Studies", icon: "🏭", items: resources.caseStudies },
            { label: "Guides", icon: "📘", items: resources.guides },
          ]).map((section) => (`,
  `          {([
            { label: "White Papers", icon: faFileLines, items: resources.whitepapers },
            { label: "Case Studies", icon: faIndustry, items: resources.caseStudies },
            { label: "Guides", icon: faBook, items: resources.guides },
          ]).map((section) => (`
);

content = content.replace(
  '<span style={{ fontSize: 18 }}>{section.icon}</span>',
  '<span style={{ fontSize: 18 }}><FontAwesomeIcon icon={section.icon} /></span>'
);

content = content.replace(
  '<span style={{ flexShrink: 0, marginTop: 1 }}>↗</span>',
  '<span style={{ flexShrink: 0, marginTop: 1 }}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>'
);

fs.writeFileSync('src/App.tsx', content);
