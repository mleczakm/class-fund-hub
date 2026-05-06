/**
 * Classy Cash — Tailwind setup shared across all HTML mockups.
 *
 * What it does:
 *  1. Configures the Tailwind Play CDN with the project's design tokens
 *     (brand palette, gradients, shadows, radius). Same tokens are mirrored
 *     in the React app's `src/styles.css`, so any markup you copy from a
 *     mockup will render identically inside the real app.
 *  2. Registers reusable component classes (.btn-*, .card, .badge-*, .input,
 *     .topmenu, …) via @layer components + @apply. They are pure
 *     compositions of Tailwind utilities — no custom CSS leaks. Drop the
 *     same @layer block into any Tailwind project to reuse them.
 *
 * Usage in an HTML file:
 *   <script src="https://cdn.tailwindcss.com"></script>
 *   <script src="tw.js"></script>
 */

// 1. Theme tokens -----------------------------------------------------------
window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Surface / text
        background: "#f7f6f0",
        foreground: "#15203d",
        card: "#ffffff",
        muted: { DEFAULT: "#f3f5fa", foreground: "#6b7796" },
        border: "#e2e6ee",
        // Brand
        primary: { DEFAULT: "#1a2a52", 600: "#2a4a7a", foreground: "#ffffff" },
        secondary: { DEFAULT: "#2aa57f", soft: "#e6f5ee", foreground: "#ffffff" },
        accent: { DEFAULT: "#e8b441", foreground: "#3a2a00" },
        danger: { DEFAULT: "#d65a4a", soft: "#fde4e0" },
        warning: { DEFAULT: "#8a6612", soft: "#fff3d6" },
        success: { DEFAULT: "#1d7a5f", soft: "#e6f5ee" },
      },
      borderRadius: { xl: "14px", "2xl": "18px", "3xl": "24px" },
      boxShadow: {
        card: "0 2px 12px -4px rgba(26, 42, 82, 0.12)",
        elegant: "0 18px 50px -18px rgba(26, 42, 82, 0.35)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #1a2a52 0%, #2a4a7a 50%, #2aa57f 100%)",
        "gradient-soft":
          "linear-gradient(180deg, #f7f6f0 0%, #e6f5ee 100%)",
        "gradient-progress":
          "linear-gradient(90deg, #1a2a52, #2aa57f)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI",
          "Roboto", "Helvetica Neue", "Arial", "sans-serif",
        ],
      },
    },
  },
};

// 2. Component layer --------------------------------------------------------
// Injected as <style type="text/tailwindcss"> so @apply works under Play CDN.
const css = String.raw;
const style = document.createElement("style");
style.setAttribute("type", "text/tailwindcss");
style.textContent = css`
  @layer base {
    html, body { @apply font-sans antialiased; }
    body { @apply bg-background text-foreground leading-relaxed; }
    h1, h2, h3 { @apply leading-tight m-0; }
    a { @apply text-inherit no-underline; }
  }

  @layer components {
    /* Layout */
    .container-app { @apply max-w-7xl mx-auto px-6; }
    .app-bg { @apply fixed inset-0 -z-10 bg-background overflow-hidden; }
    .app-bg::before, .app-bg::after {
      content: ""; @apply absolute rounded-full blur-[80px] opacity-30;
    }
    .app-bg::before { @apply w-[480px] h-[480px] bg-secondary -top-40 -right-32; }
    .app-bg::after  { @apply w-[520px] h-[520px] bg-accent -bottom-52 -left-40 opacity-20; }

    /* Top menu */
    .topmenu       { @apply sticky top-0 z-20 bg-background/85 backdrop-blur border-b border-border; }
    .topmenu-inner { @apply flex items-center justify-between py-3.5; }
    .brand         { @apply inline-flex items-center gap-2.5 font-bold; }
    .brand-mark    { @apply w-9 h-9 rounded-xl bg-gradient-hero inline-flex items-center justify-center text-white font-extrabold shadow-card; }
    .brand-name    { @apply text-lg tracking-tight; }
    .brand-name span { @apply text-secondary; }
    .nav           { @apply flex items-center gap-1.5; }
    .nav > a       { @apply px-3.5 py-2 rounded-full text-sm font-medium text-muted-foreground transition; }
    .nav > a:hover { @apply bg-primary/5 text-foreground; }
    .nav > a.active{ @apply bg-primary text-primary-foreground; }

    /* Buttons */
    .btn          { @apply inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-transparent cursor-pointer transition; }
    .btn-primary  { @apply bg-gradient-hero text-white shadow-elegant hover:-translate-y-px; }
    .btn-outline  { @apply bg-card border-border text-foreground hover:border-primary; }
    .btn-ghost    { @apply bg-transparent text-muted-foreground hover:text-foreground; }
    .btn-block    { @apply w-full; }

    /* Cards */
    .card         { @apply bg-card border border-border rounded-xl shadow-card; }
    .card-body    { @apply p-6; }
    .card-header  { @apply px-6 py-5 border-b border-border flex items-center justify-between; }
    .card h2      { @apply text-lg; }

    /* Forms */
    .form-group        { @apply mb-[18px]; }
    .form-group label  { @apply block text-[13px] font-semibold mb-1.5 text-foreground; }
    .form-group .hint  { @apply text-xs text-muted-foreground mt-1.5; }
    .input, .select, .textarea {
      @apply w-full px-3.5 py-2.5 text-sm border border-border rounded-xl bg-card text-foreground outline-none transition;
    }
    .input:focus, .select:focus, .textarea:focus {
      @apply border-secondary ring-4 ring-secondary/15;
    }
    .input-row    { @apply grid grid-cols-2 gap-3.5 max-md:grid-cols-1; }
    .input-icon   { @apply relative; }
    .input-icon .input { @apply pl-10; }
    .input-icon > svg  { @apply absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground; }
    .checkbox     { @apply inline-flex items-center gap-2 text-sm text-muted-foreground; }

    /* Hero */
    .hero         { @apply relative overflow-hidden rounded-3xl p-12 text-white bg-gradient-hero shadow-elegant; }
    .hero .eyebrow{ @apply uppercase tracking-[0.25em] text-xs opacity-75; }
    .hero h1      { @apply text-4xl my-3 max-w-[600px]; }
    .hero p       { @apply max-w-[540px] opacity-90; }
    .hero .actions{ @apply mt-6 flex gap-3 flex-wrap; }
    .hero::before, .hero::after { content: ""; @apply absolute rounded-full blur-[60px]; }
    .hero::before { @apply w-80 h-80 bg-accent -top-24 -right-20 opacity-40; }
    .hero::after  { @apply w-72 h-72 bg-secondary -bottom-28 right-[30%] opacity-50; }

    /* Stats */
    .stats        { @apply grid grid-cols-4 gap-4 mt-7 max-md:grid-cols-2; }
    .stat         { @apply p-5; }
    .stat-icon    { @apply w-10 h-10 rounded-xl bg-secondary-soft text-secondary inline-flex items-center justify-center; }
    .stat-change  { @apply float-right text-xs text-secondary font-semibold; }
    .stat-value   { @apply text-2xl font-bold mt-3.5; }
    .stat-label   { @apply text-sm text-muted-foreground; }

    /* Two-column */
    .grid-2       { @apply grid grid-cols-[2fr_1fr] gap-6 mt-7 max-md:grid-cols-1; }

    /* Progress */
    .progress     { @apply h-2 bg-border/70 rounded-full overflow-hidden mt-2.5; }
    .progress > span { @apply block h-full rounded-full bg-gradient-progress; }

    /* Table */
    .table        { @apply w-full border-collapse; }
    .table th, .table td { @apply text-left px-4 py-3.5 text-sm border-b border-border; }
    .table th     { @apply text-xs uppercase tracking-wider text-muted-foreground font-semibold bg-muted/50; }
    .table tbody tr:hover { @apply bg-muted/40; }

    /* Badges */
    .badge          { @apply inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold; }
    .badge-success  { @apply bg-success-soft text-success; }
    .badge-warning  { @apply bg-warning-soft text-warning; }
    .badge-danger   { @apply bg-danger-soft text-danger; }
    .amount.pos     { @apply text-success font-semibold; }
    .amount.neg     { @apply text-danger font-semibold; }

    /* Lists */
    .list         { @apply list-none p-0 m-0; }
    .list > li    { @apply py-4 border-b border-border last:border-0; }

    /* Login split */
    .split            { @apply min-h-screen grid grid-cols-2 max-md:grid-cols-1; }
    .split .form-side { @apply bg-gradient-soft p-14 flex flex-col justify-center; }
    .split .brand-side{ @apply bg-gradient-hero text-white p-14 flex flex-col justify-center relative overflow-hidden max-md:hidden; }
    .split .brand-side::before { content: ""; @apply absolute -top-28 -right-24 w-[360px] h-[360px] bg-accent opacity-25 rounded-full blur-[60px]; }
    .split .brand-side::after  { content: ""; @apply absolute -bottom-32 -left-20 w-[360px] h-[360px] bg-secondary opacity-45 rounded-full blur-[60px]; }
    .split .brand-side .content { @apply relative z-10 max-w-[460px]; }
    .split .brand-side h2 { @apply text-4xl my-4 leading-[1.1]; }
    .split .brand-side ul { @apply p-0 list-none mt-7; }
    .split .brand-side ul li { @apply py-2 opacity-90; }
    .form-card    { @apply max-w-[420px] w-full mx-auto; }
    .form-card h1 { @apply text-3xl mb-2; }
    .form-card .lead { @apply text-muted-foreground mb-7; }
    .divider      { @apply flex items-center gap-3 text-muted-foreground text-xs uppercase tracking-widest my-4; }
    .divider::before, .divider::after { content: ""; @apply flex-1 h-px bg-border; }

    /* Wizard */
    .wizard            { @apply max-w-[760px] mx-auto my-14; }
    .wizard .steps     { @apply flex gap-3 mb-7; }
    .wizard .step      { @apply flex-1 flex flex-col gap-2 p-4 rounded-xl bg-card border border-border; }
    .wizard .step .num { @apply w-6 h-6 rounded-full bg-muted-foreground text-white inline-flex items-center justify-center text-[13px] font-bold; }
    .wizard .step.active     { @apply border-secondary bg-secondary-soft; }
    .wizard .step.active .num{ @apply bg-secondary; }
    .wizard .step.done .num  { @apply bg-primary; }
    .wizard .step .label     { @apply text-[13px] font-semibold; }
    .wizard .step .sub       { @apply text-xs text-muted-foreground; }

    .section-title { @apply text-[22px] mb-1.5; }
    .section-sub   { @apply text-muted-foreground mb-6; }
    .actions-row   { @apply flex justify-between items-center mt-6; }

    /* Children rows */
    .children-list { @apply flex flex-col gap-2.5 mt-3; }
    .child-row     { @apply grid grid-cols-[1fr_1fr_120px_36px] gap-2.5 items-center max-md:grid-cols-2; }
    .icon-btn      { @apply w-9 h-9 rounded-xl border border-border bg-card cursor-pointer text-muted-foreground inline-flex items-center justify-center hover:text-danger hover:border-danger; }
    .add-row-btn   { @apply mt-2 w-full p-2.5 rounded-xl border border-dashed border-border bg-transparent text-muted-foreground font-semibold cursor-pointer hover:border-secondary hover:text-secondary; }

    /* Modals */
    .modal-backdrop { @apply fixed inset-0 bg-foreground/55 backdrop-blur-sm flex items-start justify-center pt-20 pb-10 px-5 z-50 overflow-y-auto; }
    .modal          { @apply bg-card rounded-2xl shadow-elegant w-full max-w-[540px] overflow-hidden; }
    .modal.lg       { @apply max-w-[720px]; }
    .modal-head     { @apply flex justify-between items-center px-6 py-5 border-b border-border; }
    .modal-head h3  { @apply text-lg; }
    .modal-head .close { @apply bg-transparent border-0 text-2xl text-muted-foreground cursor-pointer leading-none; }
    .modal-body     { @apply p-6; }
    .modal-foot     { @apply px-6 py-4 border-t border-border flex gap-2.5 justify-end bg-muted/40; }

    .modal-grid     { @apply grid grid-cols-2 gap-6 max-md:grid-cols-1; }
    .modal-grid > .modal { @apply relative max-w-none; }
    .modal-grid .modal::before {
      content: attr(data-label);
      @apply absolute -top-7 left-0 text-xs font-semibold text-muted-foreground uppercase tracking-wider;
    }

    /* Dropdown */
    .menu-wrap     { @apply relative; }
    .dropdown      { @apply absolute right-0 top-[calc(100%+10px)] w-64 bg-card border border-border rounded-2xl shadow-elegant p-2 z-30; }
    .dropdown .dd-header { @apply p-3 border-b border-border mb-1.5; }
    .dropdown .dd-header strong { @apply block; }
    .dropdown .dd-header span   { @apply text-xs text-muted-foreground; }
    .dropdown a, .dropdown button {
      @apply flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-foreground bg-transparent border-0 w-full text-left cursor-pointer hover:bg-muted;
    }
    .dropdown .danger { @apply text-danger; }
    .dropdown hr   { @apply border-0 border-t border-border my-1.5; }

    .user-trigger  { @apply w-9 h-9 rounded-full bg-gradient-hero text-white inline-flex items-center justify-center font-bold cursor-pointer border-0; }
    .bell          { @apply relative w-9 h-9 rounded-full bg-card border border-border cursor-pointer; }
    .bell .dot     { @apply absolute top-2 right-2 w-2 h-2 rounded-full bg-danger ring-2 ring-card; }

    /* Notifications */
    .notif-panel   { @apply w-[380px]; }
    .notif-item    { @apply flex gap-3 p-3 rounded-xl hover:bg-muted; }
    .notif-item .ico { @apply w-9 h-9 rounded-xl inline-flex items-center justify-center text-base shrink-0; }
    .notif-item.success .ico { @apply bg-success-soft text-success; }
    .notif-item.warn    .ico { @apply bg-warning-soft text-warning; }
    .notif-item.info    .ico { @apply bg-primary/10 text-primary; }
    .notif-item p   { @apply text-sm; }
    .notif-item .when { @apply text-xs text-muted-foreground mt-0.5; }
    .notif-unread   { @apply absolute right-3.5 top-4 w-2 h-2 rounded-full bg-secondary; }

    /* Settings */
    .settings-layout { @apply grid grid-cols-[240px_1fr] gap-7 mt-8 max-md:grid-cols-1; }
    .settings-nav    { @apply flex flex-col gap-1; }
    .settings-nav > a{ @apply px-3.5 py-2.5 rounded-xl text-sm text-muted-foreground font-medium hover:bg-muted hover:text-foreground; }
    .settings-nav > a.active { @apply bg-primary text-primary-foreground; }

    /* Roles & avatars */
    .role-pill        { @apply text-[11px] px-2 py-0.5 rounded-full font-semibold; }
    .role-admin       { @apply bg-primary/10 text-primary; }
    .role-treasurer   { @apply bg-warning-soft text-warning; }
    .role-parent      { @apply bg-secondary-soft text-success; }
    .avatar           { @apply w-8 h-8 rounded-full bg-gradient-hero text-white inline-flex items-center justify-center text-xs font-bold mr-2.5 align-middle; }
    .row-user         { @apply flex items-center; }
    .kbd-link         { @apply inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-soft text-success text-xs font-semibold; }

    /* Footer */
    .site-footer      { @apply text-center py-10 px-6 text-muted-foreground text-sm; }
  }
`;
document.head.appendChild(style);
