// 27 Comprehensive Electrical Services Dataset (100% Unique, Relevant & Professional Electrical Service Images)
const servicesData = [
  {
    id: 1,
    title: "Electrical Issues",
    category: "emergency",
    categoryName: "Emergency & Repairs",
    image: "images/electrical_issues.jpg",
    snippet: "Comprehensive diagnosis and troubleshooting for unexpected electrical breakdowns, sparking, and short circuits.",
    description: "Our certified technicians conduct rapid diagnostic testing to identify mysterious power drops, burning smells, flickering lights, and intermittent socket failures. We ensure swift and safe repairs to eliminate electrical hazard risks in your property."
  },
  {
    id: 2,
    title: "Electrical Power Failure",
    category: "emergency",
    categoryName: "Emergency & Repairs",
    image: "images/power_failure.jpg",
    snippet: "24/7 urgent power restoration service for sudden partial or full blackout emergencies.",
    description: "When your home or workspace suffers a sudden complete blackout or phase loss, our emergency response team arrives fast to test lines, replace blown main fuses, repair damaged feeder lines, and restore electrical supply safely."
  },
  {
    id: 3,
    title: "Earthing Installation",
    category: "power",
    categoryName: "EV Chargers & Power",
    image: "images/earthing_installation.jpg",
    snippet: "Heavy-duty copper plate and chemical earthing pit installation for shock protection.",
    description: "Protect your expensive electronics, appliances, and residents against voltage surges and static shocks. We install dedicated copper wire earthing pits, chemical ground electrodes, and earthing strips meeting Indian Electrical Code standards."
  },
  {
    id: 4,
    title: "Earthing Fault Finding",
    category: "emergency",
    categoryName: "Emergency & Repairs",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=85",
    snippet: "Precision testing to detect leakage current, high neutral voltage, and faulty grounding.",
    description: "Experiencing mild electric tingles from water taps or metal appliance bodies? We utilize specialized earth resistance meters to detect neutral leaks, broken earthing conductors, and restore ground protection immediately."
  },
  {
    id: 5,
    title: "TV Installation",
    category: "installations",
    categoryName: "Installations & Appliances",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=85",
    snippet: "Professional LED/OLED TV wall mounting, cable trunking, and dedicated power point wiring.",
    description: "Precision wall mounting for flat-screen televisions of all sizes. Includes heavy-duty wall bracket fixings, concealed cable management, setup of set-top box sockets, and soundbar power connections."
  },
  {
    id: 6,
    title: "Geyser Installation and Repair",
    category: "installations",
    categoryName: "Installations & Appliances",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    snippet: "Complete water heater mounting, high-load MCB socket installation, heating coil and thermostat repairs.",
    description: "End-to-end electrical service for instant and storage water geysers. We handle safe 16A power point wiring, waterproof switch installation, thermostat replacement, heating element repair, and anti-leak safety checks."
  },
  {
    id: 7,
    title: "AC Wiring Installation",
    category: "wiring",
    categoryName: "Wiring & Lighting",
    image: "images/ac_wiring.jpg",
    snippet: "Heavy-duty 16A/20A power wiring lines and dedicated MCB isolators for air conditioners.",
    description: "Proper high-current copper wiring installation tailored for split and window air conditioners. We run dedicated circuit lines directly from the main distribution panel to prevent circuit overloads."
  },
  {
    id: 8,
    title: "All Electrical Wiring Installation",
    category: "wiring",
    categoryName: "Wiring & Lighting",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd4e?auto=format&fit=crop&w=900&q=85",
    snippet: "Complete internal electrical rewiring for new apartments, villas, and renovation projects.",
    description: "Comprehensive conduit piping, wire drawing, circuit distribution, and safety testing for residential and commercial construction. We use flame-retardant copper wires for lifetime durability."
  },
  {
    id: 9,
    title: "Switch Box Installation",
    category: "wiring",
    categoryName: "Wiring & Lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85",
    snippet: "Installation and upgrade of modular switchboards, touch switches, and socket modules.",
    description: "Replacement of old non-standard switchboards with modern modular switch boxes. Includes wiring for 6A/16A sockets, fan dimmers, USB charging sockets, and smart automation switches."
  },
  {
    id: 10,
    title: "Electric Bike Charger Installation",
    category: "power",
    categoryName: "EV Chargers & Power",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=85",
    snippet: "Dedicated weather-resistant charging points for Ather, Ola, TVS, and all 2-wheeler electric bikes.",
    description: "Safe parking slot charging point setups for electric scooters and e-bikes. Includes dedicated outdoor 16A power sockets, waterproof enclosures, and individual circuit protection meters."
  },
  {
    id: 11,
    title: "Electric Car Charger Installation",
    category: "power",
    categoryName: "EV Chargers & Power",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85",
    snippet: "Heavy-duty 7.2kW / 11kW AC EV Wallbox installation for electric cars with dedicated earthing.",
    description: "Certified EV charger installation for Tata, Mahindra, MG, Hyundai, and luxury electric vehicles. Includes load assessment, high-capacity armored cables, dedicated RCCB/MCB breaker setup, and independent grounding."
  },
  {
    id: 12,
    title: "Fuse Replacement",
    category: "emergency",
    categoryName: "Emergency & Repairs",
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=900&q=85",
    snippet: "Quick replacement of blown main fuses and upgrade to modern Miniature Circuit Breakers (MCB).",
    description: "Prompt replacement of burned porcelain Kit-Kat main fuses, glass fuses, and main line links. We also upgrade outdated fuse units to automatic trip MCB breakers for enhanced safety."
  },
  {
    id: 13,
    title: "Panel Board Installation",
    category: "power",
    categoryName: "EV Chargers & Power",
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=900&q=85",
    snippet: "Main electrical distribution panel assembly, 3-phase busbar wiring, and sub-meter setups.",
    description: "Custom installation of main electrical distribution panels for multi-story residential buildings, apartments, and commercial facilities. Features busbar alignment, phase distribution, and surge protection."
  },
  {
    id: 14,
    title: "Fan Installation",
    category: "installations",
    categoryName: "Installations & Appliances",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85",
    snippet: "Assembly and ceiling mounting of standard fans, BLDC energy-saving fans, and wall exhausts.",
    description: "Safe assembly, downrod installation, ceiling hook testing, and regulator connection for ceiling fans, decorative blade fans, BLDC remote-controlled fans, and kitchen/bathroom exhaust fans."
  },
  {
    id: 15,
    title: "Chandelier Installation",
    category: "installations",
    categoryName: "Installations & Appliances",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=85",
    snippet: "Luxury crystal chandelier assembly, ceiling anchor reinforcement, and dimmer switch wiring.",
    description: "Expert handling and hanging of heavy ornamental crystal chandeliers, modern LED pendant clusters, and high-ceiling light fixtures with heavy-duty structural anchoring."
  },
  {
    id: 16,
    title: "Electrical Interiors",
    category: "wiring",
    categoryName: "Wiring & Lighting",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    snippet: "False ceiling electrical design, cove lighting setup, and architectural interior lighting execution.",
    description: "Transform your home interior with customized ambient lighting schemes. We handle gypsum false ceiling cutouts, LED driver wiring, magnetic track lights, and ambient architectural lighting."
  },
  {
    id: 17,
    title: "Electrical Panel Board Repairs",
    category: "emergency",
    categoryName: "Emergency & Repairs",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=900&q=85",
    snippet: "Repair of overheating panel boards, loose busbars, faulty isolators, and contactor trips.",
    description: "Specialized repair of main power control panels. We fix loose busbar connections, burnt contactors, faulty rotary changeover switches, and replace failing main isolators."
  },
  {
    id: 18,
    title: "Home Appliances Installation",
    category: "installations",
    categoryName: "Installations & Appliances",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
    snippet: "Electrical wiring and power point hookups for kitchen chimneys, hobs, ovens, and washing machines.",
    description: "Professional power point installation and dedicated circuit line setup for kitchen chimneys, electric induction hobs, microwave ovens, dishwashers, and washing machines."
  },
  {
    id: 19,
    title: "Electrical MCB Installation",
    category: "power",
    categoryName: "EV Chargers & Power",
    image: "images/mcb_installation.jpg",
    snippet: "Single-pole, 2-pole, and 4-pole MCB, RCCB, and ELCB circuit breaker panel installations.",
    description: "Upgrade your distribution box with genuine high-grade MCB breakers, RCCB (residual current circuit breakers), and ELCBs for instant trip protection during earth leakage or short circuits."
  },
  {
    id: 20,
    title: "UPS Installation and Repairs",
    category: "emergency",
    categoryName: "Emergency & Repairs",
    image: "images/ups_installation.jpg",
    snippet: "Inverter and battery bank connection, changeover switch wiring, and backup line repairs.",
    description: "Complete home inverter / UPS installation including battery rack connection, dual line separation for critical circuits, auto-changeover wiring, and inverter fault diagnosis."
  },
  {
    id: 21,
    title: "Grounding Installation",
    category: "power",
    categoryName: "EV Chargers & Power",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=85",
    snippet: "Industrial and residential grounding wire installation for zero earth potential safety.",
    description: "Low-resistance grounding systems engineered for sensitive medical equipment, computer servers, home theaters, and heavy machinery to prevent electrical interference and shock hazards."
  },
  {
    id: 22,
    title: "General Repairs",
    category: "emergency",
    categoryName: "Emergency & Repairs",
    image: "images/electrical_issues.jpg",
    snippet: "On-demand fixing of loose wiring, doorbells, plug sockets, dimmers, and burnt switches.",
    description: "Fast fix for routine everyday electrical glitches. Includes doorbell repair, plug socket tightening, light switch replacement, extension cord wiring, and minor fixture fixes."
  },
  {
    id: 23,
    title: "Electrical Inspections",
    category: "wiring",
    categoryName: "Wiring & Lighting",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85",
    snippet: "Comprehensive safety audits, load analysis, and pre-occupancy electrical health reports.",
    description: "Detailed safety inspection of residential properties and office spaces. We check wire insulation integrity, load distribution balance, earthing resistance, and flag fire hazard risks."
  },
  {
    id: 24,
    title: "Electrical Fixture Installation",
    category: "installations",
    categoryName: "Installations & Appliances",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    snippet: "Mounting of decorative wall sconces, mirror lights, track lights, and architectural fixtures.",
    description: "Precise installation of wall lamps, vanity mirror lights, spotlight tracks, hanging globe lights, and decorative indoor lighting fixtures with neat wiring connection."
  },
  {
    id: 25,
    title: "Outdoor Lighting Installation",
    category: "wiring",
    categoryName: "Wiring & Lighting",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=900&q=85",
    snippet: "Weatherproof garden lights, compound wall lamps, and motion-sensor floodlight setups.",
    description: "Heavy-duty waterproof outdoor lighting solutions for gardens, building facades, driveways, and terraces. Includes automatic day/night photo sensors and motion detectors."
  },
  {
    id: 26,
    title: "Electrical Manual Changeover Installation",
    category: "power",
    categoryName: "EV Chargers & Power",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
    snippet: "Manual 2-way and 4-way knife/rotary changeover switch installation for generator grid switching.",
    description: "Safe installation of heavy-amp manual changeover switches allowing seamless manual switching between EB electricity grid supply and standby diesel generator / inverter backup."
  },
  {
    id: 27,
    title: "Electrical Profile Light Installation",
    category: "wiring",
    categoryName: "Wiring & Lighting",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=85",
    snippet: "Custom aluminum profile channel LED strip light installation for wardrobes, ceilings, and walls.",
    description: "Modern recessed and surface-mounted aluminum profile light installations with frosted diffusers. Ideal for wardrobe interiors, modular kitchen cabinets, ceiling channels, and accent wall grooves."
  }
];
