/**
 * Single source of truth for all gallery images.
 * Used by both the /gallery page and the homepage gallery section.
 *
 * Alt-text strategy (May 14 cannibalization fix): for LA campaign photos,
 * lead with the NEIGHBORHOOD (Melrose, Silver Lake, Fairfax) where the
 * image was actually shot rather than generic "Los Angeles". More accurate
 * image description AND removes /gallery from competing with
 * /locations/los-angeles on the "wheat pasting los angeles" service query.
 */
export const GALLERY_IMGS = [
  // ── Nokia Bell Labs at The Helix — New Brunswick, NJ (latest job) ──
  // 60 jumbo 48"x72" posters (12-design series + branded spacer panels) on
  // the ~270 ft construction fence at The Helix, installed in one day,
  // Oct 19. Client-controlled site, COI on file. Logo watermark on all seven.
  { src: "/gallery/nokia-bell-labs-wheat-paste-installer-48x72-posters-helix-new-brunswick-nj.webp", label: "Nokia Bell Labs — Installer at The Helix", alt: "Phantom Pasting installer smoothing a 48x72 inch Nokia Bell Labs wheat paste poster beside the Nokia Bell Labs is coming to the Helix panel in New Brunswick, New Jersey", tag: "Wheat Paste", campaign: "helix" },
  { src: "/gallery/nokia-bell-labs-48x72-wheat-paste-poster-row-construction-fence-new-brunswick-nj.webp", label: "Nokia Bell Labs — 48″×72″ Row", alt: "Row of 48x72 inch Nokia Bell Labs wheat paste posters, including Glass Rivers, on a blue construction fence at The Helix in New Brunswick, NJ", tag: "Wheat Paste", campaign: "helix" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-poster-series-blue-hoarding-helix-new-brunswick.webp", label: "Nokia Bell Labs — Poster Series", alt: "Nokia Bell Labs illustrated poster series with branded logo panels wheat-pasted along blue site hoarding at The Helix, New Brunswick, New Jersey", tag: "Wheat Paste", campaign: "helix" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-posters-helix-plaza-arches-new-brunswick-nj.webp", label: "Nokia Bell Labs — Helix Plaza", alt: "Wide view of Nokia Bell Labs wheat paste posters on the construction fence below the red sculpture arches of The Helix plaza in New Brunswick, NJ", tag: "Wheat Paste", campaign: "helix" },
  { src: "/gallery/nokia-bell-labs-48x72-wheat-paste-posters-covered-walkway-new-brunswick.webp", label: "Nokia Bell Labs — Covered Walkway", alt: "Nokia Bell Labs 48x72 inch wheat paste posters running along a blue fence under a covered walkway at The Helix, New Brunswick, New Jersey", tag: "Wheat Paste", campaign: "helix" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-poster-wall-dusk-helix-new-brunswick-nj.webp", label: "Nokia Bell Labs — Dusk", alt: "Straight-on view of the Nokia Bell Labs wheat paste poster wall at dusk at The Helix in New Brunswick, NJ", tag: "Wheat Paste", campaign: "helix" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-posters-night-construction-fence-new-brunswick.webp", label: "Nokia Bell Labs — Evening", alt: "Nokia Bell Labs wheat paste posters and logo panel on a construction fence in the evening at The Helix, New Brunswick, New Jersey", tag: "Wheat Paste", campaign: "helix" },

  // ── Playback: The Brooklyn Watch Party — Brooklyn, NY ──
  // Film-festival street run around BAM, Oct 19–21: wheat paste, sticker
  // snipes, and chalk spray stencils. Best daylight frame of each format
  // (stencils were all laid overnight, so that one is the best-lit).
  { src: "/gallery/playback-brooklyn-watch-party-wheat-paste-posters-3rd-ave-atlantic-boerum-hill-brooklyn.webp", label: "Playback — Wheat Paste Wall", alt: "Playback The Brooklyn Watch Party wheat paste posters on a green construction wall at 3rd Avenue and Atlantic Avenue in Boerum Hill, Brooklyn", tag: "Wheat Paste", aspect: "portrait", campaign: "playback" },
  { src: "/gallery/playback-brooklyn-watch-party-sticker-snipe-pole-pacific-st-boerum-hill-brooklyn.webp", label: "Playback — Pole Sticker", alt: "Yellow Playback The Brooklyn Watch Party sticker snipe with QR code on a light pole on Pacific Street, Boerum Hill, Brooklyn, with an MTA bus behind", tag: "Sticker", campaign: "playback" },
  { src: "/gallery/playback-brooklyn-watch-party-chalk-spray-stencil-sidewalk-downtown-brooklyn.webp", label: "Playback — Sidewalk Stencil", alt: "Playback The Brooklyn Watch Party chalk spray stencil on a sidewalk at Flatbush Avenue Extension and DeKalb Avenue, Downtown Brooklyn", tag: "Stencil", aspect: "portrait", campaign: "playback" },

  // ── New York City fall run — Sept 18–20, plus Oct 22 return ──
  // First NYC wheat-paste trip: ABFF Pop Up New York (Oct 10–11 festival),
  // Calvin Priice, and the Gerbil podcast across Harlem, the Upper West Side,
  // Union Square, the East Village, and Williamsburg. Overnight installs.
  // Calvin Priice return trip — eight-poster grid on a green construction
  // fence near E 125th St in East Harlem, Oct 22. Logo watermark on all five.
  { src: "/gallery/calvin-priice-wheat-paste-eight-poster-grid-green-construction-fence-east-harlem-nyc.webp", label: "NYC Fall Run — Calvin Priice East Harlem Grid", alt: "Eight-poster grid of Calvin Priice wheat paste posters on a green construction fence in East Harlem, New York", tag: "Wheat Paste", campaign: "nyc-fall-run" },
  { src: "/gallery/calvin-priice-wheat-paste-posters-pedestrian-passing-east-harlem-nyc.webp", label: "NYC Fall Run — Calvin Priice Pass-by", alt: "Pedestrian walking past a wall of Calvin Priice wheat paste posters on a green construction fence in East Harlem, New York", tag: "Wheat Paste", aspect: "portrait", campaign: "nyc-fall-run" },
  { src: "/gallery/calvin-priice-wheat-paste-poster-wall-razor-wire-fence-east-harlem-nyc.webp", label: "NYC Fall Run — Calvin Priice Fence Line", alt: "Calvin Priice wheat paste poster wall on a green construction fence below chain-link and razor wire in East Harlem, New York", tag: "Wheat Paste", campaign: "nyc-fall-run" },
  { src: "/gallery/calvin-priice-wheat-paste-poster-wall-sidewalk-east-harlem-nyc.webp", label: "NYC Fall Run — Calvin Priice Street View", alt: "Straight-on street view of a Calvin Priice wheat paste poster wall above an East Harlem sidewalk in New York", tag: "Wheat Paste", aspect: "portrait", campaign: "nyc-fall-run" },
  { src: "/gallery/calvin-priice-wheat-paste-posters-green-construction-fence-angle-east-harlem-nyc.webp", label: "NYC Fall Run — Calvin Priice Angle View", alt: "Angled view of Calvin Priice musician wheat paste posters with QR codes on a green construction fence in East Harlem, New York", tag: "Wheat Paste", campaign: "nyc-fall-run" },
  { src: "/gallery/abff-pop-up-chalk-stencil-qr-code-sidewalk-noho-nyc.webp", label: "NYC Fall Run — ABFF Sidewalk Stencil", alt: "ABFF Pop Up chalk spray stencil with a QR code on a NoHo sidewalk in New York as pedestrians step past", tag: "Stencil", aspect: "portrait", campaign: "nyc-fall-run" },
  { src: "/gallery/abff-pop-up-calvin-priice-gerbil-wheat-paste-posters-green-barricade-harlem-nyc.webp", label: "NYC Fall Run — Harlem Barricade", alt: "Calvin Priice, Gerbil podcast, and ABFF Pop Up wheat paste posters wrapping a green construction barricade on a Harlem corner in New York", tag: "Wheat Paste", campaign: "nyc-fall-run" },
  { src: "/gallery/abff-pop-up-wheat-paste-poster-wall-pedestrians-upper-west-side-nyc.webp", label: "NYC Fall Run — Upper West Side", alt: "Pedestrians walking past a wall of ABFF Pop Up, Gerbil podcast, and Calvin Priice wheat paste posters on the Upper West Side of Manhattan", tag: "Wheat Paste", campaign: "nyc-fall-run" },
  { src: "/gallery/abff-pop-up-calvin-priice-wheat-paste-poster-grid-upper-west-side-nyc.webp", label: "NYC Fall Run — Eight-Poster Grid", alt: "Eight-poster grid of ABFF Pop Up New York and Calvin Priice wheat paste posters on a gray wall on the Upper West Side, New York", tag: "Wheat Paste", campaign: "nyc-fall-run" },
  { src: "/gallery/calvin-priice-abff-pop-up-wheat-paste-posters-subway-entrance-union-square-nyc.webp", label: "NYC Fall Run — Union Square", alt: "Calvin Priice and ABFF Pop Up wheat paste posters on a green board beside a subway entrance at Union Square, New York, at night", tag: "Wheat Paste", aspect: "portrait", campaign: "nyc-fall-run" },
  { src: "/gallery/calvin-priice-abff-pop-up-wheat-paste-posters-pedestrian-union-square-night-nyc.webp", label: "NYC Fall Run — Union Square Pass-by", alt: "Pedestrian passing Calvin Priice and ABFF Pop Up wheat paste posters at a Union Square subway entrance in New York at night", tag: "Wheat Paste", aspect: "portrait", campaign: "nyc-fall-run" },
  { src: "/gallery/calvin-priice-wheat-paste-posters-storefront-corner-east-village-night-nyc.webp", label: "NYC Fall Run — East Village Corner", alt: "Calvin Priice wheat paste posters on a black storefront corner in the East Village, New York, at night", tag: "Wheat Paste", aspect: "portrait", campaign: "nyc-fall-run" },
  { src: "/gallery/abff-pop-up-calvin-priice-wheat-paste-poster-block-white-brick-williamsburg-brooklyn.webp", label: "NYC Fall Run — Williamsburg", alt: "Block of ABFF Pop Up New York wheat paste posters below a Calvin Priice poster on a white brick wall in Williamsburg, Brooklyn", tag: "Wheat Paste", campaign: "nyc-fall-run" },
  { src: "/gallery/gerbil-podcast-wheat-paste-poster-install-night-silver-lake-los-angeles.webp", label: "Gerbil Podcast — Silver Lake Install", alt: "Installer smoothing a Gerbil podcast wheat paste poster onto a plywood wall at night in Silver Lake, Los Angeles", tag: "Wheat Paste", campaign: "gerbil-la" },

  // ── Asher Levine — Los Angeles ──
  // Fashion-week wheat-paste run for designer Asher Levine, Sept 11–12:
  // four-poster sets across Echo Park, the DTLA Fashion District, Fairfax,
  // Mid-Wilshire and East Hollywood. Faces blurred in the two pedestrian shots.
  { src: "/gallery/asher-levine-wheat-paste-posters-white-wall-echo-park-los-angeles.webp", label: "Asher Levine — Echo Park Wall", alt: "Four Asher Levine fashion campaign posters wheat-pasted in a row on a white sticker-covered wall in Echo Park, Los Angeles", tag: "Wheat Paste", campaign: "asher-levine" },
  { src: "/gallery/asher-levine-wheat-paste-poster-run-angle-echo-park-los-angeles.webp", label: "Asher Levine — Echo Park Angle", alt: "Angled view of the four-poster Asher Levine wheat paste run along a white wall in Echo Park, Los Angeles", tag: "Wheat Paste", campaign: "asher-levine" },
  { src: "/gallery/asher-levine-wheat-paste-posters-pedestrian-fashion-district-dtla.webp", label: "Asher Levine — Fashion District", alt: "Pedestrian walking past Asher Levine wheat paste posters on a weathered wall in the Fashion District, Downtown Los Angeles", tag: "Wheat Paste", campaign: "asher-levine" },
  { src: "/gallery/asher-levine-wheat-paste-four-poster-set-fairfax-los-angeles.webp", label: "Asher Levine — Four-Poster Set", alt: "Close view of the four Asher Levine campaign posters wheat-pasted side by side beneath concert flyers in the Fairfax District, Los Angeles", tag: "Wheat Paste", campaign: "asher-levine" },
  { src: "/gallery/asher-levine-wheat-paste-posters-corner-building-fairfax-los-angeles.webp", label: "Asher Levine — Corner Building", alt: "Street view of Asher Levine wheat paste posters on the corner of a tan building in the Fairfax District, Los Angeles", tag: "Wheat Paste", campaign: "asher-levine" },
  { src: "/gallery/asher-levine-wheat-paste-posters-couple-walking-mid-wilshire-los-angeles.webp", label: "Asher Levine — Mid-Wilshire", alt: "Couple walking past Asher Levine wheat paste posters on a sunlit stucco wall in Mid-Wilshire, Los Angeles", tag: "Wheat Paste", campaign: "asher-levine" },
  { src: "/gallery/asher-levine-wheat-paste-posters-plywood-wall-east-hollywood.webp", label: "Asher Levine — Plywood Wall", alt: "Asher Levine wheat paste posters on a plywood-boarded wall at golden hour in East Hollywood, Los Angeles", tag: "Wheat Paste", campaign: "asher-levine" },
  { src: "/gallery/asher-levine-wheat-paste-posters-black-barricade-golden-hour-hollywood.webp", label: "Asher Levine — Hollywood Barricade", alt: "Four Asher Levine campaign posters wheat-pasted on a black construction barricade at dusk on Hollywood Boulevard, East Hollywood", tag: "Wheat Paste", campaign: "asher-levine" },

  // ── Zach John King "I'm What You Get" — Downtown Nashville ──
  // Release-day wheat-paste run across downtown Nashville, August 28:
  // 100 posters across storefronts, plywood barricades, and greenspace walls.
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-grid-storefront-nashville.webp",      label: "Zach John King — Storefront Grid",   alt: "Sixteen-poster grid of Zach John King I'm What You Get wheat paste posters on a black storefront in downtown Nashville",                    tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-row-black-storefront-nashville.webp", label: "Zach John King — Nine-Poster Row",   alt: "Row of nine Zach John King I'm What You Get wheat paste posters below a storefront window in downtown Nashville",                           tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-posters-plywood-barricade-nashville.webp",   label: "Zach John King — Plywood Barricade", alt: "Zach John King I'm What You Get wheat paste posters on a plywood construction barricade in Nashville",                                      tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-grid-garage-door-nashville.webp",     label: "Zach John King — Garage Door Grid",  alt: "Twelve Zach John King I'm What You Get posters wheat-pasted in a grid on a gray garage door in Nashville",                                  tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-posters-brick-wall-nashville.webp",          label: "Zach John King — Brick Wall Run",    alt: "Six Zach John King I'm What You Get wheat paste posters in a row on a weathered brick wall in Nashville",                                   tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-posters-plywood-wall-nashville.webp",        label: "Zach John King — Plywood Wall",      alt: "Six-poster block of Zach John King I'm What You Get wheat paste posters on a plywood wall in Nashville",                                    tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-street-corner-pedestrians-nashville.webp",   label: "Zach John King — Street Corner",     alt: "Pedestrians walking past Zach John King I'm What You Get wheat paste posters on a downtown Nashville street corner",                        tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-pedestrian-walking-nashville.webp",          label: "Zach John King — Pedestrian View",   alt: "Pedestrian walking past a six-poster grid of Zach John King I'm What You Get wheat paste posters in downtown Nashville",                    tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-wall-greenspace-nashville.webp",      label: "Zach John King — Greenspace Wall",   alt: "Freestanding wall of eight Zach John King I'm What You Get wheat paste posters on a grassy Nashville greenspace",                           tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-concrete-wall-park-nashville.webp",          label: "Zach John King — Park Wall",         alt: "Zach John King I'm What You Get wheat paste posters wrapping a concrete wall beside trees in a Nashville park",                             tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-wall-street-view-nashville.webp",            label: "Zach John King — Street View",       alt: "Street view of a Zach John King I'm What You Get wheat paste poster wall behind parked cars in Nashville",                                  tag: "Wheat Paste", campaign: "zjk-nashville" },
  { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-posters-white-brick-nashville.webp",         label: "Zach John King — White Brick Wall",  alt: "Four Zach John King I'm What You Get wheat paste posters on a white brick wall in Nashville",                                               tag: "Wheat Paste", campaign: "zjk-nashville" },

  // ── Arsenal Boxing "Step Into The Ring" — Hollywood, Los Angeles ──
  // Large-format 48"x72" wheat-paste posters for Arsenal Boxing School & Gym
  // (5750 Hollywood Blvd): membership poster + "Eat / Train / Live Like a
  // Champion" info poster, pasted as pairs across Hollywood walls, July 25.
  { src: "/gallery/arsenal-boxing-48x72-wheat-paste-posters-hollywood-los-angeles.webp",   label: "Arsenal Boxing — 48″×72″ Poster Pair", alt: "Arsenal Boxing School & Gym 48x72 inch wheat paste posters — Step Into The Ring membership poster beside an Eat Like a Champion info poster — in Hollywood, Los Angeles", tag: "Wheat Paste", campaign: "arsenal-boxing" },
  { src: "/gallery/arsenal-boxing-wheat-paste-posters-plywood-wall-hollywood.webp",        label: "Arsenal Boxing — Plywood Wall",                       alt: "Arsenal Boxing large-format wheat paste posters on a plywood construction barrier beside graffiti in Hollywood, Los Angeles",                                            tag: "Wheat Paste", campaign: "arsenal-boxing" },
  { src: "/gallery/arsenal-boxing-wheat-paste-poster-wall-street-view-los-angeles.webp",   label: "Arsenal Boxing — Street View",                        alt: "Street view of Arsenal Boxing 48x72 inch wheat paste posters on a roadside wall below an ivy-covered embankment in Los Angeles",                                         tag: "Wheat Paste", aspect: "portrait", campaign: "arsenal-boxing" },
  { src: "/gallery/arsenal-boxing-step-into-the-ring-poster-scaffold-hollywood.webp",      label: "Arsenal Boxing — Scaffold Install",                   alt: "Arsenal Boxing Step Into The Ring wheat paste poster under red scaffolding in Hollywood, Los Angeles",                                                                    tag: "Wheat Paste", aspect: "portrait", campaign: "arsenal-boxing" },

  // ── Werner Bronkhorst "Come and See My Big Balls" — Melrose, Los Angeles ──
  // Gallery-show teaser for the artist's July 9–12 exhibition at 8175 Melrose Ave:
  // green chalk-spray sidewalk stencils across Melrose + North Highland.
  { src: "/gallery/werner-bronkhorst-big-balls-chalk-stencil-melrose-avenue-los-angeles.webp",  label: "Werner Bronkhorst — Melrose Stencil",  alt: "Come and See My Big Balls green chalk-spray sidewalk stencil for artist Werner Bronkhorst's 8175 Melrose Avenue show, on Melrose at night", tag: "Stencil", campaign: "werner-bronkhorst" },
  { src: "/gallery/werner-bronkhorst-big-balls-chalk-stencil-north-highland-los-angeles.webp",  label: "Werner Bronkhorst — Highland Stencil", alt: "Come and See My Big Balls green chalk-spray sidewalk stencil for artist Werner Bronkhorst on North Highland Avenue in Los Angeles",         tag: "Stencil", campaign: "werner-bronkhorst" },

  // ── Luke Borchelt "The Water Town Tour" — Ocean City, MD (latest job) ──
  // Tour-poster wheat-paste run along Coastal Highway underpasses, July 1.
  { src: "/gallery/ocean-city-wheat-paste-luke-borchelt-water-town-tour-overpass.webp", label: "Luke Borchelt — Tour Dates",   alt: "Grids of Luke Borchelt Water Town Tour posters wheat-pasted on a concrete overpass wall below a Speed Limit 35 sign at night in Ocean City, Maryland", tag: "Wheat Paste", campaign: "borchelt-ocean-city" },
  { src: "/gallery/ocean-city-wheat-paste-luke-borchelt-tour-poster-wall.webp",         label: "Luke Borchelt — Tour Dates",   alt: "A ten-poster wall of Luke Borchelt Water Town Tour flyers wheat-pasted on a concrete underpass wall in Ocean City, Maryland", tag: "Wheat Paste", campaign: "borchelt-ocean-city" },

  // ── Luke Borchelt "Water Town" / MDDN Records — Nashville (latest job) ──
  // Music-release campaign across downtown Nashville: 40 chalk-spray sidewalk
  // stencils + 40 sticker snipes, June 25–26. All portrait phone captures.
  { src: "/gallery/luke-borchelt-water-town-sticker-snipe-bridgestone-arena-nashville.webp", label: "Luke Borchelt — Bridgestone Snipe",     alt: "Water Town by Luke Borchelt sticker snipe on a pole by Bridgestone Arena with a crowd crossing in downtown Nashville",      tag: "Sticker", aspect: "portrait", campaign: "borchelt-nashville" },
  { src: "/gallery/luke-borchelt-water-town-sticker-snipe-riverboats-nashville.webp",        label: "Luke Borchelt — Riverboats Snipe",      alt: "Water Town by Luke Borchelt sticker snipe on a downtown Nashville pole with a red Nashville Riverboats trolley behind",      tag: "Sticker", aspect: "portrait", campaign: "borchelt-nashville" },
  { src: "/gallery/luke-borchelt-water-town-chalk-stencil-sidewalk-nashville.webp",          label: "Luke Borchelt — Sidewalk Stencil",      alt: "Water Town by Luke Borchelt chalk-spray sidewalk stencil between two Spin share bikes in downtown Nashville",               tag: "Stencil", aspect: "portrait", campaign: "borchelt-nashville" },
  { src: "/gallery/luke-borchelt-water-town-chalk-stencil-trash-can-nashville.webp",         label: "Luke Borchelt — Stencil in Nashville, TN",   alt: "Water Town by Luke Borchelt chalk-spray sidewalk stencil beside a downtown Nashville trash can",                            tag: "Stencil", aspect: "portrait", campaign: "borchelt-nashville" },

  // ── Biodance "Hydrogel Splash" / "We Are Making A Splash" — Los Angeles (latest job) ──
  // Multi-surface LA campaign: wheat paste poster walls (The Grove launch, May 30–31),
  // die-cut stickers (wall + pole), and pink chalk-spray sidewalk stencils.
  // Lead the gallery newest-first. Only the wall-sticker close-up is portrait.
  { src: "/gallery/biodance-hydrogel-splash-wheat-paste-wall-los-angeles.webp",        label: "Biodance — Wheat Paste Wall",           alt: "Biodance \"We Are Making A Splash\" wheat paste poster wall in Los Angeles with palm trees and street fire hydrant",   tag: "Wheat Paste" , campaign: "biodance" },
  { src: "/gallery/biodance-making-a-splash-poster-wall-the-grove-los-angeles.webp",   label: "Biodance — The Grove Poster Wall",      alt: "Biodance \"We Are Making A Splash\" The Grove launch wheat paste poster wall Los Angeles street advertising",          tag: "Wheat Paste" , campaign: "biodance" },
  { src: "/gallery/biodance-making-a-splash-wheat-paste-scaffold-wall-los-angeles.webp",         label: "Biodance — Scaffold Wall",          alt: "Biodance \"We Are Making A Splash\" wheat paste poster wall under scaffolding in Los Angeles",                          tag: "Wheat Paste", aspect: "portrait", campaign: "biodance" },
  { src: "/gallery/biodance-making-a-splash-wheat-paste-underpass-wall-los-angeles.webp",        label: "Biodance — Underpass Wall",         alt: "Biodance \"We Are Making A Splash\" wheat paste poster wall under a Los Angeles underpass beside Karl Lagerfeld posters", tag: "Wheat Paste", aspect: "portrait", campaign: "biodance" },
  { src: "/gallery/biodance-making-a-splash-wheat-paste-plywood-wall-los-angeles.webp",          label: "Biodance — Plywood Barrier",        alt: "Biodance \"We Are Making A Splash\" wheat paste posters on a plywood construction barrier in Los Angeles",              tag: "Wheat Paste", aspect: "portrait", campaign: "biodance" },
  { src: "/gallery/biodance-making-a-splash-wheat-paste-install-documentation-los-angeles.webp", label: "Biodance — Install Documentation",  alt: "Photographer documenting a Biodance \"We Are Making A Splash\" wheat paste poster wall in Los Angeles",                  tag: "Wheat Paste", aspect: "portrait", campaign: "biodance" },
  { src: "/gallery/biodance-making-a-splash-wheat-paste-storefront-night-los-angeles.webp",      label: "Biodance — Storefront at Night",    alt: "Biodance \"We Are Making A Splash\" wheat paste posters on a storefront wall at night in Los Angeles beside graffiti",   tag: "Wheat Paste", aspect: "portrait", campaign: "biodance" },
  { src: "/gallery/biodance-hydrogel-splash-sticker-wall-los-angeles.webp",            label: "Biodance — Hydrogel Splash Sticker",    alt: "Biodance Hydrogel Splash die-cut sticker on painted street wall Los Angeles guerrilla marketing campaign",             tag: "Sticker", aspect: "portrait", campaign: "biodance" },
  { src: "/gallery/biodance-hydrogel-splash-sticker-pole-night-los-angeles.webp",      label: "Biodance — Night Pole Sticker",         alt: "Biodance Hydrogel Splash sticker on street pole at night Los Angeles guerrilla advertising",                          tag: "Sticker"     , campaign: "biodance" },
  { src: "/gallery/biodance-glow-on-the-go-chalk-stencil-sidewalk-los-angeles.webp",   label: "Biodance — Glow On The Go Stencil",     alt: "Biodance \"Glow On The Go This Way\" pink chalk spray stencil on sidewalk Los Angeles guerrilla marketing",            tag: "Stencil"     , campaign: "biodance" },
  { src: "/gallery/biodance-glow-on-the-go-chalk-stencil-street-los-angeles.webp",     label: "Biodance — Sidewalk Chalk Stencil",     alt: "Biodance \"Glow On The Go This Way\" chalk spray sidewalk stencil with directional arrow Los Angeles street marketing", tag: "Stencil"     , campaign: "biodance" },

  { src: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp",          label: "FashionPass — Campaign Wall",           alt: "FashionPass wheat paste campaign poster wall on Melrose Avenue",                                         tag: "Wheat Paste" , campaign: "fashionpass" },
  { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",               label: "FIFA World Cup — Gallery Wall",          alt: "FIFA World Cup wheat paste poster wall gallery wide view Atlanta street advertising",                   tag: "Wheat Paste" , campaign: "fifa-atlanta" },
  { src: "/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp", label: "FashionPass — Melrose Poster Wall",   alt: "FashionPass wheat paste poster wall — Melrose Avenue street postering campaign",                         tag: "Wheat Paste" , campaign: "fashionpass" },
  { src: "/gallery/fifa-world-cup-atlanta-wall-installation.webp",              label: "FIFA Atlanta — Wall Installation",       alt: "FIFA World Cup Atlanta wall installation wheat paste posters guerrilla advertising",                    tag: "Wheat Paste" , campaign: "fifa-atlanta" },
  { src: "/gallery/dont-fall-off-wheat-paste-wall-closeup.webp",                label: "Don't Fall Off — Wall Close-Up",         alt: "Don't Fall Off music wheat paste poster wall close-up guerrilla advertising campaign",                  tag: "Wheat Paste" , campaign: "dont-fall-off" },
  { src: "/gallery/fifa-world-cup-poster-wall-angle-view.webp",                 label: "FIFA Posters — Angle View",              alt: "FIFA World Cup poster wall angle view wheat paste street postering advertising campaign",               tag: "Wheat Paste"     , campaign: "fifa-atlanta" },
  { src: "/gallery/fashionpass-wheat-paste-street-art-wall-la.webp",            label: "FashionPass — Wide Format Paste",        alt: "FashionPass wide format wheat paste wall — Melrose / Fairfax corridor street art poster campaign",      tag: "Wheat Paste" , campaign: "fashionpass" },
  { src: "/gallery/dont-fall-off-wheat-paste-street-view-la.webp",              label: "Don't Fall Off — Silver Lake Street",    alt: "Don't Fall Off wheat paste poster wall installation — Silver Lake street view",                          tag: "Wheat Paste" , campaign: "dont-fall-off" },
  { src: "/gallery/fifa-world-cup-wheat-paste-posters-closeup.webp",            label: "FIFA Posters — Close Up",                alt: "FIFA World Cup wheat paste posters close-up street postering campaign",                                 tag: "Wheat Paste"     , campaign: "fifa-atlanta" },
  { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",     label: "Incrediwear — Night Pole Wrap",          alt: "Incrediwear pole wrap guerrilla advertising at night urban street marketing",                           tag: "Sticker"     , campaign: "incrediwear" },
  { src: "/gallery/incrediwear-qr-sticker-pole-night-palm-boulevard.webp",      label: "Incrediwear — Palm Boulevard Snipe",     alt: "Incrediwear QR sticker on a pole at night beside a palm-lined boulevard guerrilla advertising",         tag: "Sticker", aspect: "portrait", campaign: "incrediwear" },
  { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",      label: "Calvin Priice — Chalk Stencil",          alt: "Calvin Priice chalk spray stencil sidewalk guerrilla marketing campaign",                              tag: "Stencil"     , campaign: "calvin-priice" },
  { src: "/gallery/black-pearl-la-chalk-spray-stencil-sidewalk.webp",           label: "Black Pearl LA — Chalk Stencil",         alt: "Black Pearl Los Angeles chalk spray stencil marketing on sidewalk with custom stencil template",        tag: "Stencil"     , campaign: "black-pearl" },
  { src: "/gallery/fifa-world-cup-poster-wall-street-perspective.webp",         label: "FIFA Posters — Street Perspective",      alt: "FIFA World Cup poster wall street perspective street postering advertising campaign",                   tag: "Wheat Paste"     , campaign: "fifa-atlanta" },
  { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",             label: "Don't Fall Off — Urban Wall",            alt: "Don't Fall Off wheat paste posters on urban wall with pink accent guerrilla marketing",                 tag: "Wheat Paste" , campaign: "dont-fall-off" },
  { src: "/gallery/fifa-world-cup-poster-installation-closeup.webp",            label: "FIFA World Cup — Installation",          alt: "FIFA World Cup poster installation close-up wheat paste street postering",                              tag: "Wheat Paste"     , campaign: "fifa-atlanta" },
  { src: "/gallery/street-pole-sticker-campaign-urban-advertising.webp",        label: "Calvin Priice — Sticker Campaign",       alt: "Calvin Priice street pole sticker campaign urban advertising guerrilla marketing",                      tag: "Sticker"     , campaign: "calvin-priice" },
  { src: "/gallery/black-pearl-la-stencil-template-grass.webp",                 label: "Black Pearl LA — Stencil Template",      alt: "Custom chalk spray stencil template for Black Pearl Los Angeles guerrilla marketing campaign",          tag: "Stencil"     , campaign: "black-pearl" },
  { src: "/gallery/fifa-world-cup-street-gallery-pedestrian-viewing.webp",      label: "FIFA — Street Gallery View",             alt: "FIFA World Cup street gallery pedestrian viewing wheat paste street postering",                         tag: "Wheat Paste"     , campaign: "fifa-atlanta" },
  { src: "/gallery/dont-fall-off-wheat-paste-pedestrian-street-art.webp",       label: "Don't Fall Off — Pedestrian View",       alt: "Pedestrian walking past Don't Fall Off wheat paste poster wall street art installation",                tag: "Wheat Paste" , campaign: "dont-fall-off" },
  { src: "/gallery/sticker-campaign-street-intersection-urban.webp",            label: "Sticker Campaign — Intersection",        alt: "Sticker campaign street intersection urban advertising guerrilla marketing",                            tag: "Sticker"     , campaign: "craft" },
  { src: "/gallery/custom-stencil-template-cut-out-design.webp",                label: "Custom Stencil Template",                alt: "Custom stencil template cut-out design for chalk spray guerrilla marketing campaigns",                  tag: "Stencil"     , campaign: "craft" },
  { src: "/gallery/dont-fall-off-wheat-paste-building-bike-rack.webp",          label: "Don't Fall Off — Building Perspective",  alt: "Don't Fall Off wheat paste campaign building wall installation street perspective with bike rack",       tag: "Wheat Paste" , campaign: "dont-fall-off" },

  // ── FIFA World Cup 26 — Pioneer Square, Seattle (install documentation) ──
  // Vertical crew-at-work captures; `aspect: "portrait"` for 3:4 thumbnails.
  { src: "/gallery/fifa-world-cup-wheat-paste-install-pioneer-square-seattle.webp",         label: "FIFA Seattle — Install",                alt: "Phantom Pasting installer brushing a FIFA World Cup 26 wheat paste poster smooth at Pioneer Square, Seattle",    tag: "Wheat Paste", aspect: "portrait", campaign: "fifa-seattle" },
  { src: "/gallery/fifa-world-cup-poster-positioning-barricade-pioneer-square-seattle.webp", label: "FIFA Seattle — Positioning",           alt: "Installer positioning a FIFA World Cup 26 poster on a construction barricade at Pioneer Square, Seattle",        tag: "Wheat Paste", aspect: "portrait", campaign: "fifa-seattle" },
  { src: "/gallery/wheat-paste-install-rain-pioneer-square-seattle.webp",                   label: "FIFA Seattle — Rain Install",           alt: "Phantom Pasting crew carrying FIFA World Cup posters through the rain at Pioneer Square, Seattle",               tag: "Wheat Paste", aspect: "portrait", campaign: "fifa-seattle" },

  // ── Post-Campaign Cleanup — Wheat Paste Wall, Los Angeles ────────────────
  { src: "/gallery/wheat-paste-crew-power-washing-wall-los-angeles.webp",               label: "Post-Campaign — Power Washing",         alt: "Wheat paste crew power washing and cleaning wall after campaign removal Los Angeles",                           tag: "Wheat Paste", aspect: "portrait", campaign: "wall-care" },
  { src: "/gallery/wheat-paste-installer-scraping-old-posters-los-angeles.webp",        label: "Post-Campaign — Poster Removal",        alt: "Wheat paste installer scraping and removing old posters from wall Los Angeles post-campaign cleanup",            tag: "Wheat Paste", aspect: "portrait", campaign: "wall-care" },
  { src: "/gallery/wheat-paste-wall-blank-before-install-los-angeles.webp",             label: "Post-Campaign — Clean Wall",            alt: "Clean blank wheat paste wall after full post-campaign removal Los Angeles",                                      tag: "Wheat Paste", aspect: "portrait", campaign: "wall-care" },
  { src: "/gallery/wheat-paste-wall-location-street-corner-los-angeles.webp",           label: "Campaign Wall — Street Corner LA",      alt: "Wheat paste campaign wall location street corner Los Angeles palm trees",                                       tag: "Wheat Paste", aspect: "portrait", campaign: "wall-care" },
  { src: "/gallery/wheat-paste-wall-location-los-angeles-wide.webp",                    label: "Campaign Wall — Wide View LA",          alt: "Wheat paste campaign wall location wide street view Los Angeles",                                               tag: "Wheat Paste", aspect: "portrait", campaign: "wall-care" },

  // ── Vaura Pilates — Chalk Spray Stencil, Austin TX ──────────────────────
  { src: "/gallery/vaura-pilates-chalk-stencil-sidewalk-austin-texas.webp",             label: "Vaura Pilates — Chalk Stencil Austin",  alt: "Vaura Pilates chalk spray stencil on sidewalk concrete Austin Texas guerrilla marketing",                      tag: "Stencil",     aspect: "portrait", campaign: "vaura-pilates" },
  { src: "/gallery/vaura-pilates-chalk-spray-stencil-sidewalk-street-view-austin.webp", label: "Vaura Pilates — Street View Stencil",   alt: "Vaura Pilates chalk stencil on sidewalk street aerial view Austin Texas guerrilla marketing",                  tag: "Stencil",     aspect: "portrait", campaign: "vaura-pilates" },
  { src: "/gallery/vaura-pilates-sidewalk-chalk-stencil-guerrilla-marketing-austin.webp", label: "Vaura Pilates — Sidewalk Stencil",    alt: "Vaura Pilates sidewalk chalk stencil guerrilla marketing campaign Austin Texas",                               tag: "Stencil",     aspect: "portrait", campaign: "vaura-pilates" },

  // Moved to the end of the slider per art direction (still featured on /services/snipes + full-impact).
  { src: "/gallery/calvin-priice-sticker-pole-install-gas-station-los-angeles.webp",     label: "Calvin Priice — Pole Install",          alt: "Phantom Pasting crew installing a Calvin Priice QR sticker on a pole at a Los Angeles gas station",            tag: "Sticker",     aspect: "portrait", campaign: "calvin-priice" },

  // ── Street Flyering — windshield flyers + handbilling, Los Angeles (added at end of list) ──
  { src: "/gallery/street-flyering-windshield-flyer-closeup-los-angeles.webp",            label: "Street Flyering — Windshield Flyer",    alt: "Phantom Pasting flyer placed under a windshield wiper on a parked car in Los Angeles",                         tag: "Flyering",    aspect: "portrait", campaign: "street-flyering" },
  { src: "/gallery/street-flyering-windshield-flyer-parked-cars-los-angeles.webp",        label: "Street Flyering — Street Run",          alt: "Phantom Pasting windshield flyers on a row of parked cars along a Los Angeles street",                         tag: "Flyering",    aspect: "portrait", campaign: "street-flyering" },
  { src: "/gallery/street-flyering-windshield-flyer-tan-car-los-angeles.webp",            label: "Street Flyering — Windshield Flyer",    alt: "Phantom Pasting flyer under the wiper of a parked car in a Los Angeles lot",                                   tag: "Flyering",    aspect: "portrait", campaign: "street-flyering" },
  { src: "/gallery/street-flyering-windshield-flyer-parking-lot-sunset-los-angeles.webp", label: "Street Flyering — Parking Lot",         alt: "Phantom Pasting windshield flyer on a car in a Los Angeles parking lot at sunset",                             tag: "Flyering",    aspect: "portrait", campaign: "street-flyering" },
] as const;

export type GalleryImg = typeof GALLERY_IMGS[number];

/**
 * Campaign groups for the /gallery "by campaign" view. Every GALLERY_IMGS
 * entry carries a `campaign` id that must exist here. Display order follows
 * each campaign's first appearance in GALLERY_IMGS (newest first), so a new
 * job only needs its photos at the top of the list plus one entry below.
 */
export const GALLERY_CAMPAIGNS: Record<string, { name: string; place: string; when?: string; href?: string }> = {
  "helix":               { name: "Nokia Bell Labs at The Helix",       place: "New Brunswick, NJ",          when: "Oct 2026", href: "/work/nokia-bell-labs-helix-new-jersey" },
  "playback":            { name: "Playback: The Brooklyn Watch Party", place: "Brooklyn, NY",               when: "Oct 2026" },
  "nyc-fall-run":        { name: "NYC Fall Run",                       place: "Manhattan + Brooklyn, NY",   when: "Sept–Oct 2026" },
  "gerbil-la":           { name: "Gerbil Podcast",                     place: "Silver Lake, Los Angeles",   when: "Sept 2026" },
  "asher-levine":        { name: "Asher Levine",                       place: "Los Angeles",                when: "Sept 2026" },
  "zjk-nashville":       { name: "Zach John King: I'm What You Get",   place: "Downtown Nashville, TN",     when: "Aug 2026" },
  "arsenal-boxing":      { name: "Arsenal Boxing: Step Into The Ring", place: "Hollywood, Los Angeles",     when: "Jul 2026" },
  "werner-bronkhorst":   { name: "Werner Bronkhorst",                  place: "Melrose, Los Angeles",       when: "Jul 2026" },
  "borchelt-ocean-city": { name: "Luke Borchelt: The Water Town Tour", place: "Ocean City, MD",             when: "Jul 2026" },
  "borchelt-nashville":  { name: "Luke Borchelt: Water Town",          place: "Nashville, TN",              when: "Jun 2026" },
  "biodance":            { name: "Biodance",                           place: "Los Angeles",                when: "May 2026", href: "/work/biodance-los-angeles" },
  "fashionpass":         { name: "FashionPass",                        place: "Los Angeles",                href: "/work/fashionpass-los-angeles" },
  "fifa-atlanta":        { name: "FIFA World Cup",                     place: "Atlanta, GA",                href: "/work/fifa-world-cup-atlanta" },
  "dont-fall-off":       { name: "Don't Fall Off",                     place: "Los Angeles" },
  "incrediwear":         { name: "Incrediwear",                        place: "Street campaign",            href: "/work/incrediwear-street-campaign" },
  "calvin-priice":       { name: "Calvin Priice",                      place: "Stencils + stickers" },
  "black-pearl":         { name: "Black Pearl LA",                     place: "Los Angeles" },
  "craft":               { name: "Stickers + Stencil Craft",           place: "Studio + street" },
  "fifa-seattle":        { name: "FIFA World Cup 26",                  place: "Pioneer Square, Seattle" },
  "wall-care":           { name: "Wall Prep + Cleanup",                place: "Los Angeles" },
  "vaura-pilates":       { name: "Vaura Pilates",                      place: "Austin, TX" },
  "street-flyering":     { name: "Street Flyering",                    place: "Los Angeles" },
};
