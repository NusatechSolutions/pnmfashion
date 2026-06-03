/* =========================================================
   RAJTEX — Main script
   Handles: dark mode, currency conversion, quote cart,
   wishlist, mobile menu, drawer, toast, render helpers.
   ========================================================= */

(function () {
  'use strict';

  // --- Storage keys
  const K = {
    theme: 'rajtex.theme',
    cur: 'rajtex.currency',
    lang: 'rajtex.lang',
    cart: 'rajtex.quoteCart',
    wish: 'rajtex.wishlist'
  };

  // --- Currencies (MYR base, FX rates approximate, May 2026 mid-market — would be live in production)
  const CURRENCIES = {
    MYR: { symbol: 'RM',  name: 'Malaysian Ringgit',     rate: 1,      flag: '🇲🇾' },
    SGD: { symbol: 'S$',  name: 'Singapore Dollar',      rate: 0.295,  flag: '🇸🇬' },
    IDR: { symbol: 'Rp',  name: 'Indonesian Rupiah',     rate: 3640,   flag: '🇮🇩' },
    THB: { symbol: '฿',   name: 'Thai Baht',             rate: 7.85,   flag: '🇹🇭' },
    VND: { symbol: '₫',   name: 'Vietnamese Dong',       rate: 5680,   flag: '🇻🇳' },
    PHP: { symbol: '₱',   name: 'Philippine Peso',       rate: 13.05,  flag: '🇵🇭' },
    BND: { symbol: 'B$',  name: 'Brunei Dollar',         rate: 0.295,  flag: '🇧🇳' },
    KHR: { symbol: '៛',   name: 'Cambodian Riel',        rate: 922,    flag: '🇰🇭' }
  };

  // --- WhatsApp business number (mock)
  const WA_NUMBER = '60123456789';

  // --- Brand logo (recreated to match the actual RAJTEX identity:
  //     tall serif RAJTEX wordmark + rose mark + "Exclusive" script + tagline.
  //     Uses CSS vars so it adapts to light/dark and brand-color changes.)
  const LOGO_SVG = `
    <svg class="brand__logo" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg" aria-label="Rajtex Exclusive">
      <!-- Rose mark -->
      <g transform="translate(135, 4)">
        <!-- stem -->
        <path d="M5 18 Q4 12 7 6" stroke="#3D6A2F" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <!-- leaf -->
        <path d="M5 14 Q-2 10 -1 4 Q4 8 5 14 Z" fill="#3D6A2F" opacity="0.85"/>
        <!-- rose petals (layered) -->
        <ellipse cx="9" cy="6" rx="6" ry="5" fill="#C13851"/>
        <ellipse cx="11" cy="4" rx="4" ry="3.5" fill="#D8536C" opacity="0.9"/>
        <ellipse cx="10" cy="6" rx="2.5" ry="2" fill="#8E1F33"/>
        <circle cx="10.5" cy="5.5" r="0.8" fill="#5A0F1F"/>
      </g>
      <!-- RAJTEX wordmark — tall, condensed serif feel -->
      <text x="140" y="48"
            text-anchor="middle"
            font-family="'Cormorant Garamond', Georgia, serif"
            font-size="34"
            font-weight="500"
            letter-spacing="3"
            fill="currentColor">RAJTEX</text>
      <!-- ® mark -->
      <text x="222" y="32"
            font-family="'Cormorant Garamond', serif"
            font-size="9"
            fill="currentColor"
            opacity="0.7">®</text>
      <!-- Exclusive script -->
      <text x="140" y="62"
            text-anchor="middle"
            font-family="'Cormorant Garamond', serif"
            font-style="italic"
            font-size="13"
            font-weight="400"
            letter-spacing="0.5"
            fill="currentColor"
            opacity="0.85">Exclusive</text>
      <!-- Tagline -->
      <g transform="translate(140, 73)" font-family="'Manrope', sans-serif" font-size="6.5" letter-spacing="1.2" fill="currentColor" opacity="0.6">
        <text text-anchor="middle">PRINT SAREES   ·   LEHENGAS   ·   SILK SAREES</text>
      </g>
    </svg>`;

  // --- State
  let state = {
    theme: localStorage.getItem(K.theme) || 'light',
    currency: localStorage.getItem(K.cur) || 'MYR',
    lang: localStorage.getItem(K.lang) || 'EN',
    cart: JSON.parse(localStorage.getItem(K.cart) || '[]'),
    wishlist: JSON.parse(localStorage.getItem(K.wish) || '[]')
  };

  // ============================================================
  // THEME
  // ============================================================
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const icons = document.querySelectorAll('[data-theme-icon]');
    icons.forEach(el => {
      el.innerHTML = state.theme === 'dark' ? ICONS.sun : ICONS.moon;
    });
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(K.theme, state.theme);
    applyTheme();
    showToast(state.theme === 'dark' ? 'Switched to dark mode' : 'Switched to light mode');
  }

  // ============================================================
  // CURRENCY
  // ============================================================
  function formatCurrency(amountMYR, code) {
    const cur = CURRENCIES[code || state.currency];
    if (!cur) return `RM ${amountMYR.toFixed(2)}`;
    const converted = amountMYR * cur.rate;
    if (cur.rate >= 100) return `${cur.symbol} ${Math.round(converted).toLocaleString()}`;
    return `${cur.symbol} ${converted.toFixed(2)}`;
  }

  function setCurrency(code) {
    if (!CURRENCIES[code]) return;
    state.currency = code;
    localStorage.setItem(K.cur, code);
    refreshPrices();
    document.querySelectorAll('[data-currency-label]').forEach(el => el.textContent = code);
    showToast(`Currency set to ${code}`);
  }

  function refreshPrices() {
    document.querySelectorAll('[data-price-myr]').forEach(el => {
      const myr = parseFloat(el.dataset.priceMyr);
      el.textContent = formatCurrency(myr);
    });
    document.querySelectorAll('[data-price-myr-base]').forEach(el => {
      const myr = parseFloat(el.dataset.priceMyrBase);
      el.textContent = `≈ ${formatCurrency(myr)}`;
    });
  }

  // ============================================================
  // LANGUAGE (mock — switches label only for demo)
  // ============================================================
  const LANGS = {
    EN: { name: 'English', flag: '🇬🇧' },
    MS: { name: 'Bahasa Melayu', flag: '🇲🇾' },
    ID: { name: 'Bahasa Indonesia', flag: '🇮🇩' }
  };
  function setLang(code) {
    state.lang = code;
    localStorage.setItem(K.lang, code);
    document.querySelectorAll('[data-lang-label]').forEach(el => el.textContent = code);
    showToast(`Language: ${LANGS[code].name}`);
  }

  // ============================================================
  // QUOTE CART
  // ============================================================
  function addToCart(productId, qty = 20) {
    const product = (typeof PRODUCTS !== 'undefined') ? PRODUCTS.find(p => p.id === productId) : null;
    if (!product) return;
    const existing = state.cart.find(i => i.id === productId);
    if (existing) {
      existing.qty = Math.max(20, existing.qty + qty);
    } else {
      state.cart.push({ id: productId, qty: Math.max(20, qty), addedAt: Date.now() });
    }
    persistCart();
    renderCart();
    updateCartBadge();
    showToast(`Added to quote · ${product.name}`);
  }

  function updateCartQty(productId, qty) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;
    if (qty < 20) qty = 20;
    item.qty = qty;
    persistCart();
    renderCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    persistCart();
    renderCart();
    updateCartBadge();
  }

  function clearCart() {
    state.cart = [];
    persistCart();
    renderCart();
    updateCartBadge();
  }

  function persistCart() {
    localStorage.setItem(K.cart, JSON.stringify(state.cart));
  }

  function updateCartBadge() {
    const badge = document.querySelector('[data-cart-badge]');
    if (badge) {
      const count = state.cart.length;
      badge.textContent = count;
      badge.style.display = count > 0 ? 'grid' : 'none';
    }
  }

  function cartTotalMYR() {
    if (typeof PRODUCTS === 'undefined') return 0;
    return state.cart.reduce((sum, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return sum;
      // Use bulk tier (since MOQ ≥ 20)
      const tier = item.qty >= 100 ? p.price.distributor : p.price.bulk;
      return sum + tier * item.qty;
    }, 0);
  }

  function cartTotalPieces() {
    return state.cart.reduce((s, i) => s + i.qty, 0);
  }

  function buildWhatsAppQuoteMessage() {
    if (typeof PRODUCTS === 'undefined' || state.cart.length === 0) return '';
    let msg = `*RajTex Quote Request*\n\n`;
    msg += `Hi RajTex team, I'd like a wholesale quote for the following:\n\n`;
    state.cart.forEach((item, i) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return;
      msg += `${i + 1}. *${p.name}*\n   SKU: ${p.sku}\n   Qty: ${item.qty} pcs\n\n`;
    });
    msg += `Total pieces: ${cartTotalPieces()}\n`;
    msg += `Estimated value: ${formatCurrency(cartTotalMYR())}\n\n`;
    msg += `Please confirm pricing, lead time, and shipping options.\n— sent via rajtex.com`;
    return encodeURIComponent(msg);
  }

  function sendQuote() {
    if (state.cart.length === 0) {
      showToast('Your quote list is empty');
      return;
    }
    const msg = buildWhatsAppQuoteMessage();
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  }

  // ============================================================
  // WISHLIST
  // ============================================================
  function toggleWishlist(productId) {
    if (state.wishlist.includes(productId)) {
      state.wishlist = state.wishlist.filter(id => id !== productId);
    } else {
      state.wishlist.push(productId);
      showToast('Saved to wishlist');
    }
    localStorage.setItem(K.wish, JSON.stringify(state.wishlist));
    document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach(btn => {
      btn.classList.toggle('is-active', state.wishlist.includes(productId));
    });
  }

  function isWishlisted(productId) {
    return state.wishlist.includes(productId);
  }

  // ============================================================
  // RENDER CART
  // ============================================================
  function renderCart() {
    const body = document.getElementById('drawerBody');
    const footer = document.getElementById('drawerFooter');
    if (!body || typeof PRODUCTS === 'undefined') return;

    if (state.cart.length === 0) {
      body.innerHTML = `
        <div class="quote-empty">
          ${ICONS.bagBig}
          <p>Your quote list is empty.</p>
          <p style="font-size:0.85rem;margin-top:8px;">Browse the catalog and add styles you'd like a wholesale quote on.</p>
          <a href="catalog.html" class="btn btn--ghost btn--sm" style="margin-top:20px;">Browse Catalog</a>
        </div>`;
      if (footer) footer.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = 'block';
    let html = '';
    state.cart.forEach(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return;
      const tier = item.qty >= 100 ? p.price.distributor : p.price.bulk;
      const subtotal = tier * item.qty;
      html += `
        <div class="quote-item">
          <img src="${p.image}" alt="${p.name}" class="quote-item__img" loading="lazy">
          <div>
            <div class="quote-item__name">${p.name}</div>
            <div class="quote-item__sku">${p.sku}</div>
            <div class="qty-control">
              <button onclick="Rajtex.updateCartQty('${p.id}', ${item.qty - 10})" aria-label="Decrease">−</button>
              <input type="number" min="20" value="${item.qty}" onchange="Rajtex.updateCartQty('${p.id}', parseInt(this.value)||20)">
              <button onclick="Rajtex.updateCartQty('${p.id}', ${item.qty + 10})" aria-label="Increase">+</button>
            </div>
            <button class="quote-item__remove" onclick="Rajtex.removeFromCart('${p.id}')">Remove</button>
          </div>
          <div style="text-align:right;">
            <div style="font-family:var(--font-display);font-weight:600;color:var(--accent);" data-price-myr="${subtotal}">${formatCurrency(subtotal)}</div>
            <div style="font-size:0.7rem;color:var(--ink-faint);font-family:var(--font-mono);margin-top:3px;">@ RM ${tier}/pc</div>
          </div>
        </div>`;
    });
    body.innerHTML = html;

    if (footer) {
      const total = cartTotalMYR();
      footer.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:0.85rem;color:var(--ink-soft);">
          <span>Total Pieces</span>
          <span style="font-family:var(--font-mono);">${cartTotalPieces()}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px;padding-bottom:14px;border-bottom:1px dashed var(--line);">
          <span style="font-size:0.85rem;color:var(--ink-soft);">Estimated Total</span>
          <span style="font-family:var(--font-display);font-size:1.5rem;font-weight:600;color:var(--accent);" data-price-myr="${total}">${formatCurrency(total)}</span>
        </div>
        <button class="btn btn--whatsapp btn--block" onclick="Rajtex.sendQuote()">
          ${ICONS.whatsapp} Request Quote on WhatsApp
        </button>
        <button class="btn btn--ghost btn--block btn--sm" onclick="Rajtex.clearCart()" style="margin-top:8px;">Clear All</button>
        <p style="font-size:0.72rem;color:var(--ink-faint);text-align:center;margin-top:12px;line-height:1.5;">
          Final pricing & availability confirmed by our sales team within 24 hours via WhatsApp.
        </p>`;
    }
  }

  // ============================================================
  // DRAWER
  // ============================================================
  function openDrawer() {
    document.getElementById('drawer')?.classList.add('is-open');
    document.getElementById('drawerOverlay')?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderCart();
  }
  function closeDrawer() {
    document.getElementById('drawer')?.classList.remove('is-open');
    document.getElementById('drawerOverlay')?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // ============================================================
  // MOBILE MENU
  // ============================================================
  function openMobileMenu() {
    document.getElementById('mobileMenu')?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    document.getElementById('mobileMenu')?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // ============================================================
  // CURRENCY DROPDOWN
  // ============================================================
  function toggleCurrencyMenu() {
    const m = document.getElementById('currencyMenu');
    if (!m) return;
    if (!m.dataset.built) {
      let html = '<div class="cur-menu__title">Select Currency</div>';
      Object.entries(CURRENCIES).forEach(([code, c]) => {
        html += `
          <button class="cur-menu__item" onclick="Rajtex.setCurrency('${code}'); Rajtex.toggleCurrencyMenu();">
            <span style="font-size:1.1rem;">${c.flag}</span>
            <span>
              <strong>${code}</strong>
              <small>${c.name}</small>
            </span>
            <span class="cur-menu__rate">1 MYR = ${c.rate >= 100 ? Math.round(c.rate).toLocaleString() : c.rate}</span>
          </button>`;
      });
      m.innerHTML = html;
      m.dataset.built = '1';
    }
    m.classList.toggle('is-open');
  }

  function toggleLangMenu() {
    const m = document.getElementById('langMenu');
    if (!m) return;
    if (!m.dataset.built) {
      let html = '<div class="cur-menu__title">Language</div>';
      Object.entries(LANGS).forEach(([code, l]) => {
        html += `
          <button class="cur-menu__item" onclick="Rajtex.setLang('${code}'); Rajtex.toggleLangMenu();">
            <span style="font-size:1.1rem;">${l.flag}</span>
            <span><strong>${code}</strong><small>${l.name}</small></span>
          </button>`;
      });
      m.innerHTML = html;
      m.dataset.built = '1';
    }
    m.classList.toggle('is-open');
  }

  // ============================================================
  // TOAST
  // ============================================================
  function showToast(message) {
    let host = document.querySelector('.toast-host');
    if (!host) {
      host = document.createElement('div');
      host.className = 'toast-host';
      document.body.appendChild(host);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast__icon">${ICONS.check}</span><span>${message}</span>`;
    host.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'all 320ms';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      setTimeout(() => toast.remove(), 320);
    }, 2400);
  }

  // ============================================================
  // ICONS (inline SVG)
  // ============================================================
  const ICONS = {
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    bagBig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
    fire: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>`,
    sparkle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5z"/></svg>`,
    package: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    cursor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3l7 19 2.51-7.39L20 12 3 3z"/></svg>`,
    trending: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`
  };

  // ============================================================
  // RENDER PRODUCT CARD
  // ============================================================
  function productCardHTML(p, options = {}) {
    const wished = isWishlisted(p.id);
    const badges = [];
    if (p.isNew) badges.push('<span class="badge badge--accent">New In</span>');
    if (p.isBestSeller) badges.push('<span class="badge badge--gold">Best Seller</span>');
    if (p.isTrending) badges.push('<span class="badge">Trending</span>');
    if (p.stock < 100) badges.push('<span class="badge badge--stock">Low Stock</span>');

    return `
      <article class="product-card fade-in-up">
        <div class="product-card__media">
          <div class="product-card__badges">${badges.join('')}</div>
          <button class="product-card__wishlist ${wished ? 'is-active' : ''}" data-wishlist-id="${p.id}" onclick="event.preventDefault();Rajtex.toggleWishlist('${p.id}')" aria-label="Save">
            ${ICONS.heart}
          </button>
          <a href="product.html?id=${p.id}">
            <img src="${p.image}" alt="${p.name}" class="product-card__img" loading="lazy">
          </a>
          <div class="product-card__quick">
            <button class="btn btn--gold btn--sm" onclick="Rajtex.addToCart('${p.id}', 20); Rajtex.openDrawer();">Quick Quote</button>
            <a href="product.html?id=${p.id}" class="btn btn--ghost btn--sm" style="color:white;border-color:white;">Details</a>
          </div>
        </div>
        <div class="product-card__body">
          <span class="product-card__cat">${p.collection} · ${p.fabric}</span>
          <a href="product.html?id=${p.id}"><h3 class="product-card__name">${p.name}</h3></a>
          <span class="product-card__sku">${p.sku}</span>
          <div class="product-card__meta">
            <div>
              <span class="product-card__price" data-price-myr="${p.price.bulk}">${formatCurrency(p.price.bulk)}</span>
              <span class="product-card__price-converted">/pc · MOQ ${p.moq}</span>
            </div>
            <span class="product-card__moq">${p.stock} pcs</span>
          </div>
        </div>
      </article>`;
  }

  // ============================================================
  // INIT
  // ============================================================
  function buildHeader() {
    const headerHost = document.getElementById('siteHeader');
    if (!headerHost) return;
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = [
      { href: 'catalog.html', label: 'Catalog' },
      { href: 'collections.html', label: 'Collections' },
      { href: 'lookbook.html', label: 'Lookbook' },
      { href: 'resellers.html', label: 'Resellers' },
      { href: 'about.html', label: 'About' },
      { href: 'contact.html', label: 'Contact' }
    ];
    const navHTML = navItems.map(i =>
      `<a href="${i.href}" class="${currentPath === i.href ? 'is-active' : ''}">${i.label}</a>`
    ).join('');

    headerHost.innerHTML = `
      <div class="top-banner">
        <span class="top-banner__track">
          <span class="top-banner__item">Now shipping to Malaysia, Indonesia, Vietnam, Thailand, Philippines</span>
          <span class="top-banner__item">MOQ 20 pcs · Tiered pricing for distributors</span>
          <span class="top-banner__item">Quote via WhatsApp · Reply within 24hrs</span>
          <span class="top-banner__item">New Mehfil Festive collection just dropped</span>
          <span class="top-banner__item">Now shipping to Malaysia, Indonesia, Vietnam, Thailand, Philippines</span>
          <span class="top-banner__item">MOQ 20 pcs · Tiered pricing for distributors</span>
          <span class="top-banner__item">Quote via WhatsApp · Reply within 24hrs</span>
          <span class="top-banner__item">New Mehfil Festive collection just dropped</span>
        </span>
      </div>
      <header class="site-header">
        <div class="container site-header__inner">
          <button class="icon-btn menu-btn" onclick="Rajtex.openMobileMenu()" aria-label="Menu">${ICONS.menu}</button>
          <nav class="site-header__nav">${navHTML}</nav>
          <a href="index.html" class="brand">
            ${LOGO_SVG}
          </a>
          <div class="site-header__actions">
            <div style="position:relative;" class="cur-wrap">
              <button class="pill-btn" onclick="Rajtex.toggleCurrencyMenu()">
                <span data-currency-label>${state.currency}</span>
                ${ICONS.chevron}
              </button>
              <div id="currencyMenu" class="cur-menu"></div>
            </div>
            <div style="position:relative;" class="cur-wrap">
              <button class="pill-btn" onclick="Rajtex.toggleLangMenu()">
                <span>🌐</span><span data-lang-label>${state.lang}</span>
              </button>
              <div id="langMenu" class="cur-menu"></div>
            </div>
            <button class="icon-btn" onclick="Rajtex.toggleTheme()" aria-label="Toggle theme">
              <span data-theme-icon>${state.theme === 'dark' ? ICONS.sun : ICONS.moon}</span>
            </button>
            <a href="login.html" class="icon-btn" aria-label="Account">${ICONS.user}</a>
            <button class="icon-btn" onclick="Rajtex.openDrawer()" aria-label="Quote cart">
              ${ICONS.bag}
              <span class="icon-btn__badge" data-cart-badge style="display:none;">0</span>
            </button>
          </div>
        </div>
      </header>`;

    // Mobile menu
    const mm = document.createElement('div');
    mm.className = 'mobile-menu';
    mm.id = 'mobileMenu';
    mm.innerHTML = `
      <div class="mobile-menu__header">
        <a href="index.html" class="brand brand--mobile">${LOGO_SVG}</a>
        <button class="icon-btn" onclick="Rajtex.closeMobileMenu()">${ICONS.close}</button>
      </div>
      <nav class="mobile-menu__nav">${navItems.map(i => `<a href="${i.href}">${i.label}</a>`).join('')}</nav>
      <div style="margin-top:auto;padding-top:32px;">
        <a href="https://wa.me/${WA_NUMBER}" class="btn btn--whatsapp btn--block">${ICONS.whatsapp} WhatsApp Sales</a>
      </div>`;
    document.body.appendChild(mm);

    // Update badge
    updateCartBadge();
    refreshPrices();
  }

  function buildFooter() {
    const f = document.getElementById('siteFooter');
    if (!f) return;
    f.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer__pattern bp-pattern"></div>
        <div class="container site-footer__inner">
          <div class="site-footer__grid">
            <div>
              <img src="assets/images/rajtex-logo-original.jpg" alt="RAJTEX Exclusive" class="site-footer__logo-img" style="max-width:180px;height:auto;display:block;margin-bottom:16px;border-radius:2px;">
              <p class="site-footer__about">Wholesale textile house from Surat, India — now serving resellers, boutiques and online sellers across Malaysia, Indonesia, Vietnam, Thailand and the Philippines. Three decades of looms, motifs, and trust.</p>
              <div class="social-row">
                <a href="https://www.instagram.com/rajtexfabrics/" target="_blank" aria-label="Instagram">${ICONS.instagram}</a>
                <a href="https://www.facebook.com/rajtexfabrics/" target="_blank" aria-label="Facebook">${ICONS.facebook}</a>
                <a href="#" target="_blank" aria-label="TikTok">${ICONS.tiktok}</a>
                <a href="https://wa.me/${WA_NUMBER}" target="_blank" aria-label="WhatsApp">${ICONS.whatsapp}</a>
                <a href="#" target="_blank" aria-label="Telegram">${ICONS.telegram}</a>
              </div>
            </div>
            <div>
              <h4>Catalog</h4>
              <ul class="site-footer__links">
                <li><a href="catalog.html?cat=sarees">Sarees & Suits</a></li>
                <li><a href="catalog.html?cat=kaftans">Kaftans & Baju Kurung</a></li>
                <li><a href="catalog.html?cat=menswear">Mens Shirts</a></li>
                <li><a href="catalog.html?cat=kidswear">Boys Wear</a></li>
                <li><a href="collections.html">All Collections</a></li>
              </ul>
            </div>
            <div>
              <h4>For Buyers</h4>
              <ul class="site-footer__links">
                <li><a href="resellers.html">Reseller Programme</a></li>
                <li><a href="resellers.html#calculator">Profit Calculator</a></li>
                <li><a href="login.html">B2B Portal</a></li>
                <li><a href="dashboard.html">Buyer Dashboard</a></li>
                <li><a href="contact.html">Contact Sales</a></li>
              </ul>
            </div>
            <div>
              <h4>Stay in the Loop</h4>
              <p style="font-size:0.88rem;color:var(--bg-soft);margin-bottom:16px;line-height:1.6;">Reseller drops, exclusive lots, and early access — straight to your WhatsApp.</p>
              <form class="newsletter" onsubmit="event.preventDefault();Rajtex.toast('You\\'re on the broadcast list — talk soon on WhatsApp.');this.reset();">
                <input type="text" placeholder="WhatsApp number e.g. +60 12..." required>
                <button type="submit">Join</button>
              </form>
              <p class="newsletter-note">We send 1–2 messages a week. Stop anytime.</p>
            </div>
          </div>
          <div class="selvedge"></div>
          <div class="site-footer__bottom">
            <span>© 2026 Rajtex Fabrics Pvt. Ltd. · A Surat textile house since 1992</span>
            <span>Built for SEA wholesale · Privacy · Terms</span>
          </div>
        </div>
      </footer>`;
  }

  function buildDrawer() {
    if (document.getElementById('drawer')) return;
    const overlay = document.createElement('div');
    overlay.className = 'drawer-overlay';
    overlay.id = 'drawerOverlay';
    overlay.onclick = closeDrawer;
    document.body.appendChild(overlay);

    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.id = 'drawer';
    drawer.innerHTML = `
      <div class="drawer__header">
        <div>
          <div class="drawer__title">Quote Cart</div>
          <div style="font-size:0.78rem;color:var(--ink-faint);font-family:var(--font-mono);letter-spacing:0.06em;margin-top:2px;">REQUEST WHOLESALE PRICING VIA WHATSAPP</div>
        </div>
        <button class="drawer__close" onclick="Rajtex.closeDrawer()">${ICONS.close}</button>
      </div>
      <div class="drawer__body" id="drawerBody"></div>
      <div class="drawer__footer" id="drawerFooter"></div>`;
    document.body.appendChild(drawer);
  }

  function buildFAB() {
    if (document.getElementById('waFab')) return;
    const fab = document.createElement('a');
    fab.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi RajTex, I have a wholesale enquiry...')}`;
    fab.target = '_blank';
    fab.className = 'wa-fab';
    fab.id = 'waFab';
    fab.setAttribute('aria-label', 'WhatsApp sales');
    fab.innerHTML = ICONS.whatsapp;
    document.body.appendChild(fab);
  }

  // Add styles for currency menu (inline injection so styles.css stays clean)
  function injectExtraStyles() {
    if (document.getElementById('rajtexExtraStyles')) return;
    const css = `
      .cur-menu {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        background: var(--bg-elev);
        border: 1px solid var(--line);
        border-radius: 4px;
        box-shadow: var(--shadow-lg);
        min-width: 280px;
        max-height: 360px;
        overflow-y: auto;
        z-index: 50;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-6px);
        transition: all var(--t-fast) var(--ease);
        padding: 8px;
      }
      .cur-menu.is-open { opacity: 1; pointer-events: auto; transform: translateY(0); }
      .cur-menu__title {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-faint);
        padding: 10px 14px 8px;
        border-bottom: 1px dashed var(--line);
        margin-bottom: 6px;
      }
      .cur-menu__item {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 10px 14px;
        border-radius: 2px;
        text-align: left;
        font-size: 0.88rem;
        color: var(--ink);
        transition: background var(--t-fast) var(--ease);
      }
      .cur-menu__item:hover { background: var(--bg-soft); }
      .cur-menu__item strong { display: block; font-weight: 600; font-size: 0.9rem; }
      .cur-menu__item small { display: block; font-size: 0.72rem; color: var(--ink-faint); margin-top: 1px; }
      .cur-menu__rate {
        font-family: var(--font-mono);
        font-size: 0.68rem;
        color: var(--ink-faint);
        white-space: nowrap;
      }`;
    const s = document.createElement('style');
    s.id = 'rajtexExtraStyles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  // Close menus on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.cur-wrap')) {
      document.getElementById('currencyMenu')?.classList.remove('is-open');
      document.getElementById('langMenu')?.classList.remove('is-open');
    }
  });

  // ESC closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeMobileMenu();
    }
  });

  // ============================================================
  // EXPORTS
  // ============================================================
  window.Rajtex = {
    state,
    CURRENCIES,
    formatCurrency,
    setCurrency,
    setLang,
    toggleTheme,
    toggleCurrencyMenu,
    toggleLangMenu,
    addToCart,
    updateCartQty,
    removeFromCart,
    clearCart,
    sendQuote,
    toggleWishlist,
    isWishlisted,
    openDrawer,
    closeDrawer,
    openMobileMenu,
    closeMobileMenu,
    showToast,
    toast: showToast,
    productCardHTML,
    refreshPrices,
    ICONS,
    WA_NUMBER
  };

  // ============================================================
  // BOOTSTRAP
  // ============================================================
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    injectExtraStyles();
    buildHeader();
    buildFooter();
    buildDrawer();
    buildFAB();
    refreshPrices();

    // Trigger any page-specific init
    if (typeof window.pageInit === 'function') window.pageInit();
  });

})();
