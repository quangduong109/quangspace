module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '2cb2ed9027bb4879a289852342befc50',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Quang Space',
  domain: 'www.quangspace.me',
  author: 'Quang Duong',

  // open graph metadata (optional)
  description: 'Blog cá nhân của mình, notes lại mọi thứ mình tìm hiểu',
  socialImageTitle: 'Quang Space',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'quangduong1009',
  github: 'quangduong109',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/tools-libs-frameworks': '176f43455c6d44cc9461f42ee67ed5e9',
  //   '/health': 'b0fc746a9b5b42738bd2af16011b5d80'
  // }
  
  pageUrlOverrides: null
}
