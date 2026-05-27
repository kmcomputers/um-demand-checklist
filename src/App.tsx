import { useState, useEffect, useRef } from "react";

const BLU="#2c2d71",RED="#b12536",BG="#f6f6f6";
const SWATCHES={black:"#1a1a1a",navy:"#2e4080",grey:"#6b7280",gray:"#6b7280",charcoal:"#4a4a4a",natural:"#e3d6b8",cream:"#e3d6b8",tan:"#c9b48e",olive:"#565b34",white:"#f3f3f3",heather:"#9e9e9e",royal:"#2b4baa",sand:"#c4a882",forest:"#2d5a27"};
const SIZERANK={"YOUTHS":0,"YOUTHM":1,"YOUTHL":2,"XS":3,"S":4,"M":5,"L":6,"XL":7,"2XL":8,"XXL":9,"3XL":10,"XXXL":11,"4XL":12,"5XL":13};
const sw=(c: string|undefined)=>{if(!c)return"#bbb";const k=c.toLowerCase();for(const[n,v]of Object.entries(SWATCHES))if(k.includes(n))return v;return"#9e9e9e";};
const srank=(s: string|undefined)=>{const k=(s||"").toUpperCase().replace(/\s+/g,"");return(SIZERANK as Record<string,number>)[k]!==undefined?(SIZERANK as Record<string,number>)[k]:99;};

// ── Logo ───────────────────────────────────────────────────────────────────
function UMLogoFull({style}: {style?: React.CSSProperties}){
  return(
    <svg viewBox="0 0 1440 499.41" style={Object.assign({width:"100%",display:"block"},style||{})}>
      <path fill="#b02436" d="M7.89,373.04h28.24v74.67c0,11.61,5.54,18.36,16.63,18.36s16.46-6.76,16.46-18.36v-74.67h28.24v74.5c0,27.37-17.15,43.14-44.7,43.14s-44.87-15.77-44.87-43.14v-74.5Z"/>
      <path fill="#b02436" d="M140.54,422.11v66.53h-27.89v-115.56h28.59l33.26,63.24v-63.24h27.72v115.56h-26.51l-35.17-66.53Z"/>
      <path fill="#b02436" d="M220.76,373.08h28.07v115.56h-28.07v-115.56Z"/>
      <path fill="#b02436" d="M286.25,397.51h-24.78v-24.43h77.44v24.43h-24.6v91.13h-28.07v-91.13Z"/>
      <path fill="#b02436" d="M351.56,373.08h69.65v24.08h-41.58v20.79h40.37v24.08h-40.37v22.52h41.58v24.08h-69.65v-115.56Z"/>
      <path fill="#b02436" d="M436.63,373.08h40.54c32.92,0,52.15,23.56,52.15,57.87s-19.06,57.69-52.15,57.69h-40.54v-115.56ZM477.17,464.21c14.9,0,23.56-13.17,23.56-33.26,0-21.31-8.14-33.44-23.56-33.44h-12.47v66.7h12.47Z"/>
      <path fill="#2d2c71" d="M629.11,414.66l-23.56,73.98h-11.95l-23.22-73.98v73.98h-27.55v-115.56h37.25l19.58,63.24,19.75-63.24h36.9v115.56h-27.2v-73.98Z"/>
      <path fill="#2d2c71" d="M674.67,373.08h69.65v24.08h-41.58v20.79h40.37v24.08h-40.37v22.52h41.58v24.08h-69.65v-115.56Z"/>
      <path fill="#2d2c71" d="M798.2,448.79h-10.4v39.85h-28.07v-115.56h47.13c22.52,0,36.9,16.29,36.9,37.6,0,19.58-10.05,29.45-18.71,33.26l19.58,44.7h-31.19l-15.25-39.85ZM802.54,397.16h-14.73v27.55h14.73c7.45,0,12.82-5.37,12.82-13.69s-5.37-13.86-12.82-13.86Z"/>
      <path fill="#2d2c71" d="M854.16,430.95c0-35.34,19.58-59.77,50.42-59.77,24.95,0,35.86,16.11,41.41,30.32l-23.04,9.88c-2.95-9.01-9.18-15.42-18.36-15.42-13.69,0-21.83,14.73-21.83,35s8.14,35,21.83,35c9.36,0,15.77-7.28,18.36-16.63l23.22,9.88c-5.37,14.21-16.46,31.53-41.58,31.53-30.84,0-50.42-24.6-50.42-59.77Z"/>
      <path fill="#2d2c71" d="M1019.45,441.52h-33.61v47.13h-28.07v-115.56h28.07v43.83h33.61v-43.83h28.07v115.56h-28.07v-47.13Z"/>
      <path fill="#2d2c71" d="M1079.74,459.71c8.32,0,15.42,7.1,15.42,15.42s-7.1,15.42-15.42,15.42-15.59-6.93-15.59-15.42,7.1-15.42,15.59-15.42Z"/>
      <path fill="#2d2c71" d="M1106.94,430.95c0-35.34,19.58-59.77,50.42-59.77,24.95,0,35.86,16.11,41.41,30.32l-23.04,9.88c-2.95-9.01-9.18-15.42-18.36-15.42-13.69,0-21.83,14.73-21.83,35s8.14,35,21.83,35c9.36,0,15.77-7.28,18.36-16.63l23.22,9.88c-5.37,14.21-16.46,31.53-41.58,31.53-30.84,0-50.42-24.6-50.42-59.77Z"/>
      <path fill="#2d2c71" d="M1256.11,371.17c31.19,0,50.42,24.95,50.42,59.77s-19.23,59.77-50.42,59.77-50.42-24.95-50.42-59.77,19.23-59.77,50.42-59.77ZM1256.11,395.95c-14.03,0-21.83,14.9-21.83,35s7.8,35,21.83,35,22-15.07,22-35-7.8-35-22-35Z"/>
      <path fill="#2d2c71" d="M1404.91,414.66l-23.56,73.98h-11.95l-23.22-73.98v73.98h-27.55v-115.56h37.25l19.58,63.24,19.75-63.24h36.9v115.56h-27.2v-73.98Z"/>
      <polygon fill="#b02436" points="633.9 202.77 621.26 241.66 458.38 241.68 413.15 202.79 633.9 202.77"/>
      <polygon fill="#b02436" points="609.17 278.82 596.52 317.71 546.86 317.71 501.63 278.84 609.17 278.82"/>
      <polygon fill="#b02436" points="520.27 126.73 324.66 126.75 369.9 165.63 578.37 165.61 520.27 126.73"/>
      <polygon fill="#b02436" points="806.1 202.77 818.74 241.66 981.62 241.68 1026.85 202.79 806.1 202.77"/>
      <polygon fill="#b02436" points="830.83 278.82 843.48 317.71 893.14 317.71 938.37 278.84 830.83 278.82"/>
      <polygon fill="#b02436" points="919.74 126.73 1115.34 126.75 1070.1 165.63 861.63 165.61 919.74 126.73"/>
      <polygon fill="#2d2c71" points="719.85 8.69 758.2 126.73 882.32 126.73 781.91 199.68 820.26 317.71 719.85 244.76 619.44 317.71 657.8 199.68 557.39 126.73 681.5 126.73 719.85 8.69"/>
    </svg>
  );
}

// ── Shared storage (server-side — syncs across all devices) ───────────────
const sg=async(k: string)=>{try{const r=await fetch('/api/store/'+k);const d=await r.json();return d.value?JSON.parse(d.value):null;}catch{return null;}};
const ss=async(k: string,v: unknown)=>{try{await fetch('/api/store/'+k,{method:'PUT',headers:{'Content-Type':'text/plain'},body:JSON.stringify(v)});}catch{}};

// ── Shopify CSV parser ─────────────────────────────────────────────────────
function _csvRows(txt: string){
  const rows: string[][]=[];let row: string[]=[],f='',q=false;
  for(let i=0;i<txt.length;i++){
    const c=txt[i],n=txt[i+1];
    if(q){if(c==='"'&&n==='"'){f+='"';i++;}else if(c==='"'){q=false;}else f+=c;}
    else if(c==='"'){q=true;}
    else if(c===','){row.push(f);f='';}
    else if(c==='\n'||(c==='\r'&&n==='\n')){if(c==='\r')i++;row.push(f);f='';if(row.some(x=>x.trim()))rows.push(row);row=[];}
    else if(c==='\r'){row.push(f);f='';if(row.some(x=>x.trim()))rows.push(row);row=[];}
    else f+=c;
  }
  if(row.length){row.push(f);if(row.some(x=>x.trim()))rows.push(row);}
  return rows;
}
const COLOR_NORM: Record<string,string>={nat:'Natural',natural:'Natural',blk:'Black',black:'Black',wht:'White',white:'White',nvy:'Navy',navy:'Navy',gry:'Grey',grey:'Grey',gray:'Grey',olv:'Olive',olive:'Olive',hthr:'Heather',heather:'Heather',red:'Red',sand:'Sand',tan:'Tan',cream:'Natural',charcoal:'Charcoal',forest:'Forest Green',royal:'Royal Blue'};
function _nc(s: string){const k=(s||'').trim().toLowerCase();return COLOR_NORM[k]||(s||'Unknown').trim();}
function parseShopifyCSV(csvText: string){
  const rows=_csvRows(csvText);
  if(rows.length<2)throw new Error("CSV appears empty or unreadable.");
  const hdrs=rows[0].map(h=>h.trim().toLowerCase());
  const gi=(name: string)=>hdrs.indexOf(name.toLowerCase());
  const gv=(row: string[],name: string)=>{const i=gi(name);return(i>=0&&i<row.length?row[i]||'':'').trim();};
  const orderMap: Record<string,{id:string,orderNumber:string,customerName:string,lineItems:LineItem[]}> = {};let lastNum='';
  for(let i=1;i<rows.length;i++){
    const row=rows[i];
    const rawNum=gv(row,'name');
    const num=rawNum||lastNum;
    if(!num)continue;
    if(rawNum)lastNum=rawNum;
    if(!orderMap[num]){orderMap[num]={id:num,orderNumber:num,customerName:gv(row,'billing name')||gv(row,'shipping name')||'',lineItems:[]};}
    const liName=gv(row,'lineitem name');
    const liQty=parseInt(gv(row,'lineitem quantity'))||0;
    if(!liName||liQty<=0)continue;
    let productTitle=liName,variantTitle='';
    const di=liName.lastIndexOf(' - ');
    if(di>0){productTitle=liName.slice(0,di).trim();variantTitle=liName.slice(di+3).trim();}
    let size='?',color='Unknown';
    if(variantTitle){variantTitle.split('/').map(p=>p.trim()).forEach(function(p){const k=p.toUpperCase().replace(/\s+/g,'');if((SIZERANK as Record<string,number>)[k]!==undefined)size=k;else color=_nc(p);});}
    const si2=productTitle.indexOf(' / ');
    const designName=si2>0?productTitle.slice(0,si2).trim():productTitle;
    orderMap[num].lineItems.push({id:num+'_'+i,productTitle,variantTitle,size,color,designName,quantity:liQty});
  }
  const orders=Object.values(orderMap).filter(o=>o.lineItems.length>0);
  if(!orders.length)throw new Error("No line items found in CSV. Export with line item columns included.");
  return{orders,dataQualityIssues:[],totalUnits:orders.reduce((s,o)=>s+o.lineItems.reduce((ss,li)=>ss+li.quantity,0),0)};
}

// ── Types ──────────────────────────────────────────────────────────────────
interface LineItem{id:string;productTitle:string;variantTitle:string;size:string;color:string;designName:string;quantity:number;}
interface Order{id:string;orderNumber:string;customerName:string;lineItems:LineItem[];}
interface Blank{key:string;color:string;size:string;qty:number;}
interface Transfer{key:string;design:string;qty:number;}
interface TransferByOrder{key:string;design:string;qty:number;orderNumber:string;customerName:string;}
interface PrintUnit{uid:string;orderNumber:string;customerName:string;color:string;size:string;design:string;productTitle:string;variantTitle:string;}
interface PackItem{key:string;productTitle:string;variantTitle:string;color:string;size:string;design:string;}
interface PackOrder{orderNumber:string;customerName:string;items:PackItem[];}
interface Results{blanks:Blank[];transfers:Transfer[];transfersByOrder:TransferByOrder[];printQueue:PrintUnit[];packOrders:PackOrder[];totalUnits:number;}

// ── Data processing ────────────────────────────────────────────────────────
function processOrders(orders: Order[]): Results{
  const bm: Record<string,Blank>={},tm: Record<string,Transfer>={},units: PrintUnit[]=[];
  for(const o of orders){
    for(const it of o.lineItems){
      const qty=Number(it.quantity)||1,col=(it.color||"Unknown").trim(),sz=(it.size||"?").trim().toUpperCase().replace(/\s+/g,""),des=(it.designName||it.productTitle||"?").trim();
      const bk=col.toLowerCase()+"|"+sz;
      bm[bk]=bm[bk]||{key:bk,color:col,size:sz,qty:0};bm[bk].qty+=qty;
      tm[des]=tm[des]||{key:des,design:des,qty:0};tm[des].qty+=qty;
      for(let i=0;i<qty;i++) units.push({uid:o.orderNumber+"||"+it.productTitle+"||"+it.variantTitle+"||"+i,orderNumber:o.orderNumber,customerName:o.customerName||"",color:col,size:sz,design:des,productTitle:it.productTitle,variantTitle:it.variantTitle});
    }
  }
  const blanks=Object.values(bm).sort((a,b)=>{const sr=srank(a.size)-srank(b.size);return sr!==0?sr:a.color.localeCompare(b.color);});
  const transfers=Object.values(tm).sort((a,b)=>b.qty-a.qty);
  const transfersByOrder: TransferByOrder[]=[];
  for(const o of orders){
    for(const it of o.lineItems){
      const qty=Number(it.quantity)||1;
      const des=(it.designName||it.productTitle||"?").trim();
      transfersByOrder.push({key:"tx||"+o.orderNumber+"||"+des,design:des,qty,orderNumber:o.orderNumber,customerName:o.customerName||""});
    }
  }
  transfersByOrder.sort((a,b)=>{const oc=a.orderNumber.localeCompare(b.orderNumber);return oc!==0?oc:a.design.localeCompare(b.design);});
  const printQueue=[...units].sort((a,b)=>{const cc=a.color.localeCompare(b.color);if(cc)return cc;const sc=srank(a.size)-srank(b.size);if(sc)return sc;return a.design.localeCompare(b.design);});
  const pm: Record<string,PackOrder>={};
  for(const o of orders){
    pm[o.orderNumber]=pm[o.orderNumber]||{orderNumber:o.orderNumber,customerName:o.customerName||"",items:[]};
    for(const it of o.lineItems){const iq=Number(it.quantity)||1;for(let qi=0;qi<iq;qi++)pm[o.orderNumber].items.push({key:"pk||"+o.orderNumber+"||"+it.productTitle+"||"+it.variantTitle+"||"+qi,productTitle:it.productTitle,variantTitle:it.variantTitle,color:(it.color||"?").trim(),size:(it.size||"?").trim().toUpperCase(),design:(it.designName||it.productTitle||"?").trim()});}
  }
  return{blanks,transfers,transfersByOrder,printQueue,packOrders:Object.values(pm),totalUnits:units.length};
}

// ── API parser ─────────────────────────────────────────────────────────────
const BASE_SYS="You are a fulfillment parser for United Merch (POD apparel). Output ONLY raw valid JSON—no markdown, no fences.\nRULES:\n1. Use PRODUCT TITLE + variant. SKUs unreliable.\n2. designName: strip color after ' / '.\n3. Normalize colors: Nat->Natural,BLK->Black,WHT->White,NVY->Navy,GRY->Grey,OLV->Olive.\n4. Extract size from variant.\n5. Flag SKU mismatches in dataQualityIssues.\nSchema:{\"orders\":[{\"id\":\"\",\"orderNumber\":\"#XXXX\",\"customerName\":\"\",\"lineItems\":[{\"id\":\"\",\"productTitle\":\"\",\"variantTitle\":\"\",\"size\":\"\",\"color\":\"\",\"designName\":\"\",\"quantity\":1}]}],\"dataQualityIssues\":[],\"totalUnits\":0}";

async function parseInput(iVal: string,image: {base64:string;mediaType:string;name:string;isPdf:boolean}|null,customInstr: string,setMsg: (m:string)=>void){
  const sys=BASE_SYS+(customInstr?"\n\nADDITIONAL USER INSTRUCTIONS:\n"+customInstr:"");
  if(!image&&iVal){
    const fl=iVal.split('\n')[0].toLowerCase();
    if(fl.includes('lineitem')||fl.includes('line item')||fl.includes('financial status')){
      setMsg("Parsing Shopify CSV…");
      return parseShopifyCSV(iVal);
    }
  }
  if(image){
    setMsg(image.isPdf?"Reading PDF…":"Analyzing screenshot…");
    const contentBlock=image.isPdf
      ?{type:"document",source:{type:"base64",media_type:"application/pdf",data:image.base64}}
      :{type:"image",source:{type:"base64",media_type:image.mediaType,data:image.base64}};
    const prompt=image.isPdf
      ?"This PDF contains packing slips and/or shipping labels. Extract every order's line items including product name, size, color, and quantity. Return structured JSON."
      :"Parse all orders visible in this screenshot. Return structured JSON.";
    const res=await fetch("/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:4096,system:sys,messages:[{role:"user",content:[contentBlock,{type:"text",text:prompt}]}]})});
    if(!res.ok)throw new Error("API "+res.status);
    const data=await res.json();setMsg("Processing…");
    const texts=(data.content as {type:string;text:string}[]).filter(b=>b.type==="text").map(b=>b.text);
    for(let i=texts.length-1;i>=0;i--){const t=texts[i].replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();const s=t.indexOf("{"),e=t.lastIndexOf("}");if(s>=0&&e>s){try{return JSON.parse(t.slice(s,e+1));}catch{}}}
    throw new Error("Could not parse orders from file.");
  }
  setMsg("Parsing order data…");
  const res=await fetch("/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:4096,system:sys,messages:[{role:"user",content:"Parse these orders:\n\n"+iVal}]})});
  if(!res.ok)throw new Error("API "+res.status);
  const data=await res.json();setMsg("Processing…");
  const texts=(data.content as {type:string;text:string}[]).filter(b=>b.type==="text").map(b=>b.text);
  for(let i=texts.length-1;i>=0;i--){const t=texts[i].replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();const s=t.indexOf("{"),e=t.lastIndexOf("}");if(s>=0&&e>s){try{return JSON.parse(t.slice(s,e+1));}catch{}}}
  throw new Error("No structured data found.");
}

const SAMPLE={orders:[{id:"s1",orderNumber:"#3263",customerName:"John Smith",lineItems:[{id:"a1",productTitle:"250 Heritage Flag",variantTitle:"XL / Natural",size:"XL",color:"Natural",designName:"250 Heritage Flag",quantity:1},{id:"a2",productTitle:"Eagle Pride",variantTitle:"M / Black",size:"M",color:"Black",designName:"Eagle Pride",quantity:2}]},{id:"s2",orderNumber:"#3264",customerName:"Jane Doe",lineItems:[{id:"b1",productTitle:"Americana Stars",variantTitle:"L / Navy",size:"L",color:"Navy",designName:"Americana Stars",quantity:1},{id:"b2",productTitle:"250 Heritage Flag",variantTitle:"S / Natural",size:"S",color:"Natural",designName:"250 Heritage Flag",quantity:1}]},{id:"s3",orderNumber:"#3265",customerName:"Mike Johnson",lineItems:[{id:"c1",productTitle:"Liberty Bold",variantTitle:"XL / White",size:"XL",color:"White",designName:"Liberty Bold",quantity:1},{id:"c2",productTitle:"Eagle Pride",variantTitle:"L / Black",size:"L",color:"Black",designName:"Eagle Pride",quantity:1}]},{id:"s4",orderNumber:"#3266",customerName:"Sarah Williams",lineItems:[{id:"d1",productTitle:"Stars & Stripes Forever",variantTitle:"2XL / Navy",size:"2XL",color:"Navy",designName:"Stars & Stripes Forever",quantity:1},{id:"d2",productTitle:"250 Heritage Flag",variantTitle:"L / Natural",size:"L",color:"Natural",designName:"250 Heritage Flag",quantity:2}]}],dataQualityIssues:[],totalUnits:10};

// ── Shared UI ──────────────────────────────────────────────────────────────
function Toast({msg}: {msg:string|null}){return msg?<div style={{position:"fixed",bottom:20,right:20,background:BLU,color:"#fff",padding:"9px 16px",borderRadius:8,fontSize:12,zIndex:9999,boxShadow:"0 2px 12px rgba(0,0,0,.2)",pointerEvents:"none"}}>{"✓ "+msg}</div>:null;}
function Spinner(){return(<div><style>{"@keyframes sp{to{transform:rotate(360deg)}}"}</style><div style={{width:44,height:44,border:"3px solid #e8e8e8",borderTop:"3px solid "+RED,borderRadius:"50%",margin:"0 auto",animation:"sp .7s linear infinite"}}/></div>);}
function PBarR({pct,h,bg}: {pct:number;h?:number;bg?:string}){return(<div style={{background:bg||"#e0e0e0",borderRadius:3,height:h||4,overflow:"hidden"}}><div style={{width:Math.min(100,pct||0)+"%",background:RED,height:"100%",borderRadius:3,transition:"width .3s"}}/></div>);}
function Swatch({color,size}: {color:string;size?:number}){const sz=size||16,bg=sw(color);return <div style={{width:sz,height:sz,borderRadius:"50%",background:bg,flexShrink:0,border:(bg==="#f3f3f3"||bg==="#e3d6b8")?"1.5px solid #ccc":"1.5px solid rgba(0,0,0,.1)",boxSizing:"border-box"}} title={color}/>;}
const SZCOL: Record<string,string>={"XS":"#4f46e5","S":"#059669","M":"#0284c7","L":"#d97706","XL":"#e11d48","2XL":"#7c3aed","XXL":"#7c3aed","3XL":"#0f766e","XXXL":"#0f766e","4XL":"#ea580c","5XL":"#475569","YOUTHS":"#4338ca","YOUTHM":"#0369a1","YOUTHL":"#15803d"};
function SzBadge({size}: {size:string}){const s=(size||"?").toUpperCase().replace(/\s+/g,"");const bg=SZCOL[s]||BLU;return <span style={{background:bg,color:"#fff",fontSize:10,fontWeight:700,padding:"2px 6px",borderRadius:3,fontFamily:"Oswald,sans-serif",letterSpacing:.5,flexShrink:0}}>{size||"?"}</span>;}
function CkBox({checked}: {checked:boolean}){return(<div style={{width:18,height:18,borderRadius:3,flexShrink:0,border:"2px solid "+(checked?RED:"#ccc"),background:checked?RED:"#fff",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .1s"}}>{checked&&<span style={{color:"#fff",fontSize:10,fontWeight:800,lineHeight:1}}>✓</span>}</div>);}
function CkRow({id,checked,onToggle,children}: {id:string;checked:boolean;onToggle:(id:string)=>void;children:React.ReactNode}){return(<div onClick={()=>onToggle(id)} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 14px",borderBottom:"1px solid #ebebeb",background:checked?"#eef5ee":"#fff",cursor:"pointer",transition:"background .12s"}}><CkBox checked={checked}/>{children}</div>);}
function GrpHdr({title,checked,total,open,onToggle}: {title:string;checked:number;total:number;open:boolean;onToggle:()=>void}){
  const pct=total>0?Math.round(checked/total*100):0;
  return(<div onClick={onToggle} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",background:"#eaecf0",color:BLU,cursor:"pointer",userSelect:"none"}}>
    <span style={{fontFamily:"Oswald,sans-serif",fontWeight:700,fontSize:13,letterSpacing:1,flex:1,textTransform:"uppercase"}}>{title}</span>
    <span style={{fontSize:11,opacity:.7}}>{checked+"/"+total}</span>
    <div style={{width:60}}><PBarR pct={pct} h={3} bg="#d0d4dc"/></div>
    <span style={{fontSize:11,opacity:.5}}>{open?"▲":"▼"}</span>
  </div>);
}
function TabToolbar({onCollapseAll,onReset}: {onCollapseAll:()=>void;onReset:()=>void}){return(<div style={{display:"flex",justifyContent:"flex-end",padding:"7px 14px 4px",gap:6,borderBottom:"1px solid #e8e8e8",background:"#fff"}}><button onClick={onCollapseAll} style={{fontSize:11,color:"#555",background:"none",border:"1px solid #ccc",padding:"3px 9px",borderRadius:4,cursor:"pointer"}}>Collapse All</button><button onClick={onReset} style={{fontSize:11,color:RED,background:"none",border:"1px solid "+RED,padding:"3px 9px",borderRadius:4,cursor:"pointer"}}>Reset Tab</button></div>);}

// ── Demand Tab ─────────────────────────────────────────────────────────────
function DemandTab({blanks,transfersByOrder,stock,checks,toggle,collapsed,onToggle,onCollapseAll,onReset}: {blanks:Blank[];transfers:Transfer[];transfersByOrder:TransferByOrder[];stock:Record<string,number>;checks:Record<string,boolean>;toggle:(id:string)=>void;collapsed:Record<string,boolean>;onToggle:(k:string)=>void;onCollapseAll:()=>void;onReset:()=>void}){
  const sorted=[...blanks].sort((a,b)=>{const sr=srank(a.size)-srank(b.size);return sr!==0?sr:a.color.localeCompare(b.color);});
  const bUnits=sorted.reduce((s,b)=>s+b.qty,0),bCheckedUnits=sorted.filter(b=>checks[b.key]).reduce((s,b)=>s+b.qty,0);
  const tUnits=transfersByOrder.reduce((s,t)=>s+t.qty,0),tCheckedUnits=transfersByOrder.filter(t=>checks[t.key]).reduce((s,t)=>s+t.qty,0);
  const hs=stock&&Object.keys(stock).length>0;
  return(<div>
    <TabToolbar onCollapseAll={onCollapseAll} onReset={onReset}/>
    <GrpHdr title={"Blanks ("+bUnits+" units)"} checked={bCheckedUnits} total={bUnits} open={!collapsed.blanks} onToggle={()=>onToggle("blanks")}/>
    {!collapsed.blanks&&sorted.map(b=>{
      const hv=hs?(stock[b.key]||0):null,short=hv!==null?Math.max(0,b.qty-hv):null;
      return(<CkRow key={b.key} id={b.key} checked={!!checks[b.key]} onToggle={toggle}>
        <Swatch color={b.color}/>
        {hv!==null?(<div style={{textAlign:"left",fontSize:12,lineHeight:1.5,marginRight:8}}><span style={{color:"#555"}}>need </span><b style={{color:BLU}}>{b.qty}</b><span style={{color:"#888"}}> / have </span><b style={{color:hv>=b.qty?"#2a8a4a":RED}}>{hv}</b>{short!==null&&short>0&&<span><span style={{color:"#888"}}> → pull </span><b style={{color:RED}}>{short}</b></span>}<div style={{marginTop:2}}><span style={{background:short!==null&&short>0?RED:"#2a8a4a",color:"#fff",fontSize:10,padding:"1px 7px",borderRadius:10,fontWeight:700}}>{short!==null&&short>0?"SHORT "+short:"IN STOCK"}</span></div></div>):(<span style={{fontFamily:"Oswald,sans-serif",fontSize:18,fontWeight:700,color:BLU,marginRight:8}}>{b.qty}</span>)}
        <div style={{flex:1,fontSize:13}}><span style={{fontWeight:600,color:BLU}}>{b.color}</span>{"  "}<SzBadge size={b.size}/></div>
      </CkRow>);
    })}
    <div style={{marginTop:6}}>
      <GrpHdr title={"Transfers ("+tUnits+" units)"} checked={tCheckedUnits} total={tUnits} open={!collapsed.transfers} onToggle={()=>onToggle("transfers")}/>
      {!collapsed.transfers&&transfersByOrder.map(t=>(<CkRow key={t.key} id={t.key} checked={!!checks[t.key]} onToggle={toggle}>
        <div style={{width:18,height:18,borderRadius:3,background:"#f0eeee",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#888",border:"1px solid #e0e0e0"}}>★</div>
        <span style={{fontFamily:"Oswald,sans-serif",fontSize:18,fontWeight:700,color:BLU,marginRight:8,flexShrink:0}}>{t.qty}</span>
        <div style={{flex:1,fontSize:13,fontWeight:500,color:BLU,paddingRight:8}}>{t.design}</div>
        <span style={{fontSize:10,color:"#bbb",flexShrink:0}}>{t.orderNumber}</span>
      </CkRow>))}
    </div>
  </div>);
}

// ── Print Tab ──────────────────────────────────────────────────────────────
function PrintTab({units,checks,toggle,collapsed,onToggle,onCollapseAll,onReset}: {units:PrintUnit[];checks:Record<string,boolean>;toggle:(id:string)=>void;collapsed:Record<string,boolean>;onToggle:(k:string)=>void;onCollapseAll:()=>void;onReset:()=>void}){
  const cm: Record<string,PrintUnit[]>={};for(const u of units){cm[u.color]=cm[u.color]||[];cm[u.color].push(u);}
  const colors=Object.keys(cm).sort();
  return(<div>
    <TabToolbar onCollapseAll={onCollapseAll} onReset={onReset}/>
    {colors.map(color=>{
      const grp=cm[color],gc=grp.filter(u=>checks[u.uid]).length,ck="printColor_"+color,open=!collapsed[ck];
      return(<div key={color} style={{marginBottom:3}}>
        <div onClick={()=>onToggle(ck)} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 14px",background:"#eaecf0",borderLeft:"5px solid "+sw(color),cursor:"pointer",userSelect:"none"}}>
          <Swatch color={color} size={20}/>
          <span style={{fontFamily:"Oswald,sans-serif",fontWeight:700,fontSize:13,color:BLU,flex:1,textTransform:"uppercase",letterSpacing:.8}}>{color}</span>
          <span style={{fontSize:11,color:"#777"}}>{gc+"/"+grp.length}</span>
          <div style={{width:50}}><PBarR pct={grp.length>0?gc/grp.length*100:0} h={3}/></div>
          <span style={{fontSize:11,color:"#aaa"}}>{open?"▲":"▼"}</span>
        </div>
        {open&&grp.map(u=>(<CkRow key={u.uid} id={u.uid} checked={!!checks[u.uid]} onToggle={toggle}>
          <SzBadge size={u.size}/>
          <div style={{flex:1,minWidth:0}}><div style={{fontSize:12,fontWeight:600,color:BLU,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{u.design}</div>{u.variantTitle&&<div style={{fontSize:10,color:"#bbb",marginTop:1}}>{u.variantTitle}</div>}</div>
          <span style={{fontSize:10,color:"#bbb",flexShrink:0}}>{u.orderNumber}</span>
        </CkRow>))}
      </div>);
    })}
  </div>);
}

// ── Pack Tab ───────────────────────────────────────────────────────────────
function PackTab({orders,checks,toggle,collapsed,onToggle,onCollapseAll,onReset}: {orders:PackOrder[];checks:Record<string,boolean>;toggle:(id:string)=>void;collapsed:Record<string,boolean>;onToggle:(k:string)=>void;onCollapseAll:()=>void;onReset:()=>void}){
  const packed=orders.filter(o=>o.items.length>0&&o.items.every(i=>checks[i.key])).length;
  return(<div>
    <div style={{display:"flex",justifyContent:"space-between",padding:"7px 14px 4px",borderBottom:"1px solid #e8e8e8",background:"#fff",alignItems:"center"}}>
      <span style={{fontSize:12,color:"#888"}}><b style={{color:packed===orders.length&&orders.length>0?"#2a8a4a":BLU}}>{packed}</b>{"/"+orders.length+" orders packed"}</span>
      <div style={{display:"flex",gap:6}}><button onClick={onCollapseAll} style={{fontSize:11,color:"#555",background:"none",border:"1px solid #ccc",padding:"3px 9px",borderRadius:4,cursor:"pointer"}}>Collapse All</button><button onClick={onReset} style={{fontSize:11,color:RED,background:"none",border:"1px solid "+RED,padding:"3px 9px",borderRadius:4,cursor:"pointer"}}>Reset Tab</button></div>
    </div>
    {orders.map(o=>{
      const ck="collapseOrder_"+o.orderNumber,done=o.items.filter(i=>checks[i.key]).length,all=o.items.length>0&&done===o.items.length,open=!collapsed[ck];
      return(<div key={o.orderNumber} style={{marginBottom:3}}>
        <div onClick={()=>onToggle(ck)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:all?"#e8f5e9":"#eaecf0",borderLeft:"4px solid "+(all?"#2a8a4a":BLU),cursor:"pointer"}}>
          <div style={{width:18,height:18,borderRadius:"50%",flexShrink:0,background:all?"#2a8a4a":BLU,display:"flex",alignItems:"center",justifyContent:"center"}}>{all&&<span style={{color:"#fff",fontSize:11,fontWeight:700}}>✓</span>}</div>
          <div style={{flex:1}}><div style={{fontFamily:"Oswald,sans-serif",fontWeight:700,fontSize:13,color:all?"#2a8a4a":BLU}}>{o.orderNumber}</div>{o.customerName&&<div style={{fontSize:11,color:"#888",marginTop:1}}>{o.customerName}</div>}</div>
          <div style={{textAlign:"right"}}><div style={{fontSize:11,color:"#999"}}>{done+"/"+o.items.length}</div><div style={{width:40,marginTop:3}}><PBarR pct={o.items.length>0?done/o.items.length*100:0} h={3}/></div></div>
          <span style={{fontSize:11,color:"#aaa"}}>{open?"▲":"▼"}</span>
        </div>
        {open&&o.items.map(item=>(<CkRow key={item.key} id={item.key} checked={!!checks[item.key]} onToggle={toggle}>
          <Swatch color={item.color}/>
          <div style={{flex:1}}><div style={{fontSize:12,fontWeight:600,color:BLU}}>{item.design}</div><div style={{fontSize:11,color:"#aaa",marginTop:2,display:"flex",alignItems:"center",gap:5}}><span>{item.color}</span><span>·</span><SzBadge size={item.size}/></div></div>
        </CkRow>))}
      </div>);
    })}
  </div>);
}

// ── Screens ────────────────────────────────────────────────────────────────
function LoadScreen({msg}: {msg:string}){
  return(<div style={{fontFamily:"Roboto,sans-serif",background:BG,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Oswald:wght@700&display=swap"/>
    <div style={{background:"#fff",padding:36,borderRadius:12,boxShadow:"0 4px 24px rgba(0,0,0,.08)",textAlign:"center",minWidth:280}}>
      <div style={{maxWidth:240,margin:"0 auto 20px"}}><UMLogoFull/></div>
      <Spinner/>
      <div style={{color:"#777",fontSize:12,marginTop:18,minHeight:18}}>{msg||"Working…"}</div>
    </div>
  </div>);
}

function InputScreen({iVal,setIVal,onSubmit,onSample,onSync,err,hasExisting,onRestore,customInstructions,setCustomInstructions,droppedImage,setDroppedImage,syncing}: {iVal:string;setIVal:(v:string)=>void;onSubmit:()=>void;onSample:()=>void;onSync:()=>void;err:string|null;hasExisting:boolean;onRestore:()=>void;customInstructions:string;setCustomInstructions:(v:string)=>void;droppedImage:{base64:string;mediaType:string;name:string;isPdf:boolean}|null;setDroppedImage:(v:{base64:string;mediaType:string;name:string;isPdf:boolean}|null)=>void;syncing:boolean}){
  const [dragging,setDragging]=useState(false);
  const [droppedName,setDroppedName]=useState("");
  const [showInstr,setShowInstr]=useState(false);

  const handleFile=function(file: File){
    if(!file)return;
    const isImg=file.type.startsWith("image/");
    const isPdf=file.type==="application/pdf"||file.name.toLowerCase().endsWith(".pdf");
    if(isImg||isPdf){
      const mediaType=isPdf?"application/pdf":file.type;
      setDroppedImage(null);
      setDroppedName((isPdf?"📄":"📸")+" "+file.name+" — reading…");
      const r=new FileReader();
      r.onload=function(ev){const b64=(ev.target!.result as string).split(",")[1];setDroppedImage({base64:b64,mediaType,name:file.name,isPdf});setDroppedName((isPdf?"📄":"📸")+" "+file.name+" (ready)");};
      r.readAsDataURL(file);return;
    }
    setDroppedImage(null);
    setDroppedName("📄 "+file.name);
    const r=new FileReader();
    r.onload=function(ev){setIVal(ev.target!.result as string||"");setDroppedName("📄 "+file.name+" (loaded)");};
    r.readAsText(file);
  };

  const canSubmit=!!(iVal.trim()||droppedImage);

  return(
    <div style={{fontFamily:"Roboto,sans-serif",background:BG,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px 16px",boxSizing:"border-box"}}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Oswald:wght@600;700&display=swap"/>
      <div style={{width:"100%",maxWidth:560}}>
        {err&&<div style={{background:"#fff5f5",border:"1px solid #fca5a5",borderRadius:8,padding:"10px 14px",marginBottom:14,color:"#991b1b",fontSize:13}}>⚠ {err}</div>}
        {!hasExisting&&<div style={{background:"#f0f2ff",border:"1px solid #c7cdee",borderRadius:8,padding:"10px 14px",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:syncing?"#f59e0b":"#2a8a4a",flexShrink:0,transition:"background .3s"}}/>
          <span style={{fontSize:12,color:BLU,flex:1}}>{syncing?"Checking for synced data…":"No previous data found"}</span>
          <button onClick={onSync} style={{fontSize:11,background:BLU,color:"#fff",border:"none",padding:"4px 10px",borderRadius:4,cursor:"pointer",flexShrink:0,fontFamily:"Roboto,sans-serif"}}>↻ Sync now</button>
        </div>}
        {hasExisting&&(<div style={{background:"#e8f0fe",border:"1px solid #4a6fc5",borderRadius:8,padding:"10px 14px",marginBottom:14,display:"flex",alignItems:"center",justifyContent:"space-between"}}><span style={{fontSize:13,color:BLU}}>Previous session data available</span><button onClick={onRestore} style={{background:BLU,color:"#fff",border:"none",padding:"5px 12px",borderRadius:4,cursor:"pointer",fontSize:12}}>Restore</button></div>)}
        <div style={{background:"#fff",borderRadius:10,padding:24,boxShadow:"0 2px 10px rgba(0,0,0,.07)"}}>
          <div style={{maxWidth:280,margin:"0 auto 22px"}}><UMLogoFull/></div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:11,color:"#999",marginBottom:7,textTransform:"uppercase",letterSpacing:.5}}>Order Data</div>
            <div onDragOver={function(e){e.preventDefault();setDragging(true);}} onDragLeave={function(){setDragging(false);}} onDrop={function(e){e.preventDefault();setDragging(false);handleFile(e.dataTransfer.files[0]);}} onClick={function(){(document.getElementById("sa-file-in") as HTMLInputElement).click();}} style={{border:"2px dashed "+(dragging?BLU:droppedImage?"#2a8a4a":"#d0d0d0"),borderRadius:8,padding:"16px",textAlign:"center",marginBottom:8,background:dragging?"#eef3ff":droppedImage?"#edf7ed":"#fafafa",cursor:"pointer",transition:"all .15s"}}>
              <input id="sa-file-in" type="file" accept=".pdf,.txt,.csv,.tsv,.json,image/*" style={{display:"none"}} onChange={function(e){if(e.target.files?.[0])handleFile(e.target.files[0]);e.target.value="";}}/>
              <div style={{fontSize:22,marginBottom:4}}>{droppedImage?"✅":"📄"}</div>
              <div style={{fontSize:13,color:dragging?BLU:droppedImage?"#2a8a4a":"#888",fontWeight:500}}>{droppedName||"Drop a file or screenshot here, or click to browse"}</div>
              <div style={{fontSize:11,color:"#bbb",marginTop:2}}>Shopify CSV · PDF · Screenshot · TXT · JSON</div>
            </div>
            {!droppedImage&&<textarea value={iVal} onChange={e=>setIVal(e.target.value)} placeholder="Or paste order text, CSV data, or packing slip info here…" style={{width:"100%",height:120,padding:"10px 12px",border:"1px solid #ddd",borderRadius:6,fontSize:12,fontFamily:"Roboto,sans-serif",resize:"vertical",boxSizing:"border-box",outline:"none"}}/>}
          </div>
          <div style={{marginBottom:14,border:"1px solid #e8e8e8",borderRadius:8,overflow:"hidden"}}>
            <div onClick={()=>setShowInstr(!showInstr)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:"#fafafa",cursor:"pointer",userSelect:"none"}}>
              <span style={{fontSize:12,fontWeight:600,color:"#555"}}>⚙ Custom AI Instructions</span>
              <span style={{fontSize:11,color:"#aaa"}}>{showInstr?"▲":"▼"}</span>
            </div>
            {showInstr&&(<div style={{padding:"0 12px 12px",background:"#fff"}}>
              <div style={{fontSize:11,color:"#aaa",margin:"8px 0 6px",lineHeight:1.5}}>Override or augment how the AI parses your orders.</div>
              <textarea value={customInstructions} onChange={e=>setCustomInstructions(e.target.value)} placeholder={'e.g. "Map HTH GRY to Heather Grey"'} style={{width:"100%",height:80,padding:"9px 11px",border:"1px solid #ddd",borderRadius:6,fontSize:12,fontFamily:"Roboto,sans-serif",resize:"vertical",boxSizing:"border-box",outline:"none",lineHeight:1.5}}/>
            </div>)}
          </div>
          <button onClick={onSubmit} disabled={!canSubmit} style={{width:"100%",padding:"12px",background:canSubmit?RED:"#ccc",color:"#fff",border:"none",borderRadius:6,fontSize:14,fontFamily:"Oswald,sans-serif",fontWeight:700,letterSpacing:1,textTransform:"uppercase",cursor:canSubmit?"pointer":"default",marginBottom:8}}>
            {droppedImage?(droppedImage.isPdf?"Parse PDF":"Parse Screenshot"):"Parse Orders"}
          </button>
          <button onClick={onSample} style={{width:"100%",padding:"9px",background:"#fff",color:BLU,border:"1px solid "+BLU,borderRadius:6,fontSize:12,fontFamily:"Roboto,sans-serif",cursor:"pointer"}}>Load Sample Data</button>
        </div>
      </div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App(){
  const[stage,setStage]=useState("init");
  const[syncing,setSyncing]=useState(false);
  const[tab,setTab]=useState("demand");
  const[iVal,setIVal]=useState("");
  const[loadMsg,setLoadMsg]=useState("");
  const[errMsg,setErrMsg]=useState("");
  const[results,setResults]=useState<Results|null>(null);
  const[issues,setIssues]=useState<string[]>([]);
  const stock: Record<string,number>={};
  const[checks,setChecks]=useState<{demand:Record<string,boolean>;print:Record<string,boolean>;pack:Record<string,boolean>}>({demand:{},print:{},pack:{}});
  const[collapsed,setCollapsed]=useState<Record<string,boolean>>({blanks:false,transfers:false});
  const[toast,setToast]=useState<string|null>(null);
  const[customInstructions,setCustomInstructions]=useState("");
  const[droppedImage,setDroppedImage]=useState<{base64:string;mediaType:string;name:string;isPdf:boolean}|null>(null);
  const tmr=useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(()=>{
    (async()=>{
      const r=await sg("ums_results");
      if(r&&r.totalUnits){setResults(r);setStage("results");}else{setStage("input");}
      const c=await sg("ums_checks");if(c)setChecks(c);
      const cl=await sg("ums_collapsed");if(cl)setCollapsed((p: Record<string,boolean>)=>Object.assign({},p,cl));
      const is=await sg("ums_issues");if(is)setIssues(is);
      const ci=await sg("ums_custinstr");if(ci)setCustomInstructions(ci);
    })();
  },[]);

  useEffect(()=>{
    if(stage!=="input"&&stage!=="results")return;
    const iv=setInterval(async()=>{
      const r=await sg("ums_results");
      if(!r||!r.totalUnits)return;
      const changed=!results||r.totalUnits!==results.totalUnits||r.blanks.length!==results.blanks.length;
      if(changed){
        const c=await sg("ums_checks");if(c)setChecks(c);
        const cl=await sg("ums_collapsed");if(cl)setCollapsed((p: Record<string,boolean>)=>Object.assign({},p,cl));
        const is=await sg("ums_issues");if(is)setIssues(is);
        setResults(r);
        if(stage==="input")setStage("results");
        showToast("Synced from another tab");
      }
    },10000);
    return()=>clearInterval(iv);
  },[stage,results]);

  const showToast=(m: string)=>{setToast(m);if(tmr.current)clearTimeout(tmr.current);tmr.current=setTimeout(()=>setToast(null),2200);};
  const ckToggle=async(tabK: string,id: string)=>{const nc=Object.assign({},checks,{[tabK]:Object.assign({},checks[tabK as keyof typeof checks],{[id]:!checks[tabK as keyof typeof checks][id]})});setChecks(nc);await ss("ums_checks",nc);showToast("Saved");};
  const colToggle=async(key: string)=>{const nc=Object.assign({},collapsed,{[key]:!collapsed[key]});setCollapsed(nc);await ss("ums_collapsed",nc);};
  const resetTab=async(tabK: string)=>{const nc=Object.assign({},checks,{[tabK]:{}});setChecks(nc);await ss("ums_checks",nc);showToast(tabK+" tab reset");};
  const collapseAll=async(tabK: string)=>{
    const nc=Object.assign({},collapsed);
    if(tabK==="demand"){nc.blanks=true;nc.transfers=true;}
    else if(tabK==="print"&&results){const cm: Record<string,number>={};for(const u of results.printQueue)cm[u.color]=1;for(const c of Object.keys(cm))nc["printColor_"+c]=true;}
    else if(tabK==="pack"&&results){for(const o of results.packOrders)nc["collapseOrder_"+o.orderNumber]=true;}
    setCollapsed(nc);await ss("ums_collapsed",nc);
  };
  const handleSubmit=async()=>{
    if(!iVal.trim()&&!droppedImage)return;
    setStage("loading");setErrMsg("");
    await ss("ums_custinstr",customInstructions);
    try{
      const parsed=await parseInput(iVal,droppedImage,customInstructions,setLoadMsg);
      const proc=processOrders(parsed.orders||[]);
      setResults(proc);setIssues(parsed.dataQualityIssues||[]);
      const stripped={...proc,packOrders:proc.packOrders.map((o: PackOrder)=>Object.assign({},o,{customerName:""})),printQueue:proc.printQueue.map((u: PrintUnit)=>Object.assign({},u,{customerName:""}))};
      await ss("ums_results",stripped);await ss("ums_issues",parsed.dataQualityIssues||[]);
      setDroppedImage(null);setStage("results");
    }catch(e: unknown){setErrMsg((e as Error).message);setStage("error");}
  };
  const handleSample=async()=>{setStage("loading");setLoadMsg("Loading sample data…");await new Promise(r=>setTimeout(r,600));const proc=processOrders(SAMPLE.orders);setResults(proc);setIssues([]);await ss("ums_results",proc);setStage("results");};
  const clearAll=async()=>{setResults(null);setChecks({demand:{},print:{},pack:{}});setCollapsed({blanks:false,transfers:false});setIVal("");setIssues([]);setDroppedImage(null);await ss("ums_results",null);await ss("ums_checks",null);await ss("ums_issues",null);setStage("input");};

  const manualSync=async()=>{
    setSyncing(true);
    try{
      const r=await sg("ums_results");
      if(r&&r.totalUnits){
        const c=await sg("ums_checks");if(c)setChecks(c);
        const cl=await sg("ums_collapsed");if(cl)setCollapsed((p: Record<string,boolean>)=>Object.assign({},p,cl));
        const is=await sg("ums_issues");if(is)setIssues(is);
        setResults(r);setStage("results");
        showToast("Synced");
      }else{showToast("No data found yet");}
    }catch{showToast("Sync failed");}
    setSyncing(false);
  };

  if(stage==="input"||stage==="error") return <InputScreen iVal={iVal} setIVal={setIVal} onSubmit={handleSubmit} onSample={handleSample} onSync={manualSync} err={stage==="error"?errMsg:null} hasExisting={!!results} onRestore={()=>setStage("results")} customInstructions={customInstructions} setCustomInstructions={setCustomInstructions} droppedImage={droppedImage} setDroppedImage={setDroppedImage} syncing={syncing}/>;
  if(stage==="loading") return <LoadScreen msg={loadMsg}/>;
  if(!results) return <LoadScreen msg="Loading…"/>;

  const R=results;
  const dCk=R.blanks.filter(b=>checks.demand[b.key]).reduce((s,b)=>s+b.qty,0)+(R.transfersByOrder||[]).filter(t=>checks.demand[t.key]).reduce((s,t)=>s+t.qty,0);
  const dTot=R.blanks.reduce((s,b)=>s+b.qty,0)+R.transfers.reduce((s,t)=>s+t.qty,0);
  const pCk=R.printQueue.filter(u=>checks.print[u.uid]).length;
  const pkPacked=R.packOrders.filter(o=>o.items.length>0&&o.items.every(i=>checks.pack[i.key])).length;
  const tabPct=tab==="demand"?(dTot>0?Math.round(dCk/dTot*100):0):tab==="print"?(R.totalUnits>0?Math.round(pCk/R.totalUnits*100):0):(R.packOrders.length>0?Math.round(pkPacked/R.packOrders.length*100):0);
  const tabLabel=tab==="demand"?"COMPONENT DEMAND "+tabPct+"% ("+dCk+"/"+dTot+")":tab==="print"?"PRINT QUEUE "+tabPct+"% ("+pCk+"/"+R.totalUnits+")":"PACK QUEUE "+tabPct+"% ("+pkPacked+"/"+R.packOrders.length+")";

  return(
    <div style={{fontFamily:"Roboto,sans-serif",background:BG,minHeight:"100vh"}}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Oswald:wght@600;700&display=swap"/>
      <div style={{background:"#fff",borderBottom:"4px solid "+RED,boxShadow:"0 2px 8px rgba(0,0,0,.07)",position:"sticky",top:0,zIndex:100}}>
        <div style={{padding:"8px 14px 5px",display:"flex",alignItems:"center",gap:12,justifyContent:"space-between"}}>
          <div style={{flex:1,minWidth:0,maxWidth:190}}><UMLogoFull/></div>
          <div style={{textAlign:"right",flexShrink:0}}>
            <div style={{fontSize:10,color:"#666",lineHeight:1.7}}>{R.totalUnits+" units · "+R.blanks.length+" SKUs · "+R.transfers.length+" designs"}</div>
            <div style={{display:"flex",gap:4,justifyContent:"flex-end",marginTop:2}}>
              <button onClick={async()=>{const r=await sg("ums_results");if(r&&r.totalUnits){const c=await sg("ums_checks");if(c)setChecks(c);setResults(r);showToast("Synced");}else showToast("No data found");}} style={{fontSize:10,background:"none",border:"1px solid #ccc",color:"#666",padding:"2px 8px",borderRadius:4,cursor:"pointer"}}>↻ Sync</button>
              <button onClick={clearAll} style={{fontSize:10,background:"none",border:"1px solid #ccc",color:"#666",padding:"2px 8px",borderRadius:4,cursor:"pointer"}}>↺ New Load</button>
            </div>
          </div>
        </div>
        <div style={{padding:"0 14px 5px"}}>
          <div style={{fontSize:9,color:"#aaa",marginBottom:2,letterSpacing:.5}}>{tabLabel}</div>
          <PBarR pct={tabPct} h={4} bg="#e8e8e8"/>
        </div>
        <div style={{display:"flex",borderTop:"1px solid #ebebeb",background:"#fafafa"}}>
          {([["demand","Component Demand",dCk+"/"+dTot],["print","Print Queue",pCk+"/"+R.totalUnits],["pack","Pack Queue",pkPacked+"/"+R.packOrders.length]] as [string,string,string][]).map(function(t){
            const active=tab===t[0];
            return(<button key={t[0]} onClick={()=>setTab(t[0])} style={{flex:1,padding:"9px 4px 8px",border:"none",cursor:"pointer",background:active?RED:"transparent",color:active?"#fff":"#555",fontFamily:"Oswald,sans-serif",fontWeight:700,fontSize:11,letterSpacing:.8,textTransform:"uppercase",borderBottom:"3px solid "+(active?RED:"transparent"),transition:"background .15s"}}>
              {t[1]}<span style={{marginLeft:4,opacity:.75,fontSize:10}}>{"("+t[2]+")"}</span>
            </button>);
          })}
        </div>
      </div>
      {issues.length>0&&<div style={{background:"#fffbea",borderLeft:"4px solid #f59e0b",padding:"8px 14px",fontSize:12,color:"#78350f"}}><b>⚠ Data Quality Notes:</b>{issues.map((is,i)=><div key={i} style={{marginTop:2}}>{"• "+is}</div>)}</div>}
      <div style={{paddingBottom:80}}>
        {tab==="demand"&&<DemandTab blanks={R.blanks} transfers={R.transfers} transfersByOrder={R.transfersByOrder||[]} stock={stock} checks={checks.demand} toggle={id=>ckToggle("demand",id)} collapsed={collapsed} onToggle={colToggle} onCollapseAll={()=>collapseAll("demand")} onReset={()=>resetTab("demand")}/>}
        {tab==="print"&&<PrintTab units={R.printQueue} checks={checks.print} toggle={id=>ckToggle("print",id)} collapsed={collapsed} onToggle={colToggle} onCollapseAll={()=>collapseAll("print")} onReset={()=>resetTab("print")}/>}
        {tab==="pack"&&<PackTab orders={R.packOrders} checks={checks.pack} toggle={id=>ckToggle("pack",id)} collapsed={collapsed} onToggle={colToggle} onCollapseAll={()=>collapseAll("pack")} onReset={()=>resetTab("pack")}/>}
      </div>
      <Toast msg={toast}/>
    </div>
  );
}
