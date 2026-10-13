window.PORTFOLIO_PROJECTS = [
  {
    "id": "hfc-calculator",
    "title": "HFC Signal-Loss Calculator",
    "type": "RF & Broadband",
    "status": "Working project",
    "summary": "A web-based tool for estimating coaxial attenuation using frequency, cable type, and length.",
    "problem": "RF attenuation varies with frequency, cable construction, and run length. I wanted a practical way to explore those relationships.",
    "work": "Built a browser-based calculator supporting RG-6, RG-59, RG-11 and larger hardline cable types, with frequency- and length-based inputs.",
    "skills": [
      "HFC / RF fundamentals",
      "Coaxial attenuation",
      "Web development",
      "Technical research"
    ],
    "feature": true,
    "visual": "rf",
    "links": [
      {
        "label": "Open live calculator",
        "url": "https://signallosscalculator.com"
      }
    ],
    "image": "",
    "alt": ""
  },
  {
    "id": "inventory-system",
    "title": "Inventory Management System",
    "type": "Web Applications",
    "status": "Deployed project",
    "summary": "A mobile-first inventory platform for organizing assets, photographing items, and maintaining searchable records.",
    "problem": "Cataloging hundreds of collection pieces required organized photos and an easy data-entry workflow.",
    "work": "Built a Flask application with group organization, multi-photo uploads, and API functionality; deployed behind Nginx and Gunicorn on Ubuntu with HTTPS. Developed an Android wrapper for hands-free Bluetooth-shutter photo capture.",
    "skills": [
      "Python / Flask",
      "REST API",
      "Ubuntu / Nginx",
      "HTTPS / DNS",
      "Android integration"
    ],
    "visual": "catalog",
    "links": [
      {
        "label": "View public repository",
        "url": "https://github.com/Andrew-Schmidt/Inventory"
      }
    ],
    "privateNote": "The live catalog may include family inventory data; a public live-demo link is intentionally withheld.",
    "image": "",
    "alt": ""
  },
  {
    "id": "streaming",
    "title": "OBS + MediaMTX Streaming Systems",
    "type": "Networking & Linux",
    "status": "Working lab setups",
    "summary": "Self-hosted video streaming setups using OBS, MediaMTX, and Linux networking.",
    "problem": "Getting a stream from an encoder to receiving devices required diagnosing protocol configuration, routing and firewall issues.",
    "work": "Configured OBS publishing to MediaMTX and worked through stream path errors, network segmentation, TCP connectivity, firewall rules and remote playback. Also developed setup documentation.",
    "skills": [
      "OBS Studio",
      "MediaMTX",
      "RTMP / HLS / RTSP",
      "Linux / systemd",
      "Network troubleshooting"
    ],
    "visual": "video",
    "links": [],
    "image": "",
    "alt": ""
  },
  {
    "id": "network-diagnostics",
    "title": "Network Diagnostics Lab",
    "type": "Networking & Linux",
    "status": "Live demo",
    "summary": "A Flask-based network diagnostics dashboard deployed to Ubuntu EC2 with an isolated public demo mode.",
    "problem": "Command-line packet captures are powerful but less convenient from another device.",
    "work": "Built a web interface for diagnostic workflows, then deployed it with Gunicorn, Nginx and HTTPS on AWS. Public demo mode is separated from private capture capabilities.",
    "skills": [
      "Ubuntu / EC2",
      "Python / Flask",
      "Nginx / HTTPS",
      "Network diagnostics"
    ],
    "visual": "packets",
    "links": [
      {
        "label": "Launch live demo",
        "url": "https://diagnostics.signallosscalculator.com/"
      }
    ],
    "image": "",
    "alt": ""
  },
  {
    "id": "dashcam",
    "title": "Linux Dashcam & Event Dashboard",
    "type": "Hardware & Software",
    "status": "In development",
    "summary": "A vehicle recording system combining a Linux PC, phone video, a physical event button, and web access.",
    "problem": "I wanted an affordable, serviceable recording system with the ability to protect important clips.",
    "work": "Developed a Linux-based dashboard and recording workflow, integrated an Arduino Leonardo input for event marking, and troubleshot recording and file-management issues.",
    "skills": [
      "Linux",
      "Arduino / HID",
      "Video workflows",
      "Python / Flask",
      "System integration"
    ],
    "visual": "dashcam",
    "links": [],
    "image": "",
    "alt": ""
  },
  {
    "id": "speed-testing",
    "title": "Network Speed Testing & Monitoring",
    "type": "RF & Broadband",
    "status": "Live data preview",
    "summary": "Interactive historical speed-test dashboard with real, sanitized measurements from a Linux monitoring server.",
    "problem": "A single speed-test result does not show how connectivity changes over time.",
    "work": "Worked on scheduled speed tests, JSON-based result storage, and graphing. Planned a compact gigabit-capable field tester with named sessions and long-term performance logging.",
    "skills": [
      "Network performance",
      "Linux automation",
      "Data visualization",
      "Diagnostics"
    ],
    "visual": "speed",
    "links": [],
    "image": "",
    "alt": ""
  },
  {
    "id": "solar-lora",
    "title": "Solar-Powered LoRa / Meshtastic Field Node",
    "type": "Hardware & Software",
    "status": "Planned build / component research",
    "summary": "A proposed off-grid 915 MHz LoRa mesh node for remote-area messaging and telemetry, with solar power and cold-weather protection.",
    "problem": "Remote locations need low-power communication hardware that can tolerate harsh Midwest winters.",
    "work": "Documented a proposed build using a Meshtastic-compatible LoRa board, solar panel, charge management, battery protection, and a weather-resistant enclosure. Hardware selection and field testing remain pending.",
    "skills": [
      "LoRa / Meshtastic",
      "Solar power",
      "Outdoor enclosures",
      "Power budgeting"
    ],
    "visual": "lora",
    "links": [],
    "image": "",
    "alt": ""
  },
  {
    "id": "midi-player",
    "title": "Web-Controlled MIDI Player",
    "type": "Hardware & Software",
    "status": "Concept / v1 design",
    "summary": "A modern Linux-based MIDI playback system with tempo control and web access.",
    "problem": "An aging dedicated MIDI player motivated a serviceable replacement with modern controls.",
    "work": "Designed a small Linux-hosted player concept centered on tempo control, browser operation, and potential physical transport buttons...",
    "skills": [
      "MIDI",
      "Linux",
      "Web interface",
      "Hardware design"
    ],
    "visual": "midi",
    "links": [],
    "image": "",
    "alt": ""
  }
];
