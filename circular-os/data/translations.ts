export type Language = 'en' | 'fr' | 'de' | 'it';

export interface ProjectTranslation {
  title: string;
  text: string;
}

export interface TranslationStructure {
  vision: {
    title: string;
    subtitle: string;
    urgency_title: string;
    quote_trump: string;
    quote_caffarra: string;
    wakeup_title: string;
    wakeup_text: string;
    paradox_title: string;
    paradox_list: string[];
    system_missing: string;
    gap_text: string;
    mission_title: string;
    mission_text: string;
    os_why: string;
    pillars_title: string;
    pillars: string[];
  };
  plan: {
    title: string;
    subtitle: string;
    intro: string;
    points: { title: string; text: string }[];
  };
  projects: Record<string, ProjectTranslation>;
}

export const TRANSLATIONS: Record<Language, TranslationStructure> = {
  "en": {
    "vision": {
      "title": "Vision: CircularOS.eu",
      "subtitle": "The European Circular Economy Operating System.",
      "urgency_title": "🚨 THE URGENCY OF ACTION",
      "quote_trump": "“I think they’re weak, but I also think that they want to be so politically correct. I think they don’t know what to do. Europe doesn’t know what to do.” — Donald Trump, December 2025.",
      "quote_caffarra": "“We must build digital infrastructures that are ours, that we own. Otherwise, we are lost.” — Dr. Cristina Caffarra, February 2025.",
      "wakeup_title": "THE WAKE-UP CALL",
      "wakeup_text": "Europe stands at a crossroads. While America undergoes its cultural revolution and China consolidates its digital hegemony, we face a critical question: Who controls the data, controls reality.",
      "paradox_title": "The Paradox",
      "paradox_list": [
        "500 million inhabitants",
        "GDP comparable to the United States",
        "Equivalent technological spending"
      ],
      "system_missing": "We have the means. We have the market. We have the history. But we don't have the System.",
      "gap_text": "We're told we lack innovation. False. The gap is structural, not technological. We import 80% of our digital technologies. We finance our own dependency, creating a critical systemic vulnerability.",
      "mission_title": "THE MISSION: RECODING THE ECONOMY",
      "mission_text": "CircularOS (Circular Operating System) is not an application. It is the sovereign, distributed operating system that allows Europe to circulate its resources, data, and values freely—without external dependence.",
      "os_why": "Why an \"OS\" for the Economy? In the 21st century: Whoever controls the Data controls Reality.",
      "pillars_title": "THE FIVE PILLARS OF SOVEREIGNTY",
      "pillars": [
        "The Crisis Revealer: Recent crises acted as a shock, revealing our critical dependence.",
        "Foundations First: In times of crisis, it's too late to build emergency innovation.",
        "From Accessory to Essential: Digital infrastructure is a survival imperative.",
        "A Consensus Beyond Politics: Technological sovereignty is not partisan—it's a question of realism.",
        "The End of \"Innovation Fetishism\": No sustainable innovation without secure infrastructure."
      ]
    },
    "plan": {
      "title": "✨ Our 10 point plan",
      "subtitle": "For a Sovereign & Prosperous Ecosystem",
      "intro": "In alignment with the Future Institute's framework, CircularOS commits to the following roadmap to reclaim our digital and economic destiny.",
      "points": [
        { "title": "1. 🛠️ CHAMPIONING THE 'MAKERS' & SMEs", "text": "We empower European artisans, startups, and industrial SMEs with sovereign SaaS tools and direct access to markets. We replace predatory commissions with a model that supports scaling and local investment." },
        { "title": "2. 💶 STOPPING ECONOMIC LEAKAGE", "text": "We prevent the loss of billions in economic value by building our own transactional infrastructure. Margins and tax revenues stay in Europe to fund our schools and hospitals." },
        { "title": "3. 🇪🇺 BUILDING THE SOVEREIGN 'EUROSTACK'", "text": "We support state-of-the-art, open-source computing infrastructure. CircularOS provides the essential software layer that connects sovereign clouds to the real economy." },
        { "title": "4. 🤖 DRIVING AI FOR THE REAL WORLD", "text": "We invest in AI to optimize reality, not generate fake content. Using AI to model supply chains, predict energy needs, and advance manufacturing engineering." },
        { "title": "5. 🔌 MANDATING RADICAL INTEROPERABILITY", "text": "We break the silos. CircularOS mandates open standards and APIs. We protect business choice by preventing vendor lock-in and 'walled gardens'." },
        { "title": "6. 🧠 INTRODUCING ALGORITHMIC SOVEREIGNTY", "text": "We replace addictive, polarization-driven algorithms with 'Life' algorithms. We engage through interfaces that reward real-world impact and local connection." },
        { "title": "7. ❤️ DESIGNING FOR MENTAL & CIVIC HEALTH", "text": "CircularOS promotes 'Play-to-Act' designs where digital engagement is a bridge to physical activity, civic participation, and productivity." },
        { "title": "8. 🛡️ REVOLUTIONIZING THE 'TRUST ECONOMY'", "text": "We replace 'pay-to-be-seen' with 'proven-to-be-good.' We reward European publishers based on verified Impact Scores, not marketing budgets." },
        { "title": "9. 🔐 RESTORING ABSOLUTE DATA CONTROL", "text": "Citizens and companies can track, audit, and delete their data footprint at any time. Protecting trade secrets from extraterritorial surveillance." },
        { "title": "10. 🌍 ALIGNING TECH WITH CLIMATE TRUTH", "text": "We make the Green Deal operational. By embedding transparent emissions ratings into every transaction, we set measurable efficiency targets." }
      ]
    },
    "projects": {
      "made_fr": { "title": "Made.fr", "text": "The Showcase of Excellence and National Investment Hub. Made.fr is the flagship of French industrial and cultural reconquest. It aggregates the best know-how (DeepTech, Industry, Craftsmanship) to attract foreign investors using data-proof." },
      "made_paris": { "title": "Made.Paris", "text": "The Short-Circuit Marketplace and Capital Innovation. Made.Paris offers a sovereign, local, and ethical alternative for Paris producers, bypassing e-commerce giants. It connects production sites directly to consumption sites." },
      "made_alsace": { "title": "Made.Alsace", "text": "The Alliance of Tradition and Industry. Dedicated to one of Europe's most industrial regions, connecting powerful SMEs with traditional craftsmanship to structure a robust local offer." },
      "made_bzh": { "title": "Made.Bzh", "text": "The Lighthouse of Maritime and Agricultural Economy. The portal for Breton sovereignty, gathering actors from land and sea to disintermediate supply chains and ensure fair remuneration." },
      "life_paris": { "title": "Life.Paris", "text": "Citizen Gaming to Re-enchant the City of Lights. An immersive 'Reality Gaming' application where quests have real impact (cleanliness, mobility), connecting citizens to local commerce." },
      "life_alsace": { "title": "Life.Alsace", "text": "Playful Immersion in Heritage and Industry. Using video games to transmit culture and gamify the discovery of the regional industrial fabric, creating bridges to employment." },
      "life_bzh": { "title": "Life.Bzh", "text": "Digital Adventure between Land and Sea. An immersive experience transforming the region into a role-playing game where environmental protection and culture are central to gameplay." },
      "smart_paris": { "title": "Smart.Paris", "text": "Data Cockpit for a Smart and Human City. A digital twin aggregating billions of data points to offer a clear, democratic view of the urban metabolism for decision-makers and citizens." },
      "smart_alsace": { "title": "Smart.Alsace", "text": "Territorial Intelligence for Industry and Flows. Strategic piloting focusing on cross-border industrial, logistical, and energy flows to identify industrial symbiosis opportunities." },
      "smart_bzh": { "title": "Smart.Bzh", "text": "Digital Watchtower for Natural Resources. Environmental and economic monitoring combining satellite and maritime data to reconcile economic development with biodiversity preservation." },
      "impact_data": { "title": "ImpactData.fr", "text": "The API of Ecological Truth. A universal SaaS API replacing marketing promises with unforgeable digital proofs, auditing CSR reality in real-time." },
      "achats_eco": { "title": "Achats.eco", "text": "Public Procurement Facilitator. Democratizing access to €200B of public spending by allowing small local businesses to co-contract and respond to large tenders." },
      "fournisseurs_eco": { "title": "Fournisseurs.eco", "text": "Resilience and Sourcing Index. A dynamic 'Sourcing 4.0' tool mapping supply chains to favor relocation and identify reliable local partners." }
    }
  },
  "fr": {
    "vision": {
      "title": "Vision : CircularOS.eu",
      "subtitle": "Le Système d'Exploitation de l'Économie Circulaire Européenne.",
      "urgency_title": "🚨 L'URGENCE D'AGIR",
      "quote_trump": "“Je pense qu'ils sont faibles... L'Europe ne sait pas quoi faire.” — Donald Trump, Décembre 2025.",
      "quote_caffarra": "“Nous devons construire des infrastructures numériques qui sont les nôtres. Sinon, nous sommes perdus.” — Dr. Cristina Caffarra, Février 2025.",
      "wakeup_title": "L'ÉLECTROCHOC",
      "wakeup_text": "L'Europe est à la croisée des chemins. Alors que l'Amérique vit sa révolution culturelle et que la Chine consolide son hégémonie numérique, nous faisons face à une question critique : Qui contrôle la donnée, contrôle la réalité.",
      "paradox_title": "Le Paradoxe",
      "paradox_list": [
        "500 millions d'habitants",
        "PIB comparable aux États-Unis",
        "Dépenses technologiques équivalentes"
      ],
      "system_missing": "Nous avons les moyens. Nous avons le marché. Nous avons l'histoire. Mais nous n'avons pas le Système.",
      "gap_text": "On nous dit que nous manquons d'innovation. Faux. Le fossé est structurel. Nous importons 80% de nos technologies numériques. Nous finançons notre propre dépendance.",
      "mission_title": "LA MISSION : RECODER L'ÉCONOMIE",
      "mission_text": "CircularOS n'est pas une application. C'est le système d'exploitation souverain et distribué qui permet à l'Europe de faire circuler ses ressources, données et valeurs librement.",
      "os_why": "Pourquoi un \"OS\" pour l'Économie ? Au 21ème siècle : Qui contrôle la Donnée contrôle la Réalité.",
      "pillars_title": "LES CINQ PILIERS DE LA SOUVERAINETÉ",
      "pillars": [
        "Le Révélateur de Crise : Les crises récentes ont révélé notre dépendance critique aux infrastructures invisibles.",
        "Les Fondations D'abord : En temps de crise, il est trop tard pour construire l'innovation d'urgence.",
        "De l'Accessoire à l'Essentiel : L'infrastructure numérique est un impératif de survie.",
        "Un Consensus au-delà de la Politique : La souveraineté technologique est une question de réalisme.",
        "La Fin du \"Fétichisme de l'Innovation\" : Pas d'innovation durable sans infrastructure maintenue et sécurisée."
      ]
    },
    "plan": {
      "title": "✨ Notre plan en 10 points",
      "subtitle": "Pour un Écosystème Souverain & Prospère",
      "intro": "En alignement avec le cadre du Future Institute, CircularOS s'engage sur la feuille de route suivante pour réclamer notre destin numérique et économique.",
      "points": [
        { "title": "1. 🛠️ SOUTENIR LES 'MAKERS' & PME", "text": "Nous équipons les artisans et PME avec des outils SaaS souverains et un accès direct aux marchés. Nous remplaçons les commissions prédatrices par un modèle soutenant l'investissement local." },
        { "title": "2. 💶 STOPPER LA FUITE ÉCONOMIQUE", "text": "Nous empêchons la perte de milliards en valeur économique. En construisant notre propre infrastructure transactionnelle, les marges et taxes restent en Europe." },
        { "title": "3. 🇪🇺 CONSTRUIRE L'EUROSTACK SOUVERAIN", "text": "Nous soutenons une infrastructure informatique open-source de pointe. CircularOS fournit la couche logicielle essentielle reliant les clouds souverains à l'économie réelle." },
        { "title": "4. 🤖 L'IA POUR LE MONDE RÉEL", "text": "Nous investissons dans l'IA pour optimiser la réalité, pas pour générer du faux contenu. Modélisation des chaînes d'approvisionnement et prédiction énergétique." },
        { "title": "5. 🔌 INTEROPÉRABILITÉ RADICALE", "text": "Nous brisons les silos. CircularOS impose des standards ouverts. Nous protégeons le choix des entreprises en empêchant le verrouillage technologique." },
        { "title": "6. 🧠 SOUVERAINETÉ ALGORITHMIQUE", "text": "Nous remplaçons les algorithmes addictifs par des algorithmes 'Life'. Nous favorisons l'engagement via des interfaces récompensant l'impact réel et le lien local." },
        { "title": "7. ❤️ SANTÉ MENTALE & CIVIQUE", "text": "CircularOS promeut le design 'Play-to-Act', où l'engagement numérique est une passerelle vers l'activité physique et la participation civique." },
        { "title": "8. 🛡️ RÉVOLUTIONNER L'ÉCONOMIE DE LA CONFIANCE", "text": "Nous remplaçons le 'payer pour être vu' par le 'prouvé pour être bon'. Nous récompensons les producteurs européens basés sur des Scores d'Impact vérifiés." },
        { "title": "9. 🔐 RESTAURER LE CONTRÔLE DES DONNÉES", "text": "Citoyens et entreprises peuvent tracer, auditer et supprimer leur empreinte de données. Protection des secrets d'affaires contre la surveillance extraterritoriale." },
        { "title": "10. 🌍 ALIGNER LA TECH AVEC LA VÉRITÉ CLIMATIQUE", "text": "Nous rendons le Green Deal opérationnel. En intégrant des notations d'émissions transparentes dans chaque transaction, nous fixons des objectifs d'efficacité mesurables." }
      ]
    },
    "projects": {
      "made_fr": { "title": "Made.fr", "text": "La Vitrine de l'Excellence et Hub d'Investissement National. Made.fr est le navire amiral de la reconquête industrielle. Il agrège le meilleur des savoir-faire pour attirer les investisseurs étrangers grâce à la preuve par la donnée." },
      "made_paris": { "title": "Made.Paris", "text": "La Marketplace du Circuit Court et de l'Innovation Capitale. Une alternative souveraine pour les producteurs d'Île-de-France, connectant directement le lieu de fabrication au lieu de consommation sans commissions abusives." },
      "made_alsace": { "title": "Made.Alsace", "text": "L'Alliance de la Tradition et de l'Industrie. Connecte la puissance des PME industrielles alsaciennes avec la richesse de son artisanat traditionnel pour structurer une offre locale robuste." },
      "made_bzh": { "title": "Made.Bzh", "text": "Le Phare de l'Économie Maritime et Agricole. Le portail de la souveraineté bretonne, rassemblant acteurs de la terre et de la mer pour désintermédier les chaînes alimentaires et industrielles." },
      "life_paris": { "title": "Life.Paris", "text": "Le Gaming Citoyen pour Réenchanter la Ville Lumière. Une application de 'Reality Gaming' où chaque quête a un impact réel (propreté, mobilité), connectant les joueurs aux commerces locaux." },
      "life_alsace": { "title": "Life.Alsace", "text": "L'Immersion Ludique au Cœur du Patrimoine. Utilise le jeu vidéo pour transmettre la culture et gamifier la découverte du tissu industriel régional, créant des passerelles vers l'emploi." },
      "life_bzh": { "title": "Life.Bzh", "text": "L'Aventure Numérique entre Terre et Mer. Transforme la région en un vaste jeu de rôle grandeur nature où la protection de l'environnement et la culture sont au cœur du gameplay." },
      "smart_paris": { "title": "Smart.Paris", "text": "Le Cockpit de Données pour une Ville Intelligente. Un jumeau numérique agrégeant des milliards de points de données pour offrir une lecture claire du métabolisme urbain aux citoyens et décideurs." },
      "smart_alsace": { "title": "Smart.Alsace", "text": "L'Intelligence Territoriale au Service de l'Industrie. Pilotage stratégique se concentrant sur la visualisation des flux industriels et énergétiques pour identifier les symbioses industrielles." },
      "smart_bzh": { "title": "Smart.Bzh", "text": "La Vigie Numérique des Ressources Naturelles. Système de monitoring combinant données satellitaires et maritimes pour concilier développement économique et préservation de la biodiversité." },
      "impact_data": { "title": "ImpactData.fr", "text": "L'API de la Vérité Écologique. Un moteur de confiance universel remplaçant les promesses marketing par des preuves numériques infalsifiables, auditant la réalité RSE en temps réel." },
      "achats_eco": { "title": "Achats.eco", "text": "Le Facilitateur de Commande Publique. Démocratise l'accès aux 200 milliards d'euros de commande publique en permettant aux PME de se grouper (cotraitance) pour répondre aux appels d'offres." },
      "fournisseurs_eco": { "title": "Fournisseurs.eco", "text": "L'Index de Résilience et de Sourcing. Un annuaire dynamique 'Sourcing 4.0' pour cartographier et sécuriser les chaînes d'approvisionnement, favorisant la relocalisation." }
    }
  },
  "de": {
    "vision": {
      "title": "Vision: CircularOS.eu",
      "subtitle": "Das Betriebssystem der europäischen Kreislaufwirtschaft.",
      "urgency_title": "🚨 DIE DRINGLICHKEIT DES HANDELNS",
      "quote_trump": "„Ich denke, sie sind schwach... Europa weiß nicht, was es tun soll.“ — Donald Trump, Dezember 2025.",
      "quote_caffarra": "„Wir müssen digitale Infrastrukturen bauen, die uns gehören. Sonst sind wir verloren.“ — Dr. Cristina Caffarra, Februar 2025.",
      "wakeup_title": "DER WECKRUF",
      "wakeup_text": "Europa steht an einem Scheideweg. Während Amerika seine kulturelle Revolution durchläuft und China seine digitale Hegemonie festigt, stehen wir vor einer kritischen Frage: Wer die Daten kontrolliert, kontrolliert die Realität.",
      "paradox_title": "Das Paradoxon",
      "paradox_list": [
        "500 Millionen Einwohner",
        "BIP vergleichbar mit den USA",
        "Äquivalente Technologieausgaben"
      ],
      "system_missing": "Wir haben die Mittel. Wir haben den Markt. Aber wir haben nicht das System.",
      "gap_text": "Man sagt uns, wir seien nicht innovativ genug. Falsch. Die Lücke ist strukturell. Wir importieren 80% unserer digitalen Technologien. Wir finanzieren unsere eigene Abhängigkeit.",
      "mission_title": "DIE MISSION: NEUKODIERUNG DER WIRTSCHAFT",
      "mission_text": "CircularOS ist keine Anwendung. Es ist das souveräne, verteilte Betriebssystem, das es Europa ermöglicht, Ressourcen, Daten und Werte frei zirkulieren zu lassen.",
      "os_why": "Warum ein „OS“ für die Wirtschaft? Wer die Daten kontrolliert, kontrolliert die Realität.",
      "pillars_title": "DIE FÜNF SÄULEN DER SOUVERÄNITÄT",
      "pillars": [
        "Der Krisen-Enthüller: Jüngste Krisen offenbarten unsere kritische Abhängigkeit von unsichtbaren digitalen Infrastrukturen.",
        "Fundamente zuerst: In Krisenzeiten ist es zu spät für Notfall-Innovationen.",
        "Vom Zubehör zum Wesentlichen: Digitale Infrastruktur ist ein Überlebensimperativ.",
        "Ein Konsens jenseits der Politik: Technologische Souveränität ist eine Frage des Realismus.",
        "Das Ende des „Innovationsfetischismus“: Keine nachhaltige Innovation ohne sichere Infrastruktur."
      ]
    },
    "plan": {
      "title": "✨ Unser 10-Punkte-Plan",
      "subtitle": "Für ein souveränes & wohlhabendes Ökosystem",
      "intro": "Im Einklang mit dem Rahmenwerk des Future Institute verpflichtet sich CircularOS zu folgendem Fahrplan, um unser digitales Schicksal zurückzugewinnen.",
      "points": [
        { "title": "1. 🛠️ FÖRDERUNG VON 'MAKERS' & KMU", "text": "Wir stärken europäische Handwerker und KMU mit souveränen SaaS-Tools und direktem Marktzugang. Wir ersetzen räuberische Provisionen durch ein Modell für lokale Investitionen." },
        { "title": "2. 💶 STOPP DES WIRTSCHAFTLICHEN ABFLUSSES", "text": "Wir verhindern den Verlust von Milliarden an wirtschaftlichem Wert. Margen und Steuereinnahmen bleiben in Europa, um unsere Schulen und Krankenhäuser zu finanzieren." },
        { "title": "3. 🇪🇺 AUFBAU DES SOUVERÄNEN 'EUROSTACK'", "text": "Wir unterstützen modernste Open-Source-Infrastruktur. CircularOS bietet die Software-Schicht, die souveräne Clouds mit der Realwirtschaft verbindet." },
        { "title": "4. 🤖 KI FÜR DIE REALE WELT", "text": "Wir investieren in KI, um die Realität zu optimieren, nicht für Fake-Inhalte. Modellierung von Lieferketten und Energievorhersage." },
        { "title": "5. 🔌 RADIKALE INTEROPERABILITÄT", "text": "Wir brechen die Silos auf. CircularOS schreibt offene Standards vor. Wir schützen die Wahlfreiheit der Unternehmen und verhindern Vendor Lock-in." },
        { "title": "6. 🧠 ALGORITHMISCHE SOUVERÄNITÄT", "text": "Wir ersetzen süchtig machende Algorithmen durch 'Life'-Algorithmen. Wir fördern Engagement durch Schnittstellen, die reale Auswirkungen und lokale Verbindungen belohnen." },
        { "title": "7. ❤️ DESIGN FÜR MENTALE & BÜRGERLICHE GESUNDHEIT", "text": "CircularOS fördert 'Play-to-Act'-Designs, bei denen digitales Engagement eine Brücke zu körperlicher Aktivität und bürgerlicher Teilhabe ist." },
        { "title": "8. 🛡️ REVOLUTION DER 'VERTRAUENSÖKONOMIE'", "text": "Wir ersetzen 'Bezahlen, um gesehen zu werden' durch 'Bewiesen gut'. Wir belohnen europäische Produzenten basierend auf verifizierten Impact Scores." },
        { "title": "9. 🔐 WIEDERHERSTELLUNG DER DATENKONTROLLE", "text": "Bürger und Unternehmen können ihren Daten-Fußabdruck jederzeit verfolgen und löschen. Schutz von Geschäftsgeheimnissen vor extraterritorialer Überwachung." },
        { "title": "10. 🌍 TECH IM EINKLANG MIT DER KLIMANAHRHEIT", "text": "Wir machen den Green Deal operativ. Durch die Einbettung transparenter Emissionsbewertungen in jede Transaktion setzen wir messbare Effizienzziele." }
      ]
    },
    "projects": {
      "made_fr": { "title": "Made.fr", "text": "Das Schaufenster der Exzellenz und nationaler Investitions-Hub. Made.fr ist das Flaggschiff der französischen industriellen Rückeroberung. Es bündelt das beste Know-how, um ausländische Investoren mit datengestützten Beweisen anzuziehen." },
      "made_paris": { "title": "Made.Paris", "text": "Der Marktplatz für kurze Wege und Hauptstadt-Innovation. Eine souveräne Alternative für Pariser Produzenten, die Produktionsorte direkt mit Konsumorten verbindet, ohne missbräuchliche Provisionen." },
      "made_alsace": { "title": "Made.Alsace", "text": "Die Allianz aus Tradition und Industrie. Verbindet die Kraft der elsässischen Industrie-KMU mit dem Reichtum des traditionellen Handwerks, um ein robustes lokales Angebot zu strukturieren." },
      "made_bzh": { "title": "Made.Bzh", "text": "Der Leuchtturm der maritimen und landwirtschaftlichen Wirtschaft. Das Portal für die bretonische Souveränität, das Akteure von Land und Meer versammelt, um Lieferketten zu disintermediieren." },
      "life_paris": { "title": "Life.Paris", "text": "Citizen Gaming zur Wiederverzauberung der Stadt der Lichter. Eine 'Reality Gaming'-Anwendung, bei der jede Quest reale Auswirkungen hat (Sauberkeit, Mobilität) und Spieler mit lokalem Handel verbindet." },
      "life_alsace": { "title": "Life.Alsace", "text": "Spielerische Immersion in Erbe und Industrie. Nutzt Videospiele zur Kulturvermittlung und Gamifizierung der Entdeckung des regionalen Industriegewebes, um Brücken zur Beschäftigung zu schlagen." },
      "life_bzh": { "title": "Life.Bzh", "text": "Digitales Abenteuer zwischen Land und Meer. Transformiert die Region in ein riesiges Rollenspiel, bei dem Umweltschutz und Kultur im Mittelpunkt des Gameplays stehen." },
      "smart_paris": { "title": "Smart.Paris", "text": "Daten-Cockpit für eine intelligente Stadt. Ein digitaler Zwilling, der Milliarden von Datenpunkten aggregiert, um Entscheidungsträgern und Bürgern eine klare Sicht auf den städtischen Metabolismus zu bieten." },
      "smart_alsace": { "title": "Smart.Alsace", "text": "Territoriale Intelligenz für Industrie und Flüsse. Strategische Steuerung mit Fokus auf grenzüberschreitende Industrie- und Energieströme zur Identifizierung industrieller Symbiosen." },
      "smart_bzh": { "title": "Smart.Bzh", "text": "Digitaler Wachturm für natürliche Ressourcen. Überwachungssystem, das Satelliten- und maritime Daten kombiniert, um wirtschaftliche Entwicklung mit dem Erhalt der Biodiversität in Einklang zu bringen." },
      "impact_data": { "title": "ImpactData.fr", "text": "Die API der ökologischen Wahrheit. Eine universelle SaaS-API, die Marketingversprechen durch fälschungssichere digitale Beweise ersetzt und die CSR-Realität in Echtzeit auditiert." },
      "achats_eco": { "title": "Achats.eco", "text": "Der Facilitator für öffentliche Beschaffung. Demokratisiert den Zugang zu 200 Mrd. € öffentlicher Aufträge, indem es KMU ermöglicht, sich zusammenzuschließen (Co-Contracting), um auf Ausschreibungen zu reagieren." },
      "fournisseurs_eco": { "title": "Fournisseurs.eco", "text": "Der Index für Resilienz und Sourcing. Ein dynamisches 'Sourcing 4.0'-Verzeichnis zur Kartierung und Sicherung von Lieferketten, das die Relokalisierung fördert." }
    }
  },
  "it": {
    "vision": {
      "title": "Visione: CircularOS.eu",
      "subtitle": "Il Sistema Operativo dell'Economia Circolare Europea.",
      "urgency_title": "🚨 L'URGENZA DI AGIRE",
      "quote_trump": "“Penso che siano deboli... L'Europa non sa cosa fare.” — Donald Trump, Dicembre 2025.",
      "quote_caffarra": "“Dobbiamo costruire infrastrutture digitali che siano nostre. Altrimenti, siamo perduti.” — Dr. Cristina Caffarra, Febbraio 2025.",
      "wakeup_title": "LA SVEGLIA",
      "wakeup_text": "L'Europa è a un bivio. Mentre l'America vive la sua rivoluzione culturale e la Cina consolida la sua egemonia digitale, affrontiamo una questione critica: Chi controlla i dati, controlla la realtà.",
      "paradox_title": "Il Paradosso",
      "paradox_list": [
        "500 milioni di abitanti",
        "PIL paragonabile agli Stati Uniti",
        "Spesa tecnologica equivalente"
      ],
      "system_missing": "Abbiamo i mezzi. Abbiamo il mercato. Abbiamo la storia. Ma non abbiamo il Sistema.",
      "gap_text": "Ci dicono che manchiamo di innovazione. Falso. Il divario è strutturale. Importiamo l'80% delle nostre tecnologie digitali. Finanziamo la nostra stessa dipendenza.",
      "mission_title": "LA MISSIONE: RICODIFICARE L'ECONOMIA",
      "mission_text": "CircularOS non è un'applicazione. È il sistema operativo sovrano e distribuito che permette all'Europa di far circolare liberamente risorse, dati e valori.",
      "os_why": "Perché un \"OS\" per l'Economia? Nel 21° secolo: Chi controlla i Dati controlla la Realtà.",
      "pillars_title": "I CINQUE PILASTRI DELLA SOVRANITÀ",
      "pillars": [
        "Il Rivelatore di Crisi: Le crisi recenti hanno rivelato la nostra dipendenza critica da infrastrutture invisibili.",
        "Fondamenta Prima di Tutto: In tempi di crisi, è troppo tardi per costruire innovazione d'emergenza.",
        "Da Accessorio a Essenziale: L'infrastruttura digitale è un imperativo di sopravvivenza.",
        "Un Consenso Oltre la Politica: La sovranità tecnologica è una questione di realismo.",
        "La Fine del \"Feticismo dell'Innovazione\": Nessuna innovazione sostenibile senza infrastrutture sicure."
      ]
    },
    "plan": {
      "title": "✨ Il nostro piano in 10 punti",
      "subtitle": "Per un Ecosistema Sovrano e Prospero",
      "intro": "In linea con il quadro del Future Institute, CircularOS si impegna nella seguente roadmap per reclamare il nostro destino digitale ed economico.",
      "points": [
        { "title": "1. 🛠️ SOSTENERE I 'MAKER' & PMI", "text": "Potenziamo artigiani e PMI europee con strumenti SaaS sovrani e accesso diretto ai mercati. Sostituiamo le commissioni predatorie con un modello che supporta l'investimento locale." },
        { "title": "2. 💶 STOP ALLA DISPERSIONE ECONOMICA", "text": "Preveniamo la perdita di miliardi in valore economico. Costruendo la nostra infrastruttura, margini e tasse restano in Europa per finanziare scuole e ospedali." },
        { "title": "3. 🇪🇺 COSTRUIRE L''EUROSTACK' SOVRANO", "text": "Supportiamo infrastrutture open-source all'avanguardia. CircularOS fornisce il software essenziale che collega i cloud sovrani all'economia reale." },
        { "title": "4. 🤖 GUIDARE L'IA PER IL MONDO REALE", "text": "Investiamo in IA per ottimizzare la realtà, non per generare contenuti falsi. Modellazione delle supply chain e previsione energetica." },
        { "title": "5. 🔌 INTEROPERABILITÀ RADICALE", "text": "Rompiamo i silos. CircularOS impone standard aperti. Proteggiamo la scelta delle imprese prevenendo il vendor lock-in." },
        { "title": "6. 🧠 SOVRANITÀ ALGORITMICA", "text": "Sostituiamo gli algoritmi che creano dipendenza con algoritmi 'Life'. Favoriamo l'impegno tramite interfacce che premiano l'impatto reale e la connessione locale." },
        { "title": "7. ❤️ DESIGN PER LA SALUTE MENTALE & CIVICA", "text": "CircularOS promuove design 'Play-to-Act', dove l'impegno digitale è un ponte verso l'attività fisica e la partecipazione civica." },
        { "title": "8. 🛡️ RIVOLUZIONARE L'ECONOMIA DELLA FIDUCIA", "text": "Sostituiamo il 'pagare per essere visti' con il 'provato essere buono'. Ricompensiamo i produttori europei basandoci su Impact Scores verificati." },
        { "title": "9. 🔐 RIPRISTINARE IL CONTROLLO DEI DATI", "text": "Cittadini e aziende possono tracciare e cancellare la loro impronta dati. Protezione dei segreti industriali dalla sorveglianza extraterritoriale." },
        { "title": "10. 🌍 ALLINEARE LA TECH ALLA VERITÀ CLIMATICA", "text": "Rendiamo operativo il Green Deal. Incorporando rating di emissioni trasparenti in ogni transazione, fissiamo obiettivi di efficienza misurabili." }
      ]
    },
    "projects": {
      "made_fr": { "title": "Made.fr", "text": "La Vetrina dell'Eccellenza e Hub di Investimento Nazionale. Made.fr è l'ammiraglia della riconquista industriale francese. Aggrega il miglior know-how per attrarre investitori esteri grazie alla prova dei dati." },
      "made_paris": { "title": "Made.Paris", "text": "Il Marketplace a Circuito Corto e Innovazione Capitale. Un'alternativa sovrana per i produttori parigini, che collega direttamente il luogo di produzione al luogo di consumo senza commissioni abusive." },
      "made_alsace": { "title": "Made.Alsace", "text": "L'Alleanza tra Tradizione e Industria. Collega la potenza delle PMI industriali alsaziane con la ricchezza dell'artigianato tradizionale per strutturare un'offerta locale robusta." },
      "made_bzh": { "title": "Made.Bzh", "text": "Il Faro dell'Economia Marittima e Agricola. Il portale della sovranità bretone, che riunisce attori di terra e mare per disintermediare le filiere e garantire una giusta remunerazione." },
      "life_paris": { "title": "Life.Paris", "text": "Citizen Gaming per Ri-incantare la Ville Lumière. Un'applicazione di 'Reality Gaming' dove ogni quest ha un impatto reale (pulizia, mobilità), collegando i giocatori al commercio locale." },
      "life_alsace": { "title": "Life.Alsace", "text": "Immersione Ludica nel Patrimonio e nell'Industria. Usa i videogiochi per trasmettere cultura e gamificare la scoperta del tessuto industriale regionale, creando ponti verso l'occupazione." },
      "life_bzh": { "title": "Life.Bzh", "text": "Avventura Digitale tra Terra e Mare. Trasforma la regione in un vasto gioco di ruolo dove la protezione dell'ambiente e la cultura sono al centro del gameplay." },
      "smart_paris": { "title": "Smart.Paris", "text": "Cockpit di Dati per una Città Intelligente. Un gemello digitale che aggrega miliardi di dati per offrire una visione chiara del metabolismo urbano a decisori e cittadini." },
      "smart_alsace": { "title": "Smart.Alsace", "text": "Intelligenza Territoriale per l'Industria. Pilotaggio strategico focalizzato sui flussi industriali ed energetici transfrontalieri per identificare opportunità di simbiosi industriale." },
      "smart_bzh": { "title": "Smart.Bzh", "text": "Torre di Controllo Digitale per le Risorse Naturali. Sistema di monitoraggio che combina dati satellitari e marittimi per conciliare sviluppo economico e preservazione della biodiversità." },
      "impact_data": { "title": "ImpactData.fr", "text": "L'API della Verità Ecologica. Un'API SaaS universale che sostituisce le promesse di marketing con prove digitali infalsificabili, auditando la realtà CSR in tempo reale." },
      "achats_eco": { "title": "Achats.eco", "text": "Il Facilitatore degli Appalti Pubblici. Democratizza l'accesso a 200 miliardi di euro di spesa pubblica permettendo alle PMI di raggrupparsi (co-appalto) per rispondere ai bandi." },
      "fournisseurs_eco": { "title": "Fournisseurs.eco", "text": "L'Indice di Resilienza e Sourcing. Una directory dinamica 'Sourcing 4.0' per mappare e mettere in sicurezza le catene di approvvigionamento, favorendo la rilocalizzazione." }
    }
  }
};