export interface ProjectImage { src:string; title:string; caption:string; }
export interface Project { id:string; number:string; name:string; kind:string; color:string; title:string; summary:string; tags:string[]; challenge:string; contributions:string[]; stack:string; website?:string; access:string; images:ProjectImage[]; }
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
    "access": "Invite-only portal",
    "images": [
      {
        "src": "/projects/billwell/Onboarding.png",
        "title": "Profile onboarding",
        "caption": "A guided start to the medical-bill support experience."
      },
      {
        "src": "/projects/billwell/9.png",
        "title": "Insurance card upload",
        "caption": "A focused document step within the member onboarding flow."
      },
      {
        "src": "/projects/billwell/Main%20Case.png",
        "title": "Case creation",
        "caption": "Details and documents come together in a single case workflow."
      },
      {
        "src": "/projects/billwell/EDu.png",
        "title": "Concierge messaging",
        "caption": "A direct conversation alongside the case experience."
      }
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
    "access": "Invite-only portal",
    "images": [
      {
        "src": "/projects/hr-portal/Frame%20717.png",
        "title": "Admin dashboard",
        "caption": "A high-level view of people and operations."
      },
      {
        "src": "/projects/hr-portal/Frame%20591.png",
        "title": "Global timesheet",
        "caption": "Attendance records gathered in one operational view."
      },
      {
        "src": "/projects/hr-portal/Timesheet.png",
        "title": "Employee timesheet",
        "caption": "An individual view of time and activity."
      },
      {
        "src": "/projects/hr-portal/On%20Hover%20Bheaviour.png",
        "title": "Organization directory",
        "caption": "People and reporting lines in an interactive structure."
      },
      {
        "src": "/projects/hr-portal/Need%20Approval.png",
        "title": "Workspace branding",
        "caption": "A setup flow for the organization workspace."
      }
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
    "images": [],
    "website": "https://attackinsights.ai/"
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
    "website": "https://stage.app.seedfunds.ai/",
    "access": "Invite-only portal",
    "images": [
      {
        "src": "/projects/seedfunds/opt%201.png",
        "title": "Choose interests",
        "caption": "A personal starting point for relevant opportunities."
      },
      {
        "src": "/projects/seedfunds/Onboarding%20%281%29.png",
        "title": "Search radius setup",
        "caption": "Location preferences for nearby activities and support."
      },
      {
        "src": "/projects/seedfunds/map%20%281%29.png",
        "title": "Nearby activities",
        "caption": "Explore opportunities on a map."
      },
      {
        "src": "/projects/seedfunds/Dashbaord.png",
        "title": "Accountant AI",
        "caption": "Conversational guidance within the connected platform."
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
    "website": "https://app.fosterferret.ai/login",
    "access": "Invite-only portal",
    "images": [
      {
        "src": "/projects/foster/Dasboard%20With%20Data.png",
        "title": "Youth dashboard",
        "caption": "A clear home for activity and support."
      },
      {
        "src": "/projects/foster/Ask%20Ferret.png",
        "title": "Ask Ferret",
        "caption": "A conversational support experience."
      },
      {
        "src": "/projects/foster/Digital%20Vault.png",
        "title": "Digital vault",
        "caption": "Important information kept close at hand."
      },
      {
        "src": "/projects/foster/Consent.png",
        "title": "Parent consent",
        "caption": "A guided consent step for caregivers."
      }
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
    "website": "https://folium.stage-app.money-talks.ai/",
    "access": "Invite-only portal",
    "images": [
      {
        "src": "/projects/money-talks/Primary%20%28K%E2%80%932%29%20%281%29.jpg",
        "title": "Lesson overview",
        "caption": "A playful introduction to everyday money choices."
      },
      {
        "src": "/projects/money-talks/Primary%20%28K%E2%80%932%29.jpg",
        "title": "Learning activity",
        "caption": "A visual learning experience for younger students."
      },
      {
        "src": "/projects/money-talks/3.png",
        "title": "Concept check",
        "caption": "Interactive practice that reinforces a lesson."
      },
      {
        "src": "/projects/money-talks/Progress.jpg",
        "title": "Learning progress",
        "caption": "A view of milestones across the learning journey."
      }
    ]
  }
];
