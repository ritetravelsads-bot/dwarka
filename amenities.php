<?php
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
require_once __DIR__ . '/config.php';
$recaptchaSiteKey = getenv('RECAPTCHA_SITE_KEY') ?: '';
if (empty($_SESSION['form_token']) || !is_string($_SESSION['form_token'])) {
    $_SESSION['form_token'] = bin2hex(random_bytes(32));
}
$formToken = $_SESSION['form_token'];

$pageTitle = 'World-Class Amenities | Dwarka Expressway NCR';
$pageDescription = 'Experience a lifestyle designed around comfort, convenience, and luxury at Dwarka Expressway NCR. Explore premium wellness, recreation, and community amenities.';
?>
<?php include 'inc/head.php'; ?>
<?php include 'inc/header.php'; ?>

<main class="pt-20">
    <!-- SECTION 1: HERO / BANNER -->
    <section class="relative pt-12 pb-24 md:pt-10 md:pb-40 overflow-hidden text-white">
        <!-- Background Image with Luxury Dark Overlay -->
        <img src="assets/img/amenities/amenities-hero.webp" alt="Luxury Amenities" class="absolute inset-0 w-full h-full object-cover transform scale-105">
        <div class="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-transparent"></div>
        
        <div class="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center h-full">
            <div class="max-w-3xl">
                <span class="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6 border border-primary/30 backdrop-blur-md">Premium Lifestyle</span>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                    World-Class <span class="text-primary font-light italic">Amenities</span> for a Modern Lifestyle
                </h1>
                <p class="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
                    Experience a lifestyle designed around comfort, convenience, and luxury at Dwarka Expressway NCR. Every amenity is thoughtfully planned to enhance your everyday living—from wellness and recreation to security and community spaces.
                </p>
                
                <button onclick="showForm()" class="inline-flex items-center rounded justify-center gap-3 bg-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
                    <i class="fa-solid fa-download group-hover:-translate-y-1 transition-transform"></i>
                    Download Brochure
                </button>
            </div>
        </div>
    </section>

    <!-- SECTION 2: INTRO / OVERVIEW -->
    <section class="py-24 bg-white border-b border-borderGrey">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-5xl font-bold text-dark mb-8 tracking-tight">Designed for Comfort, <br><span class="font-light">Built for Lifestyle</span></h2>
            <div class="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <div class="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                    Modern living goes beyond just a home—it’s about the lifestyle that comes with it. The amenities at Dwarka Expressway are carefully curated to meet the needs of today’s residents, offering a perfect blend of leisure, wellness, and functionality. From open green spaces to premium indoor facilities, every element is designed to create a balanced and fulfilling living experience.
                </p>
                <p>
                    With a focus on quality infrastructure and thoughtful planning, residents can enjoy a self-sustained environment where everything is accessible without stepping too far from home.
                </p>
            </div>
        </div>
    </section>

    <!-- SECTION 3: LIFESTYLE & RECREATION AMENITIES -->
    <section class="py-24 bg-lightGrey relative">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-16 md:flex justify-between items-end">
                <div class="max-w-2xl">
                    <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Leisure</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-dark tracking-tight">Lifestyle & <span class="font-light">Recreation</span></h2>
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Card 1 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-borderGrey/50">
                    <div class="h-48 overflow-hidden relative">
                        <img src="assets/img/amenities/landscaped-gardens.webp" alt="Landscaped Gardens" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            <i class="fa-solid fa-leaf"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">Landscaped Gardens</h3>
                        <p class="text-slate-500 font-light text-sm leading-relaxed">Beautifully designed green areas provide a peaceful environment for relaxation, morning walks, and outdoor activities, helping you reconnect with nature.</p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-borderGrey/50">
                    <div class="h-48 overflow-hidden relative">
                        <img src="assets/img/amenities/clubhouse-spaces.webp" alt="Clubhouse" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            <i class="fa-solid fa-martini-glass"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">Clubhouse Spaces</h3>
                        <p class="text-slate-500 font-light text-sm leading-relaxed">A modern clubhouse equipped with indoor games, lounge areas, and social spaces where residents can unwind and connect with their community.</p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-borderGrey/50">
                    <div class="h-48 overflow-hidden relative">
                        <img src="assets/img/amenities/swimming-pool.webp" alt="Swimming Pool" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" >
                        <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            <i class="fa-solid fa-person-swimming"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">Swimming Pool</h3>
                        <p class="text-slate-500 font-light text-sm leading-relaxed">A well-maintained swimming pool designed for both leisure and fitness, offering a refreshing escape from daily routines.</p>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-borderGrey/50">
                    <div class="h-48 overflow-hidden relative">
                        <img src="assets/img/amenities/children-play.webp" alt="Children's Play Area" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            <i class="fa-solid fa-child-reaching"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">Children’s Play Area</h3>
                        <p class="text-slate-500 font-light text-sm leading-relaxed">Safe and engaging play zones for children, designed to encourage physical activity and social interaction in a secure environment.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: HEALTH & WELLNESS AMENITIES -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-16 md:flex justify-between items-end flex-row-reverse text-right">
                <div class="max-w-2xl">
                    <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Fitness</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-dark tracking-tight">Health & <span class="font-light">Wellness</span></h2>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Wellness Item 1 -->
                <div class="flex flex-col sm:flex-row gap-6 items-center p-6 border border-borderGrey rounded-2xl hover:shadow-lg transition-shadow bg-lightGrey/30 group">
                    <div class="w-full sm:w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 relative">
                        <img src="assets/img/amenities/fully-equipped-gymnasium.webp" alt="Gymnasium" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-dumbbell text-primary text-xl"></i>
                            <h3 class="text-xl font-bold text-dark">Fully Equipped Gymnasium</h3>
                        </div>
                        <p class="text-slate-500 font-light leading-relaxed">A modern fitness center with advanced equipment, allowing residents to maintain a healthy and active lifestyle.</p>
                    </div>
                </div>

                <!-- Wellness Item 2 -->
                <div class="flex flex-col sm:flex-row gap-6 items-center p-6 border border-borderGrey rounded-2xl hover:shadow-lg transition-shadow bg-lightGrey/30 group">
                    <div class="w-full sm:w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 relative">
                        <img src="assets/img/amenities/jogging-&-cycling-tracks.webp" alt="Jogging Tracks" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-person-running text-primary text-xl"></i>
                            <h3 class="text-xl font-bold text-dark">Jogging & Cycling Tracks</h3>
                        </div>
                        <p class="text-slate-500 font-light leading-relaxed">Dedicated tracks surrounded by greenery, ideal for morning runs, cycling, and daily fitness routines.</p>
                    </div>
                </div>

                <!-- Wellness Item 3 -->
                <div class="flex flex-col sm:flex-row gap-6 items-center p-6 border border-borderGrey rounded-2xl hover:shadow-lg transition-shadow bg-lightGrey/30 group">
                    <div class="w-full sm:w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 relative">
                        <img src="assets/img/amenities/yoga-&-meditation-zone.webp" alt="Yoga Zone" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-om text-primary text-xl"></i>
                            <h3 class="text-xl font-bold text-dark">Yoga & Meditation Zone</h3>
                        </div>
                        <p class="text-slate-500 font-light leading-relaxed">Peaceful spaces designed for yoga and meditation, promoting mental well-being and relaxation.</p>
                    </div>
                </div>

                <!-- Wellness Item 4 -->
                <div class="flex flex-col sm:flex-row gap-6 items-center p-6 border border-borderGrey rounded-2xl hover:shadow-lg transition-shadow bg-lightGrey/30 group">
                    <div class="w-full sm:w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 relative">
                        <img src="assets/img/amenities/sports-facilities.webp" alt="Sports Facilities" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-basketball text-primary text-xl"></i>
                            <h3 class="text-xl font-bold text-dark">Sports Facilities</h3>
                        </div>
                        <p class="text-slate-500 font-light leading-relaxed">Courts and spaces for sports like badminton, basketball, and other recreational activities to keep you active and engaged.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 5: SAFETY & CONVENIENCE -->
    <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-3">Essentials</span>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">Safety & <span class="font-light italic">Convenience</span></h2>
                <div class="w-16 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Safety Card 1 -->
                <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/30">
                        <i class="fa-solid fa-shield-halved text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">24/7 Security</h3>
                    <p class="text-slate-400 font-light text-sm leading-relaxed">Advanced security systems with CCTV monitoring and trained personnel ensure a safe and secure environment for residents.</p>
                </div>

                <!-- Safety Card 2 -->
                <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/30">
                        <i class="fa-solid fa-plug text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Power Backup</h3>
                    <p class="text-slate-400 font-light text-sm leading-relaxed">Uninterrupted power supply for common areas and essential services ensures comfort at all times.</p>
                </div>

                <!-- Safety Card 3 -->
                <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/30">
                        <i class="fa-solid fa-square-parking text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Ample Parking</h3>
                    <p class="text-slate-400 font-light text-sm leading-relaxed">Well-planned parking facilities for residents and visitors, ensuring convenience and organized vehicle management.</p>
                </div>

                <!-- Safety Card 4 -->
                <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/30">
                        <i class="fa-solid fa-elevator text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">High-Speed Elevators</h3>
                    <p class="text-slate-400 font-light text-sm leading-relaxed">Efficient and modern elevators designed for smooth and quick access across all floors in the development.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 6: COMMUNITY & LIFESTYLE ADVANTAGES -->
    <section class="py-24 bg-lightGrey">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src="assets/img/amenities/complete-lifestyle.webp" alt="Community Lifestyle" class="w-full h-full object-cover">
                    <div class="absolute inset-0 border-8 border-white rounded-2xl pointer-events-none"></div>
                </div>
                
                <div class="order-1 lg:order-2 space-y-8">
                    <div>
                        <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Holistic Living</span>
                        <h2 class="text-3xl md:text-5xl font-bold text-dark tracking-tight mb-6">A Complete Lifestyle <br><span class="font-light italic">Within Your Reach</span></h2>
                        <div class="w-16 h-1 bg-primary"></div>
                    </div>
                    
                    <p class="text-slate-600 font-light text-lg leading-relaxed">
                        The amenities at Dwarka Expressway are designed to create a holistic living environment where residents can enjoy comfort, convenience, and a sense of community. From social spaces that bring people together to wellness facilities that promote a healthy lifestyle, every aspect is thoughtfully planned.
                    </p>
                    <p class="text-slate-600 font-light text-lg leading-relaxed">
                        This integrated approach ensures that you don’t just live in a home—but become part of a vibrant and well-connected community.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 7: FINAL CTA / CONVERSION BLOCK -->
    <section class="py-24 bg-white relative overflow-hidden border-t border-borderGrey text-center">
        <!-- Accent Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-dark">Experience Premium Living with <br><span class="font-light italic">World-Class Amenities</span></h2>
            
            <p class="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Upgrade your lifestyle with thoughtfully designed amenities that cater to every age group and need. Whether it’s relaxation, fitness, or community living, everything is crafted to offer you a superior living experience.
            </p>
            
            <a href="/contact" class="inline-flex items-center justify-center gap-3 bg-dark text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-primary transition-colors duration-300 shadow-xl shadow-dark/10 group">
                Book Site Visit
                <i class="fa-regular fa-calendar-check group-hover:scale-110 transition-transform"></i>
            </a>
        </div>
    </section>
</main>

<?php include 'inc/footer.php'; ?>