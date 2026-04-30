import { faGear, faRobot, faBox, faMagnifyingGlass, faUserTie, faClock, faGraduationCap, faHeadset, faScrewdriverWrench, faWarehouse, faAward } from "@fortawesome/free-solid-svg-icons";
import abbLogo from "../images/abblogo.svg";
import omronLogo from "../images/omronlogo.svg";
import pcLogo from "../images/pclogo.svg";
import rittalLogo from "../images/rittallogo.svg";
import smcLogo from "../images/smclogo.svg";
import imgGoFa from "../images/CRB 15000 - GoFa-1_1x1-L.avif";
import imgTm from "../images/TM5-900_.png";
import imgMxh from "../images/img1-MXH-Z.webp";
import catRobotImg from "../images/cat_robot.png";
import catDriveImg from "../images/cat_drive.png";
import catSensorImg from "../images/cat_sensor.png";
import catPanelImg from "../images/cat_panel.png";
import prodControllerImg from "../images/prod_controller.png";

export const applications = [
  {
    id: "imt",
    title: "Injection Molding Machine Tending",
    icon: faGear,
    whatItDoes: "Collaborative or industrial robots load raw material and unload finished parts from injection molding machines.",
    outcomes: [
      "Eliminates operator exposure to hot molds and repetitive strain",
      "Matches machine cycle times perfectly for consistent output",
      "Flexible end-of-arm tooling accommodates varying shot sizes",
      "Seamless integration with machine safety gate I/O"
    ],
    partners: ["ABB", "OMRON", "SMC"],
    category: "Robotics",
  },
  {
    id: "part-removal",
    title: "Part Removal & Degating",
    icon: faRobot,
    whatItDoes: "High-speed automated side-entry or top-entry robots remove the sprue, degate, and sort finished parts.",
    outcomes: [
      "Sub-2-second removal cycles keep up with high-cavitation tooling",
      "Integrated sprue separation prevents downstream bottlenecks",
      "Vision checks confirm part presence before conveyor release",
      "Quick-change brackets allow SKU changeover in minutes"
    ],
    partners: ["SMC", "Phoenix Contact", "OMRON"],
    category: "Robotics",
  },
  {
    id: "downstream",
    title: "Downstream Packaging",
    icon: faBox,
    whatItDoes: "Automated bagging, boxing, and palletising at the end of the production line.",
    outcomes: [
      "Reduces labor reliance on repetitive counting and packing tasks",
      "Maintains consistent pack patterns with verified counts",
      "Easily handles mixed-SKUs with collaborative palletisers",
      "Climate-controlled panels ensure reliable operation"
    ],
    partners: ["ABB", "Rittal", "Phoenix Contact"],
    category: "Motion Control",
  },
  {
    id: "inspection",
    title: "Automated Inspection",
    icon: faMagnifyingGlass,
    whatItDoes: "100% inline machine vision inspection for defects, flash, short shots, and dimensional deviations.",
    outcomes: [
      "Triggers automatic rejection without human intervention",
      "Real-time OEE monitoring with direct defect statistics",
      "No programming required to teach new part profiles",
      "Multi-angle 3D imaging ensures complete quality control"
    ],
    partners: ["OMRON", "Phoenix Contact"],
    category: "Vision Systems",
  },
];

export const brandLogos: Record<string, string> = {
  "ABB": abbLogo,
  "OMRON": omronLogo,
  "SMC": smcLogo,
  "Phoenix Contact": pcLogo,
  "Rittal": rittalLogo
};

export const partners = [
  { name: "ABB", desc: "Industrial & collaborative robotics" },
  { name: "OMRON", desc: "Vision, motion & safety systems" },
  { name: "SMC", desc: "Pneumatics & fluid control" },
  { name: "Phoenix Contact", desc: "I/O, networking & power" },
  { name: "Rittal", desc: "Enclosures & thermal management" },
];

export const categories = [
  { name: "Robotics", image: catRobotImg },
  { name: "Motion Control", image: catDriveImg },
  { name: "Pneumatics", image: catSensorImg },
  { name: "Vision Systems", image: catSensorImg },
  { name: "Control Panels", image: catPanelImg },
  { name: "Drives & Motors", image: catDriveImg },
  { name: "Sensors", image: catSensorImg },
  { name: "Safety", image: catPanelImg },
];

export const featuredProductsBase = [
  {
    name: "ABB GoFa CRB 15000",
    brand: "ABB",
    desc: "10 kg payload, IP67 rated. Ideal for machine tending without safety fencing in plastics cells.",
    badge: "Featured",
    price: "42,500.00",
    stock: 82,
    inStock: true,
    image: imgGoFa,
  },
  {
    name: "OMRON TM Series",
    brand: "OMRON",
    desc: "Built-in camera and lighting for pick-and-place with inline part verification — no separate vision controller.",
    badge: "Featured",
    price: "38,200.00",
    stock: 0,
    inStock: false,
    image: imgTm,
  },
  {
    name: "SMC MXH Series",
    brand: "SMC",
    desc: "Compact guided actuator for high-cycle EOAT applications. Fits tight mould-area envelopes.",
    badge: "Featured",
    price: "850.00",
    stock: 23,
    inStock: true,
    image: imgMxh,
  },
];

export const featuredProducts = [
  ...featuredProductsBase.map(p => ({ ...p, id: p.name + "-1" })),
  ...featuredProductsBase.map(p => ({ ...p, id: p.name + "-2" })),
  ...featuredProductsBase.map(p => ({ ...p, id: p.name + "-3" })),
  ...featuredProductsBase.map(p => ({ ...p, id: p.name + "-4" })),
];

export const newSeries = [
  {
    name: "ABB OmniCore",
    brand: "ABB",
    label: "New Controller Platform",
    desc: "Unified controller for all ABB robots. Faster commissioning, built-in SafeMove.",
    image: prodControllerImg,
  },
  {
    name: "Phoenix Contact PLCnext",
    brand: "Phoenix Contact",
    label: "Open IPC Platform",
    desc: "Linux-based controller with IEC 61131-3 and Python/C++ support — built for IIoT edge compute.",
    image: prodControllerImg,
  },
  {
    name: "OMRON FH-3000",
    brand: "OMRON",
    label: "Vision Controller",
    desc: "4-camera synchronous processing at 480 fps. Handles the highest-speed inspection lines.",
    image: prodControllerImg,
  },
];

export const popularSeries = [
  {
    name: "L9 Miniature Circuit Breakers",
    brand: "ABB",
    desc: "Compact circuit breakers designed for reliable protection in tight spaces.",
  },
  {
    name: "CB-TM Circuit Breakers",
    brand: "Phoenix Contact",
    desc: "Thermomagnetic device circuit breakers with a compact design and modular expansion options.",
  },
  {
    name: "A-Series Contactors",
    brand: "ABB",
    desc: "High-performance motor protection and switching for industrial applications.",
  },
  {
    name: "SYA Pneumatic Valves",
    brand: "SMC",
    desc: "5-port solenoid valves offering high flow rates and low power consumption.",
  }
];

export const resources = {
  whitepapers: [
    "Optimising Injection Moulding Cell OEE",
    "Cobot vs. Industrial Robot: Plastics Cell ROI Guide",
    "Pneumatic vs. Electric Actuation in EOAT",
  ],
  caseStudies: [
    "Tier-1 Packaging Supplier: 38% Labour Reduction",
    "Automotive Plastics: Automated Part Removal Install",
    "Food-Grade Container Line: Vision Inspection Upgrade",
  ],
  guides: [
    "Robot Selection Guide for IMM Tending",
    "EOAT Design Basics for Injection Moulded Parts",
    "Safety Standards for Collaborative Robots (ISO TS 15066)",
  ],
};

export const whyChooseUs = [
  { title: "In-house Engineering Team", icon: faUserTie, desc: "Application engineers ready to solve complex challenges." },
  { title: "Short Lead Times", icon: faClock, desc: "Optimized supply chain for faster delivery." },
  { title: "Highly Trained Staff", icon: faGraduationCap, desc: "Certified experts across all major automation brands." },
  { title: "Live Chat Support", icon: faHeadset, desc: "Instant answers from real technical specialists." },
  { title: "Technical Support", icon: faScrewdriverWrench, desc: "Ongoing assistance to keep your line running." },
  { title: "Local Inventory", icon: faWarehouse, desc: "Stocked warehouses across Canada for rapid dispatch." },
  { title: "60+ Years of Experience", icon: faAward, desc: "Trusted by industry leaders since 1962." },
];
