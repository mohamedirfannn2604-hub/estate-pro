<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EstateAI Pro — Premium Real Estate Platform</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<style>
:root{
  --primary:#0F172A;--secondary:#2563EB;--accent:#F59E0B;--bg:#F8FAFC;
  --success:#10B981;--danger:#EF4444;--warning:#F59E0B;--muted:#64748B;
  --card-bg:rgba(255,255,255,0.85);--glass:rgba(255,255,255,0.15);
  --border:rgba(15,23,42,0.08);--shadow:0 4px 24px rgba(15,23,42,0.08);
  --shadow-lg:0 12px 48px rgba(15,23,42,0.14);
  --radius:12px;--radius-lg:20px;--radius-xl:28px;
  --transition:0.22s cubic-bezier(0.4,0,0.2,1);
}
[data-theme="dark"]{
  --primary:#F8FAFC;--bg:#0F172A;--card-bg:rgba(30,41,59,0.85);
  --glass:rgba(255,255,255,0.06);--border:rgba(255,255,255,0.08);
  --muted:#94A3B8;--shadow:0 4px 24px rgba(0,0,0,0.3);
  --shadow-lg:0 12px 48px rgba(0,0,0,0.4);
}
*{margin:0;padding:0;box-sizing:border-box;transition:background var(--transition),color var(--transition),border-color var(--transition)}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--primary);min-height:100vh;overflow-x:hidden}
h1,h2,h3,h4,h5{font-family:'Poppins',sans-serif}
.page{display:none;min-height:100vh}
.page.active{display:block}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:0 2rem;height:68px;display:flex;align-items:center;justify-content:space-between;background:var(--card-bg);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border);box-shadow:var(--shadow)}
.nav-logo{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.4rem;cursor:pointer;display:flex;align-items:center;gap:8px}
.nav-logo span:first-child{background:linear-gradient(135deg,#2563EB,#F59E0B);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{padding:7px 15px;border-radius:8px;cursor:pointer;font-size:0.875rem;font-weight:500;color:var(--muted);text-decoration:none;transition:all var(--transition)}
.nav-links a:hover,.nav-links a.active{color:var(--secondary);background:rgba(37,99,235,0.08)}
.nav-actions{display:flex;align-items:center;gap:10px}
.btn{padding:9px 20px;border-radius:var(--radius);font-size:0.875rem;font-weight:600;cursor:pointer;border:none;outline:none;transition:all var(--transition);font-family:'Inter',sans-serif}
.btn-primary{background:var(--secondary);color:#fff}
.btn-primary:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 20px rgba(37,99,235,0.35)}
.btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--border)}
.btn-ghost:hover{border-color:var(--secondary);color:var(--secondary)}
.btn-accent{background:var(--accent);color:#0F172A}
.btn-accent:hover{background:#d97706;transform:translateY(-1px)}
.btn-sm{padding:6px 14px;font-size:0.8rem}
.btn-lg{padding:13px 28px;font-size:1rem;border-radius:14px}
.theme-toggle{width:38px;height:38px;border-radius:50%;background:var(--glass);border:1px solid var(--border);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem}
.theme-toggle:hover{background:var(--border)}

/* HERO */
.hero{padding-top:68px;min-height:100vh;display:flex;align-items:center;background:linear-gradient(135deg,#0F172A 0%,#1e3a5f 50%,#0F172A 100%);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563EB' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}
.hero-content{max-width:1200px;margin:0 auto;padding:0 2rem;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;width:100%}
.hero-text h1{font-size:3.4rem;font-weight:800;line-height:1.15;color:#fff;margin-bottom:1.2rem}
.hero-text h1 .grad{background:linear-gradient(90deg,#2563EB,#F59E0B);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero-text p{color:rgba(255,255,255,0.7);font-size:1.1rem;line-height:1.7;margin-bottom:2rem}
.hero-stats{display:flex;gap:2.5rem;margin-top:2rem}
.hero-stat{text-align:center}
.hero-stat strong{display:block;font-family:'Poppins',sans-serif;font-size:1.7rem;font-weight:700;color:#fff}
.hero-stat span{font-size:0.8rem;color:rgba(255,255,255,0.55);text-transform:uppercase;letter-spacing:0.05em}
.hero-card{background:rgba(255,255,255,0.08);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.12);border-radius:var(--radius-xl);padding:2rem}
.search-box{display:flex;flex-direction:column;gap:1rem}
.search-box h3{color:#fff;font-size:1.2rem;font-weight:600}
.search-tabs{display:flex;gap:6px;background:rgba(0,0,0,0.2);padding:4px;border-radius:10px;margin-bottom:4px}
.search-tab{flex:1;padding:8px;border-radius:8px;text-align:center;cursor:pointer;font-size:0.82rem;color:rgba(255,255,255,0.6);font-weight:500;transition:all var(--transition)}
.search-tab.active{background:#2563EB;color:#fff}
.search-row{display:flex;gap:10px}
.search-input{flex:1;padding:12px 16px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);border-radius:var(--radius);color:#fff;font-family:'Inter',sans-serif;font-size:0.9rem;outline:none}
.search-input::placeholder{color:rgba(255,255,255,0.4)}
.search-input:focus{border-color:rgba(37,99,235,0.6);background:rgba(255,255,255,0.14)}
select.search-input option{background:#1e3a5f;color:#fff}
.search-filters{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}

/* SECTIONS */
.section{padding:5rem 2rem}
.container{max-width:1200px;margin:0 auto}
.section-header{text-align:center;margin-bottom:3rem}
.section-header .eyebrow{text-transform:uppercase;letter-spacing:0.1em;font-size:0.78rem;font-weight:600;color:var(--secondary);margin-bottom:10px}
.section-header h2{font-size:2.4rem;font-weight:700;margin-bottom:0.8rem}
.section-header p{color:var(--muted);max-width:560px;margin:0 auto;line-height:1.7}

/* PROPERTY CARDS */
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}
.prop-card{background:var(--card-bg);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;transition:all var(--transition);cursor:pointer}
.prop-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:rgba(37,99,235,0.2)}
.prop-img{height:200px;background:linear-gradient(135deg,#1e3a5f,#2563EB);position:relative;overflow:hidden;display:flex;align-items:flex-end}
.prop-img img{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0}
.prop-img-overlay{position:absolute;bottom:0;left:0;right:0;padding:12px;background:linear-gradient(0deg,rgba(0,0,0,0.7),transparent);display:flex;justify-content:space-between;align-items:flex-end}
.prop-badge{background:var(--secondary);color:#fff;padding:4px 10px;border-radius:6px;font-size:0.72rem;font-weight:600;text-transform:uppercase}
.prop-badge.rent{background:#7c3aed}
.prop-badge.sold{background:#6b7280}
.prop-wish{width:32px;height:32px;background:rgba(255,255,255,0.15);backdrop-filter:blur(8px);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;transition:all var(--transition)}
.prop-wish:hover,.prop-wish.active{background:rgba(239,68,68,0.8)}
.prop-body{padding:1.2rem}
.prop-price{font-family:'Poppins',sans-serif;font-size:1.3rem;font-weight:700;color:var(--secondary);margin-bottom:4px}
.prop-price small{font-size:0.75rem;font-weight:500;color:var(--muted)}
.prop-name{font-weight:600;margin-bottom:6px;font-size:0.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.prop-loc{color:var(--muted);font-size:0.82rem;margin-bottom:12px;display:flex;align-items:center;gap:4px}
.prop-meta{display:flex;gap:12px;font-size:0.78rem;color:var(--muted);padding-top:12px;border-top:1px solid var(--border)}
.prop-meta span{display:flex;align-items:center;gap:4px}
.prop-meta .icon{font-size:1rem}
.tag{display:inline-flex;align-items:center;padding:4px 10px;border-radius:6px;font-size:0.75rem;font-weight:500}
.tag-blue{background:rgba(37,99,235,0.1);color:#2563EB}
.tag-green{background:rgba(16,185,129,0.1);color:#10B981}
.tag-amber{background:rgba(245,158,11,0.1);color:#d97706}
.tag-red{background:rgba(239,68,68,0.1);color:#ef4444}
.tag-purple{background:rgba(124,58,237,0.1);color:#7c3aed}

/* DASHBOARD LAYOUT */
.dash-layout{display:flex;min-height:100vh;padding-top:68px}
.sidebar{width:240px;min-height:calc(100vh - 68px);background:var(--card-bg);backdrop-filter:blur(16px);border-right:1px solid var(--border);padding:1.5rem 1rem;position:sticky;top:68px;height:calc(100vh - 68px);overflow-y:auto;flex-shrink:0}
.sidebar-section{margin-bottom:1.5rem}
.sidebar-label{font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:var(--muted);padding:0 10px;margin-bottom:6px}
.sidebar-item{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;cursor:pointer;font-size:0.875rem;font-weight:500;color:var(--muted);transition:all var(--transition);margin-bottom:2px}
.sidebar-item:hover{background:rgba(37,99,235,0.06);color:var(--secondary)}
.sidebar-item.active{background:rgba(37,99,235,0.1);color:var(--secondary);font-weight:600}
.sidebar-item .icon{font-size:1.1rem;width:22px;text-align:center}
.sidebar-item .badge{margin-left:auto;background:var(--secondary);color:#fff;border-radius:10px;padding:1px 7px;font-size:0.7rem;font-weight:600}
.dash-content{flex:1;padding:2rem;overflow-x:hidden}
.dash-header{margin-bottom:2rem}
.dash-header h1{font-size:1.7rem;font-weight:700;margin-bottom:4px}
.dash-header p{color:var(--muted);font-size:0.9rem}

/* STAT CARDS */
.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem;margin-bottom:2rem}
.stat-card{background:var(--card-bg);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.4rem}
.stat-card .stat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:1rem}
.stat-icon-blue{background:rgba(37,99,235,0.12)}
.stat-icon-green{background:rgba(16,185,129,0.12)}
.stat-icon-amber{background:rgba(245,158,11,0.12)}
.stat-icon-purple{background:rgba(124,58,237,0.12)}
.stat-card .value{font-family:'Poppins',sans-serif;font-size:1.7rem;font-weight:700;margin-bottom:4px}
.stat-card .label{font-size:0.82rem;color:var(--muted);margin-bottom:8px}
.stat-card .change{font-size:0.78rem;font-weight:600;display:flex;align-items:center;gap:4px}
.change.up{color:#10B981}.change.down{color:#EF4444}

/* TABLES */
.table-card{background:var(--card-bg);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden}
.table-head{padding:1.2rem 1.5rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)}
.table-head h3{font-size:1rem;font-weight:600}
table{width:100%;border-collapse:collapse}
thead th{padding:0.8rem 1.2rem;text-align:left;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted);background:rgba(248,250,252,0.5);border-bottom:1px solid var(--border)}
[data-theme="dark"] thead th{background:rgba(0,0,0,0.2)}
tbody td{padding:1rem 1.2rem;border-bottom:1px solid var(--border);font-size:0.875rem}
tbody tr:last-child td{border-bottom:none}
tbody tr:hover{background:rgba(37,99,235,0.02)}

/* FORMS */
.form-group{margin-bottom:1.4rem}
.form-label{display:block;font-size:0.85rem;font-weight:600;margin-bottom:6px;color:var(--primary)}
input[type="text"],input[type="email"],input[type="tel"],input[type="number"],input[type="password"],select,textarea{width:100%;padding:11px 15px;background:var(--card-bg);border:1.5px solid var(--border);border-radius:var(--radius);font-family:'Inter',sans-serif;font-size:0.9rem;color:var(--primary);outline:none;transition:all var(--transition)}
input:focus,select:focus,textarea:focus{border-color:var(--secondary);box-shadow:0 0 0 3px rgba(37,99,235,0.1)}
select option{background:var(--bg);color:var(--primary)}
textarea{resize:vertical;min-height:100px}

/* CHART CONTAINERS */
.chart-card{background:var(--card-bg);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem}
.chart-card h3{font-size:1rem;font-weight:600;margin-bottom:1.2rem}

/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:1rem}
.modal{background:var(--card-bg);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:var(--radius-xl);padding:2rem;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg)}
.modal h2{font-size:1.4rem;font-weight:700;margin-bottom:0.4rem}
.modal p.sub{color:var(--muted);font-size:0.9rem;margin-bottom:1.8rem}
.modal-close{position:absolute;top:1.2rem;right:1.2rem;background:var(--glass);border:1px solid var(--border);border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center}

/* KANBAN */
.kanban{display:flex;gap:1.2rem;overflow-x:auto;padding-bottom:1rem}
.kanban-col{min-width:220px;background:rgba(248,250,252,0.6);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1rem}
[data-theme="dark"] .kanban-col{background:rgba(30,41,59,0.4)}
.kanban-col h4{font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center}
.kanban-card{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius);padding:1rem;margin-bottom:8px;cursor:pointer;transition:all var(--transition)}
.kanban-card:hover{transform:translateY(-2px);box-shadow:var(--shadow)}

/* PROGRESS */
.progress{height:6px;background:var(--border);border-radius:4px;overflow:hidden}
.progress-fill{height:100%;border-radius:4px;transition:width 0.6s ease}

/* AVATAR */
.avatar{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem;flex-shrink:0}
.avatar-blue{background:rgba(37,99,235,0.15);color:#2563EB}
.avatar-green{background:rgba(16,185,129,0.15);color:#10B981}
.avatar-amber{background:rgba(245,158,11,0.15);color:#d97706}

/* NOTIF DROPDOWN */
.notif-dropdown{position:absolute;top:60px;right:1rem;width:340px;background:var(--card-bg);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);z-index:1100;display:none}
.notif-dropdown.open{display:block}
.notif-item{padding:1rem 1.2rem;border-bottom:1px solid var(--border);cursor:pointer;transition:background var(--transition)}
.notif-item:hover{background:rgba(37,99,235,0.04)}
.notif-item:last-child{border-bottom:none}
.notif-item.unread{background:rgba(37,99,235,0.03)}
.notif-dot{width:8px;height:8px;border-radius:50%;background:var(--secondary);flex-shrink:0}

/* AI CHAT */
.ai-chat{position:fixed;bottom:1.5rem;right:1.5rem;z-index:1500}
.ai-chat-btn{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#2563EB,#1d4ed8);color:#fff;border:none;cursor:pointer;font-size:1.4rem;box-shadow:0 8px 24px rgba(37,99,235,0.4);transition:all var(--transition);display:flex;align-items:center;justify-content:center}
.ai-chat-btn:hover{transform:scale(1.08);box-shadow:0 12px 32px rgba(37,99,235,0.5)}
.ai-chat-window{position:absolute;bottom:70px;right:0;width:360px;background:var(--card-bg);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:var(--radius-xl);box-shadow:var(--shadow-lg);display:none;flex-direction:column;height:460px}
.ai-chat-window.open{display:flex}
.ai-chat-header{padding:1rem 1.2rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px}
.ai-indicator{width:8px;height:8px;border-radius:50%;background:#10B981;box-shadow:0 0 0 2px rgba(16,185,129,0.3);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 0 2px rgba(16,185,129,0.3)}50%{box-shadow:0 0 0 5px rgba(16,185,129,0.1)}}
.ai-chat-msgs{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:10px}
.ai-msg{max-width:85%;padding:10px 14px;border-radius:14px;font-size:0.85rem;line-height:1.5}
.ai-msg.ai{background:rgba(37,99,235,0.1);align-self:flex-start;border-bottom-left-radius:4px}
.ai-msg.user{background:var(--secondary);color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
.ai-chat-input{padding:0.8rem;border-top:1px solid var(--border);display:flex;gap:8px}
.ai-chat-input input{flex:1;padding:9px 14px;background:rgba(248,250,252,0.6);border:1px solid var(--border);border-radius:10px;font-family:'Inter',sans-serif;font-size:0.85rem;color:var(--primary);outline:none}
[data-theme="dark"] .ai-chat-input input{background:rgba(30,41,59,0.6)}
.ai-send{padding:9px 14px;background:var(--secondary);color:#fff;border:none;border-radius:10px;cursor:pointer;font-size:0.9rem}

/* GLASSMORPHISM FEATURE */
.glass-card{background:var(--glass);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.15);border-radius:var(--radius-lg)}

/* CALCULATOR */
.calc-section{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.8rem}
.calc-result{background:linear-gradient(135deg,rgba(37,99,235,0.1),rgba(245,158,11,0.05));border:1px solid rgba(37,99,235,0.15);border-radius:var(--radius);padding:1.2rem;margin-top:1.2rem;text-align:center}
.calc-result .amount{font-family:'Poppins',sans-serif;font-size:2rem;font-weight:700;color:var(--secondary)}
input[type="range"]{-webkit-appearance:none;width:100%;height:4px;border-radius:4px;background:var(--border);outline:none;margin:8px 0}
input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:var(--secondary);cursor:pointer;box-shadow:0 2px 8px rgba(37,99,235,0.4)}

/* STEPS */
.steps{display:flex;gap:0;margin-bottom:2rem;border-bottom:2px solid var(--border)}
.step{padding:12px 24px;font-size:0.85rem;font-weight:600;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;display:flex;align-items:center;gap:8px;transition:all var(--transition)}
.step.active{color:var(--secondary);border-bottom-color:var(--secondary)}
.step .step-num{width:22px;height:22px;border-radius:50%;background:var(--border);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700}
.step.active .step-num,.step.done .step-num{background:var(--secondary);color:#fff}

/* TOAST */
.toast{position:fixed;top:80px;right:1.5rem;z-index:3000;background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius);padding:1rem 1.4rem;box-shadow:var(--shadow-lg);display:flex;align-items:center;gap:10px;font-size:0.875rem;font-weight:500;opacity:0;transform:translateX(100%);transition:all 0.35s ease;max-width:340px}
.toast.show{opacity:1;transform:translateX(0)}
.toast-icon{font-size:1.2rem}

/* HOW IT WORKS */
.how-step{text-align:center;padding:2rem 1.5rem}
.how-num{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#2563EB,#1d4ed8);color:#fff;font-family:'Poppins',sans-serif;font-weight:700;font-size:1.2rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem}
.how-step h3{font-size:1.1rem;font-weight:600;margin-bottom:0.6rem}
.how-step p{color:var(--muted);font-size:0.9rem;line-height:1.6}

/* TESTIMONIALS */
.testimonial{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.8rem}
.testimonial p{font-size:0.95rem;line-height:1.7;color:var(--muted);margin-bottom:1.2rem;font-style:italic}
.testimonial-author{display:flex;align-items:center;gap:12px}
.stars{color:#F59E0B;font-size:0.9rem;margin-bottom:6px}

/* FOOTER */
footer{background:#0F172A;color:rgba(255,255,255,0.7);padding:4rem 2rem 2rem}
.footer-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{font-size:0.88rem;line-height:1.7;margin-top:0.8rem;max-width:260px}
.footer-col h4{color:#fff;font-weight:600;margin-bottom:1rem;font-size:0.95rem}
.footer-col a{display:block;color:rgba(255,255,255,0.55);font-size:0.875rem;margin-bottom:8px;cursor:pointer;transition:color var(--transition)}
.footer-col a:hover{color:#2563EB}
.footer-bottom{border-top:1px solid rgba(255,255,255,0.08);padding-top:2rem;max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;font-size:0.82rem}

/* ROLE SELECTOR */
.role-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-bottom:1.5rem}
.role-card{padding:1.2rem;border:2px solid var(--border);border-radius:var(--radius);cursor:pointer;transition:all var(--transition);text-align:center}
.role-card:hover{border-color:rgba(37,99,235,0.4);background:rgba(37,99,235,0.03)}
.role-card.selected{border-color:var(--secondary);background:rgba(37,99,235,0.06)}
.role-card .role-icon{font-size:2rem;margin-bottom:8px}
.role-card h4{font-size:0.9rem;font-weight:600}
.role-card p{font-size:0.78rem;color:var(--muted);margin-top:3px}

/* PROPERTY DETAIL */
.prop-gallery{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:200px 200px;gap:10px;border-radius:var(--radius-lg);overflow:hidden;margin-bottom:2rem}
.gallery-main{grid-row:span 2;background:linear-gradient(135deg,#1e3a5f,#2563EB);position:relative}
.gallery-thumb{background:linear-gradient(135deg,#2563EB,#7c3aed);position:relative}
.gallery-img{width:100%;height:100%;object-fit:cover}

/* AGENT CARD */
.agent-card{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px}
.agent-avatar{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#2563EB,#7c3aed);display:flex;align-items:center;justify-content:center;color:#fff;font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700}
.agent-name{font-weight:700;font-size:1rem}
.agent-title{font-size:0.8rem;color:var(--muted)}
.agent-stats{display:flex;gap:1.5rem;margin-top:0.5rem}
.agent-stat{text-align:center}
.agent-stat strong{display:block;font-weight:700;font-size:1rem;color:var(--secondary)}
.agent-stat span{font-size:0.72rem;color:var(--muted)}

/* ALERT */
.alert{padding:1rem 1.2rem;border-radius:var(--radius);font-size:0.875rem;margin-bottom:1rem;display:flex;align-items:flex-start;gap:10px}
.alert-info{background:rgba(37,99,235,0.08);border:1px solid rgba(37,99,235,0.2);color:#1d4ed8}
.alert-success{background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);color:#047857}
.alert-warning{background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);color:#92400e}

/* MAP PLACEHOLDER */
.map-box{height:380px;background:linear-gradient(135deg,#e0eaff,#dbeafe);border-radius:var(--radius-lg);overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;border:1px solid var(--border)}
[data-theme="dark"] .map-box{background:linear-gradient(135deg,#1e3a5f,#1e293b)}
.map-pin{position:absolute;width:20px;height:20px;border-radius:50%;background:var(--secondary);border:3px solid #fff;box-shadow:0 2px 8px rgba(37,99,235,0.5);cursor:pointer;transition:transform var(--transition)}
.map-pin:hover{transform:scale(1.3)}
.map-pin-label{position:absolute;background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:5px 10px;font-size:0.75rem;font-weight:600;white-space:nowrap;box-shadow:var(--shadow);transform:translateX(-50%);top:-32px;left:50%}

/* COMPARISON */
.compare-table table td:first-child{font-weight:500;color:var(--muted)}
.compare-table table td{padding:0.9rem 1.2rem;border-bottom:1px solid var(--border);font-size:0.875rem}
.check{color:#10B981;font-weight:700}
.cross{color:#EF4444;font-weight:700}

/* TIMELINE */
.timeline{position:relative;padding-left:2rem}
.timeline::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:2px;background:var(--border)}
.tl-item{position:relative;margin-bottom:1.5rem;padding-left:1rem}
.tl-dot{position:absolute;left:-1.75rem;top:4px;width:14px;height:14px;border-radius:50%;background:var(--secondary);border:2px solid var(--card-bg)}
.tl-dot.done{background:#10B981}
.tl-date{font-size:0.75rem;color:var(--muted);margin-bottom:3px}
.tl-title{font-weight:600;font-size:0.875rem}
.tl-desc{font-size:0.82rem;color:var(--muted);margin-top:3px}

/* SUBSCRIPTION CARDS */
.plan-card{background:var(--card-bg);border:2px solid var(--border);border-radius:var(--radius-xl);padding:2rem;text-align:center;transition:all var(--transition);cursor:pointer;position:relative}
.plan-card:hover{border-color:var(--secondary);transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.plan-card.featured{border-color:var(--secondary);background:linear-gradient(180deg,rgba(37,99,235,0.05),rgba(37,99,235,0));} 
.plan-badge{background:var(--secondary);color:#fff;font-size:0.72rem;font-weight:700;padding:4px 12px;border-radius:20px;position:absolute;top:-12px;left:50%;transform:translateX(-50%);white-space:nowrap}
.plan-price{font-family:'Poppins',sans-serif;font-size:2.8rem;font-weight:800;color:var(--secondary);margin:1rem 0 0.3rem}
.plan-price sup{font-size:1.2rem;vertical-align:super}
.plan-price span{font-size:0.9rem;color:var(--muted)}
.plan-feature{font-size:0.875rem;color:var(--muted);padding:7px 0;border-bottom:1px solid var(--border);text-align:left;display:flex;align-items:center;gap:8px}
.plan-feature:last-of-type{border-bottom:none}
.plan-feature .check{font-size:0.9rem}

/* REVIEW */
.review-card{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.4rem}
.review-text{font-size:0.9rem;color:var(--muted);line-height:1.6;margin:0.8rem 0}

/* RESPONSIVE */
@media(max-width:1024px){
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .footer-grid{grid-template-columns:1fr 1fr}
  .stat-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
  .hero-content{grid-template-columns:1fr;gap:2.5rem;padding-top:2rem}
  .hero-text h1{font-size:2.2rem}
  .grid-3,.grid-2{grid-template-columns:1fr}
  nav{padding:0 1rem}
  .nav-links{display:none}
  .dash-layout{flex-direction:column}
  .sidebar{width:100%;min-height:auto;position:static;height:auto;overflow-x:auto;white-space:nowrap;display:flex;gap:4px;padding:0.6rem}
  .sidebar-section{margin:0;display:flex;gap:4px}
  .sidebar-label{display:none}
  .sidebar-item{border-radius:8px;padding:7px 12px;white-space:nowrap;flex-shrink:0}
  .stat-grid{grid-template-columns:repeat(2,1fr)}
  .role-grid{grid-template-columns:repeat(2,1fr)}
  .prop-gallery{grid-template-columns:1fr;grid-template-rows:220px 140px 140px}
  .gallery-main{grid-row:span 1}
  .ai-chat-window{width:calc(100vw - 3rem);right:0}
}
@media(max-width:480px){
  .stat-grid{grid-template-columns:1fr 1fr}
  .hero-stats{gap:1.5rem}
  .search-row{flex-direction:column}
  .search-filters{grid-template-columns:1fr 1fr}
}
</style>
</head>
<body data-theme="light">

<!-- NAV -->
<nav>
  <div class="nav-logo" onclick="showPage('landing')">
    <span>Estate</span><span style="color:var(--accent);font-family:'Poppins',sans-serif">AI</span>&nbsp;Pro
  </div>
  <div class="nav-links" id="navLinks">
    <a onclick="showPage('landing')" id="nav-landing" class="active">Home</a>
    <a onclick="showPage('listings')" id="nav-listings">Buy / Rent</a>
    <a onclick="showPage('agents')" id="nav-agents">Agents</a>
    <a onclick="showPage('pricing')" id="nav-pricing">Pricing</a>
    <a onclick="showPage('about')" id="nav-about">About</a>
  </div>
  <div class="nav-actions">
    <button class="theme-toggle" id="themeToggle" onclick="toggleTheme()" title="Toggle dark mode">🌙</button>
    <div style="position:relative">
      <button class="btn btn-ghost btn-sm" onclick="toggleNotif()" id="notifBtn">🔔</button>
      <div class="notif-dropdown" id="notifDropdown">
        <div style="padding:1rem 1.2rem;border-bottom:1px solid var(--border);font-weight:600;font-size:0.9rem;display:flex;justify-content:space-between"><span>Notifications</span><span onclick="document.getElementById('notifDropdown').classList.remove('open')" style="cursor:pointer;color:var(--muted)">✕</span></div>
        <div style="padding:2rem 1.2rem;text-align:center;color:var(--muted);font-size:0.85rem">No notifications yet</div>
      </div>
    </div>
    <span id="navAuthArea" style="display:inline-flex;gap:8px;align-items:center">
      <button class="btn btn-ghost btn-sm" onclick="showModal('loginModal')">Sign In</button>
      <button class="btn btn-primary btn-sm" onclick="showModal('registerModal')">Get Started</button>
    </span>
    <button class="btn btn-ghost btn-sm" style="border-color:rgba(245,158,11,0.4);color:#d97706" onclick="showPage('admin')">Admin</button>
  </div>
</nav>

<!-- TOAST -->
<div class="toast" id="toast">
  <span class="toast-icon" id="toastIcon">✅</span>
  <span id="toastMsg">Action completed</span>
</div>

<!-- ===== LANDING PAGE ===== -->
<div class="page active" id="page-landing">
  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <div class="tag tag-blue" style="margin-bottom:1rem">✨ AI-Powered Real Estate Platform</div>
        <h1>Find Your <span class="grad">Dream Property</span><br>with AI Intelligence</h1>
        <p>AI-driven recommendations, virtual tours, and end-to-end buying/renting experience — all in one platform.</p>
        <div class="hero-stats">
          <div class="hero-stat"><strong id="statListings">—</strong><span>Listings</span></div>
          <div class="hero-stat"><strong id="statAgents">—</strong><span>Agents</span></div>
          <div class="hero-stat"><strong id="statCities">—</strong><span>Cities</span></div>
        </div>
      </div>
      <div class="hero-card">
        <div class="search-box">
          <h3>🔍 Search Properties</h3>
          <div class="search-tabs">
            <div class="search-tab active" onclick="setSTab(this,'Buy')">Buy</div>
            <div class="search-tab" onclick="setSTab(this,'Rent')">Rent</div>
            <div class="search-tab" onclick="setSTab(this,'Commercial')">Commercial</div>
            <div class="search-tab" onclick="setSTab(this,'PG/Co-living')">PG / Co-living</div>
          </div>
          <div class="search-row">
            <input class="search-input" type="text" placeholder="🏙 City, locality, landmark..." id="heroSearch">
          </div>
          <div class="search-filters">
            <select class="search-input">
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Office Space</option>
              <option>Shop / Retail</option>
            </select>
            <select class="search-input">
              <option>Any BHK</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4+ BHK</option>
            </select>
            <select class="search-input">
              <option>Budget</option>
              <option>Under ₹30L</option>
              <option>₹30L–₹60L</option>
              <option>₹60L–₹1Cr</option>
              <option>₹1Cr–₹3Cr</option>
              <option>Above ₹3Cr</option>
            </select>
          </div>
          <button class="btn btn-primary" style="width:100%;padding:13px" onclick="showPage('listings');showToast('Searching properties...','🔍')">Search Properties →</button>
          <div style="text-align:center;color:rgba(255,255,255,0.45);font-size:0.78rem;margin-top:6px">🤖 AI will suggest best matches for you</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED PROPERTIES -->
  <section class="section" style="background:var(--bg)">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Featured Properties</div>
        <h2>Handpicked Premium Listings</h2>
        <p>AI-curated properties based on popularity, verified status, and investment potential</p>
      </div>
      <div class="grid-3" id="featuredGrid"></div>
      <div style="text-align:center;margin-top:2.5rem">
        <button class="btn btn-ghost btn-lg" onclick="showPage('listings')">View All Properties →</button>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section" style="background:linear-gradient(135deg,#0F172A 0%,#1e3a5f 100%)">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow" style="color:#F59E0B">How It Works</div>
        <h2 style="color:#fff">Simple. Smart. Seamless.</h2>
        <p style="color:rgba(255,255,255,0.6)">From discovery to possession — your entire real estate journey in 4 steps</p>
      </div>
      <div class="grid-4">
        <div class="how-step glass-card"><div class="how-num">1</div><h3 style="color:#fff">Search & Discover</h3><p style="color:rgba(255,255,255,0.6)">Use AI-powered search with smart filters to find properties that match your exact needs.</p></div>
        <div class="how-step glass-card"><div class="how-num">2</div><h3 style="color:#fff">Virtual Tour</h3><p style="color:rgba(255,255,255,0.6)">Take 360° virtual tours, view floor plans, and compare properties from anywhere.</p></div>
        <div class="how-step glass-card"><div class="how-num">3</div><h3 style="color:#fff">Connect & Verify</h3><p style="color:rgba(255,255,255,0.6)">Chat directly with verified agents, schedule site visits, and complete KYC digitally.</p></div>
        <div class="how-step glass-card"><div class="how-num">4</div><h3 style="color:#fff">Close the Deal</h3><p style="color:rgba(255,255,255,0.6)">Sign agreements digitally, manage payments, and get possession — all on one platform.</p></div>
      </div>
    </div>
  </section>

  <!-- AI FEATURES BANNER -->
  <section class="section">
    <div class="container">
      <div style="background:linear-gradient(135deg,rgba(37,99,235,0.08),rgba(245,158,11,0.05));border:1px solid rgba(37,99,235,0.15);border-radius:var(--radius-xl);padding:3rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center">
        <div>
          <div class="tag tag-amber" style="margin-bottom:1rem">🤖 Powered by AI</div>
          <h2 style="margin-bottom:1rem">Intelligent Real Estate at Your Fingertips</h2>
          <p style="color:var(--muted);margin-bottom:1.5rem;line-height:1.7">These AI-powered features — price prediction, smart recommendations, and auto-generated descriptions — are planned but not yet connected to a real backend.</p>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;background:rgba(37,99,235,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem">🧠</div><div><div style="font-weight:600;font-size:0.9rem">AI Price Prediction</div><div style="font-size:0.8rem;color:var(--muted)">Accurate valuations with market trend analysis</div></div></div>
            <div style="display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;background:rgba(16,185,129,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem">🎯</div><div><div style="font-weight:600;font-size:0.9rem">Smart Recommendations</div><div style="font-size:0.8rem;color:var(--muted)">Personalized listings based on your preferences</div></div></div>
            <div style="display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;background:rgba(245,158,11,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem">✍️</div><div><div style="font-weight:600;font-size:0.9rem">Auto Description Generator</div><div style="font-size:0.8rem;color:var(--muted)">AI writes compelling property descriptions</div></div></div>
          </div>
        </div>
        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.8rem">
          <div style="font-weight:600;margin-bottom:1rem;font-size:0.95rem">🔮 AI Price Prediction <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.65rem;margin-left:4px">Example only — not a real prediction</span></div>
          <div style="background:linear-gradient(135deg,rgba(37,99,235,0.08),rgba(37,99,235,0.02));border:1px solid rgba(37,99,235,0.15);border-radius:var(--radius);padding:1.2rem;margin-bottom:1rem">
            <div style="font-size:0.78rem;color:var(--muted);margin-bottom:4px">Illustrative example — Bandra West, 3BHK</div>
            <div style="font-family:'Poppins',sans-serif;font-size:2rem;font-weight:800;color:var(--secondary)">₹2.85 Cr</div>
            <div style="font-size:0.78rem;color:var(--muted);margin-top:4px">This feature isn't connected to a real pricing model yet</div>
          </div>
          <div style="padding:2rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->


  <!-- FOOTER -->
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.3rem;color:#fff">EstateAI Pro</div>
        <p>India's most intelligent real estate platform. AI-powered discovery, verified listings, and end-to-end transaction support.</p>
        <div style="display:flex;gap:10px;margin-top:1rem">
          <span style="background:rgba(255,255,255,0.08);padding:8px 12px;border-radius:8px;font-size:0.75rem;color:rgba(255,255,255,0.6)">🏆 Best PropTech 2024</span>
          <span style="background:rgba(255,255,255,0.08);padding:8px 12px;border-radius:8px;font-size:0.75rem;color:rgba(255,255,255,0.6)">🔒 RERA Compliant</span>
        </div>
      </div>
      <div class="footer-col"><h4>Platform</h4><a onclick="showPage('listings')">Buy Property</a><a onclick="showPage('listings')">Rent Property</a><a>Commercial</a><a>New Projects</a><a>Plot / Land</a></div>
      <div class="footer-col"><h4>Company</h4><a onclick="showPage('about')">About Us</a><a>Careers</a><a>Press</a><a>Blog</a><a>Partners</a></div>
      <div class="footer-col"><h4>Support</h4><a>Help Center</a><a>Contact Us</a><a>Privacy Policy</a><a>Terms of Service</a><a>RERA Info</a></div>
    </div>
    <div class="footer-bottom"><span>© 2025 EstateAI Pro. All rights reserved.</span><span style="color:rgba(255,255,255,0.4)">Made with ❤️ in India</span></div>
  </footer>
</div>

<!-- ===== LISTINGS PAGE ===== -->
<div class="page" id="page-listings">
  <div style="padding-top:68px;display:flex;gap:0;min-height:100vh">
    <!-- FILTERS SIDEBAR -->
    <div style="width:280px;min-height:calc(100vh-68px);background:var(--card-bg);border-right:1px solid var(--border);padding:1.5rem;position:sticky;top:68px;height:calc(100vh - 68px);overflow-y:auto;flex-shrink:0">
      <div style="font-weight:700;font-size:1rem;margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center">Filters <button class="btn btn-ghost btn-sm" onclick="showToast('Filters cleared','🧹')">Clear</button></div>
      <div class="form-group"><label class="form-label">Property For</label><div style="display:flex;gap:8px"><button class="btn btn-primary btn-sm" id="filterBuy" onclick="setFilter('Buy')">Buy</button><button class="btn btn-ghost btn-sm" id="filterRent" onclick="setFilter('Rent')">Rent</button><button class="btn btn-ghost btn-sm" id="filterPG" onclick="setFilter('PG')">PG</button></div></div>
      <div class="form-group"><label class="form-label">City</label><select id="cityFilterSelect"><option>All Cities</option><option>Mumbai</option><option>Delhi NCR</option><option>Bangalore</option><option>Hyderabad</option><option>Chennai</option><option>Pune</option><option>Kolkata</option></select></div>
      <div class="form-group"><label class="form-label">Property Type</label><div style="display:flex;flex-wrap:wrap;gap:6px"><span class="tag tag-blue" style="cursor:pointer">Apartment</span><span class="tag" style="background:var(--border);cursor:pointer">Villa</span><span class="tag" style="background:var(--border);cursor:pointer">Plot</span><span class="tag" style="background:var(--border);cursor:pointer">Office</span><span class="tag" style="background:var(--border);cursor:pointer">Shop</span></div></div>
      <div class="form-group"><label class="form-label">BHK Type</label><div style="display:flex;flex-wrap:wrap;gap:6px"><span class="tag tag-blue" style="cursor:pointer">1 BHK</span><span class="tag tag-blue" style="cursor:pointer">2 BHK</span><span class="tag" style="background:var(--border);cursor:pointer">3 BHK</span><span class="tag" style="background:var(--border);cursor:pointer">4+ BHK</span></div></div>
      <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Price Range <span id="priceRangeLabel" style="color:var(--secondary);font-weight:600">₹30L – ₹2Cr</span></label><input type="range" min="10" max="500" value="200" oninput="updatePriceRange(this.value)" style="margin-top:8px"></div>
      <div class="form-group"><label class="form-label">Area (sq ft)</label><div style="display:flex;gap:8px"><input type="number" placeholder="Min" style="width:50%"><input type="number" placeholder="Max" style="width:50%"></div></div>
      <div class="form-group"><label class="form-label">Amenities</label><div style="display:flex;flex-direction:column;gap:8px;font-size:0.85rem"><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" checked> Swimming Pool</label><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" checked> Gym / Fitness</label><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox"> Club House</label><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox"> Power Backup</label><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox"> 24×7 Security</label><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox"> Kids Play Area</label></div></div>
      <div class="form-group"><label class="form-label">Possession</label><select><option>Any</option><option>Ready to Move</option><option>Under Construction</option><option>New Launch</option></select></div>
      <button class="btn btn-primary" style="width:100%" onclick="showToast('Applying filters...','🔍')">Apply Filters</button>
    </div>
    <!-- LISTINGS CONTENT -->
    <div style="flex:1;padding:1.5rem">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:gap;">
        <div><h2 id="listingsCountHeading" style="font-size:1.3rem;font-weight:700">Loading properties…</h2><p style="color:var(--muted);font-size:0.85rem">Search and filter to find your next home</p></div>
        <div style="display:flex;align-items:center;gap:10px">
          <select id="listingsSortSelect" style="width:auto;padding:8px 12px"><option>Relevance</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Newest First</option><option>Most Popular</option></select>
          <div style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" onclick="showToast('List view','📋')" title="List view">☰</button>
            <button class="btn btn-primary btn-sm" title="Grid view">⊞</button>
            <button class="btn btn-ghost btn-sm" onclick="showPage('map')" title="Map view">🗺</button>
          </div>
        </div>
      </div>
      <div class="grid-3" id="listingsGrid"></div>
      <div style="display:flex;justify-content:center;align-items:center;gap:8px;margin-top:2rem">
        <button class="btn btn-ghost btn-sm">← Prev</button>
        <button class="btn btn-primary btn-sm">1</button><button class="btn btn-ghost btn-sm">2</button><button class="btn btn-ghost btn-sm">3</button><span style="color:var(--muted)">…</span><button class="btn btn-ghost btn-sm">24</button>
        <button class="btn btn-ghost btn-sm">Next →</button>
      </div>
    </div>
  </div>
</div>

<!-- ===== PROPERTY DETAIL PAGE ===== -->
<div class="page" id="page-detail">
  <div style="padding-top:68px">
    <div class="container section">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:1.5rem;font-size:0.85rem;color:var(--muted)">
        <span onclick="showPage('listings')" style="cursor:pointer;color:var(--secondary)">Properties</span> / <span>Mumbai</span> / <span>Bandra West</span> / <span style="color:var(--primary)">Prestige Sky High</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem">
        <div>
          <div style="display:flex;gap:8px;margin-bottom:8px"><span class="tag tag-green">✓ RERA Verified</span><span class="tag tag-blue">Ready to Move</span><span class="tag tag-amber">Premium</span></div>
          <h1 style="font-size:2rem;font-weight:800;margin-bottom:6px">Prestige Sky High — 3BHK Luxury Apartment</h1>
          <p style="color:var(--muted)">📍 Bandra West, Mumbai, Maharashtra — 400050</p>
        </div>
        <div style="text-align:right">
          <div style="font-family:'Poppins',sans-serif;font-size:2.2rem;font-weight:800;color:var(--secondary)">₹2.85 Cr</div>
          <div style="color:var(--muted);font-size:0.85rem">₹18,500 / sq ft</div>
          <div style="display:flex;gap:8px;margin-top:8px;justify-content:flex-end">
            <button class="btn btn-ghost btn-sm" onclick="showToast('This page isn\'t connected to the real wishlist yet','❤️')">♡ Wishlist</button>
            <button class="btn btn-ghost btn-sm" onclick="showToast('Sharing isn\'t connected yet','🔗')">🔗 Share</button>
          </div>
        </div>
      </div>
      <!-- GALLERY -->
      <div class="prop-gallery">
        <div class="gallery-main" style="background:linear-gradient(135deg,#1e3a5f 0%,#2563EB 50%,#7c3aed 100%);display:flex;align-items:center;justify-content:center;font-size:4rem;color:rgba(255,255,255,0.3)">🏙<div style="position:absolute;bottom:1rem;left:1rem"><button class="btn" style="background:rgba(0,0,0,0.5);color:#fff;border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(8px)" onclick="showToast('Virtual tours aren\'t connected yet','🥽')">🥽 360° Virtual Tour</button></div></div>
        <div class="gallery-thumb" style="background:linear-gradient(135deg,#2563EB,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(255,255,255,0.3)">🛋</div>
        <div class="gallery-thumb" style="background:linear-gradient(135deg,#7c3aed,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(255,255,255,0.3)">🛁</div>
      </div>
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:2rem">
        <div>
          <!-- KEY DETAILS -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem">
              <div style="text-align:center;padding:1rem;background:rgba(248,250,252,0.5);border-radius:var(--radius)"><div style="font-size:1.5rem">🛏</div><div style="font-weight:700;font-size:1.1rem;margin-top:4px">3</div><div style="font-size:0.78rem;color:var(--muted)">Bedrooms</div></div>
              <div style="text-align:center;padding:1rem;background:rgba(248,250,252,0.5);border-radius:var(--radius)"><div style="font-size:1.5rem">🛁</div><div style="font-weight:700;font-size:1.1rem;margin-top:4px">3</div><div style="font-size:0.78rem;color:var(--muted)">Bathrooms</div></div>
              <div style="text-align:center;padding:1rem;background:rgba(248,250,252,0.5);border-radius:var(--radius)"><div style="font-size:1.5rem">📐</div><div style="font-weight:700;font-size:1.1rem;margin-top:4px">1,540</div><div style="font-size:0.78rem;color:var(--muted)">Sq Ft</div></div>
              <div style="text-align:center;padding:1rem;background:rgba(248,250,252,0.5);border-radius:var(--radius)"><div style="font-size:1.5rem">🚗</div><div style="font-weight:700;font-size:1.1rem;margin-top:4px">2</div><div style="font-size:0.78rem;color:var(--muted)">Parking</div></div>
            </div>
          </div>
          <!-- DESCRIPTION -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <h3>About This Property</h3>
            <p style="color:var(--muted);line-height:1.8;font-size:0.9rem">Introducing Prestige Sky High — a masterpiece of luxury living in the heart of Bandra West. This expansive 3BHK apartment on the 18th floor offers breathtaking sea views and a lifestyle that redefines premium living in Mumbai. Featuring Italian marble flooring, modular kitchen with premium appliances, and floor-to-ceiling windows, every detail has been meticulously crafted.</p>
            <p style="color:var(--muted);line-height:1.8;font-size:0.9rem;margin-top:0.8rem">Located minutes from the Bandra-Worli Sea Link, top schools, luxury malls, and fine dining, this is an opportunity to own a piece of Mumbai's most coveted real estate.</p>
          </div>
          <!-- AMENITIES -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <h3>Amenities & Features</h3>
            <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:1rem">
              <span class="tag tag-blue">🏊 Swimming Pool</span><span class="tag tag-blue">💪 Gymnasium</span><span class="tag tag-green">🔐 24×7 Security</span><span class="tag tag-green">⚡ Power Backup</span><span class="tag tag-amber">🎾 Sports Complex</span><span class="tag tag-amber">🧘 Yoga Deck</span><span class="tag tag-purple">🛗 High-Speed Lifts</span><span class="tag tag-purple">🌳 Landscaped Gardens</span><span class="tag tag-blue">🎮 Kids Zone</span><span class="tag tag-green">🏪 Mini Supermart</span>
            </div>
          </div>
          <!-- PRICE HISTORY -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <h3>Price History & Trends <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3>
            <div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div>
          </div>
          <!-- MAP -->
          <div class="chart-card">
            <h3>Location Map</h3>
            <div class="map-box" style="height:280px;margin-top:1rem">
              <div style="position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(37,99,235,0.03) 0,rgba(37,99,235,0.03) 1px,transparent 0,transparent 50%);background-size:20px 20px"></div>
              <div class="map-pin" style="left:50%;top:48%;transform:translateX(-50%) translateY(-50%)"><div class="map-pin-label">Prestige Sky High</div></div>
              <div class="map-pin" style="left:38%;top:35%;background:#10B981"><div class="map-pin-label" style="top:-32px">Metro Station</div></div>
              <div class="map-pin" style="left:62%;top:60%;background:#F59E0B"><div class="map-pin-label">Shopping Mall</div></div>
              <div style="position:absolute;bottom:1rem;left:1rem;background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-size:0.75rem">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><div style="width:10px;height:10px;border-radius:50%;background:var(--secondary)"></div>Property</div>
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><div style="width:10px;height:10px;border-radius:50%;background:#10B981"></div>Metro</div>
                <div style="display:flex;align-items:center;gap:6px"><div style="width:10px;height:10px;border-radius:50%;background:#F59E0B"></div>Amenities</div>
              </div>
            </div>
          </div>
        </div>
        <!-- RIGHT SIDEBAR -->
        <div>
          <!-- AGENT CARD -->
          <div class="agent-card" style="margin-bottom:1.2rem">
            <div class="agent-avatar">RK</div>
            <div class="agent-name">Rohit Kapoor</div>
            <div class="agent-title">Senior Property Consultant</div>
            <div class="agent-stats"><div class="agent-stat"><strong>284</strong><span>Deals</span></div><div class="agent-stat"><strong>8yr</strong><span>Experience</span></div></div>
            <button class="btn btn-primary" style="width:100%" onclick="showToast('Calling isn\'t connected yet','📞')">📞 Call Agent</button>
            <button class="btn btn-ghost" style="width:100%" onclick="showToast('Chat isn\'t connected yet','💬')">💬 Chat Now</button>
          </div>
          <!-- EMI CALC -->
          <div class="calc-section" style="margin-bottom:1.2rem">
            <h3 style="font-size:1rem;font-weight:600;margin-bottom:1rem">🏦 EMI Calculator</h3>
            <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Loan Amount <span id="loanAmt" style="color:var(--secondary)">₹2.28 Cr</span></label><input type="range" min="10" max="500" value="228" oninput="calcEMI()"></div>
            <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Interest Rate <span id="iRate" style="color:var(--secondary)">8.5%</span></label><input type="range" min="6" max="15" step="0.1" value="8.5" id="rateSlider" oninput="calcEMI()"></div>
            <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Tenure <span id="tenure" style="color:var(--secondary)">20 Years</span></label><input type="range" min="1" max="30" value="20" id="tenureSlider" oninput="calcEMI()"></div>
            <div class="calc-result"><div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px">Monthly EMI</div><div class="amount" id="emiResult">₹1,98,612</div><div style="font-size:0.78rem;color:var(--muted);margin-top:4px">Total Interest: ₹2.49 Cr</div></div>
            <button class="btn btn-ghost" style="width:100%;margin-top:10px" onclick="showPage('calculator')">Full Financial Calculator →</button>
          </div>
          <!-- DOCUMENTS -->
          <div class="chart-card">
            <h3 style="font-size:0.95rem;margin-bottom:1rem">📄 Documents Available</h3>
            <div style="display:flex;flex-direction:column;gap:8px">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:rgba(37,99,235,0.05);border-radius:8px"><span style="font-size:0.82rem">Floor Plan.pdf</span><button class="btn btn-ghost btn-sm" onclick="showToast('Document downloads aren\'t connected yet','📥')">⬇ Download</button></div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:rgba(16,185,129,0.05);border-radius:8px"><span style="font-size:0.82rem">RERA Certificate.pdf</span><button class="btn btn-ghost btn-sm" onclick="showToast('Document downloads aren\'t connected yet','📥')">⬇ Download</button></div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:rgba(245,158,11,0.05);border-radius:8px"><span style="font-size:0.82rem">Brochure.pdf</span><button class="btn btn-ghost btn-sm" onclick="showToast('Document downloads aren\'t connected yet','📥')">⬇ Download</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== MAP SEARCH PAGE ===== -->
<div class="page" id="page-map">
  <div style="padding-top:68px;height:100vh;display:flex;flex-direction:column">
    <div style="padding:1rem 1.5rem;background:var(--card-bg);border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:center">
      <input type="text" placeholder="🔍 Search by locality, landmark..." style="max-width:340px">
      <select style="width:auto"><option>All Types</option><option>Apartment</option><option>Villa</option><option>Plot</option></select>
      <select style="width:auto"><option>Any BHK</option><option>2 BHK</option><option>3 BHK</option></select>
      <select style="width:auto"><option>Budget</option><option>Under ₹50L</option><option>₹50L-₹1Cr</option><option>Above ₹1Cr</option></select>
      <button class="btn btn-primary btn-sm" onclick="showToast('Map search isn\'t connected to a backend yet','🗺')">Search</button>
      <button class="btn btn-ghost btn-sm" onclick="showPage('listings')">☰ List View</button>
    </div>
    <div style="flex:1;position:relative;overflow:hidden">
      <div class="map-box" style="width:100%;height:100%;border-radius:0;border:none">
        <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(37,99,235,0.03) 0,rgba(37,99,235,0.03) 1px,transparent 0,transparent 40px),repeating-linear-gradient(90deg,rgba(37,99,235,0.03) 0,rgba(37,99,235,0.03) 1px,transparent 0,transparent 40px)"></div>
        <div style="position:absolute;top:1rem;right:1rem;display:flex;flex-direction:column;gap:6px">
          <button class="btn btn-primary btn-sm" onclick="showToast('Map isn\'t connected to a real maps provider yet','🔍')">+</button>
          <button class="btn btn-ghost btn-sm" onclick="showToast('Map isn\'t connected to a real maps provider yet','🔍')">−</button>
        </div>
        <div style="position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius);padding:8px 16px;font-size:0.82rem;color:var(--muted)">📍 Map isn't connected to a real maps provider yet</div>
      </div>
    </div>
  </div>
</div>

<!-- ===== BUYER DASHBOARD ===== -->
<div class="page" id="page-buyer">
  <div class="dash-layout">
    <div class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">Overview</div>
        <div class="sidebar-item active" onclick="showToast('Dashboard','🏠')"><span class="icon">🏠</span> Dashboard</div>
        <div class="sidebar-item" onclick="showPage('listings')"><span class="icon">🔍</span> Search Properties</div>
        <div class="sidebar-item" onclick="showPage('listings')"><span class="icon">❤️</span> Wishlist</div>
        <div class="sidebar-item" onclick="showPage('listings')"><span class="icon">🔖</span> Saved Searches</div>
        <div class="sidebar-item" onclick="showPage('listings')"><span class="icon">👁</span> Recently Viewed</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">My Activity</div>
        <div class="sidebar-item" onclick="showBuyerPanel('inquiries')"><span class="icon">📩</span> Inquiries</div>
        <div class="sidebar-item" onclick="showBuyerPanel('visits')"><span class="icon">📅</span> Site Visits</div>
        <div class="sidebar-item" onclick="showPage('calculator')"><span class="icon">🧮</span> Calculator</div>
        <div class="sidebar-item" onclick="showBuyerPanel('documents')"><span class="icon">📄</span> Documents</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Account</div>
        <div class="sidebar-item" onclick="showPage('kyc')"><span class="icon">👤</span> Profile & KYC</div>
        <div class="sidebar-item" onclick="showBuyerPanel('preferences')"><span class="icon">⚙️</span> Preferences</div>
        <div class="sidebar-item" onclick="showPage('landing')"><span class="icon">🚪</span> Logout</div>
      </div>
    </div>
    <div class="dash-content">
      <div class="dash-header">
        <h1 id="buyerWelcomeHeading">Welcome back! 👋</h1>
        <p>Here's your property search activity</p>
      </div>
      <!-- AI RECOMMENDATIONS -->
      <div class="alert alert-info" style="margin-bottom:1.5rem">🤖 <span><strong>AI-matched recommendations</strong> aren't connected to a backend yet. <span style="cursor:pointer;text-decoration:underline;font-weight:600" onclick="showPage('listings')">Browse listings →</span></span></div>
      <!-- STATS -->
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-icon stat-icon-blue">❤️</div><div class="value" id="buyerWishlistCount">—</div><div class="label">Wishlist</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-green">📩</div><div class="value">—</div><div class="label">Active Inquiries</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-amber">📅</div><div class="value">—</div><div class="label">Upcoming Visits</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-purple">🔍</div><div class="value">—</div><div class="label">Saved Searches</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      </div>
      <!-- SAVED SEARCHES & TIMELINE -->
      <div class="grid-2" style="margin-bottom:2rem">
        <div class="table-card">
          <div class="table-head"><h3>Saved Searches</h3><button class="btn btn-primary btn-sm" onclick="showToast('Saved searches aren\\'t connected to a backend yet','🔖')">+ Save Current</button></div>
          <table><thead><tr><th>Search</th><th>New</th><th>Action</th></tr></thead><tbody>
            <tr><td colspan="3" style="text-align:center;padding:1.5rem;color:var(--muted)">No saved searches yet</td></tr>
          </tbody></table>
        </div>
        <div class="chart-card">
          <h3>📅 Upcoming Site Visits</h3>
          <div class="timeline" style="margin-top:1rem">
            <div style="text-align:center;padding:1.5rem;color:var(--muted);font-size:.85rem">No visits scheduled yet</div>
          </div>
        </div>
      </div>
      <!-- WISHLIST PREVIEW -->
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem"><h3>My Wishlist</h3><button class="btn btn-ghost btn-sm" onclick="showToast('Full wishlist view isn\'t connected yet','❤️')">View All →</button></div>
        <div class="grid-3" id="wishlistGrid"></div>
      </div>
    </div>
  </div>
</div>

<!-- ===== AGENT DASHBOARD ===== -->
<div class="page" id="page-agent">
  <div class="dash-layout">
    <div class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">CRM</div>
        <div class="sidebar-item active"><span class="icon">📊</span> Dashboard</div>
        <div class="sidebar-item" onclick="showAgentPanel('leads')"><span class="icon">👥</span> Leads</div>
        <div class="sidebar-item" onclick="showAgentPanel('inquiries')"><span class="icon">📩</span> Inquiries</div>
        <div class="sidebar-item" onclick="showToast('Appointments','📅')"><span class="icon">📅</span> Appointments</div>
        <div class="sidebar-item" onclick="showAgentPanel('visits')"><span class="icon">🏠</span> Site Visits</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Properties</div>
        <div class="sidebar-item" onclick="showPage('listings')"><span class="icon">🏘</span> Browse Listings</div>
        <div class="sidebar-item" onclick="showToast('My Listings view isn\'t connected yet \u2014 use Browse Listings','📋')"><span class="icon">📋</span> My Listings</div>
        <div class="sidebar-item" onclick="showAgentPanel('featured')"><span class="icon">⭐</span> Featured</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Earnings</div>
        <div class="sidebar-item" onclick="showAgentPanel('commissions')"><span class="icon">💰</span> Commissions</div>
        <div class="sidebar-item" onclick="showAgentPanel('analytics')"><span class="icon">📈</span> Analytics</div>
        <div class="sidebar-item" onclick="showPage('pricing')"><span class="icon">💳</span> My Plan</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Account</div>
        <div class="sidebar-item" onclick="showPage('kyc')"><span class="icon">👤</span> Profile</div>
        <div class="sidebar-item" onclick="showPage('landing')"><span class="icon">🚪</span> Logout</div>
      </div>
    </div>
    <div class="dash-content">
      <div class="dash-header">
        <h1>Agent Dashboard</h1>
        <p>Lead and appointment tracking isn't connected to a backend yet</p>
      </div>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-icon stat-icon-blue">👥</div><div class="value">—</div><div class="label">Active Leads</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-green">💰</div><div class="value">—</div><div class="label">Commission This Month</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-amber">🤝</div><div class="value">—</div><div class="label">Deals Closed</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-purple">⭐</div><div class="value">—</div><div class="label">Rating</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      </div>
      <!-- CHARTS ROW -->
      <div class="grid-2" style="margin-bottom:2rem">
        <div class="chart-card"><h3>Lead Pipeline <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
        <div class="chart-card"><h3>Monthly Performance <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
      </div>
      <!-- KANBAN LEADS -->
      <div style="margin-bottom:2rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem"><h3>Lead Pipeline <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Not tracked yet</span></h3><button class="btn btn-primary btn-sm" onclick="showToast('Lead tracking is not yet connected to a backend','👥')">+ Add Lead</button></div>
        <div class="kanban">
          <div class="kanban-col"><h4>New</h4><div style="padding:1.5rem 0.5rem;text-align:center;color:var(--muted);font-size:0.78rem">No leads yet</div></div>
          <div class="kanban-col"><h4>Contacted</h4><div style="padding:1.5rem 0.5rem;text-align:center;color:var(--muted);font-size:0.78rem">No leads yet</div></div>
          <div class="kanban-col"><h4>Site Visit</h4><div style="padding:1.5rem 0.5rem;text-align:center;color:var(--muted);font-size:0.78rem">No leads yet</div></div>
          <div class="kanban-col"><h4>Negotiation</h4><div style="padding:1.5rem 0.5rem;text-align:center;color:var(--muted);font-size:0.78rem">No leads yet</div></div>
          <div class="kanban-col"><h4>Closed ✓</h4><div style="padding:1.5rem 0.5rem;text-align:center;color:var(--muted);font-size:0.78rem">No leads yet</div></div>
        </div>
      </div>
      <!-- UPCOMING APPOINTMENTS -->
      <div class="table-card">
        <div class="table-head"><h3>📅 Upcoming Appointments</h3><button class="btn btn-primary btn-sm" onclick="showToast('Appointment scheduling isn\\'t connected to a backend yet','📅')">+ Schedule</button></div>
        <table><thead><tr><th>Client</th><th>Property</th><th>Date & Time</th><th>Type</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td colspan="6" style="text-align:center;padding:1.5rem;color:var(--muted)">No appointments scheduled yet</td></tr>
        </tbody></table>
      </div>
    </div>
  </div>
</div>

<!-- ===== BUILDER DASHBOARD ===== -->
<div class="page" id="page-builder">
  <div class="dash-layout">
    <div class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">Properties</div>
        <div class="sidebar-item active"><span class="icon">📊</span> Dashboard</div>
        <div class="sidebar-item" onclick="showPage('addproperty')"><span class="icon">➕</span> Add Property</div>
        <div class="sidebar-item" onclick="showToast('Your properties are listed below on this Dashboard','🏘')"><span class="icon">🏘</span> My Properties</div>
        <div class="sidebar-item" onclick="showBuilderPanel('projects')"><span class="icon">🏗</span> Projects</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Business</div>
        <div class="sidebar-item" onclick="showBuilderPanel('leads')"><span class="icon">👥</span> Leads</div>
        <div class="sidebar-item" onclick="showBuilderPanel('analytics')"><span class="icon">📈</span> Analytics</div>
        <div class="sidebar-item" onclick="showBuilderPanel('revenue')"><span class="icon">💰</span> Revenue</div>
      </div>
    </div>
    <div class="dash-content">
      <div class="dash-header">
        <h1>Builder Dashboard</h1>
        <p>Lead and analytics tracking isn't connected to a backend yet</p>
      </div>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-icon stat-icon-blue">🏘</div><div class="value" id="builderListingsCount">—</div><div class="label">Active Listings</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-green">👁</div><div class="value">—</div><div class="label">Monthly Views</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-amber">👥</div><div class="value">—</div><div class="label">New Leads</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-purple">💰</div><div class="value">—</div><div class="label">Sales Value</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      </div>
      <div class="grid-2" style="margin-bottom:2rem">
        <div class="chart-card"><h3>Lead Funnel <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
        <div class="chart-card"><h3>Revenue by Project <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
      </div>
      <div class="table-card">
        <div class="table-head"><h3>My Properties</h3><button class="btn btn-primary btn-sm" onclick="showPage('addproperty')">+ Add New</button></div>
        <table><thead><tr><th>Property</th><th>Type</th><th>Price</th><th>Status</th><th>Action</th></tr></thead>
        <tbody id="builderPropertiesBody">
          <tr><td colspan="5" style="text-align:center;padding:1.5rem;color:var(--muted)">Loading your listings…</td></tr>
        </tbody></table>
      </div>
    </div>
  </div>
</div>

<!-- ===== ADD PROPERTY PAGE ===== -->
<div class="page" id="page-addproperty">
  <div class="dash-layout">
    <div class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">Add Property</div>
        <div class="sidebar-item active" id="step-nav-1"><span class="icon">📝</span> Basic Info</div>
        <div class="sidebar-item" id="step-nav-2"><span class="icon">📍</span> Location</div>
        <div class="sidebar-item" id="step-nav-3"><span class="icon">🖼</span> Media</div>
        <div class="sidebar-item" id="step-nav-4"><span class="icon">💰</span> Pricing</div>
        <div class="sidebar-item" id="step-nav-5"><span class="icon">⭐</span> Features</div>
        <div class="sidebar-item" id="step-nav-6"><span class="icon">🚀</span> Publish</div>
      </div>
    </div>
    <div class="dash-content">
      <div class="dash-header"><h1>Add New Property</h1><p>Step <span id="currentStep">1</span> of 6 — Complete all steps to publish your listing</p></div>
      <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;margin-bottom:2rem">
        <div class="steps" id="propSteps">
          <div class="step active" data-step="1" onclick="goToStep(1)"><span class="step-num">1</span> Basic Info</div>
          <div class="step" data-step="2" onclick="goToStep(2)"><span class="step-num">2</span> Location</div>
          <div class="step" data-step="3" onclick="goToStep(3)"><span class="step-num">3</span> Media</div>
          <div class="step" data-step="4" onclick="goToStep(4)"><span class="step-num">4</span> Pricing</div>
          <div class="step" data-step="5" onclick="goToStep(5)"><span class="step-num">5</span> Features</div>
          <div class="step" data-step="6" onclick="goToStep(6)"><span class="step-num">6</span> Publish</div>
        </div>
        <div style="padding:2rem">
          <!-- STEP 1 -->
          <div id="stepContent1">
            <h3 style="margin-bottom:1.5rem">Property Information</h3>
            <div class="grid-2">
              <div class="form-group"><label class="form-label">Property Title *</label><input type="text" placeholder="e.g. Luxury 3BHK with Sea View"></div>
              <div class="form-group"><label class="form-label">Property Type *</label><select><option>Apartment</option><option>Villa</option><option>Plot</option><option>Office</option><option>Shop</option></select></div>
              <div class="form-group"><label class="form-label">For *</label><select><option>Sale</option><option>Rent</option><option>Both</option></select></div>
              <div class="form-group"><label class="form-label">BHK Configuration</label><select><option>1 BHK</option><option>2 BHK</option><option selected>3 BHK</option><option>4 BHK</option><option>5+ BHK</option></select></div>
              <div class="form-group"><label class="form-label">Carpet Area (sq ft) *</label><input type="number" placeholder="1540"></div>
              <div class="form-group"><label class="form-label">Built-up Area (sq ft)</label><input type="number" placeholder="1820"></div>
              <div class="form-group"><label class="form-label">No. of Floors</label><input type="number" placeholder="22"></div>
              <div class="form-group"><label class="form-label">Property on Floor</label><input type="number" placeholder="18"></div>
            </div>
            <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between;align-items:center">Property Description * <button class="btn btn-accent btn-sm" onclick="generateAIDesc()">🤖 AI Generate</button></label><textarea placeholder="Describe the property, its highlights, nearby landmarks..." id="propDesc"></textarea></div>
            <div id="aiDescLoader" style="display:none;margin-top:8px"><div class="alert alert-info">🤖 AI is generating a compelling description...</div></div>
            <div class="form-group"><label class="form-label">Possession Status</label><select><option>Ready to Move</option><option>Under Construction</option><option>New Launch</option></select></div>
          </div>
          <!-- STEP 2 -->
          <div id="stepContent2" style="display:none">
            <h3 style="margin-bottom:1.5rem">Property Location</h3>
            <div class="grid-2">
              <div class="form-group"><label class="form-label">State *</label><select><option>Maharashtra</option><option>Karnataka</option><option>Delhi</option><option>Tamil Nadu</option><option>Telangana</option></select></div>
              <div class="form-group"><label class="form-label">City *</label><input type="text" placeholder="Mumbai"></div>
              <div class="form-group"><label class="form-label">Locality / Area *</label><input type="text" placeholder="Bandra West"></div>
              <div class="form-group"><label class="form-label">Pincode</label><input type="text" placeholder="400050"></div>
            </div>
            <div class="form-group"><label class="form-label">Full Address</label><textarea placeholder="Building name, street, landmark..." style="min-height:80px"></textarea></div>
            <div class="map-box" style="margin-top:1rem"><div style="text-align:center;color:var(--muted)"><div style="font-size:2rem;margin-bottom:8px">📍</div><div>Click to pin property location on map</div><button class="btn btn-primary btn-sm" style="margin-top:10px" onclick="showToast('Map pinning isn\'t connected yet','📍')">Pin Location</button></div></div>
          </div>
          <!-- STEP 3 -->
          <div id="stepContent3" style="display:none">
            <h3 style="margin-bottom:1.5rem">Property Media</h3>
            <div style="border:2px dashed var(--border);border-radius:var(--radius-lg);padding:2.5rem;text-align:center;margin-bottom:1.5rem;cursor:pointer;transition:all var(--transition)" onclick="showToast('Photo upload isn\'t connected yet','🖼')" onmouseover="this.style.borderColor='#2563EB'" onmouseout="this.style.borderColor=''">
              <div style="font-size:2.5rem;margin-bottom:10px">🖼</div>
              <div style="font-weight:600;margin-bottom:4px">Upload Property Photos</div>
              <div style="font-size:0.85rem;color:var(--muted)">Drag & drop or click to upload. Max 20 images. JPG, PNG, WEBP. Recommended: 1920×1080px</div>
              <button class="btn btn-primary btn-sm" style="margin-top:12px">Choose Files</button>
            </div>
            <div class="grid-2">
              <div style="border:2px dashed var(--border);border-radius:var(--radius);padding:1.5rem;text-align:center;cursor:pointer" onclick="showToast('Video upload isn\'t connected yet','📹')"><div style="font-size:2rem">🎬</div><div style="font-weight:600;margin-top:8px">Upload Video</div><div style="font-size:0.8rem;color:var(--muted);margin-top:4px">MP4, MOV. Max 2GB</div></div>
              <div style="border:2px dashed var(--border);border-radius:var(--radius);padding:1.5rem;text-align:center;cursor:pointer" onclick="showToast('Virtual tour upload isn\'t connected yet','🥽')"><div style="font-size:2rem">🥽</div><div style="font-weight:600;margin-top:8px">360° Virtual Tour</div><div style="font-size:0.8rem;color:var(--muted);margin-top:4px">Matterport / Tour URL</div></div>
            </div>
            <div style="margin-top:1.5rem">
              <div class="form-group"><label class="form-label">Upload Floor Plan</label><input type="text" placeholder="Or paste floor plan URL"></div>
              <div class="form-group"><label class="form-label">Legal Documents</label><input type="text" placeholder="RERA certificate, Title deed..."></div>
            </div>
          </div>
          <!-- STEP 4 -->
          <div id="stepContent4" style="display:none">
            <h3 style="margin-bottom:1.5rem">Pricing & Financials</h3>
            <div class="alert alert-info" style="margin-bottom:1.5rem">🤖 AI Price Prediction: Based on the location and specs, the recommended price range is <strong>₹2.7 Cr – ₹3.1 Cr</strong></div>
            <div class="grid-2">
              <div class="form-group"><label class="form-label">Expected Price (₹) *</label><input type="number" placeholder="28500000"></div>
              <div class="form-group"><label class="form-label">Price Negotiable?</label><select><option>Yes</option><option>No</option></select></div>
              <div class="form-group"><label class="form-label">Maintenance (₹/month)</label><input type="number" placeholder="8000"></div>
              <div class="form-group"><label class="form-label">Parking Charges</label><input type="number" placeholder="250000"></div>
              <div class="form-group"><label class="form-label">Rental Value (if applicable)</label><input type="number" placeholder="85000"></div>
              <div class="form-group"><label class="form-label">Security Deposit (months)</label><input type="number" placeholder="2"></div>
            </div>
          </div>
          <!-- STEP 5 -->
          <div id="stepContent5" style="display:none">
            <h3 style="margin-bottom:1.5rem">Features & Amenities</h3>
            <div class="form-group"><label class="form-label">Select Amenities</label><div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px" id="amenitiesList"></div></div>
            <div class="grid-2" style="margin-top:1.5rem">
              <div class="form-group"><label class="form-label">Facing</label><select><option>East</option><option>West</option><option selected>Sea Facing</option><option>North</option><option>South</option></select></div>
              <div class="form-group"><label class="form-label">Furnishing</label><select><option>Unfurnished</option><option>Semi-Furnished</option><option>Fully Furnished</option></select></div>
              <div class="form-group"><label class="form-label">Age of Property</label><select><option>New Construction</option><option>Less than 5 years</option><option>5–10 years</option><option>10+ years</option></select></div>
              <div class="form-group"><label class="form-label">Water Source</label><select><option>Municipal</option><option>Borewell</option><option>Both</option></select></div>
            </div>
          </div>
          <!-- STEP 6 -->
          <div id="stepContent6" style="display:none">
            <h3 style="margin-bottom:1.5rem">Review & Publish</h3>
            <div class="alert alert-info" style="margin-bottom:1.5rem">⚠️ This 6-step form isn't connected to a backend yet — submitting won't actually create a listing.</div>
            <div class="form-group"><label class="form-label">Subscription Plan for Enhanced Visibility</label><select><option>Basic (Free) — Standard listing</option><option>Pro (₹4,999/mo) — Featured + AI boost</option><option>Enterprise (₹14,999/mo) — Top of search + Marketing</option></select></div>
            <button class="btn btn-primary btn-lg" style="width:100%" onclick="showToast('This form isn\'t connected to a backend yet \u2014 nothing was submitted','\ud83d\udea7')">🚀 Submit for Review</button>
          </div>
          <!-- NAVIGATION -->
          <div style="display:flex;justify-content:space-between;margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border)">
            <button class="btn btn-ghost" id="prevBtn" onclick="changeStep(-1)" style="display:none">← Previous</button>
            <div style="flex:1"></div>
            <button class="btn btn-primary" id="nextBtn" onclick="changeStep(1)">Next Step →</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== ADMIN DASHBOARD ===== -->
<!-- =====================================================================
     ADMIN DASHBOARD — Full sub-panel router
     Root cause fix: every sidebar item was calling showToast() instead
     of showAdminPanel(). Now each item wires to a dedicated panel that
     swaps inside .admin-content without leaving the admin page.
     ===================================================================== -->
<style>
/* ── Admin sub-panel system ─────────────────────────────────────────────── */
.admin-panel{display:none}
.admin-panel.ap-active{display:block}
.sidebar-item.si-active{background:rgba(37,99,235,0.1);color:var(--secondary);font-weight:600}
.sidebar-item.si-active .icon{filter:none}

/* Search + filter bar used across admin panels */
.admin-filter-bar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:1.5rem}
.admin-filter-bar input,.admin-filter-bar select{padding:8px 12px;background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius);font-family:'Inter',sans-serif;font-size:0.85rem;color:var(--primary);outline:none}
.admin-filter-bar input:focus,.admin-filter-bar select:focus{border-color:var(--secondary)}
.admin-filter-bar input{min-width:220px}

/* Inline user-detail slide-over */
.user-detail-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);backdrop-filter:blur(4px);z-index:2000;display:none;align-items:flex-start;justify-content:flex-end}
.user-detail-overlay.open{display:flex}
.user-detail-panel{width:400px;height:100vh;background:var(--card-bg);border-left:1px solid var(--border);padding:2rem;overflow-y:auto;animation:slideIn 0.25s ease}
@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}

/* Toggle switch */
.toggle-wrap{display:flex;align-items:center;gap:8px;font-size:0.85rem}
.toggle{width:38px;height:20px;background:var(--border);border-radius:10px;cursor:pointer;position:relative;transition:background 0.2s}
.toggle.on{background:var(--secondary)}
.toggle::after{content:'';position:absolute;left:2px;top:2px;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform 0.2s;box-shadow:0 1px 4px rgba(0,0,0,0.2)}
.toggle.on::after{transform:translateX(18px)}

/* Setting row */
.setting-row{display:flex;align-items:center;justify-content:space-between;padding:1rem 0;border-bottom:1px solid var(--border)}
.setting-row:last-child{border-bottom:none}
.setting-label{font-weight:600;font-size:0.9rem}
.setting-desc{font-size:0.78rem;color:var(--muted);margin-top:2px}

/* Revenue metric cards in payments */
.rev-card{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.2rem;text-align:center}
.rev-card .rv{font-family:'Poppins',sans-serif;font-size:1.6rem;font-weight:700;color:var(--secondary)}
.rev-card .rl{font-size:0.78rem;color:var(--muted);margin-top:4px}
.rev-card .rc{font-size:0.75rem;font-weight:600;margin-top:6px}
</style>

<div class="page" id="page-admin">
  <div class="dash-layout">

    <!-- ── SIDEBAR with working onclick ────────────────────────────────── -->
    <div class="sidebar" id="adminSidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">Admin</div>
        <div class="sidebar-item si-active" id="asi-overview"   onclick="showAdminPanel('overview')">  <span class="icon">📊</span> Dashboard</div>
        <div class="sidebar-item"           id="asi-users"      onclick="showAdminPanel('users')">     <span class="icon">👥</span> Users</div>
        <div class="sidebar-item"           id="asi-agents"     onclick="showAdminPanel('agents')">    <span class="icon">🤝</span> Agent Approvals</div>
        <div class="sidebar-item"           id="asi-moderation" onclick="showAdminPanel('moderation')"><span class="icon">🏘</span> Moderation</div>
        <div class="sidebar-item"           id="asi-subs"       onclick="showAdminPanel('subs')">      <span class="icon">💳</span> Subscriptions</div>
        <div class="sidebar-item"           id="asi-payments"   onclick="showAdminPanel('payments')">  <span class="icon">💰</span> Payments</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Analytics</div>
        <div class="sidebar-item" id="asi-analytics" onclick="showAdminPanel('analytics')"><span class="icon">📈</span> Analytics</div>
        <div class="sidebar-item" id="asi-reports"   onclick="showAdminPanel('reports')">  <span class="icon">📋</span> Reports</div>
        <div class="sidebar-item" id="asi-support"   onclick="showAdminPanel('support')">  <span class="icon">🎫</span> Support</div>
        <div class="sidebar-item" id="asi-audit"     onclick="showAdminPanel('audit')">    <span class="icon">📝</span> Audit Logs</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Settings</div>
        <div class="sidebar-item" id="asi-settings" onclick="showAdminPanel('settings')"><span class="icon">⚙️</span> Platform Settings</div>
        <div class="sidebar-item" onclick="showPage('landing')"><span class="icon">🚪</span> Exit Admin</div>
      </div>
    </div>

    <!-- ── MAIN CONTENT AREA ───────────────────────────────────────────── -->
    <div class="dash-content" id="adminContent">

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 1 · DASHBOARD OVERVIEW
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel ap-active" id="ap-overview">
        <div class="dash-header"><h1>Admin Dashboard</h1><p>Platform Overview · Last updated: just now</p></div>
        <div class="stat-grid">
          <div class="stat-card"><div class="stat-icon stat-icon-blue">👥</div><div class="value">—</div><div class="label">Total Users</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-green">🏘</div><div class="value" id="statListingsAdmin">—</div><div class="label">Active Listings</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-amber">💰</div><div class="value">—</div><div class="label">Monthly Revenue</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-purple">🤝</div><div class="value" id="statAgentsAdmin">—</div><div class="label">Verified Agents</div></div>
        </div>
        <div class="grid-2" style="margin-bottom:2rem">
          <div class="chart-card"><h3>Revenue Trend <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
          <div class="chart-card"><h3>User Growth <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
        </div>
        <div class="grid-2" style="margin-bottom:2rem">
          <div class="chart-card"><h3>Listings by City</h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
          <div class="chart-card"><h3>Subscription Split <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
        </div>
        <div class="table-card">
          <div class="table-head"><h3>⏳ Pending Moderation <span class="tag tag-amber" id="pendingModerationBadge" style="margin-left:8px;display:none">0</span></h3><button class="btn btn-ghost btn-sm" onclick="showAdminPanel('moderation')">View All →</button></div>
          <table><thead><tr><th>Property</th><th>City</th><th>Submitted</th><th>Type</th><th>Actions</th></tr></thead>
          <tbody id="overviewModerationBody">
            <tr><td colspan="5" style="text-align:center;padding:1.5rem;color:var(--muted)">Loading pending listings…</td></tr>
          </tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 2 · USER MANAGEMENT
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-users">
        <div class="dash-header" style="display:flex;justify-content:space-between;align-items:flex-start">
          <div><h1>User Management</h1><p style="color:var(--muted)">Demo data shown below — not yet connected to live user records</p></div>
          <button class="btn btn-primary" onclick="showToast('CSV export isn\'t connected to a backend yet','📥')">⬇ Export CSV</button>
        </div>
        <div class="admin-filter-bar">
          <input type="text" placeholder="🔍 Search by name, email, username…" oninput="filterAdminUsers(this.value)">
          <select onchange="filterAdminUsers()" id="userRoleFilter"><option value="">All Roles</option><option>Buyer</option><option>Tenant</option><option>Agent</option><option>Builder</option><option>Admin</option></select>
          <select onchange="filterAdminUsers()" id="userStatusFilter"><option value="">All Status</option><option>Active</option><option>Suspended</option><option>Pending</option></select>
        </div>
        <div class="table-card">
          <table id="usersTable">
            <thead><tr><th><input type="checkbox" onchange="selectAllUsers(this)"> All</th><th>User</th><th>Role</th><th>Joined</th><th>Last Login</th><th>KYC</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody id="usersTableBody"></tbody>
          </table>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 1.2rem;border-top:1px solid var(--border)">
            <span style="font-size:0.82rem;color:var(--muted)" id="usersPagLabel">No users to display</span>
            <div style="display:flex;gap:6px">
              <button class="btn btn-ghost btn-sm">← Prev</button>
              <button class="btn btn-primary btn-sm">1</button>
              <button class="btn btn-ghost btn-sm">2</button>
              <button class="btn btn-ghost btn-sm">3</button>
              <button class="btn btn-ghost btn-sm">Next →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 3 · AGENT APPROVALS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-agents">
        <div class="dash-header"><h1>Agent Approvals</h1><p style="color:var(--muted)">This workflow isn't connected to a backend yet — agents are auto-active on registration</p></div>
        <div class="stat-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="stat-card"><div class="stat-icon stat-icon-amber">⏳</div><div class="value">—</div><div class="label">Pending Review</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-green">✅</div><div class="value" id="statAgentsApprovalsPanel">—</div><div class="label">Approved Agents</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-blue">❌</div><div class="value">—</div><div class="label">Rejected (30d)</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        </div>
        <div class="table-card">
          <div class="table-head"><h3>Pending Agent Applications</h3>
            <div style="display:flex;gap:8px">
              <button class="btn btn-primary btn-sm" onclick="bulkApproveAgents()">✓ Approve All</button>
            </div>
          </div>
          <table><thead><tr><th><input type="checkbox"></th><th>Agent</th><th>City</th><th>RERA No.</th><th>Experience</th><th>Applied</th><th>Documents</th><th>Actions</th></tr></thead>
          <tbody id="agentApprovalsBody"></tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 4 · PROPERTY MODERATION
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-moderation">
        <div class="dash-header"><h1>Property Moderation</h1><p id="moderationHeaderCount">Loading pending listings…</p></div>
        <div class="admin-filter-bar">
          <input type="text" placeholder="🔍 Search property…">
          <select><option>All Types</option><option>Apartment</option><option>Villa</option><option>Plot</option><option>Commercial</option></select>
          <select><option>All Cities</option><option>Mumbai</option><option>Delhi</option><option>Bangalore</option><option>Hyderabad</option></select>
          <select><option>Pending</option><option>Approved</option><option>Rejected</option></select>
        </div>
        <div class="table-card">
          <div class="table-head"><h3>Pending Listings <span class="tag tag-amber" id="moderationCountBadge" style="margin-left:6px;display:none">0</span></h3>
            <div style="display:flex;gap:8px">
              <button class="btn btn-primary btn-sm" onclick="showToast('Bulk actions aren\'t implemented yet — use Approve/Reject per row','✅')">✓ Approve Selected</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="showToast('Bulk actions aren\'t implemented yet — use Approve/Reject per row','❌')">✗ Reject Selected</button>
            </div>
          </div>
          <table id="moderationTable"><thead><tr><th><input type="checkbox"></th><th>Property</th><th>Location</th><th>Price</th><th>Submitted</th><th>Type</th><th>Preview</th><th>Actions</th></tr></thead>
          <tbody id="moderationBody"></tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 5 · SUBSCRIPTIONS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-subs">
        <div class="dash-header"><h1>Subscriptions</h1><p style="color:var(--muted)">Demo data — billing is not yet connected to a real payment provider</p></div>
        <div class="stat-grid">
          <div class="stat-card"><div class="stat-icon stat-icon-blue">🆓</div><div class="value">—</div><div class="label">Basic (Free)</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-green">⭐</div><div class="value">—</div><div class="label">Pro Plan</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-amber">🏆</div><div class="value">—</div><div class="label">Enterprise</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-purple">💰</div><div class="value">—</div><div class="label">MRR</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        </div>
        <div class="grid-2" style="margin-bottom:2rem">
          <div class="chart-card"><h3>Plan Distribution Over Time <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
          <div class="chart-card" style="padding:1.5rem">
            <h3 style="margin-bottom:1.2rem">Active Coupons</h3>
            <div style="display:flex;flex-direction:column;gap:10px">
              <div style="text-align:center;padding:1rem;color:var(--muted);font-size:0.85rem">No coupons yet — coupon management isn't connected to a backend yet</div>
              <button class="btn btn-primary btn-sm" style="width:fit-content" onclick="showToast('Coupon management isn\\'t connected to a backend yet','🎟')">+ Create Coupon</button>
            </div>
          </div>
        </div>
        <div class="table-card">
          <div class="table-head"><h3>Active Subscriptions</h3><input type="text" placeholder="Search subscriber…" style="padding:6px 12px;border:1px solid var(--border);border-radius:8px;font-size:0.82rem;outline:none"></div>
          <table><thead><tr><th>Subscriber</th><th>Plan</th><th>Started</th><th>Renews</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody id="subsTableBody"></tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 6 · PAYMENTS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-payments">
        <div class="dash-header"><h1>Payments & Revenue</h1><p style="color:var(--muted)">Demo data — payment processing is not yet connected</p></div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem;margin-bottom:2rem">
          <div class="rev-card"><div class="rv">—</div><div class="rl">This Month</div><div class="rc" style="color:var(--muted)">Demo data</div></div>
          <div class="rev-card"><div class="rv">—</div><div class="rl">This Year</div><div class="rc" style="color:var(--muted)">Demo data</div></div>
          <div class="rev-card"><div class="rv">—</div><div class="rl">Avg Transaction</div><div class="rc" style="color:var(--muted)">Demo data</div></div>
          <div class="rev-card"><div class="rv">—</div><div class="rl">Success Rate</div><div class="rc" style="color:var(--muted)">Demo data</div></div>
        </div>
        <div class="chart-card" style="margin-bottom:2rem"><h3>Revenue by Month <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
        <div class="table-card">
          <div class="table-head"><h3>Recent Transactions</h3>
            <div style="display:flex;gap:8px">
              <select style="padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.82rem;outline:none"><option>All Methods</option><option>UPI</option><option>Card</option><option>Net Banking</option></select>
              <button class="btn btn-ghost btn-sm" onclick="showToast('Export isn\'t connected to a backend yet','📥')">⬇ Export</button>
            </div>
          </div>
          <table><thead><tr><th>Txn ID</th><th>User</th><th>Plan</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th></tr></thead>
          <tbody id="paymentsTableBody"></tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 7 · ANALYTICS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-analytics">
        <div class="dash-header"><h1>Analytics</h1><p style="color:var(--muted)">Demo data — platform analytics aren't connected to a backend yet</p></div>
        <div class="stat-grid">
          <div class="stat-card"><div class="stat-icon stat-icon-blue">👁</div><div class="value">—</div><div class="label">Page Views</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-green">🔍</div><div class="value">—</div><div class="label">Property Searches</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-amber">📩</div><div class="value">—</div><div class="label">Inquiries Sent</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-purple">🤖</div><div class="value">—</div><div class="label">AI Chat Sessions</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        </div>
        <div class="grid-2" style="margin-bottom:2rem">
          <div class="chart-card"><h3>Daily Active Users <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
          <div class="chart-card"><h3>Searches by City <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
        </div>
        <div class="grid-2">
          <div class="chart-card"><h3>Device Breakdown <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
          <div class="chart-card"><h3>Conversion Funnel <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3>
            <div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div>
          </div>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 8 · REPORTS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-reports">
        <div class="dash-header"><h1>Reports</h1><p>Scheduled and on-demand reports</p></div>
        <div class="grid-3" style="margin-bottom:2rem">
          <div class="chart-card" style="cursor:pointer;transition:all 0.2s" onmouseover="this.style.borderColor='var(--secondary)'" onmouseout="this.style.borderColor=''" onclick="showToast('Report generation isn\'t connected to a backend yet','📊')">
            <div style="font-size:2rem;margin-bottom:10px">📊</div><h3 style="font-size:1rem;margin-bottom:6px">Revenue Report</h3><p style="font-size:0.82rem;color:var(--muted)">Monthly revenue breakdown by plan and city</p><div style="margin-top:12px"><span class="tag tag-blue">Monthly</span></div>
          </div>
          <div class="chart-card" style="cursor:pointer;transition:all 0.2s" onmouseover="this.style.borderColor='var(--secondary)'" onmouseout="this.style.borderColor=''" onclick="showToast('Report generation isn\'t connected to a backend yet','👥')">
            <div style="font-size:2rem;margin-bottom:10px">👥</div><h3 style="font-size:1rem;margin-bottom:6px">User Growth Report</h3><p style="font-size:0.82rem;color:var(--muted)">Signups, churn, and retention by cohort</p><div style="margin-top:12px"><span class="tag tag-green">Weekly</span></div>
          </div>
          <div class="chart-card" style="cursor:pointer;transition:all 0.2s" onmouseover="this.style.borderColor='var(--secondary)'" onmouseout="this.style.borderColor=''" onclick="showToast('Report generation isn\'t connected to a backend yet','🏘')">
            <div style="font-size:2rem;margin-bottom:10px">🏘</div><h3 style="font-size:1rem;margin-bottom:6px">Listing Activity</h3><p style="font-size:0.82rem;color:var(--muted)">New listings, approvals, and rejections</p><div style="margin-top:12px"><span class="tag tag-amber">Daily</span></div>
          </div>
          <div class="chart-card" style="cursor:pointer;transition:all 0.2s" onmouseover="this.style.borderColor='var(--secondary)'" onmouseout="this.style.borderColor=''" onclick="showToast('Report generation isn\'t connected to a backend yet','🤝')">
            <div style="font-size:2rem;margin-bottom:10px">🤝</div><h3 style="font-size:1rem;margin-bottom:6px">Agent Performance</h3><p style="font-size:0.82rem;color:var(--muted)">Deals closed, response rate, ratings</p><div style="margin-top:12px"><span class="tag tag-purple">Monthly</span></div>
          </div>
          <div class="chart-card" style="cursor:pointer;transition:all 0.2s" onmouseover="this.style.borderColor='var(--secondary)'" onmouseout="this.style.borderColor=''" onclick="showToast('Report generation isn\'t connected to a backend yet','🤖')">
            <div style="font-size:2rem;margin-bottom:10px">🤖</div><h3 style="font-size:1rem;margin-bottom:6px">AI Usage Report</h3><p style="font-size:0.82rem;color:var(--muted)">Chat sessions, recommendations, predictions</p><div style="margin-top:12px"><span class="tag tag-blue">Weekly</span></div>
          </div>
          <div class="chart-card" style="cursor:pointer;transition:all 0.2s" onmouseover="this.style.borderColor='var(--secondary)'" onmouseout="this.style.borderColor=''" onclick="showToast('Report generation isn\'t connected to a backend yet','🏛')">
            <div style="font-size:2rem;margin-bottom:10px">🏛</div><h3 style="font-size:1rem;margin-bottom:6px">RERA Compliance</h3><p style="font-size:0.82rem;color:var(--muted)">Compliance status across all listings</p><div style="margin-top:12px"><span class="tag tag-green">Quarterly</span></div>
          </div>
        </div>
        <div class="table-card">
          <div class="table-head"><h3>📋 Generated Reports</h3></div>
          <table><thead><tr><th>Report</th><th>Generated</th><th>Period</th><th>Size</th><th>Download</th></tr></thead>
          <tbody>
            <tr><td colspan="5" style="text-align:center;padding:1.5rem;color:var(--muted)">No reports generated yet — report generation isn't connected to a backend yet</td></tr>
          </tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 9 · SUPPORT TICKETS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-support">
        <div class="dash-header"><h1>Support Tickets</h1><p style="color:var(--muted)">Demo data — support tickets aren't connected to a backend yet</p></div>
        <div class="stat-grid" style="grid-template-columns:repeat(4,1fr)">
          <div class="stat-card"><div class="stat-icon stat-icon-blue">🎫</div><div class="value">—</div><div class="label">Open</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-amber">⏳</div><div class="value">—</div><div class="label">In Progress</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-green">✅</div><div class="value">—</div><div class="label">Resolved (30d)</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
          <div class="stat-card"><div class="stat-icon stat-icon-purple">⭐</div><div class="value">—</div><div class="label">CSAT Score</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        </div>
        <div class="admin-filter-bar">
          <input type="text" placeholder="🔍 Search tickets…">
          <select><option>All Priority</option><option>High</option><option>Medium</option><option>Low</option></select>
          <select><option>All Status</option><option>Open</option><option>In Progress</option><option>Resolved</option></select>
          <select><option>All Categories</option><option>Payment</option><option>Property</option><option>Agent</option><option>KYC</option><option>Technical</option></select>
        </div>
        <div class="table-card">
          <div class="table-head"><h3>Open Tickets</h3><button class="btn btn-primary btn-sm" onclick="showToast('Ticket assignment isn\'t connected to a backend yet','🎫')">+ Assign Selected</button></div>
          <table><thead><tr><th>Ticket #</th><th>User</th><th>Subject</th><th>Category</th><th>Priority</th><th>Assignee</th><th>Created</th><th>Actions</th></tr></thead>
          <tbody id="supportTableBody"></tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 10 · AUDIT LOGS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-audit">
        <div class="dash-header"><h1>Audit Logs</h1><p style="color:var(--muted)">Demo data — audit logging isn't connected to a backend yet</p></div>
        <div class="admin-filter-bar">
          <input type="text" placeholder="🔍 Search by user, action, entity…">
          <select><option>All Actions</option><option>Login</option><option>Logout</option><option>Create</option><option>Update</option><option>Delete</option><option>Approve</option><option>Reject</option><option>Export</option></select>
          <select><option>All Roles</option><option>Super Admin</option><option>Admin</option><option>Agent</option></select>
          <input type="date" style="padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:0.85rem;color:var(--primary);background:var(--card-bg);outline:none">
          <button class="btn btn-ghost btn-sm" onclick="showToast('Export isn\'t connected to a backend yet','📥')">⬇ Export</button>
        </div>
        <div class="table-card">
          <div class="table-head"><h3>Activity Log</h3><span style="font-size:0.82rem;color:var(--muted)" id="auditCount">No entries — not tracked yet</span></div>
          <table><thead><tr><th>Timestamp</th><th>Actor</th><th>Role</th><th>Action</th><th>Entity</th><th>Details</th><th>IP</th></tr></thead>
          <tbody id="auditTableBody"></tbody></table>
        </div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════
           PANEL 11 · PLATFORM SETTINGS
           ════════════════════════════════════════════════════════════════ -->
      <div class="admin-panel" id="ap-settings">
        <div class="dash-header"><h1>Platform Settings</h1><p>Most settings below aren't connected to a backend yet — changing them has no real effect</p></div>
        <div class="grid-2">
          <!-- General -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <h3 style="margin-bottom:1.2rem">🌐 General <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Not connected</span></h3>
            <div class="setting-row"><div><div class="setting-label">Platform Name</div><div class="setting-desc">Displayed in emails and browser tab</div></div><input type="text" value="EstateAI Pro" style="width:160px;padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;color:var(--primary);background:var(--card-bg);outline:none"></div>
            <div class="setting-row"><div><div class="setting-label">Default Currency</div></div><select style="padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;color:var(--primary);background:var(--card-bg);outline:none"><option>INR (₹)</option><option>USD ($)</option><option>AED (د.إ)</option></select></div>
            <div class="setting-row"><div><div class="setting-label">Listings per Page</div></div><select style="padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;color:var(--primary);background:var(--card-bg);outline:none"><option>20</option><option>40</option><option>60</option></select></div>
            <div class="setting-row"><div><div class="setting-label">Maintenance Mode</div><div class="setting-desc">Redirect all traffic to maintenance page</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
          </div>
          <!-- Auth -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <h3 style="margin-bottom:1.2rem">🔐 Auth & Security <span class="tag tag-green" style="font-size:0.7rem;margin-left:6px">Partially real</span></h3>
            <div class="setting-row"><div><div class="setting-label">Email Verification</div><div class="setting-desc">Not enforced — accounts are active immediately on registration</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">KYC for Agents</div><div class="setting-desc">Not enforced — agents can list immediately on registration</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">Two-Factor Auth (Admins)</div><div class="setting-desc">Not implemented</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">Max Login Attempts</div><div class="setting-desc">Login is rate-limited (30 attempts / 15 min), but this field doesn't control it</div></div><input type="number" value="5" style="width:70px;padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;color:var(--primary);background:var(--card-bg);outline:none"></div>
            <div class="setting-row"><div><div class="setting-label">Session Timeout (hours)</div><div class="setting-desc">JWTs actually expire after 7 days; this field doesn't control it</div></div><input type="number" value="24" style="width:70px;padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;color:var(--primary);background:var(--card-bg);outline:none"></div>
          </div>
          <!-- Notifications -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <h3 style="margin-bottom:1.2rem">🔔 Notifications <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Not connected</span></h3>
            <div class="setting-row"><div><div class="setting-label">Email Notifications</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">WhatsApp Integration</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">Push Notifications</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">Admin Alert Email</div></div><input type="email" placeholder="not configured" style="width:200px;padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.82rem;color:var(--primary);background:var(--card-bg);outline:none"></div>
          </div>
          <!-- AI -->
          <div class="chart-card" style="margin-bottom:1.5rem">
            <h3 style="margin-bottom:1.2rem">🤖 AI Features <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Not connected</span></h3>
            <div class="setting-row"><div><div class="setting-label">AI Recommendations</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">AI Price Prediction</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">AI Description Generator</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">AI Chat Assistant</div></div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
            <div class="setting-row"><div><div class="setting-label">AI Model</div><div class="setting-desc">No AI model is actually wired in</div></div><select style="padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.82rem;color:var(--primary);background:var(--card-bg);outline:none"><option>None configured</option></select></div>
          </div>
        </div>
        <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:0.5rem">
          <button class="btn btn-ghost" onclick="showToast('Changes discarded','🔄')">Discard</button>
          <button class="btn btn-primary" onclick="showToast('Settings aren\'t connected to a backend yet — nothing was saved','⚙️')">Save All Settings</button>
        </div>
      </div>

    </div><!-- /dash-content -->
  </div><!-- /dash-layout -->
</div><!-- /page-admin -->

<!-- ── User Detail Slide-Over Panel ──────────────────────────────────────── -->
<div class="user-detail-overlay" id="userDetailOverlay" onclick="if(event.target===this)closeUserDetail()">
  <div class="user-detail-panel">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
      <h3>User Details</h3>
      <button style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--muted)" onclick="closeUserDetail()">✕</button>
    </div>
    <div id="userDetailContent"></div>
  </div>
</div>

<script>
// ═══════════════════════════════════════════════════════════════════════════
//  ROOT-CAUSE FIX: Admin sub-panel router
//  Before: every sidebar item called showToast() — no navigation happened.
//  After:  showAdminPanel(id) hides all .admin-panel divs, shows the target
//          one, and updates sidebar active state. Charts lazy-init on first
//          visit to avoid rendering into hidden canvases.
// ═══════════════════════════════════════════════════════════════════════════

const _adminPanelChartsDone = {};

function showAdminPanel(id) {
  // 1. Hide all panels
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('ap-active'));
  // 2. Show target panel
  const target = document.getElementById('ap-' + id);
  if (target) target.classList.add('ap-active');
  // 3. Update sidebar active state
  document.querySelectorAll('#adminSidebar .sidebar-item').forEach(el => el.classList.remove('si-active'));
  const activeItem = document.getElementById('asi-' + id);
  if (activeItem) activeItem.classList.add('si-active');
  // 4. Scroll content area to top
  document.getElementById('adminContent').scrollTop = 0;
  // 5. Lazy-init charts and data for this panel (only once)
  if (!_adminPanelChartsDone[id]) {
    _adminPanelChartsDone[id] = true;
    setTimeout(() => initAdminPanelContent(id), 80);
  }
}

function initAdminPanelContent(id) {
  const months = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];
  switch(id) {
    case 'overview':   initAdminCharts(); break;
    case 'users':      renderUsersTable(); break;
    case 'agents':     renderAgentApprovals(); break;
    case 'moderation': renderModeration(); break;
    case 'subs':       renderSubsPanel(); break;
    case 'payments':   renderPaymentsPanel(); break;
    case 'analytics':  renderAnalyticsPanel(); break;
    case 'support':    renderSupportPanel(); break;
    case 'audit':      renderAuditPanel(); break;
  }
}

// approveProperty/rejectProperty were a fake fade-the-row-and-toast pair
// with no real backend call; removed in favor of moderateProperty() (see
// the backend integration script), which calls the real PUT endpoint.
function bulkApproveAgents() {
  const rows = document.querySelectorAll('#agentApprovalsBody tr');
  if (rows.length === 0) {
    showToast("Agent approval isn't connected to a backend yet", '⚠️');
    return;
  }
  rows.forEach(row => {
    row.style.opacity = '0.4';
    row.querySelector('td:last-child').innerHTML = '<span class="tag tag-green">✓ Approved</span>';
  });
  showToast('All agents approved ✅','✅');
}

// ── User detail slide-over ────────────────────────────────────────────────
function openUserDetail(user) {
  document.getElementById('userDetailContent').innerHTML = `
    <div style="text-align:center;margin-bottom:1.5rem">
      <div class="avatar avatar-blue" style="width:60px;height:60px;font-size:1.3rem;margin:0 auto 10px">${user.initials}</div>
      <div style="font-weight:700;font-size:1.1rem">${user.name}</div>
      <div style="color:var(--muted);font-size:0.85rem">${user.email}</div>
      <div style="margin-top:8px"><span class="tag ${user.roleTag}">${user.role}</span> <span class="tag tag-green">Active</span></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:0">
      <div class="setting-row"><div class="setting-label">Joined</div><div style="font-size:0.85rem;color:var(--muted)">${user.joined}</div></div>
      <div class="setting-row"><div class="setting-label">Last Login</div><div style="font-size:0.85rem;color:var(--muted)">${user.lastLogin}</div></div>
      <div class="setting-row"><div class="setting-label">KYC Status</div><span class="tag tag-green">Verified</span></div>
      <div class="setting-row"><div class="setting-label">Total Logins</div><div style="font-size:0.85rem">${user.logins}</div></div>
      <div class="setting-row"><div class="setting-label">Subscription</div><span class="tag tag-blue">${user.plan}</span></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:1.5rem">
      <button class="btn btn-ghost" onclick="showToast('Role changed to Editor','⚙️')">Change Role</button>
      <button class="btn btn-ghost" style="color:var(--warning)" onclick="showToast('Account suspended','🚫');closeUserDetail()">Suspend Account</button>
      <button class="btn btn-ghost" style="color:var(--danger)" onclick="showToast('Password reset email sent','📧')">Reset Password</button>
    </div>`;
  document.getElementById('userDetailOverlay').classList.add('open');
}
function closeUserDetail() {
  document.getElementById('userDetailOverlay').classList.remove('open');
}

// ── Render: Users Table ───────────────────────────────────────────────────
// Demo data — real user management isn't connected to a backend yet.
const _usersData = [];

function renderUsersTable(data) {
  const source = data || _usersData;
  if (source.length === 0) {
    document.getElementById('usersTableBody').innerHTML = `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No users to display — user management isn't connected to a backend yet</td></tr>`;
    return;
  }
  const rows = source.map(u => `
    <tr>
      <td><input type="checkbox"></td>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="avatar avatar-blue" style="flex-shrink:0">${u.initials}</div>
        <div><div style="font-weight:600;font-size:0.875rem">${u.name}</div><div style="font-size:0.72rem;color:var(--muted)">${u.email}</div></div>
      </div></td>
      <td><span class="tag ${u.roleTag}">${u.role}</span></td>
      <td style="font-size:0.82rem">${u.joined}</td>
      <td style="font-size:0.82rem;color:var(--muted)">${u.lastLogin}</td>
      <td><span class="tag ${u.kyc==='Verified'?'tag-green':'tag-amber'}">${u.kyc}</span></td>
      <td><span class="tag ${u.status==='Active'?'tag-green':u.status==='Suspended'?'tag-red':'tag-amber'}">${u.status}</span></td>
      <td><div style="display:flex;gap:4px">
        <button class="btn btn-ghost btn-sm" onclick="openUserDetail(${JSON.stringify(u).replace(/"/g,"'")})">View</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="showToast('${u.name} suspended','🚫')">Suspend</button>
      </div></td>
    </tr>`).join('');
  document.getElementById('usersTableBody').innerHTML = rows;
}

function filterAdminUsers(val) { renderUsersTable(); }
function selectAllUsers(cb) {
  document.querySelectorAll('#usersTableBody input[type=checkbox]').forEach(c => c.checked = cb.checked);
}

// ── Render: Agent Approvals ───────────────────────────────────────────────
// Demo data — agent application/approval workflow isn't connected to a
// backend yet (agents are currently auto-active on registration).
const _agentsData = [];

function renderAgentApprovals() {
  const body = document.getElementById('agentApprovalsBody');
  if (_agentsData.length === 0) {
    body.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No pending agent applications — this workflow isn't connected to a backend yet</td></tr>`;
    return;
  }
  body.innerHTML = _agentsData.map(a => `
    <tr>
      <td><input type="checkbox"></td>
      <td><div style="font-weight:600;font-size:0.875rem">${a.name}</div></td>
      <td style="font-size:0.82rem">${a.city}</td>
      <td style="font-family:monospace;font-size:0.78rem;color:var(--secondary)">${a.rera}</td>
      <td style="font-size:0.82rem">${a.exp}</td>
      <td style="font-size:0.82rem;color:var(--muted)">${a.applied}</td>
      <td><span class="tag ${a.docs==='Complete'?'tag-green':'tag-amber'}">${a.docs}</span></td>
      <td><div style="display:flex;gap:4px">
        <button class="btn btn-primary btn-sm" onclick="showToast('Agent approval isn\'t connected to a backend yet','✅')">Approve</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="showToast('Agent approval isn\'t connected to a backend yet','❌')">Reject</button>
      </div></td>
    </tr>`).join('');
}

// ── Render: Moderation ────────────────────────────────────────────────────
// Wired to the real backend: fetches actual pending listings and lets an
// admin approve/reject them via the real PUT /api/properties/:id endpoint.
async function renderModeration() {
  const tbody = document.getElementById('moderationBody');
  const headerCount = document.getElementById('moderationHeaderCount');
  const countBadge = document.getElementById('moderationCountBadge');
  tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:1.5rem;color:var(--muted)">Loading pending listings…</td></tr>`;
  try {
    const token = sessionStorage.getItem('eai_token');
    if (!token) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:1.5rem;color:var(--muted)">Sign in as an admin to view pending listings</td></tr>`;
      if (headerCount) headerCount.textContent = 'Sign in as an admin to view pending listings';
      if (countBadge) countBadge.style.display = 'none';
      return;
    }
    const pendingRes = await fetch(`${window.ESTATEAI_API_BASE || 'http://localhost:4000/api'}/properties/admin/pending`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await pendingRes.json();
    const pending = (json?.data?.properties || []).filter(p => p.status === 'pending');

    if (headerCount) {
      headerCount.textContent = pending.length === 1
        ? '1 listing awaiting review'
        : `${pending.length} listings awaiting review`;
    }
    if (countBadge) {
      countBadge.textContent = pending.length;
      countBadge.style.display = pending.length > 0 ? 'inline-block' : 'none';
    }

    if (pending.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:1.5rem;color:var(--muted)">No listings pending moderation</td></tr>`;
      return;
    }

    tbody.innerHTML = pending.map(p => `
      <tr>
        <td><input type="checkbox"></td>
        <td><div style="font-weight:600;font-size:0.875rem">${p.title}</div></td>
        <td style="font-size:0.82rem">${p.locality}, ${p.city}</td>
        <td style="font-weight:600;font-size:0.875rem;color:var(--secondary)">₹${Number(p.price).toLocaleString('en-IN')}</td>
        <td style="font-size:0.82rem;color:var(--muted)">${new Date(p.createdAt).toLocaleDateString()}</td>
        <td><span class="tag tag-blue">${p.propertyType}</span></td>
        <td><button class="btn btn-ghost btn-sm" onclick="showToast('Preview isn\\'t wired up yet','👁')">Preview</button></td>
        <td><div style="display:flex;gap:4px">
          <button class="btn btn-primary btn-sm" onclick="moderateProperty(${p.id}, 'approved', this)">Approve</button>
          <button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="moderateProperty(${p.id}, 'rejected', this)">Reject</button>
        </div></td>
      </tr>`).join('');
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:1.5rem;color:#EF4444">Couldn't load pending listings: ${err.message}</td></tr>`;
  }
}

async function moderateProperty(propertyId, newStatus, btn) {
  const token = sessionStorage.getItem('eai_token');
  if (!token) {
    showToast('Please sign in as an admin to moderate listings', '🔒');
    return;
  }
  const row = btn.closest('tr');
  try {
    const res = await fetch(`${window.ESTATEAI_API_BASE || 'http://localhost:4000/api'}/properties/${propertyId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: newStatus }),
    });
    const json = await res.json();
    if (!res.ok || !json.success) throw new Error(json.error || 'Failed to update listing');
    row.style.opacity = '0.4';
    row.querySelector('td:last-child').innerHTML = newStatus === 'approved'
      ? '<span class="tag tag-green">✓ Approved</span>'
      : '<span class="tag tag-red">✗ Rejected</span>';
    const countBadge = document.getElementById('moderationCountBadge');
    const headerCount = document.getElementById('moderationHeaderCount');
    if (countBadge) {
      const newCount = Math.max(0, parseInt(countBadge.textContent, 10) - 1);
      countBadge.textContent = newCount;
      countBadge.style.display = newCount > 0 ? 'inline-block' : 'none';
      if (headerCount) headerCount.textContent = newCount === 1 ? '1 listing awaiting review' : `${newCount} listings awaiting review`;
    }
    showToast(newStatus === 'approved' ? 'Listing approved ✅' : 'Listing rejected', newStatus === 'approved' ? '✅' : '❌');
  } catch (err) {
    showToast(`Couldn't update listing: ${err.message}`, '⚠️');
  }
}

// ── Render: Subscriptions ─────────────────────────────────────────────────
// Demo data — billing isn't connected to a real payment provider yet.
function renderSubsPanel() {
  const subsData = [];
  document.getElementById('subsTableBody').innerHTML = subsData.length === 0
    ? `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No subscriptions yet — billing isn't connected to a real payment provider</td></tr>`
    : subsData.map(s => `
    <tr>
      <td><div style="font-weight:600;font-size:0.875rem">${s.name}</div></td>
      <td><span class="tag ${s.plan==='Enterprise'?'tag-amber':s.plan==='Pro'?'tag-blue':'tag-green'}">${s.plan}</span></td>
      <td style="font-size:0.82rem">${s.started}</td>
      <td style="font-size:0.82rem;color:var(--muted)">${s.renews}</td>
      <td style="font-weight:600">${s.amount}</td>
      <td><span class="tag ${s.status==='Active'?'tag-green':'tag-blue'}">${s.status}</span></td>
      <td><button class="btn btn-ghost btn-sm" onclick="showToast('Subscription management isn\'t connected yet','💳')">Manage</button></td>
    </tr>`).join('');
  // Chart
  destroyChart('subsGrowth');
  const ctx = document.getElementById('subsGrowthChart');
  if (ctx) chartInstances['subsGrowth'] = new Chart(ctx, {
    type:'line', data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[
      {label:'Pro',data:[2800,3100,3350,3500,3640,3742],borderColor:'#2563EB',tension:0.4,pointRadius:3,fill:false},
      {label:'Enterprise',data:[820,900,980,1040,1090,1125],borderColor:'#F59E0B',tension:0.4,pointRadius:3,fill:false},
    ]},options:{...chartDefaults,plugins:{legend:{display:true,labels:{color:tc()}}},scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc()}}}}
  });
}

// ── Render: Payments ──────────────────────────────────────────────────────
// Demo data — payments aren't connected to a real payment provider yet.
function renderPaymentsPanel() {
  const txns = [];
  document.getElementById('paymentsTableBody').innerHTML = txns.length === 0
    ? `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No transactions yet — payments aren't connected to a real payment provider</td></tr>`
    : txns.map(t => `
    <tr>
      <td style="font-family:monospace;font-size:0.78rem;color:var(--secondary)">${t.id}</td>
      <td style="font-weight:600;font-size:0.875rem">${t.user}</td>
      <td><span class="tag tag-blue">${t.plan}</span></td>
      <td style="font-weight:700">${t.amount}</td>
      <td style="font-size:0.82rem">${t.method}</td>
      <td style="font-size:0.82rem;color:var(--muted)">${t.date}</td>
      <td><span class="tag ${t.status==='Success'?'tag-green':'tag-red'}">${t.status}</span></td>
    </tr>`).join('');
  destroyChart('payments');
  const ctx = document.getElementById('paymentsChart');
  if (ctx) chartInstances['payments'] = new Chart(ctx, {
    type:'bar', data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{
      data:[1820000,2100000,1940000,2420000,2600000,2840000],
      backgroundColor:'rgba(37,99,235,0.7)',borderRadius:6,
    }]},options:{...chartDefaults,scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc(),callback:v=>'₹'+(v/100000).toFixed(1)+'L'}}}}
  });
}

// ── Render: Analytics ─────────────────────────────────────────────────────
// All charts in this panel were removed in favor of honest "not connected"
// placeholders (see the Analytics admin panel markup), so there's nothing
// left for this function to draw. Kept as a no-op since showAdminPanel()
// still calls it when the Analytics tab is opened.
function renderAnalyticsPanel() {}

// ── Render: Support Tickets ───────────────────────────────────────────────
// Demo data — support tickets aren't connected to a backend yet.
function renderSupportPanel() {
  const tickets = [];
  document.getElementById('supportTableBody').innerHTML = tickets.length === 0
    ? `<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--muted)">No support tickets yet — this isn't connected to a backend yet</td></tr>`
    : tickets.map(t => `
    <tr>
      <td style="font-family:monospace;font-size:0.78rem;color:var(--secondary)">${t.id}</td>
      <td style="font-weight:600;font-size:0.875rem">${t.user}</td>
      <td style="max-width:200px"><div style="font-size:0.82rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.subject}</div></td>
      <td><span class="tag ${t.cat==='Payment'?'tag-amber':t.cat==='KYC'?'tag-blue':t.cat==='Agent'?'tag-purple':t.cat==='Technical'?'tag-green':'tag-blue'}">${t.cat}</span></td>
      <td><span class="tag ${t.pri==='High'?'tag-red':t.pri==='Medium'?'tag-amber':'tag-blue'}">${t.pri}</span></td>
      <td style="font-size:0.82rem">${t.assign}</td>
      <td style="font-size:0.78rem;color:var(--muted)">${t.created}</td>
      <td><div style="display:flex;gap:4px">
        <button class="btn btn-primary btn-sm" onclick="showToast('Ticket reply isn\'t connected yet','🎫')">Reply</button>
        <button class="btn btn-ghost btn-sm" onclick="showToast('Ticket status changes aren\'t connected yet','✅')">Close</button>
      </div></td>
    </tr>`).join('');
}

// ── Render: Audit Logs ────────────────────────────────────────────────────
// Demo data — audit logging isn't connected to a backend yet.
function renderAuditPanel() {
  const logs = [];
  const actionColor = a => ({'APPROVE':'tag-green','REJECT':'tag-red','LOGIN':'tag-blue','LOGOUT':'tag-blue','CREATE':'tag-green','UPDATE':'tag-amber','DELETE':'tag-red','SUSPEND':'tag-red','ROLE_CHANGE':'tag-purple','EXPORT':'tag-blue'}[a]||'tag-gray');
  document.getElementById('auditTableBody').innerHTML = logs.length === 0
    ? `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No audit log entries yet — this isn't connected to a backend yet</td></tr>`
    : logs.map(l => `
    <tr>
      <td style="font-size:0.75rem;color:var(--muted);white-space:nowrap">${l.ts}</td>
      <td style="font-size:0.82rem;font-weight:500">${l.actor}</td>
      <td><span class="tag ${l.role.includes('Super')?'tag-red':l.role==='Admin'?'tag-amber':'tag-blue'}" style="font-size:0.7rem">${l.role}</span></td>
      <td><span class="tag ${actionColor(l.action)}">${l.action}</span></td>
      <td style="font-size:0.82rem">${l.entity}</td>
      <td style="font-size:0.78rem;color:var(--muted);max-width:180px;overflow:hidden;text-overflow:ellipsis">${l.detail}</td>
      <td style="font-family:monospace;font-size:0.75rem;color:var(--muted)">${l.ip}</td>
    </tr>`).join('');
}

// ── Shared chart defaults (re-read from outer scope) ─────────────────────
// chartDefaults and tc() are defined in the outer script block — accessible here.
</script>

<!-- ===== CALCULATOR PAGE ===== -->
<div class="page" id="page-calculator">
  <div style="padding-top:68px">
    <div class="container section">
      <div class="section-header"><div class="eyebrow">Financial Tools</div><h2>Real Estate Calculators</h2><p>Make informed decisions with our AI-enhanced financial calculators</p></div>
      <div class="grid-3">
        <!-- EMI -->
        <div class="calc-section">
          <h3 style="font-size:1.1rem;margin-bottom:1.2rem">🏦 EMI Calculator</h3>
          <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Property Value <span id="propValLabel" style="color:var(--secondary)">₹1,00,00,000</span></label><input type="range" min="10" max="1000" value="100" oninput="document.getElementById('propValLabel').textContent='₹'+Math.round(this.value)+'L';calcFullEMI()"></div>
          <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Down Payment <span id="downPayLabel" style="color:var(--secondary)">20%</span></label><input type="range" min="5" max="50" value="20" oninput="document.getElementById('downPayLabel').textContent=this.value+'%';calcFullEMI()"></div>
          <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Interest Rate <span id="fullRateLabel" style="color:var(--secondary)">8.5%</span></label><input type="range" min="6" max="15" step="0.1" value="8.5" oninput="document.getElementById('fullRateLabel').textContent=parseFloat(this.value).toFixed(1)+'%';calcFullEMI()"></div>
          <div class="form-group"><label class="form-label" style="display:flex;justify-content:space-between">Loan Tenure <span id="fullTenureLabel" style="color:var(--secondary)">20 Years</span></label><input type="range" min="1" max="30" value="20" oninput="document.getElementById('fullTenureLabel').textContent=this.value+' Years';calcFullEMI()"></div>
          <div class="calc-result"><div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px">Monthly EMI</div><div class="amount" id="fullEmiResult">₹69,426</div><div style="display:flex;justify-content:center;gap:2rem;margin-top:8px;font-size:0.78rem;color:var(--muted)"><span>Loan: <strong id="loanAmtCalc" style="color:var(--primary)">₹80L</strong></span><span>Interest: <strong id="totalIntCalc" style="color:var(--danger)">₹86.6L</strong></span></div></div>
        </div>
        <!-- ROI -->
        <div class="calc-section">
          <h3 style="font-size:1.1rem;margin-bottom:1.2rem">📈 ROI Calculator</h3>
          <div class="form-group"><label class="form-label">Purchase Price (₹)</label><input type="number" placeholder="10000000" id="roiPurchase" oninput="calcROI()"></div>
          <div class="form-group"><label class="form-label">Annual Rental Income (₹)</label><input type="number" placeholder="720000" id="roiRental" oninput="calcROI()"></div>
          <div class="form-group"><label class="form-label">Annual Expenses (₹)</label><input type="number" placeholder="120000" id="roiExpenses" oninput="calcROI()"></div>
          <div class="form-group"><label class="form-label">Expected Appreciation (%/yr)</label><input type="number" placeholder="8" id="roiAppreciation" oninput="calcROI()"></div>
          <div class="calc-result">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:0.5rem">
              <div><div style="font-size:0.75rem;color:var(--muted)">Net Rental Yield</div><div style="font-family:'Poppins',sans-serif;font-size:1.3rem;font-weight:700;color:var(--secondary)" id="netYield">6.0%</div></div>
              <div><div style="font-size:0.75rem;color:var(--muted)">5-Year ROI</div><div style="font-family:'Poppins',sans-serif;font-size:1.3rem;font-weight:700;color:#10B981" id="fiveYearROI">62.4%</div></div>
            </div>
            <div style="font-size:0.78rem;color:var(--muted)">Investment rating: <strong id="roiRating" style="color:#10B981">—</strong></div>
          </div>
        </div>
        <!-- RENTAL YIELD -->
        <div class="calc-section">
          <h3 style="font-size:1.1rem;margin-bottom:1.2rem">🏠 Rental Yield Calculator</h3>
          <div class="form-group"><label class="form-label">Property Value (₹)</label><input type="number" placeholder="10000000" id="rvPropVal" oninput="calcRV()"></div>
          <div class="form-group"><label class="form-label">Monthly Rent (₹)</label><input type="number" placeholder="60000" id="rvRent" oninput="calcRV()"></div>
          <div class="form-group"><label class="form-label">Annual Maintenance (₹)</label><input type="number" placeholder="60000" id="rvMaint" oninput="calcRV()"></div>
          <div class="form-group"><label class="form-label">Occupancy Rate (%)</label><input type="range" min="50" max="100" value="90" oninput="document.getElementById('occLabel').textContent=this.value+'%';calcRV()"><span id="occLabel" style="font-size:0.85rem;color:var(--secondary)">90%</span></div>
          <div class="calc-result">
            <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px">Gross Rental Yield</div>
            <div class="amount" id="rvResult">7.2%</div>
            <div style="font-size:0.78rem;color:var(--muted);margin-top:4px">Net after expenses: <strong id="rvNet" style="color:#10B981">6.0%</strong></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== AGENTS PAGE ===== -->
<div class="page" id="page-agents">
  <div style="padding-top:68px">
    <div class="container section">
      <div class="section-header"><div class="eyebrow">Our Experts</div><h2>Top Real Estate Agents</h2><p>Verified, experienced agents on EstateAI Pro</p></div>
      <div style="display:flex;gap:10px;justify-content:center;margin-bottom:2rem;flex-wrap:wrap">
        <input type="text" placeholder="🔍 Search by name or city..." style="max-width:280px"><select style="width:auto"><option>All Cities</option><option>Mumbai</option><option>Delhi</option><option>Bangalore</option></select><select style="width:auto"><option>All Specializations</option><option>Residential</option><option>Commercial</option><option>Luxury</option></select>
      </div>
      <div class="grid-4" id="agentsGrid"></div>
    </div>
  </div>
</div>

<!-- ===== PRICING PAGE ===== -->
<div class="page" id="page-pricing">
  <div style="padding-top:68px">
    <div class="container section">
      <div class="section-header"><div class="eyebrow">Pricing</div><h2>Choose Your Plan</h2><p>From individual buyers to large builders — plans for every need</p></div>
      <div style="display:flex;gap:6px;background:var(--border);padding:4px;border-radius:10px;width:fit-content;margin:0 auto 3rem">
        <button class="btn btn-primary btn-sm">Monthly</button><button class="btn btn-ghost btn-sm">Annual (Save 30%)</button>
      </div>
      <div class="grid-3" style="max-width:900px;margin:0 auto" id="pricingGrid">
        <div class="plan-card"><div style="font-size:2rem;margin-bottom:0.8rem">🆓</div><h3>Basic</h3><p style="color:var(--muted);font-size:0.875rem;margin-top:4px">For buyers & tenants</p><div class="plan-price"><sup>₹</sup>0<span>/mo</span></div><div style="margin:1.5rem 0"><div class="plan-feature"><span class="check">✓</span> Browse all listings</div><div class="plan-feature"><span class="check">✓</span> 5 Inquiries/month</div><div class="plan-feature"><span class="check">✓</span> Wishlist (10 items)</div><div class="plan-feature"><span class="check">✓</span> Basic search filters</div><div class="plan-feature" style="opacity:0.4"><span class="cross">✗</span> AI Recommendations</div><div class="plan-feature" style="opacity:0.4"><span class="cross">✗</span> Virtual tours</div></div><button class="btn btn-ghost" style="width:100%" onclick="showToast('Basic plan selected','✅')">Get Started Free</button></div>
        <div class="plan-card featured"><div class="plan-badge">Most Popular</div><div style="font-size:2rem;margin-bottom:0.8rem">⭐</div><h3>Pro</h3><p style="color:var(--muted);font-size:0.875rem;margin-top:4px">For agents & active buyers</p><div class="plan-price"><sup>₹</sup>4,999<span>/mo</span></div><div style="margin:1.5rem 0"><div class="plan-feature"><span class="check">✓</span> Everything in Basic</div><div class="plan-feature"><span class="check">✓</span> Unlimited inquiries</div><div class="plan-feature"><span class="check">✓</span> AI Recommendations</div><div class="plan-feature"><span class="check">✓</span> Priority listings</div><div class="plan-feature"><span class="check">✓</span> Advanced analytics</div><div class="plan-feature"><span class="check">✓</span> WhatsApp leads</div></div><button class="btn btn-primary" style="width:100%" onclick="showToast('Pro plan selected!','⭐')">Start Pro Trial</button></div>
        <div class="plan-card"><div style="font-size:2rem;margin-bottom:0.8rem">🏆</div><h3>Enterprise</h3><p style="color:var(--muted);font-size:0.875rem;margin-top:4px">For builders & agencies</p><div class="plan-price"><sup>₹</sup>14,999<span>/mo</span></div><div style="margin:1.5rem 0"><div class="plan-feature"><span class="check">✓</span> Everything in Pro</div><div class="plan-feature"><span class="check">✓</span> Unlimited listings</div><div class="plan-feature"><span class="check">✓</span> Featured placement</div><div class="plan-feature"><span class="check">✓</span> API access</div><div class="plan-feature"><span class="check">✓</span> Dedicated account manager</div><div class="plan-feature"><span class="check">✓</span> White-label options</div></div><button class="btn btn-accent" style="width:100%" onclick="showToast('Enterprise plan selected!','🏆')">Contact Sales</button></div>
      </div>
    </div>
  </div>
</div>

<!-- ===== ABOUT PAGE ===== -->
<div class="page" id="page-about">
  <div style="padding-top:68px">
    <div style="background:linear-gradient(135deg,#0F172A,#1e3a5f);padding:5rem 2rem;text-align:center">
      <div class="container"><h1 style="font-size:3rem;font-weight:800;color:#fff;margin-bottom:1rem">Building the Future of<br><span style="background:linear-gradient(90deg,#2563EB,#F59E0B);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Indian Real Estate</span></h1><p style="color:rgba(255,255,255,0.7);max-width:560px;margin:0 auto;line-height:1.7">EstateAI Pro is an AI-powered real estate platform connecting buyers, sellers, and renters with intelligent property insights.</p></div>
    </div>
    <div class="container section">
      <div class="grid-3" style="margin-bottom:4rem">
        <div style="text-align:center;padding:2rem"><div id="statListingsAbout" style="font-family:'Poppins',sans-serif;font-size:2.5rem;font-weight:800;color:var(--secondary)">—</div><div style="color:var(--muted);margin-top:4px">Verified Listings</div></div>
        <div style="text-align:center;padding:2rem"><div id="statAgentsAbout" style="font-family:'Poppins',sans-serif;font-size:2.5rem;font-weight:800;color:var(--secondary)">—</div><div style="color:var(--muted);margin-top:4px">Verified Agents</div></div>
        <div style="text-align:center;padding:2rem"><div id="statCitiesAbout" style="font-family:'Poppins',sans-serif;font-size:2.5rem;font-weight:800;color:var(--secondary)">—</div><div style="color:var(--muted);margin-top:4px">Cities Covered</div></div>
      </div>
      <div class="grid-2" style="align-items:center;gap:4rem">
        <div><div class="eyebrow" style="margin-bottom:1rem">Our Mission</div><h2 style="margin-bottom:1rem">Democratizing Real Estate with AI</h2><p style="color:var(--muted);line-height:1.8;margin-bottom:1.2rem">We believe every Indian deserves access to intelligent, transparent, and fair real estate transactions. Our AI analyzes property data to give you accurate insights.</p><p style="color:var(--muted);line-height:1.8">We're building an AI-powered real estate platform trusted by builders, agents, buyers and tenants alike.</p></div>
        <div class="chart-card"><h3 style="margin-bottom:0.5rem">Platform Growth <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
      </div>
    </div>
  </div>
</div>

<!-- ===== MODALS ===== -->
<!-- LOGIN -->
<div class="modal-overlay" id="loginModal" style="display:none" onclick="if(event.target===this)closeModal('loginModal')">
  <div class="modal" style="position:relative">
    <button class="modal-close" onclick="closeModal('loginModal')">✕</button>
    <div style="text-align:center;margin-bottom:1.5rem"><div style="font-size:2.5rem">🏠</div><h2 style="margin-top:8px">Welcome Back</h2><p class="sub">Sign in to EstateAI Pro</p></div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:1.5rem">
      <button class="btn btn-ghost" style="justify-content:center;display:flex;align-items:center;gap:10px" onclick="showToast('Google sign-in isn\'t connected to a backend yet','🔐')">🔵 Continue with Google</button>
      <button class="btn btn-ghost" style="justify-content:center;display:flex;align-items:center;gap:10px" onclick="showToast('Phone OTP isn\'t connected to a backend yet','📱')">📱 Continue with Phone OTP</button>
    </div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.5rem;color:var(--muted);font-size:0.85rem"><div style="flex:1;height:1px;background:var(--border)"></div><span>or email</span><div style="flex:1;height:1px;background:var(--border)"></div></div>
    <div class="form-group"><label class="form-label">Email Address</label><input type="email" id="loginEmail" placeholder="you@example.com"></div>
    <div class="form-group"><label class="form-label">Password</label><input type="password" id="loginPassword" placeholder="••••••••"></div>
    <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:1.5rem"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox"> Remember me</label><span style="color:var(--secondary);cursor:pointer" onclick="showToast('Password reset isn\'t connected to a backend yet','📧')">Forgot password?</span></div>
    <div id="loginError" style="display:none;color:#EF4444;font-size:0.82rem;margin-bottom:1rem;text-align:center"></div>
    <button class="btn btn-primary" style="width:100%;padding:13px" id="loginSubmitBtn" onclick="handleLogin()">Sign In</button>
    <p style="text-align:center;margin-top:1rem;font-size:0.875rem;color:var(--muted)">Don't have an account? <span style="color:var(--secondary);cursor:pointer;font-weight:600" onclick="closeModal('loginModal');showModal('registerModal')">Register</span></p>
    <div style="text-align:center;margin-top:1rem;font-size:0.72rem;color:var(--muted)">🔒 Secured by 256-bit SSL encryption</div>
  </div>
</div>

<!-- REGISTER -->
<div class="modal-overlay" id="registerModal" style="display:none" onclick="if(event.target===this)closeModal('registerModal')">
  <div class="modal" style="position:relative">
    <button class="modal-close" onclick="closeModal('registerModal')">✕</button>
    <h2>Create Account</h2><p class="sub">Join EstateAI Pro</p>
    <div class="role-grid" id="roleGrid">
      <div class="role-card selected" data-role="buyer" onclick="selectRole(this,'Buyer')"><div class="role-icon">🏠</div><h4>Buyer</h4><p>Looking to buy</p></div>
      <div class="role-card" data-role="tenant" onclick="selectRole(this,'Tenant')"><div class="role-icon">🏢</div><h4>Tenant</h4><p>Looking to rent</p></div>
      <div class="role-card" data-role="agent" onclick="selectRole(this,'Agent')"><div class="role-icon">🤝</div><h4>Agent</h4><p>Real estate agent</p></div>
      <div class="role-card" data-role="builder" onclick="selectRole(this,'Builder')"><div class="role-icon">🏗</div><h4>Builder</h4><p>Developer / Owner</p></div>
    </div>
    <div class="grid-2"><div class="form-group"><label class="form-label">First Name</label><input type="text" id="regFirstName" placeholder="Priya"></div><div class="form-group"><label class="form-label">Last Name</label><input type="text" id="regLastName" placeholder="Sharma"></div></div>
    <div class="form-group"><label class="form-label">Email</label><input type="email" id="regEmail" placeholder="you@example.com"></div>
    <div class="form-group"><label class="form-label">Phone</label><input type="tel" id="regPhone" placeholder="+91 98765 43210"></div>
    <div class="form-group"><label class="form-label">Password</label><input type="password" id="regPassword" placeholder="Min 8 characters"></div>
    <div style="margin-bottom:1.2rem;font-size:0.82rem"><label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer"><input type="checkbox" id="regTerms" style="width:auto;margin-top:3px"> <span style="color:var(--muted)">I agree to the <span style="color:var(--secondary)">Terms of Service</span> and <span style="color:var(--secondary)">Privacy Policy</span></span></label></div>
    <div id="registerError" style="display:none;color:#EF4444;font-size:0.82rem;margin-bottom:1rem;text-align:center"></div>
    <button class="btn btn-primary" style="width:100%;padding:13px" id="registerSubmitBtn" onclick="handleRegister()">Create Account →</button>
    <p style="text-align:center;margin-top:1rem;font-size:0.875rem;color:var(--muted)">Already have an account? <span style="color:var(--secondary);cursor:pointer;font-weight:600" onclick="closeModal('registerModal');showModal('loginModal')">Sign In</span></p>
  </div>
</div>

<!-- AI CHAT ASSISTANT -->
<div class="ai-chat">
  <div class="ai-chat-window" id="aiChatWindow">
    <div class="ai-chat-header">
      <div style="width:36px;height:36px;background:linear-gradient(135deg,#2563EB,#7c3aed);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem">🤖</div>
      <div><div style="font-weight:600;font-size:0.875rem">EstateAI Assistant</div><div style="font-size:0.75rem;color:var(--muted)">Not connected</div></div>
      <button style="margin-left:auto;background:none;border:none;cursor:pointer;color:var(--muted);font-size:1.1rem" onclick="toggleChat()">✕</button>
    </div>
    <div class="ai-chat-msgs" id="aiMsgs">
      <div class="ai-msg ai">👋 This AI assistant isn't connected to a real backend yet — messages sent here won't be processed. Try the search and filter tools instead.</div>
    </div>
    <div class="ai-chat-input">
      <input type="text" placeholder="Ask about properties, prices, EMI..." id="chatInput" onkeydown="if(event.key==='Enter')sendChat()">
      <button class="ai-send" onclick="sendChat()">➤</button>
    </div>
  </div>
  <button class="ai-chat-btn" onclick="toggleChat()" title="AI Property Assistant">🤖</button>
</div>

<script>
// ═══════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════
// Real property data is fetched live from /api/properties — see the
// backend integration script near the end of this file. This array is
// intentionally empty so nothing fake can ever render if a fetch fails
// or if this page is opened without the backend running.
const properties = [];

// Real agent data is fetched live from /api/agents — see the backend
// integration script near the end of this file.
const agents = [];

// ═══════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg = document.getElementById('page-'+id);
  if(pg){pg.classList.add('active');window.scrollTo(0,0);}
  document.querySelectorAll('.nav-links a').forEach(a=>{a.classList.remove('active');if(a.id==='nav-'+id)a.classList.add('active');});
  // Lazy init charts
  if(id==='admin'){
    document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('ap-active'));
    const ov=document.getElementById('ap-overview');if(ov)ov.classList.add('ap-active');
    document.querySelectorAll('#adminSidebar .sidebar-item').forEach(el=>el.classList.remove('si-active'));
    const asi=document.getElementById('asi-overview');if(asi)asi.classList.add('si-active');
    setTimeout(()=>{if(!_adminPanelChartsDone['overview']){_adminPanelChartsDone['overview']=true;initAdminCharts();}},120);
  }
  if(id==='agent')setTimeout(initAgentCharts,100);
  if(id==='builder')setTimeout(initBuilderCharts,100);
  if(id==='landing')setTimeout(initLandingCharts,100);
  if(id==='about')setTimeout(initAboutChart,100);
  if(id==='detail')setTimeout(initDetailChart,100);
  if(id==='calculator')setTimeout(()=>{calcFullEMI();calcROI();calcRV();},50);
  document.getElementById('notifDropdown').classList.remove('open');
}

// ═══════════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════════
let dark=false;
function toggleTheme(){
  dark=!dark;
  document.body.dataset.theme=dark?'dark':'light';
  document.getElementById('themeToggle').textContent=dark?'☀️':'🌙';
}

// ═══════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════
let toastTimer;
function showToast(msg,icon='ℹ️'){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  document.getElementById('toastIcon').textContent=icon;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),3200);
}

// ═══════════════════════════════════════════════
//  MODALS
// ═══════════════════════════════════════════════
function showModal(id){document.getElementById(id).style.display='flex';}
function closeModal(id){document.getElementById(id).style.display='none';}
function selectRole(el,role){document.querySelectorAll('.role-card').forEach(c=>c.classList.remove('selected'));el.classList.add('selected');window.__selectedRole=el.dataset.role||role.toLowerCase();}

// ═══════════════════════════════════════════════
//  NOTIFICATIONS
// ═══════════════════════════════════════════════
function toggleNotif(){document.getElementById('notifDropdown').classList.toggle('open');}
document.addEventListener('click',e=>{if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.remove('open');});

// ═══════════════════════════════════════════════
//  AI CHAT
// ═══════════════════════════════════════════════
let chatOpen=false;
// AI chat replies were previously a hardcoded fallback array used when the
// (unauthenticated, browser-side) Anthropic API call failed — which it
// always did, since no API key was ever wired in. Removed in favor of an
// honest "not connected" message; see sendChat() below.

function toggleChat(){
  chatOpen=!chatOpen;
  document.getElementById('aiChatWindow').classList.toggle('open',chatOpen);
}

async function sendChat(){
  const input=document.getElementById('chatInput');
  const msg=input.value.trim();
  if(!msg)return;
  const msgs=document.getElementById('aiMsgs');
  msgs.innerHTML+=`<div class="ai-msg user">${msg}</div>`;
  input.value='';
  msgs.scrollTop=msgs.scrollHeight;
  msgs.innerHTML+=`<div class="ai-msg ai">This AI assistant isn't connected to a real backend yet — your message wasn't processed. Try the search filters instead to find properties.</div>`;
  msgs.scrollTop=msgs.scrollHeight;
}

// ═══════════════════════════════════════════════
//  AI DESCRIPTION GENERATOR
// ═══════════════════════════════════════════════
async function generateAIDesc(){
  const loader=document.getElementById('aiDescLoader');
  const desc=document.getElementById('propDesc');
  loader.style.display='block';
  desc.value='';
  await new Promise(r=>setTimeout(r,400));
  loader.style.display='none';
  showToast('AI description generation isn\'t connected to a backend yet','🚧');
}

// ═══════════════════════════════════════════════
//  SEARCH / FILTER
// ═══════════════════════════════════════════════
function setSTab(el,type){document.querySelectorAll('.search-tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');}
function setFilter(type){['Buy','Rent','PG'].forEach(t=>{const el=document.getElementById('filter'+t);if(el){el.className='btn btn-sm '+(t===type?'btn-primary':'btn-ghost');}});}
function updatePriceRange(v){const lakh=Math.round(v*5);const crore=(lakh/100).toFixed(1);document.getElementById('priceRangeLabel').textContent='₹30L – ₹'+crore+'Cr';}

// ═══════════════════════════════════════════════
//  PROPERTY CARDS RENDER
// ═══════════════════════════════════════════════
function renderPropCard(p){
  const bgColors=['linear-gradient(135deg,#1e3a5f,#2563EB)','linear-gradient(135deg,#2563EB,#7c3aed)','linear-gradient(135deg,#0f4c81,#1e3a5f)','linear-gradient(135deg,#1e3a5f,#10B981)','linear-gradient(135deg,#7c3aed,#2563EB)','linear-gradient(135deg,#0f4c81,#7c3aed)'];
  const bg=bgColors[p.id%bgColors.length];
  const bhkLabel=p.bhk>0?p.bhk+' BHK':'Office';
  return `<div class="prop-card" onclick="showPage('detail')">
    <div class="prop-img" style="background:${bg}">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3.5rem;color:rgba(255,255,255,0.25)">${p.img}</div>
      <div class="prop-img-overlay">
        <span class="prop-badge ${p.badgeClass}">${p.badge}</span>
        <div class="prop-wish ${p.wish?'active':''}" onclick="event.stopPropagation();this.classList.toggle('active');showToast(this.classList.contains('active')?'Added to wishlist ❤️':'Removed from wishlist','❤️')">♡</div>
      </div>
    </div>
    <div class="prop-body">
      <div class="prop-price">${p.price} ${p.tag==='rent'?'<small>/month</small>':''}</div>
      <div class="prop-name">${p.title}</div>
      <div class="prop-loc">📍 ${p.loc}</div>
      <div class="prop-meta">
        ${p.bhk>0?`<span><span class="icon">🛏</span> ${p.bhk} BHK</span>`:''}
        ${p.baths>0?`<span><span class="icon">🛁</span> ${p.baths}</span>`:''}
        <span><span class="icon">📐</span> ${p.sqft} sqft</span>
        <span style="margin-left:auto;color:#10B981;font-size:0.72rem;font-weight:600">✓ Verified</span>
      </div>
    </div>
  </div>`;
}

function renderAgentCard(a){
  const colorMap={blue:'avatar-blue',amber:'avatar-amber',green:'avatar-green',purple:'avatar-blue'};
  return `<div class="agent-card">
    <div class="agent-avatar">${a.initials}</div>
    <div class="agent-name">${a.name}</div>
    <div class="agent-title">${a.spec} · ${a.city}</div>
    <div style="display:flex;gap:2px;color:#F59E0B;font-size:0.85rem;margin-top:4px">★★★★★ <span style="color:var(--muted);font-size:0.78rem">${a.rating}</span></div>
    <div class="agent-stats">
      <div class="agent-stat"><strong>${a.deals}</strong><span>Deals</span></div>
      <div class="agent-stat"><strong>${a.exp}</strong><span>Exp</span></div>
    </div>
    <button class="btn btn-primary" style="width:100%;margin-top:8px" onclick="showToast('Calling isn\'t connected yet','📞')">Contact Agent</button>
  </div>`;
}

// ═══════════════════════════════════════════════
//  MULTI-STEP FORM
// ═══════════════════════════════════════════════
let curStep=1;
function goToStep(n){
  for(let i=1;i<=6;i++){
    const c=document.getElementById('stepContent'+i);
    const s=document.querySelector(`.step[data-step="${i}"]`);
    if(c)c.style.display=i===n?'block':'none';
    if(s){s.classList.toggle('active',i===n);s.classList.toggle('done',i<n);}
  }
  curStep=n;
  document.getElementById('currentStep').textContent=n;
  document.getElementById('prevBtn').style.display=n>1?'inline-block':'none';
  document.getElementById('nextBtn').textContent=n===6?'Publish Now 🚀':'Next Step →';
}
function changeStep(dir){
  const next=curStep+dir;
  if(next>=1&&next<=6)goToStep(next);
}

// Amenities
const amenityList=['🏊 Swimming Pool','💪 Gymnasium','🔐 24×7 Security','⚡ Power Backup','🎾 Sports Complex','🧘 Yoga Deck','🛗 High-Speed Lifts','🌳 Landscaped Garden','🎮 Kids Play Area','🏪 Mini Supermart','🚗 Covered Parking','📡 High-Speed WiFi'];
function renderAmenities(){
  const container=document.getElementById('amenitiesList');
  if(!container)return;
  container.innerHTML=amenityList.map((a,i)=>`<span class="tag ${i%3===0?'tag-blue':i%3===1?'tag-green':'tag-amber'}" style="cursor:pointer" onclick="this.classList.toggle('tag-blue');this.classList.toggle('tag-amber')">${a}</span>`).join('');
}

// ═══════════════════════════════════════════════
//  CALCULATORS
// ═══════════════════════════════════════════════
function calcEMI(){
  const P=228e5,r=parseFloat(document.getElementById('rateSlider').value)/1200,n=parseFloat(document.getElementById('tenureSlider').value)*12;
  const emi=P*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  document.getElementById('emiResult').textContent='₹'+Math.round(emi).toLocaleString('en-IN');
  document.getElementById('iRate').textContent=parseFloat(document.getElementById('rateSlider').value).toFixed(1)+'%';
  document.getElementById('tenure').textContent=document.getElementById('tenureSlider').value+' Years';
}
function calcFullEMI(){
  const propValL = parseFloat(document.getElementById('propValLabel').textContent.replace(/[₹,L]/g,'')) || 100;
  const propVal = propValL * 100000; // slider is in lakhs
  const downPayPct = parseFloat(document.getElementById('downPayLabel').textContent.replace('%','')) || 20;
  const ratePct = parseFloat(document.getElementById('fullRateLabel').textContent.replace('%','')) || 8.5;
  const years = parseFloat(document.getElementById('fullTenureLabel').textContent.replace(' Years','')) || 20;

  const loanAmt = propVal * (1 - downPayPct / 100);
  const monthlyRate = (ratePct / 100) / 12;
  const months = years * 12;
  const emi = monthlyRate === 0
    ? loanAmt / months
    : (loanAmt * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmt;

  document.getElementById('fullEmiResult').textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
  document.getElementById('loanAmtCalc').textContent = '₹' + (loanAmt / 100000).toFixed(1) + 'L';
  document.getElementById('totalIntCalc').textContent = '₹' + (totalInterest / 100000).toFixed(1) + 'L';
}
function calcROI(){
  const purchase=parseFloat(document.getElementById('roiPurchase').value)||10000000;
  const rental=parseFloat(document.getElementById('roiRental').value)||720000;
  const expenses=parseFloat(document.getElementById('roiExpenses').value)||120000;
  const appreciation=parseFloat(document.getElementById('roiAppreciation').value)||8;
  const netYield=((rental-expenses)/purchase*100).toFixed(1);
  const fiveYearROI=((Math.pow(1+appreciation/100,5)-1)*100+netYield*5).toFixed(1);
  document.getElementById('netYield').textContent=netYield+'%';
  document.getElementById('fiveYearROI').textContent=fiveYearROI+'%';
  const ratingEl=document.getElementById('roiRating');
  const yieldNum=parseFloat(netYield);
  let rating, color;
  if(yieldNum>=6){rating='Strong';color='#10B981';}
  else if(yieldNum>=3){rating='Moderate';color='#F59E0B';}
  else if(yieldNum>=0){rating='Weak';color='#EF4444';}
  else {rating='Negative';color='#EF4444';}
  ratingEl.textContent=rating;
  ratingEl.style.color=color;
}
function calcRV(){
  const propVal=parseFloat(document.getElementById('rvPropVal').value)||10000000;
  const rent=parseFloat(document.getElementById('rvRent').value)||60000;
  const maint=parseFloat(document.getElementById('rvMaint').value)||60000;
  const gross=((rent*12)/propVal*100).toFixed(1);
  const net=(((rent*12-maint)/propVal)*100).toFixed(1);
  document.getElementById('rvResult').textContent=gross+'%';
  document.getElementById('rvNet').textContent=net+'%';
}

// ═══════════════════════════════════════════════
//  CHARTS
// ═══════════════════════════════════════════════
const chartDefaults={responsive:true,maintainAspectRatio:true,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(128,128,128,0.08)'}}}};
function isDark(){return document.body.dataset.theme==='dark';}
function tc(){return isDark()?'rgba(255,255,255,0.7)':'rgba(15,23,42,0.7)';}

let chartInstances={};
function destroyChart(id){if(chartInstances[id]){chartInstances[id].destroy();delete chartInstances[id];}}

// initLandingCharts/initDetailChart used to draw the fake AI price
// prediction and price history charts; both canvases were removed in
// favor of honest "not connected" text, so these are now no-ops.
function initLandingCharts(){}
function initDetailChart(){}

function initAdminCharts(){
  const months=['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];
  destroyChart('adminRevenue');
  const r=document.getElementById('adminRevenueChart');if(r)chartInstances['adminRevenue']=new Chart(r,{type:'bar',data:{labels:months,datasets:[{data:[18,21,19,24,26,28,22,25,27,24,26,28],backgroundColor:'rgba(37,99,235,0.7)',borderRadius:6}]},options:{...chartDefaults,scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc(),callback:v=>'₹'+v+'L'}}}}});
  destroyChart('adminUser');
  const u=document.getElementById('adminUserChart');if(u)chartInstances['adminUser']=new Chart(u,{type:'line',data:{labels:months,datasets:[{data:[9200,9600,10100,10500,10900,11200,11600,11900,12100,12400,12600,12847],borderColor:'#10B981',backgroundColor:'rgba(16,185,129,0.1)',fill:true,tension:0.4,pointRadius:3}]},options:{...chartDefaults,scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc()}}}}});
  // "Listings by City" is created separately with real data fetched from
  // /api/stats/by-city — see loadAdminCityChart() in the backend
  // integration script near the end of this file.
  destroyChart('adminSub');
  const s=document.getElementById('adminSubChart');if(s)chartInstances['adminSub']=new Chart(s,{type:'doughnut',data:{labels:['Basic','Pro','Enterprise'],datasets:[{data:[62,29,9],backgroundColor:['#94A3B8','#2563EB','#F59E0B'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'bottom',labels:{color:tc(),padding:16}}}}});
}

function initAgentCharts(){
  destroyChart('agentLeads');
  const l=document.getElementById('agentLeadsChart');if(!l)return;
  chartInstances['agentLeads']=new Chart(l,{type:'doughnut',data:{labels:['New','Contacted','Visit','Negotiate','Closed'],datasets:[{data:[8,6,5,3,2],backgroundColor:['#94A3B8','#F59E0B','#7c3aed','#2563EB','#10B981'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'bottom',labels:{color:tc(),padding:12,boxWidth:12}}}}});
  destroyChart('agentPerf');
  const p=document.getElementById('agentPerfChart');if(!p)return;
  chartInstances['agentPerf']=new Chart(p,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Leads',data:[14,18,15,22,20,24],borderColor:'#2563EB',tension:0.4,pointRadius:3},{label:'Closures',data:[3,4,4,6,5,8],borderColor:'#10B981',tension:0.4,pointRadius:3}]},options:{...chartDefaults,plugins:{legend:{display:true,labels:{color:tc()}}},scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc()}}}}});
}

function initBuilderCharts(){
  destroyChart('builderFunnel');
  const f=document.getElementById('builderFunnelChart');if(!f)return;
  chartInstances['builderFunnel']=new Chart(f,{type:'bar',data:{labels:['Impressions','Inquiries','Site Visits','Negotiations','Closures'],datasets:[{data:[8400,420,84,22,8],backgroundColor:'rgba(37,99,235,0.7)',borderRadius:6}]},options:{...chartDefaults,scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc()}}}}});
  destroyChart('builderRev');
  const r=document.getElementById('builderRevChart');if(!r)return;
  chartInstances['builderRev']=new Chart(r,{type:'doughnut',data:{labels:['Sky High','Sunrise','Grand Villa','Office Hub','Others'],datasets:[{data:[32,22,18,14,14],backgroundColor:['#2563EB','#10B981','#F59E0B','#7c3aed','#94A3B8'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'bottom',labels:{color:tc(),boxWidth:12}}}}});
}

function initAboutChart(){
  destroyChart('aboutGrowth');
  const a=document.getElementById('aboutGrowthChart');if(!a)return;
  chartInstances['aboutGrowth']=new Chart(a,{type:'line',data:{labels:['2020','2021','2022','2023','2024','2025'],datasets:[{label:'Users (K)',data:[12,48,180,420,780,1000],borderColor:'#2563EB',backgroundColor:'rgba(37,99,235,0.08)',fill:true,tension:0.4,pointRadius:4,pointBackgroundColor:'#2563EB'},{label:'Listings (K)',data:[2,8,18,32,44,50],borderColor:'#F59E0B',backgroundColor:'rgba(245,158,11,0.05)',fill:true,tension:0.4,pointRadius:4,pointBackgroundColor:'#F59E0B'}]},options:{...chartDefaults,plugins:{legend:{display:true,labels:{color:tc()}}},scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc()}}}}});
}

// ═══════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════
function init(){
  // Featured grid — populated live by loadFeaturedProperties() in the
  // backend integration script; show a loading state until then.
  const fg=document.getElementById('featuredGrid');
  if(fg)fg.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Loading properties…</div>`;
  // Listings grid — populated live by loadListings() when that page opens.
  const lg=document.getElementById('listingsGrid');
  if(lg)lg.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Loading properties…</div>`;
  // Wishlist grid — populated live by the wishlist API when that page opens.
  const wg=document.getElementById('wishlistGrid');
  if(wg)wg.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Sign in to see your wishlist</div>`;
  // Agents grid
  const ag=document.getElementById('agentsGrid');
  if(ag)ag.innerHTML=agents.map(renderAgentCard).join('');
  // Render amenities
  renderAmenities();
  // Init landing charts
  setTimeout(initLandingCharts,200);
}

document.addEventListener('DOMContentLoaded',init);
</script>

<!-- ===== TENANT DASHBOARD ===== -->
<div class="page" id="page-tenant">
  <div class="dash-layout">
    <div class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">My Rental</div>
        <div class="sidebar-item active"><span class="icon">🏠</span> Dashboard</div>
        <div class="sidebar-item" onclick="showTenantPanel('lease')"><span class="icon">📄</span> Lease Agreement</div>
        <div class="sidebar-item" onclick="showTenantPanel('payments')"><span class="icon">💳</span> Rent Payments</div>
        <div class="sidebar-item" onclick="showPage('maintenance')"><span class="icon">🔧</span> Maintenance</div>
        <div class="sidebar-item" onclick="showTenantPanel('documents')"><span class="icon">📂</span> Documents</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Search</div>
        <div class="sidebar-item" onclick="showPage('listings')"><span class="icon">🔍</span> Find Rentals</div>
        <div class="sidebar-item" onclick="showToast('Saved rentals isn\'t connected to a backend yet','❤️')"><span class="icon">❤️</span> Saved Rentals</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Account</div>
        <div class="sidebar-item" onclick="showPage('kyc')"><span class="icon">👤</span> Profile & KYC</div>
        <div class="sidebar-item" onclick="showPage('landing')"><span class="icon">🚪</span> Logout</div>
      </div>
    </div>
    <div class="dash-content">
      <div class="dash-header"><h1>Tenant Dashboard</h1><p>Lease details aren't connected to a backend yet</p></div>
      <!-- LEASE CARD -->
      <div style="background:linear-gradient(135deg,#0F172A,#1e3a5f);border-radius:var(--radius-xl);padding:2rem;margin-bottom:2rem;color:#fff;position:relative;overflow:hidden">
        <div style="position:absolute;right:-20px;top:-20px;width:160px;height:160px;border-radius:50%;background:rgba(37,99,235,0.15)"></div>
        <div style="position:absolute;right:60px;top:60px;width:80px;height:80px;border-radius:50%;background:rgba(245,158,11,0.1)"></div>
        <div style="display:grid;grid-template-columns:1fr auto;gap:2rem;align-items:start">
          <div>
            <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.5);margin-bottom:8px">Current Lease</div>
            <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:6px">No lease on file</h2>
            <p style="color:rgba(255,255,255,0.6);font-size:0.875rem">Lease tracking isn't connected to a backend yet</p>
          </div>
          <div style="text-align:right">
            <span class="tag" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.6);margin-bottom:12px;display:inline-block">No active lease</span>
          </div>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-icon stat-icon-green">✅</div><div class="value">—</div><div class="label">Rents Paid</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-amber">🔧</div><div class="value">—</div><div class="label">Open Requests</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-blue">📄</div><div class="value">—</div><div class="label">Documents</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-purple">📅</div><div class="value">—</div><div class="label">Days Remaining</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      </div>
      <!-- PAYMENT HISTORY -->
      <div class="table-card" style="margin-bottom:2rem">
        <div class="table-head"><h3>Rent Payment History</h3><button class="btn btn-primary btn-sm" onclick="showToast('Rent payments aren\\'t connected to a backend yet','💳')">Pay Rent →</button></div>
        <table><thead><tr><th>Month</th><th>Amount</th><th>Due Date</th><th>Paid On</th><th>Status</th><th>Receipt</th></tr></thead>
        <tbody>
          <tr><td colspan="6" style="text-align:center;padding:1.5rem;color:var(--muted)">No payment history yet — rent payments aren't connected to a backend yet</td></tr>
        </tbody></table>
      </div>
      <!-- MAINTENANCE REQUESTS -->
      <div class="grid-2">
        <div class="table-card">
          <div class="table-head"><h3>🔧 Maintenance Requests</h3><button class="btn btn-primary btn-sm" onclick="showPage('maintenance')">+ New Request</button></div>
          <table><thead><tr><th>Issue</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td colspan="3" style="text-align:center;padding:1.5rem;color:var(--muted)">No maintenance requests yet</td></tr>
          </tbody></table>
        </div>
        <div class="chart-card">
          <h3>Rent Payment Chart <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3>
          <div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== MAINTENANCE PAGE ===== -->
<div class="page" id="page-maintenance">
  <div class="dash-layout">
    <div class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">Maintenance</div>
        <div class="sidebar-item active"><span class="icon">🔧</span> All Requests</div>
        <div class="sidebar-item" onclick="showToast('New request','➕')"><span class="icon">➕</span> New Request</div>
        <div class="sidebar-item" onclick="showPage('tenant')"><span class="icon">← </span> Back to Dashboard</div>
      </div>
    </div>
    <div class="dash-content">
      <div class="dash-header"><h1>Maintenance Requests</h1><p>Track and raise property maintenance issues</p></div>
      <!-- NEW REQUEST FORM -->
      <div class="chart-card" style="margin-bottom:2rem">
        <h3 style="margin-bottom:1.5rem">➕ Raise New Request</h3>
        <div class="grid-2">
          <div class="form-group"><label class="form-label">Issue Category *</label>
            <select>
              <option>Select category</option>
              <option>Plumbing</option><option>Electrical</option><option>AC / HVAC</option>
              <option>Carpentry</option><option>Painting</option><option>Pest Control</option>
              <option>Lift / Elevator</option><option>Security</option><option>Other</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">Priority *</label>
            <select><option>Low</option><option>Medium</option><option selected>High</option><option>Emergency</option></select>
          </div>
          <div class="form-group"><label class="form-label">Location in Unit</label>
            <input type="text" placeholder="e.g. Master bedroom, Kitchen...">
          </div>
          <div class="form-group"><label class="form-label">Preferred Time Slot</label>
            <select><option>Morning (9am–12pm)</option><option>Afternoon (12–4pm)</option><option>Evening (4–7pm)</option></select>
          </div>
        </div>
        <div class="form-group"><label class="form-label">Describe the Issue *</label><textarea placeholder="Describe the problem in detail..."></textarea></div>
        <div style="border:2px dashed var(--border);border-radius:var(--radius);padding:1.5rem;text-align:center;margin-bottom:1rem;cursor:pointer" onclick="showToast('Camera capture isn\'t connected yet','📷')">
          <div style="font-size:1.8rem">📷</div><div style="font-weight:600;margin-top:6px;font-size:0.9rem">Upload Photos</div>
          <div style="font-size:0.78rem;color:var(--muted);margin-top:4px">Max 5 photos · JPG, PNG</div>
        </div>
        <button class="btn btn-primary" onclick="showToast('Maintenance requests aren\\'t connected to a backend yet','✅')">Submit Request</button>
      </div>
      <!-- REQUESTS LIST -->
      <div class="table-card">
        <div class="table-head"><h3>All Maintenance Requests</h3></div>
        <table><thead><tr><th>Ticket #</th><th>Issue</th><th>Category</th><th>Priority</th><th>Assigned To</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td colspan="7" style="text-align:center;padding:1.5rem;color:var(--muted)">No maintenance requests yet — this isn't connected to a backend yet</td></tr>
        </tbody></table>
      </div>
    </div>
  </div>
</div>

<!-- ===== PROPERTY COMPARISON PAGE ===== -->
<div class="page" id="page-compare">
  <div style="padding-top:68px">
    <div class="container section">
      <div class="section-header"><div class="eyebrow">Compare</div><h2>Property Comparison</h2><p>This feature isn't connected to a backend yet</p></div>
      <div style="text-align:center;padding:3rem;color:var(--muted);border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--card-bg)">
        Side-by-side property comparison isn't connected to a backend yet. <span style="color:var(--secondary);cursor:pointer;text-decoration:underline" onclick="showPage('listings')">Browse listings</span> to find properties.
      </div>
      <div style="text-align:center;margin-top:2rem;display:flex;gap:10px;justify-content:center">
        <button class="btn btn-primary" onclick="showPage('listings')">← Back to Listings</button>
      </div>
    </div>
  </div>
</div>

<!-- ===== KYC PAGE ===== -->
<div class="page" id="page-kyc">
  <div style="padding-top:68px">
    <div class="container section" style="max-width:760px">
      <div class="section-header"><div class="eyebrow">Verification</div><h2>Complete Your KYC</h2><p>Verify your identity to build trust with agents and builders</p></div>
      <!-- STEPS PROGRESS -->
      <div style="display:flex;align-items:center;margin-bottom:3rem">
        <div style="text-align:center;flex:1"><div style="width:44px;height:44px;border-radius:50%;background:var(--secondary);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">✓</div><div style="font-size:0.8rem;font-weight:600;color:var(--secondary)">Account</div></div>
        <div style="flex:1;height:3px;background:linear-gradient(90deg,var(--secondary),rgba(37,99,235,0.2))"></div>
        <div style="text-align:center;flex:1"><div style="width:44px;height:44px;border-radius:50%;background:var(--secondary);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">2</div><div style="font-size:0.8rem;font-weight:600;color:var(--secondary)">Personal Info</div></div>
        <div style="flex:1;height:3px;background:rgba(37,99,235,0.15)"></div>
        <div style="text-align:center;flex:1"><div style="width:44px;height:44px;border-radius:50%;background:var(--border);color:var(--muted);font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">3</div><div style="font-size:0.8rem;font-weight:600;color:var(--muted)">Documents</div></div>
        <div style="flex:1;height:3px;background:rgba(37,99,235,0.1)"></div>
        <div style="text-align:center;flex:1"><div style="width:44px;height:44px;border-radius:50%;background:var(--border);color:var(--muted);font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">4</div><div style="font-size:0.8rem;font-weight:600;color:var(--muted)">Verification</div></div>
      </div>
      <!-- PERSONAL INFO FORM -->
      <div class="chart-card" style="margin-bottom:1.5rem">
        <h3 style="margin-bottom:1.5rem">👤 Personal Information</h3>
        <div class="grid-2">
          <div class="form-group"><label class="form-label">Full Name (as per Aadhaar)</label><input type="text" placeholder="Arjun Mehta"></div>
          <div class="form-group"><label class="form-label">Date of Birth</label><input type="text" placeholder="DD/MM/YYYY"></div>
          <div class="form-group"><label class="form-label">PAN Number</label><input type="text" placeholder="ABCDE1234F" style="text-transform:uppercase"></div>
          <div class="form-group"><label class="form-label">Aadhaar Number</label><input type="text" placeholder="XXXX XXXX XXXX"></div>
          <div class="form-group"><label class="form-label">Occupation</label><select><option>Salaried</option><option>Self-Employed</option><option>Business</option><option>Retired</option></select></div>
          <div class="form-group"><label class="form-label">Annual Income (₹)</label><select><option>Below ₹5L</option><option>₹5L–₹10L</option><option>₹10L–₹25L</option><option>₹25L–₹50L</option><option>Above ₹50L</option></select></div>
        </div>
      </div>
      <!-- DOCUMENT UPLOAD -->
      <div class="chart-card" style="margin-bottom:1.5rem">
        <h3 style="margin-bottom:1.5rem">📄 Document Upload</h3>
        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="border:1.5px solid var(--border);border-radius:var(--radius);padding:1.2rem;display:flex;align-items:center;justify-content:space-between;gap:1rem">
            <div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;background:rgba(37,99,235,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem">🪪</div><div><div style="font-weight:600;font-size:0.9rem">Aadhaar Card *</div><div style="font-size:0.78rem;color:var(--muted)">Front & back · JPG, PNG, PDF · Max 2MB</div></div></div>
            <button class="btn btn-ghost btn-sm" onclick="showToast('File upload isn\'t connected yet','📎')">Upload</button>
          </div>
          <div style="border:1.5px solid var(--border);border-radius:var(--radius);padding:1.2rem;display:flex;align-items:center;justify-content:space-between;gap:1rem">
            <div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;background:rgba(245,158,11,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem">🪪</div><div><div style="font-weight:600;font-size:0.9rem">PAN Card *</div><div style="font-size:0.78rem;color:var(--muted)">Clear scan required · JPG, PNG, PDF</div></div></div>
            <button class="btn btn-ghost btn-sm" onclick="showToast('File upload isn\'t connected yet','📎')">Upload</button>
          </div>
          <div style="border:1.5px solid var(--border);border-radius:var(--radius);padding:1.2rem;display:flex;align-items:center;justify-content:space-between;gap:1rem">
            <div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;background:rgba(16,185,129,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem">🏦</div><div><div style="font-weight:600;font-size:0.9rem">Bank Statement (last 3 months)</div><div style="font-size:0.78rem;color:var(--muted)">For income verification</div></div></div>
            <button class="btn btn-ghost btn-sm" onclick="showToast('File upload isn\'t connected yet','📎')">Upload</button>
          </div>
          <div style="border:1.5px solid var(--border);border-radius:var(--radius);padding:1.2rem;display:flex;align-items:center;justify-content:space-between;gap:1rem">
            <div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;background:rgba(124,58,237,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem">📸</div><div><div style="font-weight:600;font-size:0.9rem">Selfie / Live Photo</div><div style="font-size:0.78rem;color:var(--muted)">Face matching with Aadhaar photo</div></div></div>
            <button class="btn btn-ghost btn-sm" onclick="showToast('Camera capture isn\'t connected yet','📷')">Take Photo</button>
          </div>
        </div>
      </div>
      <!-- VERIFICATION STATUS -->
      <div class="chart-card" style="margin-bottom:1.5rem">
        <h3 style="margin-bottom:1rem">🔍 Verification Status</h3>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:rgba(16,185,129,0.06);border-radius:var(--radius)"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:1rem">✅</span><span style="font-size:0.875rem;font-weight:500">Email verified</span></div><span class="tag tag-green">Verified</span></div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:rgba(16,185,129,0.06);border-radius:var(--radius)"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:1rem">✅</span><span style="font-size:0.875rem;font-weight:500">Phone OTP verified</span></div><span class="tag tag-green">Verified</span></div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:rgba(245,158,11,0.06);border-radius:var(--radius)"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:1rem">⏳</span><span style="font-size:0.875rem;font-weight:500">Aadhaar verification</span></div><span class="tag tag-amber">Pending upload</span></div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:rgba(245,158,11,0.06);border-radius:var(--radius)"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:1rem">⏳</span><span style="font-size:0.875rem;font-weight:500">PAN verification</span></div><span class="tag tag-amber">Pending upload</span></div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:rgba(239,68,68,0.04);border-radius:var(--radius)"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:1rem">❌</span><span style="font-size:0.875rem;font-weight:500">Face / Liveness check</span></div><span class="tag tag-red">Not started</span></div>
        </div>
      </div>
      <button class="btn btn-primary btn-lg" style="width:100%" onclick="showToast('KYC verification isn\'t connected to a backend yet','🚧')">Submit for Verification →</button>
    </div>
  </div>
</div>

<!-- ===== SUPPORT TICKETS PAGE ===== -->
<div class="page" id="page-support">
  <div style="padding-top:68px">
    <div class="container section">
      <div class="section-header"><div class="eyebrow">Help & Support</div><h2>Support Center</h2><p>This feature isn't connected to a backend yet</p></div>
      <div class="grid-3" style="margin-bottom:3rem">
        <div class="chart-card" style="text-align:center;cursor:pointer" onclick="showToast('Live chat isn\'t connected to a backend yet','💬')"><div style="font-size:2.5rem;margin-bottom:12px">💬</div><h3 style="font-size:1.1rem;margin-bottom:6px">Live Chat</h3><p style="color:var(--muted);font-size:0.85rem">Not connected yet</p></div>
        <div class="chart-card" style="text-align:center;cursor:pointer" onclick="showToast('Phone support isn\'t connected to a backend yet','📞')"><div style="font-size:2.5rem;margin-bottom:12px">📞</div><h3 style="font-size:1.1rem;margin-bottom:6px">Call Support</h3><p style="color:var(--muted);font-size:0.85rem">Not connected yet</p></div>
        <div class="chart-card" style="text-align:center;cursor:pointer" onclick="showToast('Email support isn\'t connected to a backend yet','📧')"><div style="font-size:2.5rem;margin-bottom:12px">📧</div><h3 style="font-size:1.1rem;margin-bottom:6px">Email Us</h3><p style="color:var(--muted);font-size:0.85rem">Not connected yet</p></div>
      </div>
      <!-- RAISE TICKET -->
      <div class="chart-card" style="margin-bottom:2rem;max-width:700px;margin-left:auto;margin-right:auto">
        <h3 style="margin-bottom:1.5rem">🎫 Raise Support Ticket</h3>
        <div class="form-group"><label class="form-label">Issue Type *</label>
          <select><option>Select issue type</option><option>Property Listing Issue</option><option>Payment Problem</option><option>Agent Complaint</option><option>KYC Related</option><option>Account Access</option><option>Refund Request</option><option>Other</option></select>
        </div>
        <div class="form-group"><label class="form-label">Subject *</label><input type="text" placeholder="Brief description of your issue"></div>
        <div class="form-group"><label class="form-label">Description *</label><textarea placeholder="Provide as much detail as possible..." style="min-height:120px"></textarea></div>
        <div class="form-group"><label class="form-label">Priority</label>
          <div style="display:flex;gap:8px">
            <button class="btn btn-ghost btn-sm" onclick="setPriority(this,'Low')" id="pri-Low">Low</button>
            <button class="btn btn-primary btn-sm" onclick="setPriority(this,'Medium')" id="pri-Medium">Medium</button>
            <button class="btn btn-ghost btn-sm" onclick="setPriority(this,'High')" id="pri-High">High</button>
          </div>
        </div>
        <button class="btn btn-primary" onclick="showToast('Support tickets aren\'t connected to a backend yet','🎫')">Submit Ticket</button>
      </div>
      <!-- EXISTING TICKETS -->
      <div class="table-card" style="max-width:900px;margin:0 auto">
        <div class="table-head"><h3>My Support Tickets</h3></div>
        <table><thead><tr><th>Ticket #</th><th>Subject</th><th>Category</th><th>Priority</th><th>Status</th><th>Last Update</th></tr></thead>
        <tbody>
          <tr><td colspan="6" style="text-align:center;padding:1.5rem;color:var(--muted)">No support tickets yet — this isn't connected to a backend yet</td></tr>
        </tbody></table>
      </div>
    </div>
  </div>
</div>

<!-- ===== AI INSIGHTS PAGE ===== -->
<div class="page" id="page-aiinsights">
  <div style="padding-top:68px">
    <div class="container section">
      <div class="section-header"><div class="eyebrow">Powered by AI</div><h2>AI Market Insights</h2><p>Real-time intelligence to make smarter property decisions</p></div>
      <!-- AI PRICE PREDICTION WIDGET -->
      <div style="background:linear-gradient(135deg,#0F172A,#1e3a5f);border-radius:var(--radius-xl);padding:2.5rem;margin-bottom:2rem;color:#fff">
        <div class="grid-2" style="align-items:center;gap:3rem">
          <div>
            <div class="tag" style="background:rgba(245,158,11,0.15);color:#F59E0B;margin-bottom:1rem">🤖 AI Price Prediction Engine</div>
            <h2 style="color:#fff;margin-bottom:0.8rem;font-size:1.8rem">Get AI Valuation for Any Property</h2>
            <p style="color:rgba(255,255,255,0.6);margin-bottom:1.5rem;line-height:1.7">This AI valuation tool is planned but not yet connected to a real pricing model.</p>
            <div class="form-group"><label class="form-label" style="color:rgba(255,255,255,0.7)">Property Address</label><input class="search-input" type="text" placeholder="Enter locality, city..." style="width:100%"></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
              <select class="search-input"><option>Property Type</option><option>Apartment</option><option>Villa</option><option>Plot</option></select>
              <select class="search-input"><option>BHK</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4+ BHK</option></select>
              <input class="search-input" type="number" placeholder="Area (sq ft)">
              <select class="search-input"><option>Floor</option><option>Ground</option><option>1-5</option><option>6-15</option><option>16+</option></select>
            </div>
            <button class="btn btn-accent btn-lg" style="margin-top:1rem;width:100%" onclick="runAIPrediction()">🧠 Get AI Valuation</button>
          </div>
          <div id="aiPredictionResult">
            <div style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-lg);padding:1.8rem;text-align:center">
              <div style="font-size:3rem;margin-bottom:12px">🧠</div>
              <div style="color:rgba(255,255,255,0.5);font-size:0.9rem">Enter property details and click<br>"Get AI Valuation" to see prediction</div>
            </div>
          </div>
        </div>
      </div>
      <!-- MARKET INSIGHTS -->
      <div class="grid-2" style="margin-bottom:2rem">
        <div class="chart-card">
          <h3>📈 City-wise Price Trends <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3>
          <div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div>
        </div>
        <div class="chart-card">
          <h3>🔥 Hot Localities <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Not tracked yet</span></h3>
          <div style="margin-top:1rem;display:flex;flex-direction:column;gap:10px" id="hotLocalities"></div>
        </div>
      </div>
      <!-- AI RECO -->
      <div class="chart-card" style="margin-bottom:2rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
          <h3>🎯 AI Recommended for You</h3>
          <div style="display:flex;align-items:center;gap:6px"><div class="ai-indicator"></div><span style="font-size:0.78rem;color:var(--muted)">Personalised</span></div>
        </div>
        <div class="grid-3" id="aiRecoGrid"></div>
      </div>
      <!-- INVESTMENT HOTSPOTS MAP -->
      <div class="chart-card">
        <h3>🗺 Investment Hotspot Map</h3>
        <div class="map-box" style="margin-top:1rem;height:300px">
          <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(37,99,235,0.03) 0,rgba(37,99,235,0.03) 1px,transparent 0,transparent 40px),repeating-linear-gradient(90deg,rgba(37,99,235,0.03) 0,rgba(37,99,235,0.03) 1px,transparent 0,transparent 40px)"></div>
          <div class="map-pin" style="left:28%;top:42%;background:#10B981;width:24px;height:24px"><div class="map-pin-label">Whitefield ↑14%</div></div>
          <div class="map-pin" style="left:48%;top:30%;background:#F59E0B;width:28px;height:28px"><div class="map-pin-label">Devanahalli ↑22%</div></div>
          <div class="map-pin" style="left:65%;top:55%;background:#10B981;width:20px;height:20px"><div class="map-pin-label">Sarjapur ↑11%</div></div>
          <div class="map-pin" style="left:35%;top:65%;background:#2563EB;width:22px;height:22px"><div class="map-pin-label">Electronic City ↑9%</div></div>
          <div class="map-pin" style="left:72%;top:38%;background:#EF4444;width:18px;height:18px"><div class="map-pin-label">Marathahalli ↑6%</div></div>
          <div style="position:absolute;bottom:1rem;right:1rem;background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-size:0.72rem">
            <div style="font-weight:600;margin-bottom:6px">Annual Appreciation</div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><div style="width:10px;height:10px;border-radius:50%;background:#F59E0B"></div> 20%+</div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><div style="width:10px;height:10px;border-radius:50%;background:#10B981"></div> 10–20%</div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><div style="width:10px;height:10px;border-radius:50%;background:#2563EB"></div> 5–10%</div>
            <div style="display:flex;align-items:center;gap:6px"><div style="width:10px;height:10px;border-radius:50%;background:#EF4444"></div> Below 5%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== RENTAL MANAGEMENT PAGE (OWNER) ===== -->
<div class="page" id="page-rental">
  <div class="dash-layout">
    <div class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">Rental</div>
        <div class="sidebar-item active"><span class="icon">🏘</span> Overview</div>
        <div class="sidebar-item" onclick="showPage('rental')"><span class="icon">👥</span> Tenants</div>
        <div class="sidebar-item" onclick="showRentalPanel('leases')"><span class="icon">📄</span> Leases</div>
        <div class="sidebar-item" onclick="showRentalPanel('rent')"><span class="icon">💰</span> Rent Collection</div>
        <div class="sidebar-item" onclick="showPage('maintenance')"><span class="icon">🔧</span> Maintenance</div>
        <div class="sidebar-item" onclick="showRentalPanel('expenses')"><span class="icon">🧾</span> Expenses</div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Reports</div>
        <div class="sidebar-item" onclick="showRentalPanel('analytics')"><span class="icon">📈</span> Analytics</div>
        <div class="sidebar-item" onclick="showPage('builder')"><span class="icon">← </span> Back</div>
      </div>
    </div>
    <div class="dash-content">
      <div class="dash-header"><h1>Rental Management</h1><p>Rental management isn't connected to a backend yet</p></div>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-icon stat-icon-green">💰</div><div class="value">—</div><div class="label">Monthly Rent Income</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-blue">👥</div><div class="value">—</div><div class="label">Active Tenants</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-amber">⏳</div><div class="value">—</div><div class="label">Rent Overdue</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
        <div class="stat-card"><div class="stat-icon stat-icon-purple">🔧</div><div class="value">—</div><div class="label">Open Maintenance</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      </div>
      <!-- TENANT TABLE -->
      <div class="table-card" style="margin-bottom:2rem">
        <div class="table-head"><h3>👥 Tenants & Leases</h3><button class="btn btn-primary btn-sm" onclick="showToast('Tenant management isn\\'t connected to a backend yet','👤')">+ Add Tenant</button></div>
        <table><thead><tr><th>Tenant</th><th>Property</th><th>Monthly Rent</th><th>Lease Period</th><th>Last Payment</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No tenants yet — tenant management isn't connected to a backend yet</td></tr>
        </tbody></table>
      </div>
      <!-- RENT CHARTS -->
      <div class="grid-2">
        <div class="chart-card"><h3>Monthly Rent Collection <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
        <div class="chart-card"><h3>Expense Breakdown <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
      </div>
    </div>
  </div>
</div>

<!-- ===== NEW PROJECTS PAGE ===== -->
<div class="page" id="page-projects">
  <div style="padding-top:68px">
    <div class="container section">
      <div class="section-header"><div class="eyebrow">New Launches</div><h2>Premium Under-Construction Projects</h2><p>This feature isn't connected to a backend yet</p></div>
      <!-- FILTER BAR -->
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:2rem;align-items:center">
        <select style="width:auto"><option>All Cities</option><option>Mumbai</option><option>Bangalore</option><option>Hyderabad</option></select>
        <select style="width:auto"><option>Any Budget</option><option>Under ₹1Cr</option><option>₹1–3Cr</option><option>₹3Cr+</option></select>
        <select style="width:auto"><option>Any Status</option><option>New Launch</option><option>Under Construction</option><option>Ready Soon</option></select>
        <div style="margin-left:auto;display:flex;gap:8px"><button class="btn btn-ghost btn-sm">Sort: Newest</button></div>
      </div>
      <div class="grid-3" id="projectsGrid"></div>
    </div>
  </div>
</div>

<style>
/* Additional page styles */
.project-card{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;transition:all var(--transition);cursor:pointer}
.project-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.project-img{height:220px;position:relative;overflow:hidden;display:flex;align-items:flex-end}
.project-badge-rera{position:absolute;top:12px;left:12px;background:rgba(16,185,129,0.9);color:#fff;padding:4px 10px;border-radius:6px;font-size:0.72rem;font-weight:700;backdrop-filter:blur(8px)}
.project-body{padding:1.4rem}
.project-developer{font-size:0.78rem;color:var(--muted);margin-bottom:4px;display:flex;align-items:center;gap:6px}
.project-name{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.05rem;margin-bottom:4px}
.project-price-range{color:var(--secondary);font-weight:700;font-size:0.95rem;margin-bottom:10px}
.project-meta{display:flex;gap:12px;font-size:0.78rem;color:var(--muted);padding-top:12px;border-top:1px solid var(--border);margin-top:10px}
.ai-heat-bar{height:4px;border-radius:2px;background:linear-gradient(90deg,var(--secondary),var(--accent));margin-top:6px}
</style>

<script>
// ═══════════════════════════════════════════════
//  EXTENDED DATA & INIT
// ═══════════════════════════════════════════════
// "New Projects" isn't backed by real data — builder projects are just
// regular properties in our schema. Left empty rather than showing
// invented project names and fabricated RERA registration numbers.
const projects = [];

// Locality growth/trend data isn't tracked anywhere in our system.
// Left empty rather than showing invented growth percentages.
const hotLocalities = [];

function renderProjectCard(p){
  const statusMap={'Under Construction':'tag-amber','New Launch':'tag-blue','Ready Soon':'tag-green'};
  return `<div class="project-card" onclick="showPage('detail')">
    <div class="project-img" style="background:${p.grad}">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3.5rem;color:rgba(255,255,255,0.2)">${p.img}</div>
      <div class="project-badge-rera">✓ RERA: ${p.rera}</div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 14px;background:linear-gradient(0deg,rgba(0,0,0,0.75),transparent);display:flex;justify-content:space-between;align-items:flex-end">
        <span class="${statusMap[p.status]||'tag-blue'} tag" style="font-size:0.72rem">${p.status}</span>
        <span style="color:rgba(255,255,255,0.8);font-size:0.75rem">🏠 ${p.units} units</span>
      </div>
    </div>
    <div class="project-body">
      <div class="project-developer">🏗 ${p.dev} <span class="tag tag-green" style="font-size:0.65rem;padding:2px 6px">Verified</span></div>
      <div class="project-name">${p.name}</div>
      <div class="project-price-range">${p.price}</div>
      <div style="font-size:0.8rem;color:var(--muted)">📍 ${p.loc}</div>
      <div class="project-meta">
        <span>📅 ${p.possession}</span>
        <span style="margin-left:auto"><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();showToast('Brochure delivery isn\'t connected to a backend yet','📧')">Get Brochure</button></span>
      </div>
    </div>
  </div>`;
}

// The property comparison feature isn't connected to a backend, so the
// hardcoded comparison data and renderer that used to live here were
// removed in favor of an honest "not connected" message on the Compare
// page itself.

// ═══════════════════════════════════════════════
//  AI PREDICTION
// ═══════════════════════════════════════════════
async function runAIPrediction(){
  const result = document.getElementById('aiPredictionResult');
  result.innerHTML = `<div style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-lg);padding:1.8rem;text-align:center"><div style="font-size:2rem;margin-bottom:8px">🚧</div><div style="color:rgba(255,255,255,0.6)">AI price prediction isn't connected to a real model yet — this feature is still in development.</div></div>`;
}

function setPriority(el,p){['Low','Medium','High'].forEach(t=>{const b=document.getElementById('pri-'+t);if(b){b.className='btn btn-sm '+(t===p?'btn-primary':'btn-ghost');}});}

// ═══════════════════════════════════════════════
//  EXTENDED CHARTS
// ═══════════════════════════════════════════════
function initTenantChart(){
  destroyChart('tenantRent');
  const ctx=document.getElementById('tenantRentChart');if(!ctx)return;
  chartInstances['tenantRent']=new Chart(ctx,{type:'bar',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],datasets:[{data:[55000,55000,55000,55000,55000,55000,0],backgroundColor:['#10B981','#10B981','#10B981','#10B981','#10B981','#10B981','#EF4444'],borderRadius:6}]},options:{...chartDefaults,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc(),callback:v=>'₹'+(v/1000)+'K'}}}}});
}

function initRentalCharts(){
  destroyChart('rentCollection');
  const rc=document.getElementById('rentCollectionChart');if(rc)chartInstances['rentCollection']=new Chart(rc,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Collected',data:[191000,210000,210000,210000,210000,210000],borderColor:'#10B981',backgroundColor:'rgba(16,185,129,0.1)',fill:true,tension:0.4,pointRadius:3}]},options:{...chartDefaults,scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc(),callback:v=>'₹'+(v/1000)+'K'}}}}});
  destroyChart('expense');
  const ec=document.getElementById('expenseChart');if(ec)chartInstances['expense']=new Chart(ec,{type:'doughnut',data:{labels:['Maintenance','Property Tax','Insurance','Management Fee','Other'],datasets:[{data:[28,22,18,20,12],backgroundColor:['#EF4444','#F59E0B','#2563EB','#7c3aed','#94A3B8'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{position:'bottom',labels:{color:tc(),boxWidth:12,padding:12}}}}});
}

function initCityTrendsChart(){
  destroyChart('cityTrends');
  const ctx=document.getElementById('cityTrendsChart');if(!ctx)return;
  chartInstances['cityTrends']=new Chart(ctx,{type:'bar',data:{labels:['Mumbai','Delhi','Bangalore','Hyderabad','Pune','Chennai'],datasets:[{label:'2024',data:[12,9,14,18,11,8],backgroundColor:'rgba(37,99,235,0.5)',borderRadius:4},{label:'2025 YTD',data:[8,6,10,14,8,6],backgroundColor:'rgba(245,158,11,0.7)',borderRadius:4}]},options:{...chartDefaults,plugins:{legend:{display:true,labels:{color:tc()}}},scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc(),callback:v=>v+'%'}}}}});
}

// Extend showPage to handle new pages
const _origShowPage = showPage;
showPage = function(id){
  _origShowPage(id);
  if(id==='tenant')setTimeout(initTenantChart,100);
  if(id==='rental')setTimeout(initRentalCharts,100);
  if(id==='aiinsights'){setTimeout(()=>{initCityTrendsChart();renderHotLocalities();renderAIRecoGrid();},100);}
  if(id==='compare')setTimeout(renderCompareRows,100);
  if(id==='projects')renderProjectsGrid();
};

function renderHotLocalities(){
  const container=document.getElementById('hotLocalities');
  if(!container)return;
  if(hotLocalities.length===0){
    container.innerHTML=`<div style="text-align:center;padding:1rem;color:var(--muted);font-size:0.85rem">Locality trend data isn't tracked yet</div>`;
    return;
  }
  container.innerHTML=hotLocalities.map(l=>`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;border-radius:var(--radius);background:rgba(37,99,235,0.04)">
      <div><div style="font-weight:600;font-size:0.875rem">${l.name}</div><div style="font-size:0.75rem;color:var(--muted)">${l.reason}</div></div>
      <span class="tag ${l.color}" style="font-weight:700">${l.growth}</span>
    </div>`).join('');
}

function renderAIRecoGrid(){
  const container=document.getElementById('aiRecoGrid');
  if(!container)return;
  container.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:1.5rem;color:var(--muted);font-size:0.85rem">AI recommendations aren't connected to a backend yet</div>`;
}

function renderProjectsGrid(){
  const container=document.getElementById('projectsGrid');
  if(!container)return;
  if(projects.length===0){
    container.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">New project listings aren't connected to a backend yet</div>`;
    return;
  }
  container.innerHTML=projects.map(renderProjectCard).join('');
}

// ═══════════════════════════════════════════════
//  EXTEND NAV with new pages
// ═══════════════════════════════════════════════
// Add quick-access nav links to the footer and sidebar
const _existingNav = document.getElementById('navLinks');
if(_existingNav){
  const newLinks = [
    {id:'projects',label:'New Projects'},
    {id:'aiinsights',label:'AI Insights'},
    {id:'compare',label:'Compare'},
  ];
  // These are in the footer only
}

// Add extra nav items to second row (footer links)
document.querySelectorAll('.footer-col a').forEach(a=>{
  if(!a.getAttribute('onclick')){
    const text=a.textContent.trim();
    if(text==='New Projects') a.setAttribute('onclick','showPage(\'projects\')');
    if(text==='Careers') a.setAttribute('onclick','showToast(\'Careers page coming soon!\',\'💼\')');
    if(text==='Blog') a.setAttribute('onclick','showToast(\'Blog coming soon!\',\'📝\')');
    if(text==='Help Center') a.setAttribute('onclick','showPage(\'support\')');
    if(text==='Privacy Policy') a.setAttribute('onclick','showToast(\'Privacy policy\',\'🔒\')');
    if(text==='Terms of Service') a.setAttribute('onclick','showToast(\'Terms of service\',\'📋\')');
    if(text==='RERA Info') a.setAttribute('onclick','showToast(\'RERA information\',\'🏛\')');
  }
});

// Extra quick jump buttons for dashboards
document.querySelectorAll('.sidebar-item').forEach(item=>{
  const text=item.textContent.trim();
  if(text.includes('AI Insights')) item.setAttribute('onclick','showPage(\'aiinsights\')');
  if(text.includes('Compare Properties')) item.setAttribute('onclick','showPage(\'compare\')');
  if(text.includes('New Projects') || text.includes('Projects')) {
    if(!item.getAttribute('onclick')) item.setAttribute('onclick','showPage(\'projects\')');
  }
});

// Patch dashboard buttons to link to dashboards
document.addEventListener('DOMContentLoaded',()=>{
  // Add dashboard role-selector buttons to landing page stat section
  const heroCard = document.querySelector('.hero-card');
  if(heroCard){
    const dashSection=document.createElement('div');
    dashSection.style.cssText='margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.1)';
    dashSection.innerHTML=`<div style="font-size:0.75rem;color:rgba(255,255,255,0.4);margin-bottom:8px;text-align:center">Quick Access Dashboards</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <button class="btn btn-sm" style="background:rgba(37,99,235,0.2);color:#93c5fd;border:1px solid rgba(37,99,235,0.3);flex:1" onclick="showPage('buyer')">🏠 Buyer</button>
      <button class="btn btn-sm" style="background:rgba(124,58,237,0.2);color:#c4b5fd;border:1px solid rgba(124,58,237,0.3);flex:1" onclick="showPage('tenant')">🏢 Tenant</button>
      <button class="btn btn-sm" style="background:rgba(245,158,11,0.2);color:#fcd34d;border:1px solid rgba(245,158,11,0.3);flex:1" onclick="showPage('agent')">🤝 Agent</button>
      <button class="btn btn-sm" style="background:rgba(16,185,129,0.2);color:#6ee7b7;border:1px solid rgba(16,185,129,0.3);flex:1" onclick="showPage('builder')">🏗 Builder</button>
    </div>
    <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">
      <button class="btn btn-sm" style="background:rgba(239,68,68,0.2);color:#fca5a5;border:1px solid rgba(239,68,68,0.3);flex:1" onclick="showPage('admin')">⚡ Admin</button>
      <button class="btn btn-sm" style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.1);flex:1" onclick="showPage('aiinsights')">🧠 AI Insights</button>
      <button class="btn btn-sm" style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.1);flex:1" onclick="showPage('projects')">🏗 New Projects</button>
    </div>`;
    heroCard.appendChild(dashSection);
  }
});
</script>

<!-- ═══════════════════════════════════════════════
     BACKEND INTEGRATION
     Connects login/register, property search, and
     wishlist actions to the real EstateAI Pro API.
═══════════════════════════════════════════════ -->
<script>
(function () {
  const API_BASE = window.ESTATEAI_API_BASE || 'http://localhost:4000/api';

  // ---------------------------------------------------------------
  // Session helpers (token + user kept in sessionStorage so a
  // refresh doesn't sign the person out mid-session)
  // ---------------------------------------------------------------
  function getToken() { return sessionStorage.getItem('eai_token'); }
  function getUser() {
    try { return JSON.parse(sessionStorage.getItem('eai_user') || 'null'); }
    catch { return null; }
  }
  function setSession(token, user) {
    sessionStorage.setItem('eai_token', token);
    sessionStorage.setItem('eai_user', JSON.stringify(user));
  }
  function clearSession() {
    sessionStorage.removeItem('eai_token');
    sessionStorage.removeItem('eai_user');
  }

  async function api(path, { method = 'GET', body, auth = false } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth) {
      const token = getToken();
      if (token) headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(`${API_BASE}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const json = await res.json().catch(() => ({ success: false, error: 'Invalid server response' }));
    if (!res.ok || !json.success) {
      throw new Error(json.error || 'Something went wrong.');
    }
    return json.data;
  }

  // ---------------------------------------------------------------
  // Auth: login / register
  // ---------------------------------------------------------------
  window.handleLogin = async function () {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorEl = document.getElementById('loginError');
    const btn = document.getElementById('loginSubmitBtn');

    errorEl.style.display = 'none';
    if (!email || !password) {
      errorEl.textContent = 'Please enter both email and password.';
      errorEl.style.display = 'block';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Signing in...';
    try {
      const data = await api('/auth/login', { method: 'POST', body: { email, password } });
      setSession(data.token, data.user);
      closeModal('loginModal');
      applySessionToUI();
      const roleToPage = { buyer: 'buyer', tenant: 'tenant', agent: 'agent', builder: 'builder', admin: 'admin' };
      showPage(roleToPage[data.user.role] || 'buyer');
      showToast(`Welcome back, ${data.user.firstName}! 👋`, '✅');
    } catch (err) {
      errorEl.textContent = err.message;
      errorEl.style.display = 'block';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Sign In';
    }
  };

  window.handleRegister = async function () {
    const firstName = document.getElementById('regFirstName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;
    const agreedTerms = document.getElementById('regTerms').checked;
    const role = window.__selectedRole || 'buyer';
    const errorEl = document.getElementById('registerError');
    const btn = document.getElementById('registerSubmitBtn');

    errorEl.style.display = 'none';
    if (!firstName || !lastName || !email || !password) {
      errorEl.textContent = 'Please fill in all required fields.';
      errorEl.style.display = 'block';
      return;
    }
    if (!agreedTerms) {
      errorEl.textContent = 'Please agree to the Terms of Service and Privacy Policy.';
      errorEl.style.display = 'block';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Creating account...';
    try {
      const data = await api('/auth/register', {
        method: 'POST',
        body: { firstName, lastName, email, phone, password, role },
      });
      setSession(data.token, data.user);
      closeModal('registerModal');
      applySessionToUI();
      const roleToPage = { buyer: 'buyer', tenant: 'tenant', agent: 'agent', builder: 'builder', admin: 'admin' };
      showPage(roleToPage[data.user.role] || 'buyer');
      showToast('Account created! Welcome to EstateAI Pro 🎉', '🎉');
    } catch (err) {
      errorEl.textContent = err.message;
      errorEl.style.display = 'block';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Create Account →';
    }
  };

  window.handleLogout = function () {
    clearSession();
    applySessionToUI();
    showPage('landing');
    showToast('Signed out.', '👋');
  };

  // Reflect logged-in state in the navbar's auth buttons, if present.
  function applySessionToUI() {
    const user = getUser();
    const navAuthArea = document.getElementById('navAuthArea');
    if (!navAuthArea) return;
    if (user) {
      navAuthArea.innerHTML = `
        <span style="font-size:0.85rem;color:var(--muted);margin-right:8px">Hi, ${user.firstName}</span>
        <button class="btn btn-ghost btn-sm" onclick="handleLogout()">Sign Out</button>`;
    } else {
      navAuthArea.innerHTML = `
        <button class="btn btn-ghost btn-sm" onclick="showModal('loginModal')">Sign In</button>
        <button class="btn btn-primary btn-sm" onclick="showModal('registerModal')">Register</button>`;
    }
  }

  async function loadBuyerWishlistCount() {
    const el = document.getElementById('buyerWishlistCount');
    if (!el) return;
    if (!getToken()) { el.textContent = '—'; return; }
    try {
      const data = await api('/wishlist', { auth: true });
      el.textContent = data.properties.length;
    } catch {
      el.textContent = '—';
    }
  }

  async function loadAgentsDirectory() {
    const grid = document.getElementById('agentsGrid');
    if (!grid) return;
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Loading agents…</div>`;
    try {
      const data = await api('/agents');
      if (data.agents.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">No agents listed yet</div>`;
        return;
      }
      grid.innerHTML = data.agents.map(a => window.renderAgentCard({
        name: a.name,
        city: a.city || '—',
        spec: a.specialization || 'General',
        rating: a.rating != null ? a.rating.toFixed(1) : '—',
        deals: a.dealsClosed != null ? a.dealsClosed : '—',
        exp: a.experienceYears != null ? `${a.experienceYears}yr` : '—',
        initials: a.initials,
      })).join('');
    } catch (err) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:#EF4444">Couldn't load agents: ${err.message}</div>`;
    }
  }

  async function loadBuilderProperties() {
    const body = document.getElementById('builderPropertiesBody');
    const countEl = document.getElementById('builderListingsCount');
    if (!body) return;
    if (!getToken()) {
      body.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:1.5rem;color:var(--muted)">Sign in to view your listings</td></tr>`;
      return;
    }
    try {
      const data = await api('/properties/mine/listings', { auth: true });
      if (countEl) countEl.textContent = data.properties.filter(p => p.status === 'approved').length;
      if (data.properties.length === 0) {
        body.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:1.5rem;color:var(--muted)">No listings yet — add your first property to get started</td></tr>`;
        return;
      }
      const statusTag = { approved: 'tag-green', pending: 'tag-amber', rejected: 'tag-red', sold: 'tag-blue', rented: 'tag-blue' };
      const statusLabel = { approved: 'Active', pending: 'Pending Review', rejected: 'Rejected', sold: 'Sold', rented: 'Rented' };
      body.innerHTML = data.properties.map(p => `
        <tr>
          <td><div style="font-weight:600">${p.title}</div><div style="font-size:0.75rem;color:var(--muted)">${p.locality}, ${p.city}</div></td>
          <td>${p.bhk > 0 ? p.bhk + ' BHK ' : ''}${p.propertyType}</td>
          <td>${formatPrice(p)}</td>
          <td><span class="tag ${statusTag[p.status] || 'tag-blue'}">${statusLabel[p.status] || p.status}</span></td>
          <td><div style="display:flex;gap:6px">
            <button class="btn btn-ghost btn-sm" onclick="showToast('Editing isn\\'t wired up yet','✏️')">Edit</button>
          </div></td>
        </tr>`).join('');
    } catch (err) {
      body.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:1.5rem;color:#EF4444">Couldn't load your listings: ${err.message}</td></tr>`;
    }
  }

  // ---------------------------------------------------------------
  // Properties: fetch from the real API and render with the
  // existing renderPropCard() function, adapting field names.
  // ---------------------------------------------------------------
  function formatPrice(apiProp) {
    const { price, priceUnit } = apiProp;
    if (priceUnit === 'month') {
      if (price >= 1000) return `₹${Math.round(price / 1000)}K/mo`;
      return `₹${price}/mo`;
    }
    if (price >= 1e7) return `₹${(price / 1e7).toFixed(2)} Cr`;
    if (price >= 1e5) return `₹${(price / 1e5).toFixed(0)} L`;
    return `₹${price.toLocaleString('en-IN')}`;
  }

  function adaptProperty(apiProp) {
    return {
      id: apiProp.id,
      title: apiProp.title,
      loc: `${apiProp.locality}, ${apiProp.city}`,
      price: formatPrice(apiProp),
      sqft: apiProp.sqft ? apiProp.sqft.toLocaleString('en-IN') : '—',
      bhk: apiProp.bhk,
      baths: apiProp.bathrooms,
      type: apiProp.propertyType,
      badge: apiProp.badge || apiProp.propertyType,
      badgeClass: apiProp.listingType === 'rent' ? 'rent' : '',
      img: apiProp.imageEmoji || '🏠',
      wish: !!apiProp.isWishlisted,
      tag: apiProp.listingType,
    };
  }

  let currentFilters = { listingType: undefined, city: undefined, sort: 'newest' };

  async function loadFeaturedProperties() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    try {
      const token = getToken();
      const data = await api('/properties?limit=6&sort=newest', { auth: !!token });
      if (data.properties.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">No properties listed yet</div>`;
        return;
      }
      grid.innerHTML = data.properties.map(adaptProperty).map(renderPropCard).join('');
      attachWishlistHandlers(grid);
    } catch (err) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:#EF4444">Couldn't load properties: ${err.message}</div>`;
    }
  }

  async function loadWishlistGrid() {
    const grid = document.getElementById('wishlistGrid');
    if (!grid) return;
    if (!getToken()) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Sign in to see your wishlist</div>`;
      return;
    }
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Loading your wishlist…</div>`;
    try {
      const data = await api('/wishlist', { auth: true });
      if (data.properties.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Your wishlist is empty — browse listings and tap the heart to save properties</div>`;
        return;
      }
      grid.innerHTML = data.properties.map(adaptProperty).map(renderPropCard).join('');
      attachWishlistHandlers(grid);
    } catch (err) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:#EF4444">Couldn't load your wishlist: ${err.message}</div>`;
    }
  }

  async function loadListings() {
    const grid = document.getElementById('listingsGrid');
    if (!grid) return;
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">Loading properties...</div>`;
    try {
      const params = new URLSearchParams();
      if (currentFilters.listingType) params.set('listingType', currentFilters.listingType);
      if (currentFilters.city) params.set('city', currentFilters.city);
      if (currentFilters.sort) params.set('sort', currentFilters.sort);
      params.set('limit', '24');

      const token = getToken();
      const data = await api(`/properties?${params.toString()}`, { auth: !!token });
      const heading = document.getElementById('listingsCountHeading');
      if (heading) heading.textContent = `${data.pagination.total} Properties Found`;

      if (data.properties.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">No properties match your filters. Try widening your search.</div>`;
        return;
      }
      grid.innerHTML = data.properties.map(adaptProperty).map(renderPropCard).join('');
      attachWishlistHandlers(grid);
    } catch (err) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#EF4444">Couldn't load properties: ${err.message}</div>`;
      const heading = document.getElementById('listingsCountHeading');
      if (heading) heading.textContent = 'Couldn\'t load properties';
    }
  }

  // Wire the Buy/Rent filter buttons (already in the markup) to refetch
  const _origSetFilter = window.setFilter;
  window.setFilter = function (type) {
    _origSetFilter(type);
    currentFilters.listingType = type === 'Buy' ? 'buy' : type === 'Rent' ? 'rent' : undefined;
    loadListings();
  };

  // Wire the City <select> in the filter sidebar, and the sort <select>
  // in the listings toolbar, by position since they have no ids in the
  // original markup.
  function wireFilterControls() {
    const citySelect = document.getElementById('cityFilterSelect');
    if (citySelect && !citySelect.dataset.wired) {
      citySelect.dataset.wired = 'true';
      citySelect.addEventListener('change', () => {
        const val = citySelect.value;
        currentFilters.city = val === 'All Cities' ? undefined : val;
        loadListings();
      });
    }
    const sortSelect = document.getElementById('listingsSortSelect');
    if (sortSelect && !sortSelect.dataset.wired) {
      sortSelect.dataset.wired = 'true';
      const sortMap = { 'Relevance': 'newest', 'Price: Low to High': 'price_low', 'Price: High to Low': 'price_high', 'Newest First': 'newest' };
      sortSelect.addEventListener('change', () => {
        currentFilters.sort = sortMap[sortSelect.value] || 'newest';
        loadListings();
      });
    }
  }

  // ---------------------------------------------------------------
  // Wishlist: replace the demo's local-only heart toggle with a real
  // API call when the user is signed in.
  // ---------------------------------------------------------------
  function attachWishlistHandlers(container) {
    container.querySelectorAll('.prop-wish').forEach((heart) => {
      heart.onclick = async (event) => {
        event.stopPropagation();
        const card = heart.closest('.prop-card');
        const propId = card?.dataset?.propertyId;
        if (!getToken()) {
          showToast('Please sign in to save properties to your wishlist', '🔒');
          showModal('loginModal');
          return;
        }
        try {
          const data = await api(`/wishlist/${propId}/toggle`, { method: 'POST', auth: true });
          heart.classList.toggle('active', data.wishlisted);
          showToast(data.wishlisted ? 'Added to wishlist ❤️' : 'Removed from wishlist', '❤️');
        } catch (err) {
          showToast(`Couldn't update wishlist: ${err.message}`, '⚠️');
        }
      };
    });
  }

  // Tag each rendered card with its real property id so the wishlist
  // handler above can address the correct backend record (renderPropCard
  // doesn't add this itself).
  const _origRenderPropCard = window.renderPropCard;
  window.renderPropCard = function (p) {
    const html = _origRenderPropCard(p);
    return html.replace('class="prop-card"', `class="prop-card" data-property-id="${p.id}"`);
  };

  // ---------------------------------------------------------------
  // Platform stats: live counts shown on the homepage hero, the
  // About page, and the Admin Dashboard overview. Pulled from
  // /api/stats so these numbers always reflect the real database.
  // ---------------------------------------------------------------
  async function loadPlatformStats() {
    try {
      const token = getToken();
      const data = await api('/stats', { auth: !!token });

      const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };

      setText('statListings', data.listings);
      setText('statAgents', data.agents);
      setText('statCities', data.cities);
      setText('statListingsAbout', data.listings);
      setText('statAgentsAbout', data.agents);
      setText('statCitiesAbout', data.cities);
      setText('statListingsAdmin', data.listings);
      setText('statAgentsAdmin', data.agents);
      setText('statAgentsApprovalsPanel', data.agents);

      const modBadge = document.getElementById('pendingModerationBadge');
      if (modBadge) {
        if (typeof data.pendingModeration === 'number') {
          modBadge.textContent = data.pendingModeration;
          modBadge.style.display = data.pendingModeration > 0 ? 'inline-block' : 'none';
        } else {
          modBadge.style.display = 'none';
        }
      }
    } catch (err) {
      // Non-critical — leave the "—" placeholders in place rather than
      // showing an error on the homepage.
      console.warn('Could not load platform stats:', err.message);
    }
  }

  async function loadAdminCityChart() {
    const canvas = document.getElementById('adminCityChart');
    if (!canvas || typeof Chart === 'undefined') return;
    const token = getToken();
    if (!token) return;
    try {
      const data = await api('/stats/by-city', { auth: true });
      if (typeof destroyChart === 'function') destroyChart('adminCity');
      if (data.cities.length === 0) {
        return; // leave the canvas empty rather than drawing a fake chart
      }
      const palette = ['#2563EB', '#7c3aed', '#10B981', '#F59E0B', '#EF4444', '#06b6d4', '#94A3B8', '#EC4899', '#84CC16', '#0EA5E9'];
      chartInstances['adminCity'] = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: data.cities.map(c => c.city),
          datasets: [{
            data: data.cities.map(c => c.count),
            backgroundColor: data.cities.map((_, i) => palette[i % palette.length]),
            borderRadius: 6,
          }],
        },
        options: {
          ...chartDefaults,
          indexAxis: 'y',
          scales: {
            x: { grid: { display: false }, ticks: { color: tc(), precision: 0 } },
            y: { ticks: { color: tc() } },
          },
        },
      });
    } catch (err) {
      console.warn('Could not load city chart data:', err.message);
    }
  }

  async function loadOverviewModerationPreview() {
    const body = document.getElementById('overviewModerationBody');
    if (!body) return;
    const token = getToken();
    if (!token) {
      body.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:1.5rem;color:var(--muted)">Sign in as an admin to view pending listings</td></tr>`;
      return;
    }
    try {
      const res = await fetch(`${window.ESTATEAI_API_BASE || 'http://localhost:4000/api'}/properties/admin/pending`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      const pending = (json?.data?.properties || []).slice(0, 5);
      if (pending.length === 0) {
        body.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:1.5rem;color:var(--muted)">No listings pending moderation</td></tr>`;
        return;
      }
      body.innerHTML = pending.map(p => `
        <tr>
          <td><div style="font-weight:600">${p.title}</div><div style="font-size:0.75rem;color:var(--muted)">${p.locality}, ${p.city}</div></td>
          <td>${p.city}</td>
          <td style="font-size:0.82rem;color:var(--muted)">${new Date(p.createdAt).toLocaleDateString()}</td>
          <td><span class="tag tag-blue">${p.propertyType}</span></td>
          <td><button class="btn btn-ghost btn-sm" onclick="showAdminPanel('moderation')">Review →</button></td>
        </tr>`).join('');
    } catch (err) {
      body.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:1.5rem;color:#EF4444">Couldn't load pending listings</td></tr>`;
    }
  }

  // ---------------------------------------------------------------
  // Hook into showPage so the listings page loads live data each
  // time it's opened, and filter controls get wired once the sidebar
  // exists in the DOM.
  // ---------------------------------------------------------------
  const _origShowPageForApi = window.showPage;
  window.showPage = function (id) {
    _origShowPageForApi(id);
    if (id === 'listings') {
      wireFilterControls();
      loadListings();
    }
    if (id === 'admin') {
      loadPlatformStats();
      setTimeout(loadAdminCityChart, 200);
      loadOverviewModerationPreview();
    }
    if (id === 'buyer') {
      loadBuyerWishlistCount();
      loadWishlistGrid();
      const heading = document.getElementById('buyerWelcomeHeading');
      const user = getUser();
      if (heading) heading.textContent = user ? `Welcome back, ${user.firstName}! 👋` : 'Welcome! 👋';
    }
    if (id === 'agents') {
      loadAgentsDirectory();
    }
    if (id === 'builder') {
      loadBuilderProperties();
    }
  };

  // ---------------------------------------------------------------
  // On load: restore session UI state and fetch live platform stats
  // ---------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    applySessionToUI();
    loadPlatformStats();
    loadAgentsDirectory();
    loadFeaturedProperties();
  });
})();
</script>
</body>
</html>

<script>
// ═══════════════════════════════════════════════════════════════════════════
//  SUB-PANEL ROUTERS — Buyer, Agent, Builder, Tenant, Rental
//  Fix: every sidebar item now opens a real content panel instead of
//  firing a dead-end showToast().
//
//  Pattern identical to showAdminPanel():
//    1. Hide all sibling panels in the dashboard
//    2. Show the target panel
//    3. Update sidebar active state
//    4. Lazy-init any charts on first visit
// ═══════════════════════════════════════════════════════════════════════════

// ─── Generic sub-panel switcher factory ──────────────────────────────────────
function makePanelRouter(pageId, sidebarPrefix, panelPrefix, chartInitMap) {
  const done = {};
  return function(id) {
    // 1. Guard: only act when the parent page is visible
    const page = document.getElementById('page-' + pageId);
    if (!page || !page.classList.contains('active')) return;

    // 2. Swap panels
    page.querySelectorAll('[id^="' + panelPrefix + '"]').forEach(p => {
      p.style.display = 'none';
    });
    const target = document.getElementById(panelPrefix + id);
    if (target) target.style.display = 'block';

    // 3. Sidebar active state
    page.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('si-active'));
    const activeEl = document.getElementById(sidebarPrefix + id);
    if (activeEl) activeEl.classList.add('si-active');

    // 4. Lazy chart init
    if (!done[id] && chartInitMap && chartInitMap[id]) {
      done[id] = true;
      setTimeout(chartInitMap[id], 80);
    }
  };
}

// ─── Inject minimal CSS for sub-panels ───────────────────────────────────────
(function() {
  const style = document.createElement('style');
  style.textContent = `
    .sub-panel { display:none }
    .sub-panel.sp-default { display:block }
    .info-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; margin-bottom:1.5rem }
    .info-card { background:var(--card-bg); border:1px solid var(--border); border-radius:var(--radius); padding:1.2rem }
    .info-card .ik { font-size:0.75rem; color:var(--muted); text-transform:uppercase; letter-spacing:.06em; margin-bottom:4px }
    .info-card .iv { font-weight:600; font-size:0.95rem }
    .empty-state { text-align:center; padding:3rem 2rem; color:var(--muted) }
    .empty-state .es-icon { font-size:3rem; margin-bottom:12px }
    .empty-state h3 { font-family:'Poppins',sans-serif; font-size:1.1rem; color:var(--primary); margin-bottom:6px }
  `;
  document.head.appendChild(style);
})();

// ═══════════════════════════════════════════════════════════════════════════
//  BUYER DASHBOARD sub-panels
// ═══════════════════════════════════════════════════════════════════════════

// Wrap the existing buyer dash-content so panel switching works
document.addEventListener('DOMContentLoaded', () => {
  patchBuyerDashboard();
  patchAgentDashboard();
  patchBuilderDashboard();
  patchTenantDashboard();
  patchRentalDashboard();
});

function patchBuyerDashboard() {
  const content = document.querySelector('#page-buyer .dash-content');
  if (!content || content.dataset.patched) return;
  content.dataset.patched = '1';

  // Wrap existing content as the "home" panel
  const existingHTML = content.innerHTML;
  content.innerHTML = `
    <div id="bp-home"       class="sub-panel sp-default">${existingHTML}</div>
    <div id="bp-inquiries"  class="sub-panel">${buildInquiriesPanel()}</div>
    <div id="bp-visits"     class="sub-panel">${buildVisitsPanel()}</div>
    <div id="bp-documents"  class="sub-panel">${buildDocumentsPanel()}</div>
    <div id="bp-preferences" class="sub-panel">${buildPreferencesPanel()}</div>
  `;
}

function showBuyerPanel(id) {
  const page = document.getElementById('page-buyer');
  if (!page || !page.classList.contains('active')) return;
  page.querySelectorAll('[id^="bp-"]').forEach(p => p.style.display = 'none');
  const t = document.getElementById('bp-' + id);
  if (t) t.style.display = 'block';
}

function buildInquiriesPanel() {
  return `
    <div class="dash-header"><h1>My Inquiries</h1><p>Inquiries you've sent across shortlisted properties</p></div>
    <div class="table-card">
      <div class="table-head"><h3>📩 All Inquiries</h3>
        <select style="padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:.82rem;outline:none;background:var(--card-bg);color:var(--primary)"><option>All Status</option><option>Replied</option><option>Pending</option></select>
      </div>
      <table><thead><tr><th>Property</th><th>Price</th><th>Agent</th><th>Sent</th><th>Status</th><th>Action</th></tr></thead>
      <tbody><tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--muted)">No inquiries yet — inquiry tracking isn't connected to a backend yet</td></tr></tbody></table>
    </div>`;
}

function buildVisitsPanel() {
  return `
    <div class="dash-header"><h1>Site Visits</h1><p>Upcoming and past property visits</p></div>
    <div class="grid-2" style="margin-bottom:2rem">
      <div class="table-card">
        <div class="table-head"><h3>📅 Upcoming Visits</h3>
          <button class="btn btn-primary btn-sm" onclick="showToast('Visit scheduling isn\\'t connected to a backend yet','📅')">+ Schedule</button>
        </div>
        <table><thead><tr><th>Property</th><th>Date & Time</th><th>Agent</th><th>Status</th></tr></thead>
        <tbody><tr><td colspan="4" style="text-align:center;padding:1.5rem;color:var(--muted)">No upcoming visits</td></tr></tbody></table>
      </div>
      <div class="table-card">
        <div class="table-head"><h3>✅ Past Visits</h3></div>
        <table><thead><tr><th>Property</th><th>Date</th><th>Agent</th><th>Notes</th></tr></thead>
        <tbody><tr><td colspan="4" style="text-align:center;padding:1.5rem;color:var(--muted)">No past visits</td></tr></tbody></table>
      </div>
    </div>`;
}

function buildDocumentsPanel() {
  return `
    <div class="dash-header"><h1>My Documents</h1><p>All uploaded and received documents</p></div>
    <div class="table-card">
      <div class="table-head"><h3>📂 Documents</h3>
        <button class="btn btn-primary btn-sm" onclick="showToast('Document upload isn\\'t connected to a backend yet','📎')">+ Upload</button>
      </div>
      <table><thead><tr><th>Document</th><th>Type</th><th>Size</th><th>Uploaded</th><th>Status</th><th>Action</th></tr></thead>
      <tbody><tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--muted)">No documents uploaded yet</td></tr></tbody></table>
    </div>`;
}

function buildPreferencesPanel() {
  return `
    <div class="dash-header"><h1>Preferences</h1><p>Customise your property search and notification settings</p></div>
    <div class="grid-2">
      <div class="chart-card">
        <h3 style="margin-bottom:1.2rem">🔍 Search Preferences</h3>
        <div class="form-group"><label class="form-label">Preferred Cities</label>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">
            <span class="tag tag-blue" style="cursor:pointer">Bangalore ✕</span>
            <span class="tag" style="background:var(--border);cursor:pointer">+ Add City</span>
          </div></div>
        <div class="form-group"><label class="form-label">Property Type</label>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">
            <span class="tag" style="background:var(--border);cursor:pointer">+ Add Type</span>
          </div></div>
        <div class="form-group"><label class="form-label">Budget Range</label>
          <div style="display:flex;gap:8px"><input type="number" placeholder="Min ₹" style="width:50%"><input type="number" placeholder="Max ₹" style="width:50%"></div></div>
        <div class="form-group"><label class="form-label">BHK</label>
          <select><option>2 BHK</option><option>3 BHK</option><option>4 BHK</option></select></div>
        <button class="btn btn-primary" onclick="showToast('Preferences aren\'t connected to a backend yet','⚙️')">Save Preferences</button>
      </div>
      <div class="chart-card">
        <h3 style="margin-bottom:1.2rem">🔔 Notification Settings <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Not connected</span></h3>
        <div class="setting-row"><div class="setting-label">New matching listings</div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
        <div class="setting-row"><div class="setting-label">Price drops</div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
        <div class="setting-row"><div class="setting-label">Agent replies</div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
        <div class="setting-row"><div class="setting-label">Site visit reminders</div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
        <div class="setting-row"><div class="setting-label">WhatsApp alerts</div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
        <div class="setting-row"><div class="setting-label">Email digest (weekly)</div><div class="toggle" onclick="this.classList.toggle('on')"></div></div>
        <button class="btn btn-primary" style="margin-top:1rem" onclick="showToast('Notification settings aren\'t connected to a backend yet','🔔')">Save Settings</button>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════
//  AGENT DASHBOARD sub-panels
// ═══════════════════════════════════════════════════════════════════════════

function patchAgentDashboard() {
  const content = document.querySelector('#page-agent .dash-content');
  if (!content || content.dataset.patched) return;
  content.dataset.patched = '1';
  const existingHTML = content.innerHTML;
  content.innerHTML = `
    <div id="agp-home"        class="sub-panel sp-default">${existingHTML}</div>
    <div id="agp-leads"       class="sub-panel">${buildAgentLeadsPanel()}</div>
    <div id="agp-inquiries"   class="sub-panel">${buildAgentInquiriesPanel()}</div>
    <div id="agp-visits"      class="sub-panel">${buildAgentVisitsPanel()}</div>
    <div id="agp-featured"    class="sub-panel">${buildAgentFeaturedPanel()}</div>
    <div id="agp-commissions" class="sub-panel">${buildAgentCommissionsPanel()}</div>
    <div id="agp-analytics"   class="sub-panel">${buildAgentAnalyticsPanel()}</div>
  `;
}

function showAgentPanel(id) {
  const page = document.getElementById('page-agent');
  if (!page || !page.classList.contains('active')) return;
  page.querySelectorAll('[id^="agp-"]').forEach(p => p.style.display = 'none');
  const t = document.getElementById('agp-' + id);
  if (t) t.style.display = 'block';
}

function buildAgentLeadsPanel() {
  return `
    <div class="dash-header"><h1>Lead Management</h1><p>Full CRM for your active leads</p></div>
    <div class="admin-filter-bar" style="margin-bottom:1.2rem">
      <input type="text" placeholder="🔍 Search lead…">
      <select style="padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:.85rem;background:var(--card-bg);color:var(--primary);outline:none"><option>All Stages</option><option>New</option><option>Contacted</option><option>Site Visit</option><option>Negotiation</option><option>Closed</option></select>
      <button class="btn btn-primary btn-sm" onclick="showToast('Lead tracking isn\\'t connected to a backend yet','👥')">+ Add Lead</button>
    </div>
    <div class="kanban" id="agentLeadKanban">
      ${['New','Contacted','Site Visit','Negotiation','Closed ✓'].map(stage => `
        <div class="kanban-col">
          <h4>${stage}</h4>
          <div style="padding:1.5rem 0.5rem;text-align:center;color:var(--muted);font-size:.78rem">No leads yet</div>
        </div>`).join('')}
    </div>`;
}

function buildAgentInquiriesPanel() {
  return `
    <div class="dash-header"><h1>Inquiries</h1><p>Inquiries received across your listings</p></div>
    <div class="table-card">
      <div class="table-head"><h3>📩 All Inquiries</h3>
        <select style="padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:.82rem;background:var(--card-bg);color:var(--primary);outline:none"><option>All Status</option><option>New</option><option>Replied</option><option>Pending</option></select>
      </div>
      <table><thead><tr><th>Property</th><th>Buyer</th><th>Price</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody><tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--muted)">No inquiries yet — inquiry tracking isn't connected to a backend yet</td></tr></tbody></table>
    </div>`;
}

function buildAgentVisitsPanel() {
  return `
    <div class="dash-header"><h1>Site Visits</h1><p>Scheduled visits this week</p></div>
    <div class="table-card">
      <div class="table-head"><h3>📅 Scheduled Visits</h3>
        <button class="btn btn-primary btn-sm" onclick="showToast('Visit scheduling isn\\'t connected to a backend yet','📅')">+ Schedule Visit</button>
      </div>
      <table><thead><tr><th>Client</th><th>Property</th><th>Date & Time</th><th>Type</th><th>Status</th><th>Action</th></tr></thead>
      <tbody><tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--muted)">No visits scheduled yet</td></tr></tbody></table>
    </div>`;
}

function buildAgentFeaturedPanel() {
  return `
    <div class="dash-header"><h1>Featured Listings</h1><p>Boost your listings for maximum visibility</p></div>
    <div class="alert alert-info" style="margin-bottom:1.5rem">⭐ <span>Featured listings appear at the top of search results. Upgrade your plan to feature more listings.</span></div>
    <div class="grid-3" id="agentFeaturedGrid">
      <div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">Loading your listings…</div>
    </div>`;
}

function buildAgentCommissionsPanel() {
  return `
    <div class="dash-header"><h1>Commissions</h1><p>Earnings breakdown and payout history</p></div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:2rem">
      <div class="stat-card"><div class="stat-icon stat-icon-green">💰</div><div class="value">—</div><div class="label">This Month</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-blue">💳</div><div class="value">—</div><div class="label">This Year</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">⏳</div><div class="value">—</div><div class="label">Pending Payout</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
    </div>

    <div class="table-card">
      <div class="table-head"><h3>💰 Commission Transactions</h3>
        <button class="btn btn-ghost btn-sm" onclick="showToast('Statement download isn\\'t connected to a backend yet','📥')">⬇ Statement</button>
      </div>
      <table><thead><tr><th>Property</th><th>Deal Value</th><th>Commission %</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
      <tbody><tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--muted)">No commission transactions yet</td></tr></tbody></table>
    </div>`;
}

function buildAgentAnalyticsPanel() {
  return `
    <div class="dash-header"><h1>Analytics</h1><p>Your performance metrics</p></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon stat-icon-blue">👁</div><div class="value">—</div><div class="label">Listing Views</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-green">📩</div><div class="value">—</div><div class="label">Inquiries Received</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">🤝</div><div class="value">—</div><div class="label">Conversion Rate</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-purple">⭐</div><div class="value">—</div><div class="label">Avg Rating</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
    </div>
    <div class="grid-2">
      <div class="chart-card"><h3>Inquiries vs Closures <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
      <div class="chart-card"><h3>Top Performing Listings</h3>
        <div id="agentTopListings" style="margin-top:1rem;display:flex;flex-direction:column;gap:10px">
          <div style="text-align:center;padding:1rem;color:var(--muted);font-size:.85rem">Per-listing performance metrics aren't connected to a backend yet</div>
        </div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════
//  BUILDER DASHBOARD sub-panels
// ═══════════════════════════════════════════════════════════════════════════

function patchBuilderDashboard() {
  const content = document.querySelector('#page-builder .dash-content');
  if (!content || content.dataset.patched) return;
  content.dataset.patched = '1';
  const existingHTML = content.innerHTML;
  content.innerHTML = `
    <div id="blp-home"      class="sub-panel sp-default">${existingHTML}</div>
    <div id="blp-projects"  class="sub-panel">${buildBuilderProjectsPanel()}</div>
    <div id="blp-leads"     class="sub-panel">${buildBuilderLeadsPanel()}</div>
    <div id="blp-analytics" class="sub-panel">${buildBuilderAnalyticsPanel()}</div>
    <div id="blp-revenue"   class="sub-panel">${buildBuilderRevenuePanel()}</div>
  `;
}

function showBuilderPanel(id) {
  const page = document.getElementById('page-builder');
  if (!page || !page.classList.contains('active')) return;
  page.querySelectorAll('[id^="blp-"]').forEach(p => p.style.display = 'none');
  const t = document.getElementById('blp-' + id);
  if (t) t.style.display = 'block';
}

function buildBuilderProjectsPanel() {
  return `
    <div class="dash-header" style="display:flex;justify-content:space-between;align-items:flex-start">
      <div><h1>My Projects</h1><p>All your active and past projects</p></div>
      <button class="btn btn-primary" onclick="showPage('addproperty')">+ Add Project</button>
    </div>
    <div class="table-card">
      <div class="table-head"><h3>🏗 Projects</h3>
        <div style="display:flex;gap:8px">
          <select style="padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:.82rem;background:var(--card-bg);color:var(--primary);outline:none"><option>All Status</option><option>Active</option><option>Under Construction</option><option>Completed</option></select>
        </div>
      </div>
      <table><thead><tr><th>Project</th><th>Location</th><th>Type</th><th>Units</th><th>Possession</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody id="builderProjectsBody">
        <tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">Loading your listings…</td></tr>
      </tbody></table>
    </div>`;
}

function buildBuilderLeadsPanel() {
  return `
    <div class="dash-header"><h1>Lead Management</h1><p>Leads across all your projects</p></div>
    <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:1.5rem">
      <div class="stat-card"><div class="stat-icon stat-icon-blue">👥</div><div class="value">—</div><div class="label">Active Leads</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-green">📞</div><div class="value">—</div><div class="label">Site Visit Requests</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">🤝</div><div class="value">—</div><div class="label">In Negotiation</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-purple">🎉</div><div class="value">—</div><div class="label">Closed (30d)</div></div>
    </div>
    <div class="table-card">
      <div class="table-head"><h3>All Leads <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Not tracked yet</span></h3>
        <button class="btn btn-primary btn-sm" onclick="showToast('Lead tracking isn\\'t connected to a backend yet','👥')">+ Add Lead</button>
      </div>
      <table><thead><tr><th>Lead</th><th>Project Interest</th><th>Budget</th><th>Source</th><th>Date</th><th>Stage</th><th>Actions</th></tr></thead>
      <tbody><tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No leads yet</td></tr></tbody></table>
    </div>`;
}

function buildBuilderAnalyticsPanel() {
  return `
    <div class="dash-header"><h1>Analytics</h1><p>Project performance and market insights</p></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon stat-icon-blue">👁</div><div class="value">—</div><div class="label">Monthly Views</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-green">📩</div><div class="value">—</div><div class="label">Inquiries (30d)</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">🤝</div><div class="value">—</div><div class="label">Conversion Rate</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-purple">💰</div><div class="value">—</div><div class="label">Pipeline Value</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
    </div>
    <div class="grid-2">
      <div class="chart-card"><h3>Views by Project <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
      <div class="chart-card"><h3>Lead Sources <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
    </div>`;
}

function buildBuilderRevenuePanel() {
  return `
    <div class="dash-header"><h1>Revenue</h1><p>Sales revenue and collection tracking</p></div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:2rem">
      <div class="stat-card"><div class="stat-icon stat-icon-green">💰</div><div class="value">—</div><div class="label">Total Sales Value</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-blue">✅</div><div class="value">—</div><div class="label">Collected</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">⏳</div><div class="value">—</div><div class="label">Pending</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
    </div>
    <div class="chart-card" style="margin-bottom:2rem"><h3>Monthly Collections <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
    <div class="table-card">
      <div class="table-head"><h3>Recent Transactions</h3></div>
      <table><thead><tr><th>Buyer</th><th>Project</th><th>Unit</th><th>Amount</th><th>Date</th><th>Type</th><th>Status</th></tr></thead>
      <tbody><tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No transactions yet — payments aren't connected to a backend yet</td></tr></tbody></table>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════
//  TENANT DASHBOARD sub-panels
// ═══════════════════════════════════════════════════════════════════════════

function patchTenantDashboard() {
  const content = document.querySelector('#page-tenant .dash-content');
  if (!content || content.dataset.patched) return;
  content.dataset.patched = '1';
  const existingHTML = content.innerHTML;
  content.innerHTML = `
    <div id="tnp-home"      class="sub-panel sp-default">${existingHTML}</div>
    <div id="tnp-lease"     class="sub-panel">${buildTenantLeasePanel()}</div>
    <div id="tnp-payments"  class="sub-panel">${buildTenantPaymentsPanel()}</div>
    <div id="tnp-documents" class="sub-panel">${buildTenantDocumentsPanel()}</div>
  `;
}

function showTenantPanel(id) {
  const page = document.getElementById('page-tenant');
  if (!page || !page.classList.contains('active')) return;
  page.querySelectorAll('[id^="tnp-"]').forEach(p => p.style.display = 'none');
  const t = document.getElementById('tnp-' + id);
  if (t) t.style.display = 'block';
}

function buildTenantLeasePanel() {
  return `
    <div class="dash-header"><h1>Lease Agreement</h1><p>Lease management isn't connected to a backend yet</p></div>
    <div class="chart-card" style="margin-bottom:1.5rem">
      <h3 style="margin-bottom:1.2rem">📄 Lease Details</h3>
      <div style="text-align:center;padding:2rem;color:var(--muted)">No active lease on file</div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="showToast('Lease management isn\\'t connected to a backend yet','📄')">⬇ Download Lease PDF</button>
      <button class="btn btn-ghost" onclick="showToast('Owner contact isn\\'t connected to a backend yet','📞')">📞 Contact Owner</button>
      <button class="btn btn-ghost" onclick="showToast('Renewal requests aren\\'t connected to a backend yet','📧')">🔄 Request Renewal</button>
    </div>`;
}

function buildTenantPaymentsPanel() {
  return `
    <div class="dash-header"><h1>Rent Payments</h1><p>Payment history and upcoming dues</p></div>
    <div class="table-card">
      <div class="table-head"><h3>💳 Payment History</h3>
        <button class="btn btn-ghost btn-sm" onclick="showToast('Statements aren\\'t connected to a backend yet','📥')">⬇ Statement</button>
      </div>
      <table><thead><tr><th>Month</th><th>Amount</th><th>Due Date</th><th>Paid On</th><th>Method</th><th>Status</th><th>Receipt</th></tr></thead>
      <tbody><tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No payment history yet — rent payments aren't connected to a backend yet</td></tr></tbody></table>
    </div>`;
}

function buildTenantDocumentsPanel() {
  return `
    <div class="dash-header"><h1>Documents</h1><p>All lease and KYC documents</p></div>
    <div class="table-card">
      <div class="table-head"><h3>📂 My Documents</h3>
        <button class="btn btn-primary btn-sm" onclick="showToast('Document upload isn\\'t connected to a backend yet','📎')">+ Upload</button>
      </div>
      <table><thead><tr><th>Document</th><th>Type</th><th>Uploaded</th><th>Status</th><th>Action</th></tr></thead>
      <tbody><tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--muted)">No documents uploaded yet</td></tr></tbody></table>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════
//  RENTAL MANAGEMENT sub-panels
// ═══════════════════════════════════════════════════════════════════════════

function patchRentalDashboard() {
  const content = document.querySelector('#page-rental .dash-content');
  if (!content || content.dataset.patched) return;
  content.dataset.patched = '1';
  const existingHTML = content.innerHTML;
  content.innerHTML = `
    <div id="rnp-home"     class="sub-panel sp-default">${existingHTML}</div>
    <div id="rnp-leases"   class="sub-panel">${buildRentalLeasesPanel()}</div>
    <div id="rnp-rent"     class="sub-panel">${buildRentalRentPanel()}</div>
    <div id="rnp-expenses" class="sub-panel">${buildRentalExpensesPanel()}</div>
    <div id="rnp-analytics" class="sub-panel">${buildRentalAnalyticsPanel()}</div>
  `;
}

function showRentalPanel(id) {
  const page = document.getElementById('page-rental');
  if (!page || !page.classList.contains('active')) return;
  page.querySelectorAll('[id^="rnp-"]').forEach(p => p.style.display = 'none');
  const t = document.getElementById('rnp-' + id);
  if (t) t.style.display = 'block';
}

function buildRentalLeasesPanel() {
  return `
    <div class="dash-header"><h1>Lease Tracking</h1><p>All active and upcoming leases</p></div>
    <div class="table-card">
      <div class="table-head"><h3>📄 Active Leases</h3>
        <button class="btn btn-primary btn-sm" onclick="showToast('Lease tracking isn\\'t connected to a backend yet','📄')">+ New Lease</button>
      </div>
      <table><thead><tr><th>Tenant</th><th>Property</th><th>Lease Period</th><th>Monthly Rent</th><th>Progress</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody><tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--muted)">No leases yet — lease tracking isn't connected to a backend yet</td></tr></tbody></table>
    </div>`;
}

function buildRentalRentPanel() {
  return `
    <div class="dash-header"><h1>Rent Collection</h1><p>Track and collect rent from all tenants</p></div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:1.5rem">
      <div class="stat-card"><div class="stat-icon stat-icon-green">✅</div><div class="value">—</div><div class="label">Collected (this month)</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">⚠</div><div class="value">—</div><div class="label">Overdue</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-blue">📅</div><div class="value">—</div><div class="label">Next Due Date</div></div>
    </div>
    <div class="table-card">
      <div class="table-head"><h3>💰 Collection Status</h3>
        <button class="btn btn-primary btn-sm" onclick="showToast('Rent collection isn\\'t connected to a backend yet','📱')">📱 Send All Reminders</button>
      </div>
      <table><thead><tr><th>Tenant</th><th>Property</th><th>Amount Due</th><th>Due Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody><tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--muted)">No rent collection data yet</td></tr></tbody></table>
    </div>`;
}

function buildRentalExpensesPanel() {
  return `
    <div class="dash-header"><h1>Expenses</h1><p>Track property expenses and net income</p></div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:1.5rem">
      <div class="stat-card"><div class="stat-icon stat-icon-green">💰</div><div class="value">—</div><div class="label">Gross Rent (this month)</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">🧾</div><div class="value">—</div><div class="label">Total Expenses</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-blue">📈</div><div class="value">—</div><div class="label">Net Income</div></div>
    </div>
    <div class="table-card">
      <div class="table-head"><h3>🧾 Expense Log</h3>
        <button class="btn btn-primary btn-sm" onclick="showToast('Expense tracking isn\\'t connected to a backend yet','🧾')">+ Add Expense</button>
      </div>
      <table><thead><tr><th>Description</th><th>Property</th><th>Category</th><th>Amount</th><th>Date</th><th>Receipt</th></tr></thead>
      <tbody><tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--muted)">No expenses logged yet</td></tr></tbody></table>
    </div>`;
}

function buildRentalAnalyticsPanel() {
  return `
    <div class="dash-header"><h1>Rental Analytics</h1><p>Portfolio performance and yield analysis</p></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon stat-icon-green">📈</div><div class="value">—</div><div class="label">Gross Yield</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-blue">🏘</div><div class="value">—</div><div class="label">Occupancy Rate</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-amber">⏱</div><div class="value">—</div><div class="label">Avg Vacancy Gap</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
      <div class="stat-card"><div class="stat-icon stat-icon-purple">💰</div><div class="value">—</div><div class="label">Annual Net Income</div><div class="change" style="color:var(--muted)">Demo data — not tracked yet</div></div>
    </div>
    <div class="grid-2">
      <div class="chart-card"><h3>Monthly Net Income <span class="tag" style="background:rgba(255,255,255,0.08);color:var(--muted);font-size:0.7rem;margin-left:6px">Demo data</span></h3><div style="padding:2.5rem 1rem;text-align:center;color:var(--muted);font-size:0.85rem">This chart isn't connected to a backend yet</div></div>
      <div class="chart-card"><h3>Yield by Property</h3>
        <div style="margin-top:1rem;text-align:center;padding:1rem;color:var(--muted);font-size:.85rem">No properties tracked yet</div>
      </div>

    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════
//  Lazy chart init for sub-panels that contain canvas elements
// ═══════════════════════════════════════════════════════════════════════════

// Extend the existing showPage to call patchXDashboard when each page loads
const __origShowPage = showPage;
showPage = function(id) {
  __origShowPage(id);
  if (id === 'buyer')   setTimeout(patchBuyerDashboard,   50);
  if (id === 'agent')   setTimeout(patchAgentDashboard,   50);
  if (id === 'builder') setTimeout(patchBuilderDashboard, 50);
  if (id === 'tenant')  setTimeout(patchTenantDashboard,  50);
  if (id === 'rental')  setTimeout(patchRentalDashboard,  50);
};

// Chart init called when sub-panels with charts first open
document.addEventListener('click', function(e) {
  // Intercept agent analytics panel to draw its chart
  const agpAnal = document.getElementById('agp-analytics');
  if (agpAnal && agpAnal.style.display === 'block') {
    const c = document.getElementById('agentAnalyticsChart');
    if (c && !c.dataset.init) {
      c.dataset.init = '1';
      new Chart(c, {
        type:'line', data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[
          {label:'Inquiries',data:[14,18,15,22,20,24],borderColor:'#2563EB',tension:0.4,pointRadius:3},
          {label:'Closures', data:[2,3,3,5,4,8],borderColor:'#10B981',tension:0.4,pointRadius:3},
        ]},
        options:{...chartDefaults,plugins:{legend:{display:true,labels:{color:tc()}}},scales:{x:{grid:{display:false},ticks:{color:tc()}},y:{ticks:{color:tc()}}}}
      });
    }
  }
}, { passive: true });
</script>
