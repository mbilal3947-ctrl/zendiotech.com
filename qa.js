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
let failed = 0;

function pass(message) {
    console.log(`PASS  ${message}`);
    passed++;
}

function fail(message) {
    console.log(`FAIL  ${message}`);
    failed++;
}

console.log("\n========================================");
console.log(" ZENDIOTECH WEBSITE QA");
console.log("========================================\n");

for (const page of pages) {
    const file = path.join(root, page);

    if (!fs.existsSync(file)) {
        fail(`${page} - file missing`);
        continue;
    }

    const html = fs.readFileSync(file, "utf8");

    pass(`${page} - file exists`);

    // Basic HTML structure
    if (/<!DOCTYPE html>/i.test(html)) {
        pass(`${page} - DOCTYPE present`);
    } else {
        fail(`${page} - DOCTYPE missing`);
    }

    if (/<html\b/i.test(html)) {
        pass(`${page} - html element present`);
    } else {
        fail(`${page} - html element missing`);
    }

    if (/<head\b/i.test(html) && /<\/head>/i.test(html)) {
        pass(`${page} - head section present`);
    } else {
        fail(`${page} - head section incomplete`);
    }

    if (/<body\b/i.test(html) && /<\/body>/i.test(html)) {
        pass(`${page} - body section present`);
    } else {
        fail(`${page} - body section incomplete`);
    }

    // Title
    if (/<title>[\s\S]*?<\/title>/i.test(html)) {
        pass(`${page} - title present`);
    } else {
        fail(`${page} - title missing`);
    }

    // Description
    if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
        pass(`${page} - meta description present`);
    } else {
        fail(`${page} - meta description missing`);
    }

    // CSS
    if (/css\/global\.css/i.test(html)) {
        pass(`${page} - global.css linked`);
    } else {
        fail(`${page} - global.css not linked`);
    }

    if (/css\/responsive\.css/i.test(html)) {
        pass(`${page} - responsive.css linked`);
    } else {
        fail(`${page} - responsive.css not linked`);
    }

    // JavaScript
    if (/js\/main\.js/i.test(html)) {
        pass(`${page} - main.js linked`);
    } else {
        fail(`${page} - main.js not linked`);
    }

    // H1 count
    const h1Count = (html.match(/<h1\b/gi) || []).length;

    if (h1Count === 1) {
        pass(`${page} - exactly one H1`);
    } else {
        fail(`${page} - H1 count is ${h1Count}`);
    }

    // Language attributes
    if (/<html[^>]*\blang=["'][^"']+["']/i.test(html)) {
        pass(`${page} - lang attribute present`);
    } else {
        fail(`${page} - lang attribute missing`);
    }

    if (/<html[^>]*\bdir=["'][^"']+["']/i.test(html)) {
        pass(`${page} - dir attribute present`);
    } else {
        fail(`${page} - dir attribute missing`);
    }

    // Navigation
    const requiredPages = [
        "index.html",
        "about.html",
        "services.html",
        "industries.html",
        "how-we-work.html",
        "roadmap.html",
        "contact.html"
    ];

    for (const target of requiredPages) {
        if (html.includes(`href="${target}"`)) {
            pass(`${page} - navigation link ${target}`);
        }
    }

    // Duplicate IDs
    const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)]
        .map(match => match[1]);

    const duplicates = ids.filter(
        (id, index) => ids.indexOf(id) !== index
    );

    if (duplicates.length === 0) {
        pass(`${page} - no duplicate IDs`);
    } else {
        fail(
            `${page} - duplicate IDs: ${[
                ...new Set(duplicates)
            ].join(", ")}`
        );
    }

    console.log("");
}

// Check shared files
console.log("========================================");
console.log(" SHARED FOUNDATION");
console.log("========================================\n");

const foundationFiles = [
    "css/global.css",
    "css/responsive.css",
    "js/main.js"
];

for (const file of foundationFiles) {
    const fullPath = path.join(root, file);

    if (fs.existsSync(fullPath)) {
        pass(`${file} - exists`);
    } else {
        fail(`${file} - missing`);
    }
}

console.log("\n========================================");
console.log(" QA SUMMARY");
console.log("========================================");

console.log(`Total PASS: ${passed}`);
console.log(`Total FAIL: ${failed}`);

if (failed === 0) {
    console.log("\nRESULT: ALL AUTOMATED CHECKS PASSED");
} else {
    console.log("\nRESULT: ISSUES FOUND - REVIEW FAILURES ABOVE");
}

console.log("========================================\n");