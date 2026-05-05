<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php
    // 1. Setup Dynamic URL Logic
    // If the individual page has defined a custom canonical, use that first!
    if (isset($custom_canonical) && !empty($custom_canonical)) {
        $canonical_url = $custom_canonical;
    } else {
        // Otherwise, auto-generate a clean canonical URL
        $request_uri = $_SERVER['REQUEST_URI'];
        
        // Clean the URL (Remove query strings)
        $clean_path = explode('?', $request_uri)[0];
        
        // SEO FIX: Force removal of .php extensions from the canonical URL
        $clean_path = preg_replace('/\.php$/i', '', $clean_path);
        
        // SEO FIX: Remove trailing slashes (unless it is the home page)
        if ($clean_path !== '/') {
            $clean_path = rtrim($clean_path, '/');
        }
        
        $canonical_url = "https://www.dwarkaexpresswayncr.com" . $clean_path;
    }
    ?>

    <link rel="canonical" href="<?php echo htmlspecialchars($canonical_url); ?>" />
    <meta property="og:url" content="<?php echo htmlspecialchars($canonical_url); ?>" />

    <link rel="canonical" href="<?php echo htmlspecialchars($canonical_url); ?>" />

    <meta property="og:title" content="<?php echo $pageTitle ?? 'Projects in Dwarka Expressway – Residential & Commercial Properties'; ?>" />
    <meta property="og:site_name" content="Dwarka Expressway NCR" />
    <meta property="og:url" content="<?php echo htmlspecialchars($canonical_url); ?>" /> <meta property="og:description" content="<?php echo $pageDescription ?? 'Explore premium residential & commercial properties on Dwarka Expressway.'; ?>" />
    <meta property="og:type" content="website" />
    
    <meta property="og:image" content="https://www.dwarkaexpresswayncr.com/assets/img/Og-Image.png" />
    <meta property="og:image:secure_url" content="https://www.dwarkaexpresswayncr.com/assets/img/Og-Image.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content="Dwarka Expressway NCR Properties" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo $pageTitle ?? 'Dwarka Expressway NCR'; ?>" />
    <meta name="twitter:description" content="<?php echo $pageDescription ?? 'Explore premium properties.'; ?>" />
    <meta name="twitter:image" content="https://www.dwarkaexpresswayncr.com/assets/img/Og-Image.png" />
    
    <meta name="description" content="<?php echo $pageDescription ?? '2026 Rapid Infrastructure makes Dwarka Expressway Real estate Top Investment Destinations in NCR.Get Latest Price Trends ,EMI Calculator.'; ?>">
    <title><?php echo $pageTitle ?? 'Projects in Dwarka Expressway Ncr- Residential | Commercial'; ?></title>

	<link rel="icon" href="assets/img/favicon.png" sizes="32x32">
    <link rel="stylesheet" href="assets/style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&family=Teko:wght@400;600&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap"
      rel="stylesheet"/>
	
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://kit.fontawesome.com/c1d1e2319d.js" crossorigin="anonymous" defer></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-SWHJZTSNDT"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-SWHJZTSNDT');
    </script>
	<script src="https://cdn.tailwindcss.com"></script>
	<script>
		tailwind.config = {
			theme: {
				extend: {
					colors: {
						primary: '#f14201',
						dark: '#111111',
						lightGrey: '#f4f4f4',
						borderGrey: '#e5e7eb'
					},
					fontFamily: {
						sans: ['Plus Jakarta Sans', 'sans-serif'],
						teko: ['Teko', 'sans-serif']
					}
				}
			}
		}
	</script>
    
</head>    
