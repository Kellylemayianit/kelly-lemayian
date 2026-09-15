/* services/mockData.js — seed data.
   PROFILE, the "Safari Stays" project, and the three guest-house case
   studies below are grounded in Kelly's real GitHub profile and the
   client links/photos she supplied. Everything marked needsReview is
   still a placeholder write-up — check it (or edit it straight from
   #/admin/projects) before this goes live. Delete this file once a
   real backend is wired up.
*/
window.KL = window.KL || {};

KL.mockData = {

  profile: {
    name: 'Kelly Lemayian',
    role: 'Full-Stack Engineer',
    avatar: 'assets/1.jpeg',
    tagline: 'I build production-ready web apps end-to-end.',
    bio: [
      'Full-stack engineer working across React, TypeScript, DevOps and AI integration — taking products from a blank repo to something people can actually use.',
      'Available for remote contract work and technical bounties. Open to short engagements or longer builds.'
    ],
    stats: [
      { value: '25+', label: 'Repos shipped' },
      { value: 'Remote', label: 'Contract-ready' },
      { value: 'AI', label: 'Integration focus' }
    ],
    skills: [
      {
        icon: 'grid',
        title: 'Frontend Engineering',
        desc: 'React and TypeScript interfaces built for speed and clarity — componentized, typed, and easy to hand off.'
      },
      {
        icon: 'external',
        title: 'DevOps & Infra',
        desc: 'CI/CD, deployment pipelines and cloud infra so a project ships reliably, not just once on a laptop.'
      },
      {
        icon: 'chevronDown',
        title: 'AI Integration',
        desc: 'Wiring LLMs and agent tooling into real products — from prototypes to production-ready integrations.'
      }
    ],
    // needsReview: true → verify each handle/link before this goes live.
    social: {
      whatsapp: { url: 'https://wa.me/qr/MPS5LLGWN57PC1', needsReview: true },
      telegram: { url: 'https://t.me/Kaelen254', needsReview: true },
      linkedin: { url: 'https://www.linkedin.com/in/kelly-lemayian-5a3a29295', needsReview: false },
      youtube: { url: 'https://www.youtube.com/@Safaridigital-254', needsReview: true },
      tiktok: { url: 'https://www.tiktok.com/@avianking_254', needsReview: true },
      facebook: { url: 'https://www.facebook.com/Avianking.ke', needsReview: true },
      github: { url: 'https://github.com/Kellylemayianit', needsReview: false }
    }
  },

  // Photo library — Kelly's own photos, uploaded directly (assets/1.jpeg …
  // assets/7.jpeg). Two carried a visible photographer watermark, credited
  // below as shown; confirm those two before publishing since "my own
  // images" and the on-image credit don't fully agree.
  assets: [
    { id: 'a1', file: 'assets/1.jpeg', caption: 'Kelly, outdoors', credit: 'Kelly Lemayian' },
    { id: 'a2', file: 'assets/2.jpeg', caption: 'Portrait', credit: 'Kelly Lemayian' },
    { id: 'a3', file: 'assets/3.jpeg', caption: 'Portrait, outdoors', credit: 'Kelly Lemayian' },
    { id: 'a4', file: 'assets/4.jpeg', caption: 'Indoors', credit: 'Karis Lens', needsReview: true },
    { id: 'a5', file: 'assets/5.jpeg', caption: 'Outdoors, seated', credit: 'Kelly Lemayian' },
    { id: 'a6', file: 'assets/6.jpeg', caption: 'Outdoors, seated', credit: 'Kelly Lemayian' },
    { id: 'a7', file: 'assets/7.jpeg', caption: 'Profile shot', credit: 'kenyan~justice', needsReview: true }
  ],

  projects: [
    {
      id: 'safari-stays',
      title: 'Safari Stays',
      tagline: 'A booking-inquiry platform for Kenyan safari accommodation',
      cover: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80',
      tags: ['CSS', 'Hospitality', 'Booking flow'],
      year: '2025',
      needsReview: true,
      repoUrl: 'https://github.com/Kellylemayianit/safari_stays',
      liveUrl: '',
      summary: 'A property-listing and booking-inquiry site built for Kenyan safari accommodation brands — real repo, placeholder write-up below.',
      challenge: 'Guests researching safari stays need to compare properties and reach the host quickly, without the overhead of a full booking-engine integration.',
      approach: 'A hand-built, mobile-first layout: property cards, a detail view per stay, and direct inquiry paths (WhatsApp / call / email) instead of a heavyweight OTA checkout.',
      result: 'Placeholder — add real outcomes here (inquiries generated, load-time improvements, guest feedback) once available.'
    },
    {
      id: 'vintex-guest-house',
      title: 'Vintex Guest House',
      tagline: 'Guest house in Kimana, Kajiado County',
      cover: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80',
      tags: ['Hospitality', 'Kimana'],
      year: '2026',
      needsReview: true,
      repoUrl: '',
      liveUrl: 'https://vintexguesthouse.com',
      bookingUrl: 'https://www.booking.com/hotel/ke/vintex-guest-house-kimana.html',
      summary: 'Placeholder — add the real story of what was built for Vintex (site, booking flow, or marketing support).',
      challenge: 'What problem was this solving for the guest house?',
      approach: 'What was built, and with what stack?',
      result: 'What changed because of it (bookings, visibility, reviews)?'
    },
    {
      id: 'pleasant-comfort-guest-house',
      title: 'Pleasant Comfort Guest House',
      tagline: 'Guest house, Kenya',
      cover: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80',
      tags: ['Hospitality'],
      year: '2026',
      needsReview: true,
      repoUrl: '',
      liveUrl: '',
      bookingUrl: 'https://www.booking.com/hotel/ke/pleasant-comfort-guest-house.html',
      summary: 'Placeholder — add the real story of the work done for Pleasant Comfort.',
      challenge: 'What problem was this solving for the guest house?',
      approach: 'What was built, and with what stack?',
      result: 'What changed because of it?'
    },
    {
      id: 'romeo-gardens',
      title: 'Romeo Gardens',
      tagline: 'Guest house, Kenya',
      cover: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80',
      tags: ['Hospitality'],
      year: '2026',
      needsReview: true,
      repoUrl: '',
      liveUrl: '',
      bookingUrl: 'https://www.booking.com/hotel/ke/romeo-gardens.html',
      summary: 'Placeholder — add the real story of the work done for Romeo Gardens.',
      challenge: 'What problem was this solving for the guest house?',
      approach: 'What was built, and with what stack?',
      result: 'What changed because of it?'
    }
  ],

  // No real blog content was supplied — these are placeholder drafts
  // matching Kelly's stack, meant to be rewritten or deleted.
  blogPosts: [
    {
      id: 'shipping-ai-features-in-production',
      title: 'Shipping AI features without breaking production',
      category: 'AI Integration',
      date: '2026-06-02',
      cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80',
      excerpt: 'Placeholder post — notes on wiring LLM calls into an existing React/TypeScript app without turning the codebase upside down.',
      content: [
        'Placeholder draft. Replace with the real lessons learned from integrating AI features into a production app.',
        'Cover things like: fallback behavior when a model call fails, cost/latency tradeoffs, and how to keep the UI honest about what is and isn\u2019t AI-generated.'
      ]
    },
    {
      id: 'ci-cd-for-solo-devs',
      title: 'A CI/CD setup that\u2019s worth it for a solo project',
      category: 'DevOps',
      date: '2026-04-18',
      cover: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80',
      excerpt: 'Placeholder post — the minimum pipeline that\u2019s actually worth setting up before a client project goes live.',
      content: [
        'Placeholder draft. Replace with your actual pipeline: what runs on every push, what gates a deploy, and what you skipped on purpose.'
      ]
    },
    {
      id: 'remote-contract-lessons',
      title: 'What remote contract work actually looks like',
      category: 'Freelance',
      date: '2026-02-09',
      cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80',
      excerpt: 'Placeholder post — scoping, async communication, and getting paid, from the remote-contractor side of the table.',
      content: [
        'Placeholder draft. Replace with real notes on scoping calls, contracts, and communication across time zones.'
      ]
    }
  ]
};
