# PHP Legacy Files Cleanup Guide

This document lists all PHP and legacy files/folders from the old PHP version that can be safely removed now that the project has been migrated to Next.js.

---

## Folders to Remove

### 1. `PHPMailer/` (Entire Folder)
PHP email library - no longer needed. Next.js uses API routes with nodemailer or similar.

```
PHPMailer/
├── DSNConfigurator.php
├── Exception.php
├── OAuth.php
├── OAuthTokenProvider.php
├── PHPMailer.php
├── POP3.php
└── SMTP.php
```

### 2. `vendor/` (Entire Folder)
PHP Composer dependencies - not needed in Next.js.

```
vendor/
├── autoload.php
├── composer/
├── guzzlehttp/
├── psr/
├── ralouphie/
└── symfony/
```

### 3. `inc/` (Entire Folder)
PHP include files for header, footer, and head sections - replaced by Next.js components.

```
inc/
├── footer.php
├── head.php
├── header.php
└── ip_security.json
```

---

## Root PHP Files to Remove

| File | Description | Next.js Replacement |
|------|-------------|---------------------|
| `index.php` | Homepage | `app/page.tsx` |
| `about.php` | About page | `app/about/page.tsx` |
| `amenities.php` | Amenities page | `app/amenities/page.tsx` |
| `connectivity.php` | Connectivity page | `app/connectivity/page.tsx` |
| `contact.php` | Contact page | `app/contact/page.tsx` |
| `projects.php` | Projects listing | `app/projects/page.tsx` |
| `projects-search.php` | Projects search | `app/projects/page.tsx` (with search) |
| `config.php` | PHP configuration | `.env.local` / `next.config.ts` |
| `email.php` | Email handler | `app/api/contact/route.ts` |

---

## Configuration Files to Remove

| File | Description |
|------|-------------|
| `.htaccess` | Apache rewrite rules - not needed with Next.js/Vercel |
| `composer.json` | PHP Composer dependencies |
| `composer.lock` | PHP Composer lock file |

---

## Quick Cleanup Commands

Run these commands from the project root to remove all PHP legacy files:

```bash
# Remove PHP folders
rm -rf PHPMailer/
rm -rf vendor/
rm -rf inc/

# Remove PHP page files
rm -f index.php
rm -f about.php
rm -f amenities.php
rm -f connectivity.php
rm -f contact.php
rm -f projects.php
rm -f projects-search.php
rm -f config.php
rm -f email.php

# Remove PHP configuration files
rm -f .htaccess
rm -f composer.json
rm -f composer.lock
```

### One-liner to remove everything:

```bash
rm -rf PHPMailer/ vendor/ inc/ && rm -f index.php about.php amenities.php connectivity.php contact.php projects.php projects-search.php config.php email.php .htaccess composer.json composer.lock
```

---

## Summary

| Category | Count | Size Impact |
|----------|-------|-------------|
| PHP Folders | 3 | ~2-5 MB |
| PHP Page Files | 9 | ~200 KB |
| Config Files | 3 | ~10 KB |
| **Total Files** | **137+ PHP files** | **~2-5 MB** |

---

## What to Keep

The following folders/files are part of the Next.js project and should NOT be removed:

- `app/` - Next.js App Router pages
- `components/` - React components
- `lib/` - Utility functions and data
- `public/` - Static assets (images, fonts, etc.)
- `node_modules/` - Node.js dependencies
- `package.json` - Node.js dependencies
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

---

## After Cleanup

After removing the PHP files:

1. Verify the Next.js app still works: `npm run dev`
2. Test all pages load correctly
3. Verify the sitemap generates: `/sitemap.xml`
4. Verify robots.txt works: `/robots.txt`
5. Test the contact form submission
6. Deploy to Vercel

---

*Generated on: Migration from PHP to Next.js*
