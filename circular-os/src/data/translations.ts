export type Language = 'en' | 'fr' | 'de' | 'it';

export interface TranslationStructure {
  ui: {
    desktop: {
      register: string;
      projects: string;
      vision: string;
      plan: string;
      big_tech: string;
    };
    start_menu: {
      vision: string;
      plan: string;
      explorer: string;
      docs: string;
      website: string;
      contact: string;
      shutdown: string;
    };
  };
  vision: {
    title: string;
    subtitle: string;
    urgency_title: string;
    quote_trump: string;
    quote_caffarra: string;
    electroshock_text?: string;
    wakeup_title: string;
    wakeup_text: string;
    paradox_title: string;
    paradox_list: string[];
    system_missing: string;
    gap_text: string;
    innocence_over?: string;
    battle_plan?: string;
    mission_title: string;
    mission_text: string;
    os_why: string;
    foreign_os_list?: string[];
    tenants_text?: string;
    pillars_title: string;
    pillars: string[];
    architecture_title?: string;
    architecture_text?: string;
    kernel_title?: string;
    kernel_desc?: string;
    kernel_list?: string[];
    stack_title?: string;
    stack_desc?: string;
    modules_list?: string[];
    connections_title?: string;
    connections_subtitle?: string;
    connections_text?: string;
    links_list?: string[];
    role_title?: string;
    role_subtitle?: string;
    role_text?: string;
    levers_list?: string[];
    utility_text?: string;
    final_call?: string;
  };
  plan: {
    title: string;
    subtitle: string;
    intro: string;
    points: { title: string; text: string; action?: string; impact?: string }[];
    call_to_action?: string;
  };
  projects: Record<string, { title: string; text: string }>;
}

export const TRANSLATIONS: Record<Language, TranslationStructure> = {
  en: {
    ui: {
      desktop: { register: "Register", projects: "My Projects", vision: "The Vision", plan: "The Plan", big_tech: "Big Tech" },
      start_menu: { vision: "The Vision", plan: "The Plan", explorer: "Explorer", docs: "Documentation", website: "Website", contact: "Contact", shutdown: "Shutdown..." }
    },
    vision: {
      title: "Vision: CircularOS.eu",
      subtitle: "The European Circular Economy Operating System.",
      urgency_title: "🚨 THE URGENCY OF ACTION",
      quote_trump: "“I think they’re weak, but I also think that they want to be so politically correct. I think they don’t know what to do. Europe doesn’t know what to do.” — Donald Trump, December 2025.",
      quote_caffarra: "“We must build digital infrastructures that are ours, that we own. Otherwise, we are lost.” — Dr. Cristina Caffarra, Honorary Professor at University College London, February 2025.",
      electroshock_text: "The analysis is brutal, but it must serve as an electroshock.",
      wakeup_title: "THE WAKE-UP CALL",
      wakeup_text: "Europe stands at a crossroads. While America undergoes its own cultural and protectionist revolution, and China consolidates its digital hegemony, we face a critical question: Whoever controls the data, controls reality.",
      paradox_title: "The Paradox",
      paradox_list: [
        "500 million inhabitants",
        "GDP comparable to that of the United States",
        "Equivalent overall technological spending"
      ],
      system_missing: "We have the means. We have the market. We have the history. But we do not have the System.",
      gap_text: "We are told we are not innovative enough. That is false. The gap is not technological, it is structural. Our financial power is diverted: we spend billions, but this money leaves as rent to foreign actors instead of building our assets. We import 80% of our digital technologies. We are financing our own dependency, creating a critical systemic vulnerability.",
      innocence_over: "The era of innocence is over. To bridge this gap, we can no longer be content with regulating others' tools. We must forge our own tools.",
      battle_plan: "Take this call for what it is: the battle plan to build the infrastructure of our tomorrow.",
      mission_title: "THE MISSION: RECODING THE ECONOMIC SYSTEM",
      mission_text: "CircularOS (Circular Operating System) is not a simple application. It is the sovereign and distributed operating system that allows Europe to circulate its resources, data, and values freely, without external dependence.",
      os_why: "Why an \"OS\" for the Economy? In the 21st century, the maxim is simple: Whoever controls the Data, controls Reality.",
      foreign_os_list: [
        "Our commercial data is hosted on clouds subject to extraterritorial laws (Cloud Act).",
        "Our logistical flows depend on opaque algorithms optimised for massive importation.",
        "Our social interactions pass through extractive platforms."
      ],
      tenants_text: "We have digitised our economy, but we forgot to build the foundations. We are tenants on our own continent.",
      pillars_title: "THE 5 PILLARS OF SOVEREIGNTY",
      pillars: [
        "The Crisis Revealer: Recent crises (pandemic, wars, geopolitical instability) acted as a shock, making visible what was invisible: our critical dependence on underlying digital infrastructures.",
        "Foundations First: In times of crisis, it is too late to build the infrastructure necessary for emergency innovation. If sovereign bases are not already in place when the problem arises, the battle is already lost.",
        "From Accessory to Essential: Digital infrastructure must change status: it is no longer a \"nice-to-have\" but a survival imperative (\"must-have\"). This critical resource does not fall from the sky; it requires conscious and sustainable investment.",
        "A Consensus Beyond Politics: Technological sovereignty is not a partisan issue (neither left nor right), but a question of realism. Securing our current foundations is the absolute prerequisite before even thinking about creating competitive alternatives.",
        "The End of \"Innovation Fetishism\": The obsession with novelty is a waste of resources if it comes at the expense of maintenance. True \"common sense\" is understanding that there is no sustainable innovation without maintained, secure, and reliable infrastructure."
      ],
      architecture_title: "ARCHITECTURE: A KERNEL AND MODULES",
      architecture_text: "CircularOS functions like an operating system applied to the real economy. It provides the basic building blocks that territories and companies can use to build their own sovereign solutions.",
      kernel_title: "🔐 THE KERNEL: TRUST & IDENTITY",
      kernel_desc: "At the heart of the system, we have placed truth.",
      kernel_list: [
        "Sovereign Identity: Management of digital identities for companies and citizens. We guarantee that \"who acts\" is indeed \"who they claim to be\".",
        "Proof Engine: CircularOS natively integrates the ImpactData API. In our OS, data has value only if it is verified (CSR, Carbon, Origin). It is a proof-based system."
      ],
      stack_title: "🧱 THE STACK: APPLICATIVE MODULES",
      stack_desc: "On this kernel, we have developed four standard modules:",
      modules_list: [
        "Exchange Module (Commerce): Powers local marketplaces. It manages transactions without predatory commissions (returning 15% margin to companies), local logistics, and traceability.",
        "Interaction Module (Social): Manages the gamification of the real world and links between the physical and virtual worlds. It transforms the passive citizen into an engaged actor.",
        "Intelligence Module (Cognition): Manages Big Data aggregation, cartographic visualization (Digital Twins), and strategic decision support.",
        "Flow Module (Supply Chain): Manages B2B matching, company grouping (co-contracting), and access to public procurement."
      ],
      connections_title: "VISION: FROM FRAGMENTATION TO \"THE GREAT INTERCONNECTION\"",
      connections_subtitle: "Repairing Europe's Digital and Social Fracture.",
      connections_text: "Europe is an economic giant with digital feet of clay because it lives in silos (health data cut off from industry, artisans cut off from public procurement). CircularOS is the antidote to this fragmentation. We use technology to link worlds.",
      links_list: [
        "🔗 Linking Production and Consumption: In CircularOS, a product is not an inert object; it is a living data packet. The product \"tells\" its story (who made it, where, carbon). The consumer receives this info without a filter. Result: The market auto-regulates towards quality because virtue becomes visible.",
        "🔗 Linking Economy and Territory: The company is no longer just a registration number (SIRET), it is a geographical entity. The city sees its flows in real-time and can direct its public spending toward local actors. Result: Public money stops leaking out. It irrigates the local fabric.",
        "🔗 Linking Youth and Reality: We refuse to let the virtual be an escape. We inject real data (Artisans, History, Industry) into virtual worlds. Result: Children learn the trades of their region by playing. We are training the producers of tomorrow.",
        "🔗 Linking SMEs and Power: Thanks to co-contracting algorithms, SMEs dynamically unite to form groups capable of responding to major challenges. Result: The strength of the network replaces the fragility of the monopoly."
      ],
      role_title: "OUR ROLE IN EU DEVELOPMENT",
      role_subtitle: "A Strategic and Political Commitment.",
      role_text: "CircularOS.eu does not content itself with providing code. We actively participate in building the future of the European Union through four major levers:",
      levers_list: [
        "Digital Regulation: We natively integrate European standards (CSRD, GDPR, DMA) to make compliance a competitive advantage rather than a constraint.",
        "Technological Tools: We provide the sovereign infrastructure necessary so that Europe is no longer a digital colony, but a producing power.",
        "Strategic Relations: We weave ties between industries, governments, and citizens to create a dense and resilient internal market.",
        "The Publicity of Values: We promote a technological model aligned with European democratic values: transparency, inclusivity, and sustainability."
      ],
      utility_text: "Concrete Utility for Europe: By adopting this standard, Europe recovers its economic margin (end of foreign commissions), accelerates its ecological transition through data, and finally unifies its internal market.",
      final_call: "It is time to produce our own tools. It is time to own our future. Bring the demo."
    },
    plan: {
      title: "✨ Our 10 point plan",
      subtitle: "For a Sovereign & Prosperous Ecosystem",
      intro: "In alignment with the Future Institute's framework, CircularOS commits to the following roadmap to reclaim our digital and economic destiny.",
      points: [
        {
          title: "1. 🛠️ CHAMPIONING THE \"MAKERS\" & SMEs",
          text: "We empower European artisans, startups, and industrial SMEs by providing them with sovereign SaaS tools and direct access to markets (Made.Regions). We replace predatory commissions with a model that supports scaling and local investment.",
          action: "Action: Provide free or low-cost digital management software (CircularOS ERP) to all registered SMEs. Build native integrations with Made.Regions so SMEs can sell B2C and B2B without predatory commissions. Replace commission-based models (15-30% to Amazon/Shopify) with transparent pricing (2-3% platform fee, max).",
          impact: "Impact: Stop the $200B+ annual capital flight. Keep European SME revenue in Europe."
        },
        {
          title: "2. 💶 STOPPING ECONOMIC LEAKAGE",
          text: "We prevent the loss of billions in economic value by building our own transactional infrastructure. We ensure that margins and tax receipts stay in Europe to fund our schools and hospitals, rather than disappearing into the tax loopholes of foreign tech giants.",
          action: "Action: Deploy Made.Paris, Made.Alsace, Made.Bzh as proof-of-concept marketplaces. Ensure all revenue stays in Europe. Eliminate middlemen extracting 30-40% margins (multinational distributors).",
          impact: "Impact: For every €100 spent on European goods, €70-85 stays in the territory instead of disappearing to Silicon Valley or Singapore."
        },
        {
          title: "3. 🇪🇺 BUILDING THE SOVEREIGN \"EUROSTACK\"",
          text: "We support state-of-the-art, open-source computing infrastructure. CircularOS provides the essential software layer that connects sovereign clouds to the real economy, delivering a level playing field where European technology champions can finally emerge.",
          action: "Action: Deploy CircularOS on sovereign cloud infrastructure (SecNumCloud, Schrems II compliant). Connect state-of-the-art open-source stacks (Linux, PostgreSQL, Kubernetes).",
          impact: "Impact: European technology champions can emerge on equal terms, free from US extraterritorial laws (Cloud Act) and Chinese backdoors."
        },
        {
          title: "4. 🤖 DRIVING AI FOR THE REAL WORLD",
          text: "We invest in AI and machine learning not to generate fake content, but to optimise reality. Through Smart.Regions and ImpactData, we use AI to model supply chains, predict energy needs, and advance manufacturing engineering.",
          action: "Action: Deploy AI-powered Smart.Regions for supply chain modelling and energy prediction. Use machine learning in ImpactData to detect greenwashing and certify true impact.",
          impact: "Impact: AI becomes a tool for visibility and resilience, not manipulation and surveillance."
        },
        {
          title: "5. 🔌 MANDATING RADICAL INTEROPERABILITY",
          text: "We break the silos. CircularOS mandates open standards and APIs, ensuring that data from agriculture, health, and industry can talk to each other. We protect business choice by preventing vendor lock-in and \"walled gardens\".",
          action: "Action: Publish open APIs for all modules (Made, Life, Smart, Achats, Fournisseurs, ImpactData). Ensure seamless data communication.",
          impact: "Impact: No actor becomes indispensable. Any region can fork CircularOS and build on it."
        },
        {
          title: "6. 🧠 INTRODUCING ALGORITHMIC SOVEREIGNTY",
          text: "We reform social interaction by replacing addictive, polarization-driven algorithms with \"Life\" algorithms. We allow businesses and citizens to engage through interfaces that reward real-world impact, education, and local connection.",
          action: "Action: Deploy Life.Paris and Life.Regions as open-source alternatives to TikTok, Meta, Roblox. Design algorithms that reward real-world impact—not dopamine hits.",
          impact: "Impact: Young people spend time on platforms that connect them to their territory, not to algorithmic manipulation."
        },
        {
          title: "7. ❤️ DESIGNING FOR MENTAL & CIVIC HEALTH",
          text: "We address the crisis of screen addiction. CircularOS promotes \"Play-to-Act\" designs (Life.Paris) where digital engagement is a bridge to physical activity, civic participation, and productivity, rather than a dopamine trap.",
          action: "Action: Design Life.Paris so digital engagement leads to physical activity. Every in-game quest requires real-world action (visiting a producer, cleaning a park, learning a trade).",
          impact: "Impact: Citizens regain autonomy. Mental health improves. Communities strengthen."
        },
        {
          title: "8. 🛡️ REVOLUTIONISING THE \"TRUST ECONOMY\"",
          text: "We reform the digital market by replacing the \"pay-to-be-seen\" advertising model with a \"proven-to-be-good\" model. We reward European publishers and producers based on verified Impact Scores (ImpactData), not just marketing budgets.",
          action: "Action: Build ImpactData as the standard for verified credibility. Allow small, virtuous producers to out-compete large, deceptive ones.",
          impact: "Impact: The best product wins because virtue is visible. Quality becomes the new currency."
        },
        {
          title: "9. 🔐 RESTORING ABSOLUTE DATA CONTROL",
          text: "We give consumers and companies real control over their data. Through a single, sovereign user interface, citizens can track their consumption footprint and companies can protect their trade secrets from extraterritorial surveillance.",
          action: "Action: Implement single sign-on through CircularOS identity system. Citizens and companies can track, audit, and delete their data footprint at any time.",
          impact: "Impact: Users are citizens with rights, not products to be harvested. European data stays European."
        },
        {
          title: "10. 🌍 ALIGNING TECH WITH CLIMATE TRUTH",
          text: "We make the Green Deal operational. By embedding transparent emissions ratings (ImpactData) into every B2B and B2C transaction, we set ambitious efficiency targets that are measurable, verifiable, and economically rewarding.",
          action: "Action: Integrate ImpactData carbon scoring into Made.Regions, Achats.eco, and Smart platforms. Make green choices economically rewarding.",
          impact: "Impact: The transition becomes economically accelerative, not a burden. Every euro spent pulls efficiency forward."
        }
      ],
      call_to_action: "THE CALL TO ACTION\nThis is not a strategy document. This is a battle plan.\nEurope must choose: continue as a colony of GAFAM and China, or build the infrastructure to own our future.\nThe time for talk is over. Time to build. Time to demonstrate. Time to reclaim.\nCircularOS.eu: Digital Sovereignty for the Common Good"
    },
    projects: {
      "made_fr": {
        "title": "Made.fr",
        "text": "<strong>The Showcase of Excellence and National Investment Hub</strong><br><br>Made.fr is far more than a portal: it is the flagship of French industrial and cultural reconquest. Its mission is to federate all the vital forces of the country to project a unified and powerful image internationally. Unlike regional platforms focused on direct sales, Made.fr acts as a sovereign promotion agency. It aggregates the best know-how (DeepTech, Industry 4.0, Fine Craftsmanship) to attract foreign investors and reassure global markets through data-proof evidence.<br><br>It is also a Hub for skills and resources. Made.fr connects tech startups with traditional industries to accelerate the modernisation of production tools. The platform offers advanced tutorials for the digitisation of SMEs and serves as an entry point for major international contractors looking to source in France. By de-risking investment via certified data, Made.fr transforms \"Brand France\" into a tangible economic asset, proving that our country is the green and smart factory of Europe."
      },
      "made_paris": {
        "title": "Made.Paris",
        "text": "<strong>The Short Supply Chain Marketplace and Capital Innovation</strong><br><br>Made.Paris is the tool of resistance and growth for producers in the Île-de-France. Faced with the predation of e-commerce giants who capture margins, this marketplace offers a sovereign, local, and ethical alternative. It allows artisans of the Faubourg Saint-Antoine, fashion creators of the Sentier, and startups of Station F to sell directly to Parisians (B2C) and local businesses (B2B) without abusive commissions.<br><br>Beyond sales, Made.Paris provides a complete \"Circular SaaS\": a simplified management dashboard that helps micro-enterprises manage their stock, invoicing, and decarbonised urban logistics. The platform integrates tutorials to help artisans digitise and valorise their labels (Made in Paris). By connecting the place of production directly to the place of consumption, Made.Paris drastically reduces the carbon footprint and restores purchasing power to producers, recreating a dense and cohesive proximity economy in the heart of the metropolis."
      },
      "made_alsace": {
        "title": "Made.Alsace",
        "text": "<strong>The Alliance of Tradition and Industry 4.0</strong><br><br>Made.Alsace is the platform dedicated to one of Europe's most industrial and distinct regions. It connects the power of Alsatian industrial SMEs with the richness of its traditional craftsmanship. The objective is to structure a robust local offer, capable of meeting cross-border needs while fostering the circular economy in the Rhine territory.<br><br>The platform places particular emphasis on valorising local sectors of excellence (mechanics, agri-food, timber) to consumers and professional buyers. It offers specific tools for managing local and cross-border certifications. Made.Alsace allows producers to pool their logistics and gain visibility against international competitors. It is a tool of regional pride that transforms \"Made in Alsace\" into a pledge of technical and environmental quality, ensuring that added value stays in the region to fund apprenticeships and local employment."
      },
      "made_bzh": {
        "title": "Made.Bzh",
        "text": "<strong>The Lighthouse of Maritime and Agricultural Economy</strong><br><br>Made.Bzh is the portal for Breton sovereignty. It gathers actors from the land (farmers, breeders) and the sea (fishermen, seaweed farmers, shipyards) on a unique marketplace. The platform aims to disintermediate food and industrial supply chains to guarantee fair remuneration for the producers who feed and equip the country.<br><br>Specifically adapted to the territory, Made.Bzh integrates advanced traceability features for seafood products and organic farming, meeting strong demand for transparency. It also serves as a showcase for maritime innovation (competitive sailing, marine energy). By proposing tutorials on ecological transition and direct sales tools, Made.Bzh strengthens the local economic fabric often distant from major decision-making centres. It allows Brittany to export its strong identity and exceptional products while maintaining control over its distribution channels."
      },
      "life_paris": {
        "title": "Life.Paris",
        "text": "<strong>Citizen Gaming to Re-enchant the City of Light</strong><br><br>Life.Paris revolutionises the interaction between the citizen and their city by transforming Paris into an immense \"useful\" playground. Far from disconnected metaverses, Life.Paris is a \"Reality Gaming\" application where every quest has a real impact. Players explore neighbourhoods, take on civic challenges (cleanliness, soft mobility), and discover the hidden history of the capital thanks to augmented reality.<br><br>The economic aspect is central: the shops and artisans of Made.Paris have digital twins in the game. Players can virtually visit a workshop, win rewards usable in real commerce, and interact with creators. Life.Paris is also a powerful educational tool for young people, allowing them to discover high-demand trades via mini-games sponsored by local companies. It is the fusion of entertainment, culture, and employment, recreating social bonds in an often anonymous city."
      },
      "life_alsace": {
        "title": "Life.Alsace",
        "text": "<strong>Playful Immersion in the Heart of Heritage and Industry</strong><br><br>Life.Alsace uses video games to transmit culture and dynamise the regional economy. The platform allows users to dive into Alsatian legends and local history through interactive geolocated adventures. But the ambition goes beyond folklore: Life.Alsace gamifies the discovery of the regional industrial fabric.<br><br>Young people can visit virtual factories, understand manufacturing processes (automotive, green chemistry), and validate technical skills via the game, creating direct bridges to apprenticeships and employment. The game also valorises green tourism and short supply chains: completing quests at local producers unlocks exclusive benefits. Life.Alsace connects generations, allowing elders to transmit the memory of places and younger people to appropriate their territory in a modern and active way."
      },
      "life_bzh": {
        "title": "Life.Bzh",
        "text": "<strong>The Digital Adventure Between Land and Sea</strong><br><br>Life.Bzh is an immersive experience platform dedicated to Breton identity. It transforms the region into a vast live-action role-playing game where environmental protection (coasts, forests) and culture (language, music, festivals) are at the heart of the gameplay. Players become virtual and real guardians of their heritage.<br><br>The game strongly integrates the maritime and agricultural economy: users can virtually manage farms or ships based on real data, thus learning the challenges of these trades. Content creators (UGC) can propose scenarios based on local myths. Life.Bzh serves as a relay for ecological initiatives (gamified beach cleaning) and connects players to Made.Bzh products. It is a powerful tool to fight rural desertification by making every village attractive and interactive for connected youth."
      },
      "smart_paris": {
        "title": "Smart.Paris",
        "text": "<strong>The Data Cockpit for a Smart and Human City</strong><br><br>Smart.Paris is the digital twin of the capital, a real-time data visualisation tool intended for decision-makers, businesses, and citizens. It aggregates billions of data points (transport flows, energy consumption, economic activity, air quality) to offer a clear and actionable reading of the urban metabolism.<br><br>Far from being a technocratic \"Black Box\", Smart.Paris is a democratic tool. It allows visualisation of the impact of public policies, identification of heat islands or commercial deserts. For businesses, it is an economic intelligence tool for choosing where to set up. For citizens, it is a transparency tool regarding the use of public space. Smart.Paris allows users to \"travel in time\" to see the evolution of the city and simulate possible futures, helping to take informed collective decisions for a more breathable and efficient metropolis."
      },
      "smart_alsace": {
        "title": "Smart.Alsace",
        "text": "<strong>Territorial Intelligence Serving Industry and Flows</strong><br><br>Smart.Alsace is the strategic piloting platform for the Grand Est region. It concentrates on the visualisation of cross-border industrial, logistical, and energy flows. Thanks to Open Data and IoT sensors, it offers a precise mapping of the regional value chain, allowing the identification of opportunities for industrial symbiosis (the waste of one becomes the resource of another).<br><br>It serves as a decision-support tool for land planning, groundwater management, and transport network optimisation. Smart.Alsace allows elected officials and investors to visualise the density of the CSR fabric and the reality of the ecological transition on the ground. It is a tool of regional sovereignty that allows monitoring of Alsace's energy and food autonomy in real-time, fostering a circular economy optimised by data."
      },
      "smart_bzh": {
        "title": "Smart.Bzh",
        "text": "<strong>The Digital Watchtower for Natural and Maritime Resources</strong><br><br>Smart.Bzh is the environmental and economic monitoring system of Brittany. It combines satellite, maritime, and terrestrial data to monitor coastal health, water quality, and agricultural activity. It is a vital tool for reconciling economic development (tourism, intensive agriculture) and biodiversity preservation.<br><br>The platform allows local decision-makers to visualise climate impacts and manage water resources predictively. It also maps rural economic dynamics to fight against the territorial divide. Smart.Bzh offers citizens and sea professionals valuable data on meteorological conditions and fish stocks. It is the tool of Breton resilience, allowing the territory to be piloted with an acute awareness of its ecological limits and renewable potentials."
      },
      "impact_data": {
        "title": "ImpactData.fr",
        "text": "<strong>The API of Ecological Truth and \"Zero Greenwashing\"</strong><br><br>ImpactData.fr is the trust engine of the entire ecosystem. It is a universal SaaS (Software as a Service) API that replaces marketing promises with unforgeable digital proofs. It connects to State databases (ADEME, Agence Bio), private certifiers, and financial data to audit the CSR reality of every company and product in real-time.<br><br>Its mission is twofold: to audit and distribute the truth. It generates transparent \"Impact Scores\" that feed the Made marketplaces, public procurement tools, and digital twins. ImpactData allows virtuous companies to valorise their efforts without extra advertising costs, and allows consumers and buyers to choose with full lucidity. By structuring impact data, ImpactData.fr becomes the compliance standard to anticipate European regulations (CSRD), transforming regulatory constraint into a digital competitive advantage."
      },
      "achats_eco": {
        "title": "Achats.eco",
        "text": "<strong>The Facilitator of Public Procurement and Redistribution</strong><br><br>Achats.eco is the platform that democratises access to the €200 billion of public procurement. It breaks the monopoly of service giants by allowing Town Halls, Hospitals, and Regions to buy directly from local SMEs and artisans. The objective is to reorient public money towards the real economy and territories.<br><br>Its major innovation lies in the automation of \"Co-contracting\". The Achats.eco algorithm allows small businesses to group together instantly to respond jointly to large tenders, thus offering a credible and local alternative to multinationals. The platform guarantees buyers the legal and CSR compliance of their suppliers thanks to ImpactData. It is a tool of economic justice that lowers costs for the State while increasing producer margins, ensuring that taxes fund local employment."
      },
      "fournisseurs_eco": {
        "title": "Fournisseurs.eco",
        "text": "<strong>The Index of Resilience and Industrial Sourcing</strong><br><br>Fournisseurs.eco is the dynamic and qualified directory of European industry and craftsmanship. Unlike static directories, it is a \"Sourcing 4.0\" tool that allows supply chains to be mapped and secured. It connects contractors (manufacturers, large groups) with subcontractors and raw material suppliers capable of proving their skills and financial solidity.<br><br>The platform fosters relocation by making unsuspected production capacities on the territory visible. It highlights actors of the Social and Solidarity Economy (ESS) and inclusive enterprises. Fournisseurs.eco allows for the creation of short value chains, resilient to global logistical crises. It is the indispensable tool for any professional wishing to build an ethical, sustainable, and sovereign product, by identifying reliable partners in the immediate vicinity."
      }
    }
  },
  fr: {
    ui: {
      desktop: { register: "S'enregistrer", projects: "Mes Projets", vision: "La Vision", plan: "Le Plan", big_tech: "Big Tech" },
      start_menu: { vision: "La Vision", plan: "Le Plan", explorer: "Explorateur", docs: "Documentation", website: "Site Web", contact: "Contact", shutdown: "Arrêter le système..." }
    },
    vision: {
      title: "Vision : CircularOS.eu",
      subtitle: "Le Système d'Exploitation de l'Économie Circulaire Européenne.",
      urgency_title: "🚨 L'URGENCE D'AGIR",
      quote_trump: "« Je pense qu'ils sont faibles, mais je pense aussi qu'ils veulent être si politiquement corrects. Je pense qu'ils ne savent pas quoi faire. L'Europe ne sait pas quoi faire. » — Donald Trump, Décembre 2025.",
      quote_caffarra: "« Nous devons construire des infrastructures numériques qui sont les nôtres, que nous possédons. Sinon, nous sommes perdus. » — Dr. Cristina Caffarra, Février 2025.",
      electroshock_text: "Le constat est brutal, mais il doit servir d'électrochoc.",
      wakeup_title: "LE RÉVEIL",
      wakeup_text: "L'Europe est à la croisée des chemins. Alors que l'Amérique vit sa révolution culturelle et protectionniste, et que la Chine consolide son hégémonie numérique, nous faisons face à une question critique : Celui qui contrôle la donnée, contrôle la réalité.",
      paradox_title: "Le Paradoxe",
      paradox_list: ["500 millions d'habitants", "PIB comparable aux États-Unis", "Dépenses technologiques globales équivalentes"],
      system_missing: "Nous avons les moyens. Nous avons le marché. Nous avons l'histoire. Mais nous n'avons pas le Système.",
      gap_text: "On nous dit que nous ne sommes pas assez innovants. C'est faux. Le fossé n'est pas technologique, il est structurel. Notre puissance financière est détournée : nous dépensons des milliards, mais cet argent part en rente chez des acteurs étrangers au lieu de construire nos actifs. Nous importons 80% de nos technologies numériques. Nous finançons notre propre dépendance.",
      innocence_over: "L'ère de l'innocence est révolue. Pour combler ce fossé, nous ne pouvons plus nous contenter de réguler les outils des autres. Nous devons forger nos propres outils.",
      battle_plan: "Prenez cet appel pour ce qu'il est : le plan de bataille pour construire l'infrastructure de notre demain.",
      mission_title: "LA MISSION : RECODER LE SYSTÈME ÉCONOMIQUE",
      mission_text: "CircularOS (Circular Operating System) n'est pas une simple application. C'est le système d'exploitation souverain et distribué qui permet à l'Europe de faire circuler ses ressources, ses données et ses valeurs librement, sans dépendance externe.",
      os_why: "Pourquoi un 'OS' pour l'Économie ? Au 21ème siècle, la maxime est simple : Qui contrôle la Donnée, contrôle la Réalité.",
      foreign_os_list: [
        "Nos données commerciales sont hébergées sur des clouds soumis à des lois extraterritoriales (Cloud Act).",
        "Nos flux logistiques dépendent d'algorithmes opaques optimisés pour l'importation massive.",
        "Nos interactions sociales passent par des plateformes extractives."
      ],
      tenants_text: "Nous avons numérisé notre économie, mais nous avons oublié de construire les fondations. Nous sommes locataires sur notre propre continent.",
      pillars_title: "LES 5 PILIERS DE LA SOUVERAINETÉ",
      pillars: [
        "Le Révélateur de Crise : Les crises récentes (pandémie, guerres) ont agi comme un choc, rendant visible l'invisible : notre dépendance critique aux infrastructures numériques.",
        "Les Fondations d'abord : En temps de crise, il est trop tard pour construire l'infrastructure. Si les bases souveraines ne sont pas là, la bataille est perdue d'avance.",
        "De l'Accessoire à l'Essentiel : L'infrastructure numérique n'est plus un 'plus', c'est un impératif de survie. Cette ressource critique demande un investissement conscient et durable.",
        "Un Consensus au-delà de la Politique : La souveraineté technologique n'est pas une question partisane, c'est une question de réalisme. Sécuriser nos bases est le prérequis absolu.",
        "La Fin du 'Fétichisme de l'Innovation' : L'obsession de la nouveauté est un gaspillage si elle se fait au détriment de la maintenance. Il n'y a pas d'innovation durable sans infrastructure sûre et fiable."
      ],
      architecture_title: "ARCHITECTURE : UN NOYAU ET DES MODULES",
      architecture_text: "CircularOS fonctionne comme un système d'exploitation appliqué à l'économie réelle. Il fournit les briques de base que les territoires et les entreprises peuvent utiliser pour construire leurs propres solutions souveraines.",
      kernel_title: "🔐 LE NOYAU (KERNEL) : CONFIANCE & IDENTITÉ",
      kernel_desc: "Au cœur du système, nous avons placé la vérité.",
      kernel_list: [
        "Identité Souveraine : Gestion des identités numériques pour les entreprises et les citoyens. Nous garantissons que \"qui agit\" est bien \"qui il prétend être\".",
        "Moteur de Preuve : CircularOS intègre nativement l'API ImpactData. Dans notre OS, la donnée n'a de valeur que si elle est vérifiée (RSE, Carbone, Origine). C'est un système basé sur la preuve."
      ],
      stack_title: "🧱 LA PILE (STACK) : MODULES APPLICATIFS",
      stack_desc: "Sur ce noyau, nous avons développé quatre modules standards :",
      modules_list: [
        "Module d'Échange (Commerce) : Alimente les places de marché locales. Gère les transactions sans commissions prédatrices (rendant 15% de marge aux entreprises), la logistique locale et la traçabilité.",
        "Module d'Interaction (Social) : Gère la gamification du monde réel et les liens entre les mondes physique et virtuel. Il transforme le citoyen passif en acteur engagé.",
        "Module d'Intelligence (Cognition) : Gère l'agrégation Big Data, la visualisation cartographique (Jumeaux Numériques) et l'aide à la décision stratégique.",
        "Module de Flux (Supply Chain) : Gère le matching B2B, le groupement d'entreprises (co-traitance) et l'accès à la commande publique."
      ],
      connections_title: "VISION : DE LA FRAGMENTATION À \"LA GRANDE INTERCONNEXION\"",
      connections_subtitle: "Réparer la fracture numérique et sociale de l'Europe.",
      connections_text: "L'Europe est un géant économique aux pieds d'argile numériques car elle vit en silos (données de santé coupées de l'industrie, artisans coupés de la commande publique). CircularOS est l'antidoto à cette fragmentation. Nous utilisons la technologie pour relier les mondes.",
      links_list: [
        "🔗 Relier Production et Consommation : Dans CircularOS, un produit n'est pas un objet inerte ; c'est un paquet de données vivant. Le produit \"raconte\" son histoire (qui l'a fait, où, carbone). Le consommateur reçoit cette info sans filtre. Résultat : Le marché s'autorégule vers la qualité car la vertu devient visible.",
        "🔗 Relier Économie et Territoire : L'entreprise n'est plus juste un numéro SIRET, c'est une entité géographique. La ville voit ses flux en temps réel et peut diriger sa dépense publique vers les acteurs locaux. Résultat : L'argent public arrête de fuiter. Il irrigue le tissu local.",
        "🔗 Relier Jeunesse et Réalité : Nous refusons de laisser le virtuel être une échappatoire. Nous injectons des données réelles (Artisans, Histoire, Industrie) dans les mondes virtuels. Résultat : Les enfants apprennent les métiers de leur région en jouant. Nous formons les producteurs de demain.",
        "🔗 Relier PME et Puissance : Grâce aux algorithmes de co-traitance, les PME s'unissent dynamiquement pour former des groupes capables de répondre aux grands défis. Résultat : La force du réseau remplace la fragilité du monopole."
      ],
      role_title: "NOTRE RÔLE DANS LE DÉVELOPPEMENT DE L'UE",
      role_subtitle: "Un Engagement Stratégique et Politique.",
      role_text: "CircularOS.eu ne se contente pas de fournir du code. Nous participons activement à la construction du futur de l'Union Européenne à travers quatre leviers majeurs :",
      levers_list: [
        "Régulation Numérique : Nous intégrons nativement les standards européens (CSRD, RGPD, DMA) pour faire de la conformité un avantage compétitif plutôt qu'une contrainte.",
        "Outils Technologiques : Nous fournissons l'infrastructure souveraine nécessaire pour que l'Europe ne soit plus une colonie numérique, mais une puissance productrice.",
        "Relations Stratégiques : Nous tissons des liens entre industries, gouvernements et citoyens pour créer un marché intérieur dense et résilient.",
        "La Publicité des Valeurs : Nous promouvons un modèle technologique aligné avec les valeurs démocratiques européennes : transparence, inclusivité et durabilité."
      ],
      utility_text: "Utilité Concrète pour l'Europe : En adoptant ce standard, l'Europe récupère sa marge économique (fin des commissions étrangères), accélère sa transition écologique par la donnée, et unifie enfin son marché intérieur.",
      final_call: "Il est temps de produire nos propres outils. Il est temps de posséder notre futur."
    },
    plan: {
      title: "✨ Notre plan en 10 points",
      subtitle: "Pour un Écosystème Souverain & Prospère",
      intro: "En alignement avec le cadre du Future Institute, CircularOS s'engage sur la feuille de route suivante pour reconquérir notre destin numérique et économique.",
      points: [
        { title: "1. 🛠️ SOUTENIR LES 'MAKERS' & PME", text: "Nous donnons le pouvoir aux artisans et PME industrielles avec des outils SaaS souverains et un accès direct aux marchés (Made.Regions).", action: "Action : Fournir un ERP CircularOS gratuit aux PME.", impact: "Impact : Stopper la fuite de capitaux et garder les revenus en Europe." },
        { title: "2. 💶 STOPPER LA FUITE ÉCONOMIQUE", text: "Nous empêchons la perte de milliards en valeur économique en construisant notre propre infrastructure transactionnelle.", action: "Action : Déployer Made.Paris, Made.Alsace, Made.Bzh.", impact: "Impact : Pour 100€ dépensés, 85€ restent sur le territoire." },
        { title: "3. 🇪🇺 CONSTRUIRE L'EUROSTACK SOUVERAIN", text: "Nous soutenons une infrastructure open-source de pointe, libre des lois extraterritoriales.", action: "Action : Déployer sur cloud souverain (SecNumCloud).", impact: "Impact : Indépendance face au Cloud Act américain." },
        { title: "4. 🤖 L'IA POUR LE MONDE RÉEL", text: "Nous investissons dans l'IA pour optimiser la réalité (supply chain, énergie), pas pour générer du faux.", action: "Action : IA prédictive pour Smart.Regions.", impact: "Impact : L'IA comme outil de résilience, pas de surveillance." },
        { title: "5. 🔌 INTEROPÉRABILITÉ RADICALE", text: "CircularOS impose des standards ouverts. Les données de santé, d'industrie et d'agriculture doivent communiquer.", action: "Action : API ouvertes pour tous les modules.", impact: "Impact : Aucun acteur ne devient indispensable." },
        { title: "6. 🧠 SOUVERAINETÉ ALGORITHMIQUE", text: "Nous remplaçons les algorithmes addictifs par des algorithmes 'Life' qui récompensent l'impact réel.", action: "Action : Life.Paris comme alternative à TikTok.", impact: "Impact : Les jeunes se connectent à leur territoire." },
        { title: "7. ❤️ SANTÉ MENTALE & CIVIQUE", text: "CircularOS promeut le design 'Play-to-Act'. L'engagement numérique mène à l'action physique.", action: "Action : Quêtes in-game nécessitant des actions réelles.", impact: "Impact : Les citoyens retrouvent de l'autonomie." },
        { title: "8. 🛡️ ÉCONOMIE DE LA CONFIANCE", text: "Nous remplaçons le modèle 'payer pour être vu' par 'prouvé être bon' via ImpactData.", action: "Action : ImpactData comme standard de crédibilité.", impact: "Impact : La qualité devient la nouvelle monnaie." },
        { title: "9. 🔐 CONTRÔLE ABSOLU DES DONNÉES", text: "Nous redonnons aux citoyens et entreprises le contrôle réel de leurs données.", action: "Action : Single Sign-On souverain et audit de données.", impact: "Impact : Les données européennes restent européennes." },
        { title: "10. 🌍 TECH & VÉRITÉ CLIMATIQUE", text: "Nous rendons le Green Deal opérationnel avec des scores d'émissions transparents.", action: "Action : Scoring carbone intégré dans chaque transaction.", impact: "Impact : La transition devient un accélérateur économique." }
      ],
      call_to_action: "L'APPEL À L'ACTION\nCe n'est pas un document stratégique. C'est un plan de bataille.\nCircularOS.eu : Souveraineté Numérique pour le Bien Commun"
    },
    projects: {
        "made_fr": { title: "Made.fr", text: "<strong>La Vitrine de l'Excellence et Hub d'Investissement National</strong><br><br>Made.fr est le navire amiral de la reconquête industrielle française. Sa mission est de fédérer l'ensemble des forces vives du pays pour projeter une image unifiée et puissante à l'international. Contrairement aux plateformes régionales axées sur la vente directe, Made.fr agit comme une agence de promotion souveraine. Elle agrège le meilleur des savoir-faire (DeepTech, Industrie 4.0, Artisanat d'Art) pour attirer les investisseurs étrangers et rassurer les marchés mondiaux grâce à la preuve par la donnée.<br><br>C'est également un Hub de compétences et de ressources. Made.fr connecte les startups technologiques aux industries traditionnelles pour accélérer la modernisation de l'outil de production. La plateforme propose des tutoriels avancés pour la digitalisation des PME et sert de point d'entrée pour les grands donneurs d'ordre internationaux cherchant à sourcer en France. En dérisquant l'investissement via des données certifiées, Made.fr transforme la 'Marque France' en un actif économique tangible, prouvant que notre pays est l'usine verte et intelligente de l'Europe." },
        "made_paris": { title: "Made.Paris", text: "<strong>La Marketplace du Circuit Court et de l'Innovation Capitale</strong><br><br>Made.Paris est l'outil de résistance et de croissance pour les producteurs d'Île-de-France. Face à la prédation des géants du e-commerce qui captent les marges, cette marketplace offre une alternative souveraine, locale et éthique. Elle permet aux artisans du Faubourg Saint-Antoine, aux créateurs de mode du Sentier et aux startups de la Station F de vendre directement aux Parisiens (B2C) et aux entreprises locales (B2B) sans commissions abusives.<br><br>Au-delà de la vente, Made.Paris fournit un 'SaaS Circulaire' complet : un tableau de bord de gestion simplifié qui aide les TPE à gérer leurs stocks, leur facturation et leur logistique urbaine décarbonée. La plateforme intègre des tutoriels pour aider les artisans à se digitaliser et à valoriser leurs labels (Fabriqué à Paris). En connectant directement le lieu de fabrication au lieu de consommation, Made.Paris réduit drastiquement l'empreinte carbone et redonne du pouvoir d'achat aux producteurs, recréant une économie de proximité dense et solidaire au cœur de la métropole." },
        "made_alsace": { title: "Made.Alsace", text: "<strong>L'Alliance de la Tradition et de l'Industrie 4.0</strong><br><br>Made.Alsace est la plateforme dédiée à l'une des régions les plus industrielles et identitaires d'Europe. Elle connecte la puissance des PME industrielles alsaciennes avec la richesse de son artisanat traditionnel. L'objectif est de structurer une offre locale robuste, capable de répondre aux besoins transfrontaliers tout en favorisant l'économie circulaire sur le territoire rhénan.<br><br>La plateforme met un accent particulier sur la valorisation des filières d'excellence locales (mécanique, agro-alimentaire, bois) auprès des consommateurs et des acheteurs professionnels. Elle propose des outils spécifiques pour la gestion des certifications locales et transfrontalières. Made.Alsace permet aux producteurs de mutualiser leur logistique et de gagner en visibilité face aux concurrents internationaux. C'est un outil de fierté régionale qui transforme le 'Made in Alsace' en gage de qualité technique et environnementale, assurant que la valeur ajoutée reste dans la région pour financer l'apprentissage et l'emploi local." },
        "made_bzh": { title: "Made.Bzh", text: "<strong>Le Phare de l'Économie Maritime et Agricole</strong><br><br>Made.Bzh est le portail de la souveraineté bretonne. Il rassemble les acteurs de la terre (agriculteurs, éleveurs) et de la mer (pêcheurs, algoculteurs, chantiers navals) sur une marketplace unique. La plateforme vise à désintermédier les chaînes alimentaires et industrielles pour garantir une rémunération juste aux producteurs qui nourrissent et équipent le pays.<br><br>Spécifiquement adaptée au territoire, Made.Bzh intègre des fonctionnalités de traçabilité avancée pour les produits de la mer et l'agriculture bio, répondant à une forte demande de transparence. Elle sert aussi de vitrine pour l'innovation maritime (voile de compétition, énergies marines). En proposant des tutoriels sur la transition écologique et des outils de vente directe, Made.Bzh renforce le tissu économique local souvent éloigné des grands centres de décision. Elle permet à la Bretagne d'exporter son identité forte et ses produits d'exception tout en gardant la maîtrise de ses canaux de distribution." },
        "life_paris": { title: "Life.Paris", text: "<strong>Le Gaming Citoyen pour Réenchanter la Ville Lumière</strong><br><br>Life.Paris révolutionne l'interaction entre le citoyen et sa ville en transformant Paris en un immense terrain de jeu 'utile'. Loin des métavers déconnectés, Life.Paris est une application de 'Reality Gaming' où chaque quête a un impact réel. Les joueurs explorent les quartiers, relèvent des défis civiques (propreté, mobilité douce) et découvrent l'histoire cachée de la capitale grâce à la réalité augmentée.<br><br>L'aspect économique est central : les boutiques et artisans de Made.Paris disposent de jumeaux numériques dans le jeu. Les joueurs peuvent visiter virtuellement un atelier, gagner des récompenses utilisables dans le commerce réel et interagir avec les créateurs. Life.Paris est aussi un outil éducatif puissant pour les jeunes, leur permettant de découvrir les métiers en tension via des mini-jeux sponsorisés par des entreprises locales. C'est la fusion du divertissement, de la culture et de l'emploi, recréant du lien social dans une ville souvent anonyme." },
        "life_alsace": { title: "Life.Alsace", text: "<strong>L'Immersion Ludique au Cœur du Patrimoine et de l'Industrie</strong><br><br>Life.Alsace utilise le jeu vidéo pour transmettre la culture et dynamiser l'économie régionale. La plateforme permet aux utilisateurs de plonger dans les légendes alsaciennes et l'histoire locale à travers des aventures interactives géolocalisées. Mais l'ambition dépasse le folklore : Life.Alsace gamifie la découverte du tissu industriel régional.<br><br>Les jeunes peuvent visiter des usines virtuelles, comprendre les processus de fabrication (automobile, chimie verte) et valider des compétences techniques via le jeu, créant des passerelles directes vers l'apprentissage et l'emploi. Le jeu valorise également le tourisme vert et les circuits courts : accomplir des quêtes chez des producteurs locaux débloque des avantages exclusifs. Life.Alsace connecte les générations, permettant aux anciens de transmettre la mémoire des lieux et aux plus jeunes de s'approprier leur territoire de manière moderne et active." },
        "life_bzh": { title: "Life.Bzh", text: "<strong>L'Aventure Numérique entre Terre et Mer</strong><br><br>Life.Bzh est une plateforme d'expérience immersive dédiée à l'identité bretonne. Elle transforme la région en un vaste jeu de rôle grandeur nature où la protection de l'environnement (côtes, forêts) et la culture (langue, musique, festivals) sont au cœur du gameplay. Les joueurs deviennent les gardiens virtuels et réels de leur patrimoine.<br><br>Le jeu intègre fortement l'économie maritime et agricole : les utilisateurs peuvent gérer virtuellement des exploitations ou des navires basés sur des données réelles, apprenant ainsi les défis de ces métiers. Les créateurs de contenu (UGC) peuvent proposer des scénarios basés sur les mythes locaux. Life.Bzh sert de relais aux initiatives écologiques (nettoyage de plages gamifié) et connecte les joueurs aux produits de Made.Bzh. C'est un outil puissant pour lutter contre la désertification rurale en rendant chaque village attractif et interactif pour la jeunesse connectée." },
        "smart_paris": { title: "Smart.Paris", text: "<strong>Le Cockpit de Données pour une Ville Intelligente et Humaine</strong><br><br>Smart.Paris est le jumeau numérique de la capitale, un outil de visualisation de données en temps réel destiné aux décideurs, aux entreprises et aux citoyens. Il agrège des milliards de points de données (flux de transports, consommation énergétique, activité économique, qualité de l'air) pour offrir une lecture claire et actionnable du métabolisme urbain.<br><br>Loin d'être une 'Black Box' technocratique, Smart.Paris est un outil démocratique. Il permet de visualiser l'impact des politiques publiques, d'identifier les zones de chaleur ou les déserts commerciaux. Pour les entreprises, c'est un outil de intelligence économique pour choisir où s'implanter. Pour les citoyens, c'est un outil de transparence sur l'usage de l'espace public. Smart.Paris permet de 'voyager dans le temps' pour voir l'évolution de la ville et simuler les futurs possibles, aidant à prendre des décisions collectives éclairées pour une métropole plus respirable et efficace." },
        "smart_alsace": { title: "Smart.Alsace", text: "<strong>L'Intelligence Territoriale au Service de l'Industrie et des Flux</strong><br><br>Smart.Alsace est la plateforme de pilotage stratégique de la région Grand Est. Elle se concentre sur la visualisation des flux industriels, logistiques et énergétiques transfrontaliers. Grâce à l'Open Data et aux capteurs IoT, elle offre une cartographie précise de la chaîne de valeur régionale, permettant d'identifier les opportunités de symbiose industrielle (les déchets de l'un deviennent les ressources de l'autre).<br><br>Elle sert d'outil d'aide à la décision pour l'aménagement du territoire, la gestion des nappes phréatiques et l'optimisation des réseaux de transport. Smart.Alsace permet aux élus et aux investisseurs de visualiser la densité du tissu RSE et la réalité de la transition écologique sur le terrain. C'est un outil de souveraineté régionale qui permet de monitorer l'autonomie énergétique et alimentaire de l'Alsace en temps réel, favorisant une économie circulaire optimisée par la data." },
        "smart_bzh": { title: "Smart.Bzh", text: "<strong>La Vigie Numérique des Ressources Naturelles et Maritimes</strong><br><br>Smart.Bzh est le système de monitoring environnemental et économique de la Bretagne. Il combine des données satellitaires, maritimes et terrestres pour surveiller la santé des côtes, la qualité des eaux et l'activité agricole. C'est un outil vital pour concilier développement économique (tourisme, agriculture intensive) et préservation de la biodiversité.<br><br>La plateforme permet aux décideurs locaux de visualiser les impacts climatiques et de gérer les ressources en eau de manière prédictive. Elle cartographie également les dynamiques économiques rurales pour lutter contre la fracture territoriale. Smart.Bzh offre aux citoyens et aux professionnels de la mer des données précieuses sur les conditions météorologiques et les stocks halieutiques. C'est l'outil de la résilience bretonne, permettant de piloter le territoire avec une conscience aiguë de ses limites écologiques et de ses potentiels renouvelables." },
        "impact_data": { title: "ImpactData.fr", text: "<strong>L'API de la Vérité Écologique et du 'Zero Greenwashing'</strong><br><br>ImpactData.fr est le moteur de confiance de tout l'écosystème. C'est une API SaaS (Software as a Service) universale qui remplace les promesses marketing par des preuves numériques infalsifiables. Elle se connecte aux bases de données d'État (ADEME, Agence Bio), aux certificateurs privés et aux données financières pour auditer en temps réel la réalité RSE de chaque entreprise et produit.<br><br>Sa mission est double : auditer et distribuer la vérité. Elle génère des 'Impact Scores' transparents qui alimentent les marketplaces Made, les outils d'achats publics et les jumeaux numériques. ImpactData permet aux entreprises vertueuses de valoriser leurs efforts sans surcoût publicitaire, et permet aux consommateurs et acheteurs de choisir en toute lucidité. En structurant la donnée d'impact, ImpactData.fr devient le standard de conformité pour anticiper les régulations européennes (CSRD), transformant la contrainte réglementaire en avantage compétitif numérique." },
        "achats_eco": { title: "Achats.eco", text: "<strong>Le Facilitateur de Commande Publique et de Redistribution</strong><br><br>Achats.eco est la plateforme qui démocratise l'accès aux 200 milliards d'euros de la commande publique. Elle brise le monopole des géants du service en permettant aux Mairies, Hôpitaux et Régions d'acheter directement auprès des PME et artisans locaux. L'objectif est de réorienter l'argent public vers l'économie réelle et les territoires.<br><br>Son innovation majeure réside dans l'automatisation de la 'Cotraitance'. L'algorithme d'Achats.eco permet à des petites entreprises de se grouper instantanément pour répondre ensemble à de gros appels d'offres, offrant ainsi une alternative crédible et locale aux multinationales. La plateforme garantit aux acheteurs la conformité juridique et RSE de leurs fournisseurs grâce à ImpactData. C'est un outil de justice économique qui baisse les coûts pour l'État tout en augmentant les marges des producteurs, assurant que l'impôt finance l'emploi local." },
        "fournisseurs_eco": { title: "Fournisseurs.eco", text: "<strong>L'Index de Résilience et de Sourcing Industriel</strong><br><br>Fournisseurs.eco est l'annuaire dynamique et qualifié de l'industrie et de l'artisanat européens. Contrairement aux annuaires statiques, c'est un outil de 'Sourcing 4.0' qui permet de cartographier et de sécuriser les chaînes d'approvisionnement. Il connecte les donneurs d'ordre (industriels, grands groupes) avec des sous-traitants et fournisseurs de matières premières capables de prouver leurs compétences et leur solidité financière.<br><br>La plateforme favorise la relocalisation en rendant visibles les capacités de production insoupçonnées sur le territoire. Elle met en avant les acteurs de l'Économie Sociale et Solidaire (ESS) et les entreprises inclusives. Fournisseurs.eco permet de créer des chaînes de valeur courtes, résilientes aux crises logistiques mondiales. C'est l'outil indispensable pour tout professionnel souhaitant construire un produit éthique, durable et souverain, en identifiant les partenaires fiables à proximité immédiate." }
    }
  },
  de: {
    ui: {
      desktop: { register: "Registrieren", projects: "Meine Projekte", vision: "Die Vision", plan: "Der Plan", big_tech: "Big Tech" },
      start_menu: { vision: "Die Vision", plan: "Der Plan", explorer: "Explorer", docs: "Dokumentation", website: "Webseite", contact: "Kontakt", shutdown: "Herunterfahren..." }
    },
    vision: {
      title: "Vision: CircularOS.eu",
      subtitle: "Das Betriebssystem der europäischen Kreislaufwirtschaft.",
      urgency_title: "🚨 DIE DRINGLICHKEIT DES HANDELNS",
      quote_trump: "„Ich denke, sie sind schwach, aber ich denke auch, dass sie so politisch korrekt sein wollen. Ich denke, sie wissen nicht, was sie tun sollen. Europa weiß nicht, was es tun soll.“ — Donald Trump, Dezember 2025.",
      quote_caffarra: "„Wir müssen digitale Infrastrukturen bauen, die uns gehören, die wir besitzen. Sonst sind wir verloren.“ — Dr. Cristina Caffarra, Honorarprofessorin am University College London, Februar 2025.",
      electroshock_text: "Die Analyse ist brutal, aber sie muss als Elektroschock dienen.",
      wakeup_title: "DER WECKRUF",
      wakeup_text: "Europa steht an einem Scheideweg. Während Amerika seine eigene kulturelle und protektionistische Revolution durchläuft und China seine digitale Hegemonie festigt, stehen wir vor einer kritischen Frage: Wer die Daten kontrolliert, kontrolliert die Realität.",
      paradox_title: "Das Paradoxon",
      paradox_list: [
        "500 Millionen Einwohner",
        "Ein BIP vergleichbar mit dem der Vereinigten Staaten",
        "Äquivalente technologische Gesamtausgaben"
      ],
      system_missing: "Wir haben die Mittel, wir haben den Markt, wir haben die Geschichte. Aber wir haben nicht das System.",
      gap_text: "Man sagt uns, wir seien nicht innovativ genug. Das ist falsch. Die Lücke ist nicht technologisch, sie ist strukturell. Unsere finanzielle Kraft wird umgeleitet: Wir geben Milliarden aus, aber dieses Geld fließt als Miete an ausländische Akteure, anstatt unsere eigenen Vermögenswerte aufzubauen. Wir importieren 80% unserer digitalen Technologien. Wir finanzieren unsere eigene Abhängigkeit und schaffen eine kritische systemische Verwundbarkeit.",
      innocence_over: "Die Ära der Unschuld ist vorbei. Um diese Lücke zu schließen, können wir uns nicht länger damit begnügen, die Werkzeuge anderer zu regulieren. Wir müssen unsere eigenen Werkzeuge schmieden.",
      battle_plan: "Nehmen Sie diesen Aufruf als das, was er ist: den Schlachtplan zum Aufbau der Infrastruktur unseres Morgens.",
      mission_title: "DIE MISSION: NEUKODIERUNG DES WIRTSCHAFTSSYSTEMS",
      mission_text: "CircularOS (Circular Operating System) ist keine einfache Anwendung. Es ist das souveräne und verteilte Betriebssystem, das es Europa ermöglicht, seine Ressourcen, Daten und Werte frei zirkulieren zu lassen, ohne externe Abhängigkeit.",
      os_why: "Warum ein „OS“ für die Wirtschaft? Im 21. Jahrhundert ist die Maxime einfach: Wer die Daten kontrolliert, kontrolliert die Realität.",
      foreign_os_list: [
        "Unsere kommerziellen Daten werden in Clouds gehostet, die extraterritorialen Gesetzen unterliegen (Cloud Act).",
        "Unsere logistischen Ströme hängen von undurchsichtigen Algorithmen ab, die für massive Importe optimiert sind.",
        "Unsere sozialen Interaktionen laufen über extraktive Plattformen."
      ],
      tenants_text: "Wir haben unsere Wirtschaft digitalisiert, aber vergessen, die Fundamente zu bauen. Wir sind Mieter auf unserem eigenen Kontinent.",
      pillars_title: "DIE 5 SÄULEN DER SOUVERÄNITÄT",
      pillars: [
        "Der Krisen-Enthüller: Die jüngste Konvergenz der Krisen (Pandemie, Kriege, geopolitische Instabilität) wirkte wie ein Schock und machte sichtbar, was unsichtbar war: unsere kritische Abhängigkeit von zugrunde liegenden digitalen Infrastrukturen.",
        "Die Unmöglichkeit, ohne Fundamente zu reagieren: In Krisenzeiten ist es zu spät, die für Notfall-Innovationen notwendige Infrastruktur aufzubauen. Wenn souveräne Basen nicht bereits vorhanden sind, wenn das Problem auftritt, ist der Kampf bereits verloren.",
        "Vom Zubehör zum Wesentlichen: Digitale Infrastruktur muss ihren Status ändern: Sie ist kein „Nice-to-have“ mehr, sondern ein Überlebensimperativ („Must-have“). Diese kritische Ressource fällt nicht vom Himmel; sie erfordert bewusste und nachhaltige Investitionen.",
        "Ein Konsens jenseits der Politik: Technologische Souveränität ist kein parteiisches Thema (weder links noch rechts), sondern eine Frage des Realismus. Die Sicherung unserer aktuellen Grundlagen ist die absolute Voraussetzung, bevor wir überhaupt daran denken können, wettbewerbsfähige Alternativen zu schaffen.",
        "Das Ende des „Innovationsfetischismus“: Die Besessenheit von Neuheit ist Ressourcenverschwendung, wenn sie auf Kosten der Wartung geht. Wahrer „gesunder Menschenverstand“ bedeutet zu verstehen, dass es keine nachhaltige Innovation ohne gewartete, sichere und zuverlässige Infrastruktur gibt."
      ],
      architecture_title: "ARCHITEKTUR: EIN KERN UND MODULE",
      architecture_text: "CircularOS funktioniert wie ein Betriebssystem, das auf die Realwirtschaft angewendet wird. Es bietet die Grundbausteine, die Territorien und Unternehmen nutzen können, um ihre eigenen souveränen Lösungen zu bauen.",
      kernel_title: "🔐 DER KERN (THE KERNEL): VERTRAUEN UND IDENTITÄT",
      kernel_desc: "Im Herzen des Systems haben wir die Wahrheit platziert.",
      kernel_list: [
        "Souveräne Identität: Verwaltung digitaler Identitäten für Unternehmen und Bürger. Wir garantieren, dass „wer handelt“ tatsächlich „derjenige ist, der er vorgibt zu sein“.",
        "Beweis-Maschine (Proof Engine): CircularOS integriert nativ die ImpactData API. In unserem OS haben Daten nur Wert, wenn sie verifiziert sind (CSR, Kohlenstoff, Herkunft). Es ist ein beweisbasiertes System."
      ],
      stack_title: "🧱 DIE ANWENDUNGSSCHICHTEN (THE STACK)",
      stack_desc: "Auf diesem Kern haben wir Standardmodule entwickelt:",
      modules_list: [
        "Austausch-Modul (Handel): Treibt lokale Marktplätze an. Es verwaltet Transaktionen ohne räuberische Provisionen (Rückgabe von 15% Marge an die Unternehmen), lokale Logistik und Rückverfolgbarkeit.",
        "Interaktions-Modul (Sozial): Verwaltet die Gamifizierung der realen Welt und Verbindungen zwischen physischen und virtuellen Welten. Es verwandelt den passiven Bürger in einen engagierten Akteur.",
        "Intelligenz-Modul (Kognition): Verwaltet Big-Data-Aggregation, kartografische Visualisierung (Digitale Zwillinge) und strategische Entscheidungshilfen.",
        "Fluss-Modul (Lieferkette): Verwaltet B2B-Matching, Unternehmensgruppierung (Co-Contracting) und Zugang zu öffentlichen Ausschreibungen."
      ],
      connections_title: "VISION: VON DER FRAGMENTIERUNG ZUR „GROSSEN VERNETZUNG“",
      connections_subtitle: "Reparatur des digitalen und sozialen Bruchs in Europa.",
      connections_text: "Europa ist ein wirtschaftlicher Riese mit digitalen tönernen Füßen, weil es in Silos lebt (Gesundheitsdaten getrennt von der Industrie, Handwerker getrennt von öffentlichen Märkten). CircularOS ist das Gegenmittel zu dieser Fragmentierung. Wir nutzen Technologie, um Welten zu verbinden.",
      links_list: [
        "🔗 Verbindung von Produktion und Konsum: In CircularOS ist ein Produkt kein inertes Objekt; es ist ein lebendes Datenpaket. Das Produkt „erzählt“ seine Geschichte (wer es gemacht hat, wo, Kohlenstoff). Der Verbraucher erhält diese Info ungefiltert. Ergebnis: Der Markt reguliert sich selbst in Richtung Qualität, weil Tugend sichtbar wird.",
        "🔗 Verbindung von Wirtschaft und Territorium: Das Unternehmen ist nicht mehr nur eine Registrierungsnummer, es ist eine geografische Einheit. Die Stadt sieht ihre Ströme in Echtzeit und kann ihre öffentlichen Ausgaben auf lokale Akteure lenken. Ergebnis: Öffentliches Geld fließt nicht mehr ab. Es bewässert das lokale Gewebe.",
        "🔗 Verbindung von Jugend und Realität: Wir weigern uns, das Virtuelle als Fluchtort zuzulassen. Wir injizieren reale Daten (Handwerker, Geschichte, Industrie) in virtuelle Welten. Ergebnis: Kinder lernen spielerisch die Berufe ihrer Region. Wir bilden die Produzenten von morgen aus.",
        "🔗 Verbindung von KMU und Macht: Dank Co-Contracting-Algorithmen schließen sich KMU dynamisch zusammen, um Gruppen zu bilden, die auf große Herausforderungen reagieren können. Ergebnis: Die Stärke des Netzwerks ersetzt die Zerbrechlichkeit des Monopols."
      ],
      role_title: "UNSERE ROLLE IN DER EU-ENTWICKLUNG",
      role_subtitle: "Ein strategisches und politisches Engagement.",
      role_text: "CircularOS.eu begnügt sich nicht damit, Code bereitzustellen. Wir beteiligen uns aktiv am Aufbau der Zukunft der Europäischen Union durch vier Haupthebel:",
      levers_list: [
        "Digitale Regulierung: Wir integrieren europäische Standards (CSRD, DSGVO, DMA) nativ, um Compliance zu einem Wettbewerbsvorteil statt zu einer Einschränkung zu machen.",
        "Technologische Werkzeuge: Wir stellen die notwendige souveräne Infrastruktur bereit, damit Europa keine digitale Kolonie mehr ist, sondern eine produzierende Macht.",
        "Strategische Beziehungen: Wir knüpfen Verbindungen zwischen Industrien, Regierungen und Bürgern, um einen dichten und widerstandsfähigen Binnenmarkt zu schaffen.",
        "Die Publizität der Werte: Wir fördern ein technologisches Modell, das mit den europäischen demokratischen Werten übereinstimmt: Transparenz, Inklusivität und Nachhaltigkeit."
      ],
      utility_text: "Konkreter Nutzen für Europa: Durch die Annahme dieses Standards gewinnt Europa seine wirtschaftliche Marge zurück (Ende ausländischer Provisionen), beschleunigt seine ökologische Transformation durch Daten und vereinheitlicht endlich seinen Binnenmarkt.",
      final_call: "Es ist Zeit, unsere eigenen Werkzeuge zu produzieren. Es ist Zeit, unsere Zukunft zu besitzen. Bringt die Demo."
    },
    plan: {
      title: "✨ Unser 10-Punkte-Plan",
      subtitle: "Für ein souveränes & wohlhabendes Ökosystem",
      intro: "Im Einklang mit dem Rahmenwerk des Future Institute verpflichtet sich CircularOS zu folgendem Fahrplan, um unser digitales und wirtschaftliches Schicksal zurückzugewinnen:",
      points: [
        {
          title: "1. 🛠️ FÖRDERUNG DER „MACHER“ & KMU",
          text: "Wir stärken europäische Handwerker, Startups und industrielle KMU (Kleine und mittlere Unternehmen), indem wir ihnen souveräne SaaS-Tools und direkten Marktzugang (Made.Regions) bieten. Wir ersetzen räuberische Provisionen durch ein Modell, das Skalierung und lokale Investitionen unterstützt.",
          action: "Aktion: Bereitstellung kostenloser oder kostengünstiger digitaler Verwaltungssoftware (CircularOS ERP) für alle registrierten KMU. Aufbau nativer Integrationen mit Made.Regions, damit KMU B2C und B2B ohne räuberische Provisionen verkaufen können. Ersatz von provisionsbasierten Modellen (15-30% an Amazon/Shopify) durch transparente Preise (2-3% Plattformgebühr, max).",
          impact: "Auswirkung: Stopp der jährlichen Kapitalflucht von über 200 Mrd. $. Einnahmen europäischer KMU bleiben in Europa."
        },
        {
          title: "2. 💶 STOPP DES WIRTSCHAFTLICHEN ABFLUSSES",
          text: "Wir verhindern den Verlust von Milliarden an wirtschaftlichem Wert. Durch den Aufbau unserer eigenen Transaktionsinfrastruktur stellen wir sicher, dass Margen und Steuereinnahmen in Europa bleiben, um unsere Schulen und Krankenhäuser zu finanzieren, anstatt in Steuerschlupflöchern ausländischer Tech-Giganten zu verschwinden.",
          action: "Aktion: Einsatz von Made.Paris, Made.Alsace, Made.Bzh als Proof-of-Concept-Marktplätze. Sicherstellen, dass alle Einnahmen in Europa bleiben. Eliminierung von Zwischenhändlern, die 30-40% Marge abschöpfen (multinationale Distributoren).",
          impact: "Auswirkung: Von jedem 100 €, die für europäische Waren ausgegeben werden, bleiben 70-85 € im Territorium, anstatt ins Silicon Valley oder nach Singapur abzufließen."
        },
        {
          title: "3. 🇪🇺 AUFBAU DES SOUVERÄNEN „EUROSTACK“",
          text: "Wir unterstützen modernste Open-Source-Computerinfrastruktur. CircularOS bietet die wesentliche Softwareschicht, die souveräne Clouds mit der Realwirtschaft verbindet und gleiche Wettbewerbsbedingungen schafft, unter denen europäische Technologie-Champions entstehen können.",
          action: "Aktion: Einsatz von CircularOS auf souveräner Cloud-Infrastruktur (SecNumCloud, Schrems II-konform). Verbindung modernster Open-Source-Stacks (Linux, PostgreSQL, Kubernetes).",
          impact: "Auswirkung: Europäische Technologie-Champions können endlich unter fairen Bedingungen entstehen, frei von extraterritorialen US-Gesetzen (Cloud Act) und chinesischen Hintertüren."
        },
        {
          title: "4. 🤖 KI FÜR DIE REALE WELT VORANTREIBEN",
          text: "Wir investieren in KI und maschinelles Lernen, nicht um gefälschte Inhalte zu generieren, sondern um die Realität zu optimieren. Durch Smart.Regions und ImpactData nutzen wir KI, um Lieferketten zu modellieren, den Energiebedarf vorherzusagen und die Fertigungstechnik voranzutreiben.",
          action: "Aktion: Einsatz von KI-gestützten Smart.Regions für Lieferkettenmodellierung und Energievorhersage. Nutzung von maschinellem Lernen in ImpactData zur Erkennung von Greenwashing und Zertifizierung echter Auswirkungen.",
          impact: "Auswirkung: KI wird zu einem Werkzeug für Sichtbarkeit und Resilienz, nicht für Manipulation und Überwachung."
        },
        {
          title: "5. 🔌 RADIKALE INTEROPERABILITÄT VORSCHREIBEN",
          text: "Wir brechen die Silos auf. CircularOS schreibt offene Standards und APIs vor und stellt sicher, dass Daten aus Landwirtschaft, Gesundheit und Industrie miteinander kommunizieren können. Wir schützen die Wahlfreiheit der Unternehmen, indem wir Vendor Lock-in und „Walled Gardens“ verhindern.",
          action: "Aktion: Veröffentlichung offener APIs für alle Module (Made, Life, Smart, Achats, Fournisseurs, ImpactData). Sicherstellung nahtloser Datenkommunikation.",
          impact: "Auswirkung: Kein Akteur wird unverzichtbar. Jede Region kann CircularOS forken und darauf aufbauen."
        },
        {
          title: "6. 🧠 EINFÜHRUNG ALGORITHMISCHER SOUVERÄNITÄT",
          text: "Wir reformieren die soziale Interaktion, indem wir süchtig machende, polarisierungsgetriebene Algorithmen durch „Life“-Algorithmen ersetzen. Wir ermöglichen es Unternehmen und Bürgern, über Schnittstellen zu interagieren, die reale Auswirkungen, Bildung und lokale Verbindungen belohnen.",
          action: "Aktion: Einsatz von Life.Paris und Life.Regions als Open-Source-Alternativen zu TikTok, Meta, Roblox. Entwicklung von Algorithmen, die reale Auswirkungen belohnen – keine Dopamin-Kicks.",
          impact: "Auswirkung: Junge Menschen verbringen Zeit auf Plattformen, die sie mit ihrem Territorium verbinden, nicht mit algorithmischer Manipulation."
        },
        {
          title: "7. ❤️ DESIGN FÜR MENTALE & BÜRGERLICHE GESUNDHEIT",
          text: "Wir gehen die Krise der Bildschirmsucht an. CircularOS fördert „Play-to-Act“-Designs (Life.Paris), bei denen digitales Engagement eine Brücke zu körperlicher Aktivität, bürgerlicher Teilhabe und Produktivität ist, anstatt eine Dopaminfalle.",
          action: "Aktion: Gestaltung von Life.Paris so, dass digitales Engagement zu physischer Aktivität führt. Jede Quest im Spiel erfordert eine Handlung in der realen Welt (Besuch eines Produzenten, Reinigung eines Parks, Erlernen eines Handwerks).",
          impact: "Auswirkung: Bürger gewinnen Autonomie zurück. Die psychische Gesundheit verbessert sich. Gemeinschaften werden gestärkt."
        },
        {
          title: "8. 🛡️ REVOLUTION DER „VERTRAUENSÖKONOMIE“",
          text: "Wir reformieren den digitalen Markt, indem wir das Werbemodell „Bezahlen, um gesehen zu werden“ durch ein Modell „Bewiesen gut zu sein“ ersetzen. Wir belohnen europäische Verleger und Produzenten basierend auf verifizierten Impact Scores (ImpactData), nicht nur auf Marketingbudgets.",
          action: "Aktion: Aufbau von ImpactData als Standard für verifizierte Glaubwürdigkeit. Ermöglichung, dass kleine, tugendhafte Produzenten große, täuschende übertreffen.",
          impact: "Auswirkung: Das beste Produkt gewinnt, weil Tugend sichtbar ist. Qualität wird zur neuen Währung."
        },
        {
          title: "9. 🔐 WIEDERHERSTELLUNG DER ABSOLUTEN DATENKONTROLLE",
          text: "Wir geben Verbrauchern und Unternehmen die wirkliche Kontrolle über ihre Daten zurück. Über eine einzige, souveräne Benutzeroberfläche können Bürger ihren Konsumfußabdruck verfolgen und Unternehmen ihre Geschäftsgeheimnisse vor extraterritorialer Überwachung schützen.",
          action: "Aktion: Implementierung von Single Sign-On durch das CircularOS-Identitätssystem. Bürger und Unternehmen können ihren Daten-Fußabdruck jederzeit verfolgen, auditieren und löschen.",
          impact: "Auswirkung: Nutzer sind Bürger mit Rechten, keine Produkte, die geerntet werden. Europäische Daten bleiben europäisch."
        },
        {
          title: "10. 🌍 TECH IM EINKLANG MIT DER KLIMANAHRHEIT",
          text: "Wir machen den Green Deal operativ. Durch die Einbettung transparenter Emissionsbewertungen (ImpactData) in jede B2B- und B2C-Transaktion setzen wir ehrgeizige Effizienzziele, die messbar, verifizierbar und wirtschaftlich lohnend sind.",
          action: "Aktion: Integration von ImpactData Carbon Scoring in Made.Regions, Achats.eco und Smart-Plattformen. Grüne Entscheidungen wirtschaftlich lohnend machen.",
          impact: "Auswirkung: Der Übergang wird wirtschaftlich beschleunigend, nicht zur Last. Jeder ausgegebene Euro treibt die Effizienz voran."
        }
      ],
      call_to_action: "DER AUFRUF ZUM HANDELN\nDies ist kein Strategiedokument. Dies ist ein Schlachtplan.\nEuropa muss wählen: Weiterhin als Kolonie von GAFAM und China existieren oder die Infrastruktur bauen, um unsere Zukunft zu besitzen.\nDie Zeit des Redens ist vorbei. Zeit zu bauen. Zeit zu demonstrieren. Zeit zurückzufordern.\nCircularOS.eu: Digitale Souveränität für das Gemeinwohl"
    },
    projects: {
      "made_fr": {
        "title": "Made.fr",
        "text": "Das Schaufenster der Exzellenz und nationaler Investitions-Hub\nMade.fr ist weit mehr als ein Portal: Es ist das Flaggschiff der französischen industriellen und kulturellen Rückeroberung. Seine Mission ist es, alle lebendigen Kräfte des Landes zu bündeln, um international ein einheitliches und mächtiges Bild zu projizieren. Im Gegensatz zu regionalen Plattformen, die auf Direktverkauf ausgerichtet sind, agiert Made.fr als souveräne Werbeagentur. Sie aggregiert das beste Know-how (DeepTech, Industrie 4.0, Kunsthandwerk), um ausländische Investoren anzuziehen und die Weltmärkte durch datengestützte Beweise zu beruhigen.\nEs ist auch ein Hub für Kompetenzen und Ressourcen. Made.fr verbindet Technologie-Startups mit traditionellen Industrien, um die Modernisierung der Produktionsmittel zu beschleunigen. Die Plattform bietet fortgeschrittene Tutorials zur Digitalisierung von KMU und dient als Einstiegspunkt für große internationale Auftraggeber, die in Frankreich beschaffen wollen. Durch die Risikominimierung von Investitionen mittels zertifizierter Daten verwandelt Made.fr die „Marke Frankreich“ in ein greifbares wirtschaftliches Gut und beweist, dass unser Land die grüne und intelligente Fabrik Europas ist."
      },
      "made_paris": {
        "title": "Made.Paris",
        "text": "Der Marktplatz für kurze Wege und Hauptstadt-Innovation\nMade.Paris ist das Werkzeug für Widerstand und Wachstum für die Produzenten der Île-de-France. Angesichts der Ausbeutung durch E-Commerce-Giganten, die Margen abschöpfen, bietet dieser Marktplatz eine souveräne, lokale und ethische Alternative. Er ermöglicht Handwerkern des Faubourg Saint-Antoine, Modeschöpfern des Sentier und Startups der Station F, direkt an Pariser (B2C) und lokale Unternehmen (B2B) ohne missbräuchliche Provisionen zu verkaufen.\nÜber den Verkauf hinaus bietet Made.Paris ein komplettes „Zirkuläres SaaS“: ein vereinfachtes Verwaltungs-Dashboard, das Kleinstunternehmen hilft, ihre Bestände, Rechnungsstellung und dekarbonisierte städtische Logistik zu verwalten. Die Plattform integriert Tutorials, um Handwerkern bei der Digitalisierung und der Aufwertung ihrer Labels (Fabriqué à Paris) zu helfen. Durch die direkte Verbindung von Herstellungsort und Konsumort reduziert Made.Paris drastisch den CO2-Fußabdruck und gibt den Produzenten Kaufkraft zurück, wodurch eine dichte und solidarische Nahversorgungswirtschaft im Herzen der Metropole neu geschaffen wird."
      },
      "made_alsace": {
        "title": "Made.Alsace",
        "text": "Die Allianz aus Tradition und Industrie 4.0\nMade.Alsace ist die Plattform, die einer der industriellsten und identitätsstärksten Regionen Europas gewidmet ist. Sie verbindet die Kraft der elsässischen Industrie-KMU mit dem Reichtum ihres traditionellen Handwerks. Ziel ist es, ein robustes lokales Angebot zu strukturieren, das grenzüberschreitende Bedürfnisse erfüllen kann und gleichzeitig die Kreislaufwirtschaft im Rheingebiet fördert.\nDie Plattform legt besonderen Wert auf die Aufwertung lokaler Exzellenzbereiche (Mechanik, Agrar-Nahrungsmittel, Holz) bei Verbrauchern und professionellen Einkäufern. Sie bietet spezifische Werkzeuge für die Verwaltung lokaler und grenzüberschreitender Zertifizierungen. Made.Alsace ermöglicht es Produzenten, ihre Logistik zu bündeln und an Sichtbarkeit gegenüber internationalen Wettbewerbern zu gewinnen. Es ist ein Instrument des regionalen Stolzes, das „Made in Alsace“ in ein technisches und ökologisches Qualitätsversprechen verwandelt und sicherstellt, dass die Wertschöpfung in der Region bleibt, um Ausbildung und lokale Arbeitsplätze zu finanzieren."
      },
      "made_bzh": {
        "title": "Made.Bzh",
        "text": "Der Leuchtturm der maritimen und landwirtschaftlichen Wirtschaft\nMade.Bzh ist das Portal der bretonischen Souveränität. Es versammelt die Akteure von Land (Landwirte, Züchter) und Meer (Fischer, Algenzüchter, Werften) auf einem einzigen Marktplatz. Die Plattform zielt darauf ab, Lebensmittel- und Industrieketten zu disintermediieren, um eine gerechte Entlohnung für die Produzenten zu garantieren, die das Land ernähren und ausrüsten.\nSpezifisch an das Territorium angepasst, integriert Made.Bzh Funktionen für fortschrittliche Rückverfolgbarkeit für Meeresprodukte und Bio-Landwirtschaft, um eine starke Nachfrage nach Transparenz zu erfüllen. Sie dient auch als Schaufenster für maritime Innovationen (Wettkampfsegeln, Meeresenergien). Durch das Angebot von Tutorials zur ökologischen Wende und Werkzeugen für den Direktverkauf stärkt Made.Bzh das lokale Wirtschaftsgewebe, das oft weit von den großen Entscheidungszentren entfernt ist. Sie ermöglicht es der Bretagne, ihre starke Identität und ihre außergewöhnlichen Produkte zu exportieren und gleichzeitig die Kontrolle über ihre Vertriebskanäle zu behalten."
      },
      "life_paris": {
        "title": "Life.Paris",
        "text": "Citizen Gaming zur Wiederverzauberung der Stadt der Lichter\nLife.Paris revolutioniert die Interaktion zwischen dem Bürger und seiner Stadt, indem es Paris in ein riesiges „nützliches“ Spielfeld verwandelt. Weit entfernt von abgekoppelten Metaversen ist Life.Paris eine „Reality Gaming“-Anwendung, bei der jede Quest eine reale Auswirkung hat. Spieler erkunden Viertel, meistern bürgerliche Herausforderungen (Sauberkeit, sanfte Mobilität) und entdecken die verborgene Geschichte der Hauptstadt durch Augmented Reality.\nDer wirtschaftliche Aspekt ist zentral: Die Geschäfte und Handwerker von Made.Paris verfügen über digitale Zwillinge im Spiel. Spieler können virtuell eine Werkstatt besuchen, Belohnungen gewinnen, die im realen Handel nutzbar sind, und mit den Schöpfern interagieren. Life.Paris ist auch ein mächtiges Bildungswerkzeug für Jugendliche, das es ihnen ermöglicht, Mangelberufe durch Minispiele zu entdecken, die von lokalen Unternehmen gesponsert werden. Es ist die Verschmelzung von Unterhaltung, Kultur und Beschäftigung, die soziale Bindungen in einer oft anonymen Stadt wiederherstellt."
      },
      "life_alsace": {
        "title": "Life.Alsace",
        "text": "Spielerische Immersion im Herzen von Erbe und Industrie\nLife.Alsace nutzt Videospiele, um Kultur zu vermitteln und die regionale Wirtschaft zu dynamisieren. Die Plattform ermöglicht es Nutzern, durch interaktive, geolokalisierte Abenteuer in elsässische Legenden und die lokale Geschichte einzutauchen. Aber der Ehrgeiz geht über die Folklore hinaus: Life.Alsace gamifiziert die Entdeckung des regionalen Industriegewebes.\nJugendliche können virtuelle Fabriken besuchen, Fertigungsprozesse (Automobil, grüne Chemie) verstehen und technische Fähigkeiten über das Spiel validieren, was direkte Brücken zu Ausbildung und Beschäftigung schafft. Das Spiel wertet auch den grünen Tourismus und kurze Wege auf: Das Erfüllen von Quests bei lokalen Produzenten schaltet exklusive Vorteile frei. Life.Alsace verbindet die Generationen, ermöglicht es den Älteren, das Gedächtnis der Orte weiterzugeben, und den Jüngeren, sich ihr Territorium auf moderne und aktive Weise anzueignen."
      },
      "life_bzh": {
        "title": "Life.Bzh",
        "text": "Das digitale Abenteuer zwischen Land und Meer\nLife.Bzh ist eine immersive Erlebnisplattform, die der bretonischen Identität gewidmet ist. Sie verwandelt die Region in ein riesiges Live-Action-Rollenspiel, bei dem der Schutz der Umwelt (Küsten, Wälder) und die Kultur (Sprache, Musik, Festivals) im Mittelpunkt des Gameplays stehen. Die Spieler werden zu virtuellen und realen Wächtern ihres Erbes.\nDas Spiel integriert stark die maritime und landwirtschaftliche Wirtschaft: Nutzer können virtuell Betriebe oder Schiffe basierend auf realen Daten verwalten und so die Herausforderungen dieser Berufe kennenlernen. Content Creators (UGC) können Szenarien basierend auf lokalen Mythen vorschlagen. Life.Bzh dient als Relais für ökologische Initiativen (gamifizierte Strandreinigung) und verbindet Spieler mit Produkten von Made.Bzh. Es ist ein mächtiges Werkzeug gegen die Landflucht, indem es jedes Dorf für die vernetzte Jugend attraktiv und interaktiv macht."
      },
      "smart_paris": {
        "title": "Smart.Paris",
        "text": "Das Daten-Cockpit für eine intelligente und menschliche Stadt\nSmart.Paris ist der digitale Zwilling der Hauptstadt, ein Echtzeit-Datenvisualisierungstool für Entscheidungsträger, Unternehmen und Bürger. Es aggregiert Milliarden von Datenpunkten (Verkehrsflüsse, Energieverbrauch, wirtschaftliche Aktivität, Luftqualität), um eine klare und umsetzbare Lesart des städtischen Metabolismus zu bieten.\nWeit davon entfernt, eine technokratische „Black Box“ zu sein, ist Smart.Paris ein demokratisches Werkzeug. Es ermöglicht die Visualisierung der Auswirkungen öffentlicher Politiken, die Identifizierung von Hitzeinseln oder kommerziellen Wüsten. Für Unternehmen ist es ein Business-Intelligence-Tool zur Standortwahl. Für Bürger ist es ein Transparenzwerkzeug zur Nutzung des öffentlichen Raums. Smart.Paris ermöglicht „Zeitreisen“, um die Entwicklung der Stadt zu sehen und mögliche Zukünfte zu simulieren, was hilft, fundierte kollektive Entscheidungen für eine atembarere und effizientere Metropole zu treffen."
      },
      "smart_alsace": {
        "title": "Smart.Alsace",
        "text": "Territoriale Intelligenz im Dienste von Industrie und Strömen\nSmart.Alsace ist die strategische Steuerungsplattform der Region Grand Est. Sie konzentriert sich auf die Visualisierung grenzüberschreitender industrieller, logistischer und energetischer Ströme. Dank Open Data und IoT-Sensoren bietet sie eine präzise Kartierung der regionalen Wertschöpfungskette und ermöglicht die Identifizierung von Möglichkeiten zur industriellen Symbiose (die Abfälle des einen werden zu den Ressourcen des anderen).\nSie dient als Entscheidungshilfe für Raumplanung, Grundwassermanagement und Optimierung von Verkehrsnetzen. Smart.Alsace ermöglicht es Gewählten und Investoren, die Dichte des CSR-Gewebes und die Realität der ökologischen Wende vor Ort zu visualisieren. Es ist ein Werkzeug regionaler Souveränität, das es ermöglicht, die Energie- und Ernährungsautonomie des Elsass in Echtzeit zu überwachen und eine durch Daten optimierte Kreislaufwirtschaft zu fördern."
      },
      "smart_bzh": {
        "title": "Smart.Bzh",
        "text": "Der digitale Wachturm für natürliche und maritime Ressourcen\nSmart.Bzh ist das System zur Umwelt- und Wirtschaftsüberwachung der Bretagne. Es kombiniert Satelliten-, Meeres- und Landdaten, um die Gesundheit der Küsten, die Wasserqualität und die landwirtschaftliche Aktivität zu überwachen. Es ist ein vitales Werkzeug, um wirtschaftliche Entwicklung (Tourismus, intensive Landwirtschaft) und Erhalt der Biodiversität in Einklang zu bringen.\nDie Plattform ermöglicht es lokalen Entscheidungsträgern, Klimaauswirkungen zu visualisieren und Wasserressourcen prädiktiv zu verwalten. Sie kartiert auch ländliche Wirtschaftsdynamiken, um gegen die territoriale Spaltung zu kämpfen. Smart.Bzh bietet Bürgern und Meeresprofis wertvolle Daten zu Wetterbedingungen und Fischbeständen. Es ist das Werkzeug der bretonischen Resilienz, das es ermöglicht, das Territorium mit einem scharfen Bewusstsein für seine ökologischen Grenzen und seine erneuerbaren Potenziale zu steuern."
      },
      "impact_data": {
        "title": "ImpactData.fr",
        "text": "Die API der ökologischen Wahrheit und des „Zero Greenwashing“\nImpactData.fr ist der Vertrauensmotor des gesamten Ökosystems. Es ist eine universelle SaaS-API (Software as a Service), die Marketingversprechen durch fälschungssichere digitale Beweise ersetzt. Sie verbindet sich mit staatlichen Datenbanken (ADEME, Agence Bio), privaten Zertifizierern und Finanzdaten, um die CSR-Realität jedes Unternehmens und Produkts in Echtzeit zu auditieren.\nIhre Mission ist doppelt: Auditieren und Verteilen der Wahrheit. Sie generiert transparente „Impact Scores“, die die Made-Marktplätze, öffentliche Beschaffungstools und digitale Zwillinge speisen. ImpactData ermöglicht es tugendhaften Unternehmen, ihre Bemühungen ohne zusätzliche Werbekosten aufzuwerten, und erlaubt Verbrauchern und Einkäufern, in voller Klarheit zu wählen. Durch die Strukturierung von Impact-Daten wird ImpactData.fr zum Compliance-Standard, um europäischen Vorschriften (CSRD) zuvorzukommen und den regulatorischen Zwang in einen digitalen Wettbewerbsvorteil zu verwandeln."
      },
      "achats_eco": {
        "title": "Achats.eco",
        "text": "Der Facilitator für öffentliche Beschaffung und Umverteilung\nAchats.eco ist die Plattform, die den Zugang zu den 200 Milliarden Euro öffentlicher Aufträge demokratisiert. Sie bricht das Monopol der Dienstleistungsriesen, indem sie es Rathäusern, Krankenhäusern und Regionen ermöglicht, direkt bei lokalen KMU und Handwerkern einzukaufen. Ziel ist es, öffentliches Geld in die Realwirtschaft und die Territorien umzuleiten.\nIhre größte Innovation liegt in der Automatisierung des „Co-Contracting“. Der Algorithmus von Achats.eco ermöglicht es kleinen Unternehmen, sich sofort zu gruppieren, um gemeinsam auf große Ausschreibungen zu antworten, und bietet so eine glaubwürdige und lokale Alternative zu multinationalen Konzernen. Die Plattform garantiert Käufern die rechtliche und CSR-Konformität ihrer Lieferanten dank ImpactData. Es ist ein Werkzeug wirtschaftlicher Gerechtigkeit, das die Kosten für den Staat senkt und gleichzeitig die Margen der Produzenten erhöht, um sicherzustellen, dass Steuern lokale Arbeitsplätze finanzieren."
      },
      "fournisseurs_eco": {
        "title": "Fournisseurs.eco",
        "text": "Der Index für Resilienz und industrielles Sourcing\nFournisseurs.eco ist das dynamische und qualifizierte Verzeichnis der europäischen Industrie und des Handwerks. Im Gegensatz zu statischen Verzeichnissen ist es ein „Sourcing 4.0“-Tool, das es ermöglicht, Lieferketten zu kartieren und zu sichern. Es verbindet Auftraggeber (Industrielle, Großkonzerne) mit Subunternehmern und Rohstofflieferanten, die ihre Kompetenzen und finanzielle Solidität nachweisen können.\nDie Plattform fördert die Relokalisierung, indem sie ungeahnte Produktionskapazitäten im Territorium sichtbar macht. Sie hebt Akteure der Sozial- und Solidarwirtschaft (ESS) und inklusive Unternehmen hervor. Fournisseurs.eco ermöglicht die Schaffung kurzer Wertschöpfungsketten, die widerstandsfähig gegen globale Logistikkrisen sind. Es ist das unverzichtbare Werkzeug für jeden Profi, der ein ethisches, nachhaltiges und souveränes Produkt bauen möchte, indem er zuverlässige Partner in unmittelbarer Nähe identifiziert."
      }
    }
  },
  it: {
    ui: {
      desktop: { register: "Registrati", projects: "I Miei Progetti", vision: "La Visione", plan: "Il Piano", big_tech: "Big Tech" },
      start_menu: { vision: "La Visione", plan: "Il Piano", explorer: "Esplora", docs: "Documentazione", website: "Sito Web", contact: "Contatto", shutdown: "Spegni..." }
    },
    vision: {
      title: "Visione: CircularOS.eu",
      subtitle: "Il Sistema Operativo dell'Economia Circolare Europea.",
      urgency_title: "🚨 L'URGENZA DI AGIRE",
      quote_trump: "“Penso che siano deboli, ma penso anche che vogliano essere così politicamente corretti. Penso che non sappiano cosa fare. L'Europa non sa cosa fare.” — Donald Trump, Dicembre 2025.",
      quote_caffarra: "“Dobbiamo costruire infrastrutture digitali che siano nostre, che possediamo. Altrimenti, siamo perduti.” — Dr. Cristina Caffarra, Professoressa Onoraria all'University College London, Febbraio 2025.",
      electroshock_text: "L'analisi è brutale, ma deve servire da elettroshock.",
      wakeup_title: "LA SVEGLIA",
      wakeup_text: "L'Europa è a un bivio. Mentre l'America vive la sua rivoluzione culturale e protezionista e la Cina consolida la sua egemonia digitale, affrontiamo una questione critica: Chi controlla i dati, controlla la realtà.",
      paradox_title: "Il Paradosso",
      paradox_list: [
        "500 milioni di abitanti",
        "PIL paragonabile agli Stati Uniti",
        "Spesa tecnologica complessiva equivalente"
      ],
      system_missing: "Abbiamo i mezzi. Abbiamo il mercato. Abbiamo la storia. Ma non abbiamo il Sistema.",
      gap_text: "Ci dicono che non siamo abbastanza innovativi. Falso. Il divario non è tecnologico, è strutturale. La nostra potenza finanziaria viene deviata: spendiamo miliardi, ma questo denaro esce sotto forma di rendita verso attori stranieri invece di costruire i nostri asset. Importiamo l'80% delle nostre tecnologie digitali. Finanziamo la nostra stessa dipendenza, creando una vulnerabilità sistemica critica.",
      innocence_over: "L'era dell'innocenza è finita. Per colmare questo divario, non possiamo più accontentarci di regolare gli strumenti altrui. Dobbiamo forgiare i nostri strumenti.",
      battle_plan: "Prendete questo appello per quello che è: il piano di battaglia per costruire l'infrastruttura del nostro domani.",
      mission_title: "LA MISSIONE: RICODIFICARE IL SISTEMA ECONOMICO",
      mission_text: "CircularOS (Circular Operating System) non è una semplice applicazione. È il sistema operativo sovrano e distribuito che permette all'Europa di far circolare liberamente le sue risorse, i suoi dati e i suoi valori, senza dipendenza esterna.",
      os_why: "Perché un \"OS\" per l'Economia? Nel 21° secolo, la massima è semplice: Chi controlla i Dati, controlla la Realtà.",
      foreign_os_list: [
        "I nostri dati commerciali sono ospitati su cloud soggetti a leggi extraterritoriali (Cloud Act).",
        "I nostri flussi logistici dipendono da algoritmi opachi ottimizzati per l'importazione massiccia.",
        "Le nostre interazioni sociali passano attraverso piattaforme estrattive."
      ],
      tenants_text: "Abbiamo digitalizzato la nostra economia, ma abbiamo dimenticato di costruire le fondamenta. Siamo inquilini nel nostro stesso continente.",
      pillars_title: "I 5 PILASTRI DELLA SOVRANITÀ",
      pillars: [
        "Il Rivelatore di Crisi: La recente convergenza delle crisi (pandemia, guerre, instabilità geopolitica) ha agito come uno shock, rendendo visibile ciò che era invisibile: la nostra dipendenza critica dalle infrastrutture digitali sottostanti.",
        "L'Impossibilità di Reagire Senza Fondamenta: In tempi di crisi, è troppo tardi per costruire l'infrastruttura necessaria per l'innovazione d'emergenza. Se le basi sovrane non sono già in atto quando sorge il problema, la battaglia è già persa.",
        "Da Accessorio a Essenziale: L'infrastruttura digitale deve cambiare status: non è più un \"nice-to-have\" ma un imperativo di sopravvivenza (\"must-have\"). Questa risorsa critica non cade dal cielo; richiede investimenti consapevoli e sostenibili.",
        "Un Consenso Oltre la Politica: La sovranità tecnologica non è una questione di parte (né di destra né di sinistra), ma una questione di realismo. Mettere in sicurezza le nostre basi attuali è il prerequisito assoluto prima ancora di pensare di creare alternative competitive.",
        "La Fine del \"Feticismo dell'Innovazione\": L'ossessione per la novità è uno spreco di risorse se avviene a scapito della manutenzione. Il vero \"buon senso\" è capire che non esiste innovazione sostenibile senza un'infrastruttura mantenuta, sicura e affidabile."
      ],
      architecture_title: "ARCHITETTURA: UN KERNEL E DEI MODULI",
      architecture_text: "CircularOS funziona come un sistema operativo applicato all'economia reale. Fornisce i mattoni fondamentali che territori e aziende possono utilizzare per costruire le proprie soluzioni sovrane.",
      kernel_title: "🔐 IL NUCLEO (THE KERNEL): FIDUCIA E IDENTITÀ",
      kernel_desc: "Al centro del sistema, abbiamo posto la verità.",
      kernel_list: [
        "Identità Sovrana: Gestione delle identità digitali per aziende e cittadini. Garantiamo che \"chi agisce\" sia effettivamente \"chi dichiara di essere\".",
        "Motore di Prova (Proof Engine): CircularOS integra nativamente l'API ImpactData. Nel nostro OS, il dato ha valore solo se è verificato (CSR, Carbonio, Origine). È un sistema basato sulla prova."
      ],
      stack_title: "🧱 LO STACK: MODULI APPLICATIVI",
      stack_desc: "Su questo nucleo, abbiamo sviluppato moduli standard:",
      modules_list: [
        "Modulo di Scambio (Commercio): Alimenta i marketplace locali. Gestisce transazioni senza commissioni predatorie (restituendo il 15% di margine alle aziende), logistica locale e tracciabilità.",
        "Modulo di Interazione (Sociale): Gestisce la gamification del mondo reale e i collegamenti tra mondo fisico e virtuale. Trasforma il cittadino passivo in attore impegnato.",
        "Modulo di Intelligenza (Cognizione): Gestisce l'aggregazione di Big Data, la visualizzazione cartografica (Gemelli Digitali) e il supporto alle decisioni strategiche.",
        "Modulo di Flusso (Supply Chain): Gestisce il matching B2B, il raggruppamento di aziende (co-appalto) e l'accesso agli appalti pubblici."
      ],
      connections_title: "VISIONE: DALLA FRAMMENTAZIONE ALLA \"GRANDE INTERCONNESSIONE\"",
      connections_subtitle: "Riparare la frattura digitale e sociale dell'Europa.",
      connections_text: "L'Europa è un gigante economico dai piedi d'argilla digitali perché vive in silos (dati sanitari tagliati fuori dall'industria, artigiani tagliati fuori dagli appalti pubblici). CircularOS è l'antidoto a questa frammentazione. Usiamo la tecnologia per collegare mondi.",
      links_list: [
        "🔗 Collegare Produzione e Consumo: In CircularOS, un prodotto non è un oggetto inerte; è un pacchetto di dati vivente. Il prodotto \"racconta\" la sua storia (chi lo ha fatto, dove, carbonio). Il consumatore riceve questa info senza filtri. Risultato: Il mercato si auto-regola verso la qualità perché la virtù diventa visibile.",
        "🔗 Collegare Economia e Territorio: L'azienda non è più solo un numero di registrazione, è un'entità geografica. La città vede i suoi flussi in tempo reale e può dirigere la spesa pubblica verso attori locali. Risultato: Il denaro pubblico smette di fuoriuscire. Irriga il tessuto locale.",
        "🔗 Collegare Gioventù e Realtà: Rifiutiamo di lasciare che il virtuale sia una via di fuga. Iniettiamo dati reali (Artigiani, Storia, Industria) nei mondi virtuali. Risultato: I bambini imparano i mestieri della loro regione giocando. Stiamo formando i produttori di domani.",
        "🔗 Collegare PMI e Potere: Grazie agli algoritmi di co-appalto, le PMI si uniscono dinamicamente per formare gruppi capaci di rispondere a grandi sfide. Risultato: La forza della rete sostituisce la fragilità del monopolio."
      ],
      role_title: "IL NOSTRO RUOLO NELLO SVILUPPO UE",
      role_subtitle: "Un impegno strategico e politico.",
      role_text: "CircularOS.eu non si accontenta di fornire codice. Partecipiamo attivamente alla costruzione del futuro dell'Unione Europea attraverso quattro leve principali:",
      levers_list: [
        "Regolazione Digitale: Integriamo nativamente gli standard europei (CSRD, GDPR, DMA) per rendere la conformità un vantaggio competitivo piuttosto che un vincolo.",
        "Strumenti Tecnologici: Forniamo l'infrastruttura sovrana necessaria affinché l'Europa non sia più una colonia digitale, ma una potenza produttrice.",
        "Relazioni Strategiche: Tessiamo legami tra industrie, governi e cittadini per creare un mercato interno denso e resiliente.",
        "La Pubblicità dei Valori: Promuoviamo un modello tecnologico allineato con i valori democratici europei: trasparenza, inclusività e sostenibilità."
      ],
      utility_text: "Utilità concreta per l'Europa: Adottando questo standard, l'Europa recupera il suo margine economico (fin delle commissioni estere), accelera la sua transizione ecologica attraverso i dati e unifica finalmente il suo mercato interno.",
      final_call: "È tempo di produrre i nostri strumenti. È tempo di possedere il nostro futuro. Portate la demo."
    },
    plan: {
      title: "✨ Il nostro piano in 10 punti",
      subtitle: "Per un Ecosistema Sovrano e Prospero",
      intro: "In linea con il quadro del Future Institute, CircularOS si impegna nella seguente roadmap per reclamare il nostro destino digitale ed economico.",
      points: [
        {
          title: "1. 🛠️ SOSTENERE I \"MAKERS\" & PMI",
          text: "Potenziamo artigiani europei, startup e PMI industriali fornendo loro strumenti SaaS sovrani e accesso diretto ai mercati (Made.Regions). Sostituiamo le commissioni predatorie con un modello che supporta la scalabilità e l'investimento locale.",
          action: "Azione: Fornire software di gestione digitale (ERP CircularOS) gratuito o a basso costo a tutte le PMI registrate. Costruire integrazioni native con Made.Regions affinché le PMI possano vendere B2C e B2B senza commissioni predatorie. Sostituire modelli basati su commissioni (15-30% ad Amazon/Shopify) con prezzi trasparenti (2-3% fee piattaforma, max).",
          impact: "Impatto: Stop alla fuga di capitali annuale di oltre 200 miliardi di dollari. Mantenere i ricavi delle PMI europee in Europa."
        },
        {
          title: "2. 💶 STOP ALLA DISPERSIONE ECONOMICA",
          text: "Preveniamo la perdita di miliardi in valore economico. Costruendo la nostra infrastruttura transazionale, assicuriamo che margini e entrate fiscali restino in Europa per finanziare le nostre scuole e ospedali, invece di sparire nei paradisi fiscali dei giganti tech stranieri.",
          action: "Azione: Implementare Made.Paris, Made.Alsace, Made.Bzh come marketplace proof-of-concept. Assicurare che tutte le entrate restino in Europa. Eliminare gli intermediari che estraggono margini del 30-40% (distributori multinazionali).",
          impact: "Impatto: Per ogni 100€ spesi in beni europei, 70-85€ restano nel territorio invece di sparire nella Silicon Valley o a Singapore."
        },
        {
          title: "3. 🇪🇺 COSTRUIRE L'\"EUROSTACK\" SOVRANO",
          text: "Supportiamo infrastrutture informatiche open-source all'avanguardia. CircularOS fornisce il livello software essenziale che collega i cloud sovrani all'economia reale, offrendo un campo di gioco equo dove i campioni tecnologici europei possono finalmente emergere.",
          action: "Azione: Implementare CircularOS su infrastruttura cloud sovrana (SecNumCloud, conforme Schrems II). Collegare stack open-source all'avanguardia (Linux, PostgreSQL, Kubernetes).",
          impact: "Impatto: I campioni tecnologici europei possono emergere in condizioni di parità, liberi dalle leggi extraterritoriali USA (Cloud Act) e dalle backdoor cinesi."
        },
        {
          title: "4. 🤖 GUIDARE L'IA PER IL MONDO REALE",
          text: "Investiamo in IA e machine learning non per generare contenuti falsi, ma per ottimizzare la realtà. Attraverso Smart.Regions e ImpactData, usiamo l'IA per modellare le supply chain, prevedere i bisogni energetici e far avanzare l'ingegneria manifatturiera.",
          action: "Azione: Implementare Smart.Regions basato su IA per la modellazione della supply chain e la previsione energetica. Usare il machine learning in ImpactData per rilevare il greenwashing e certificare il vero impatto.",
          impact: "Impatto: L'IA diventa uno strumento di visibilità e resilienza, non di manipolazione e sorveglianza."
        },
        {
          title: "5. 🔌 IMPORRE INTEROPERABILITÀ RADICALE",
          text: "Rompiamo i silos. CircularOS impone standard aperti e API, assicurando che i dati da agricoltura, salute e industria possano comunicare tra loro. Proteggiamo la scelta delle imprese prevenendo il vendor lock-in e i \"giardini recintati\".",
          action: "Azione: Pubblicare API aperte per tutti i moduli (Made, Life, Smart, Achats, Fournisseurs, ImpactData). Assicurare una comunicazione dati senza interruzioni.",
          impact: "Impatto: Nessun attore diventa indispensabile. Qualsiasi regione può fare un fork di CircularOS e costruirci sopra."
        },
        {
          title: "6. 🧠 INTRODURRE LA SOVRANITÀ ALGORITMICA",
          text: "Riformiamo l'interazione sociale sostituendo algoritmi additivi e guidati dalla polarizzazione con algoritmi \"Life\". Permettiamo a imprese e cittadini di interagire attraverso interfacce che premiano l'impatto nel mondo reale, l'educazione e la connessione locale.",
          action: "Azione: Implementare Life.Paris e Life.Regions come alternative open-source a TikTok, Meta, Roblox. Progettare algoritmi che premiano l'impatto reale—non i picchi di dopamina.",
          impact: "Impatto: I giovani trascorrono tempo su piattaforme che li connettono al loro territorio, non alla manipolazione algoritmica."
        },
        {
          title: "7. ❤️ PROGETTARE PER LA SALUTE MENTALE & CIVICA",
          text: "Affrontiamo la crisi della dipendenza da schermi. CircularOS promuove design \"Play-to-Act\" (Life.Paris) dove l'impegno digitale è un ponte verso l'attività fisica, la partecipazione civica e la produttività, piuttosto che una trappola di dopamina.",
          action: "Azione: Progettare Life.Paris in modo che l'impegno digitale porti all'attività fisica. Ogni missione nel gioco richiede un'azione nel mondo reale (visitare un produttore, pulire un parco, imparare un mestiere).",
          impact: "Impatto: I cittadini riacquistano autonomia. La salute mentale migliora. Le comunità si rafforzano."
        },
        {
          title: "8. 🛡️ RIVOLUZIONARE L'\"ECONOMIA DELLA FIDUCIA\"",
          text: "Riformiamo il mercato digitale sostituendo il modello pubblicitario \"pagare per essere visti\" con un modello \"provato essere buono\". Ricompensiamo editori e produttori europei basandoci su Punteggi di Impatto verificati (ImpactData), non solo su budget di marketing.",
          action: "Azione: Costruire ImpactData come standard per la credibilità verificata. Permettere ai piccoli produttori virtuosi di superare quelli grandi e ingannevoli.",
          impact: "Impatto: Il miglior prodotto vince perché la virtù è visibile. La qualità diventa la nuova valuta."
        },
        {
          title: "9. 🔐 RIPRISTINARE IL CONTROLLO ASSOLUTO DEI DATI",
          text: "Diamo a consumatori e aziende il vero controllo sui loro dati. Attraverso un'unica interfaccia utente sovrana, i cittadini possono tracciare la loro impronta di consumo e le aziende possono proteggere i loro segreti industriali dalla sorveglianza extraterritoriale.",
          action: "Azione: Implementare il single sign-on attraverso il sistema di identità CircularOS. Cittadini e aziende possono tracciare, auditare e cancellare la loro impronta dati in qualsiasi momento.",
          impact: "Impatto: Gli utenti sono cittadini con diritti, non prodotti da raccogliere. I dati europei restano europei."
        },
        {
          title: "10. 🌍 ALLINEARE LA TECH ALLA VERITÀ CLIMATICA",
          text: "Rendiamo operativo il Green Deal. Incorporando valutazioni trasparenti delle emissioni (ImpactData) in ogni transazione B2B e B2C, fissiamo obiettivi di efficienza ambiziosi che sono misurabili, verificabili ed economicamente gratificantes.",
          action: "Azione: Integrare il punteggio di carbonio ImpactData nelle piattaforme Made.Regions, Achats.eco e Smart. Rendere le scelte verdi economicamente gratificanti.",
          impact: "Impatto: La transizione diventa un acceleratore economico, non un peso. Ogni euro speso spinge avanti l'efficienza."
        }
      ],
      call_to_action: "LA CHIAMATA ALL'AZIONE\nQuesto non è un documento strategico. Questo è un piano di battaglia.\nL'Europa deve scegliere: continuare come colonia di GAFAM e Cina, o costruire l'infrastruttura per possedere il nostro futuro.\nIl tempo delle chiacchiere è finito. Tempo di costruire. Tempo di dimostrare. Tempo di reclamare.\nCircularOS.eu: Sovranità Digitale per il Bene Comune"
    },
    projects: {
      "made_fr": {
        "title": "Made.fr",
        "text": "<strong>La Vetrina dell'Eccellenza e Hub di Investimento Nazionale</strong><br><br>Made.fr è molto più di un portale: è l'ammiraglia della riconquista industriale e culturale francese. La sua missione è federare tutte le forze vive del paese per proiettare un'immagine unificata e potente a livello internazionale. A differenza delle piattaforme regionali incentrate sulla vendita diretta, Made.fr agisce come un'agenzia di promozione sovrana. Aggrega il miglior know-how (DeepTech, Industria 4.0, Artigianato d'Arte) per attrarre investitori esteri e rassicurare i mercati globali grazie alla prova dei dati.<br><br>È anche un Hub di competenze e risorse. Made.fr collega le startup tecnologiche alle industrie tradizionali per accelerare la modernizzazione degli strumenti di produzione. La piattaforma propone tutorial avanzati per la digitalizzazione delle PMI e funge da punto d'ingresso per i grandi committenti internazionali che cercano di approvvigionarsi in Francia. Riducendo i rischi dell'investimento tramite dati certificati, Made.fr trasforma il 'Marchio Francia' in un asset economico tangibile, provando che il nostro paese è la fabbrica verde e intelligente d'Europa."
      },
      "made_paris": {
        "title": "Made.Paris",
        "text": "<strong>Il Marketplace a Circuito Corto e Innovazione Capitale</strong><br><br>Made.Paris è lo strumento di resistenza e crescita per i produttori dell'Île-de-France. Di fronte alla predazione dei giganti dell'e-commerce che catturano i margini, questo marketplace offre un'alternativa sovrana, locale ed etica. Permette agli artigiani del Faubourg Saint-Antoine, ai creatori di moda del Sentier e alle startup della Station F di vendere direttamente ai Parigini (B2C) e alle aziende locali (B2B) senza commissioni abusive.<br><br>Oltre alla vendita, Made.Paris fornisce un 'SaaS Circolare' completo: un cruscotto di gestione semplificato che aiuta le microimprese a gestire le scorte, la fatturazione e la logistica urbana decarbonizzata. La piattaforma integra tutorial per aiutare gli artigiani a digitalizzarsi e a valorizzare le loro etichette (Fabbricato a Parigi). Collegando direttamente il luogo di produzione al luogo di consumo, Made.Paris riduce drasticamente l'impronta di carbonio e ridà potere d'acquisto ai produttori, ricreando un'economia di prossimità densa e solidale nel cuore della metropoli."
      },
      "made_alsace": {
        "title": "Made.Alsace",
        "text": "<strong>L'Alleanza tra Tradizione e Industria 4.0</strong><br><br>Made.Alsace è la piattaforma dedicata a una delle regioni più industriali e identitarie d'Europa. Collega la potenza delle PMI industriali alsaziane con la ricchezza del suo artigianato tradizionale. L'obiettivo è strutturare un'offerta locale robusta, capace di rispondere ai bisogni transfrontalieri favorendo al contempo l'economia circolare sul territorio renano.<br><br>La piattaforma pone un accento particolare sulla valorizzazione delle filiere d'eccellenza locali (meccanica, agroalimentare, legno) presso consumatori e acquirenti professionali. Propone strumenti specifici per la gestione delle certificazioni locali e transfrontaliere. Made.Alsace permette ai produttori di mutualizzare la logistica e guadagnare visibilità rispetto ai concorrenti internazionali. È uno strumento di orgoglio regionale che trasforma il 'Made in Alsace' in garanzia di qualità tecnica e ambientale, assicurando che il valore aggiunto resti nella regione per finanziare l'apprendistato e l'occupazione locale."
      },
      "made_bzh": {
        "title": "Made.Bzh",
        "text": "<strong>Il Faro dell'Economia Marittima e Agricola</strong><br><br>Made.Bzh è il portale della sovranità bretone. Riunisce gli attori della terra (agricoltori, allevatori) e del mare (pescatori, alghicoltori, cantieri navali) su un marketplace unico. La piattaforma mira a disintermediare le filiere alimentari e industriali per garantire una giusta remunerazione ai produttori che nutrono ed equipaggiano il paese.<br><br>Specificamente adattata al territorio, Made.Bzh integra funzionalità di tracciabilità avanzata per i prodotti del mare e l'agricoltura bio, rispondendo a una forte domanda di trasparenza. Serve anche da vetrina per l'innovazione marittima (vela da competizione, energie marine). Proponendo tutorial sulla transizione ecologica e strumenti di vendita diretta, Made.Bzh rafforza il tessuto economico locale spesso lontano dai grandi centri decisionali. Permette alla Bretagna di esportare la sua forte