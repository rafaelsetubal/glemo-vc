(function (window, document) {
  'use strict';
  if (!window.GlemoI18n) return;

  var dictionaries = {
    pt: {
      'Search documentation, sections...': 'Buscar documentação e seções...',
      'Marketplace': 'Marketplace',
      'Environments': 'Ambientes',
      'Data Room': 'Data Room',
      'Institutional Data Room': 'Data Room Institucional',
      'Institutional Documentation': 'Documentação Institucional',
      'Areas': 'Áreas',
      'Quick Access': 'Acesso Rápido',
      'Overview': 'Visão Geral',
      'Diligence': 'Diligência',
      'Financial & Execution': 'Financeiro e Execução',
      'Platform & Architecture': 'Plataforma e Arquitetura',
      'Investor Deck (PDF)': 'Deck do Investidor (PDF)',
      'Investment Memo': 'Memorando de Investimento',
      'Legal Compliance': 'Jurídico e Compliance',
      'Operating Model (XLSX)': 'Modelo Operacional (XLSX)',
      'Institutional Documentation & Evidence': 'Documentação e Evidências Institucionais',
      'Featured Documents': 'Documentos em Destaque',
      'View all documents →': 'Ver todos os documentos →',
      'Platform Map →': 'Mapa da Plataforma →',
      'Investor Deck →': 'Deck do Investidor →',
      'Institutional Checklist →': 'Checklist Institucional →',
      'REAL ASSETS': 'ATIVOS REAIS',
      'QUALIFIED DEMAND': 'DEMANDA QUALIFICADA',
      'GLOBAL ACCESS': 'ACESSO GLOBAL',
      'Back to Data Room': 'Voltar ao Data Room',
      'Viewing as:': 'Visualizando como:',
      'Public Marketplace': 'Marketplace Público',
      'Switch Persona • Environment': 'Trocar Perfil • Ambiente',
      'Product prototype': 'Protótipo do produto',
      'Previous screen': 'Tela anterior',
      'Next screen': 'Próxima tela',
      'Open sitemap': 'Abrir sitemap',
      'Select Language': 'Selecionar idioma',
      'Language': 'Idioma',
      'CONFIDENTIAL - DATA ROOM': 'CONFIDENCIAL - DATA ROOM',
      'Asset-class-neutral liquidity and distribution infrastructure for tokenized real-world assets.': 'Infraestrutura neutra de liquidez e distribuição para ativos tokenizados do mundo real.',
      'Asset-class-neutral liquidity and distribution rail for tokenized real-world assets.': 'Infraestrutura neutra de liquidez e distribuição para ativos tokenizados do mundo real.',
      'LOGIN / FUND NAME': 'LOGIN / NOME DO FUNDO',
      'PASSWORD': 'SENHA',
      'Enter Data Room': 'Entrar no Data Room',
      'Enter fund name or login': 'Digite o nome do fundo ou login',
      'Enter access password': 'Digite a senha de acesso',
      'Incorrect password. Please try again.': 'Senha incorreta. Tente novamente.',
      'Incorrect password. Please enter the pre-seed access password.': 'Senha incorreta. Digite a senha de acesso pre-seed.',
      'Authorized investor access only.': 'Acesso exclusivo para investidores autorizados.',
      'Authorized investor access only. Materials are confidential and may not be forwarded, copied or redistributed without written permission from GlemO.': 'Acesso exclusivo para investidores autorizados. Os materiais são confidenciais e não podem ser encaminhados, copiados ou redistribuídos sem autorização por escrito da GlemO.',
      'Platform Sitemap': 'Sitemap da Plataforma',
      'DFD Requirements': 'Requisitos DFD',
      'Product Requirements / PRD': 'Requisitos do Produto / PRD',
      'MVP1 Scope': 'Escopo MVP1',
      'Readiness Register': 'Registro de Prontidão',
      'Retail Client Portal': 'Portal do Cliente de Varejo',
      'Institutional Portal': 'Portal Institucional',
      'Seller Admin': 'Admin do Vendedor',
      'Billing / Revenue Ops': 'Faturamento / Operações de Receita',
      'AI Operations': 'Operações de IA',
      'Compliance Cases': 'Casos de Compliance',
      'Asset Fact Sheet': 'Ficha Técnica do Ativo',
      'Distribution SaaS': 'SaaS de Distribuição',
      'Seller Plans': 'Planos do Vendedor'
      ,'Product Requirements Specification': 'Especificação de Requisitos do Produto'
      ,'PLATFORM REQUIREMENTS': 'REQUISITOS DA PLATAFORMA'
      ,'Available Languages': 'Idiomas Disponíveis'
      ,'Developer Use': 'Uso pelo Desenvolvedor'
      ,'Open PDF': 'Abrir PDF'
      ,'Download DOCX': 'Baixar DOCX'
      ,'Open Marketplace →': 'Abrir Marketplace →'
      ,'3 documents': '3 documentos'
      ,'24 documents': '24 documentos'
      ,'4 models & tools': '4 modelos e ferramentas'
      ,'9 blueprints': '9 documentos técnicos'
      ,'Interactive': 'Interativo'
      ,'Sep 2026': 'Set 2026'
      ,'On this page': 'Nesta página'
      ,'Related': 'Relacionados'
      ,'Diligence Area': 'Área de Diligência'
      ,'17 Slides': '17 Slides'
      ,'Open Investor Deck': 'Abrir Deck do Investidor'
      ,'Need Help?': 'Precisa de ajuda?'
      ,'Contact the GlemO team for additional information or access.': 'Entre em contato com a equipe GlemO para obter informações adicionais ou acesso.'
      ,'Request Diligence Access': 'Solicitar Acesso de Diligência'
      ,'Visual Calibration & Component Laboratory': 'Calibração Visual e Laboratório de Componentes'
      ,'GlemO Environment Architecture & Global Shell': 'Arquitetura de Ambientes e Estrutura Global da GlemO'
      ,'GlemO Global Product Architecture': 'Arquitetura Global do Produto GlemO'
      ,'GlemO Environment Experience Matrix': 'Matriz de Experiência dos Ambientes GlemO'
      ,'V4.7 product-readiness view: commercial front, role-based journeys, manual MVP1 controls and future expansion layers are separated on purpose.': 'Visão de prontidão do produto V4.7: front comercial, jornadas por função, controles manuais do MVP1 e camadas futuras de expansão são separados de propósito.'
      ,'The V4.7 prototype makes the product easier to understand: public discovery brings demand, private buyer rooms convert that demand, seller/originator rooms publish and monitor supply, and admin/partner operations keep the system credible for banks.': 'O protótipo V4.7 facilita a compreensão do produto: a descoberta pública gera demanda, as áreas privadas de compradores convertem essa demanda, as áreas de vendedores e originadores publicam e monitoram a oferta, e as operações de administração e parceiros mantêm o sistema confiável para os bancos.'
      ,'Reference Return': 'Retorno de Referência'
      ,'Primary Metric (Reference Return)': 'Métrica Principal (Retorno de Referência)'
      ,'41 Screens': '41 Telas'
      ,'Diligence Prototype': 'Protótipo para Diligência'
      ,'Open Gaps Tracked': 'Lacunas Abertas Monitoradas'
      ,'Requirements Reviewed': 'Requisitos Revisados'
      ,'Browse the tokenized RWA catalogue, reference scenarios, interactive fact sheets and investor risk education.': 'Explore o catálogo de RWA tokenizados, cenários de referência, fichas técnicas interativas e educação de risco para investidores.'
      ,'Asset-class-neutral liquidity and distribution platform for tokenized real-world assets. Discover opportunities, evaluate credit underwriting and participate in primary allocations.': 'Plataforma neutra de liquidez e distribuição para ativos tokenizados do mundo real. Descubra oportunidades, avalie a análise de crédito e participe de alocações primárias.'
      ,'Public Marketplace Environment': 'Ambiente de Marketplace Público'
      ,'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility only when ready.': 'Descubra ativos tokenizados do mundo real, compare parâmetros financeiros, examine a diligência do validador e inicie a habilitação somente quando estiver pronto.'
      ,'FEATURED TOKENIZED REAL ESTATE CREDIT': 'CRÉDITO IMOBILIÁRIO TOKENIZADO EM DESTAQUE'
      ,'Discover tokenized real-world assets with clear eligibility, evidence and official distribution routes.': 'Descubra ativos tokenizados do mundo real com elegibilidade clara, evidências e canais oficiais de distribuição.'
      ,'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents and liquidity rules before they act.': 'A GlemO é neutra em classe de ativos: o crédito imobiliário é o primeiro mercado de prova e, depois, o rail se expande para ativos institucionais aprovados. Os investidores veem economia, elegibilidade, documentos e regras de liquidez antes de agir.'
      ,'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility.': 'Descubra ativos tokenizados do mundo real, compare parâmetros financeiros, examine a diligência do validador e inicie a habilitação.'
      ,'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents, risk controls and liquidity rules before they commit capital.': 'A GlemO é neutra em classe de ativos: o crédito imobiliário é o primeiro mercado de prova e, depois, o rail se expande para ativos institucionais aprovados. Antes de alocar capital, os investidores veem economia, elegibilidade, documentos, controles de risco e regras de liquidez.'
      ,'Check Eligibility': 'Verificar Elegibilidade'
      ,'Retail Login': 'Login do Varejo'
      ,'Open Asset Sheet': 'Abrir Ficha do Ativo'
      ,'Distribution Network': 'Rede de Distribuição'
      ,'See Featured Offering': 'Ver Oferta em Destaque'
      ,'Validated offerings': 'Ofertas validadas'
      ,'Asset families': 'Famílias de ativos'
      ,'Average liquidity coverage': 'Cobertura média de liquidez'
      ,'Investor Conversion Path': 'Jornada de Conversão do Investidor'
      ,'Product Readiness V4.7': 'Prontidão do Produto V4.7'
      ,'Public Marketplace': 'Marketplace Público'
      ,'Asset Sheet': 'Ficha do Ativo'
      ,'Browse curated offers by return profile, liquidity, asset class and minimum ticket.': 'Explore ofertas selecionadas por perfil de retorno, liquidez, classe de ativo e aporte mínimo.'
      ,'Review originator, validator status, documents, risk and token reference rules.': 'Revise originador, status do validador, documentos, risco e regras de referência do token.'
      ,'Connect wallet, complete KYC and confirm investor profile.': 'Conecte a wallet, conclua o KYC e confirme o perfil de investidor.'
      ,'Invest only in opportunities allowed by jurisdiction, profile and offering rules.': 'Invista apenas em oportunidades permitidas pela jurisdição, perfil e regras da oferta.'
    },
    es: {
      'Search documentation, sections...': 'Buscar documentación y secciones...',
      'Environments': 'Entornos', 'Data Room': 'Data Room', 'Institutional Data Room': 'Data Room Institucional',
      'Institutional Documentation': 'Documentación Institucional', 'Areas': 'Áreas', 'Quick Access': 'Acceso Rápido',
      'Overview': 'Resumen', 'Diligence': 'Diligencia', 'Financial & Execution': 'Finanzas y Ejecución',
      'Platform & Architecture': 'Plataforma y Arquitectura', 'Investor Deck (PDF)': 'Deck del Inversor (PDF)',
      'Investment Memo': 'Memorando de Inversión', 'Legal Compliance': 'Legal y Cumplimiento',
      'Operating Model (XLSX)': 'Modelo Operativo (XLSX)',
      'Institutional Documentation & Evidence': 'Documentación y Evidencia Institucional',
      'Featured Documents': 'Documentos Destacados', 'View all documents →': 'Ver todos los documentos →',
      'Platform Map →': 'Mapa de la Plataforma →', 'Investor Deck →': 'Deck del Inversor →',
      'Institutional Checklist →': 'Checklist Institucional →', 'REAL ASSETS': 'ACTIVOS REALES',
      'QUALIFIED DEMAND': 'DEMANDA CALIFICADA', 'GLOBAL ACCESS': 'ACCESO GLOBAL',
      'Back to Data Room': 'Volver al Data Room', 'Viewing as:': 'Vista como:',
      'Public Marketplace': 'Marketplace Público', 'Switch Persona • Environment': 'Cambiar Perfil • Entorno',
      'Product prototype': 'Prototipo del producto', 'Previous screen': 'Pantalla anterior',
      'Next screen': 'Pantalla siguiente', 'Open sitemap': 'Abrir sitemap', 'Select Language': 'Seleccionar idioma',
      'Language': 'Idioma', 'CONFIDENTIAL - DATA ROOM': 'CONFIDENCIAL - DATA ROOM',
      'Asset-class-neutral liquidity and distribution infrastructure for tokenized real-world assets.': 'Infraestructura neutral de liquidez y distribución para activos tokenizados del mundo real.',
      'Asset-class-neutral liquidity and distribution rail for tokenized real-world assets.': 'Infraestructura neutral de liquidez y distribución para activos tokenizados del mundo real.',
      'LOGIN / FUND NAME': 'LOGIN / NOMBRE DEL FONDO', 'PASSWORD': 'CONTRASEÑA',
      'Enter Data Room': 'Entrar al Data Room', 'Enter fund name or login': 'Ingrese el fondo o login',
      'Enter access password': 'Ingrese la contraseña', 'Incorrect password. Please try again.': 'Contraseña incorrecta. Inténtelo de nuevo.',
      'Incorrect password. Please enter the pre-seed access password.': 'Contraseña incorrecta. Ingrese la contraseña de acceso pre-seed.',
      'Journey Map': 'Mapa de Recorridos',
      'DFD and Product Requirements': 'DFD y Requisitos del Producto',
      'MVP1 Feasible Scope': 'Alcance Viable del MVP1',
      'Tokenized Asset Technical Sheet': 'Ficha Técnica del Activo Tokenizado',
      'Distribution SaaS Console': 'Consola SaaS de Distribución',
      'Retail Client Portal': 'Portal del Cliente Minorista',
      'Institutional Investor Portal': 'Portal del Inversor Institucional',
      'Investor Education and Risk Understanding': 'Educación del Inversor y Comprensión del Riesgo',
      'Actor Environments': 'Entornos por Actor',
      'Actor Dashboards': 'Paneles por Actor',
      'Transaction Declaration Layer': 'Capa de Declaración de Transacciones',
      'Seller Organization Admin': 'Administración de la Organización Vendedora',
      'Distribution Partner Portal': 'Portal del Socio de Distribución',
      'Seller Plans for Tokenized Asset Publishers': 'Planes para Publicadores de Activos Tokenizados',
      'Compliance Case Management': 'Gestión de Casos de Cumplimiento',
      'Transaction Clearance Queue': 'Cola de Aprobación de Transacciones',
      'Billing and Revenue Operations': 'Operaciones de Facturación e Ingresos',
      'AI Operations Console': 'Consola de Operaciones de IA',
      'Enterprise Concierge Desk': 'Mesa de Concierge Enterprise',
      'Custody, Payment and Rail Partner Portal': 'Portal de Socios de Custodia, Pagos y Rails',
      'Ecosystem Builder and dApp Portal': 'Portal de Builders y dApps del Ecosistema',
      'Operating Readiness Register': 'Registro de Preparación Operativa',
      'Documentation and DFD Downloads': 'Descargas de Documentación y DFD',
      'Visual Calibration & Component Laboratory': 'Calibración Visual y Laboratorio de Componentes',
      'GlemO Environment Architecture & Global Shell': 'Arquitectura de Entornos y Shell Global de GlemO',
      'GlemO Global Product Architecture': 'Arquitectura Global del Producto GlemO',
      'GlemO Environment Experience Matrix': 'Matriz de Experiencia por Entorno de GlemO',
      'Product Requirements Specification': 'Especificación de Requisitos del Producto',
      'PLATFORM REQUIREMENTS': 'REQUISITOS DE LA PLATAFORMA',
      'Available Languages': 'Idiomas Disponibles',
      'Developer Use': 'Uso por Desarrolladores',
      'Open PDF': 'Abrir PDF',
      'Download DOCX': 'Descargar DOCX',
      'Open Marketplace →': 'Abrir Marketplace →',
      '3 documents': '3 documentos', '24 documents': '24 documentos',
      '4 models & tools': '4 modelos y herramientas', '9 blueprints': '9 documentos técnicos',
      'Interactive': 'Interactivo', 'Sep 2026': 'Sep 2026',
      'On this page': 'En esta página', 'Related': 'Relacionados',
      'Diligence Area': 'Área de Diligencia', '17 Slides': '17 Diapositivas',
      'Open Investor Deck': 'Abrir Deck del Inversor', 'Need Help?': '¿Necesita ayuda?',
      'Contact the GlemO team for additional information or access.': 'Contacte al equipo de GlemO para obtener información adicional o acceso.',
      'Request Diligence Access': 'Solicitar Acceso de Diligencia',
      'V4.7 product-readiness view: commercial front, role-based journeys, manual MVP1 controls and future expansion layers are separated on purpose.': 'Vista de preparación del producto V4.7: el frente comercial, los recorridos por rol, los controles manuales del MVP1 y las capas futuras de expansión están separados intencionalmente.',
      'The V4.7 prototype makes the product easier to understand: public discovery brings demand, private buyer rooms convert that demand, seller/originator rooms publish and monitor supply, and admin/partner operations keep the system credible for banks.': 'El prototipo V4.7 facilita la comprensión del producto: el descubrimiento público genera demanda, las áreas privadas de compradores convierten esa demanda, las áreas de vendedores y originadores publican y supervisan la oferta, y las operaciones de administración y socios mantienen la credibilidad del sistema para los bancos.',
      'Reference Return': 'Retorno de Referencia', 'Primary Metric (Reference Return)': 'Métrica Principal (Retorno de Referencia)',
      '41 Screens': '41 Pantallas', 'Diligence Prototype': 'Prototipo para Diligencia',
      'Open Gaps Tracked': 'Brechas Abiertas Controladas', 'Requirements Reviewed': 'Requisitos Revisados',
      'Browse the tokenized RWA catalogue, reference scenarios, interactive fact sheets and investor risk education.': 'Explore el catálogo de RWA tokenizados, escenarios de referencia, fichas interactivas y educación de riesgo para inversores.',
      'Asset-class-neutral liquidity and distribution platform for tokenized real-world assets. Discover opportunities, evaluate credit underwriting and participate in primary allocations.': 'Plataforma neutral de liquidez y distribución para activos tokenizados del mundo real. Descubra oportunidades, evalúe el análisis de crédito y participe en asignaciones primarias.',
      'Public Marketplace Environment': 'Entorno de Marketplace Público',
      'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility only when ready.': 'Descubra activos tokenizados del mundo real, compare parámetros financieros, revise la diligencia del validador e inicie la habilitación solo cuando esté listo.',
      'FEATURED TOKENIZED REAL ESTATE CREDIT': 'CRÉDITO INMOBILIARIO TOKENIZADO DESTACADO',
      'Discover tokenized real-world assets with clear eligibility, evidence and official distribution routes.': 'Descubra activos tokenizados del mundo real con elegibilidad clara, evidencia y canales oficiales de distribución.',
      'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents and liquidity rules before they act.': 'GlemO es neutral respecto a las clases de activos: el crédito inmobiliario es el primer mercado de prueba y luego el rail se expande hacia activos institucionales aprobados. Los inversores ven la economía, la elegibilidad, los documentos y las reglas de liquidez antes de actuar.',
      'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility.': 'Descubra activos tokenizados del mundo real, compare parámetros financieros, revise la diligencia del validador e inicie la habilitación.',
      'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents, risk controls and liquidity rules before they commit capital.': 'GlemO es neutral respecto a las clases de activos: el crédito inmobiliario es el primer mercado de prueba y luego el rail se expande hacia activos institucionales aprobados. Antes de asignar capital, los inversores ven la economía, la elegibilidad, los documentos, los controles de riesgo y las reglas de liquidez.',
      'Check Eligibility': 'Verificar Elegibilidad', 'Retail Login': 'Acceso Minorista',
      'Open Asset Sheet': 'Abrir Ficha del Activo', 'Distribution Network': 'Red de Distribución',
      'See Featured Offering': 'Ver Oferta Destacada', 'Validated offerings': 'Ofertas validadas',
      'Asset families': 'Familias de activos', 'Average liquidity coverage': 'Cobertura media de liquidez',
      'Investor Conversion Path': 'Ruta de Conversión del Inversor',
      'Product Readiness V4.7': 'Preparación del Producto V4.7', 'Public Marketplace': 'Marketplace Público', 'Asset Sheet': 'Ficha del Activo',
      'Browse curated offers by return profile, liquidity, asset class and minimum ticket.': 'Explore ofertas seleccionadas por perfil de retorno, liquidez, clase de activo y aporte mínimo.',
      'Review originator, validator status, documents, risk and token reference rules.': 'Revise el originador, el estado del validador, los documentos, el riesgo y las reglas de referencia del token.',
      'Connect wallet, complete KYC and confirm investor profile.': 'Conecte la wallet, complete el KYC y confirme el perfil del inversor.',
      'Invest only in opportunities allowed by jurisdiction, profile and offering rules.': 'Invierta solo en oportunidades permitidas por la jurisdicción, el perfil y las reglas de la oferta.',
      'Authorized investor access only.': 'Acceso exclusivo para inversores autorizados.'
      ,'Authorized investor access only. Materials are confidential and may not be forwarded, copied or redistributed without written permission from GlemO.': 'Acceso exclusivo para inversores autorizados. Los materiales son confidenciales y no pueden reenviarse, copiarse ni redistribuirse sin autorización escrita de GlemO.'
    },
    fr: {
      'Search documentation, sections...': 'Rechercher dans la documentation...',
      'Environments': 'Environnements', 'Data Room': 'Data Room', 'Institutional Data Room': 'Data Room Institutionnelle',
      'Institutional Documentation': 'Documentation Institutionnelle', 'Areas': 'Espaces', 'Quick Access': 'Accès Rapide',
      'Overview': 'Vue d’ensemble', 'Diligence': 'Diligence', 'Financial & Execution': 'Finance et Exécution',
      'Platform & Architecture': 'Plateforme et Architecture', 'Investor Deck (PDF)': 'Présentation Investisseur (PDF)',
      'Investment Memo': 'Mémo d’Investissement', 'Legal Compliance': 'Juridique et Conformité',
      'Operating Model (XLSX)': 'Modèle Opérationnel (XLSX)',
      'Institutional Documentation & Evidence': 'Documentation et Preuves Institutionnelles',
      'Featured Documents': 'Documents à la Une', 'View all documents →': 'Voir tous les documents →',
      'Platform Map →': 'Carte de la Plateforme →', 'Investor Deck →': 'Présentation Investisseur →',
      'Institutional Checklist →': 'Checklist Institutionnelle →', 'REAL ASSETS': 'ACTIFS RÉELS',
      'QUALIFIED DEMAND': 'DEMANDE QUALIFIÉE', 'GLOBAL ACCESS': 'ACCÈS MONDIAL',
      'Back to Data Room': 'Retour à la Data Room', 'Viewing as:': 'Vue en tant que :',
      'Public Marketplace': 'Marketplace Public', 'Switch Persona • Environment': 'Changer de Profil • Environnement',
      'Product prototype': 'Prototype du produit', 'Previous screen': 'Écran précédent',
      'Next screen': 'Écran suivant', 'Open sitemap': 'Ouvrir le sitemap', 'Select Language': 'Choisir la langue',
      'Language': 'Langue', 'CONFIDENTIAL - DATA ROOM': 'CONFIDENTIEL - DATA ROOM',
      'Asset-class-neutral liquidity and distribution infrastructure for tokenized real-world assets.': 'Infrastructure neutre de liquidité et de distribution pour les actifs réels tokenisés.',
      'Asset-class-neutral liquidity and distribution rail for tokenized real-world assets.': 'Infrastructure neutre de liquidité et de distribution pour les actifs réels tokenisés.',
      'LOGIN / FUND NAME': 'IDENTIFIANT / NOM DU FONDS', 'PASSWORD': 'MOT DE PASSE',
      'Enter Data Room': 'Entrer dans la Data Room', 'Enter fund name or login': 'Saisissez le fonds ou l’identifiant',
      'Enter access password': 'Saisissez le mot de passe', 'Incorrect password. Please try again.': 'Mot de passe incorrect. Veuillez réessayer.',
      'Incorrect password. Please enter the pre-seed access password.': 'Mot de passe incorrect. Saisissez le mot de passe d’accès pre-seed.',
      'Journey Map': 'Carte des Parcours',
      'DFD and Product Requirements': 'DFD et Exigences Produit',
      'MVP1 Feasible Scope': 'Périmètre Réalisable du MVP1',
      'Tokenized Asset Technical Sheet': 'Fiche Technique de l’Actif Tokenisé',
      'Distribution SaaS Console': 'Console SaaS de Distribution',
      'Retail Client Portal': 'Portail Client Particulier',
      'Institutional Investor Portal': 'Portail Investisseur Institutionnel',
      'Investor Education and Risk Understanding': 'Éducation Investisseur et Compréhension des Risques',
      'Actor Environments': 'Environnements par Acteur',
      'Actor Dashboards': 'Tableaux de Bord par Acteur',
      'Transaction Declaration Layer': 'Couche de Déclaration des Transactions',
      'Seller Organization Admin': 'Administration de l’Organisation Vendeuse',
      'Distribution Partner Portal': 'Portail Partenaire de Distribution',
      'Seller Plans for Tokenized Asset Publishers': 'Offres pour Émetteurs d’Actifs Tokenisés',
      'Compliance Case Management': 'Gestion des Dossiers de Conformité',
      'Transaction Clearance Queue': 'File de Validation des Transactions',
      'Billing and Revenue Operations': 'Opérations de Facturation et Revenus',
      'AI Operations Console': 'Console des Opérations IA',
      'Enterprise Concierge Desk': 'Service Concierge Enterprise',
      'Custody, Payment and Rail Partner Portal': 'Portail Partenaires de Conservation, Paiement et Rails',
      'Ecosystem Builder and dApp Portal': 'Portail des Builders et dApps de l’Écosystème',
      'Operating Readiness Register': 'Registre de Préparation Opérationnelle',
      'Documentation and DFD Downloads': 'Téléchargements de Documentation et DFD',
      'Visual Calibration & Component Laboratory': 'Calibration Visuelle et Laboratoire de Composants',
      'GlemO Environment Architecture & Global Shell': 'Architecture des Environnements et Shell Global GlemO',
      'GlemO Global Product Architecture': 'Architecture Produit Globale GlemO',
      'GlemO Environment Experience Matrix': 'Matrice d’Expérience des Environnements GlemO',
      'Product Requirements Specification': 'Spécification des Exigences Produit',
      'PLATFORM REQUIREMENTS': 'EXIGENCES DE LA PLATEFORME',
      'Available Languages': 'Langues Disponibles',
      'Developer Use': 'Utilisation par les Développeurs',
      'Open PDF': 'Ouvrir le PDF',
      'Download DOCX': 'Télécharger le DOCX',
      'Open Marketplace →': 'Ouvrir la Marketplace →',
      '3 documents': '3 documents', '24 documents': '24 documents',
      '4 models & tools': '4 modèles et outils', '9 blueprints': '9 documents techniques',
      'Interactive': 'Interactif', 'Sep 2026': 'Sept. 2026',
      'On this page': 'Sur cette page', 'Related': 'Associés',
      'Diligence Area': 'Espace Diligence', '17 Slides': '17 Diapositives',
      'Open Investor Deck': 'Ouvrir la Présentation Investisseur', 'Need Help?': 'Besoin d’aide ?',
      'Contact the GlemO team for additional information or access.': 'Contactez l’équipe GlemO pour obtenir des informations supplémentaires ou un accès.',
      'Request Diligence Access': 'Demander un Accès Diligence',
      'V4.7 product-readiness view: commercial front, role-based journeys, manual MVP1 controls and future expansion layers are separated on purpose.': 'Vue de préparation produit V4.7 : le front commercial, les parcours par rôle, les contrôles manuels du MVP1 et les futures couches d’expansion sont volontairement séparés.',
      'The V4.7 prototype makes the product easier to understand: public discovery brings demand, private buyer rooms convert that demand, seller/originator rooms publish and monitor supply, and admin/partner operations keep the system credible for banks.': 'Le prototype V4.7 facilite la compréhension du produit : la découverte publique génère la demande, les espaces privés des acheteurs convertissent cette demande, les espaces vendeurs et originators publient et suivent l’offre, et les opérations administratives et partenaires rendent le système crédible pour les banques.',
      'Reference Return': 'Rendement de Référence', 'Primary Metric (Reference Return)': 'Indicateur Principal (Rendement de Référence)',
      '41 Screens': '41 Écrans', 'Diligence Prototype': 'Prototype de Diligence',
      'Open Gaps Tracked': 'Écarts Ouverts Suivis', 'Requirements Reviewed': 'Exigences Révisées',
      'Browse the tokenized RWA catalogue, reference scenarios, interactive fact sheets and investor risk education.': 'Parcourez le catalogue de RWA tokenisés, les scénarios de référence, les fiches interactives et l’éducation aux risques pour les investisseurs.',
      'Asset-class-neutral liquidity and distribution platform for tokenized real-world assets. Discover opportunities, evaluate credit underwriting and participate in primary allocations.': 'Plateforme neutre de liquidité et de distribution pour les actifs du monde réel tokenisés. Découvrez des opportunités, évaluez l’analyse de crédit et participez aux allocations primaires.',
      'Public Marketplace Environment': 'Environnement de Marketplace Public',
      'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility only when ready.': 'Découvrez des actifs tokenisés du monde réel, comparez les paramètres financiers, examinez la diligence du validateur et lancez l’éligibilité seulement lorsque vous êtes prêt.',
      'FEATURED TOKENIZED REAL ESTATE CREDIT': 'CRÉDIT IMMOBILIER TOKENISÉ À LA UNE',
      'Discover tokenized real-world assets with clear eligibility, evidence and official distribution routes.': 'Découvrez des actifs tokenisés du monde réel avec une éligibilité claire, des preuves et des canaux de distribution officiels.',
      'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents and liquidity rules before they act.': 'GlemO est neutre quant aux classes d’actifs : le crédit immobilier constitue le premier marché de preuve, puis le rail s’étend à des actifs institutionnels approuvés. Les investisseurs voient l’économie, l’éligibilité, les documents et les règles de liquidité avant d’agir.',
      'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility.': 'Découvrez des actifs tokenisés du monde réel, comparez les paramètres financiers, examinez la diligence du validateur et lancez l’éligibilité.',
      'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents, risk controls and liquidity rules before they commit capital.': 'GlemO est neutre quant aux classes d’actifs : le crédit immobilier constitue le premier marché de preuve, puis le rail s’étend à des actifs institutionnels approuvés. Avant d’allouer du capital, les investisseurs voient l’économie, l’éligibilité, les documents, les contrôles de risque et les règles de liquidité.',
      'Check Eligibility': 'Vérifier l’Éligibilité', 'Retail Login': 'Connexion Particulier',
      'Open Asset Sheet': 'Ouvrir la Fiche Actif', 'Distribution Network': 'Réseau de Distribution',
      'See Featured Offering': 'Voir l’Offre à la Une', 'Validated offerings': 'Offres validées',
      'Asset families': 'Familles d’actifs', 'Average liquidity coverage': 'Couverture moyenne de liquidité',
      'Investor Conversion Path': 'Parcours de Conversion Investisseur',
      'Product Readiness V4.7': 'Préparation Produit V4.7', 'Public Marketplace': 'Marketplace Public', 'Asset Sheet': 'Fiche Actif',
      'Browse curated offers by return profile, liquidity, asset class and minimum ticket.': 'Parcourez des offres sélectionnées par profil de rendement, liquidité, classe d’actifs et ticket minimum.',
      'Review originator, validator status, documents, risk and token reference rules.': 'Examinez l’originator, le statut du validateur, les documents, le risque et les règles de référence du token.',
      'Connect wallet, complete KYC and confirm investor profile.': 'Connectez le wallet, complétez le KYC et confirmez le profil investisseur.',
      'Invest only in opportunities allowed by jurisdiction, profile and offering rules.': 'Investissez uniquement dans les opportunités autorisées par la juridiction, le profil et les règles de l’offre.',
      'Authorized investor access only.': 'Accès réservé aux investisseurs autorisés.'
      ,'Authorized investor access only. Materials are confidential and may not be forwarded, copied or redistributed without written permission from GlemO.': 'Accès réservé aux investisseurs autorisés. Les documents sont confidentiels et ne peuvent être transmis, copiés ou redistribués sans l’autorisation écrite de GlemO.'
    },
    ar: {
      'Search documentation, sections...': 'البحث في الوثائق والأقسام...',
      'Marketplace': 'السوق', 'Environments': 'البيئات', 'Data Room': 'غرفة البيانات',
      'Institutional Data Room': 'غرفة البيانات المؤسسية', 'Institutional Documentation': 'الوثائق المؤسسية',
      'Areas': 'الأقسام', 'Quick Access': 'وصول سريع', 'Overview': 'نظرة عامة', 'Diligence': 'العناية الواجبة',
      'Financial & Execution': 'المالية والتنفيذ', 'Platform & Architecture': 'المنصة والبنية التقنية',
      'Investor Deck (PDF)': 'عرض المستثمر (PDF)', 'Investment Memo': 'مذكرة الاستثمار',
      'Legal Compliance': 'القانون والامتثال', 'Operating Model (XLSX)': 'النموذج التشغيلي (XLSX)',
      'Institutional Documentation & Evidence': 'الوثائق والأدلة المؤسسية',
      'Featured Documents': 'الوثائق المميزة', 'View all documents →': 'عرض جميع الوثائق ←',
      'Platform Map →': 'خريطة المنصة ←', 'Investor Deck →': 'عرض المستثمر ←',
      'Institutional Checklist →': 'قائمة التحقق المؤسسية ←', 'REAL ASSETS': 'أصول حقيقية',
      'QUALIFIED DEMAND': 'طلب مؤهل', 'GLOBAL ACCESS': 'وصول عالمي',
      'Back to Data Room': 'العودة إلى غرفة البيانات', 'Viewing as:': 'العرض بصفة:',
      'Public Marketplace': 'السوق العام', 'Switch Persona • Environment': 'تغيير الدور • البيئة',
      'Product prototype': 'نموذج أولي للمنتج', 'Previous screen': 'الشاشة السابقة',
      'Next screen': 'الشاشة التالية', 'Open sitemap': 'فتح خريطة الموقع', 'Select Language': 'اختيار اللغة',
      'Language': 'اللغة', 'CONFIDENTIAL - DATA ROOM': 'سري - غرفة البيانات',
      'Asset-class-neutral liquidity and distribution infrastructure for tokenized real-world assets.': 'بنية محايدة للسيولة والتوزيع للأصول الحقيقية المرمّزة.',
      'Asset-class-neutral liquidity and distribution rail for tokenized real-world assets.': 'بنية محايدة للسيولة والتوزيع للأصول الحقيقية المرمّزة.',
      'LOGIN / FUND NAME': 'تسجيل الدخول / اسم الصندوق', 'PASSWORD': 'كلمة المرور',
      'Enter Data Room': 'الدخول إلى غرفة البيانات', 'Enter fund name or login': 'أدخل اسم الصندوق أو تسجيل الدخول',
      'Enter access password': 'أدخل كلمة مرور الوصول', 'Incorrect password. Please try again.': 'كلمة المرور غير صحيحة. حاول مرة أخرى.',
      'Incorrect password. Please enter the pre-seed access password.': 'كلمة المرور غير صحيحة. أدخل كلمة مرور الوصول لجولة ما قبل البذرة.',
      'Journey Map': 'خريطة الرحلات',
      'DFD and Product Requirements': 'مخططات تدفق البيانات ومتطلبات المنتج',
      'MVP1 Feasible Scope': 'النطاق القابل للتنفيذ للنسخة الأولى',
      'Tokenized Asset Technical Sheet': 'البطاقة الفنية للأصل المرمّز',
      'Distribution SaaS Console': 'منصة برمجيات التوزيع',
      'Retail Client Portal': 'بوابة عميل التجزئة',
      'Institutional Investor Portal': 'بوابة المستثمر المؤسسي',
      'Investor Education and Risk Understanding': 'تثقيف المستثمر وفهم المخاطر',
      'Actor Environments': 'بيئات الأطراف',
      'Actor Dashboards': 'لوحات معلومات الأطراف',
      'Transaction Declaration Layer': 'طبقة إعلان المعاملات',
      'Seller Organization Admin': 'إدارة مؤسسة البائع',
      'Distribution Partner Portal': 'بوابة شريك التوزيع',
      'Seller Plans for Tokenized Asset Publishers': 'خطط ناشري الأصول المرمّزة',
      'Compliance Case Management': 'إدارة حالات الامتثال',
      'Transaction Clearance Queue': 'قائمة مراجعة المعاملات',
      'Billing and Revenue Operations': 'عمليات الفوترة والإيرادات',
      'AI Operations Console': 'منصة عمليات الذكاء الاصطناعي',
      'Enterprise Concierge Desk': 'خدمة الكونسيرج للمؤسسات',
      'Custody, Payment and Rail Partner Portal': 'بوابة شركاء الحفظ والدفع والمسارات',
      'Ecosystem Builder and dApp Portal': 'بوابة مطوري النظام والتطبيقات اللامركزية',
      'Operating Readiness Register': 'سجل الجاهزية التشغيلية',
      'Documentation and DFD Downloads': 'تنزيل الوثائق ومخططات تدفق البيانات',
      'Visual Calibration & Component Laboratory': 'المعايرة البصرية ومختبر المكونات',
      'GlemO Environment Architecture & Global Shell': 'هندسة بيئات GlemO والواجهة العامة',
      'GlemO Global Product Architecture': 'هندسة منتج GlemO الشاملة',
      'GlemO Environment Experience Matrix': 'مصفوفة تجربة بيئات GlemO',
      'Product Requirements Specification': 'مواصفات متطلبات المنتج',
      'PLATFORM REQUIREMENTS': 'متطلبات المنصة',
      'Available Languages': 'اللغات المتاحة',
      'Developer Use': 'استخدام فريق التطوير',
      'Open PDF': 'فتح PDF',
      'Download DOCX': 'تنزيل DOCX',
      'Open Marketplace →': 'فتح السوق ←',
      '3 documents': '3 وثائق', '24 documents': '24 وثيقة',
      '4 models & tools': '4 نماذج وأدوات', '9 blueprints': '9 وثائق تقنية',
      'Interactive': 'تفاعلي', 'Sep 2026': 'سبتمبر 2026',
      'On this page': 'في هذه الصفحة', 'Related': 'مواد مرتبطة',
      'Diligence Area': 'قسم العناية الواجبة', '17 Slides': '17 شريحة',
      'Open Investor Deck': 'فتح عرض المستثمر', 'Need Help?': 'هل تحتاج إلى مساعدة؟',
      'Contact the GlemO team for additional information or access.': 'تواصل مع فريق GlemO للحصول على معلومات إضافية أو طلب الوصول.',
      'Request Diligence Access': 'طلب وصول للعناية الواجبة',
      'V4.7 product-readiness view: commercial front, role-based journeys, manual MVP1 controls and future expansion layers are separated on purpose.': 'عرض جاهزية المنتج V4.7: تم فصل الواجهة التجارية ومسارات الأدوار وضوابط MVP1 اليدوية وطبقات التوسع المستقبلية عن قصد.',
      'The V4.7 prototype makes the product easier to understand: public discovery brings demand, private buyer rooms convert that demand, seller/originator rooms publish and monitor supply, and admin/partner operations keep the system credible for banks.': 'يجعل نموذج V4.7 المنتج أسهل للفهم: يخلق الاكتشاف العام الطلب، وتحوله مساحات المشترين الخاصة، وتنشر مساحات البائعين والمنشئين العرض وتراقبه، وتحافظ عمليات الإدارة والشركاء على موثوقية النظام لدى البنوك.',
      'Reference Return': 'عائد مرجعي', 'Primary Metric (Reference Return)': 'المؤشر الرئيسي (العائد المرجعي)',
      '41 Screens': '41 شاشة', 'Diligence Prototype': 'نموذج للعناية الواجبة',
      'Open Gaps Tracked': 'تتبع الفجوات المفتوحة', 'Requirements Reviewed': 'متطلبات تمت مراجعتها',
      'Browse the tokenized RWA catalogue, reference scenarios, interactive fact sheets and investor risk education.': 'تصفح كتالوج الأصول الحقيقية المرمزة والسيناريوهات المرجعية وبطاقات المعلومات التفاعلية وتثقيف المستثمرين حول المخاطر.',
      'Asset-class-neutral liquidity and distribution platform for tokenized real-world assets. Discover opportunities, evaluate credit underwriting and participate in primary allocations.': 'منصة محايدة لفئات الأصول توفر السيولة والتوزيع للأصول الحقيقية المرمزة. اكتشف الفرص وقيّم تحليل الائتمان وشارك في التخصيصات الأولية.',
      'Public Marketplace Environment': 'بيئة السوق العامة',
      'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility only when ready.': 'اكتشف الأصول الحقيقية المرمزة وقارن المعايير المالية وراجع تدقيق المدقق وابدأ التأهل فقط عندما تكون مستعداً.',
      'FEATURED TOKENIZED REAL ESTATE CREDIT': 'ائتمان عقاري مرمز مميز',
      'Discover tokenized real-world assets with clear eligibility, evidence and official distribution routes.': 'اكتشف الأصول الحقيقية المرمزة مع أهلية واضحة وأدلة وقنوات توزيع رسمية.',
      'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents and liquidity rules before they act.': 'GlemO محايدة تجاه فئات الأصول: الائتمان العقاري هو سوق الإثبات الأول، ثم يتوسع المسار إلى أصول مؤسسية معتمدة. يرى المستثمرون الجوانب الاقتصادية والأهلية والوثائق وقواعد السيولة قبل اتخاذ القرار.',
      'Discover tokenized real-world assets, compare financial parameters, inspect validator diligence and enter eligibility.': 'اكتشف الأصول الحقيقية المرمزة وقارن المعايير المالية وراجع تدقيق المدقق وابدأ التأهل.',
      'GlemO is asset-class neutral: real estate credit is the first proof market, then the rail expands into approved institutional asset supply. Investors see economics, eligibility, documents, risk controls and liquidity rules before they commit capital.': 'GlemO محايدة تجاه فئات الأصول: الائتمان العقاري هو سوق الإثبات الأول، ثم يتوسع المسار إلى أصول مؤسسية معتمدة. قبل تخصيص رأس المال، يرى المستثمرون الجوانب الاقتصادية والأهلية والوثائق وضوابط المخاطر وقواعد السيولة.',
      'Check Eligibility': 'التحقق من الأهلية', 'Retail Login': 'دخول مستثمر التجزئة',
      'Open Asset Sheet': 'فتح بطاقة الأصل', 'Distribution Network': 'شبكة التوزيع',
      'See Featured Offering': 'عرض الفرصة المميزة', 'Validated offerings': 'عروض تم التحقق منها',
      'Asset families': 'فئات الأصول', 'Average liquidity coverage': 'متوسط تغطية السيولة',
      'Investor Conversion Path': 'مسار تحويل المستثمر',
      'Product Readiness V4.7': 'جاهزية المنتج V4.7', 'Public Marketplace': 'السوق العامة', 'Asset Sheet': 'بطاقة الأصل',
      'Browse curated offers by return profile, liquidity, asset class and minimum ticket.': 'تصفح العروض المختارة حسب ملف العائد والسيولة وفئة الأصل والحد الأدنى للاستثمار.',
      'Review originator, validator status, documents, risk and token reference rules.': 'راجع المنشئ وحالة المدقق والوثائق والمخاطر وقواعد مرجعية الرمز.',
      'Connect wallet, complete KYC and confirm investor profile.': 'اربط المحفظة وأكمل التحقق من الهوية وأكد ملف المستثمر.',
      'Invest only in opportunities allowed by jurisdiction, profile and offering rules.': 'استثمر فقط في الفرص المسموح بها وفق الولاية وملف المستثمر وقواعد العرض.',
      'Authorized investor access only.': 'الدخول للمستثمرين المصرح لهم فقط.'
      ,'Authorized investor access only. Materials are confidential and may not be forwarded, copied or redistributed without written permission from GlemO.': 'الدخول للمستثمرين المصرح لهم فقط. المواد سرية ولا يجوز إرسالها أو نسخها أو إعادة توزيعها دون إذن كتابي من GlemO.'
    }
  };

  Object.assign(window.GlemoI18n.dictPT, dictionaries.pt);
  Object.assign(window.GlemoI18n.dictES, dictionaries.es);
  Object.assign(window.GlemoI18n.dictFR, dictionaries.fr);
  Object.assign(window.GlemoI18n.dictAR, dictionaries.ar);

  var language = window.GlemoI18n.getLanguage();
  if (document.readyState !== 'loading' && language !== 'en') {
    window.GlemoI18n.applyLanguage(language);
  }
})(window, document);
