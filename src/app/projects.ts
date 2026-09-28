export interface ProjectImage { src:string; title:string; caption:string; source:string; sourceUrl:string; }
export interface Project { id:string; number:string; name:string; kind:string; color:string; title:string; summary:string; tags:string[]; challenge:string; contributions:string[]; stack:string; figma?:string; website?:string; websiteLabel?:string; access:string; images:ProjectImage[]; }
export const projects: Project[] = [
  {
    "id": "billwell",
    "number": "01",
    "name": "Billwell",
    "kind": "HEALTHCARE · WEB + MOBILE",
    "color": "peach",
    "title": "Making medical bills make sense.",
    "summary": "From onboarding to dispute resolution. A connected experience across web, iOS, and Android.",
    "tags": [
      "Next.js",
      "React Native",
      "AWS Cognito"
    ],
    "challenge": "Make a complex medical-bill analysis and dispute workflow usable across web and mobile, while keeping authentication and document handling consistent.",
    "contributions": [
      "Built onboarding, case management, document workflows, and chat experiences.",
      "Developed React Native and Expo features for iOS and Android, including secure storage, camera/image workflows, and PDF experiences.",
      "Implemented AWS Cognito flows across Next.js Server Actions, API routes, and mobile: verification, password recovery, MFA, token refresh, protected sessions, rate limiting, and audit logging."
    ],
    "stack": "Next.js 16 · React 19 · React Native · Expo · TypeScript · Redux Toolkit · RTK Query · AWS Cognito · Upstash Redis · Zod · Cypress",
    "figma": "https://www.figma.com/design/hbD7ktThCV9uSNWIHAT7AH/Bill-Well--internal-?node-id=28002-245044",
    "access": "Invite-only portal",
    "images": [
      { "src": "/projects/billwell-case.jpg", "title": "Case detail", "caption": "A connected case view for bill review, concierge support, and dispute progress.", "source": "Figma design", "sourceUrl": "https://www.figma.com/design/hbD7ktThCV9uSNWIHAT7AH/Bill-Well--internal-?node-id=28663-56600" }
    ]
  },
  {
    "id": "hr",
    "number": "02",
    "name": "Human Resource Portal",
    "kind": "ENTERPRISE · MULTI-TENANT",
    "color": "lavender",
    "title": "Complex organizations. Clear workflows.",
    "summary": "A multi-tenant platform connecting people, schedules, approvals, and organizational structure.",
    "tags": [
      "Next.js",
      "Turborepo",
      "React Flow"
    ],
    "challenge": "Bring employee operations and organizational structure into a scalable multi-tenant platform.",
    "contributions": [
      "Engineered a multi-tenant HR platform within a Turborepo architecture.",
      "Built shift scheduling, employee lifecycle management, punch workflows, and leave approvals.",
      "Implemented interactive organizational charts and data-rich interfaces using React Flow, TanStack Table, and Recharts."
    ],
    "stack": "Next.js 16 · React 19 · TypeScript · Turborepo · Redux Toolkit · Tailwind CSS v4 · Radix UI · shadcn/ui · TanStack Table · React Flow · Recharts",
    "figma": "https://www.figma.com/design/iao4XJyPuB4uCa9ORfuFa6/Folium-HR-Platform?node-id=28001-47945",
    "access": "Invite-only portal",
    "images": [
      { "src": "/projects/hr-timesheet.jpg", "title": "Employee timesheet", "caption": "Attendance, schedule, and leave activity in the employee portal.", "source": "Figma design", "sourceUrl": "https://www.figma.com/design/iao4XJyPuB4uCa9ORfuFa6/Folium-HR-Platform?node-id=29291-68982" }
    ]
  },
  {
    "id": "attack",
    "number": "03",
    "name": "Attack Insights",
    "kind": "SECURITY · WEB APPLICATION",
    "color": "lime",
    "title": "A clearer view of the attack surface.",
    "summary": "Domain verification, vulnerability scans, and actionable security findings in one focused workflow.",
    "tags": [
      "Next.js SSR",
      "Redis",
      "RTK Query"
    ],
    "challenge": "Present complex domain and IP vulnerability information through a focused, understandable scanning workflow.",
    "contributions": [
      "Developed workflows for domain and IP vulnerability scanning and reviewing actionable findings.",
      "Implemented DNS TXT-record ownership verification, API-driven scan management, and result handling.",
      "Used server-side rendering, cached data access, and reusable dashboard patterns to improve reliability."
    ],
    "stack": "Next.js · React · TypeScript · RTK Query · Redis · REST APIs · Tailwind CSS · Ant Design",
    "access": "Invite-only portal",
    "images": [
      { "src": "/projects/attack-insights-home.jpg", "title": "Public website", "caption": "The Attack Insights platform introduction and external attack surface management story.", "source": "Live website", "sourceUrl": "https://attackinsights.ai/" }
    ],
    "website": "https://attackinsights.ai/",
    "websiteLabel": "Visit website"
  },
  {
    "id": "seedfunds",
    "number": "04",
    "name": "SeedFunds",
    "kind": "EDUCATION · WEB + MOBILE",
    "color": "mint",
    "title": "Opportunity, connected.",
    "summary": "A role-based platform connecting young people with learning, activities, services, and support.",
    "tags": [
      "React Native",
      "Expo",
      "Next.js"
    ],
    "challenge": "Bring youth, caregiver, vendor, and administrator experiences together in a connected web and mobile platform.",
    "contributions": [
      "Contributed reusable React and Next.js interfaces within a shared Turborepo architecture.",
      "Built React Native and Expo mobile experiences covering school, graduation, authenticated user journeys, navigation, API integration, and state management.",
      "Worked on cross-platform mobile performance and role-based product workflows."
    ],
    "stack": "React · Next.js · React Native · Expo · Expo Router · TypeScript · Turborepo · Redux Toolkit · RTK Query · React Navigation · Reanimated",
    "figma": "https://www.figma.com/design/zyq6i4V090E8z1tLtQbZcd/Seed-Fund-V2---internal-?node-id=28002-47996",
    "website": "https://stage.app.seedfunds.ai/",
    "websiteLabel": "Open staging portal",
    "access": "Invite-only portal",
    "images": [
      {
        "src": "/projects/seedfunds-orders.jpg",
        "title": "Orders & enrollments",
        "caption": "Youth portal: activities, service enrollments, and order tracking.",
        "source": "Figma design",
        "sourceUrl": "https://www.figma.com/design/zyq6i4V090E8z1tLtQbZcd/Seed-Fund-V2---internal-?node-id=28119-67053"
      }
    ]
  },
  {
    "id": "foster",
    "number": "05",
    "name": "Foster Ferret",
    "kind": "YOUTH SUPPORT · WEB + MOBILE",
    "color": "blue",
    "title": "Support that stays connected.",
    "summary": "Connected web and mobile experiences for youth, caregivers, and the people supporting them.",
    "tags": [
      "React Native",
      "Expo",
      "RTK Query"
    ],
    "challenge": "Make role-based youth-support journeys accessible across web, iOS, and Android.",
    "contributions": [
      "Contributed reusable React and Next.js interfaces for role-based youth-support workflows.",
      "Built cross-platform React Native and Expo experiences with authenticated journeys, navigation, and API integration.",
      "Connected mobile state management and performance with shared platform services."
    ],
    "stack": "React · Next.js · React Native · Expo · TypeScript · Turborepo · Redux Toolkit · RTK Query · React Navigation · Reanimated",
    "figma": "https://www.figma.com/design/1woD8b8Wjcwmc1blqlaBYT/FOSTER-FERRET-V2.0?node-id=6782-109717",
    "website": "https://app.fosterferret.ai/login",
    "websiteLabel": "Open portal",
    "access": "Invite-only portal",
    "images": [
      { "src": "/projects/foster-ask-ferret.jpg", "title": "Ask Ferret", "caption": "A direct support conversation within the youth portal.", "source": "Figma design", "sourceUrl": "https://www.figma.com/design/1woD8b8Wjcwmc1blqlaBYT/FOSTER-FERRET-V2.0?node-id=9024-13708" }
    ]
  },
  {
    "id": "money",
    "number": "06",
    "name": "Money Talks",
    "kind": "FINANCIAL EDUCATION · WEB",
    "color": "sand",
    "title": "Making financial learning approachable.",
    "summary": "Role-based learning experiences for students, teachers, organizations, and administrators.",
    "tags": [
      "React",
      "Next.js",
      "TypeScript"
    ],
    "challenge": "Support financial education with clear learning journeys and role-based interfaces for county programs.",
    "contributions": [
      "Contributed React and Next.js interfaces for a role-based education platform.",
      "Worked on reusable learning, lesson-reflection, dashboard, and onboarding interfaces within the education product suite.",
      "Integrated REST APIs and shared state-management patterns in a Turborepo architecture."
    ],
    "stack": "React · Next.js · TypeScript · Turborepo · Redux Toolkit · RTK Query · REST APIs",
    "figma": "https://www.figma.com/design/YVa91t4quOJnZ9B2Gvt0e9/Money-Talks?node-id=28004-47945",
    "website": "https://folium.stage-app.money-talks.ai/",
    "websiteLabel": "Open staging portal",
    "access": "Invite-only portal",
    "images": [
      { "src": "/projects/money-talks-dashboard.jpg", "title": "Student dashboard", "caption": "Milestones and financial learning domains presented as an engaging journey.", "source": "Figma design", "sourceUrl": "https://www.figma.com/design/YVa91t4quOJnZ9B2Gvt0e9/Money-Talks?node-id=28550-7230" }
    ]
  }
];
