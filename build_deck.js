const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'GCC Atlas';
pptx.subject = 'Evidence-led intelligence for India’s GCC ecosystem';
pptx.title = 'GCC Atlas — From fragmented signals to confident decisions';
pptx.company = 'GCC Atlas';
pptx.lang = 'en-IN';
pptx.theme = { headFontFace: 'Aptos Display', bodyFontFace: 'Aptos', lang: 'en-IN' };
pptx.defineSlideMaster({
  title: 'LIGHT', background: { color: 'F5F7F8' },
  objects: [
    { line: { x: 0.55, y: 7.12, w: 12.25, h: 0, line: { color: 'DDE5EA', width: 0.7 } } },
    { text: { text: 'GCC ATLAS  /  PRODUCT STRATEGY', options: { x: 0.58, y: 7.18, w: 4.6, h: 0.16, fontFace: 'Aptos', fontSize: 7.5, color: '728195', charSpacing: 1.1, margin: 0, breakLine: false } } },
    { text: { text: 'OCTOBER 2026', options: { x: 10.95, y: 7.18, w: 1.25, h: 0.16, fontFace: 'Aptos', fontSize: 7.5, color: '728195', charSpacing: 1, align: 'right', margin: 0 } } },
  ],
  slideNumber: { x: 12.35, y: 7.17, color: '728195', fontFace: 'Aptos', fontSize: 7.5 }
});
const C = { navy:'101D31', ink:'17283F', body:'42566D', muted:'718196', line:'DEE6EC', paper:'F5F7F8', white:'FFFFFF', teal:'00A994', teal2:'6DDBCA', tealSoft:'E2F7F3', coral:'EF795E', amber:'B87912', amberSoft:'FFF2D9', blue:'5B80D5', blueSoft:'EAF0FF', panel:'F9FBFC', dark2:'203752' };
const SW=13.333, SH=7.5;
const ST = pptx.ShapeType;
function tx(s,t,x,y,w,h,opts={}) { s.addText(t,{x,y,w,h,fontFace:opts.fontFace||'Aptos',fontSize:opts.fontSize||12,color:opts.color||C.ink,bold:opts.bold||false,margin:opts.margin===undefined?0:opts.margin,breakLine:opts.breakLine,fit:'shrink',valign:opts.valign||'mid',align:opts.align||'left',charSpacing:opts.charSpacing,paraSpaceAfterPt:opts.paraSpaceAfterPt,bullet:opts.bullet,transparency:opts.transparency,italic:opts.italic,hyperlink:opts.hyperlink,rotate:opts.rotate,lineSpacingMultiple:opts.lineSpacingMultiple,underline:opts.underline}); }
function rect(s,x,y,w,h,fill,opts={}) { s.addShape(opts.round?ST.roundRect:ST.rect,{x,y,w,h,rectRadius:opts.radius||0.1,fill:{color:fill,transparency:opts.transparency||0},line:{color:opts.line||fill,transparency:opts.lineTrans===undefined?100:opts.lineTrans,width:opts.lineWidth||0.8},radius:opts.radius}); }
function line(s,x1,y1,x2,y2,color=C.line,width=1,dash){s.addShape(ST.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dashType:dash,beginArrowType:'none',endArrowType:'none'}})}
function circ(s,x,y,d,fill,lineColor=fill){s.addShape(ST.ellipse,{x,y,w:d,h:d,fill:{color:fill},line:{color:lineColor,transparency:100}})}
function header(s,kicker,title,subtitle){tx(s,kicker.toUpperCase(),0.62,0.34,8.5,0.19,{fontSize:8.3,color:C.teal,bold:true,charSpacing:1.9});tx(s,title,0.62,0.66,12.0,0.5,{fontSize:25,color:C.ink,bold:true,fontFace:'Aptos Display'});if(subtitle)tx(s,subtitle,0.64,1.18,11.85,0.37,{fontSize:11.2,color:C.muted});}
function card(s,x,y,w,h,opts={}){rect(s,x,y,w,h,opts.fill||C.white,{round:true,line:opts.line||C.line,lineTrans:opts.lineTrans===undefined?0:opts.lineTrans,lineWidth:opts.lineWidth||0.7});}
function pill(s,text,x,y,w,fill,color){rect(s,x,y,w,0.26,fill,{round:true,lineTrans:100});tx(s,text,x+0.07,y+0.02,w-0.14,0.19,{fontSize:7.8,color,bold:true,align:'center'});}
function addNote(s, text){ if (s.addNotes) s.addNotes(text); }

// 1 — cover
{
 const s=pptx.addSlide();s.background={color:C.navy};
 // top identity
 rect(s,0.68,0.58,0.48,0.48,C.teal,{round:true});tx(s,'G',0.68,0.58,0.48,0.48,{fontSize:24,color:C.navy,bold:true,align:'center'});
 tx(s,'GCC ATLAS',1.30,0.61,2.3,0.18,{fontSize:11.5,color:'FFFFFF',bold:true,charSpacing:2});tx(s,'INDIA GCC INTELLIGENCE',1.30,0.83,3.2,0.16,{fontSize:7.5,color:'A9BBCF',charSpacing:1.4});
 pill(s,'PRODUCT STRATEGY  /  OCTOBER 2026',0.70,1.60,2.65,'20394A','91F0DF');
 tx(s,'From fragmented signals\nto confident decisions.',0.70,2.12,7.0,1.52,{fontFace:'Aptos Display',fontSize:33,color:'FFFFFF',bold:true});
 tx(s,'A source-linked intelligence workspace for the companies building, serving and studying India’s Global Capability Centres.',0.73,3.92,5.85,0.75,{fontSize:15,color:'B6C7D8',lineSpacingMultiple:1.18});
 line(s,0.73,5.15,5.65,5.15,'3A4F67',1);
 tx(s,'THE THESIS',0.73,5.42,1.1,0.16,{fontSize:8,color:C.teal2,bold:true,charSpacing:1.6});
 tx(s,'Don’t sell another directory. Build the evidence layer behind market-entry and ecosystem decisions.',0.73,5.70,5.55,0.68,{fontSize:14,color:'FFFFFF',bold:true});
 // abstract evidence graph
 const nodes=[{x:8.1,y:1.46,w:2.25,h:.82,txt:'PUBLIC SIGNALS',sub:'announcements · filings'},{x:10.52,y:2.55,w:2.15,h:.82,txt:'ENTITY GRAPH',sub:'company · unit · site'},{x:7.95,y:3.65,w:2.36,h:.82,txt:'PROVENANCE',sub:'source · date · confidence'},{x:10.38,y:4.85,w:2.35,h:.82,txt:'DECISION WORKSPACE',sub:'where · who · why now'}];
 line(s,9.4,2.28,10.85,2.55,'2F8C8A',1.5);line(s,10.85,3.37,9.2,3.65,'2F8C8A',1.5);line(s,10.25,4.47,11.35,4.85,'2F8C8A',1.5);
 nodes.forEach((n,i)=>{card(s,n.x,n.y,n.w,n.h,{fill:'1A3048',line:'2F5165'});circ(s,n.x+0.16,n.y+0.19,.12,C.teal2);tx(s,n.txt,n.x+0.38,n.y+0.15,n.w-.5,.22,{fontSize:9,color:'FFFFFF',bold:true,charSpacing:.5});tx(s,n.sub,n.x+0.38,n.y+0.44,n.w-.5,.17,{fontSize:8,color:'A8BED0'});});
 tx(s,'PREPARED BY DARSHAN SOLANKI  •  PRODUCT STRATEGY + WORKING PROTOTYPE',0.72,7.02,8.5,0.16,{fontSize:7.5,color:'8298B1',charSpacing:1.1});
 addNote(s,'Core idea: Build a source-of-truth workflow, not simply a company list. First user: GCC-facing service-provider GTM teams; design partners: market-entry advisers. All market facts are dated and linked in the final source slide.');
}
// 2 — market
{
 const s=pptx.addSlide('LIGHT');header(s,'01 · Why now','A $98.4B ecosystem is scaling faster than the information around it.','The market has crossed the “interesting niche” threshold. Decision data has not yet become consistently comparable.');
 const metrics=[['2,117','GCCs in India','FY2026 · company-level count','S1'],['3,728','GCC units','Multiple centres / units can sit under one GCC','S1'],['$98.4B','Market revenue','FY2026 Nasscom–Zinnov estimate','S1'],['31M sq. ft.','GCC leasing in 2025','Record annual volume reported by JLL','S2']];
 metrics.forEach((m,i)=>{let x=.64+i*3.13;card(s,x,1.87,2.88,1.42,{fill:C.white});tx(s,m[0],x+.18,2.08,2.5,.43,{fontSize:i===3?25:29,bold:true,color:C.ink,fontFace:'Aptos Display'});tx(s,m[1],x+.18,2.62,2.55,.22,{fontSize:10.5,bold:true,color:C.teal});tx(s,m[2],x+.18,2.90,2.58,.25,{fontSize:8.1,color:C.muted});});
 card(s,.64,3.58,7.2,2.7,{fill:C.navy,line:C.navy});tx(s,'WHY THE WINDOW IS OPEN',.91,3.88,3.0,.2,{fontSize:8.6,color:C.teal2,bold:true,charSpacing:1.5});tx(s,'GCC strategy is moving from low-cost delivery to enterprise capability.',.91,4.22,6.15,.71,{fontSize:22,color:C.white,bold:true,fontFace:'Aptos Display'});tx(s,'As operating mandates grow more specialised, a static company list is less useful than a continuously updated view of expansion, talent, city strengths and operating conditions.',.94,5.18,6.2,.64,{fontSize:11,color:'C4D1DF'});
 const shifts=[['01','Activity compounds','Over 200 new GCCs entered India in the last two years, per JLL.'],['02','Locations specialise','Bengaluru leads on breadth; Hyderabad, Pune and Chennai have distinct vertical advantages.'],['03','Numbers need context','Company count, centre count, office leasing and workforce are different units of analysis.']];
 shifts.forEach((a,i)=>{let y=3.64+i*.88;circ(s,8.25,y+.03,.32,C.tealSoft);tx(s,a[0],8.25,y+.05,.32,.22,{fontSize:8,color:C.teal,bold:true,align:'center'});tx(s,a[1],8.72,y,3.65,.23,{fontSize:11,bold:true});tx(s,a[2],8.72,y+.27,3.62,.46,{fontSize:9.4,color:C.muted});});
 tx(s,'Sources: S1 Nasscom–Zinnov FY2026 (published May 2026); S2 JLL India GCC Guide release (17 Feb 2026). Metrics use their stated periods / definitions.',.68,6.67,11.8,.21,{fontSize:7.3,color:C.muted,italic:true});
 addNote(s,'Market baseline from Nasscom–Zinnov report FY2026: 2,117 GCCs across 3,728 units; $98.4B revenue and 2.36M professionals. JLL reported about 31 million sq ft of GCC leasing in calendar 2025. The 200+ entry figure is JLL-reported across the last two years. These measures describe different things and should not be added together.');
}
// 3 — problem framing
{
 const s=pptx.addSlide('LIGHT');header(s,'02 · Define the problem','The bottleneck is not information availability. It is trustworthy join-up.','Government announcements, reports, filings and provider pages contain useful facts—but they do not share a common operating model.');
 const stages=[{x:.67,w:2.18,title:'SCATTERED INPUTS',sub:'Press releases\nGovt. portals\nConsultant PDFs\nProvider claims',fill:'FFFFFF',stroke:C.line},{x:3.15,w:2.2,title:'FRAGMENTED RECORDS',sub:'Aliases & duplicates\nCompany vs site\nDifferent time periods\nNo change history',fill:'FFFFFF',stroke:C.line},{x:5.65,w:2.2,title:'UNPROVEN SIGNALS',sub:'Plan ≠ execution\nStale headcount\nNo source excerpt\nPaid claims look equal',fill:'FFF2D9',stroke:'E8CC93'},{x:8.15,w:2.2,title:'SLOW DECISIONS',sub:'Repeat research\nReferral dependence\nHard to compare cities\nProvider diligence gaps',fill:'FFFFFF',stroke:C.line},{x:10.65,w:2.0,title:'REAL COST',sub:'Delayed shortlist\nWeak pipeline timing\nPoor site choice\nRework & risk',fill:C.navy,stroke:C.navy}];
 stages.forEach((a,i)=>{card(s,a.x,2.03,a.w,2.12,{fill:a.fill,line:a.stroke});tx(s,a.title,a.x+.15,2.25,a.w-.3,.34,{fontSize:9.3,bold:true,color:i===4?'FFFFFF':i===2?C.amber:C.ink});tx(s,a.sub,a.x+.15,2.80,a.w-.3,.94,{fontSize:10,color:i===4?'D4E2EC':C.body,valign:'top'});if(i<stages.length-1){line(s,a.x+a.w+.04,3.08,stages[i+1].x-.1,3.08,C.teal,1.4);tx(s,'›',a.x+a.w+.03,2.89,.18,.25,{fontSize:22,color:C.teal,bold:true,align:'center'});}});
 tx(s,'The missing layer',.7,4.72,2.1,.24,{fontSize:13,bold:true});tx(s,'A maintained evidence graph: claim → source → entity → location / event → decision.',.7,5.07,7.2,.38,{fontSize:17,color:C.teal,bold:true,fontFace:'Aptos Display'});
 const bullets=[['DEFINITION','What is being counted—and when?'],['PROVENANCE','Who said it, where, and on what date?'],['STATUS','Is it planned, announced, launched or operating?'],['DECISION','Which action should this evidence change?']];
 bullets.forEach((b,i)=>{let y=4.74+i*.43;tx(s,b[0],8.47,y,1.1,.2,{fontSize:8.1,bold:true,color:C.teal,charSpacing:.8});tx(s,b[1],9.62,y,3.1,.2,{fontSize:9.4,color:C.body});});
 tx(s,'Discovery hypothesis—not a market benchmark: initial market maps may require multiple reports, calls and several rounds of manual reconciliation. Validate time-to-shortlist and correction rates with actual users.',.71,6.42,11.8,.34,{fontSize:8.7,color:C.muted,italic:true});
 addNote(s,'Do not claim that the ecosystem has no data. The problem is inconsistent definitions, no joinable entity model, ambiguous statuses, limited provenance and disconnected workflows. Measure the pain during discovery rather than inventing a monetary cost-of-information figure.');
}
// 4 stakeholders
{
 const s=pptx.addSlide('LIGHT');header(s,'03 · Who is hurt','The information gap sits between stakeholders—not inside just one team.','The same missing fact creates different costs for market entrants, service providers, city teams and advisers.');
 const rows=[
  ['Global company entering India','CEO / India lead / strategy','Cannot build a credible city + operating-model shortlist','Advisor referrals, spreadsheets, bespoke consulting'],
  ['Existing GCC leader','Site head / expansion / PMO','Peer benchmarks and location signals arrive late','Networks, brokers, periodic reports'],
  ['GCC-facing provider','Sales / practice leader','Misses expansion triggers; outreach starts too late','Manual web research, CRM lists, warm referrals'],
  ['State / investment agency','Investment promotion team','Hard to compare pipeline, cluster gaps and competing offers','Inbound enquiries, fragmented industry reporting'],
  ['Advisor / implementation partner','GCC setup, legal, tax, HR','Rebuilds market evidence for each client; delivery claims hard to assess','Proprietary decks, calls and prior project memory']
 ];
 const xs=[.68,3.15,5.62,8.56],ws=[2.34,2.34,2.82,4.08];
 const heads=['STAKEHOLDER','DAY-TO-DAY OWNER','WHERE ASYMMETRY HURTS','WHAT THEY USE TODAY'];
 heads.forEach((h,i)=>tx(s,h,xs[i],1.88,ws[i],.22,{fontSize:8.1,color:C.muted,bold:true,charSpacing:.8}));
 rows.forEach((r,ri)=>{const y=2.22+ri*.78;rect(s,.66,y,12.05,.66,ri%2===0?C.white:'F9FBFC',{round:true,line:'E8EDF1',lineTrans:0,lineWidth:.5});r.forEach((v,i)=>tx(s,v,xs[i],y+.08,ws[i]-.08,.5,{fontSize:i===0?10.1:9.3,bold:i===0,color:i===0?C.ink:C.body,valign:'mid'}));});
 card(s,.68,6.31,12.03,.48,{fill:C.tealSoft,line:'D5EEE8'});tx(s,'COMMON JOB TO BE DONE',.89,6.44,1.85,.16,{fontSize:8.2,color:C.teal,bold:true,charSpacing:1});tx(s,'Find the right company, city or partner—and understand the evidence well enough to act.',2.85,6.39,9.45,.23,{fontSize:12.1,bold:true,color:C.ink});
 addNote(s,'A single source-of-truth product serves multiple parties but should not start with all of them. Prioritise one recurring workflow for an initial buyer, while maintaining an open evidence layer that other stakeholders can reuse.');
}
// 5 definitions / count
{
 const s=pptx.addSlide('LIGHT');header(s,'04 · The count is the product','“How many GCCs?” is unanswerable without a definition and an as-of date.','The difference between a GCC company and a GCC unit/site is material—not semantic.');
 const boxes=[{x:.68,year:'FY2024',n1:'1,700+',l1:'GCCs',n2:'2,975+',l2:'centres',src:'KPMG summary · FY2024',color:'EAF0FF',accent:C.blue},{x:4.72,year:'FY2026',n1:'2,117',l1:'GCCs',n2:'3,728',l2:'GCC units',src:'Nasscom–Zinnov · FY2026',color:'E2F7F3',accent:C.teal},{x:8.76,year:'WHAT USERS SEE',n1:'Different',l1:'vendor totals',n2:'Different',l2:'coverage claims',src:'Commercial platforms · Oct 2026',color:'FFF2D9',accent:C.amber}];
 boxes.forEach((b,i)=>{card(s,b.x,2.04,3.76,2.37,{fill:C.white,line:C.line});pill(s,b.year,b.x+.20,2.24,1.18,b.color,b.accent);tx(s,b.n1,b.x+.2,2.78,1.68,.43,{fontSize:i===2?20:27,bold:true,fontFace:'Aptos Display'});tx(s,b.l1,b.x+.2,3.23,1.62,.22,{fontSize:9.8,color:C.muted});tx(s,b.n2,b.x+1.97,2.78,1.56,.43,{fontSize:i===2?20:27,bold:true,fontFace:'Aptos Display'});tx(s,b.l2,b.x+1.97,3.23,1.52,.22,{fontSize:9.8,color:C.muted});line(s,b.x+.2,3.64,b.x+3.52,3.64,C.line,.8);tx(s,b.src,b.x+.2,3.83,3.3,.23,{fontSize:8.7,color:C.body,bold:true});});
 line(s,4.46,3.2,4.66,3.2,C.teal,1.6);tx(s,'≠',4.44,2.91,.25,.27,{fontSize:17,color:C.teal,bold:true,align:'center'});line(s,8.50,3.2,8.71,3.2,C.teal,1.6);tx(s,'≠',8.48,2.91,.25,.27,{fontSize:17,color:C.teal,bold:true,align:'center'});
 card(s,.68,4.78,12.04,1.32,{fill:C.navy,line:C.navy});tx(s,'PRODUCT RULE',.96,5.04,1.35,.19,{fontSize:8.5,color:C.teal2,bold:true,charSpacing:1.4});tx(s,'Never store “GCC count” as a naked number.',2.45,4.98,5.6,.29,{fontSize:17,color:C.white,bold:true,fontFace:'Aptos Display'});tx(s,'Every metric carries: definition · entity level · geography · period · source · as-of date · methodology.',2.45,5.42,9.2,.28,{fontSize:11,color:'C6D5E2'});
 tx(s,'S1: Nasscom–Zinnov FY2026. S4: KPMG GCC tax insights (25 Sep 2025) provides an FY2024 baseline. The last card summarises active vendor marketing claims; their counts should not be compared without checking scope.',.72,6.42,11.9,.35,{fontSize:8.1,color:C.muted,italic:true});
 addNote(s,'KPMG FY2024 published 1,700 GCCs and over 2,975 centres. The FY2026 Nasscom–Zinnov report has 2,117 GCCs across 3,728 units. The numbers move over time and use distinct entities. New commercial sites also publish different coverage claims. The product should model this rather than flatten it.');
}
// 6 opportunities
{
 const s=pptx.addSlide('LIGHT');header(s,'05 · Opportunity map','Build the trust layer first. Add decision workflows where trust creates leverage.','Prioritisation is based on frequency of use, defensibility, feasibility and downstream decision value—not on feature count.');
 const opps=[
  ['1','Evidence-backed signal feed','NEW / EXPANDING GCCs · WHO / WHERE / WHEN','High','High','Start here'],
  ['2','Entity & event graph','PARENT ↔ GCC ↔ UNIT / SITE ↔ ANNOUNCEMENT','High','High','Foundation'],
  ['3','City + policy decision room','SECTOR FIT · TALENT · SPACE · INCENTIVES','High','Medium','Next'],
  ['4','Provider capability & proof','DELIVERY RECORD · REFERENCES · CASES','High','Low–medium','After trust'],
  ['5','Benchmarks & data APIs','SALARY · RENT · COST · WORKFORCE','Very high','Low','Later'],
  ['6','Marketplace / introductions','MATCHING · REFERRALS · TRANSACTIONS','Medium','Medium','Not first']
 ];
 const colx=[.74,1.24,4.10,8.30,9.77,11.12];const colw=[.38,2.72,4.0,1.38,1.3,1.35];
 ['#','OPPORTUNITY','CORE DATA PRODUCT','IMPACT','FEASIBILITY','SEQUENCE'].forEach((h,i)=>tx(s,h,colx[i],1.88,colw[i],.2,{fontSize:7.8,color:C.muted,bold:true,charSpacing:.5}));
 opps.forEach((r,i)=>{let y=2.2+i*.61;const selected=i===0||i===1;rect(s,.69,y,12.03,.52,selected?C.tealSoft:(i%2===0?C.white:'F9FBFC'),{round:true,line:selected?'BFE9E0':'E7EDF1',lineTrans:0,lineWidth:.6});r.forEach((v,j)=>tx(s,v,colx[j],y+.08,colw[j],.33,{fontSize:j===1?10.1:j===2?8.5:9.2,bold:j===1||j===5,color:j===0?C.teal:j===5&&selected?C.teal:C.body}));});
 card(s,.72,6.14,7.26,.56,{fill:C.navy,line:C.navy});tx(s,'WHY THIS ORDER',.95,6.32,1.3,.15,{fontSize:8,color:C.teal2,bold:true,charSpacing:1});tx(s,'Signals drive recurring usage; the entity graph compounds value; decisions monetise trust.',2.36,6.27,5.36,.23,{fontSize:10.5,color:C.white,bold:true});
 tx(s,'Important: salary, rent and incentive benchmarking is valuable but costly to normalise and keep current. Do not ship fake precision.',8.30,6.18,4.25,.43,{fontSize:9.3,color:C.muted,italic:true});
 addNote(s,'Sequence: start with public signals and source-backed entities. Location and policy comparison is an adjacent workflow. Provider quality requires independent evidence. Cost benchmarks should only follow when data can be sourced and normalised. Marketplace comes after trust, not before.');
}
// 7 beachhead
{
 const s=pptx.addSlide('LIGHT');header(s,'06 · Who first','Beachhead: GCC-facing service-provider sales teams.','Recurring use, an identifiable budget owner and a measurable workflow make this a sharper first wedge than a broad “platform for everyone”.');
 card(s,.69,1.89,4.15,4.43,{fill:C.navy,line:C.navy});pill(s,'FIRST PAYING USER',.97,2.18,1.73,'264556','99ECDD');tx(s,'Head of growth /\nsales / practice lead',.98,2.75,3.38,.92,{fontSize:25,color:C.white,bold:true,fontFace:'Aptos Display'});tx(s,'At GCC-facing providers:',.99,3.94,2.9,.2,{fontSize:10,color:'9FB5C8',bold:true});
 const providerTypes=['Commercial real estate','Talent / RPO','Payroll, tax & compliance','GCC setup / BOT operators'];providerTypes.forEach((t,i)=>{circ(s,1.01,4.33+i*.35,.12,C.teal2);tx(s,t,1.27,4.30+i*.35,2.75,.2,{fontSize:10.5,color:'EAF3F8'});});tx(s,'Wants: “Which account moved, why now, and what should I do next?”',.99,5.86,3.48,.35,{fontSize:11,color:C.teal2,bold:true});
 const cols=[['JOB TO BE DONE','Prioritise new / expanding GCCs; validate the trigger; prepare a relevant first conversation.'],['WHY THIS BUYER FIRST','Weekly account work; clear time-to-insight benefit; can measure qualified meetings and pipeline.'],['DESIGN PARTNERS','Market-entry advisers and 2–3 GCC operators test city/policy diligence without defining the initial SKU.']];
 cols.forEach((b,i)=>{let y=1.94+i*1.38;tx(s,b[0],5.34,y,3.2,.19,{fontSize:8.5,color:C.teal,bold:true,charSpacing:1.3});tx(s,b[1],5.34,y+.32,6.8,.63,{fontSize:12,color:C.ink,bold:i===0});if(i<2)line(s,5.33,y+1.1,12.42,y+1.1,C.line,.7)});
 tx(s,'Illustrative exposure model to validate: 3 researchers × 4 hours/week × ₹1,500 loaded cost/hour × 48 weeks = ₹8.64L/year in research labour. Excludes missed-timing and poor-fit costs.',5.35,6.12,6.85,.47,{fontSize:8.7,color:C.muted,italic:true});
 addNote(s,'The user choice is a product strategy hypothesis. Service providers are potential repeat buyers because they prospect GCC accounts. Existing direct competitors prove that GCC intelligence has demand but also make generic listing data hard to differentiate. The wedge must emphasize signal-level provenance, status transitions, workflow, and linked location/provider evidence.');
}
// 8 concept product UI
{
 const s=pptx.addSlide('LIGHT');header(s,'07 · The solution','One evidence-backed workspace—from a public signal to a decision.','Three connected layers: an event feed for what changed, a profile for what is true, and a workbench for what to do.');
 // mock application window
 card(s,.68,1.80,8.2,4.72,{fill:C.white,line:'D6E0E7'});rect(s,.68,1.80,8.2,.39,C.navy,{round:true,line:C.navy});circ(s,.87,1.94,.08,C.coral);circ(s,1.04,1.94,.08,'E9B75E');circ(s,1.21,1.94,.08,C.teal2);tx(s,'gccatlas.app / signals',1.52,1.89,2.3,.18,{fontSize:8,color:'D3E0E9'});tx(s,'GCC ATLAS',.91,2.39,1.2,.18,{fontSize:8,bold:true,charSpacing:1,color:C.teal});tx(s,'Signal monitor',.91,2.75,2.2,.34,{fontSize:18,bold:true,fontFace:'Aptos Display'});tx(s,'4 recent signals in the sample view',.92,3.12,3.2,.18,{fontSize:8.8,color:C.muted});
 const miniRows=[['Protolabs','New GCC · Hyderabad','200–300 employees planned','HIGH'],['Opella Healthcare','Expansion · Hyderabad','42,000 sq. ft. · ~500 roles planned','MED-HIGH'],['Tredence','AI / life sciences · Hyderabad','Scale-up plan reported','MED-HIGH'],['Citizens Financial × Cognizant','Centre launch · Hyderabad','BFSI technology mandate','HIGH']];
 miniRows.forEach((r,i)=>{let y=3.53+i*.54;line(s,.91,y+0.48,6.37,y+0.48,'E9EEF2',.6);tx(s,r[0],.95,y,2.0,.18,{fontSize:9.1,bold:true});tx(s,r[1],2.80,y,1.85,.18,{fontSize:7.8,color:C.body});tx(s,r[2],4.65,y,1.50,.27,{fontSize:7.4,color:C.muted});pill(s,r[3],6.33,y-.01,.75,i===0||i===3?C.tealSoft:C.amberSoft,i===0||i===3?C.teal:C.amber)});
 // right evidence panel inside mock
 rect(s,7.22,2.36,1.38,3.95,'F1F8F7',{round:true,line:'D4ECE6',lineTrans:0});tx(s,'EVIDENCE',7.37,2.63,1.0,.18,{fontSize:7.5,color:C.teal,bold:true,charSpacing:.8});tx(s,'92/100',7.37,3.02,.95,.3,{fontSize:20,bold:true,fontFace:'Aptos Display'});tx(s,'Source strength',7.37,3.33,.95,.16,{fontSize:7.7,color:C.muted});line(s,7.37,3.62,8.43,3.62,'D4E8E3',.7);tx(s,'STATUS',7.37,3.79,.84,.16,{fontSize:7.1,color:C.muted,bold:true});tx(s,'Planned',7.37,4.02,.95,.19,{fontSize:9,bold:true});tx(s,'CAVEAT',7.37,4.41,.84,.16,{fontSize:7.1,color:C.muted,bold:true});tx(s,'Headcount\nnot verified',7.37,4.65,1.01,.43,{fontSize:8.1,color:C.body});tx(s,'SOURCE ↗',7.37,5.45,.95,.16,{fontSize:7.5,color:C.teal,bold:true});
 // right narrative
 const points=[['01','Monitor','New setup, expansion, hiring, office and policy signals.'],['02','Verify','Entity resolution, status, confidence, source excerpt and change history.'],['03','Decide','Prioritised account lists, city comparisons and partner diligence briefs.']];
 points.forEach((p,i)=>{let y=2.0+i*1.35;circ(s,9.34,y+.02,.35,C.tealSoft);tx(s,p[0],9.34,y+.04,.35,.22,{fontSize:8.5,bold:true,color:C.teal,align:'center'});tx(s,p[1],9.86,y,2.4,.25,{fontSize:13,bold:true});tx(s,p[2],9.86,y+.34,2.55,.57,{fontSize:10.2,color:C.muted,valign:'top'});});
 card(s,9.34,6.05,3.35,.49,{fill:C.tealSoft,line:'D3EEE7'});tx(s,'AI drafts; sources make it auditable.',9.54,6.18,2.98,.17,{fontSize:10.2,bold:true,color:C.teal});
 addNote(s,'The prototype contains functional navigation, filters, signal details, source links, confidence/caveat display, city comparison, provider directory and a local AI research brief. A live model can be configured in the optional server using the operator’s own API key.');
}
// 9 position and competition
{
 const s=pptx.addSlide('LIGHT');header(s,'08 · Positioning','The category is forming. Do not pretend the whitespace is empty.','GCC intelligence products already exist. The defensible position is independent evidence quality + a joined decision workflow.');
 const comps=[['Consultant reports','Deep synthesis; periodic cadence','A one-off report, PDF and bespoke budget'],['Govt. / investment portals','Official policy and investment signals','State-by-state navigation; limited cross-city join-up'],['Real estate / talent datasets','Strong domain depth and specialist benchmarks','One slice of the operating decision'],['GCC intelligence platforms','Directories, signals and GTM intelligence','Direct competition; feature overlap is real'],['GCC ATLAS','Source-linked events + entity graph + decision workflows','Traceable facts, status history, missing-data prompts and independent ranking']];
 const xs=[.72,3.02,5.46,8.00,10.40],ws=[2.16,2.30,2.38,2.30,2.15];['ALTERNATIVE','STRENGTH','LIMITATION TO TEST','EXAMPLES','POSITION'].forEach((t,i)=>tx(s,t,xs[i],1.88,ws[i],.18,{fontSize:7.7,color:C.muted,bold:true,charSpacing:.7}));
 comps.forEach((r,i)=>{const y=2.20+i*.70;rect(s,.68,y,12.05,.58,i===4?C.tealSoft:(i%2===0?C.white:'F9FBFC'),{round:true,line:i===4?'BDE7DF':'E7EDF1',lineTrans:0,lineWidth:i===4?1:.5});r.forEach((v,j)=>tx(s,v,xs[j],y+.08,ws[j]-.06,.40,{fontSize:j===0?9.3:8.6,bold:j===0||i===4,color:j===0&&i===4?C.teal:C.body,valign:'mid'}));});
 tx(s,'Current direct-category examples (vendor-published positioning): Bamboo Reports, GCC Index, Sansovi GCC. Zinnov–Nasscom and JLL are essential primary market-intelligence sources—not just competitors.',.75,5.96,11.7,.45,{fontSize:9.7,color:C.ink,bold:true});
 tx(s,'Sources: S1–S4 and S6–S8. Capability statements are based on public websites; this is not a feature-by-feature independent audit.',.75,6.51,11.7,.23,{fontSize:8,color:C.muted,italic:true});
 addNote(s,'Competition checked against vendor pages as of October 2026: Bamboo Reports markets GCC GTM/account intelligence; GCC Index markets public-signal tracking; Sansovi offers a directory and profiles. ANSR is a GCC setup/operations provider. Do not claim “no competitors”; compete through evidence lineage, joined operating decisions and independent governance.');
}
// 10 data / AI
{
 const s=pptx.addSlide('LIGHT');header(s,'09 · How it works','AI should reduce research work—not become the source of truth.','Use automation where it is fast, deterministic controls where it matters, and human review for high-impact conflicts.');
 const stages=[{x:.73,w:2.18,num:'01',title:'INGEST',body:'Press releases\nGovernment portals\nPublic reports\nProvider pages',tool:'Connectors + scheduled fetch'},{x:3.13,w:2.18,num:'02',title:'EXTRACT',body:'Company / alias\nCity / unit / sector\nEvent / timing\nScale / quoted passage',tool:'LLM schema extraction'},{x:5.53,w:2.18,num:'03',title:'RESOLVE',body:'Entity linking\nDuplicate detection\nTime-series updates\nConflict flags',tool:'Rules + graph + review'},{x:7.93,w:2.18,num:'04',title:'EVIDENCE GRAPH',body:'Canonical entity IDs\nSource lineage\nConfidence rationale\nVersion history',tool:'Structured data layer'},{x:10.33,w:2.18,num:'05',title:'DELIVER',body:'Signal feed\nCity workbench\nAI research briefs\nProvider dossiers',tool:'Cited RAG + UX'}];
 stages.forEach((a,i)=>{card(s,a.x,2.05,a.w,2.5,{fill:i===3?C.navy:C.white,line:i===3?C.navy:C.line});pill(s,a.num,a.x+.14,2.22,.43,i===3?'2F5266':C.tealSoft,i===3?'9AF1E0':C.teal);tx(s,a.title,a.x+.14,2.68,a.w-.28,.22,{fontSize:9.5,bold:true,color:i===3?C.white:C.ink,charSpacing:.5});tx(s,a.body,a.x+.14,3.05,a.w-.26,.90,{fontSize:10,color:i===3?'DAE7EE':C.body,valign:'top'});tx(s,a.tool,a.x+.14,4.20,a.w-.26,.2,{fontSize:7.8,color:i===3?C.teal2:C.muted,bold:true});if(i<stages.length-1){line(s,a.x+a.w+.04,3.23,stages[i+1].x-.08,3.23,C.teal,1.2);tx(s,'›',a.x+a.w+.04,3.03,.18,.28,{fontSize:20,color:C.teal,bold:true,align:'center'})}});
 card(s,.73,4.98,12.0,1.12,{fill:'FFF2D9',line:'EFDDBB'});tx(s,'HUMAN-IN-THE-LOOP GATES',.98,5.19,2.35,.2,{fontSize:8.5,color:C.amber,bold:true,charSpacing:1});tx(s,'High-impact claims · low-confidence extraction · duplicate/alias conflicts · policy eligibility · provider outcome claims',3.45,5.15,8.76,.28,{fontSize:11.3,bold:true,color:C.ink});tx(s,'AI returns candidate facts and summaries with source pointers. The database stores the source, status, reviewer and change record.',.99,5.61,10.8,.22,{fontSize:10,color:C.body});
 tx(s,'Core model: Company → Indian entity → GCC → unit/site → signal/event → source excerpt → reviewer / change history.',.77,6.42,11.8,.28,{fontSize:11.2,color:C.teal,bold:true});
 addNote(s,'Production architecture is proposed, not implemented by the static demo: fetch/ingestion, structured extraction, entity resolution, evidence graph, human review and retrieval-augmented generation. The optional server demonstrates source-context injection for AI summaries, but the default demo remains deterministic and offline.');
}
// 11 Business model
{
 const s=pptx.addSlide('LIGHT');header(s,'10 · Business model','Make trusted market data easy to discover; charge for work it replaces.','Start with subscriptions tied to recurring workflow value. Add custom diligence and integrations only after the core graph is trusted.');
 const products=[
  {n:'PUBLIC LAYER',title:'Discover',price:'Free',body:['Basic GCC and city records','Source links and key definitions','Public signal highlights'],col:'EAF0FF',accent:C.blue},
  {n:'TEAM WORKSPACE',title:'Prioritise',price:'Paid subscription',body:['Saved searches and alerts','Segmented account / event lists','Evidence-backed AI briefs','Team notes and exports'],col:'E2F7F3',accent:C.teal},
  {n:'ENTERPRISE',title:'Integrate',price:'Custom',body:['API / bulk data access','Location and policy packs','Private watchlists & research','Governance / audit history'],col:'FFF2D9',accent:C.amber}
 ];
 products.forEach((p,i)=>{let x=.72+i*4.08;card(s,x,2.02,3.78,3.23,{fill:C.white,line:C.line});pill(s,p.n,x+.19,2.22,1.5,p.col,p.accent);tx(s,p.title,x+.19,2.72,2.7,.36,{fontSize:22,bold:true,fontFace:'Aptos Display'});tx(s,p.price,x+.19,3.18,2.8,.23,{fontSize:11,color:p.accent,bold:true});line(s,x+.19,3.58,x+3.57,3.58,C.line,.7);p.body.forEach((b,j)=>{circ(s,x+.22,3.84+j*.32,.09,p.accent);tx(s,b,x+.41,3.80+j*.32,3.05,.22,{fontSize:9.5,color:C.body})});});
 card(s,.72,5.62,7.54,.77,{fill:C.navy,line:C.navy});tx(s,'INITIAL REVENUE TEST',.97,5.83,1.9,.17,{fontSize:8.4,color:C.teal2,bold:true,charSpacing:1.1});tx(s,'Paid pilot with 5–10 GCC-facing service providers',2.93,5.79,4.88,.26,{fontSize:12,color:C.white,bold:true});
 card(s,8.52,5.62,3.98,.77,{fill:C.tealSoft,line:'D0EEE6'});tx(s,'TRUST GUARDRAIL',8.76,5.81,1.36,.16,{fontSize:8.2,color:C.teal,bold:true,charSpacing:.8});tx(s,'No pay-to-rank provider scores.',8.76,6.06,3.23,.18,{fontSize:10.4,color:C.ink,bold:true});
 tx(s,'Pricing and willingness-to-pay remain hypotheses; test against time-to-qualified-meeting, research hours saved and renewal—not click volume alone.',.75,6.63,11.75,.22,{fontSize:8.8,color:C.muted,italic:true});
 addNote(s,'Free public directory/market definitions build reach and correction loops. Provider-facing teams pay for alerts, segmentation, saved workspaces, exports and AI briefs. Later, corporate location diligence, custom research and APIs support larger contracts. Provider enhanced profiles may be paid but must be clearly labelled and must not change ranking.');
}
// 12 GTM roadmap
{
 const s=pptx.addSlide('LIGHT');header(s,'11 · GTM & validation','Prove trust and workflow value in 90 days—not market size by assertion.','The first milestone is not “2,000 records”. It is a small, accurate dataset that helps a buyer act faster.');
 const phases=[{x:.72,week:'DAYS 01–30',title:'Validate the pain',goal:'5–10 design partners',items:['Interview provider sales leaders','Observe current research workflow','Build 20 signal dossiers by hand','Baseline time-to-shortlist + errors'],accent:C.blue,fill:C.blueSoft},{x:4.79,week:'DAYS 31–60',title:'Ship the workflow',goal:'Usable private beta',items:['Entity / site / event schema','Signal feed + source lineage','Saved search + brief generation','Weekly correction / QA review'],accent:C.teal,fill:C.tealSoft},{x:8.86,week:'DAYS 61–90',title:'Test willingness to pay',goal:'Pilot conversion decision',items:['Run 3–5 live account workflows','Measure signal-to-meeting conversion','Test paid pilot / renewal intent','Prioritise city-policy expansion'],accent:C.amber,fill:C.amberSoft}];
 phases.forEach((p,i)=>{card(s,p.x,2.02,3.75,3.28,{fill:C.white,line:C.line});pill(s,p.week,p.x+.18,2.22,1.36,p.fill,p.accent);tx(s,p.title,p.x+.19,2.70,3.12,.33,{fontSize:17,bold:true,fontFace:'Aptos Display'});tx(s,p.goal,p.x+.19,3.13,3.0,.21,{fontSize:10.1,color:p.accent,bold:true});p.items.forEach((b,j)=>{circ(s,p.x+.21,3.58+j*.35,.1,p.accent);tx(s,b,p.x+.41,3.55+j*.35,3.0,.22,{fontSize:9.5,color:C.body})});if(i<2){line(s,p.x+3.81,3.66,p.x+4.01,3.66,C.teal,1.4);tx(s,'›',p.x+3.83,3.46,.18,.31,{fontSize:21,color:C.teal,bold:true,align:'center'})}});
 tx(s,'PILOT METRICS',.78,5.68,1.35,.19,{fontSize:8.4,color:C.teal,bold:true,charSpacing:1.2});
 const metrics=[['Coverage','% records with source + as-of date'],['Precision','% signals confirmed by reviewer'],['Freshness','median time from public release to capture'],['Value','research time saved + qualified meetings']];
 metrics.forEach((m,i)=>{let x=.78+i*3.0;tx(s,m[0],x,6.02,2.4,.21,{fontSize:11,bold:true});tx(s,m[1],x,6.30,2.58,.35,{fontSize:8.8,color:C.muted,valign:'top'});});
 tx(s,'Targets should be set after baseline measurement. “90% sourced” or “24-hour refresh” are targets to test—not existing performance claims.',.78,6.75,11.8,.18,{fontSize:8.2,color:C.muted,italic:true});
 addNote(s,'GTM experiment: first month discovers the true workflow, second month ships the narrow product and human QA loop, third month tests value with actual account work and paid pilots. Set target thresholds after baseline; do not present prototype performance as production metrics.');
}
// 13 exemplar workflow
{
 const s=pptx.addSlide('LIGHT');header(s,'12 · Example workflow','One public announcement becomes a qualified action—not another saved link.','Illustrative walkthrough using a public Protolabs announcement in Hyderabad. The planned scale is not treated as actual hiring.');
 const leftX=.72;card(s,leftX,2.00,3.15,3.65,{fill:C.white,line:C.line});pill(s,'STEP 1 · DETECT',leftX+.2,2.22,1.36,C.blueSoft,C.blue);tx(s,'Protolabs',leftX+.2,2.76,2.5,.34,{fontSize:22,bold:true,fontFace:'Aptos Display'});tx(s,'Planned Hyderabad GCC',leftX+.2,3.17,2.5,.22,{fontSize:11,bold:true,color:C.teal});tx(s,'200–300 employees (planned)',leftX+.2,3.55,2.55,.24,{fontSize:10.5,bold:true});tx(s,'Public source: Invest Telangana\nPublished 16 Apr 2026',leftX+.2,3.96,2.55,.47,{fontSize:9,color:C.muted});line(s,leftX+.2,4.62,leftX+2.95,4.62,C.line,.7);tx(s,'Capture URL + date + excerpt; normalise company, city, sector, event type and plan status.',leftX+.2,4.82,2.57,.55,{fontSize:10,color:C.body,valign:'top'});tx(s,'SOURCE ↗',leftX+.2,5.37,1.0,.16,{fontSize:8.2,color:C.teal,bold:true,hyperlink:{url:'https://invest.telangana.gov.in/hyderabad-emerging-as-global-hub-for-advanced-engineering-digital-manufacturing-minister-sridhar-babu/'}});
 line(s,4.02,3.70,4.56,3.70,C.teal,1.5);tx(s,'›',4.22,3.46,.2,.32,{fontSize:24,color:C.teal,bold:true,align:'center'});
 card(s,4.66,2.00,3.48,3.65,{fill:'F0F8F7',line:'D3EAE5'});pill(s,'STEP 2 · VERIFY',4.88,2.22,1.36,C.tealSoft,C.teal);tx(s,'What the evidence says',4.88,2.76,2.95,.31,{fontSize:16,bold:true,fontFace:'Aptos Display'});
 const vitems=[['Known','A planned GCC in Hyderabad'],['Reported scale','200–300 employees'],['Source type','State investment agency'],['Unknown','Launch date, role mix, realised headcount']];vitems.forEach((v,i)=>{let y=3.28+i*.45;tx(s,v[0].toUpperCase(),4.9,y,1.1,.17,{fontSize:7.6,color:C.muted,bold:true,charSpacing:.6});tx(s,v[1],6.02,y,1.88,.25,{fontSize:9.2,color:C.ink,bold:i===0});});tx(s,'Do not overstate a plan as an operating fact.',4.9,5.18,2.95,.19,{fontSize:9,color:C.amber,bold:true});
 line(s,8.26,3.70,8.78,3.70,C.teal,1.5);tx(s,'›',8.45,3.46,.2,.32,{fontSize:24,color:C.teal,bold:true,align:'center'});
 card(s,8.88,2.00,3.78,3.65,{fill:C.navy,line:C.navy});pill(s,'STEP 3 · ACT',9.1,2.22,1.12,'2C4A5D','9BEEDE');tx(s,'A provider-ready brief',9.1,2.76,3.06,.31,{fontSize:16,bold:true,color:C.white,fontFace:'Aptos Display'});tx(s,'Potential needs to investigate',9.1,3.24,2.8,.2,{fontSize:9.6,color:C.teal2,bold:true});['Engineering talent / specialist recruiting','Office and workspace options','Payroll, compliance and entity setup'].forEach((v,i)=>{circ(s,9.12,3.63+i*.38,.1,C.teal2);tx(s,v,9.33,3.59+i*.38,2.99,.24,{fontSize:9.4,color:'E2EBF2'});});line(s,9.1,4.92,12.35,4.92,'365268',.7);tx(s,'Next action',9.1,5.08,.95,.16,{fontSize:7.6,color:'9FB4C7',bold:true});tx(s,'Confirm status + roles before outreach.',10.12,5.06,2.25,.24,{fontSize:9.5,color:C.white,bold:true});
 card(s,.73,6.02,11.95,.48,{fill:C.tealSoft,line:'D1EEE7'});tx(s,'VALUE HYPOTHESIS',.95,6.17,1.45,.15,{fontSize:8.1,color:C.teal,bold:true,charSpacing:1});tx(s,'Better timing + relevant outreach + lower research effort. Measure it against current CRM / manual research.',2.62,6.12,9.58,.22,{fontSize:10.7,color:C.ink,bold:true});
 addNote(s,'This sample is grounded in the Invest Telangana page dated 16 April 2026, which reports Protolabs will establish a Hyderabad GCC scaling to 200–300 employees. It is an announced plan, not verified actual hiring. The provider-needs step is a hypothesis and should be qualified before outreach.');
}
// 14 source appendix
{
 const s=pptx.addSlide('LIGHT');header(s,'Appendix · source register','Claims are only as useful as their provenance.','Selected sources used in the market thesis, competitive landscape and prototype signal feed. All links are clickable.');
 const srcs=[
  ['S1','Nasscom–Zinnov, GCC Landscape in India 2026','2,117 GCCs; 3,728 units; $98.4B revenue; 2.36M professionals.','https://zinnov.com/centers-of-excellence/zinnov-nasscom-india-gcc-landscape-2026-report/'],
  ['S2','JLL, India GCC expansion hits record 31 million sq. ft. (17 Feb 2026)','2025 GCC leasing, city specialisation and tier-II observations.','https://www.jll.com/en-in/newsroom/india-s-gcc-expansion-hits-record-31-million'],
  ['S3','JLL, India office market 83.3 million sq. ft. in 2025 (15 Jan 2026)','Whole-market leasing; keep separate from GCC-only leasing.','https://www.jll.com/en-in/newsroom/india-s-office-market-scales-unprecedented-highs-with-gross-leasing-activity-at-83-3-million-sq-ft-for-the-year-2025-jll'],
  ['S4','KPMG India, GCCs in India: Key Tax Insights (25 Sep 2025)','FY2024 baseline and tax/regulatory context.','https://kpmg.com/in/en/insights/2025/09/gccs-in-india-key-tax-insights.html'],
  ['S5','CBRE India, GCC leasing crosses 29 mn sq. ft. in CY2024 (6 Jan 2025)','GCC leasing and Q4 city split; different time period from JLL FY2025.','https://www.cbre.co.in/press-releases/leasing-by-global-capability-centres-hits-an-all-time-high-crossing-29-mn-sq-ft-in-cy-2024'],
  ['S6','Gujarat Government, GCC Policy 2025–30','Official policy landing page; eligibility needs policy-level verification.','https://dst.gujarat.gov.in/Home/GujaratGlobalCapabilityCenter'],
  ['S7','Invest Telangana, Protolabs planned GCC (16 Apr 2026)','Signal-feed example; 200–300 employee scale reported as planned.','https://invest.telangana.gov.in/hyderabad-emerging-as-global-hub-for-advanced-engineering-digital-manufacturing-minister-sridhar-babu/'],
  ['S8','The Times of India, Hyderabad GCC announcements at BioAsia (17 Feb 2026)','Opella / Tredence plans; future footprint and hiring are not realised outcomes.','https://timesofindia.indiatimes.com/city/hyderabad/investments-in-hyderabad-gccs-vaccine-rd-facilities-announced-at-bioasia-2026/amp_articleshow/128470415.cms'],
  ['S9','Cognizant, Citizens Financial Group Hyderabad GCC announcement (15 Apr 2025)','Company newsroom source for an announced/ launched BFSI technology centre.','https://news.cognizant.com/Citizens-Financial-Group-Partners-with-Cognizant-to-Open-Global-Capability-Center-in-Hyderabad'],
  ['S10','Bamboo Reports, GCC GTM intelligence','Direct category competitor: account intelligence and sales workflows.','https://bambooreports.com/'],
  ['S11','GCC Index, product and methodology positioning','Direct category competitor: public-event capture and real-time intelligence claims.','https://gccindex.in/about'],
  ['S12','Sansovi GCC, directory and intelligence platform','Direct category competitor: GCC directory, profiles and vertical intelligence.','https://www.sansovi.com/gcc/'],
  ['S13','ANSR, GCC setup and operations','Provider profile: GCC-as-a-Service, BOT and lifecycle operations.','https://ansr.com/about-us/'],
  ['S14','Mercer, GCC Pay benchmarking','Specialist compensation benchmarking capability.','https://www.mercer.com/en-in/solutions/talent-and-rewards/GCCPay/']
 ];
 srcs.forEach((a,i)=>{const col=i<7?0:1;const idx=i<7?i:i-7;const x=col===0?.72:6.82;const y=1.80+idx*.64;circ(s,x,y+.07,.25,C.tealSoft);tx(s,a[0],x,y+.085,.25,.15,{fontSize:7.2,color:C.teal,bold:true,align:'center'});tx(s,a[1],x+.36,y,5.25,.20,{fontSize:9.1,bold:true,color:C.ink,hyperlink:{url:a[3]}});tx(s,a[2],x+.36,y+.23,5.25,.30,{fontSize:7.7,color:C.muted,valign:'top'});});
 line(s,.75,6.47,12.58,6.47,C.line,.7);tx(s,'Caveats: vendor capabilities and counts are vendor-published claims; press releases can describe plans rather than completed activity. GCC companies ≠ GCC units ≠ physical offices ≠ leasing volume. Market shares are tied to source definitions and publication dates.',.77,6.58,11.75,.34,{fontSize:8,color:C.muted,italic:true});
 addNote(s,'Full source list and URLs are shown in the source register and in the prototype Sources & Method section. The market thesis intentionally treats source disagreement as part of the product problem. The product should retain multiple claims with as-of dates and scope rather than silently harmonise them.');
}

pptx.writeFile({ fileName: '/mnt/data/gcc_atlas_submission/GCC_Atlas_Strategy_Deck.pptx' });
