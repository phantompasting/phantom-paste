/**
 * Single source of truth for all gallery images.
 * Used by both the /gallery page and the homepage gallery section.
 */
export const GALLERY_IMGS = [
  { src: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp",          label: "FashionPass — Campaign Wall",           alt: "FashionPass wheat paste campaign poster wall guerrilla marketing Los Angeles",                          tag: "Wheat Paste"  },
  { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",               label: "FIFA World Cup — Gallery Wall",          alt: "FIFA World Cup wheat paste poster wall gallery wide view Atlanta street advertising",                   tag: "Wild Posting" },
  { src: "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp", label: "FashionPass — LA Wild Posting",          alt: "FashionPass wild posting wall Los Angeles wheat paste street marketing campaign",                       tag: "Wild Posting" },
  { src: "/gallery/fifa-world-cup-atlanta-wall-installation.webp",              label: "FIFA Atlanta — Wall Installation",       alt: "FIFA World Cup Atlanta wall installation wheat paste posters guerrilla advertising",                    tag: "Wheat Paste"  },
  { src: "/gallery/dont-fall-off-wheat-paste-wall-closeup.webp",                label: "Don't Fall Off — Wall Close-Up",         alt: "Don't Fall Off music wheat paste poster wall close-up guerrilla advertising campaign",                  tag: "Wheat Paste"  },
  { src: "/gallery/fifa-world-cup-poster-wall-angle-view.webp",                 label: "FIFA Posters — Angle View",              alt: "FIFA World Cup poster wall angle view wild posting street advertising campaign",                        tag: "Wild Posting" },
  { src: "/gallery/fashionpass-wheat-paste-street-art-wall-la.webp",            label: "FashionPass — Wide Format Paste",        alt: "FashionPass wide format wheat paste street art wall Los Angeles wild posting",                          tag: "Wheat Paste"  },
  { src: "/gallery/dont-fall-off-wheat-paste-street-view-la.webp",              label: "Don't Fall Off — Street View LA",        alt: "Don't Fall Off wheat paste wild posting wall installation street view Los Angeles",                     tag: "Wheat Paste"  },
  { src: "/gallery/fifa-world-cup-wheat-paste-posters-closeup.webp",            label: "FIFA Posters — Close Up",                alt: "FIFA World Cup wheat paste posters close-up wild posting street campaign",                              tag: "Wild Posting" },
  { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",     label: "Incrediwear — Night Pole Wrap",          alt: "Incrediwear pole wrap guerrilla advertising at night urban street marketing",                           tag: "Wild Posting" },
  { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",      label: "Calvin Priice — Chalk Stencil",          alt: "Calvin Priice chalk spray stencil sidewalk guerrilla marketing campaign",                              tag: "Stencil"      },
  { src: "/gallery/black-pearl-la-chalk-spray-stencil-sidewalk.webp",           label: "Black Pearl LA — Chalk Stencil",         alt: "Black Pearl Los Angeles chalk spray stencil marketing on sidewalk with custom stencil template",        tag: "Stencil"      },
  { src: "/gallery/fifa-world-cup-poster-wall-street-perspective.webp",         label: "FIFA Posters — Street Perspective",      alt: "FIFA World Cup poster wall street perspective wild posting advertising campaign",                       tag: "Wild Posting" },
  { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",             label: "Don't Fall Off — Urban Wall",            alt: "Don't Fall Off wheat paste posters on urban wall with pink accent guerrilla marketing",                 tag: "Wheat Paste"  },
  { src: "/gallery/fifa-world-cup-poster-installation-closeup.webp",            label: "FIFA World Cup — Installation",          alt: "FIFA World Cup poster installation close-up wheat paste wild posting",                                  tag: "Wild Posting" },
  { src: "/gallery/street-pole-sticker-campaign-urban-advertising.webp",        label: "Calvin Priice — Sticker Campaign",       alt: "Calvin Priice street pole sticker campaign urban advertising guerrilla marketing",                      tag: "Wild Posting" },
  { src: "/gallery/black-pearl-la-stencil-template-grass.webp",                 label: "Black Pearl LA — Stencil Template",      alt: "Custom chalk spray stencil template for Black Pearl Los Angeles guerrilla marketing campaign",          tag: "Stencil"      },
  { src: "/gallery/fifa-world-cup-street-gallery-pedestrian-viewing.webp",      label: "FIFA — Street Gallery View",             alt: "FIFA World Cup street gallery pedestrian viewing wheat paste wild posting",                             tag: "Wild Posting" },
  { src: "/gallery/dont-fall-off-wheat-paste-pedestrian-street-art.webp",       label: "Don't Fall Off — Pedestrian View",       alt: "Pedestrian walking past Don't Fall Off wheat paste poster wall street art installation",                tag: "Wheat Paste"  },
  { src: "/gallery/sticker-campaign-street-intersection-urban.webp",            label: "Sticker Campaign — Intersection",        alt: "Sticker campaign street intersection urban advertising guerrilla marketing",                            tag: "Wild Posting" },
  { src: "/gallery/custom-stencil-template-cut-out-design.webp",                label: "Custom Stencil Template",                alt: "Custom stencil template cut-out design for chalk spray guerrilla marketing campaigns",                  tag: "Stencil"      },
  { src: "/gallery/dont-fall-off-wheat-paste-building-bike-rack.webp",          label: "Don't Fall Off — Building Perspective",  alt: "Don't Fall Off wheat paste campaign building wall installation street perspective with bike rack",       tag: "Wheat Paste"  },
] as const;

export type GalleryImg = typeof GALLERY_IMGS[number];
