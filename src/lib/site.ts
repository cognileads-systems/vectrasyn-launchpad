/** Public identity of the VectraSyn site. Apex domain is primary; www redirects to it. */
export const SITE_URL = "https://vectrasyn.com";

export const CAL_URL = "https://cal.com/vectrasyn/consultation";
export const FACEBOOK_URL = "https://www.facebook.com/vectrasyn";
export const INSTAGRAM_URL = "https://www.instagram.com/vectrasyngroup";
// LinkedIn and WhatsApp are intentionally absent until the real URLs exist.

/** Absolute URL for a site path, e.g. abs("/pricing") -> https://vectrasyn.com/pricing */
export function abs(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
