const anomalies = [
  {
    id: 1,
    category: "Water Supply",
    severity: "Critical",
    issue: "Pressure dropped 34% below baseline.",
    confidence: 98,
    time: "08:20 AM",
  },
  {
    id: 2,
    category: "Sanitation",
    severity: "High",
    issue: "47 complaints received in 2 hours.",
    confidence: 94,
    time: "08:38 AM",
  },
  {
    id: 3,
    category: "Water Supply",
    severity: "Medium",
    issue: "Duplicate complaints detected.",
    confidence: 87,
    time: "08:52 AM",
  },
  {
    id: 4,
    category: "Sanitation",
    severity: "Medium",
    issue: "GPS offline for garbage vehicle.",
    confidence: 91,
    time: "07:05 AM",
  },
];

export default anomalies;