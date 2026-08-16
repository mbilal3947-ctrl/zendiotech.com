const fs = require("fs");
const path = require("path");

const root = __dirname;

const pages = [
    "index.html",
    "about.html",
    "services.html",
    "industries.html",
    "how-we-work.html",
    "roadmap.html",
    "contact.html"
];

let passed = 0;
let warnings = 0;
let failed = 0;

function pass(message) {
    console.log(`PASS  ${message}`);
    passed++;
}

function warn(message) {
    console.log(`WARN  ${message}`);
    warnings++;
}

function fail(message) {
    console.log(`FAIL  ${message}`);
    failed++;
}

function readFile(relativePath) {
    const fullPath = path.join(root, relativePath);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    return fs.readFileSync(fullPath, "utf8");
}

function resolveLocalReference(page, reference) {
    if (!reference) return null;

    reference = reference.trim();

    // Ignore external / special URLs
    if (
        reference.startsWith("http://") ||
        reference.startsWith("https://") ||
        reference.startsWith("//") ||
        reference.startsWith("mailto:") ||
        reference.startsWith("tel:") ||
        reference.startsWith("javascript:") ||
        reference.startsWith("#") ||
        reference.startsWith("data:")
    ) {
        return null;
    }

    const cleanReference = reference.split("#")[0].split("?")[0];

    if (!cleanReference) return null;

    return path.normalize(
        path.join(path.dirname(path.join(root, page)), cleanReference)
    );
}

console.log("\n==============================================");
console.log(" ZENDIOTECH DEEP WEBSITE QA");
console.log("==============================================\n");

console.log("This test is READ-ONLY.");
console.log("No website files will be modified.\n");

for (const page of pages) {
    console.log("\n----------------------------------------------");
    console.log(` CHECKING: ${page}`);
    console.log("----------------------------------------------\n");

    const html = readFile(page);

    if (!html) {
        fail(`${page} - file missing`);
        continue;
    }

    /* ------------------------------------------
       1. LOCAL LINK CHECK
    ------------------------------------------ */

    const hrefMatches = [
        ...html.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)
    ];

    for (const match of hrefMatches) {
        const href = match[1].trim();

        if (!href) {
            warn(`${page} - empty href found`);
            continue;
        }

        if (
            href === "#" ||
            href.toLowerCase().startsWith("javascript:")
        ) {
            warn(`${page} - placeholder/action href: ${href}`);
            continue;
        }

        const resolved = resolveLocalReference(page, href);

        if (!resolved) {
            continue;
        }

        if (fs.existsSync(resolved)) {
            pass(`${page} - local link exists: ${href}`);
        } else {
            fail(`${page} - BROKEN local link: ${href}`);
        }
    }

    /* ------------------------------------------
       2. LOCAL ASSET CHECK
    ------------------------------------------ */

    const srcMatches = [
        ...html.matchAll(/\bsrc\s*=\s*["']([^"']+)["']/gi)
    ];

    for (const match of srcMatches) {
        const src = match[1].trim();

        const resolved = resolveLocalReference(page, src);

        if (!resolved) {
            continue;
        }

        if (fs.existsSync(resolved)) {
            pass(`${page} - local asset exists: ${src}`);
        } else {
            fail(`${page} - MISSING local asset: ${src}`);
        }
    }

    /* ------------------------------------------
       3. IMAGE ALT CHECK
    ------------------------------------------ */

    const images = [
        ...html.matchAll(/<img\b[\s\S]*?>/gi)
    ];

    for (const imageMatch of images) {
        const image = imageMatch[0];

        const altMatch = image.match(
            /\balt\s*=\s*["']([^"']*)["']/i
        );

        if (!altMatch) {
            fail(`${page} - image missing alt attribute`);
        } else {
            pass(`${page} - image has alt attribute`);
        }
    }

    /* ------------------------------------------
       4. EMPTY LINKS
    ------------------------------------------ */

    const anchors = [
        ...html.matchAll(/<a\b[\s\S]*?>/gi)
    ];

    for (const anchorMatch of anchors) {
        const anchor = anchorMatch[0];

        const hrefMatch = anchor.match(
            /\bhref\s*=\s*["']([^"']*)["']/i
        );

        if (!hrefMatch) {
            warn(`${page} - anchor without href`);
        }
    }

    /* ------------------------------------------
       5. PLACEHOLDER DOMAIN CHECK
    ------------------------------------------ */

const placeholderDomains = [
    "YOUR-DOMAIN.com",
    "your-domain.com"
];

const foundPlaceholderDomain = placeholderDomains.find(
    domain => html.includes(domain)
);

if (foundPlaceholderDomain) {
    warn(
        `${page} - placeholder domain ${foundPlaceholderDomain} still present`
    );
} else {
    pass(`${page} - no placeholder domain`);
}

    if (foundPlaceholderDomain) {
    warn(
        `${page} - placeholder domain ${foundPlaceholderDomain} still present`
        );
    } else {
    pass(`${page} - no placeholder domain`);
    }
    /* ------------------------------------------
       6. PLACEHOLDER TEXT CHECK
    ------------------------------------------ */

    const placeholders = [
    "TODO",
    "PLACEHOLDER",
    "YOUR EMAIL",
    "YOUR PHONE",
    "YOUR ADDRESS"
];

/*
 * Check only visible page text.
 * Ignore HTML attributes such as:
 *   placeholder="..."
 *   data-i18n="..."
 *   data-i18n-placeholder="..."
 * This prevents legitimate form/i18n keys from being
 * incorrectly reported as unfinished placeholder content.
 */
const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

for (const placeholder of placeholders) {
    if (
        visibleText
            .toUpperCase()
            .includes(placeholder.toUpperCase())
    ) {
        warn(
            `${page} - possible placeholder text: ${placeholder}`
        );
    }
}

    /* ---------------------------------------------
 * 7. CANONICAL CHECK
 * --------------------------------------------- */

const canonical = html.match(
    /<link[^>]*rel=["']canonical["'][^>]*>/i
);

if (!canonical) {
    warn(`${page} - canonical tag missing`);
} else {
    pass(`${page} - canonical tag present`);

    const canonicalHref = canonical[0].match(
        /href=["']([^"']+)["']/i
    );

    if (!canonicalHref) {
        warn(`${page} - canonical href missing`);
    } else {
        const canonicalUrl = canonicalHref[1].trim();

        /*
         * Zendiotech.com is the REAL production domain.
         * It must NOT be treated as a placeholder.
         */
        const expectedDomain = "https://zendiotech.com";

        if (canonicalUrl.startsWith(expectedDomain)) {
            pass(`${page} - canonical uses production domain`);
        } else {
            warn(
                `${page} - canonical does not use production domain: ${canonicalUrl}`
            );
        }
    }
}

    /* ------------------------------------------
       8. OPEN GRAPH CHECK
    ------------------------------------------ */

    const ogTitle = /property=["']og:title["']/i.test(html);
    const ogDescription =
        /property=["']og:description["']/i.test(html);
    const ogUrl = /property=["']og:url["']/i.test(html);

    if (ogTitle) {
        pass(`${page} - OG title present`);
    } else {
        warn(`${page} - OG title missing`);
    }

    if (ogDescription) {
        pass(`${page} - OG description present`);
    } else {
        warn(`${page} - OG description missing`);
    }

    if (ogUrl) {
        pass(`${page} - OG URL present`);
    } else {
        warn(`${page} - OG URL missing`);
    }

    /* ------------------------------------------
       9. TWITTER CARD CHECK
    ------------------------------------------ */

    if (
        /name=["']twitter:card["']/i.test(html)
    ) {
        pass(`${page} - Twitter card present`);
    } else {
        warn(`${page} - Twitter card missing`);
    }

    /* ------------------------------------------
       10. I18N CHECK
    ------------------------------------------ */

    const i18nKeys = [
        ...html.matchAll(
            /(?:data-i18n|data-i18n-placeholder|data-i18n-aria-label)\s*=\s*["']([^"']+)["']/gi
        )
    ].map(match => match[1]);

   const mainJs = readFile("js/main.js");

if (i18nKeys.length === 0) {
    warn(`${page} - no data-i18n attributes detected`);
} else if (mainJs) {

    // Extract JavaScript object keys from main.js.
    // Supports:
    // navHome: 'Home'
    // "navHome": 'Home'
    // 'navHome': 'Home'

    const translationKeySet = new Set();

    const translationKeyRegex =
        /^\s*(?:["']([A-Za-z_$][\w$]*)["']|([A-Za-z_$][\w$]*))\s*:/gm;

    let keyMatch;

    while ((keyMatch = translationKeyRegex.exec(mainJs)) !== null) {
        const detectedKey = keyMatch[1] || keyMatch[2];

        if (detectedKey) {
            translationKeySet.add(detectedKey);
        }
    }

    for (const key of i18nKeys) {

        if (translationKeySet.has(key)) {
            pass(`${page} - translation key exists: ${key}`);
        } else {
            fail(
                `${page} - missing translation key: ${key}`
            );
        }
    }
}
    /* ------------------------------------------
       11. FORM CHECK
    ------------------------------------------ */

    const forms = [
        ...html.matchAll(/<form\b[\s\S]*?<\/form>/gi)
    ];

    for (const formMatch of forms) {
        const form = formMatch[0];

        const actionMatch = form.match(
            /\baction\s*=\s*["']([^"']*)["']/i
        );

        const methodMatch = form.match(
            /\bmethod\s*=\s*["']([^"']*)["']/i
        );

        if (!actionMatch || !actionMatch[1].trim()) {
            warn(
                `${page} - form has no action/backend endpoint`
            );
        } else {
            pass(
                `${page} - form action present: ${actionMatch[1]}`
            );
        }

        if (methodMatch) {
            pass(
                `${page} - form method present: ${methodMatch[1]}`
            );
        } else {
            warn(`${page} - form method not specified`);
        }
    }

    /* ------------------------------------------
       12. CONTACT LINK CHECK
    ------------------------------------------ */

    const mailtoLinks = [
        ...html.matchAll(
            /href\s*=\s*["'](mailto:[^"']+)["']/gi
        )
    ];

    const telLinks = [
        ...html.matchAll(
            /href\s*=\s*["'](tel:[^"']+)["']/gi
        )
    ];

    if (mailtoLinks.length > 0) {
        pass(`${page} - email contact link present`);
    }

    if (telLinks.length > 0) {
        pass(`${page} - telephone contact link present`);
    }

    /* ------------------------------------------
       13. POLICY / LEGAL PAGE DETECTION
    ------------------------------------------ */

    const legalKeywords = [
        "privacy",
        "terms",
        "policy",
        "cookie"
    ];

    let legalLinkFound = false;

    for (const keyword of legalKeywords) {
        if (
            html.toLowerCase().includes(keyword)
        ) {
            legalLinkFound = true;
            break;
        }
    }

    if (legalLinkFound) {
        pass(`${page} - possible legal/policy reference found`);
    } else {
        warn(`${page} - no obvious legal/policy reference found`);
    }

    /* ------------------------------------------
       14. SCRIPT DEFER CHECK
    ------------------------------------------ */

    const scripts = [
        ...html.matchAll(/<script\b[\s\S]*?>/gi)
    ];

    for (const scriptMatch of scripts) {
        const script = scriptMatch[0];

        if (
            /src=["'][^"']*main\.js["']/i.test(script)
        ) {
            if (/\bdefer\b/i.test(script)) {
                pass(`${page} - main.js uses defer`);
            } else {
                warn(`${page} - main.js does not use defer`);
            }
        }
    }

    /* ------------------------------------------
       15. TITLE CONTENT CHECK
    ------------------------------------------ */

    const titleMatch = html.match(
        /<title>([\s\S]*?)<\/title>/i
    );

    if (titleMatch) {
        const title = titleMatch[1].trim();

        if (title.length >= 10) {
            pass(`${page} - title has meaningful content`);
        } else {
            warn(`${page} - title appears too short`);
        }
    }
}


/* ==============================================
   SHARED FILE CHECKS
============================================== */

console.log("\n==============================================");
console.log(" SHARED FILE DEEP CHECK");
console.log("==============================================\n");

const globalCss = readFile("css/global.css");
const responsiveCss = readFile("css/responsive.css");
const mainJs = readFile("js/main.js");

if (globalCss) {
    pass("global.css - readable");

    if (globalCss.includes(":root")) {
        pass("global.css - design tokens detected");
    } else {
        warn("global.css - :root design tokens not detected");
    }

    if (globalCss.includes("prefers-reduced-motion")) {
        pass("global.css - reduced motion support detected");
    } else {
        warn(
            "global.css - reduced motion support not detected"
        );
    }
} else {
    fail("global.css - cannot read");
}

if (responsiveCss) {
    pass("responsive.css - readable");

    const breakpoints = [
        "1100px",
        "820px",
        "560px"
    ];

    for (const breakpoint of breakpoints) {
        if (responsiveCss.includes(breakpoint)) {
            pass(
                `responsive.css - ${breakpoint} breakpoint detected`
            );
        } else {
            warn(
                `responsive.css - ${breakpoint} breakpoint not detected`
            );
        }
    }
} else {
    fail("responsive.css - cannot read");
}

if (mainJs) {
    pass("main.js - readable");

    if (mainJs.includes("LanguageModule")) {
        pass("main.js - LanguageModule detected");
    } else {
        warn("main.js - LanguageModule not detected");
    }

    if (mainJs.includes("NavigationModule")) {
        pass("main.js - NavigationModule detected");
    } else {
        warn("main.js - NavigationModule not detected");
    }

    if (mainJs.includes("prefers-reduced-motion")) {
        pass("main.js - reduced motion handling detected");
    } else {
        warn(
            "main.js - reduced motion handling not detected"
        );
    }

    if (mainJs.includes("IntersectionObserver")) {
        pass("main.js - IntersectionObserver detected");
    } else {
        warn(
            "main.js - IntersectionObserver not detected"
        );
    }
} else {
    fail("main.js - cannot read");
}


/* ==============================================
   LEGAL PAGE FILE CHECK
============================================== */

console.log("\n==============================================");
console.log(" LEGAL / POLICY PAGE CHECK");
console.log("==============================================\n");

const legalPages = [
    "privacy.html",
    "terms.html",
    "cookie-policy.html"
];

for (const legalPage of legalPages) {
    if (fs.existsSync(path.join(root, legalPage))) {
        pass(`${legalPage} - exists`);
    } else {
        warn(`${legalPage} - not present`);
    }
}


/* ==============================================
   FINAL SUMMARY
============================================== */

console.log("\n==============================================");
console.log(" DEEP QA SUMMARY");
console.log("==============================================\n");

console.log(`PASS:     ${passed}`);
console.log(`WARNINGS: ${warnings}`);
console.log(`FAIL:     ${failed}`);

if (failed === 0 && warnings === 0) {
    console.log(
        "\nRESULT: DEEP QA PASSED WITH NO WARNINGS"
    );
} else if (failed === 0) {
    console.log(
        "\nRESULT: NO HARD FAILURES — REVIEW WARNINGS"
    );
} else {
    console.log(
        "\nRESULT: FAILURES FOUND — DO NOT DEPLOY YET"
    );
}

console.log("\n==============================================\n");