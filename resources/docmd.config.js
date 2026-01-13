// docmd.config.js: basic config for docmd
module.exports = {
  // Core Site Metadata
  siteTitle: 'tensor',
  // Define a base URL for your site, crucial for SEO and absolute paths
  // No trailing slash
  siteUrl: '', // Replace with your actual deployed URL

  // Logo Configuration
  logo: {
    light: '/assets/images/logo.png', // Path relative to outputDir root
    dark: '/assets/images/logo.png',   // Path relative to outputDir root
    alt: 'Tensor Tutoring',                      // Alt text for the logo
    href: '/',                              // Link for the logo, defaults to site root
  },

  // Directory Configuration
  srcDir: 'docs',       // Source directory for Markdown files
  outputDir: 'site',    // Directory for generated static site

  // Search Configuration
  search: true,        // Enable/disable search functionality

  // Build Options
  minify: true,        // Enable/disable HTML/CSS/JS minification

  // Sidebar Configuration
  sidebar: {
    collapsible: true,        // or false to disable
    defaultCollapsed: false,  // or true to start collapsed
  },

  // Theme Configuration
  theme: {
    name: 'sky',            // Themes: 'default', 'sky'
    defaultMode: 'light',   // Initial color mode: 'light' or 'dark'
    enableModeToggle: true, // Show UI button to toggle light/dark modes
    positionMode: 'top', // 'top' or 'bottom' for the theme toggle
    codeHighlight: true,    // Enable/disable codeblock highlighting and import of highlight.js
    customCss: [            // Array of paths to custom CSS files
      // '/assets/css/custom.css', // Custom TOC styles
    ]
  },

  // Custom JavaScript Files
  customJs: [  // Array of paths to custom JS files, loaded at end of body
    // '/assets/js/custom-script.js', // Paths relative to outputDir root
    '/assets/js/docmd-image-lightbox.js', // Image lightbox functionality
    '/assets/js/mathjax_inline_setup.js',
    '/assets/js/mathjax.js'
  ],

  // Content Processing
  autoTitleFromH1: true, // Set to true to automatically use the first H1 as page title
  copyCode: true, // Enable/disable the copy code button on code blocks

  // Plugins Configuration
  // Plugins are configured here. docmd will look for these keys.
  plugins: {
    // SEO Plugin Configuration
    // Most SEO data is pulled from page frontmatter (title, description, image, etc.)
    // These are fallbacks or site-wide settings.
    seo: {
      // Default meta description if a page doesn't have one in its frontmatter
      defaultDescription: 'docmd is a Node.js command-line tool for generating beautiful, lightweight static documentation sites from Markdown files.',
      openGraph: { // For Facebook, LinkedIn, etc.
        // siteName: 'docmd Documentation', // Optional, defaults to config.siteTitle
        // Default image for og:image if not specified in page frontmatter
        // Path relative to outputDir root
        defaultImage: '/assets/images/docmd-preview.png',
      },
      twitter: { // For Twitter Cards
        cardType: 'summary_large_image',     // 'summary', 'summary_large_image'
        // siteUsername: '@docmd_handle',    // Your site's Twitter handle (optional)
        // creatorUsername: '@your_handle',  // Default author handle (optional, can be overridden in frontmatter)
      }
    },
    // Analytics Plugin Configuration
    analytics: {
      // Google Analytics 4 (GA4)
      googleV4: {
        measurementId: 'G-8QVBDQ4KM1' // Replace with your actual GA4 Measurement ID
      }
    },
    // Enable Sitemap plugin
    sitemap: {
      defaultChangefreq: 'weekly',
      defaultPriority: 0.8
    }
    // Add other future plugin configurations here by their key
  },

  // "Edit this page" Link Configuration
  editLink: {
    enabled: false,
    // The URL to the folder containing your docs in the git repo
    // Note: It usually ends with /edit/main/docs or /blob/main/docs
    baseUrl: 'https://github.com/mgks/docmd/edit/main/docs',
    text: 'Edit this page on GitHub'
  },

  // Navigation Structure (Sidebar)
  // Icons are kebab-case names from Lucide Icons (https://lucide.dev/)
  navigation: [
      { title: 'Welcome', path: '/', icon: 'home' }, // Corresponds to docs/index.md
      {
        title: 'Chemistry',
        icon: 'rocket',
        path: '/chemistry',
        collapsible: true, // This makes the menu section collapsible

        children: [
          {title: 'Module 6 Crash Course', path: '/chemistry/mod6crashcourse'}
        ]
      },
      {
        title: 'Physics',
        icon: 'rocket',
        path: '/physics',
        collapsible: true, // This makes the menu section collapsible

        children: [
          { title: 'Life Cycle of a Star: Summary', path: '/physics/starlifesummary', icon: '' }
        ]
      },
      {
        title: 'Engineering Studies',
        icon: 'rocket',
        path: '/engineering',
        collapsible: true, // This makes the menu section collapsible

        children: [
          { title: 'Welding', path: '/engineering/welding', icon: '' }
        ]
      },
      {
        title: 'Maths Advanced',
        icon: 'rocket',
        path: '/mathsadv',
        collapsible: true, // This makes the menu section collapsible

        children: [
          { title: 'Fundamental Theorem of Calculus', path: '/mathsadv/intdifinverse', icon: '' }
        ]
      },
      {
        title: 'Maths Extension 1',
        icon: 'rocket',
        path: '/mathsext1',
        collapsible: true, // This makes the menu section collapsible

        children: [
          { title: 'u-substitution', path: '/mathsext1/usub', icon: '' }
        ]
      },
      {
        title: 'Maths Extension 2',
        icon: 'rocket',
        path: '/mathsext2',
        collapsible: true, // This makes the menu section collapsible

        children: [
          
        ]
      },
      // External links:
      { title: 'Back to Tutoring', path: '../../', icon: 'atom', external: true },
      /*{ title: 'Support the Project', path: 'https://github.com/sponsors/mgks', icon: 'heart', external: true },*/
    ],
    
  pageNavigation: true, // Enable previous / next page navigation at the bottom of each page

  // Sponsor Ribbon Configuration
  /*Sponsor: {
    enabled: false,
    title: 'Support docmd',
    link: 'https://github.com/sponsors/mgks',
  },*/

  // Footer Configuration
  // Markdown is supported here.
  footer: '© ' + new Date().getFullYear() + ' Tensor Tutoring.',

  // Favicon Configuration
  // Path relative to outputDir root
  favicon: '/assets/favicon.ico',
};
