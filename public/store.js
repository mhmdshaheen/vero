(() => {
  const t=text=>window.veroI18n?.translate(text)??text;
  const init = async () => {
    const grid=document.querySelector('.product-collections'),purchase=document.querySelector('.product-purchase');if((!grid&&!purchase)||document.querySelector('#shop-dialog'))return;
    let catalog=[];
    try {const response=await fetch('/api/products',{cache:'no-store'});if(response.ok){const data=await response.json();if(Array.isArray(data.products))catalog=data.products}}catch{}
    if(!catalog.length)return;
    let cart=[];
    try {const saved=JSON.parse(localStorage.getItem('vero-cart')||'[]');if(Array.isArray(saved))cart=saved.filter(x=>{const p=catalog.find(p=>p.id===x.id);return p&&p.sizes.includes(x.size)&&p.colors.includes(x.color)&&Number.isInteger(x.quantity)&&x.quantity>0&&x.quantity<=10})}catch{}
    const save=()=>{localStorage.setItem('vero-cart',JSON.stringify(cart));updateBadge()};
    if(grid){
    const categories=[['casual','كاجوال'],['formal','رسمي'],['sport','سبور'],['boot','بوط'],['medical','طبي']];
    const categoryGrids=new Map();
    grid.replaceChildren();
    const filters=document.createElement('div');filters.className='category-filters';filters.setAttribute('role','group');filters.setAttribute('aria-label','أقسام الأحذية');grid.previousElementSibling?.remove();grid.before(filters);
    categories.forEach(([id,label])=>{
      const section=document.createElement('section');section.className='product-group';section.id=`category-${id}`;section.setAttribute('aria-label',label);
      const heading=document.createElement('h3');heading.textContent=label;
      const groupGrid=document.createElement('div');groupGrid.className='products';section.append(heading,groupGrid);
      if(!catalog.some(p=>p.category===id)){const empty=document.createElement('p');empty.className='category-empty';empty.textContent='ما في موديلات بهالقسم بعد.';section.append(empty)}
      grid.append(section);categoryGrids.set(id,groupGrid);
    });
    [['all','الكل'],...categories].forEach(([id,label])=>{
      const button=document.createElement('button');button.type='button';button.textContent=label;button.setAttribute('aria-pressed',id==='all'?'true':'false');
      button.addEventListener('click',()=>{window.veroAnalytics?.track('category_filter',{category:id});for(const [key] of categories)document.getElementById(`category-${key}`).hidden=id!=='all'&&key!==id;filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===button?'true':'false'))});filters.append(button);
    });
    const followCategoryHash=()=>{const id=location.hash.replace('#category-','');if(!categories.some(([key])=>key===id)&&location.hash!=='#collection')return;for(const [key] of categories)document.getElementById(`category-${key}`).hidden=false;filters.querySelectorAll('button').forEach((button,index)=>button.setAttribute('aria-pressed',index===0?'true':'false'));if(location.hash.startsWith('#category-'))requestAnimationFrame(()=>document.getElementById(`category-${id}`)?.scrollIntoView());};
    window.addEventListener('hashchange',followCategoryHash);
    followCategoryHash();
    const displayCatalog=[...catalog];
    displayCatalog.forEach(p=>{
      const card=document.createElement('article');card.className='card';card.dataset.category=p.category;
      const href=`/products/${encodeURIComponent(p.id)}`;
      const figure=document.createElement('figure'),img=document.createElement('img'),photoLink=document.createElement('a');img.src=p.imagePath;img.alt=`${p.name} من VERO`;img.loading='lazy';photoLink.href=href;photoLink.setAttribute('aria-label',`شوف تفاصيل ${p.name}`);photoLink.append(img);figure.append(photoLink);const imageCount=new Set([p.imagePath,...(p.colorImages||[]).filter(entry=>p.colors.includes(entry.color)).map(entry=>entry.imagePath)]).size;if(imageCount>1){const count=document.createElement('span');count.className='product-image-count';count.textContent=`▧ ${imageCount} صور`;count.setAttribute('aria-label',`${imageCount} صور للموديل`);photoLink.append(count)}
      const body=document.createElement('div');body.className='card-body';const info=document.createElement('div'),name=document.createElement('h3'),detail=document.createElement('small'),price=document.createElement('span'),nameLink=document.createElement('a');nameLink.href=href;nameLink.textContent=p.name;name.append(nameLink);detail.textContent=`الألوان: ${p.colors.join('، ')}`;price.className='price';price.textContent=`$${p.price}`;if(p.originalPrice>p.price){const previous=document.createElement('del');previous.textContent=`$${p.originalPrice}`;price.append(previous);const badge=document.createElement('span');badge.className='sale-badge';badge.textContent='خصم';figure.append(badge)}info.append(name);if(p.catalogCode){const code=document.createElement("div");code.className="product-catalog-code";const label=document.createElement("span"),value=document.createElement("bdi");label.textContent="كود الموديل";value.textContent=p.catalogCode;code.append(label,": ",value);info.append(code)}info.append(detail);body.append(info,price);
      const controls=document.createElement('div');controls.className='shop-controls';
      const makeSelect=(labelText,values,cls)=>{const label=document.createElement('label'),select=document.createElement('select');label.textContent=labelText;select.className=cls;select.setAttribute('aria-label',`${labelText} ${p.name}`);values.forEach(value=>{const option=document.createElement('option');option.value=String(value);option.textContent=String(value);select.append(option)});label.append(select);controls.append(label);return select};
      const size=makeSelect('المقاس',p.sizes,'size-select'),color=makeSelect('اللون',p.colors,'color-select');
      color.addEventListener('change',()=>{const match=p.colorImages?.find(entry=>entry.color===color.value);img.src=match?.imagePath||p.imagePath;img.alt=match?`${p.name} — ${match.color}`:`${p.name} من VERO`});
      const measurements=(p.sizeGuide||[]).filter(row=>p.sizes.includes(row.size));
      if(measurements.length||p.fitNote){
        const guide=document.createElement('details');guide.className='size-guide';const summary=document.createElement('summary');summary.textContent='دليل المقاسات لهالموديل';guide.append(summary);
        if(p.fitNote){const note=document.createElement('p');note.textContent=p.fitNote;guide.append(note)}
        if(measurements.length){const tip=document.createElement('p');tip.textContent='قيس طول قدمك من الكعب لأطول إصبع وإنت واقف.';guide.append(tip);const table=document.createElement('table'),head=document.createElement('thead'),header=document.createElement('tr');['النمرة','طول القدم المناسب (سم)',...(measurements.some(row=>row.ballWidthCm!==undefined)?['العرض عند المشط (سم)']:[])].forEach(text=>{const th=document.createElement('th');th.textContent=text;header.append(th)});head.append(header);table.append(head);const tbody=document.createElement('tbody');measurements.forEach(row=>{const tr=document.createElement('tr');[row.size,row.footLengthCm,...(measurements.some(entry=>entry.ballWidthCm!==undefined)?[row.ballWidthCm??"—"]:[])].forEach(value=>{const td=document.createElement('td');td.textContent=String(value);tr.append(td)});tbody.append(tr)});table.append(tbody);guide.append(table)}
        controls.append(guide);
      }
      const add=document.createElement('button');add.type='button';add.className='shop-add';add.textContent=`أضف إلى السلة · $${p.price}`;controls.append(add);
      add.addEventListener('click',()=>{const value={id:p.id,size:Number(size.value),color:color.value,quantity:1};const existing=cart.find(x=>x.id===value.id&&x.size===value.size&&x.color===value.color);if(existing?.quantity===10){showAdded('الحد الأعلى 10 أزواج من نفس الموديل');return}if(existing)existing.quantity++;else cart.push(value);save();window.veroAnalytics?.track('add_to_cart',{productId:p.id});showCart()});
      const direct=document.createElement('a');direct.className='product-direct';direct.href=href;direct.textContent='تفاصيل ورابط الموديل';controls.append(direct);
      card.append(figure,body,controls);categoryGrids.get(p.category)?.append(card);
    });
    }
    if(purchase){
      const product=catalog.find(p=>p.id===purchase.dataset.productId),add=purchase.querySelector('.shop-add'),error=purchase.querySelector('.purchase-error');
      if(product){add.disabled=false;purchase.addEventListener('submit',event=>{
        event.preventDefault();error.hidden=true;
        const data=new FormData(purchase),size=Number(data.get('size')),color=data.get('color'),quantity=Number(data.get('quantity'));
        if(!product.sizes.includes(size)||!product.colors.includes(color)||!Number.isInteger(quantity)||quantity<1||quantity>10){error.textContent='اختار اللون والمقاس والكمية المتوفرة.';error.hidden=false;return}
        const existing=cart.find(item=>item.id===product.id&&item.size===size&&item.color===color);
        if((existing?.quantity||0)+quantity>10){error.textContent='الحد الأعلى 10 أزواج من نفس اللون والمقاس بالسلة.';error.hidden=false;return}
        if(existing)existing.quantity+=quantity;else cart.push({id:product.id,size,color,quantity});save();window.veroAnalytics?.track('add_to_cart',{productId:product.id});showCart();
      })}else{error.textContent='تعذّر تحميل الموديل. حدّث الصفحة وحاول مجدداً.';error.hidden=false}
    }
    const badge=document.createElement('button');badge.type='button';badge.className='cart-float';badge.setAttribute('aria-label','فتح سلة المشتريات');document.body.append(badge);
    const toast=document.createElement('div');toast.className='cart-toast';toast.hidden=true;toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');const toastMessage=document.createElement('span'),toastAction=document.createElement('button');toastAction.type='button';toastAction.textContent='عرض السلة';toastAction.addEventListener('click',()=>{toast.hidden=true;showCart()});toast.append(toastMessage,toastAction);document.body.append(toast);let toastTimer;
    const dialog=document.createElement('dialog');dialog.id='shop-dialog';dialog.className='shop-dialog';dialog.setAttribute('aria-label','سلة المشتريات وإتمام الطلب');dialog.innerHTML='<div class="shop-panel"><div class="shop-panel-top"><h2>سلة المشتريات</h2><button type="button" class="shop-close" aria-label="إغلاق">×</button></div><div id="shop-content"></div></div>';document.body.append(dialog);
    badge.addEventListener('click',showCart);dialog.querySelector('.shop-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
    function updateBadge(){badge.textContent=`السلة (${cart.reduce((n,x)=>n+x.quantity,0)})`}
    function showAdded(message){toastMessage.textContent=message;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{toast.hidden=true},4500)}
    function showCart(){renderCart();if(!dialog.open)dialog.showModal()}
    function renderCart(){
      const box=dialog.querySelector('#shop-content');box.replaceChildren();
      if(!cart.length){const p=document.createElement('p');p.textContent='السلة فارغة. اختار الحذاء والمقاس واللون من المجموعة.';box.append(p);return}
      const lines=document.createElement('div');
      cart.forEach((item,index)=>{const p=catalog.find(x=>x.id===item.id);const row=document.createElement('div');row.className='cart-line';const img=document.createElement('img');img.src=p.colorImages?.find(entry=>entry.color===item.color)?.imagePath||p.imagePath;img.alt=p.name;const desc=document.createElement('div');desc.className='cart-line-details';const title=document.createElement('strong'),meta=document.createElement('small'),price=document.createElement('b');title.textContent=p.name;meta.textContent=`المقاس ${item.size} / ${item.color}`;price.textContent=`$${p.price*item.quantity}`;const actions=document.createElement('div');actions.className='cart-line-actions';const qty=document.createElement('div');qty.className='cart-quantity';const minus=document.createElement('button'),count=document.createElement('span'),plus=document.createElement('button');minus.type=plus.type='button';minus.textContent='−';plus.textContent='+';count.textContent=String(item.quantity);minus.setAttribute('aria-label',`تقليل كمية ${p.name}`);plus.setAttribute('aria-label',`زيادة كمية ${p.name}`);minus.addEventListener('click',()=>{if(item.quantity>1)item.quantity--;else cart.splice(index,1);save();renderCart()});plus.addEventListener('click',()=>{if(item.quantity>=10){showAdded('الحد الأعلى 10 أزواج من نفس الموديل');return}item.quantity++;save();renderCart()});qty.append(minus,count,plus);const remove=document.createElement('button');remove.type='button';remove.className='cart-remove';remove.textContent='حذف';remove.addEventListener('click',()=>{cart.splice(index,1);save();renderCart()});actions.append(qty,remove);desc.append(title,meta,price,actions);row.append(img,desc);lines.append(row)});box.append(lines);
      const total=cart.reduce((n,x)=>n+catalog.find(p=>p.id===x.id).price*x.quantity,0);const summary=document.createElement('div');summary.className='cart-total';const l=document.createElement('span'),r=document.createElement('span');l.textContent='مجموع المنتجات';r.textContent=`$${total}`;r.dir='ltr';summary.append(l,r);box.append(summary);
      const note=document.createElement('p');note.className='payment-note';note.textContent='الدفع عند الاستلام. أجرة التوصيل تُؤكّد بحسب المنطقة قبل تجهيز الطلب.';box.append(note);
      const form=document.createElement('form');form.className='checkout-form';form.innerHTML=`<label>الاسم الكامل<input name="customerName" autocomplete="name" required minlength="2" maxlength="100"></label><label>رقم الهاتف<input name="phone" type="tel" dir="ltr" style="text-align:left;unicode-bidi:isolate" inputmode="tel" autocomplete="tel" required minlength="7" maxlength="20" placeholder="03 123 456"></label><label>المنطقة<input name="area" autocomplete="address-level2" required minlength="2" maxlength="100" placeholder="المدينة أو البلدة"></label><label>العنوان المفصّل<input name="address" autocomplete="street-address" required minlength="6" maxlength="300" placeholder="الشارع، المبنى، الطابق"></label><label class="wide">ملاحظات للطلب (اختياري)<textarea name="notes" maxlength="500"></textarea></label><p class="shop-error" role="alert" hidden></p><button class="shop-submit" type="submit">ثبّت الطلب · $${total}</button>`;
      form.addEventListener('submit',async e=>{e.preventDefault();const button=form.querySelector('button[type=submit]'),error=form.querySelector('.shop-error');error.hidden=true;button.disabled=true;button.textContent='عم نسجّل طلبك…';const data=Object.fromEntries(new FormData(form));data.items=cart;data.analytics=window.veroAnalytics?.identity();window.veroAnalytics?.track('checkout_start');
        try{const res=await fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const result=await res.json();if(!res.ok)throw new Error(result.error||'تعذّر تسجيل الطلب');const lines=result.items.map(x=>`${t(x.name)} / ${t(x.color)} / ${t("مقاس")} ${x.size} / ${t("عدد")} ${x.quantity}\n${t("سعر الزوج")}: $${x.unitPriceUsd} / ${t("المجموع")}: $${x.unitPriceUsd*x.quantity}\n${t("صورة الموديل")}: ${x.imageUrl}\n${t("رابط الموديل")}: ${x.productUrl}`);const message=`${t("مرحباً VERO، ثبّتت طلب من الموقع.")}\n${t("رقم الطلب")}: ${result.id}\n${t("الاسم")}: ${data.customerName}\n${t("الهاتف")}: \u2066${data.phone}\u2069\n${t("المنطقة")}: ${data.area}\n${t("العنوان")}: ${data.address}\n${t("المنتجات")}:\n${lines.join('\n\n')}\n${t("مجموع المنتجات")}: $${result.totalUsd}`;cart=[];save();box.replaceChildren();const success=document.createElement('div');success.className='shop-success';const heading=document.createElement('h3');heading.textContent='تمّ تسجيل طلبك';const detail=document.createElement('p');detail.textContent=`رقم طلبك ${result.id}. منراجع التوافر وأجرة التوصيل ومنتواصل معك على الرقم المسجّل قبل التجهيز.`;const link=document.createElement('a');link.setAttribute('data-no-translate-href','');link.href='https://wa.me/'+(document.body.dataset.whatsapp||'96178978270')+'?text='+encodeURIComponent(message);link.target='_blank';link.rel='noopener noreferrer';link.textContent='ابعث تفاصيل الطلب على واتساب';success.append(heading,detail,link);box.append(success)}catch(err){error.textContent=err.message||'حاول مجددًا';error.hidden=false;button.disabled=false;button.textContent=`ثبّت الطلب · $${total}`}
      });box.append(form);
    }
    updateBadge();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
