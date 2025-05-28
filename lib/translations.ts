export type Language = 'en' | 'fr';

type Translation = {
  nav: {
    features: string;
    howItWorks: string;
    pricing: string;
    login: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: string;
    titleWords: string[];
    titleEnd: string;
    description: string;
  };
  features: {
    title: string;
    description: string;
    aiWriting: {
      title: string;
      description: string;
    };
    financials: {
      title: string;
      description: string;
    };
    audience: {
      title: string;
      description: string;
    };
    templates: {
      title: string;
      description: string;
    };
    documents: {
      title: string;
      description: string;
    };
    guidance: {
      title: string;
      description: string;
    };
  };
  howItWorks: {
    title: string;
    description: string;
    steps: {
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
    };
  };
  examples: {
    badge: string;
    title: string;
    description: string;
    plans: {
      techFusion: {
        title: string;
        description: string;
        industry: string;
      };
      greenEarth: {
        title: string;
        description: string;
        industry: string;
      };
      urbanStyle: {
        title: string;
        description: string;
        industry: string;
      };
      mindfulSpace: {
        title: string;
        description: string;
        industry: string;
      };
      innoLearn: {
        title: string;
        description: string;
        industry: string;
      };
      smartHome: {
        title: string;
        description: string;
        industry: string;
      };
    };
  };
  pricing: {
    title: string;
    description: string;
    starter: {
      title: string;
      description: string;
      price: string;
      period: string;
      features: string[];
    };
    professional: {
      title: string;
      description: string;
      price: string;
      period: string;
      features: string[];
    };
    lifetime: {
      title: string;
      description: string;
      price: string;
      period: string;
      features: string[];
    };
  };
  generate: {
    title: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
    businessName: {
      label: string;
      placeholder: string;
    };
    industry: {
      label: string;
      placeholder: string;
    };
    description: {
      label: string;
      placeholder: string;
      help: string;
    };
    targetMarket: {
      label: string;
      placeholder: string;
    };
    fundingGoal: {
      label: string;
      placeholder: string;
      help: string;
    };
    timeframe: {
      label: string;
      placeholder: string;
      help: string;
    };
    submit: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      login: 'Log in',
      getStarted: 'Get Started'
    },
    hero: {
      badge: 'AI-Powered Business Plans',
      title: 'Transform your ideas into',
      titleWords: ['professional', 'detailed', 'actionable', 'impressive'],
      titleEnd: 'business plans',
      description: 'Leverage AI to generate comprehensive business plans in minutes, not weeks. From market analysis to financial projections, we\'ve got you covered.'
    },
    features: {
      title: 'Everything you need to create a winning business plan',
      description: 'Our AI-powered platform handles all aspects of business plan creation, from market analysis to financial projections.',
      aiWriting: {
        title: 'AI-Powered Writing',
        description: 'Advanced AI analyzes your inputs to generate professional, coherent business plans tailored to your specific industry and goals.'
      },
      financials: {
        title: 'Financial Projections',
        description: 'Generate realistic financial forecasts including cash flow, profit & loss statements, and break-even analysis based on your business model.'
      },
      audience: {
        title: 'Target Audience Analysis',
        description: 'Identify and analyze your ideal customers with detailed demographic information and market size estimates.'
      },
      templates: {
        title: 'Customizable Templates',
        description: 'Choose from industry-specific templates designed to highlight the unique aspects of your business model and market position.'
      },
      documents: {
        title: 'Investor-Ready Documents',
        description: 'Create professional documents formatted to impress investors, lenders, and partners with all the information they need.'
      },
      guidance: {
        title: 'Step-by-Step Guidance',
        description: 'Our intuitive interface guides you through each section of your business plan, ensuring you provide all essential information.'
      }
    },
    howItWorks: {
      title: 'Create your business plan in three simple steps',
      description: 'Our streamlined process makes business plan creation faster and easier than ever.',
      steps: {
        step1: {
          title: 'Fill in your business details',
          description: 'Answer simple questions about your business concept, target market, and goals. No complex forms or business jargon required.'
        },
        step2: {
          title: 'AI generates your plan',
          description: 'Our advanced AI analyzes your inputs and creates a comprehensive business plan tailored to your specific industry and requirements.'
        },
        step3: {
          title: 'Review and download',
          description: 'Review your generated plan, make any necessary edits, and export it in your preferred format (PDF, Word, or Google Docs).'
        }
      }
    },
    examples: {
      badge: 'Example Plans',
      title: 'Browse example business plans',
      description: 'Take inspiration from these sample plans generated by our AI.',
      plans: {
        techFusion: {
          title: 'TechFusion Startup',
          description: 'A SaaS platform providing AI-powered analytics for e-commerce businesses.',
          industry: 'Technology'
        },
        greenEarth: {
          title: 'Green Earth Organics',
          description: 'Sustainable organic food delivery service with carbon-neutral operations.',
          industry: 'Food'
        },
        urbanStyle: {
          title: 'UrbanStyle Boutique',
          description: 'Curated fashion boutique focusing on sustainable and ethically produced clothing.',
          industry: 'Retail'
        },
        mindfulSpace: {
          title: 'MindfulSpace Therapy',
          description: 'Virtual mental health clinic providing accessible therapy and wellness services.',
          industry: 'Healthcare'
        },
        innoLearn: {
          title: 'InnoLearn Academy',
          description: 'Online learning platform specializing in tech skills and career development.',
          industry: 'Education'
        },
        smartHome: {
          title: 'SmartHome Solutions',
          description: 'IoT integration services for residential properties focusing on energy efficiency.',
          industry: 'Technology'
        }
      }
    },
    pricing: {
      title: 'Simple, transparent pricing',
      description: 'Choose the plan that fits your business needs.',
      starter: {
        title: 'Starter',
        description: 'Perfect for new entrepreneurs',
        price: '$9',
        period: '/ month',
        features: [
          '1 Business Plan',
          'Basic financial projections',
          'PDF & Word exports',
          '14-day revision period'
        ]
      },
      professional: {
        title: 'Professional',
        description: 'For growing businesses',
        price: '$15',
        period: '/ month',
        features: [
          '3 Business Plans',
          'Advanced financial modeling',
          'All export formats',
          '30-day revision period',
          'Industry-specific insights'
        ]
      },
      lifetime: {
        title: 'Lifetime',
        description: 'One-time payment',
        price: '$99',
        period: 'one-time',
        features: [
          'Unlimited Business Plans',
          'Custom financial scenarios',
          'Investor-ready presentations',
          'Unlimited revisions',
          'Priority support',
          'API access'
        ]
      }
    },
    generate: {
      title: 'Generate Your Business Plan',
      description: 'Fill in the details below and our AI will create a comprehensive business plan tailored to your needs.'
    },
    form: {
      title: 'Business Plan Generator',
      description: 'Fill in the details below to generate your professional business plan.',
      businessName: {
        label: 'Business Name',
        placeholder: 'Enter your business name'
      },
      industry: {
        label: 'Industry',
        placeholder: 'Select an industry'
      },
      description: {
        label: 'Business Description',
        placeholder: 'Describe your business concept, products or services, and what makes it unique...',
        help: 'Be specific about your products/services and your unique value proposition.'
      },
      targetMarket: {
        label: 'Target Market',
        placeholder: 'Describe your ideal customers, market size, and demographics...'
      },
      fundingGoal: {
        label: 'Funding Goal (Optional)',
        placeholder: 'e.g., $500,000',
        help: 'Leave blank if not seeking funding'
      },
      timeframe: {
        label: 'Business Timeframe (Optional)',
        placeholder: 'Select timeframe',
        help: 'How far into the future should we plan?'
      },
      submit: 'Generate Business Plan'
    }
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      howItWorks: 'Comment ça marche',
      pricing: 'Tarifs',
      login: 'Connexion',
      getStarted: 'Commencer'
    },
    hero: {
      badge: 'Plans d\'affaires propulsés par l\'IA',
      title: 'Transformez vos idées en',
      titleWords: ['professionnels', 'détaillés', 'réalisables', 'impressionnants'],
      titleEnd: 'plans d\'affaires',
      description: 'Utilisez l\'IA pour générer des plans d\'affaires complets en quelques minutes, pas en semaines. De l\'analyse de marché aux projections financières, nous vous accompagnons.'
    },
    features: {
      title: 'Tout ce dont vous avez besoin pour créer un plan d\'affaires gagnant',
      description: 'Notre plateforme alimentée par l\'IA gère tous les aspects de la création de plans d\'affaires, de l\'analyse de marché aux projections financières.',
      aiWriting: {
        title: 'Rédaction par IA',
        description: 'L\'IA avancée analyse vos données pour générer des plans d\'affaires professionnels et cohérents, adaptés à votre secteur et à vos objectifs.'
      },
      financials: {
        title: 'Projections Financières',
        description: 'Générez des prévisions financières réalistes incluant les flux de trésorerie, les comptes de résultat et l\'analyse du seuil de rentabilité.'
      },
      audience: {
        title: 'Analyse du Public Cible',
        description: 'Identifiez et analysez vos clients idéaux avec des informations démographiques détaillées et des estimations de la taille du marché.'
      },
      templates: {
        title: 'Modèles Personnalisables',
        description: 'Choisissez parmi des modèles spécifiques à votre industrie conçus pour mettre en valeur les aspects uniques de votre modèle d\'affaires.'
      },
      documents: {
        title: 'Documents pour Investisseurs',
        description: 'Créez des documents professionnels formatés pour impressionner les investisseurs, les prêteurs et les partenaires.'
      },
      guidance: {
        title: 'Guide Étape par Étape',
        description: 'Notre interface intuitive vous guide à travers chaque section de votre plan d\'affaires, garantissant que vous fournissez toutes les informations essentielles.'
      }
    },
    howItWorks: {
      title: 'Créez votre plan d\'affaires en trois étapes simples',
      description: 'Notre processus simplifié rend la création de plans d\'affaires plus rapide et plus facile que jamais.',
      steps: {
        step1: {
          title: 'Remplissez vos détails',
          description: 'Répondez à des questions simples sur votre concept d\'entreprise, votre marché cible et vos objectifs. Pas de formulaires complexes.'
        },
        step2: {
          title: 'L\'IA génère votre plan',
          description: 'Notre IA avancée analyse vos données et crée un plan d\'affaires complet adapté à votre secteur et à vos besoins spécifiques.'
        },
        step3: {
          title: 'Révisez et téléchargez',
          description: 'Examinez votre plan généré, apportez les modifications nécessaires et exportez-le dans le format de votre choix (PDF, Word ou Google Docs).'
        }
      }
    },
    examples: {
      badge: 'Plans Exemples',
      title: 'Parcourez nos exemples de plans d\'affaires',
      description: 'Inspirez-vous de ces plans générés par notre IA.',
      plans: {
        techFusion: {
          title: 'TechFusion Startup',
          description: 'Une plateforme SaaS fournissant des analyses alimentées par l\'IA pour les entreprises e-commerce.',
          industry: 'Technologie'
        },
        greenEarth: {
          title: 'Green Earth Bio',
          description: 'Service de livraison d\'aliments biologiques avec des opérations neutres en carbone.',
          industry: 'Alimentation'
        },
        urbanStyle: {
          title: 'Boutique UrbanStyle',
          description: 'Boutique de mode proposant des vêtements durables et éthiques.',
          industry: 'Commerce'
        },
        mindfulSpace: {
          title: 'MindfulSpace Thérapie',
          description: 'Clinique de santé mentale virtuelle offrant des services de thérapie et de bien-être accessibles.',
          industry: 'Santé'
        },
        innoLearn: {
          title: 'Académie InnoLearn',
          description: 'Plateforme d\'apprentissage en ligne spécialisée dans les compétences tech et le développement de carrière.',
          industry: 'Éducation'
        },
        smartHome: {
          title: 'Solutions SmartHome',
          description: 'Services d\'intégration IoT pour propriétés résidentielles axés sur l\'efficacité énergétique.',
          industry: 'Technologie'
        }
      }
    },
    pricing: {
      title: 'Tarification simple et transparente',
      description: 'Choisissez le forfait qui correspond à vos besoins.',
      starter: {
        title: 'Débutant',
        description: 'Parfait pour les nouveaux entrepreneurs',
        price: '9€',
        period: '/ mois',
        features: [
          '1 Plan d\'affaires',
          'Projections financières de base',
          'Exports PDF & Word',
          'Période de révision de 14 jours'
        ]
      },
      professional: {
        title: 'Professionnel',
        description: 'Pour les entreprises en croissance',
        price: '15€',
        period: '/ mois',
        features: [
          '3 Plans d\'affaires',
          'Modélisation financière avancée',
          'Tous les formats d\'export',
          'Période de révision de 30 jours',
          'Analyses sectorielles'
        ]
      },
      lifetime: {
        title: 'À vie',
        description: 'Paiement unique',
        price: '99€',
        period: 'unique',
        features: [
          'Plans d\'affaires illimités',
          'Scénarios financiers personnalisés',
          'Présentations pour investisseurs',
          'Révisions illimitées',
          'Support prioritaire',
          'Accès API'
        ]
      }
    },
    generate: {
      title: 'Générer Votre Plan d\'Affaires',
      description: 'Remplissez les détails ci-dessous et notre IA créera un plan d\'affaires complet adapté à vos besoins.'
    },
    form: {
      title: 'Générateur de Plan d\'Affaires',
      description: 'Remplissez les détails ci-dessous pour générer votre plan d\'affaires professionnel.',
      businessName: {
        label: 'Nom de l\'entreprise',
        placeholder: 'Entrez le nom de votre entreprise'
      },
      industry: {
        label: 'Secteur d\'activité',
        placeholder: 'Sélectionnez un secteur'
      },
      description: {
        label: 'Description de l\'entreprise',
        placeholder: 'Décrivez votre concept d\'entreprise, vos produits ou services, et ce qui les rend uniques...',
        help: 'Soyez précis sur vos produits/services et votre proposition de valeur unique.'
      },
      targetMarket: {
        label: 'Marché Cible',
        placeholder: 'Décrivez vos clients idéaux, la taille du marché et les données démographiques...'
      },
      fundingGoal: {
        label: 'Objectif de Financement (Optionnel)',
        placeholder: 'ex: 500 000€',
        help: 'Laissez vide si vous ne cherchez pas de financement'
      },
      timeframe: {
        label: 'Horizon Temporel (Optionnel)',
        placeholder: 'Sélectionnez une durée',
        help: 'Sur quelle période souhaitez-vous planifier?'
      },
      submit: 'Générer le Plan d\'Affaires'
    }
  }
};