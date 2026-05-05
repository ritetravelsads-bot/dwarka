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

$pageTitle = 'Contact Us | Dwarka Expressway NCR';
$pageDescription = 'Book a site visit, request pricing details, and connect with Dwarka Expressway property experts.';
?>
<?php include 'inc/head.php'; ?>
<?php include 'inc/header.php'; ?>

<main class="pt-20">
  <section class="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-[#f97c44] to-[#fb923c]"></div>
    
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 30px 30px;"></div>

    <div class="relative z-10 container mx-auto px-6">
        <div class="max-w-4xl">
            <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                Dwarka Expressway Real Estate
            </span>

            <h1 class="text-white text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Your Dream Home <br class="hidden md:block" /> 
                <span class="text-orange-200">Expertly Curated.</span>
            </h1>

            <p class="text-white/90 mt-6 max-w-2xl text-base md:text-xl leading-relaxed font-light">
                Navigate the Dwarka Expressway market with confidence. Get access to <span class="font-semibold text-white underline decoration-orange-400 underline-offset-4">exclusive pre-launch pricing</span> and verified project insights from the region's top consultants.
            </p>

            <div class="mt-10 flex flex-wrap gap-y-4 gap-x-8 border-t border-white/20 pt-8">
                <div class="flex items-center space-x-2">
                    <span class="text-orange-300 text-lg">★</span>
                    <span class="text-white text-sm md:text-base font-medium">1,000+ Happy Families</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-orange-300 text-lg">✔</span>
                    <span class="text-white text-sm md:text-base font-medium">RERA Verified Projects</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-orange-300 text-lg">⚡</span>
                    <span class="text-white text-sm md:text-base font-medium">Instant Expert Callback</span>
                </div>
            </div>
        </div>
    </div>
</section>

    <section class="py-16 px-6 bg-white border-b border-borderGrey">
        <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            <div class="group bg-lightGrey rounded-2xl p-7 border border-borderGrey shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
                <div class="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4">
                    <i class="fa-solid fa-phone text-xl"></i>
                </div>
                <p class="text-primary font-semibold uppercase text-xs tracking-wider mb-2">Call Us</p>
                <p class="text-slate-700 mb-3">Talk directly with our property consultants for instant guidance and project details.</p>
                <a href="tel:+919873702365" class="text-primary text-2xl font-extrabold hover:underline">+91 9873702365</a>
            </div>
            <div class="group bg-lightGrey rounded-2xl p-7 border border-borderGrey shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
                <div class="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4">
                    <i class="fa-solid fa-envelope text-xl"></i>
                </div>
                <p class="text-primary font-semibold uppercase text-xs tracking-wider mb-2">Email Us</p>
                <p class="text-slate-700 mb-3">Send us your requirements and receive detailed project information, pricing, and brochures.</p>
                <a href="mailto:info@dwarkaexpresswayncr.com" class="text-dark text-lg font-bold hover:text-primary transition-colors">info@dwarkaexpresswayncr.com</a>
            </div>
            <div class="group bg-lightGrey rounded-2xl p-7 border border-borderGrey shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
                <div class="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4">
                    <i class="fa-solid fa-clock text-xl"></i>
                </div>
                <p class="text-primary font-semibold uppercase text-xs tracking-wider mb-2">Office Hours</p>
                <p class="text-slate-700 mb-3">Our team is available to assist you from Monday to Saturday, ensuring quick and reliable support.</p>
                <p class="text-dark text-lg font-bold">Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>
        </div>
    </section>

    <section id="contact" class="relative py-20 px-6 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-dark/95"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
            <div class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                <div class="mb-8">
                    <h2 class="text-3xl md:text-4xl font-heading font-bold text-dark mb-3 tracking-tight">Book a Free Site Visit or Get Best Price Deals</h2>
                    <p class="text-slate-600">Fill in your details and our experts will connect with you shortly to assist with the best available options on Dwarka Expressway.</p>
                </div>

                <form id="contactForm" action="email.php" method="POST" class="space-y-6" novalidate>
                    <input type="hidden" name="form_token" value="<?php echo htmlspecialchars($formToken, ENT_QUOTES, 'UTF-8'); ?>">
                    <input type="hidden" name="form_load_time" value="<?php echo time(); ?>">

                    <div style="position: absolute; left: -9999px; opacity: 0; height: 0; overflow: hidden;" aria-hidden="true">
                        <label for="website_url">Leave this field empty</label>
                        <input type="text" name="website_url" id="website_url" tabindex="-1" autocomplete="off">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                        <input
                            type="text"
                            class="w-full px-4 py-3 border border-borderGrey rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                            placeholder="Enter your full name (as per ID)"
                            required
                            name="name"
                            id="nameInput"
                            minlength="2"
                            maxlength="50"
                            pattern="[a-zA-Z\s]*"
                        >
                        <span class="text-red-500 text-xs hidden" id="nameError"></span>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-dark mb-2">Email Address</label>
                        <input
                            type="email"
                            class="w-full px-4 py-3 border border-borderGrey rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                            placeholder="Enter your email (optional)"
                            name="email"
                            id="emailInput"
                            maxlength="100"
                        >
                        <span class="text-red-500 text-xs hidden" id="emailError"></span>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-dark mb-2">Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phoneInput"
                            class="w-full px-4 py-3 border border-borderGrey rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                            placeholder="Enter your WhatsApp number for quick response"
                            pattern="[\d\s\-\+\(\)]{10,}"
                            minlength="10"
                            maxlength="20"
                            required
                        >
                        <span class="text-red-500 text-xs hidden" id="phoneError"></span>
                    </div>

                    <?php if (!empty($recaptchaSiteKey)): ?>
                    <div id="captchaContainer" class="hidden">
                        <div class="g-recaptcha" data-sitekey="<?php echo htmlspecialchars($recaptchaSiteKey, ENT_QUOTES, 'UTF-8'); ?>"></div>
                        <p class="text-xs text-slate-500 mt-2">Captcha is required after multiple submissions from the same IP.</p>
                    </div>
                    <?php endif; ?>

                    <div class="pt-2">
                        <button
                            type="submit"
                            id="submitBtn"
                            class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            <i class="fa-solid fa-paper-plane"></i>
                            <span id="submitText">Get Free Consultation</span>
                        </button>
                    </div>

                    <div id="formMessage" class="hidden p-4 rounded-lg text-center text-sm font-medium"></div>
                    <p class="text-center text-slate-500 text-sm">We respect your privacy. Your details are सुरक्षित and will never be shared.</p>
                </form>
            </div>

            <div class="space-y-6">
                <div class="bg-white/95 rounded-2xl border border-white/20 shadow-xl p-7">
                    <h3 class="text-2xl font-bold text-dark mb-4">What You’ll Get</h3>
                    <ul class="space-y-3 text-slate-700">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-primary mt-1"></i><span>Latest Price List &amp; Payment Plans</span></li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-primary mt-1"></i><span>Exclusive Offers &amp; Discounts</span></li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-primary mt-1"></i><span>Site Visit Assistance</span></li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-primary mt-1"></i><span>Expert Consultation (No Cost)</span></li>
                    </ul>
                </div>

                <div class="bg-dark text-white rounded-2xl border border-white/10 shadow-xl p-7">
                    <h3 class="text-2xl font-bold mb-3">Limited Time Offers Available</h3>
                    <p class="text-white/80 leading-relaxed">
                        Due to high demand in Dwarka Expressway projects, prices are increasing rapidly. Connect with us today to secure the best deals and availability.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 px-6 bg-lightGrey border-t border-borderGrey">
        <div class="max-w-7xl mx-auto bg-white rounded-3xl border border-borderGrey p-8 md:p-12 shadow-lg">
            <h2 class="text-3xl md:text-4xl font-bold text-dark">Still Confused? Let Our Experts Help You</h2>
            <p class="text-slate-600 mt-4 max-w-4xl">Whether you are buying your first home or investing, our team will guide you at every step to make the right decision.</p>
            <div class="mt-8 flex flex-wrap gap-4">
                <a href="tel:+919873702365" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
                    <i class="fa-solid fa-phone"></i>
                    Call Now
                </a>
                <a href="https://wa.me/919873702365" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
                    <i class="fa-brands fa-whatsapp"></i>
                    WhatsApp Now
                </a>
            </div>
        </div>
    </section>
</main>

<?php if (!empty($recaptchaSiteKey)): ?>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<?php endif; ?>

<script>
(function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const formMessage = document.getElementById('formMessage');
    const captchaContainer = document.getElementById('captchaContainer');
    const originalText = submitText ? submitText.textContent : 'Get Free Consultation';
    let captchaRequiredClient = localStorage.getItem('captcha_required') === '1';

    function updateCaptchaVisibility() {
        if (!captchaContainer) return;
        captchaContainer.classList.toggle('hidden', !captchaRequiredClient);
    }

    const spamKeywords = [
        'viagra', 'casino', 'lottery', 'click here', 'buy now', 'bitcoin',
        'crypto', 'forex', 'free money', 'make money fast', 'adult'
    ];

    function validateName(name) {
        if (!name || name.length < 2) return 'Name must be at least 2 characters';
        if (name.length > 50) return 'Name must not exceed 50 characters';
        if (!/^[a-zA-Z\s]*$/.test(name)) return 'Name should contain only letters and spaces';
        if (/\d+/.test(name)) return 'Name should not contain numbers';
        return null;
    }

    function validateEmail(email) {
        if (!email) return null;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format';
        if (email.length > 100) return 'Email is too long';
        return null;
    }

    function validatePhone(phone) {
        if (!phone) return 'Phone is required';
        const cleaned = phone.replace(/[\s\-\(\)]/g, '');
        if (cleaned.startsWith('+91')) {
            if (cleaned.length !== 13) return 'Invalid phone number';
        } else {
            if (cleaned.length !== 10) return 'Phone must be 10 digits';
            if (!/^[6-9]/.test(cleaned)) return 'Please enter a valid number';
        }
        if (!/^[\d+]*$/.test(cleaned)) return 'Phone should contain only numbers';
        return null;
    }

    function detectSpam(text, fieldType) {
        if (!text) return null;
        const lower = text.toLowerCase();
        for (const keyword of spamKeywords) {
            if (lower.includes(keyword)) return 'Suspicious content detected';
        }
        const urlCount = (text.match(/https?:\/\//gi) || []).length;
        if (urlCount > 2) return 'Too many URLs detected';
        if (fieldType !== 'phone') {
            const numberCount = (text.match(/\d/g) || []).length;
            if (numberCount > text.length * 0.5) return 'Too many numbers in text';
        }
        return null;
    }

    function showMessage(message, success) {
        if (!formMessage) return;
        formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
        if (success) {
            formMessage.classList.add('bg-green-100', 'text-green-700');
            formMessage.textContent = 'OK: ' + message;
        } else {
            formMessage.classList.add('bg-red-100', 'text-red-700');
            formMessage.textContent = 'Error: ' + message;
        }
    }

    function wireBlurValidation(input, validator, errorId) {
        if (!input) return;
        input.addEventListener('blur', function () {
            const errorEl = document.getElementById(errorId);
            if (!errorEl) return;
            const error = validator(this.value);
            if (error) {
                errorEl.textContent = error;
                errorEl.classList.remove('hidden');
                this.classList.add('border-red-500');
            } else {
                errorEl.classList.add('hidden');
                this.classList.remove('border-red-500');
            }
        });
    }

    wireBlurValidation(nameInput, validateName, 'nameError');
    wireBlurValidation(emailInput, validateEmail, 'emailError');
    wireBlurValidation(phoneInput, validatePhone, 'phoneError');
    updateCaptchaVisibility();

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nameError = validateName(nameInput ? nameInput.value : '');
        const emailError = validateEmail(emailInput ? emailInput.value : '');
        const phoneError = validatePhone(phoneInput ? phoneInput.value : '');

        if (nameError || emailError || phoneError) {
            showMessage(nameError || emailError || phoneError, false);
            return;
        }

        const spamError =
            detectSpam(nameInput ? nameInput.value : '', 'name') ||
            detectSpam(emailInput ? emailInput.value : '', 'email') ||
            detectSpam(phoneInput ? phoneInput.value : '', 'phone');

        if (spamError) {
            showMessage(spamError, false);
            return;
        }

        submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'Sending...';

        try {
            if (captchaRequiredClient && window.grecaptcha) {
                const token = grecaptcha.getResponse();
                if (!token) {
                    showMessage('Please complete the reCAPTCHA.', false);
                    return;
                }
            }

            const formData = new FormData(form);
            const response = await fetch('email.php', {
                method: 'POST',
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                body: formData
            });

            const result = await response.json();
            if (result.success) {
                localStorage.removeItem('captcha_required');
                if (result.redirect) {
                    window.location.href = result.redirect;
                    return;
                }
                showMessage(result.message || 'Your request has been submitted.', true);
                form.reset();
            } else {
                if (result.require_captcha) {
                    captchaRequiredClient = true;
                    localStorage.setItem('captcha_required', '1');
                    updateCaptchaVisibility();
                }
                showMessage(result.message || 'Something went wrong. Please try again.', false);
                if (window.grecaptcha) grecaptcha.reset();
            }
        } catch (error) {
            showMessage('An error occurred. Please try again.', false);
        } finally {
            submitBtn.disabled = false;
            if (submitText) submitText.textContent = originalText;
        }
    });
})();
</script>

<?php include 'inc/footer.php'; ?>
