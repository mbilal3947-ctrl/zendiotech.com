/* =========================================================
   ZENDIOTECH — MAIN JAVASCRIPT
   Shared across all pages
   ========================================================= */

(() => {
  'use strict';

  /* ===================================================
     CONFIGURATION
     =================================================== */

  const CONFIG = {
    breakpoints: {
      tablet: 820,
      mobile: 560,
    },
    animationDuration: 220,
    scrollRevealThreshold: 0.12,
    scrollRevealDistance: 300,
    backToTopShowAt: 300,
  };

  /* ===================================================
     DOM REFERENCES (safe initialization)
     =================================================== */

  const body = document.body;
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const languageToggle = document.querySelector('.language-toggle');
  const backToTopBtn = document.querySelector('.back-to-top');
  const contactForm = document.querySelector('#contact-form');

  /* ===================================================
     LANGUAGE MODULE
     =================================================== */

  const LanguageModule = (() => {
    const STORAGE_KEY = 'zendiotech-language';

    const translations = {
      en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About',
        navServices: 'Services',
        navIndustries: 'Industries',
        navHowWeWork: 'How We Work',
        navRoadmap: 'Roadmap',
        navMarketplace: 'Marketplace',
        navContact: 'Contact',
        navLanguage: 'العربية',

        // About Page
        aboutHeroEyebrow: 'ABOUT ZENDIOTECH',
        aboutHeroTitle: 'A technology partner built around real business needs.',
        aboutHeroDescription: 'Zendiotech is a technology brand being developed to help businesses use digital solutions with greater clarity, practicality, and confidence. With a focus on modern technology and business needs, we are building a foundation for practical digital products and technology services.',
        aboutOverviewEyebrow: 'WHO WE ARE',
        aboutOverviewTitle: 'Technology with a purpose.',
        aboutOverviewText1: 'Zendiotech is being built around a simple idea: technology should solve real business problems rather than create unnecessary complexity.',
        aboutOverviewText2: 'We are developing a technology brand focused on practical digital solutions, modern business needs, and long-term scalability. Our approach combines business understanding, technology, and user experience to create solutions that are useful, reliable, and designed to evolve.',
        aboutOverviewPanelNumber: '01',
        aboutOverviewPanelTitle: 'Built for what comes next.',
        aboutOverviewPanelText: 'Our direction is focused on building a strong technology foundation today while creating the flexibility required for future products, services, and markets.',
        aboutPhilosophyEyebrow: 'OUR PHILOSOPHY',
        aboutPhilosophyTitle: 'Technology should make business simpler.',
        aboutPhilosophyIntro: 'We believe technology is most valuable when it is understandable, useful, and aligned with the people and businesses using it.',
        aboutPhilosophyUnderstandTitle: 'Understand',
        aboutPhilosophyUnderstandDescription: 'We begin by understanding the business need, the people involved, and the outcome a solution needs to achieve.',
        aboutPhilosophySimplifyTitle: 'Simplify',
        aboutPhilosophySimplifyDescription: 'We focus on reducing unnecessary complexity and creating technology experiences that are easier to understand and use.',
        aboutPhilosophyBuildTitle: 'Build',
        aboutPhilosophyBuildDescription: 'We turn the defined requirements into practical digital solutions designed around reliability, usability, and growth.',
        aboutPhilosophyImproveTitle: 'Improve',
        aboutPhilosophyImproveDescription: 'We design with the future in mind so solutions can adapt as businesses, users, and technology continue to change.',
        aboutApproachEyebrow: 'OUR APPROACH',
        aboutApproachTitle: 'Business thinking first. Technology where it creates value.',
        aboutApproachDescription: 'Our approach is built around connecting business objectives with appropriate technology rather than using technology simply for its own sake.',
        aboutApproachFlowTitle: 'BUSINESS FLOW',
        aboutApproachBusiness: 'Business',
        aboutApproachTechnology: 'Technology',
        aboutApproachExperience: 'Experience',
        aboutApproachValue: 'Value',
        aboutCapabilitiesEyebrow: 'OUR CAPABILITIES',
        aboutCapabilitiesTitle: 'Technology capabilities built around business needs.',
        aboutCapabilitiesDescription: 'Our capabilities are being developed around the areas where technology can create practical value for modern businesses.',
        aboutCapabilityDigitalTitle: 'Digital',
        aboutCapabilityDigitalDescription: 'Modern, responsive digital experiences and business-facing platforms designed around clarity, usability, and scalability.',
        aboutCapabilityCloudTitle: 'Cloud',
        aboutCapabilityCloudDescription: 'Technology foundations that support reliable infrastructure, scalability, and future business growth.',
        aboutCapabilityIntelligenceTitle: 'Intelligence',
        aboutCapabilityIntelligenceDescription: 'Practical applications of AI, automation, and insight-driven systems where they create measurable value.',
        aboutCapabilitySecurityTitle: 'Security',
        aboutCapabilitySecurityDescription: 'Protection, resilience, and secure-by-design thinking for business-critical operations and digital environments.',
        aboutCapabilityAdvisoryTitle: 'Advisory',
        aboutCapabilityAdvisoryDescription: 'Clear technology guidance, strategic direction, and practical recommendations to support better business decisions.',
        aboutMissionEyebrow: 'OUR MISSION',
        aboutMissionTitle: 'Make technology more useful for business.',
        aboutMissionDescription: 'Our mission is to create practical digital solutions that help businesses operate more effectively, connect with their customers, and move forward with confidence.',
        aboutVisionEyebrow: 'OUR VISION',
        aboutVisionTitle: 'Build a technology brand prepared for the future.',
        aboutVisionDescription: 'Our vision is to develop Zendiotech into a technology brand capable of creating meaningful digital products, services, and experiences for businesses in the UAE and beyond.',
        aboutValuesEyebrow: 'OUR VALUES',
        aboutValuesTitle: 'The principles behind how we work.',
        aboutValuesDescription: 'Our values guide how we think, build, communicate, and develop Zendiotech for the long term.',
        aboutValueClarityTitle: 'Clarity',
        aboutValueClarityDescription: 'We communicate clearly and aim to make technology easier to understand.',
        aboutValuePracticalityTitle: 'Practicality',
        aboutValuePracticalityDescription: 'We focus on solutions that address real needs and create meaningful business value.',
        aboutValueReliabilityTitle: 'Reliability',
        aboutValueReliabilityDescription: 'We aim to build dependable experiences and technology foundations that businesses can trust.',
        aboutValueResponsibilityTitle: 'Responsibility',
        aboutValueResponsibilityDescription: 'We approach technology with care, accountability, and respect for the people who depend on it.',
        aboutValueLearningTitle: 'Continuous Learning',
        aboutValueLearningDescription: 'We remain open to new ideas, technologies, and better ways of solving problems.',
        aboutValueLongTermTitle: 'Long-Term Thinking',
        aboutValueLongTermDescription: 'We build with the future in mind and aim to create foundations that can grow with the business.',
        aboutProcessEyebrow: 'HOW WE WORK',
        aboutProcessTitle: 'A clear path from understanding to delivery.',
        aboutProcessDescription: 'Our process is designed to keep technology work structured, transparent, and aligned with the intended business outcome.',
        aboutProcessDiscoverTitle: 'Discover',
        aboutProcessDiscoverDescription: 'We identify the business objective, requirements, users, challenges, and expected outcome.',
        aboutProcessPlanTitle: 'Plan',
        aboutProcessPlanDescription: 'We translate the requirements into a clear direction, structure, priorities, and implementation approach.',
        aboutProcessBuildTitle: 'Build',
        aboutProcessBuildDescription: 'We develop the solution with attention to usability, reliability, performance, and maintainability.',
        aboutProcessLaunchTitle: 'Launch',
        aboutProcessLaunchDescription: 'We support a confident delivery and ensure the business is ready to adopt and use the solution effectively.',
        aboutProcessImproveTitle: 'Improve',
        aboutProcessImproveDescription: 'We continue refining the solution as the business grows and changes over time.',
        aboutWhyEyebrow: 'WHY ZENDIOTECH',
        aboutWhyTitle: 'A technology partner focused on what matters.',
        aboutWhyDescription: 'We are building Zendiotech around a practical approach to technology—understanding the business first, choosing the right technology, and creating solutions that can grow over time.',
        aboutWhyBusinessTitle: 'Business-Focused',
        aboutWhyBusinessDescription: 'Technology decisions should support clear business objectives and measurable needs.',
        aboutWhyPracticalTitle: 'Practical by Design',
        aboutWhyPracticalDescription: 'We aim for solutions that are useful, understandable, and appropriate for the problem being solved.',
        aboutWhyEvolveTitle: 'Built to Evolve',
        aboutWhyEvolveDescription: 'We consider scalability and future requirements so today\'s foundation can support tomorrow\'s opportunities.',
        aboutWhyUaeTitle: 'UAE-Focused Direction',
        aboutWhyUaeDescription: 'With our UAE operations being established, we are developing our capabilities with the needs of the UAE market in mind.',
        aboutGrowthEyebrow: 'GROWTH & FUTURE DIRECTION',
        aboutGrowthTitle: 'Building today\'s foundation for tomorrow\'s opportunities.',
        aboutGrowthDescription: 'Zendiotech is being developed with a long-term perspective. As our capabilities grow, our focus remains on creating useful technology, strengthening our presence in the UAE, and developing solutions that can serve businesses across changing markets and digital environments.',
        aboutGrowthFoundationTitle: 'Foundation',
        aboutGrowthFoundationDescription: 'Build a strong operational and technology foundation in the UAE.',
        aboutGrowthExpansionTitle: 'Expansion',
        aboutGrowthExpansionDescription: 'Grow our capabilities and create practical digital solutions around real business needs.',
        aboutGrowthProductsTitle: 'Products & Platforms',
        aboutGrowthProductsDescription: 'Develop useful products, digital platforms, and services designed for future demand.',
        aboutGrowthScaleTitle: 'Global Scale',
        aboutGrowthScaleDescription: 'Continue improving our approach, reach, and partnership network as new opportunities emerge.',
        aboutCtaEyebrow: 'LET\'S BUILD WHAT\'S NEXT',
        aboutCtaTitle: 'Have a technology idea or business challenge?',
        aboutCtaDescription: 'Let\'s explore how the right technology approach can help move your business forward.',

        // Services Page
        servicesHeroEyebrow: 'OUR SERVICES',
        servicesHeroTitle: 'Technology solutions built around your business.',
        servicesHeroDescription: 'From a first website to enterprise-ready systems, Zendiotech helps businesses plan, build, launch, and improve their technology.',
        servicesListEyebrow: 'WHAT WE DO',
        servicesListTitle: 'Practical technology services for growing businesses.',
        servicesListDescription: 'We focus on building useful digital systems that support real business requirements, from the first idea through implementation and ongoing improvement.',
        service01Title: 'Website Development',
        service01Description: 'Professional, responsive and modern websites designed around your business identity, customers and objectives.',
        service02Title: 'Web Applications',
        service02Description: 'Custom web applications and digital systems designed to simplify business operations and improve customer experiences.',
        service03Title: 'Mobile Applications',
        service03Description: 'Mobile experiences focused on usability, accessibility, and meaningful interaction across modern devices.',
        service04Title: 'Cloud Solutions',
        service04Description: 'Technology foundations that support reliable digital operations, infrastructure, scalability, and future business growth.',
        service05Title: 'Managed IT Support',
        service05Description: 'Practical support for users, devices, networks, systems, and everyday operations.',
        service06Title: 'Cybersecurity',
        service06Description: 'Security reviews, protection, backup planning, and awareness for a safer business.',
        service07Title: 'AI & Automation',
        service07Description: 'Smart automation that reduces repetitive work and helps teams make faster decisions.',
        servicesValueEyebrow: 'TECHNOLOGY VALUE',
        servicesValueTitle: 'Technology should create useful business value.',
        servicesValueDescription: 'The purpose of technology is not simply to add another system. It should contribute to clearer, more efficient, and more scalable ways of working.',
        serviceBenefitDigitalTitle: 'Better Digital Experiences',
        serviceBenefitDigitalDescription: 'Give customers, users, and teams clearer ways to interact with digital services and information.',
        serviceBenefitEfficiencyTitle: 'More Efficient Workflows',
        serviceBenefitEfficiencyDescription: 'Reduce unnecessary manual effort by improving processes and connecting appropriate technology.',
        serviceBenefitFoundationTitle: 'Stronger Technology Foundations',
        serviceBenefitFoundationDescription: 'Establish technology systems that can support current operations while allowing future development.',
        serviceBenefitGrowthTitle: 'Room to Grow',
        serviceBenefitGrowthDescription: 'Build technology with future business needs in mind instead of creating systems that quickly become difficult to extend.',
        servicesCtaEyebrow: 'READY TO MOVE FORWARD?',
        servicesCtaTitle: 'Have a technology challenge?',
        servicesCtaDescription: 'Tell us about your goals and we\'ll help you find the right next step.',

        // Industries Page
        industriesOverviewEyebrow: 'INDUSTRY OVERVIEW',
        industriesOverviewTitle: 'Technology should fit the business, not the other way around.',
        industriesOverviewText1: 'Businesses operate differently depending on their customers, teams, processes, and goals. That means technology requirements are rarely identical.',
        industriesOverviewText2: 'Zendiotech approaches technology around the needs of the business, with attention to practical challenges, useful systems, and opportunities for digital improvement.',
        industriesContextNumber: '01',
        industriesContextTitle: 'Understand the need before choosing the technology.',
        industriesContextDescription: 'The right solution begins with understanding how a business works, where its challenges exist, and what it needs technology to achieve.',
        industriesCategoriesEyebrow: 'INDUSTRY CATEGORIES',
        industriesCategoriesTitle: 'Built for different business environments.',
        industriesCategoriesDescription: 'Our focus includes businesses and teams across several common operating environments. Each category presents different technology needs and challenges.',
        industry01Title: 'Startups & Growing Businesses',
        industry01Description: 'Technology foundations for businesses building their operations, digital presence, customer experience, and future growth.',
        industry02Title: 'Professional Services',
        industry02Description: 'Digital tools that can help professional teams organize information, communicate with clients, and improve everyday workflows.',
        industry03Title: 'Retail & E-commerce',
        industry03Description: 'Technology for digital storefronts, customer journeys, operational workflows, and connected commerce experiences.',
        industry04Title: 'Real Estate & Construction',
        industry04Description: 'Digital systems that can support property information, enquiries, project coordination, communication, and operational processes.',
        industry05Title: 'Healthcare & Education',
        industry05Description: 'Practical technology approaches for information management, digital access, communication, and user-focused services.',
        industry06Title: 'Operational Teams',
        industry06Description: 'Technology designed around internal workflows, coordination, support requirements, and the everyday needs of operational teams.',
        industriesChallengesEyebrow: 'COMMON CHALLENGES',
        industriesChallengesTitle: 'Different industries. Many of the same technology questions.',
        industriesChallengesDescription: 'While every business is different, technology decisions often begin with a familiar set of operational and digital challenges.',
        challengeDigitalTitle: 'How do we build a stronger digital presence?',
        challengeDigitalDescription: 'Businesses may need a clearer website, better digital experiences, or stronger ways to communicate with customers.',
        challengeAutomationTitle: 'How can we reduce repetitive work?',
        challengeAutomationDescription: 'Manual processes and repeated tasks can create opportunities for better systems and automation.',
        challengeIntegrationTitle: 'How should our systems connect?',
        challengeIntegrationDescription: 'Businesses may have different tools and workflows that need to work together more effectively.',
        challengeScalabilityTitle: 'How can technology support growth?',
        challengeScalabilityDescription: 'Technology decisions need to consider both current requirements and the ability to evolve as the business changes.',
        industriesApproachEyebrow: 'OUR APPROACH',
        industriesApproachTitle: 'Technology capabilities connected to business needs.',
        industriesApproachDescription: 'Depending on the requirement, businesses may use one solution or a combination of technology capabilities.',
        approachWebsitesTitle: 'Websites',
        approachWebsitesDescription: 'Professional digital experiences that provide information, credibility, and customer pathways.',
        approachApplicationsTitle: 'Web Applications',
        approachApplicationsDescription: 'Custom portals, dashboards, platforms, and workflow-based business applications.',
        approachMobileTitle: 'Mobile Applications',
        approachMobileDescription: 'Mobile experiences designed around customers, teams, and specific business requirements.',
        approachCloudTitle: 'Cloud Solutions',
        approachCloudDescription: 'Cloud-based systems, collaboration tools, infrastructure, and migration support.',
        approachITTitle: 'IT Support',
        approachITDescription: 'Practical support for users, devices, systems, networks, and everyday operations.',
        approachSecurityTitle: 'Cybersecurity',
        approachSecurityDescription: 'Security-focused practices, protection, backup planning, and technology awareness.',
        approachAutomationTitle: 'AI & Automation',
        approachAutomationDescription: 'Automation and intelligent technology approaches for reducing repetitive work and improving workflows.',
        approachConsultingTitle: 'Technology Consulting',
        approachConsultingDescription: 'Technology planning, solution evaluation, roadmaps, and practical guidance.',
        industriesCtaEyebrow: 'READY TO MOVE FORWARD?',
        industriesCtaTitle: 'Have a technology challenge?',
        industriesCtaDescription: 'Tell us about your business, your current technology needs, or the challenge you want to solve. We can start by understanding the requirement.',

        // Buttons
        buttonStartConversation: 'Start a Conversation',
        buttonExploreServices: 'Explore Our Services',
        buttonContact: 'Contact Us',
        buttonBack: 'Back',
        
        // Forms
        contactFormName: 'Name',
        contactFormEmail: 'Email',
        contactFormMessage: 'Message',
        contactFormSubmit: 'Send',
        errorRequiredField: 'This field is required',
        errorInvalidEmail: 'Please enter a valid email',
        successFormSubmitted: 'Thank you! Your message has been received.',
        
        // Home Hero
        heroEyebrow: 'TECHNOLOGY SOLUTIONS',
        heroTitle: 'Build what\'s next for your business.',
        heroDescription: 'Practical digital products, modern technology solutions, and dependable support for ambitious businesses ready to move forward.',
        
        // Home Services Section
        servicesEyebrow: 'WHAT WE DO',
        servicesTitle: 'End-to-end technology services.',
        servicesDescription: 'From a first website to enterprise-ready systems, we help businesses plan, build, launch, and improve their technology.',
        
        // Services 1-7
        service01Title: 'Website Development',
        service01Description: 'Professional, responsive websites that build trust and generate enquiries.',
        service02Title: 'Web Application Development',
        service02Description: 'Custom portals, dashboards, marketplaces, and business platforms built around your workflow.',
        service03Title: 'Mobile App Development',
        service03Description: 'Android and iOS applications that give customers and teams a better mobile experience.',
        service04Title: 'Cloud Solutions',
        service04Description: 'Secure cloud tools, migrations, and collaboration systems that scale with your business.',
        service05Title: 'Managed IT Support',
        service05Description: 'Practical support for users, devices, networks, systems, and everyday operations.',
        service06Title: 'Cybersecurity',
        service06Description: 'Security reviews, protection, backup planning, and awareness for a safer business.',
        service07Title: 'AI & Automation',
        service07Description: 'Smart automation that reduces repetitive work and helps teams make faster decisions.',
        
        // Home Roadmap Section
        roadmapEyebrow: 'OUR ROADMAP',
        roadmapTitle: 'Building the future, step by step.',
        roadmapIntro: 'A focused journey from establishing our foundation to building scalable digital products and expanding internationally.',
        roadmapStage01Title: 'Foundation',
        roadmapStage01Description: 'Establish Zendiotech\'s UAE operations, launch our core technology services, build our delivery team, and create strong foundations for long-term growth.',
        roadmapStage01Status: '2026',
        roadmapStage02Title: 'Expansion',
        roadmapStage02Description: 'Expand our technology services, strengthen strategic partnerships, grow our client base, and develop a wider regional presence across the GCC.',
        roadmapStage02Status: '2027',
        roadmapStage03Title: 'Products & Platforms',
        roadmapStage03Description: 'Introduce proprietary digital products, SaaS platforms, marketplaces, and technology solutions designed to solve real business challenges.',
        roadmapStage03Status: '2028',
        roadmapStage04Title: 'Global Scale',
        roadmapStage04Description: 'Scale our technology ecosystem across international markets, build deeper enterprise partnerships, and become a trusted long-term digital growth partner.',
        roadmapStage04Status: '2029+',
        roadmapViewFull: 'View Our Full Roadmap',
        
        // Contact CTA Section
        contactCtaEyebrow: 'READY TO MOVE FORWARD?',
        contactCtaTitle: 'Let\'s build what\'s next for your business.',
        contactCtaDescription: 'Tell us about your goals and we\'ll help you find the right next step.',
        
        // Footer
        footerBrandDescription: 'Practical digital products, technology solutions, and dependable IT support for businesses ready to move forward.',
        footerCompanyTitle: 'Company',
        footerServicesTitle: 'Services',
        footerContactTitle: 'Contact',
        footerLocation: 'UAE • Technology Solutions',
        footerTagline: 'Built for practical digital growth.',

                /* =========================================================
        HOW WE WORK — ENGLISH
        ========================================================= */

        howHeroEyebrow: "OUR DELIVERY METHOD",
        howHeroTitle: "Structured technology delivery without unnecessary complexity.",
        howHeroDescription:
        "We believe good technology projects begin with understanding, not assumptions. Our process creates a clear path from the business problem through planning, execution, launch, and continuous improvement.",

        howHeroProcessButton: "Explore Our Process",

        howOverviewEyebrow: "OUR APPROACH",
        howOverviewTitle:
        "A clear process from first conversation to ongoing support.",
        howOverviewDescription:
        "Every stage is designed to create clarity, reduce unnecessary complexity, and keep technology connected to the business objective.",

        howProcessEyebrow: "THE PROCESS",
        howProcessTitle: "Five stages. One clear path forward.",
        howProcessDescription:
        "From discovery to improvement, each stage establishes the foundation for the next.",

        howStepOneTitle: "Discovery",
        howStepOneDescription:
        "We understand the business, objectives, challenges, users, and requirements.",
        howStepOnePointOne: "Business objectives are discussed.",
        howStepOnePointTwo: "Current challenges are identified.",
        howStepOnePointThree: "Users and workflows are understood.",
        howStepOnePointFour: "Requirements are clarified.",

        howStepTwoTitle: "Planning",
        howStepTwoDescription:
        "We define priorities, scope, the appropriate technology approach, and a practical path forward.",
        howStepTwoPointOne: "Priorities are established.",
        howStepTwoPointTwo: "Scope and requirements are organized.",
        howStepTwoPointThree: "Technology options are evaluated.",
        howStepTwoPointFour: "A practical delivery path is defined.",

        howStepThreeTitle: "Execution",
        howStepThreeDescription:
        "We design, develop, integrate, and test the solution according to the agreed requirements.",
        howStepThreePointOne: "Design and development begin.",
        howStepThreePointTwo: "Systems and integrations are implemented.",
        howStepThreePointThree: "Progress is reviewed.",
        howStepThreePointFour: "Testing is performed throughout delivery.",

        howStepFourTitle: "Launch",
        howStepFourDescription:
        "We prepare the solution for practical use and support the transition into operation.",
        howStepFourPointOne: "Final checks are completed.",
        howStepFourPointTwo: "The solution is prepared for use.",
        howStepFourPointThree: "Deployment is coordinated.",
        howStepFourPointFour: "Teams can be supported during transition.",

        howStepFiveTitle: "Improvement",
        howStepFiveDescription:
        "We review, maintain, and improve the solution as the business and its requirements evolve.",
        howStepFivePointOne: "Performance and requirements are reviewed.",
        howStepFivePointTwo: "Maintenance needs are addressed.",
        howStepFivePointThree: "Improvements can be prioritized.",
        howStepFivePointFour: "Technology can evolve with the business.",

        howCommunicationEyebrow: "CLEAR COMMUNICATION",
        howCommunicationTitle: "No black box. No unnecessary complexity.",
        howCommunicationDescription:
        "Every stage is designed to keep the project understandable, with clear responsibilities, decisions, priorities, and progress.",

        howCommunicationOneTitle: "Clear responsibilities",
        howCommunicationOneText:
        "Everyone understands what needs to happen and who is responsible for the next step.",

        howCommunicationTwoTitle: "Practical decisions",
        howCommunicationTwoText:
        "Technology choices are connected to the actual business requirement.",

        howCommunicationThreeTitle: "Visible progress",
        howCommunicationThreeText:
        "Important project progress and decisions remain understandable throughout delivery.",

        howCommunicationFourTitle: "Stage-by-stage progression",
        howCommunicationFourText:
        "Each stage establishes the foundation for the next instead of moving forward without clarity.",

        howOutcomeEyebrow: "WHAT YOU CAN EXPECT",
        howOutcomeTitle:
        "Technology delivery built around business outcomes.",
        howOutcomeDescription:
        "The objective is not simply to deliver technology. It is to create a solution that makes sense for the business, can be used effectively, and can improve as requirements change.",

        howOutcomeOneTitle: "Understand the path",
        howOutcomeOneText:
        "The project begins by establishing a shared understanding of the business objective, requirements, and priorities.",

        howOutcomeTwoTitle: "Build with purpose",
        howOutcomeTwoText:
        "Technology is designed and implemented around the requirements rather than around unnecessary complexity.",

        howOutcomeThreeTitle: "Improve over time",
        howOutcomeThreeText:
        "Where appropriate, solutions can be maintained, reviewed, and improved as the business develops.",

        howCtaEyebrow: "START A CONVERSATION",
        howCtaTitle: "Let's build what's next for your business.",
        howCtaDescription:
        "Whether you are starting a new digital project, improving an existing system, or exploring how technology can support your next stage of growth, we'd like to understand what you are trying to achieve.",

        footerDescription:
        "Practical digital products, technology solutions, and dependable IT support for businesses ready to move forward.",

        footerCompany: "Company",
        footerExplore: "Explore",
        footerContact: "Contact",
        footerLocation: "UAE • Technology Solutions",
        footerRights: "All rights reserved.",
        footerTagline: "Built for practical digital growth.",

                    /* =========================================================
        ROADMAP — ENGLISH
        ========================================================= */

        roadmapHeroEyebrow: "OUR ROADMAP",
        roadmapHeroTitle: "Building technology with a clear direction.",
        roadmapHeroDescription:
        "Zendiotech is being developed with a long-term focus on practical digital products, dependable technology services, and solutions that can grow with the businesses we support.",
        roadmapHeroButton: "Explore the Roadmap",

        roadmapDirectionEyebrow: "THE DIRECTION",
        roadmapDirectionTitle:
        "From a strong foundation to a broader technology ecosystem.",
        roadmapDirectionDescription:
        "Our roadmap is not simply about adding more features or services. It is about establishing the right foundation, developing useful products, expanding our capabilities, and gradually reaching wider markets.",

        roadmapAheadEyebrow: "THE ROAD AHEAD",
        roadmapAheadTitle: "Four stages. One long-term direction.",

        roadmapStageOneLabel: "FOUNDATION",
        roadmapStageOneTitle: "Build the foundation.",
        roadmapStageOneDescription:
        "Establish the technology and operational foundation required for dependable digital solutions.",
        roadmapStageOnePointOne: "Establish core digital capabilities.",
        roadmapStageOnePointTwo: "Develop reliable technical infrastructure.",
        roadmapStageOnePointThree: "Establish the brand and operating structure.",
        roadmapStageOnePointFour: "Understand real business requirements.",
        roadmapStageOneStatus: "BUILDING",

        roadmapStageTwoLabel: "PRODUCTS",
        roadmapStageTwoTitle: "Develop practical digital products.",
        roadmapStageTwoDescription:
        "Create focused products designed around real-world requirements and measurable use.",
        roadmapStageTwoPointOne: "Build focused digital products.",
        roadmapStageTwoPointTwo: "Validate ideas through real usage.",
        roadmapStageTwoPointThree: "Improve products through feedback.",
        roadmapStageTwoPointFour: "Create reusable technology components.",
        roadmapStageTwoStatus: "DEVELOPING",

        roadmapStageThreeLabel: "SERVICES",
        roadmapStageThreeTitle: "Expand technology capabilities.",
        roadmapStageThreeDescription:
        "Develop a broader range of technology capabilities that businesses can rely on.",
        roadmapStageThreePointOne: "Technology consulting.",
        roadmapStageThreePointTwo: "Web and software development.",
        roadmapStageThreePointThree: "Business systems and integrations.",
        roadmapStageThreePointFour: "IT support and digital transformation.",
        roadmapStageThreeStatus: "EXPANDING",

        roadmapStageFourLabel: "GROWTH",
        roadmapStageFourTitle: "Build a broader technology ecosystem.",
        roadmapStageFourDescription:
        "Expand capabilities, partnerships, and market reach as the organization develops.",
        roadmapStageFourPointOne: "Expand the service portfolio.",
        roadmapStageFourPointTwo: "Enter additional markets.",
        roadmapStageFourPointThree: "Develop technology partnerships.",
        roadmapStageFourPointFour:
        "Build toward wider regional and international presence.",
        roadmapStageFourStatus: "FUTURE DIRECTION",

        roadmapLookingEyebrow: "LOOKING AHEAD",
        roadmapLookingTitle:
        "Technology that grows with the businesses it serves.",
        roadmapLookingDescription:
        "The long-term direction is to build Zendiotech into a dependable technology partner for businesses that need practical digital solutions, scalable systems, and ongoing technology support.",

        roadmapMeaningEyebrow: "WHAT THE ROADMAP MEANS",
        roadmapMeaningTitle: "Growth should follow capability.",
        roadmapMeaningDescription:
        "Zendiotech's roadmap is intentionally structured around capability rather than simply adding more products or services. Each stage is designed to strengthen the foundation for the next.",

        roadmapMeaningOneLabel: "BUILD",
        roadmapMeaningOneTitle: "Establish the foundation.",
        roadmapMeaningOneText:
        "Build the technology and operational capabilities required for dependable delivery.",

        roadmapMeaningTwoLabel: "LEARN",
        roadmapMeaningTwoTitle: "Understand what businesses need.",
        roadmapMeaningTwoText:
        "Use real requirements, feedback, and experience to improve the direction of our solutions.",

        roadmapMeaningThreeLabel: "EXPAND",
        roadmapMeaningThreeTitle: "Scale what proves useful.",
        roadmapMeaningThreeText:
        "Expand the solutions and capabilities that create practical value for businesses.",

        roadmapCtaEyebrow: "START A CONVERSATION",
        roadmapCtaTitle: "Let's build what's next for your business.",
        roadmapCtaDescription:
        "Whether you are starting a new digital project, improving an existing system, or exploring how technology can support your next stage of growth, we'd like to understand what you are trying to achieve.",

        /* =========================================================
   CONTACT — ENGLISH
   ========================================================= */

contactHeroEyebrow: "CONTACT ZENDIOTECH",
contactHeroTitle: "Let’s build what’s next for your business.",
contactHeroDescription:
    "Whether you are starting a new digital project, improving an existing system, or exploring how technology can support your next stage of growth, let’s start with the problem you are trying to solve.",
contactHeroButton: "Start a Conversation",

contactIntroEyebrow: "START A CONVERSATION",
contactIntroTitle: "Tell us what you’re trying to build.",
contactIntroDescription:
    "We start by understanding the business requirement, the current challenge, the desired outcome, and the most practical next step.",

contactEmailLabel: "Email",
contactEmailTitle: "Business enquiries",

contactLocationLabel: "Location",
contactLocationTitle: "UAE",
contactLocationDescription:
    "Zendiotech is being developed with the UAE as an important part of its growth direction.",

contactTechnologyLabel: "Technology",
contactTechnologyTitle: "Practical solutions",
contactTechnologyDescription:
    "Websites, applications, cloud solutions, IT support, cybersecurity, AI automation, and technology consulting.",

contactNextLabel: "Next step",
contactNextTitle: "Start with the requirement",
contactNextDescription:
    "Tell us what you are trying to achieve and we can begin with understanding the requirement.",

contactFormEyebrow: "YOUR REQUIREMENT",
contactFormTitle: "Send us an enquiry.",
contactFormDescription:
    "Share a few details about your business and what you need help with.",

contactFullName: "Full Name",
contactCompany: "Business / Company",
contactEmail: "Email Address",
contactPhone: "Phone Number",

contactServiceLabel: "What do you need help with?",
contactServicePlaceholder: "Select a requirement",

serviceWebsite: "Website / Web Development",
serviceWebApplication: "Web Application Development",
serviceMobileApp: "Mobile App Development",
serviceCloud: "Cloud Solutions",
serviceITSupport: "Managed IT Support",
serviceCybersecurity: "Cybersecurity",
serviceAI: "AI & Automation",
serviceConsulting: "Technology Consulting",
serviceOther: "Other",

contactMessage: "Message",
contactMessagePlaceholder:
    "Tell us about your requirement, challenge, or project.",

contactSubmit: "Send Enquiry",

contactFormNote:
    "This form is currently a front-end enquiry interface. A secure backend submission system will be connected during the appropriate implementation stage.",

contactProcessEyebrow: "WHAT HAPPENS NEXT",
contactProcessTitle: "A simple path from conversation to action.",
contactProcessDescription:
    "Good technology starts with understanding. Our approach keeps the next step clear and connected to the actual business requirement.",

contactStep1Label: "01 — UNDERSTAND",
contactStep1Title: "Understand the requirement.",
contactStep1Description:
    "We first understand your business, requirements, challenges, goals, and priorities.",

contactStep2Label: "02 — DISCUSS",
contactStep2Title: "Discuss the right approach.",
contactStep2Description:
    "We discuss the practical technology approach and the appropriate scope for the project.",

contactStep3Label: "03 — PLAN",
contactStep3Title: "Define the next step.",
contactStep3Description:
    "We establish a clear direction based on what the business actually needs.",

contactStep4Label: "04 — BUILD",
contactStep4Title: "Move forward with purpose.",
contactStep4Description:
    "Where appropriate, we move into structured planning, development, launch, and improvement.",

contactPrincipleEyebrow: "PRACTICAL TECHNOLOGY",
contactPrincipleTitle:
    "Start with the problem. Build the right solution.",
contactPrincipleDescription:
    "Good technology begins with understanding. Zendiotech focuses on practical solutions that make sense for the businesses using them.",
contactPrincipleButton: "Start a Conversation",

contactFinalEyebrow: "LET’S TALK",
contactFinalTitle: "Ready to discuss what comes next?",
contactFinalDescription:
    "Tell us what you are trying to achieve, and we’ll start with understanding the requirement.",
contactFinalButton: "Start a Conversation",

            },
      ar: {
        // Navigation
        navHome: 'الرئيسية',
        navAbout: 'من نحن',
        navServices: 'الخدمات',
        navIndustries: 'القطاعات',
        navHowWeWork: 'كيف نعمل',
        navRoadmap: 'خارطة الطريق',
        navMarketplace: 'السوق',
        navContact: 'تواصل معنا',
        navLanguage: 'English',

        // About Page
        aboutHeroEyebrow: 'حول زينديوتك',
        aboutHeroTitle: 'شريك تقني مبني حول احتياجات الأعمال الحقيقية.',
        aboutHeroDescription: 'Zendiotech هي علامة تجارية تقنية يتم تطويرها لمساعدة الشركات على استخدام الحلول الرقمية بوضوح وعمليّة وثقة أكبر. مع التركيز على التكنولوجيا الحديثة واحتياجات الأعمال، نحن نبني أساساً للمنتجات الرقمية العملية والخدمات التقنية.',
        aboutOverviewEyebrow: 'من نحن',
        aboutOverviewTitle: 'تقنية بغاية.',
        aboutOverviewText1: 'يتم بناء Zendiotech حول فكرة بسيطة: ينبغي للتكنولوجيا أن تحل المشاكل الحقيقية للأعمال بدل إنشاء تعقيد غير ضروري.',
        aboutOverviewText2: 'نحن نطور علامة تجارية تقنية تركز على الحلول الرقمية العملية واحتياجات الأعمال الحديثة والقابلية للتوسع على المدى الطويل. يجمع نهجنا بين فهم الأعمال والتكنولوجيا وتجربة المستخدم لإنشاء حلول مفيدة وموثوقة ومصممة للتطور.',
        aboutOverviewPanelNumber: '01',
        aboutOverviewPanelTitle: 'مبني لما يأتي بعده.',
        aboutOverviewPanelText: 'يركز اتجاهنا على بناء أساس تقني قوي اليوم مع خلق المرونة المطلوبة للمنتجات والخدمات والأسواق المستقبلية.',
        aboutPhilosophyEyebrow: 'فلسفتنا',
        aboutPhilosophyTitle: 'يجب أن تجعل التكنولوجيا العمل أسهل.',
        aboutPhilosophyIntro: 'نؤمن أن التكنولوجيا ذات قيمة أكبر عندما تكون سهلة الفهم ومفيدة ومتماشية مع الأشخاص والشركات المستخدمة لها.',
        aboutPhilosophyUnderstandTitle: 'الفهم',
        aboutPhilosophyUnderstandDescription: 'نبدأ بفهم احتياج العمل والأشخاص المعنيين والنتيجة التي تحتاج الحل لتحقيقها.',
        aboutPhilosophySimplifyTitle: 'التبسيط',
        aboutPhilosophySimplifyDescription: 'نركز على تقليل التعقيد غير الضروري وخلق تجارب تقنية أسهل في الفهم والاستخدام.',
        aboutPhilosophyBuildTitle: 'البناء',
        aboutPhilosophyBuildDescription: 'نحوّل المتطلبات المحددة إلى حلول رقمية عملية مصممة حول الموثوقية وسهولة الاستخدام والنمو.',
        aboutPhilosophyImproveTitle: 'التطوير',
        aboutPhilosophyImproveDescription: 'نصمم مع أخذ المستقبل في الاعتبار حتى يمكن للحلول التكيف مع استمرار تغير الأعمال والمستخدمين والتكنولوجيا.',
        aboutApproachEyebrow: 'نهجنا',
        aboutApproachTitle: 'فكر الأعمال أولاً. التكنولوجيا حيث تخلق القيمة.',
        aboutApproachDescription: 'يستند نهجنا إلى ربط أهداف الأعمال بالتكنولوجيا المناسبة بدلاً من استخدام التكنولوجيا فقط من أجلها.',
        aboutApproachFlowTitle: 'تدفق الأعمال',
        aboutApproachBusiness: 'الأعمال',
        aboutApproachTechnology: 'التكنولوجيا',
        aboutApproachExperience: 'التجربة',
        aboutApproachValue: 'القيمة',
        aboutCapabilitiesEyebrow: 'قدراتنا',
        aboutCapabilitiesTitle: 'قدرات تقنية مبنية حول احتياجات الأعمال.',
        aboutCapabilitiesDescription: 'تتطور قدراتنا حول المجالات التي يمكن للتكنولوجيا أن تخلق فيها قيمة عملية للشركات الحديثة.',
        aboutCapabilityDigitalTitle: 'الرقمي',
        aboutCapabilityDigitalDescription: 'تجارب رقمية حديثة وسريعة الاستجابة ومنصات موجهة للأعمال مصممة حول الوضوح وسهولة الاستخدام وقابلية التوسع.',
        aboutCapabilityCloudTitle: 'السحابة',
        aboutCapabilityCloudDescription: 'أساسات تقنية تدعم البنية التحتية الموثوقة وقابلية التوسع والنمو المستقبلي للأعمال.',
        aboutCapabilityIntelligenceTitle: 'الذكاء',
        aboutCapabilityIntelligenceDescription: 'تطبيقات عملية للذكاء الاصطناعي والأتمتة والأنظمة القائمة على الرؤى حيث تخلق قيمة قابلة للقياس.',
        aboutCapabilitySecurityTitle: 'الأمان',
        aboutCapabilitySecurityDescription: 'الحماية والمرونة والتفكير الأمني المصمم منذ البداية للعمليات الحرجة وبيئات العمل الرقمية.',
        aboutCapabilityAdvisoryTitle: 'الاستشارات',
        aboutCapabilityAdvisoryDescription: 'إرشاد تقني واضح وتوجيه استراتيجي وتوصيات عملية لدعم قرارات أعمال أفضل.',
        aboutMissionEyebrow: 'مهمتنا',
        aboutMissionTitle: 'جعل التكنولوجيا أكثر فائدة للأعمال.',
        aboutMissionDescription: 'مهمتنا هي خلق حلول رقمية عملية تساعد الشركات على العمل بفعالية أكبر والتواصل مع عملائها والمضي قدماً بثقة.',
        aboutVisionEyebrow: 'رؤيتنا',
        aboutVisionTitle: 'بناء علامة تجارية تقنية مستعدة للمستقبل.',
        aboutVisionDescription: 'رؤيتنا هي تطوير Zendiotech إلى علامة تجارية تقنية قادرة على إنشاء منتجات وخدمات وتجارب رقمية ذات معنى للشركات في الإمارات وخارجها.',
        aboutValuesEyebrow: 'قيمنا',
        aboutValuesTitle: 'المبادئ التي تحكم طريقة عملنا.',
        aboutValuesDescription: 'تقودنا قيمنا في التفكير والبناء والتواصل وتطوير Zendiotech على المدى الطويل.',
        aboutValueClarityTitle: 'الوضوح',
        aboutValueClarityDescription: 'نتواصل بوضوح ونسعى لجعل التكنولوجيا أسهل في الفهم.',
        aboutValuePracticalityTitle: 'العملية',
        aboutValuePracticalityDescription: 'نركز على الحلول التي تعالج احتياجات حقيقية وتخلق قيمة أعمال ذات معنى.',
        aboutValueReliabilityTitle: 'الموثوقية',
        aboutValueReliabilityDescription: 'نهدف إلى بناء تجارب وقواعد تقنية موثوقة يمكن للشركات الاعتماد عليها.',
        aboutValueResponsibilityTitle: 'المسؤولية',
        aboutValueResponsibilityDescription: 'نقارب التكنولوجي باهتمام ومسؤولية واحترام للأشخاص الذين يعتمدون عليه.',
        aboutValueLearningTitle: 'التعلم المستمر',
        aboutValueLearningDescription: 'نبقى منفتحين على أفكار جديدة وتكنولوجيات جديدة وطرق أفضل لحل المشكلات.',
        aboutValueLongTermTitle: 'التفكير طويل المدى',
        aboutValueLongTermDescription: 'نبني مع أخذ المستقبل في الاعتبار ونسعى إلى إنشاء أسس يمكن أن تنمو مع الأعمال.',
        aboutProcessEyebrow: 'كيف نعمل',
        aboutProcessTitle: 'مسار واضح من الفهم إلى التنفيذ.',
        aboutProcessDescription: 'تم تصميم عمليتنا للحفاظ على عمل التكنولوجيا منظمًا وشفافًا ومتسقًا مع النتيجة المرجوة للأعمال.',
        aboutProcessDiscoverTitle: 'الاكتشاف',
        aboutProcessDiscoverDescription: 'نحدد الهدف التشغيلي والمتطلبات والمستخدمين والتحديات والنتيجة المتوقعة.',
        aboutProcessPlanTitle: 'التخطيط',
        aboutProcessPlanDescription: 'نحوّل المتطلبات إلى اتجاه واضح وهيكل وأولويات ونهج تنفيذ.',
        aboutProcessBuildTitle: 'البناء',
        aboutProcessBuildDescription: 'نطور الحل مع اهتمام باستخدامية الموثوقية والأداء وقابلية الصيانة.',
        aboutProcessLaunchTitle: 'الإطلاق',
        aboutProcessLaunchDescription: 'نساعد على تسليم واثق ونضمن استعداد الأعمال لاعتماد الحل واستخدامه بفعالية.',
        aboutProcessImproveTitle: 'التطوير',
        aboutProcessImproveDescription: 'نواصل تحسين الحل كلما نمت الأعمال وتغيرت مع الوقت.',
        aboutWhyEyebrow: 'لماذا زينديوتك',
        aboutWhyTitle: 'شريك تقني يركز على ما يهم.',
        aboutWhyDescription: 'نحن نبني Zendiotech حول نهج عملي للتكنولوجيا — فهم الأعمال أولاً، واختيار التكنولوجيا المناسبة، وخلق حلول يمكن أن تنمو مع الوقت.',
        aboutWhyBusinessTitle: 'موجه للأعمال',
        aboutWhyBusinessDescription: 'يجب أن تدعم قرارات التكنولوجيا أهداف الأعمال الواضحة والاحتياجات القابلة للقياس.',
        aboutWhyPracticalTitle: 'عملي من التصميم',
        aboutWhyPracticalDescription: 'نهدف إلى حلول مفيدة وسهلة الفهم ومناسبة للمشكلة التي تحلها.',
        aboutWhyEvolveTitle: 'مبني للتطور',
        aboutWhyEvolveDescription: 'نأخذ في الاعتبار قابلية التوسع والمتطلبات المستقبلية حتى تدعم القاعدة الحالية فرص الغد.',
        aboutWhyUaeTitle: 'اتجاه يركز على الإمارات',
        aboutWhyUaeDescription: 'مع ت establishment عملياتنا في الإمارات، نطور قدراتنا مع أخذ احتياجات سوق الإمارات في الاعتبار.',
        aboutGrowthEyebrow: 'النمو واتجاه المستقبل',
        aboutGrowthTitle: 'بناء أساس اليوم لفرص الغد.',
        aboutGrowthDescription: 'يتم تطوير Zendiotech بمنظور طويل المدى. مع نمو قدراتنا، يظل تركيزنا على خلق تكنولوجيا مفيدة وتعزيز وجودنا في الإمارات وتطوير حلول تخدم الشركات عبر الأسواق المتغيرة والبيئات الرقمية.',
        aboutGrowthFoundationTitle: 'الأساس',
        aboutGrowthFoundationDescription: 'بناء أساس قوي للتشغيل والتكنولوجيا في الإمارات.',
        aboutGrowthExpansionTitle: 'التوسع',
        aboutGrowthExpansionDescription: 'توسيع قدراتنا وخلق حلول رقمية عملية حول احتياجات الأعمال الحقيقية.',
        aboutGrowthProductsTitle: 'المنتجات والمنصات',
        aboutGrowthProductsDescription: 'تطوير منتجات ومنصات رقمية وخدمات مفيدة مصممة للطلب المستقبلي.',
        aboutGrowthScaleTitle: 'التوسع العالمي',
        aboutGrowthScaleDescription: 'مواصلة تحسين نهجنا ومدى وصولنا وشبكة شراكاتنا مع ظهور فرص جديدة.',
        aboutCtaEyebrow: 'لنُبْنِ ما يأتي بعده',
        aboutCtaTitle: 'هل لديك فكرة تقنية أو تحدٍ تجاري؟',
        aboutCtaDescription: 'دعنا نستكشف كيف يمكن للنهج التكنولوجي الصحيح أن يساعد في دفع عملك إلى الأمام.',

        // Services Page
        servicesHeroEyebrow: 'خدماتنا',
        servicesHeroTitle: 'حلول تقنولوجية مبنية حول عملك.',
        servicesHeroDescription: 'من موقع ويب أول إلى أنظمة جاهزة للعمل على مستوى المشاريع، تساعد Zendiotech الشركات على التخطيط والبناء والإطلاق وتحسين التكنولوجيا لديهم.',
        servicesListEyebrow: 'ماذا نفعل',
        servicesListTitle: 'خدمات تقنولوجية عملية للشركات النامية.',
        servicesListDescription: 'نركز على بناء أنظمة رقمية مفيدة تدعم متطلبات العمل الحقيقية، من الفكرة الأولى مروراً بالتنفيذ والتحسين المستمر.',
        service01Title: 'تطوير مواقع الويب',
        service01Description: 'مواقع ويب احترافية وسريعة الاستجابة وحديثة مصممة حول هوية عملك وعملائك وأهدافك.',
        service02Title: 'تطبيقات الويب',
        service02Description: 'تطبيقات رقمية مخصصة وأنظمة رقمية مصممة لتبسيط عمليات العمل وتحسين تجارب العملاء.',
        service03Title: 'تطبيقات الهاتف الذكية',
        service03Description: 'تجارب للهاتف الذكية مركزة على سهولة استخدام الوصول والالتزام ذو معنى عبر الأجهزة الحديثة.',
        service04Title: 'حلول السحابة',
        service04Description: 'أساسات تقنية تدعم عمليات رقمية موثوقة وبناء تحتية وقابلية التوسع ونمو الأعمال المستقبلي.',
        service05Title: 'دعم تقنولوجيا المعلومات الماري',
        service05Description: 'دعم عملي للمستخدمين والأجهزة والشبكات والأنظمة والعمليات اليومية.',
        service06Title: 'الأمن السيبراني',
        service06Description: 'عمليات الفحص الأمنية والحماية وتخطيط النسخ الاحتياطي والوعي لعمل أكثر أماناً.',
        service07Title: 'الذكاء الاصطناعي والأتمتة',
        service07Description: 'أتمتة ذكية تقلل العمل المتكرر وتساعد الفريق على اتخاذ قرارات أسرع.',
        servicesValueEyebrow: 'قيمة التكنولوجيا',
        servicesValueTitle: 'يجب أن تعمل التكنولوجيا على إنشاء قيمة عملية مفيدة.',
        servicesValueDescription: 'الهدف من التكنولوجيا ليس مجرد إضافة نظام آخر. يجب أن تساهم في طرق أوضح وأكثر كفاءة وقابلية للتوسع.',
        serviceBenefitDigitalTitle: 'تجارب رقمية أفضل',
        serviceBenefitDigitalDescription: 'أعط العملاء والمستخدمين والفرق طرقاً أوضح لالتفاعل مع الخدمات الرقمية والمعلومات.',
        serviceBenefitEfficiencyTitle: 'سارير عمل أكثر كفاءة',
        serviceBenefitEfficiencyDescription: 'قلل العمل اليدوي غير الضروري بتحسين العمليات وربط التكنولوجيا المناسبة.',
        serviceBenefitFoundationTitle: 'أساسات تقنية أقوى',
        serviceBenefitFoundationDescription: 'أشئ أنظمة تقنولوجيا يمكن أن تدعم العمليات الحالية مع السماح بالتطور المستقبلي.',
        serviceBenefitGrowthTitle: 'مساحة للنمو',
        serviceBenefitGrowthDescription: 'ابن التكنولوجيا مع أخذ احتياجات العمل المستقبلية في الاعتبار بدلاً من إنشاء أنظمة يصعب توسععيها بسرعة.',
        servicesCtaEyebrow: 'هل أنت مستعد للمضي قدماً؟',
        servicesCtaTitle: 'هل لديك تحدٍ تقني؟',
        servicesCtaDescription: 'أخبرنا عن أهدافك وسنساعدك على إيجاد الخطوة التالية الصحيحة.',

        // Industries Page
        industriesOverviewEyebrow: 'معلومات عن القطاعات',
        industriesOverviewTitle: 'يجب أن تناسب التكنولوجيا العمل، لا العكس.',
        industriesOverviewText1: 'عمل الشركات مختلف بالاعتماد على عملائه وفرقه وعملياته وأهدافه. هذا يعني أن متطلبات التقنولوجيا نادراً ما تكون متطابقة.',
        industriesOverviewText2: 'يقارب Zendiotech التكنولوجيا من خلال الركيز علمل العمل، مع الاهتمام بالتحديات العملية والأنظمة المفيدة وفرص التحسين الرقمي.',
        industriesContextNumber: '01',
        industriesContextTitle: 'الفهم قبل اختيار التكنولوجيا.',
        industriesContextDescription: 'يبدأ الحل الصحيح بالفهم هو يعمل العمل وأين توجد تحدياته وما يحتاج العمل إليه التكنولوجيا لتحقيقه.',
        industriesCategoriesEyebrow: 'فئات القطاعات',
        industriesCategoriesTitle: 'مبنية لبيئات عمل مختلفة.',
        industriesCategoriesDescription: 'يشمل تركيزنا الشركات والفرق عبر بيئات تشغيلية متعددة وشائعة. يطرح كل قطاع مختلف احتياجات وتحديات تقنولوجية مختلفة.',
        industry01Title: 'الشركات الناشئة والنامية',
        industry01Description: 'أساسات تقنولوجية للشركات التي تبني عملياتها وبوجوده الرقمي وتجربة العملاء ونموه المستقبلي.',
        industry02Title: 'خدمات مهنية',
        industry02Description: 'أدوات رقمية يمكن أن تساعد فرق مهنية على تنظيم المعلومات والتواصل مع العملاء وتحسين سارير العمل اليومية.',
        industry03Title: 'البيع بالتجزئة والتجارة الإلكترونية',
        industry03Description: 'طرق العمل الرقمية، رحلات العملاء، سارير عمل تدرِ قسماتهو تجارب التجارة المرتبطة.',
        industry04Title: 'العقارات والبناء',
        industry04Description: 'أنظمة رقمية يمكن أن تدعم معلومات المملكات واستفسارات العملاء وتنسيق المشاريع والتواصل وعمليات العمل.',
        industry05Title: 'الرعاية الصحية والعليم',
        industry05Description: 'نهج تقنولوجي عملي لإدارة المعلومات والوصول الرقمي والتواصل والخدمات برـ٢ على المستخدم.',
        industry06Title: 'فرق تطبيقية',
        industry06Description: 'تقنولوجيا مصممة حول سارير عمل متداخلة وتنسيق ومتطلبات دعم واحتياجات فرق العمل اليومية.',
        industriesChallengesEyebrow: 'البليات المشتركة',
        industriesChallengesTitle: 'قطاعات مختلفة. العديد من نفس الأسئلة التقنولوجية.',
        industriesChallengesDescription: 'بينما كل عمل مختلف، تبدأ القرارات التقنولوجية غالباً بمجموعة مرا من بليان صيانيانية ورقمية.',
        challengeDigitalTitle: 'كيف نبني بوجوداً رقمياً أقوى؟',
        challengeDigitalDescription: 'قد تحتاج الشركات إلى موقع ويب أوضح أو تجارب رقمية أفضل أو طرق أقوى للتواصل مع العملاء.',
        challengeAutomationTitle: 'كيف يمكننا أن نقلل من العمل مكرراً؟',
        challengeAutomationDescription: 'يمكن للعمليات باليد والمهام المكررة أن تشكل فرصاً لأنظمة أفضل وأتمتة.',
        challengeIntegrationTitle: 'كيف يجب أن ترتبط أنظمتنا؟',
        challengeIntegrationDescription: 'قد يكون لدى الشركات أدوات وسارير عمل مختلفة يجب أن تعمل معاً بكفاءة أكبر.',
        challengeScalabilityTitle: 'كيف يمكن التقنولوجيا أن تدعم النمو؟',
        challengeScalabilityDescription: 'يجب أن تأخذ قرارات التقنولوجيا الاحتياجات الحالية وقدرة التطور مع العمل في الاعتبار.',
        industriesApproachEyebrow: 'نهجنا',
        industriesApproachTitle: 'قدرات تقنولوجية مرتبطة باحتياجات العمل.',
        industriesApproachDescription: 'بالاعتماد على المتطلبات، قد تستخدم الشركات حلاً واحداً أو مزيجاً من قدرات التقنولوجيا.',
        approachWebsitesTitle: 'مواقع',
        approachWebsitesDescription: 'تجارب رقمية ميرة تدر بالمعلومات والمصداقية ومسارات العملاء.',
        approachApplicationsTitle: 'طبيقات الويب',
        approachApplicationsDescription: 'بوابات مخصصة ولوحات تحكم ومنصات وتطبيقات عمل قائمة على سارير العمل.',
        approachMobileTitle: 'تطبيقات الهاتف الذكية',
        approachMobileDescription: 'تجارب موبايل مصممة حول عملاء وفرق ومتطلبات عمل مختلفة.',
        approachCloudTitle: 'حلول السحابة',
        approachCloudDescription: 'أنظمة سحابية وأدوات تعاون وبنية تحتية ودعم الهجرة.',
        approachITTitle: 'دعم تقنولوجيا المعلومات',
        approachITDescription: 'دعم عملي للمستخدمين والأجهزة والنظم والاتصالات وعمليات هم اليومية.',
        approachSecurityTitle: 'الأمن السيبراني',
        approachSecurityDescription: 'ممارسات مركزه الأمن والحماية وتخطيط نسخ الاحتياطي والوعي التقنولوجي.',
        approachAutomationTitle: 'الذكاء الاصطناعي والأتمتة',
        approachAutomationDescription: 'الأتمتة والأنهج التقنولوجيا الذكية لتقليل العمل مكرراً وتحسين سارير العمل.',
        approachConsultingTitle: 'استشارة التقنولوجيا',
        approachConsultingDescription: 'تخطيط التقنولوجيا وتقييم الحلول وخرائط الطريق والإرشاد العملي.',
        industriesCtaEyebrow: 'هل أنت مستعد للمضي قدماً؟',
        industriesCtaTitle: 'هل لديك تحدٍ تقني؟',
        industriesCtaDescription: 'أخبرنا عن عملك واحتياجاتك التقنولوجية الحالية أو التحدي الذي تريد معالجته. يمكننا أن نبدأ بفهم المتطلبات.',

        // Buttons
        buttonStartConversation: 'ابدأ محادثة',
        buttonExploreServices: 'استكشف الخدمات',
        buttonContact: 'تواصل معنا',
        buttonBack: 'رجوع',
        
        // Forms
        contactFormName: 'الاسم',
        contactFormEmail: 'البريد الإلكتروني',
        contactFormMessage: 'الرسالة',
        contactFormSubmit: 'إرسال',
        errorRequiredField: 'هذا الحقل مطلوب',
        errorInvalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
        successFormSubmitted: 'شكراً! تم استقبال رسالتك.',
        
        // Home Hero
        heroEyebrow: 'حلول التكنولوجيا',
        heroTitle: 'بناء ما يأتي بعده لعملك.',
        heroDescription: 'منتجات رقمية عملية وحلول تكنولوجيا حديثة ودعم موثوق للشركات الطموحة المستعدة للمضي قدماً.',
        
        // Home Services Section
        servicesEyebrow: 'ماذا نفعل',
        servicesTitle: 'خدمات التكنولوجيا الشاملة.',
        servicesDescription: 'من موقع الويب الأول إلى الأنظمة الجاهزة للعمل، نساعد الشركات على التخطيط والبناء والإطلاق والتحسين.',
        
        // Services 1-7
        service01Title: 'تطوير مواقع الويب',
        service01Description: 'مواقع ويب احترافية وسريعة الاستجابة تبني الثقة وتولد الاستفسارات.',
        service02Title: 'تطوير تطبيقات الويب',
        service02Description: 'بوابات وأسطح تحكم وأسواق ومنصات عمل مخصصة مصممة حول سير العمل الخاص بك.',
        service03Title: 'تطوير تطبيقات الهاتف المحمول',
        service03Description: 'تطبيقات Android و iOS توفر تجربة هاتف محمول أفضل للعملاء والفريق.',
        service04Title: 'حلول السحابة',
        service04Description: 'أدوات سحابة آمنة وترحيلات وأنظمة تعاون تتسع مع عملك.',
        service05Title: 'الدعم الإداري لتكنولوجيا المعلومات',
        service05Description: 'دعم عملي للمستخدمين والأجهزة والشبكات والأنظمة والعمليات اليومية.',
        service06Title: 'الأمن السيبراني',
        service06Description: 'مراجعات الأمن والحماية وتخطيط النسخ الاحتياطي والوعي لعمل أكثر أماناً.',
        service07Title: 'الذكاء الاصطناعي والأتمتة',
        service07Description: 'الأتمتة الذكية التي تقلل العمل المتكرر وتساعد الفريق على اتخاذ قرارات أسرع.',
        
        // Home Roadmap Section
        roadmapEyebrow: 'خارطة الطريق الخاصة بنا',
        roadmapTitle: 'بناء المستقبل، خطوة تلو الأخرى.',
        roadmapIntro: 'رحلة مركزة من وضع أساسنا إلى بناء منتجات رقمية قابلة للتوسع والتوسع دولياً.',
        roadmapStage01Title: 'الأساس',
        roadmapStage01Description: 'إنشاء عمليات Zendiotech في الإمارات وإطلاق خدماتنا الأساسية والمبنية على أساس قوي للنمو طويل الأجل.',
        roadmapStage01Status: '2026',
        roadmapStage02Title: 'التوسع',
        roadmapStage02Description: 'توسيع خدماتنا التكنولوجية وتعزيز الشراكات الاستراتيجية وتنمية قاعدة العملاء لدينا.',
        roadmapStage02Status: '2027',
        roadmapStage03Title: 'المنتجات والمنصات',
        roadmapStage03Description: 'تقديم منتجات رقمية ملكية ومنصات البرمجيات كخدمة والأسواق والحلول.',
        roadmapStage03Status: '2028',
        roadmapStage04Title: 'التوسع العالمي',
        roadmapStage04Description: 'توسيع نظامنا التكنولوجي عبر الأسواق الدولية وبناء شراكات عمل أعمق.',
        roadmapStage04Status: '2029+',
        roadmapViewFull: 'عرض خارطة الطريق الكاملة',
        
        // Contact CTA Section
        contactCtaEyebrow: 'هل أنت مستعد للمضي قدماً؟',
        contactCtaTitle: 'دعنا نبني ما يأتي بعده لعملك.',
        contactCtaDescription: 'أخبرنا عن أهدافك وسنساعدك في إيجاد الخطوة التالية الصحيحة.',
        
        // Footer
        footerBrandDescription: 'منتجات رقمية عملية وحلول تكنولوجيا ودعم موثوق لمعايير الشركات المستعدة للمضي قدماً.',
        footerCompanyTitle: 'الشركة',
        footerServicesTitle: 'الخدمات',
        footerContactTitle: 'اتصل بنا',
        footerLocation: 'الإمارات • حلول التكنولوجيا',
        footerTagline: 'مبني للنمو الرقمي العملي.',


        /* =========================================================
   HOW WE WORK — ARABIC
   ========================================================= */

howHeroEyebrow: "منهجية العمل",
howHeroTitle: "تقديم حلول تقنية منظمة دون تعقيد غير ضروري.",
howHeroDescription:
  "نؤمن بأن مشاريع التقنية الجيدة تبدأ بالفهم وليس بالافتراضات. تضع منهجيتنا مساراً واضحاً يبدأ من مشكلة العمل ويمر بالتخطيط والتنفيذ والإطلاق والتحسين المستمر.",

howHeroProcessButton: "استكشف منهجية العمل",

howOverviewEyebrow: "نهجنا",
howOverviewTitle:
  "عملية واضحة تبدأ من المحادثة الأولى وتستمر حتى الدعم المستمر.",
howOverviewDescription:
  "تم تصميم كل مرحلة لتحقيق الوضوح وتقليل التعقيد غير الضروري وربط التقنية بالهدف الفعلي للأعمال.",

howProcessEyebrow: "منهجية العمل",
howProcessTitle: "خمس مراحل. مسار واحد واضح إلى الأمام.",
howProcessDescription:
  "من الاكتشاف إلى التحسين، تضع كل مرحلة الأساس للمرحلة التالية.",

howStepOneTitle: "الاكتشاف",
howStepOneDescription:
  "نفهم الأعمال والأهداف والتحديات والمستخدمين والمتطلبات.",
howStepOnePointOne: "مناقشة أهداف الأعمال.",
howStepOnePointTwo: "تحديد التحديات الحالية.",
howStepOnePointThree: "فهم المستخدمين وسير العمل.",
howStepOnePointFour: "توضيح المتطلبات.",

howStepTwoTitle: "التخطيط",
howStepTwoDescription:
  "نحدد الأولويات والنطاق ونهج التقنية المناسب والمسار العملي للتنفيذ.",
howStepTwoPointOne: "تحديد الأولويات.",
howStepTwoPointTwo: "تنظيم النطاق والمتطلبات.",
howStepTwoPointThree: "تقييم الخيارات التقنية.",
howStepTwoPointFour: "تحديد مسار عملي للتنفيذ.",

howStepThreeTitle: "التنفيذ",
howStepThreeDescription:
  "نصمم ونطور ونربط ونختبر الحل وفقاً للمتطلبات المتفق عليها.",
howStepThreePointOne: "بدء التصميم والتطوير.",
howStepThreePointTwo: "تنفيذ الأنظمة والتكاملات.",
howStepThreePointThree: "مراجعة التقدم.",
howStepThreePointFour: "إجراء الاختبارات طوال عملية التنفيذ.",

howStepFourTitle: "الإطلاق",
howStepFourDescription:
  "نجهز الحل للاستخدام العملي وندعم عملية الانتقال إلى التشغيل.",
howStepFourPointOne: "إكمال الفحوصات النهائية.",
howStepFourPointTwo: "تجهيز الحل للاستخدام.",
howStepFourPointThree: "تنسيق عملية النشر.",
howStepFourPointFour: "دعم الفرق أثناء مرحلة الانتقال.",

howStepFiveTitle: "التحسين",
howStepFiveDescription:
  "نراجع الحل ونحافظ عليه ونطوره مع تطور الأعمال ومتطلباتها.",
howStepFivePointOne: "مراجعة الأداء والمتطلبات.",
howStepFivePointTwo: "معالجة احتياجات الصيانة.",
howStepFivePointThree: "تحديد أولويات التحسينات.",
howStepFivePointFour: "تطوير التقنية مع تطور الأعمال.",

howCommunicationEyebrow: "تواصل واضح",
howCommunicationTitle: "لا غموض. ولا تعقيد غير ضروري.",
howCommunicationDescription:
  "تم تصميم كل مرحلة للحفاظ على وضوح المشروع، مع مسؤوليات وقرارات وأولويات وتقدم واضح.",

howCommunicationOneTitle: "مسؤوليات واضحة",
howCommunicationOneText:
  "يفهم الجميع ما يجب القيام به ومن المسؤول عن الخطوة التالية.",

howCommunicationTwoTitle: "قرارات عملية",
howCommunicationTwoText:
  "ترتبط الخيارات التقنية بالاحتياج الفعلي للأعمال.",

howCommunicationThreeTitle: "تقدم واضح",
howCommunicationThreeText:
  "يبقى تقدم المشروع والقرارات المهمة مفهومة طوال عملية التنفيذ.",

howCommunicationFourTitle: "تقدم مرحلة تلو الأخرى",
howCommunicationFourText:
  "تضع كل مرحلة الأساس للمرحلة التالية بدلاً من الانتقال إلى الأمام دون وضوح.",

howOutcomeEyebrow: "ما يمكنك توقعه",
howOutcomeTitle:
  "تقديم التقنية بما يتوافق مع نتائج الأعمال.",
howOutcomeDescription:
  "الهدف ليس مجرد تقديم التقنية، بل إنشاء حل منطقي للأعمال ويمكن استخدامه بفعالية وتطويره مع تغير المتطلبات.",

howOutcomeOneTitle: "فهم المسار",
howOutcomeOneText:
  "يبدأ المشروع ببناء فهم مشترك لهدف العمل والمتطلبات والأولويات.",

howOutcomeTwoTitle: "البناء بهدف واضح",
howOutcomeTwoText:
  "يتم تصميم التقنية وتنفيذها حول المتطلبات بدلاً من إضافة تعقيد غير ضروري.",

howOutcomeThreeTitle: "التحسين مع الوقت",
howOutcomeThreeText:
  "عند الحاجة، يمكن صيانة الحلول ومراجعتها وتحسينها مع تطور الأعمال.",

howCtaEyebrow: "ابدأ محادثة",
howCtaTitle: "لنبنِ ما هو قادم لأعمالك.",
howCtaDescription:
  "سواء كنت تبدأ مشروعاً رقمياً جديداً أو تطور نظاماً قائماً أو تستكشف كيف يمكن للتقنية دعم مرحلة النمو القادمة، نود أن نفهم ما الذي تحاول تحقيقه.",

footerDescription:
  "منتجات رقمية عملية وحلول تقنية ودعم تقني موثوق للشركات المستعدة للتقدم.",

footerCompany: "الشركة",
footerExplore: "استكشف",
footerContact: "تواصل معنا",
footerLocation: "الإمارات • حلول تقنية",
footerRights: "جميع الحقوق محفوظة.",
footerTagline: "مصمم لتحقيق نمو رقمي عملي.",


        /* =========================================================
   ROADMAP — ARABIC
   ========================================================= */

roadmapHeroEyebrow: "خارطة الطريق",
roadmapHeroTitle: "نبني التقنية باتجاه واضح.",
roadmapHeroDescription:
  "يتم تطوير Zendiotech برؤية طويلة المدى تركز على المنتجات الرقمية العملية والخدمات التقنية الموثوقة والحلول التي يمكنها النمو مع الشركات التي ندعمها.",
roadmapHeroButton: "استكشف خارطة الطريق",

roadmapDirectionEyebrow: "الاتجاه",
roadmapDirectionTitle:
  "من أساس قوي إلى منظومة تقنية أوسع.",
roadmapDirectionDescription:
  "لا تتعلق خارطة طريقنا بإضافة المزيد من الميزات أو الخدمات فقط، بل بتأسيس الأساس الصحيح وتطوير منتجات مفيدة وتوسيع قدراتنا والوصول تدريجياً إلى أسواق أوسع.",

roadmapAheadEyebrow: "الطريق إلى الأمام",
roadmapAheadTitle: "أربع مراحل. اتجاه واحد طويل المدى.",

roadmapStageOneLabel: "الأساس",
roadmapStageOneTitle: "بناء الأساس.",
roadmapStageOneDescription:
  "تأسيس البنية التقنية والتشغيلية اللازمة لتقديم حلول رقمية موثوقة.",
roadmapStageOnePointOne: "تأسيس القدرات الرقمية الأساسية.",
roadmapStageOnePointTwo: "تطوير بنية تحتية تقنية موثوقة.",
roadmapStageOnePointThree: "تأسيس العلامة التجارية والهيكل التشغيلي.",
roadmapStageOnePointFour: "فهم متطلبات الأعمال الحقيقية.",
roadmapStageOneStatus: "قيد البناء",

roadmapStageTwoLabel: "المنتجات",
roadmapStageTwoTitle: "تطوير منتجات رقمية عملية.",
roadmapStageTwoDescription:
  "إنشاء منتجات مركزة مصممة وفق المتطلبات الواقعية والاستخدام القابل للقياس.",
roadmapStageTwoPointOne: "بناء منتجات رقمية مركزة.",
roadmapStageTwoPointTwo: "اختبار الأفكار من خلال الاستخدام الفعلي.",
roadmapStageTwoPointThree: "تحسين المنتجات من خلال الملاحظات.",
roadmapStageTwoPointFour: "إنشاء مكونات تقنية قابلة لإعادة الاستخدام.",
roadmapStageTwoStatus: "قيد التطوير",

roadmapStageThreeLabel: "الخدمات",
roadmapStageThreeTitle: "توسيع القدرات التقنية.",
roadmapStageThreeDescription:
  "تطوير مجموعة أوسع من القدرات التقنية التي يمكن للشركات الاعتماد عليها.",
roadmapStageThreePointOne: "الاستشارات التقنية.",
roadmapStageThreePointTwo: "تطوير الويب والبرمجيات.",
roadmapStageThreePointThree: "أنظمة الأعمال والتكاملات.",
roadmapStageThreePointFour: "دعم تقنية المعلومات والتحول الرقمي.",
roadmapStageThreeStatus: "قيد التوسع",

roadmapStageFourLabel: "النمو",
roadmapStageFourTitle: "بناء منظومة تقنية أوسع.",
roadmapStageFourDescription:
  "توسيع القدرات والشراكات والوصول إلى الأسواق مع تطور المؤسسة.",
roadmapStageFourPointOne: "توسيع محفظة الخدمات.",
roadmapStageFourPointTwo: "دخول أسواق إضافية.",
roadmapStageFourPointThree: "تطوير شراكات تقنية.",
roadmapStageFourPointFour:
  "التوسع نحو حضور إقليمي ودولي أوسع.",
roadmapStageFourStatus: "الاتجاه المستقبلي",

roadmapLookingEyebrow: "نظرة إلى المستقبل",
roadmapLookingTitle:
  "تقنية تنمو مع الشركات التي تخدمها.",
roadmapLookingDescription:
  "يتمثل الاتجاه طويل المدى في بناء Zendiotech كشريك تقني موثوق للشركات التي تحتاج إلى حلول رقمية عملية وأنظمة قابلة للتوسع ودعم تقني مستمر.",

roadmapMeaningEyebrow: "ماذا تعني خارطة الطريق",
roadmapMeaningTitle: "يجب أن يتبع النمو القدرة.",
roadmapMeaningDescription:
  "تم تنظيم خارطة طريق Zendiotech بشكل مقصود حول بناء القدرات بدلاً من مجرد إضافة المزيد من المنتجات أو الخدمات. وقد صُممت كل مرحلة لتعزيز الأساس للمرحلة التالية.",

roadmapMeaningOneLabel: "البناء",
roadmapMeaningOneTitle: "تأسيس الأساس.",
roadmapMeaningOneText:
  "بناء القدرات التقنية والتشغيلية اللازمة لتقديم خدمات موثوقة.",

roadmapMeaningTwoLabel: "التعلم",
roadmapMeaningTwoTitle: "فهم ما تحتاجه الشركات.",
roadmapMeaningTwoText:
  "استخدام المتطلبات الحقيقية والملاحظات والخبرة لتحسين اتجاه حلولنا.",

roadmapMeaningThreeLabel: "التوسع",
roadmapMeaningThreeTitle: "توسيع ما يثبت فائدته.",
roadmapMeaningThreeText:
  "توسيع الحلول والقدرات التي تحقق قيمة عملية للشركات.",

roadmapCtaEyebrow: "ابدأ محادثة",
roadmapCtaTitle: "لنبنِ ما هو قادم لأعمالك.",
roadmapCtaDescription:
  "سواء كنت تبدأ مشروعاً رقمياً جديداً أو تطور نظاماً قائماً أو تستكشف كيف يمكن للتقنية دعم مرحلة النمو القادمة، نود أن نفهم ما الذي تحاول تحقيقه.",

        /* =========================================================
   CONTACT — ARABIC
   ========================================================= */

contactHeroEyebrow: "تواصل مع زينديوتك",
contactHeroTitle: "لنبنِ معًا ما هو قادم لعملك.",
contactHeroDescription:
    "سواء كنت تبدأ مشروعًا رقميًا جديدًا، أو تطور نظامًا قائمًا، أو تستكشف كيف يمكن للتكنولوجيا دعم مرحلة النمو القادمة، فلنبدأ بالمشكلة التي تحاول حلها.",
contactHeroButton: "ابدأ محادثة",

contactIntroEyebrow: "ابدأ محادثة",
contactIntroTitle: "أخبرنا بما تحاول بناءه.",
contactIntroDescription:
    "نبدأ بفهم متطلبات العمل، والتحدي الحالي، والنتيجة المطلوبة، والخطوة التالية الأكثر عملية.",

contactEmailLabel: "البريد الإلكتروني",
contactEmailTitle: "استفسارات الأعمال",

contactLocationLabel: "الموقع",
contactLocationTitle: "الإمارات العربية المتحدة",
contactLocationDescription:
    "يتم تطوير زينديوتك مع اعتبار دولة الإمارات العربية المتحدة جزءًا مهمًا من توجهنا للنمو.",

contactTechnologyLabel: "التكنولوجيا",
contactTechnologyTitle: "حلول عملية",
contactTechnologyDescription:
    "المواقع الإلكترونية، والتطبيقات، والحلول السحابية، ودعم تقنية المعلومات، والأمن السيبراني، وأتمتة الذكاء الاصطناعي، والاستشارات التقنية.",

contactNextLabel: "الخطوة التالية",
contactNextTitle: "ابدأ بالمتطلبات",
contactNextDescription:
    "أخبرنا بما تريد تحقيقه، ويمكننا البدء بفهم المتطلبات.",

contactFormEyebrow: "متطلباتك",
contactFormTitle: "أرسل استفسارك.",
contactFormDescription:
    "شاركنا بعض التفاصيل عن عملك وما تحتاج إلى المساعدة فيه.",

contactFullName: "الاسم الكامل",
contactCompany: "العمل / الشركة",
contactEmail: "عنوان البريد الإلكتروني",
contactPhone: "رقم الهاتف",

contactServiceLabel: "في ماذا تحتاج إلى المساعدة؟",
contactServicePlaceholder: "اختر المتطلب",

serviceWebsite: "تطوير المواقع / الويب",
serviceWebApplication: "تطوير تطبيقات الويب",
serviceMobileApp: "تطوير تطبيقات الهاتف",
serviceCloud: "الحلول السحابية",
serviceITSupport: "دعم تقنية المعلومات المُدار",
serviceCybersecurity: "الأمن السيبراني",
serviceAI: "الذكاء الاصطناعي والأتمتة",
serviceConsulting: "الاستشارات التقنية",
serviceOther: "أخرى",

contactMessage: "الرسالة",
contactMessagePlaceholder:
    "أخبرنا عن متطلباتك أو التحدي الذي تواجهه أو مشروعك.",

contactSubmit: "إرسال الاستفسار",

contactFormNote:
    "هذا النموذج حاليًا عبارة عن واجهة أمامية للاستفسارات. سيتم ربط نظام آمن لإرسال البيانات بالواجهة خلال مرحلة التنفيذ المناسبة.",

contactProcessEyebrow: "ماذا يحدث بعد ذلك؟",
contactProcessTitle: "مسار بسيط من المحادثة إلى التنفيذ.",
contactProcessDescription:
    "تبدأ التكنولوجيا الجيدة بالفهم. نهجنا يجعل الخطوة التالية واضحة ومرتبطة بمتطلبات العمل الفعلية.",

contactStep1Label: "01 — الفهم",
contactStep1Title: "فهم المتطلبات.",
contactStep1Description:
    "نبدأ أولًا بفهم عملك ومتطلباتك وتحدياتك وأهدافك وأولوياتك.",

contactStep2Label: "02 — المناقشة",
contactStep2Title: "مناقشة النهج المناسب.",
contactStep2Description:
    "نناقش النهج التقني العملي والنطاق المناسب للمشروع.",

contactStep3Label: "03 — التخطيط",
contactStep3Title: "تحديد الخطوة التالية.",
contactStep3Description:
    "نحدد اتجاهًا واضحًا بناءً على ما يحتاجه العمل فعليًا.",

contactStep4Label: "04 — البناء",
contactStep4Title: "المضي قدمًا بهدف واضح.",
contactStep4Description:
    "عندما يكون ذلك مناسبًا، ننتقل إلى التخطيط المنظم والتطوير والإطلاق والتحسين.",

contactPrincipleEyebrow: "تكنولوجيا عملية",
contactPrincipleTitle:
    "ابدأ بالمشكلة. وابنِ الحل المناسب.",
contactPrincipleDescription:
    "تبدأ التكنولوجيا الجيدة بالفهم. تركز زينديوتك على حلول عملية ومنطقية للأعمال التي تستخدمها.",
contactPrincipleButton: "ابدأ محادثة",

contactFinalEyebrow: "لنتحدث",
contactFinalTitle: "هل أنت مستعد لمناقشة الخطوة التالية؟",
contactFinalDescription:
    "أخبرنا بما تريد تحقيقه، وسنبدأ بفهم المتطلبات.",
contactFinalButton: "ابدأ محادثة",
      },
    };

    let currentLanguage = 'en';

    const getStoredLanguage = () => {
      try {
        return localStorage.getItem(STORAGE_KEY) || 'en';
      } catch (e) {
        console.warn('localStorage not available, using default language');
        return 'en';
      }
    };

    const setLanguage = (lang) => {
      if (!['en', 'ar'].includes(lang)) {
        console.warn(`Invalid language: ${lang}, defaulting to 'en'`);
        lang = 'en';
      }

      currentLanguage = lang;
      root.lang = lang;
      root.dir = lang === 'ar' ? 'rtl' : 'ltr';

      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        console.warn('localStorage not available, language preference not saved');
      }

      apply();
      updateMetadata();
    };

    const toggle = () => {
      const newLang = currentLanguage === 'en' ? 'ar' : 'en';
      setLanguage(newLang);
    };

    const get = (key) => {
      return translations[currentLanguage]?.[key] || translations['en']?.[key] || key;
    };

    const apply = () => {
      if (!nav) return;

      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (key) {
          el.textContent = get(key);
        }
      });

      if (languageToggle) {
        languageToggle.textContent = get('navLanguage');
        languageToggle.setAttribute('aria-label', `Switch to ${currentLanguage === 'en' ? 'Arabic' : 'English'}`);
      }

      // Update nav link text
      const navLinks = nav.querySelectorAll('a');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href) {
          const key = `nav${href.replace(/\.html/i, '').replace(/^index$/i, 'Home').charAt(0).toUpperCase() + href.replace(/\.html/i, '').replace(/^index$/i, 'Home').slice(1)}`;
          if (translations[currentLanguage]?.[key]) {
            link.textContent = get(key);
          }
        }
      });
    };

    const updateMetadata = () => {
      // Page-specific metadata can be updated here
      // This is a foundation structure; individual pages will override as needed
      const pageTitle = document.querySelector('title');
      const pageDescription = document.querySelector('meta[name="description"]');

      // Store original English metadata in data attributes if not already set
      if (pageTitle && !pageTitle.dataset.enTitle) {
        pageTitle.dataset.enTitle = pageTitle.textContent;
      }

      // Here pages would have translated metadata
      // For foundation, we keep existing metadata
    };

    const init = () => {
      currentLanguage = getStoredLanguage();
      root.lang = currentLanguage;
      root.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
      apply();

      if (languageToggle) {
        languageToggle.addEventListener('click', toggle);
      }
    };

    return {
      init,
      toggle,
      get,
      apply,
      setLanguage,
      getCurrentLanguage: () => currentLanguage,
    };
  })();

  /* ===================================================
     NAVIGATION MODULE
     =================================================== */

  const NavigationModule = (() => {
    let isMenuOpen = false;

    const getCurrentPageFile = () => {
      return window.location.pathname.split('/').pop() || 'index.html';
    };

    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
      if (menuToggle) {
        menuToggle.classList.toggle('active', isMenuOpen);
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
      }
      if (nav) {
        nav.classList.toggle('active', isMenuOpen);
      }
      body.classList.toggle('menu-open', isMenuOpen);
    };

    const closeMenu = () => {
      if (isMenuOpen) {
        isMenuOpen = false;
        if (menuToggle) {
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
        if (nav) {
          nav.classList.remove('active');
        }
        body.classList.remove('menu-open');
      }
    };

    const setActivePage = () => {
      if (!nav) return;

      const currentFile = getCurrentPageFile();
      const links = nav.querySelectorAll('a');

      links.forEach((link) => {
        const href = link.getAttribute('href');
        const linkFile = href?.split('/').pop() || 'index.html';

        if (linkFile === currentFile) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        closeMenu();
        if (menuToggle) {
          menuToggle.focus();
        }
      }
    };

    const init = () => {
      if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
      }

      if (nav) {
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach((link) => {
          link.addEventListener('click', closeMenu);
        });
      }

      document.addEventListener('keydown', handleEscape);
      setActivePage();
    };

    return {
      init,
      closeMenu,
      toggleMenu,
    };
  })();

  /* ===================================================
     SCROLL MODULE
     =================================================== */

  const ScrollModule = (() => {
    let scrollPosition = 0;

    const updateHeaderState = () => {
      if (!header) return;

      const isScrolled = window.scrollY > 18;
      header.classList.toggle('scrolled', isScrolled);
    };

    const toggleBackToTop = () => {
      if (!backToTopBtn) return;

      const isVisible = window.scrollY > CONFIG.backToTopShowAt;
      backToTopBtn.classList.toggle('visible', isVisible);
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const saveScrollPosition = () => {
      scrollPosition = window.scrollY;
    };

    const restoreScrollPosition = () => {
      // Delayed restoration to allow page to render
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 100);
    };

    const init = () => {
      window.addEventListener('scroll', updateHeaderState, { passive: true });
      window.addEventListener('scroll', toggleBackToTop, { passive: true });

      if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
      }

      updateHeaderState();
      toggleBackToTop();
    };

    return {
      init,
      saveScrollPosition,
      restoreScrollPosition,
    };
  })();

  /* ===================================================
     ANIMATION MODULE
     =================================================== */

  const AnimationModule = (() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasPointerFine = window.matchMedia('(pointer: fine)').matches;

    const initScrollReveal = () => {
      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        // If reduced motion is preferred or IntersectionObserver not available
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((el) => el.classList.add('show'));
        return;
      }

      const reveals = document.querySelectorAll('.reveal');
      if (reveals.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: CONFIG.scrollRevealThreshold }
      );

      reveals.forEach((el) => observer.observe(el));
    };

    const initCardTilt = () => {
      if (prefersReducedMotion || !hasPointerFine) return;

      const cards = document.querySelectorAll('.card');
      if (cards.length === 0) return;

      cards.forEach((card) => {
        card.addEventListener(
          'pointermove',
          (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-5px)`;
          },
          { passive: true }
        );

        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
        });
      });
    };

    const initOrbitalPointerFollow = () => {
      if (prefersReducedMotion || !hasPointerFine) return;

      const orbitals = document.querySelectorAll('.orbit, .hero-visual .orbit, .orbital');
      if (orbitals.length === 0) return;

      window.addEventListener(
        'pointermove',
        (e) => {
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;

          orbitals.forEach((orb) => {
            orb.style.transform = `translate3d(${x * 9}px, ${y * 7}px, 0) rotateX(${(y * -3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
          });
        },
        { passive: true }
      );
    };

    const init = () => {
      initScrollReveal();
      initCardTilt();
      initOrbitalPointerFollow();
    };

    return {
      init,
    };
  })();

  /* ===================================================
     FORM HANDLING (basic validation)
     =================================================== */

  const FormModule = (() => {
    const init = () => {
      if (!contactForm) return;

      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic HTML5 validation
        if (!contactForm.checkValidity()) {
          contactForm.reportValidity();
          return;
        }

        // Show success message
        const statusElement = document.querySelector('#form-status');
        if (statusElement) {
          statusElement.textContent = LanguageModule.get('successFormSubmitted');
          statusElement.setAttribute('role', 'alert');
        }

        // Reset form
        contactForm.reset();

        // In production, form would submit to backend here
      });
    };

    return {
      init,
    };
  })();

  /* ===================================================
     INITIALIZATION
     =================================================== */

  const init = () => {
    LanguageModule.init();
    NavigationModule.init();
    ScrollModule.init();
    AnimationModule.init();
    FormModule.init();
  };

  // Start when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
