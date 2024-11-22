import {
  BookCheck,
  CircleGauge,
  Goal,
  Grid2x2Check,
  RefreshCcw,
} from "lucide-react";

// application feature's data
export const featuresData = [
  {
    title: "Personalized Dashboard",
    icon: <CircleGauge />,
    description:
      "Your goals, tasks, and progress all in one easy-to-navigate dashboard. See everything at a glance and stay motivated with real-time updates and insights.",
  },
  {
    title: "Goal Setting & Milestone Tracking",
    icon: <Goal />,
    description:
      "Break your big goals into smaller, manageable milestones. Track your progress step-by-step, and celebrate each win along the way!",
  },
  {
    title: "Data Visualization",
    icon: <Grid2x2Check />,
    description:
      "Get a clear picture of your progress with interactive charts and graphs. Visualize your achievements over time and stay motivated with tangible results.",
  },
  {
    title: "Task Reminders & Smart Notifications",
    icon: <BookCheck />,
    description:
      "Never miss a deadline! Receive timely reminders and smart notifications to help you stay focused and on top of your tasks.",
  },
  {
    title: "Sync Across Devices",
    icon: <RefreshCcw />,
    description:
      "Track your progress anytime, anywhere. Sync seamlessly across all your devices, ensuring you stay connected to your goals wherever you go.",
  },
];

// review's data
export const customerReviewsData = [
  {
    name: "Emily Johnson",
    twitterHandle: "@emily_johnson",
    review:
      "PathTracker has completely changed how I stay organized! The goal-setting feature is perfect for breaking down big tasks. Highly recommend it! ⭐⭐⭐⭐⭐",
    photo: "https://randomuser.me/api/portraits/women/1.jpg", // Placeholder photo
  },
  {
    name: "David Lee",
    twitterHandle: "@david_lee22",
    review:
      "I love how intuitive PathTracker is! The personalized dashboard keeps me motivated, and the milestone tracker helps me stay on top of my goals. #ProductivityHacks",
    photo: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder photo
  },
  {
    name: "Sarah Mitchell",
    twitterHandle: "@sarah_mitchell98",
    review:
      "The data visualization feature is amazing! I can easily track my progress, and the app's layout is so clean. PathTracker makes goal achievement fun and easy! 🙌",
    photo: "https://randomuser.me/api/portraits/women/2.jpg", // Placeholder photo
  },
  {
    name: "Ryan K.",
    twitterHandle: "@ryan_k_codes",
    review:
      "I’ve been using PathTracker for a month now, and I’m loving the task reminders. It keeps me on track with my deadlines, and syncing across devices is a game changer! ⏰ #StayOnTrack",
    photo: "https://randomuser.me/api/portraits/men/2.jpg", // Placeholder photo
  },
  {
    name: "Lisa Green",
    twitterHandle: "@lisagreen_",
    review:
      "As a busy professional, PathTracker has been a lifesaver! The smart notifications help me stay focused, and the progress journaling is a great way to reflect on my goals. 💡",
    photo: "https://randomuser.me/api/portraits/women/3.jpg", // Placeholder photo
  },
];

// pricingtable plan data
export const pricingPlansData = [
  {
    name: "Free",
    price: "$0",
    term: "/month",
    description: "Perfect for individuals starting out with goal tracking.",
    features: ["1 User", "Basic Dashboard", "Limited Goals", "Email Support"],
  },
  {
    name: "Pro",
    price: "$19",
    term: "/month",
    description:
      "Ideal for teams and professionals who need advanced features.",
    features: [
      "Up to 5 Users",
      "Advanced Dashboard",
      "Unlimited Goals",
      "Priority Support",
    ],
    customStyles: 'custom-btn'
  },
  {
    name: "Enterprise",
    price: "$49",
    term: "/month",
    description: "For large teams and enterprises with specialized needs.",
    features: [
      "Unlimited Users",
      "Customizable Dashboard",
      "Advanced Analytics",
      "24/7 Support",
    ],
  },
];
