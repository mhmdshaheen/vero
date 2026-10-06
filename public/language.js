(() => {
  if (window.veroI18n) return;
  const dictionary = {
"طلبات محفوظة بنجاح":["Successfully saved orders","Commandes enregistrées avec succès"],
"الطلبات المحفوظة محسوبة من سجلات الموقع ضمن الفترة المختارة، باستثناء الملغاة والمحذوفة، سواء سجّل المتصفح التتبّع أو لا.":["Saved orders come from site records for the selected period, excluding cancelled and deleted orders, even when browser tracking is unavailable.","Les commandes enregistrées proviennent des données du site pour la période choisie, hors commandes annulées et supprimées, même sans suivi du navigateur."],
"نسبة الزيارات المتتبّعة التي أرسلت طلبًا":["Tracked visits that submitted an order","Visites suivies ayant envoyé une commande"],
"تعتمد النسبة على الطلبات المرتبطة بجلسة تتبّع؛ الطلب المحفوظ لا يعني تأكيد البيع أو التسليم.":["The rate uses orders linked to a tracked session; a saved order does not confirm a sale or delivery.","Le taux utilise les commandes liées à une session suivie ; une commande enregistrée ne confirme ni la vente ni la livraison."],
"مشاركة على واتساب":["Share on WhatsApp","Partager sur WhatsApp"],
"بوط شاموا برباط":["Suede lace-up boot", "Bottine en daim à lacets"],
"بوط جلد برباط كلاسيكي":["Classic leather lace-up boot", "Bottine classique en cuir à lacets"],
"بوط تشيلسي شاموا بكعب":["Suede Chelsea boot with heel", "Bottine Chelsea en daim à talon"],
"بوط تشيلسي شاموا بنعل مريح":["Suede Chelsea boot with comfort sole", "Bottine Chelsea en daim à semelle confortable"],
"بوط جلد كلاسيك قصير":["Classic leather chukka boot", "Bottine chukka classique en cuir"],
"بوط من الجلد الطبيعي من الداخل والخارج، صناعة لبنانية":["Lebanese-made boot with genuine leather inside and out", "Bottine fabriquée au Liban, en cuir véritable à l’intérieur et à l’extérieur"],

"كود الموديل":["Model code","Code du modèle"],
"كاجوال جلد برباط عريض":["Leather casual shoe with wide laces", "Chaussure décontractée en cuir à lacets larges"],
"كاجوال كحلي بتفاصيل رمادية":["Navy casual sneaker with grey details", "Basket décontractée marine à détails gris"],
"كاجوال جلد مفرغ":["Perforated leather casual sneaker", "Basket décontractée en cuir perforé"],
"كاجوال بنقشة جانبية":["Casual sneaker with textured sides", "Basket décontractée à côtés texturés"],
"ديربي كاجوال مقدمة مدروزة":["Casual cap-toe Derby", "Derby décontracté à bout rapporté"],
"حذاء كاجوال من الجلد الطبيعي من الداخل والخارج، صناعة لبنانية":["Lebanese-made casual shoe with genuine leather inside and out", "Chaussure décontractée fabriquée au Liban, en cuir véritable à l’intérieur et à l’extérieur"],

"الكاتالوج":["Catalogue", "Catalogue"],
"كاتالوج الصور":["Photo catalogue", "Catalogue photo"],
"مشاركة الرابط":["Share link", "Partager le lien"],
"تم نسخ رابط الكاتالوج":["Catalogue link copied", "Lien du catalogue copié"],
"أقسام الكاتالوج":["Catalogue categories", "Catégories du catalogue"],
"ما في صور بهالقسم حاليًا.":["No photos in this category yet.", "Aucune photo dans cette catégorie pour le moment."],
"ما في صور بالكاتالوج حاليًا.":["No catalogue photos yet.", "Aucune photo dans le catalogue pour le moment."],
"إغلاق ×":["Close ×", "Fermer ×"],
"تعذّر تحميل الصور حاليًا.":["Photos could not be loaded.", "Impossible de charger les photos."],

"زيارات الموقع":["Site visits", "Visites du site"],
"عرض الزيارات ونشاط الزوّار":["View visits and visitor activity", "Voir les visites et l’activité des visiteurs"],
"زيارات الموقع ونشاط الزوّار":["Site visits and visitor activity", "Visites du site et activité des visiteurs"],
"إحصاءات الموقع":["Site statistics", "Statistiques du site"],
"إدارة الموقع":["Site management", "Gestion du site"],
"المتجر":["Store", "Boutique"],
"من بداية التتبّع":["Since tracking began", "Depuis le début du suivi"],
"من بداية التتبع":["Since tracking began", "Depuis le début du suivi"],
"الزيارات":["Visits", "Visites"],
"زوّار مختلفون":["Distinct visitors", "Visiteurs distincts"],
"مشاهدات الصفحات":["Page views", "Pages vues"],
"مشاهدات الموديلات":["Product views", "Vues des modèles"],
"إضافات للسلة":["Add-to-cart actions", "Ajouts au panier"],
"محاولات إرسال الطلب":["Order submission attempts", "Tentatives d’envoi de commande"],
"طلبات أُرسلت بنجاح":["Orders successfully submitted", "Commandes envoyées avec succès"],
"ضغطات واتساب":["WhatsApp clicks", "Clics WhatsApp"],
"اليوم":["Today", "Aujourd’hui"],
"آخر ٧ أيام":["Last 7 days", "7 derniers jours"],
"آخر ٣٠ يوم":["Last 30 days", "30 derniers jours"],
"تحديث":["Refresh", "Actualiser"],
"عم نحمّل الإحصاءات…":["Loading statistics…", "Chargement des statistiques…"],
"عم نحمّل العداد…":["Loading visit counter…", "Chargement du compteur…"],
"تعذّر تحميل عداد الزيارات":["Could not load the visit counter", "Impossible de charger le compteur"],
"تعذّر تحميل الإحصاءات. جرّب مجددًا":["Could not load statistics. Try again.", "Impossible de charger les statistiques. Réessayez."],
"اختار فترة صحيحة":["Choose a valid date range", "Choisissez une période valide"],
"الطلبات المحفوظة من تأسيس الموقع":["Orders saved since the site was created", "Commandes enregistrées depuis la création du site"],
"مشاهدات وطلبات الموديلات":["Product views and orders","Consultations et commandes par modèle"],
"إضافات السلة":["Cart additions","Ajouts au panier"],
"عدد الطلبات":["Order count","Nombre de commandes"],
"الأزواج المطلوبة":["Pairs ordered","Paires commandées"],
"عدد الطلبات والأزواج من الطلبات المحفوظة ضمن الفترة، باستثناء الملغاة والمحذوفة، سواء أُرسلت رسالة واتساب أو لا. إضافات السلة نشاط منفصل.":["Orders and pairs come from saved orders in the selected period, excluding cancelled and deleted orders, whether or not a WhatsApp message was sent. Cart additions are separate activity.","Les commandes et paires proviennent des commandes enregistrées pendant la période choisie, hors commandes annulées et supprimées, qu’un message WhatsApp ait été envoyé ou non. Les ajouts au panier sont une activité distincte."],
"الموديلات الأكثر مشاهدة":["Most viewed products", "Modèles les plus consultés"],
"المشاهدات":["Views", "Vues"],
"مصادر الزيارات":["Visit sources", "Sources des visites"],
"دخول مباشر أو مصدر غير معروف":["Direct visit or unknown source", "Visite directe ou source inconnue"],
"ما في زيارات بهالفترة.":["No visits in this period.", "Aucune visite pendant cette période."],
"ما في نشاط على الموديلات بهالفترة.":["No product activity in this period.", "Aucune activité sur les modèles pendant cette période."],
"آخر الأنشطة":["Recent activity", "Activités récentes"],
"نوع النشاط":["Activity type", "Type d’activité"],
"الوقت":["Time", "Heure"],
"الجلسة":["Session", "Session"],
"النشاط":["Activity", "Activité"],
"الصفحة / الموديل":["Page / product", "Page / modèle"],
"الجهاز":["Device", "Appareil"],
"الصفحة الرئيسية":["Home page", "Page d’accueil"],
"موبايل":["Mobile", "Mobile"],
"تابلت":["Tablet", "Tablette"],
"كمبيوتر":["Computer", "Ordinateur"],
"مشاهدة صفحة":["Page view", "Consultation d’une page"],
"إضافة إلى السلة":["Add to cart", "Ajout au panier"],
"بدء إرسال الطلب":["Start order submission", "Début d’envoi de commande"],
"طلب أُرسل بنجاح":["Order successfully submitted", "Commande envoyée avec succès"],
"ضغط على واتساب":["WhatsApp click", "Clic WhatsApp"],
"اختيار قسم":["Category selection", "Choix d’une catégorie"],
"ما في نشاط لهيدا الاختيار.":["No activity for this selection.", "Aucune activité pour cette sélection."],
"كل زيارة هي جلسة تصفّح؛ تبدأ جلسة جديدة بعد ٣٠ دقيقة من دون نشاط. الزوّار المختلفون محسوبون بحسب المتصفح، وليس الأشخاص.":["Each visit is a browsing session; a new session starts after 30 minutes without activity. Distinct visitors are counted by browser, not by person.", "Chaque visite est une session de navigation ; une nouvelle session commence après 30 minutes sans activité. Les visiteurs distincts sont comptés par navigateur et non par personne."],
"الزيارات السابقة لتفعيل العداد غير متوفرة. لا تشمل زيارات حسابات الإدارة أو برامج البحث المعروفة. الفترات حسب توقيت بيروت.":["Visits before tracking was enabled are unavailable. Admin accounts and known search bots are excluded. Date ranges use Beirut time.", "Les visites antérieures à l’activation du suivi ne sont pas disponibles. Les comptes d’administration et les robots connus sont exclus. Les périodes utilisent l’heure de Beyrouth."],
"التتبّع مفعّل؛ ما تسجّلت زيارات بعد.":["Tracking is active; no visits recorded yet.", "Le suivi est actif ; aucune visite n’a encore été enregistrée."],
"آخر ١٠٠ نشاط ضمن الفترة. رقم الجلسة يربط خطوات التصفّح من دون تحديد هوية الزائر.":["The latest 100 activities in this period. The session number links browsing steps without identifying the visitor.", "Les 100 dernières activités de la période. Le numéro de session relie les étapes de navigation sans identifier le visiteur."],
"المصدر بحسب الرابط المُحيل الذي يرسله المتصفح؛ بعض التطبيقات لا ترسله.":["Sources use the referrer sent by the browser; some apps do not send one.", "La source dépend du lien référent envoyé par le navigateur ; certaines applications ne l’envoient pas."],
"الأرقام تعتمد على تشغيل التتبّع في المتصفح. منع التتبّع أو حذف بيانات المتصفح قد يؤثر على العدد.":["Counts depend on browser tracking. Blocking tracking or clearing browser data may affect the totals.", "Les chiffres dépendent du suivi dans le navigateur. Le blocage du suivi ou la suppression des données peut modifier les totaux."],
"إرسال الطلب لا يعني تأكيد البيع أو التسليم.":["Submitting an order does not confirm a sale or delivery.", "L’envoi d’une commande ne confirme pas une vente ou une livraison."],
"تشمل الطلبات المحفوظة باستثناء الملغاة والمحذوفة، ولا تتأثر بفلتر الفترة.":["Includes saved orders except cancelled and deleted orders, regardless of the date filter.", "Inclut les commandes enregistrées sauf celles annulées ou supprimées, indépendamment du filtre de période."],
  "من قلب مصنعنا": [
    "Inside our factory",
    "Au cœur de notre atelier"
  ],
  "شاهد مصنعنا": [
    "Watch our factory film",
    "Découvrez notre atelier"
  ],
  "الرئيسية": [
    "Home",
    "Accueil"
  ],
  "مجموعة الأحذية": [
    "Shoe collection",
    "Collection de chaussures"
  ],
  "كلاسيك": [
    "Classic",
    "Classique"
  ],
  "عنّا": [
    "About us",
    "À propos"
  ],
  "كيف منصنّع حذاءك؟": [
    "How we make your shoes",
    "Comment nous fabriquons vos chaussures"
  ],
  "تواصل معنا عبر واتساب": [
    "Contact us on WhatsApp",
    "Contactez-nous sur WhatsApp"
  ],
  "فتح قائمة الموقع": [
    "Open site menu",
    "Ouvrir le menu"
  ],
  "قائمة الموقع": [
    "Site menu",
    "Menu du site"
  ],
  "من اختيار الجلد للتشطيب، كل مرحلة بإيد حرفيين لبنانيين.": [
    "From selecting leather to finishing, every stage is carried out by Lebanese craftspeople.",
    "Du choix du cuir aux finitions, chaque étape est réalisée par des artisans libanais."
  ],
  "قصّ الجلد": [
    "Leather cutting",
    "Découpe du cuir"
  ],
  "الدرز": [
    "Stitching",
    "Couture"
  ],
  "التركيب": [
    "Lasting",
    "Montage"
  ],
  "التنعيل": [
    "Sole fitting",
    "Pose de la semelle"
  ],
  "التشطيب": [
    "Finishing",
    "Finitions"
  ],
  "شاهد مراحل التصنيع": [
    "Watch the manufacturing process",
    "Découvrez les étapes de fabrication"
  ],
  "فيديو مراحل تصنيع أحذية VERO": [
    "VERO shoe manufacturing video",
    "Vidéo de fabrication des chaussures VERO"
  ],
  "كل الموديلات والألوان متوفرة وجاهزة للتصنيع حسب الطلب.": [
    "All models and colors are available and ready to be made to order.",
    "Tous les modèles et toutes les couleurs sont disponibles et prêts à être fabriqués sur commande."
  ],
  "العرض عند المشط (سم)": [
    "Width across the ball of the foot (cm)",
    "Largeur à l’avant-pied (cm)"
  ],
  "يمكن تعديل المقاسات للحالات الخاصة. تواصلوا معنا لتحديد الطول والعرض المناسبين قبل تأكيد الطلب.": [
    "Sizes can be customized for special requirements. Contact us to agree on the appropriate length and width before confirming your order.",
    "Les pointures peuvent être adaptées aux besoins particuliers. Contactez-nous pour définir la longueur et la largeur adaptées avant de confirmer votre commande."
  ],
  "سياسة التبديل والإرجاع": [
    "Exchanges and returns",
    "Échanges et retours"
  ],
  "الرجوع إلى الصفحة الرئيسية": [
    "Back to home",
    "Retour à l’accueil"
  ],
  "رضاكم وثقتكم أساس شغلنا في VERO. يمكنكم معاينة الحذاء وتجربته عند الاستلام، وطلب تبديل المقاس إذا لم يكن مناسبًا. وفي حال عدم رضاكم عن الموديل أو النوعية، يمكنكم طلب التبديل أو الإرجاع عند الاستلام، بالتنسيق معنا.": [
    "Your satisfaction and trust matter to VERO. You can inspect and try on your shoes upon delivery and request a size exchange if they do not fit. If you are not satisfied with the style or quality, you can request an exchange or return upon delivery by coordinating with us.",
    "Votre satisfaction et votre confiance comptent pour VERO. Vous pouvez examiner et essayer vos chaussures à la livraison et demander un échange de pointure si elles ne conviennent pas. Si le modèle ou la qualité ne vous satisfait pas, vous pouvez demander un échange ou un retour à la livraison, en nous contactant."
  ],
  "نتحمّل أجور التوصيل للتبديل أو الإرجاع، من دون أي كلفة إضافية عليكم.": [
    "We cover delivery costs for exchanges or returns, at no extra cost to you.",
    "Nous prenons en charge les frais de livraison pour les échanges ou les retours, sans frais supplémentaires pour vous."
  ],
  "المجموعة": [
    "Collection",
    "Collection"
  ],
  "قصّتنا": [
    "Our story",
    "Notre histoire"
  ],
  "تواصل معنا": [
    "Contact us",
    "Contactez-nous"
  ],
  "اطلب عبر واتساب": [
    "Order on WhatsApp",
    "Commander sur WhatsApp"
  ],
  "أناقة بترافقك\nبكل خطوة": [
    "Elegance in every step",
    "L’élégance à chaque pas"
  ],
  "أحذية رجالية من الجلد الطبيعي، تجمع الراحة والإتقان في صناعة لبنانية بخبرة تتجاوز 40 سنة.": [
    "Men’s genuine leather shoes, combining comfort and craftsmanship. Made in Lebanon with over 40 years of experience.",
    "Chaussures pour hommes en cuir véritable, alliant confort et savoir-faire. Fabriquées au Liban avec plus de 40 ans d’expérience."
  ],
  "تسوّق الآن": [
    "Shop now",
    "Découvrir"
  ],
  "اختار حذاءك": [
    "Choose your shoes",
    "Choisissez vos chaussures"
  ],
  "موديلات رسمية وكاجوال مصنوعة لتجمع الشكل الأنيق والراحة اليومية.": [
    "Dress and casual styles made for everyday comfort and elegance.",
    "Des modèles habillés et décontractés alliant élégance et confort au quotidien."
  ],
  "من المصنع، لإلك": [
    "From our workshop to you",
    "De notre atelier à vous"
  ],
  "VERO امتداد لخبرة مصنع لبناني بالأحذية الرجالية لأكثر من 40 سنة. منختار الجلد الطبيعي ومنهتم بالتفاصيل، لنقدّم حذاء تلبسه بثقة وراحة.": [
    "VERO carries forward over 40 years of Lebanese shoemaking. We select genuine leather and refine every detail for lasting comfort.",
    "VERO perpétue plus de 40 ans de savoir-faire libanais. Nous choisissons le cuir véritable et soignons chaque détail pour votre confort."
  ],
  "جلد طبيعي": [
    "Genuine leather",
    "Cuir véritable"
  ],
  "من الخارج والداخل": [
    "Inside and out",
    "À l’intérieur et à l’extérieur"
  ],
  "صناعة لبنانية": [
    "Made in Lebanon",
    "Fabriqué au Liban"
  ],
  "بأيادٍ محترفة": [
    "By skilled hands",
    "Par des artisans qualifiés"
  ],
  "راحة يومية": [
    "Everyday comfort",
    "Confort quotidien"
  ],
  "بتفاصيل مدروسة": [
    "Thoughtful details",
    "Des détails soignés"
  ],
  "أكثر من 40 سنة": [
    "Over 40 years",
    "Plus de 40 ans"
  ],
  "خبرة بالصناعة": [
    "Of shoemaking experience",
    "D’expérience dans la chaussure"
  ],
  "عجبك موديل؟": [
    "Like a style?",
    "Un modèle vous plaît ?"
  ],
  "راسلنا على واتساب وابعث صورة الحذاء أو اسمه لنساعدك بالمقاس والتفاصيل والطلب.": [
    "Message us on WhatsApp with the shoe photo or name. We’ll help you with sizing and ordering.",
    "Envoyez-nous la photo ou le nom de la chaussure sur WhatsApp. Nous vous aiderons à choisir la pointure et à commander."
  ],
  "تواصل عبر واتساب": [
    "Contact us on WhatsApp",
    "Nous contacter sur WhatsApp"
  ],
  "أحذية رجالية · صناعة لبنانية": [
    "Men’s shoes · Made in Lebanon",
    "Chaussures pour hommes · Fabriquées au Liban"
  ],
  "لوفر جلدي كلاسيكي": [
    "Classic leather loafer",
    "Mocassin classique en cuir"
  ],
  "لوفر بتفاصيل مخملية": [
    "Velvet detail loafer",
    "Mocassin à détails veloutés"
  ],
  "سنيكر جلدي": [
    "Leather sneaker",
    "Basket en cuir"
  ],
  "سنيكر سبور أسود": [
    "Black sport sneaker",
    "Basket sport noire"
  ],
  "بوت جلدي": [
    "Leather boot",
    "Bottine en cuir"
  ],
  "لوفر بنعل مريح": [
    "Comfort sole loafer",
    "Mocassin à semelle confortable"
  ],
  "كلاسيك برش لوك": [
    "Classic brush look",
    "Classique effet brossé"
  ],
  "توكسيدو": [
    "Tuxedo",
    "Tuxedo"
  ],
  "حذاء رسمي": [
    "Dress shoe",
    "Chaussure habillée"
  ],
  "أسود": [
    "Black",
    "Noir"
  ],
  "بني": [
    "Brown",
    "Marron"
  ],
  "كحلي": [
    "Navy",
    "Bleu marine"
  ],
  "هافان": [
    "Tan",
    "Havane"
  ],
  "بيج": [
    "Beige",
    "Beige"
  ],
  "الألوان:": [
    "Colors:",
    "Couleurs :"
  ],
  "المقاس": [
    "Size",
    "Pointure"
  ],
  "اللون": [
    "Color",
    "Couleur"
  ],
  "كل الأحذية": [
    "All shoes",
    "Toutes les chaussures"
  ],
  "الكل": [
    "All",
    "Tous"
  ],
  "رسمي": [
    "Dress",
    "Habillées"
  ],
  "كاجوال": [
    "Casual",
    "Décontracté"
  ],
  "سبور": [
    "Sport",
    "Sport"
  ],
  "بوط": [
    "Boots",
    "Bottines"
  ],
  "طبي": [
    "Comfort",
    "Confort"
  ],
  "ما في موديلات بهالقسم بعد.": [
    "No styles in this category yet.",
    "Aucun modèle dans cette catégorie pour le moment."
  ],
  "السلة": [
    "Cart",
    "Panier"
  ],
  "سلة المشتريات": [
    "Shopping cart",
    "Panier"
  ],
  "السلة فارغة. اختار الحذاء والمقاس واللون من المجموعة.": [
    "Your cart is empty. Choose a shoe, size and color.",
    "Votre panier est vide. Choisissez un modèle, une pointure et une couleur."
  ],
  "حذف": [
    "Remove",
    "Supprimer"
  ],
  "مجموع المنتجات": [
    "Products total",
    "Total des articles"
  ],
  "الدفع عند الاستلام. أجرة التوصيل تُؤكّد بحسب المنطقة قبل تجهيز الطلب.": [
    "Pay on delivery. We’ll confirm the delivery fee for your area before preparing the order.",
    "Paiement à la livraison. Les frais de livraison seront confirmés selon votre région avant la préparation."
  ],
  "الاسم الكامل": [
    "Full name",
    "Nom complet"
  ],
  "رقم الهاتف": [
    "Phone number",
    "Numéro de téléphone"
  ],
  "المنطقة": [
    "Area",
    "Région"
  ],
  "العنوان المفصّل": [
    "Full address",
    "Adresse complète"
  ],
  "ملاحظات للطلب (اختياري)": [
    "Order notes (optional)",
    "Notes de commande (facultatif)"
  ],
  "تمّ تسجيل طلبك": [
    "Your order is placed",
    "Votre commande est enregistrée"
  ],
  "ابعث تفاصيل الطلب على واتساب": [
    "Send order details on WhatsApp",
    "Envoyer les détails sur WhatsApp"
  ],
  "عم نسجّل طلبك…": [
    "Placing your order…",
    "Enregistrement de votre commande…"
  ],
  "حاول مجددًا": [
    "Please try again",
    "Veuillez réessayer"
  ],
  "مثال: 03 123 456": [
    "Example: 03 123 456",
    "Exemple : 03 123 456"
  ],
  "المدينة أو البلدة": [
    "City or town",
    "Ville ou village"
  ],
  "الشارع، المبنى، الطابق": [
    "Street, building, floor",
    "Rue, immeuble, étage"
  ],
  "VERO الصفحة الرئيسية": [
    "VERO home",
    "Accueil VERO"
  ],
  "التنقل الرئيسي": [
    "Main navigation",
    "Navigation principale"
  ],
  "فيديو تشكيلة أحذية VERO": [
    "VERO shoe collection video",
    "Vidéo de la collection VERO"
  ],
  "متصفحك لا يدعم تشغيل الفيديو.": [
    "Your browser does not support video.",
    "Votre navigateur ne prend pas en charge la vidéo."
  ],
  "أقسام الأحذية": [
    "Shoe categories",
    "Catégories de chaussures"
  ],
  "فتح سلة المشتريات": [
    "Open shopping cart",
    "Ouvrir le panier"
  ],
  "سلة المشتريات وإتمام الطلب": [
    "Cart and checkout",
    "Panier et commande"
  ],
  "إغلاق": [
    "Close",
    "Fermer"
  ],
  "تفاصيل ورابط الموديل": [
    "Details and link",
    "Détails et lien"
  ],
  "شوف تفاصيل": [
    "View details for",
    "Voir les détails de"
  ],
  "رجوع إلى المجموعة": [
    "Back to collection",
    "Retour à la collection"
  ],
  "الألوان المتوفرة": [
    "Available colors",
    "Couleurs disponibles"
  ],
  "المقاسات": [
    "Sizes",
    "Pointures"
  ],
  "استفسر عن هذا الموديل عبر واتساب": [
    "Ask about this style on WhatsApp",
    "Se renseigner sur ce modèle sur WhatsApp"
  ],
  "انسخ رابط الموديل": [
    "Copy style link",
    "Copier le lien du modèle"
  ],
  "تم نسخ الرابط": [
    "Link copied",
    "Lien copié"
  ],
  "منأكّد اللون والمقاس المتوفرين وأجرة التوصيل قبل تجهيز الطلب.": [
    "We’ll confirm the available color, size and delivery fee before preparing your order.",
    "Nous confirmerons la couleur, la pointure et les frais de livraison avant de préparer votre commande."
  ],
  "انضاف": [
    "Added",
    "Ajouté"
  ],
  "إلى السلة": [
    "to cart",
    "au panier"
  ],
  "عرض السلة": [
    "View cart",
    "Voir le panier"
  ],
  "الحد الأعلى 10 أزواج من نفس الموديل": [
    "Maximum 10 pairs of the same style",
    "Maximum 10 paires du même modèle"
  ],
  "أناقة بترافقك": [
    "Elegance with you",
    "L’élégance vous accompagne"
  ],
  "بكل خطوة": [
    "at every step",
    "à chaque pas"
  ],
  "اختار اللون": [
    "Choose a color",
    "Choisissez une couleur"
  ],
  "اختار المقاس": [
    "Choose a size",
    "Choisissez une pointure"
  ],
  "أضف إلى السلة": [
    "Add to cart",
    "Ajouter au panier"
  ],
  "ثبّت الطلب": [
    "Place order",
    "Confirmer la commande"
  ],
  "الكمية": [
    "Quantity",
    "Quantité"
  ],
  "عدد": [
    "Qty",
    "Quantité"
  ],
  "رقم طلبك": [
    "Your order number",
    "Votre numéro de commande"
  ],
  "منراجع التوافر وأجرة التوصيل ومنتواصل معك على الرقم المسجّل قبل التجهيز.": [
    "We’ll confirm your order and delivery fee by phone before preparing it.",
    "Nous vous contacterons au numéro indiqué pour confirmer la commande et les frais de livraison avant la préparation."
  ],
  "من VERO": [
    "by VERO",
    "par VERO"
  ],
  "اختار اللون والمقاس والكمية المتوفرة.": [
    "Choose an available color, size and quantity.",
    "Choisissez une couleur, une pointure et une quantité disponibles."
  ],
  "الحد الأعلى 10 أزواج من نفس اللون والمقاس بالسلة.": [
    "You can add up to 10 pairs of the same color and size to your cart.",
    "Vous pouvez ajouter jusqu’à 10 paires de la même couleur et pointure au panier."
  ],
  "تعذّر تحميل الموديل. حدّث الصفحة وحاول مجدداً.": [
    "Could not load this style. Refresh the page and try again.",
    "Impossible de charger ce modèle. Actualisez la page et réessayez."
  ],
  "دليل المقاسات لهالموديل": [
    "Size guide for this style",
    "Guide des pointures de ce modèle"
  ],
  "قيس طول قدمك من الكعب لأطول إصبع وإنت واقف.": [
    "While standing, measure your foot from the heel to the longest toe.",
    "Debout, mesurez votre pied du talon à l’orteil le plus long."
  ],
  "النمرة": [
    "Size",
    "Pointure"
  ],
  "طول القدم المناسب (سم)": [
    "Recommended foot length (cm)",
    "Longueur du pied conseillée (cm)"
  ],
  "الصورة الرئيسية": [
    "Main photo",
    "Photo principale"
  ],
  "صور للموديل": [
    "photos of this style",
    "photos de ce modèle"
  ],
  "صور الموديل": [
    "Style photos",
    "Photos du modèle"
  ],
  "صور": [
    "photos",
    "photos"
  ],
  "تقليل كمية": [
    "Decrease quantity for",
    "Réduire la quantité de"
  ],
  "زيادة كمية": [
    "Increase quantity for",
    "Augmenter la quantité de"
  ],
  "عسلي": [
    "Honey",
    "Miel"
  ],
  "أسود جلد": [
    "Black leather",
    "Cuir noir"
  ],
  "أسود شاموا": [
    "Black suede",
    "Daim noir"
  ],
  "بني شاموا": [
    "Brown suede",
    "Daim marron"
  ],
  "كحلي شاموا": [
    "Navy suede",
    "Daim bleu marine"
  ],
  "اسود": [
    "Black",
    "Noir"
  ],
  "أبيض": [
    "White",
    "Blanc"
  ],
  "ابيض": [
    "White",
    "Blanc"
  ],
  "رمادي": [
    "Grey",
    "Gris"
  ],
  "رصاصي": [
    "Grey",
    "Gris"
  ],
  "أحمر": [
    "Red",
    "Rouge"
  ],
  "احمر": [
    "Red",
    "Rouge"
  ],
  "خمري": [
    "Burgundy",
    "Bordeaux"
  ],
  "زيتي": [
    "Olive",
    "Vert olive"
  ],
  "أزرق": [
    "Blue",
    "Bleu"
  ],
  "هافانا": [
    "Tan",
    "Havane"
  ],
  "أوكسفورد كلاسيك وينغ تيب": [
    "Classic wingtip Oxford",
    "Richelieu classique à bout fleuri"
  ],
  "حذاء كلاسيكي جلدي برباط وتفاصيل وينغ تيب، صناعة لبنانية": [
    "Classic lace-up leather shoes with wingtip detailing, made in Lebanon",
    "Chaussures classiques à lacets en cuir, à bout fleuri, fabriquées au Liban"
  ],
  "لوفر كلاسيك جلد محبب": ["Classic pebbled leather loafer", "Mocassin classique en cuir grainé"],
  "لوفر كلاسيك بإبزيم معدني": ["Classic loafer with metal buckle", "Mocassin classique à boucle métallique"],
  "ديربي كلاسيك برباط": ["Classic lace-up Derby", "Derby classique à lacets"],
  "حذاء كلاسيكي من الجلد الطبيعي من الداخل والخارج، صناعة لبنانية": ["Classic shoes in genuine leather inside and out, made in Lebanon", "Chaussures classiques en cuir véritable à l’intérieur et à l’extérieur, fabriquées au Liban"],
  "ديربي كاجوال برباط": [
    "Casual lace-up Derby",
    "Derby décontracté à lacets"
  ],
  "حذاء كاجوال برباط ونعل أسود، بخيارات جلد وشاموا": [
    "Casual lace-up shoes with a black sole, available in leather and suede",
    "Chaussures décontractées à lacets et semelle noire, disponibles en cuir et en daim"
  ],
  "كاجوال جلد برباط": [
    "Casual leather lace-up",
    "Chaussure décontractée en cuir à lacets"
  ],
  "حذاء كاجوال جلدي برباط ونعل أسود": [
    "Casual lace-up leather shoes with a black sole",
    "Chaussures décontractées en cuir à lacets et semelle noire"
  ],
  "أناقة يومية": [
    "Everyday elegance",
    "Élégance au quotidien"
  ],
  "جلد وشبك أسود": [
    "Black leather and mesh",
    "Cuir et maille noirs"
  ],
  "للموسم البارد": [
    "For the colder season",
    "Pour la saison froide"
  ],
  "بوط أسود برباط مطاطي": [
    "Black boot with elastic laces",
    "Bottine noire à lacets élastiques"
  ],
  "جلد أسود ونعل مريح": [
    "Black leather with a comfortable sole",
    "Cuir noir et semelle confortable"
  ],
  "حذاء لوفر جلدي أسود": [
    "Black leather loafer",
    "Mocassin en cuir noir"
  ],
  "حذاء لوفر أسود بمقدمة مخملية": [
    "Black loafer with a velvet vamp",
    "Mocassin noir à empeigne veloutée"
  ],
  "حذاء لوفر أسود بنعل مريح": [
    "Black loafer with a comfortable sole",
    "Mocassin noir à semelle confortable"
  ],
  "حذاء توكسيدو رسمي أسود": [
    "Black Tuxedo dress shoe",
    "Chaussure habillée Tuxedo noire"
  ],
  "حذاء سنيكر جلدي أسود": [
    "Black leather sneaker",
    "Basket en cuir noir"
  ],
  "حذاء سنيكر سبور أسود": [
    "Black sport sneaker",
    "Basket sport noire"
  ],
  "بوت جلدي بني": [
    "Brown leather boot",
    "Bottine en cuir marron"
  ],
  "غير مسموح": [
    "Access denied",
    "Accès refusé"
  ],
  "محاولات كتيرة. جرّب بعد 15 دقيقة.": [
    "Too many attempts. Try again in 15 minutes.",
    "Trop de tentatives. Réessayez dans 15 minutes."
  ],
  "اسم المستخدم أو كلمة المرور غير صحيحة": [
    "Incorrect username or password",
    "Nom d’utilisateur ou mot de passe incorrect"
  ],
  "تعذّر الدخول حاليًا": [
    "Unable to sign in right now",
    "Connexion impossible pour le moment"
  ],
  "تعذّر تحميل المستخدمين": [
    "Could not load users",
    "Impossible de charger les utilisateurs"
  ],
  "تأكد من الاسم والصلاحيات. اختر صلاحية واحدة على الأقل، وكلمة المرور 8 أحرف على الأقل.": [
    "Check the name and permissions. Select at least one permission and use a password of at least 8 characters.",
    "Vérifiez le nom et les autorisations. Sélectionnez au moins une autorisation et un mot de passe d’au moins 8 caractères."
  ],
  "مستخدم غير معروف": [
    "Unknown user",
    "Utilisateur inconnu"
  ],
  "حدد كلمة مرور للمستخدم الجديد": [
    "Set a password for the new user",
    "Définissez un mot de passe pour le nouvel utilisateur"
  ],
  "اسم المستخدم موجود. اختار اسمًا غيره.": [
    "This username is taken. Choose another.",
    "Ce nom d’utilisateur existe déjà. Choisissez-en un autre."
  ],
  "تعذّر حفظ المستخدم": [
    "Could not save user",
    "Impossible d’enregistrer l’utilisateur"
  ],
  "اختار صورة حجمها أقل من 6 MB": [
    "Choose an image smaller than 6 MB",
    "Choisissez une image de moins de 6 Mo"
  ],
  "استخدم صورة JPG أو PNG أو WebP": [
    "Use a JPG, PNG or WebP image",
    "Utilisez une image JPG, PNG ou WebP"
  ],
  "تعذّر رفع الصورة. جرّب مجددًا": [
    "Could not upload the image. Try again.",
    "Impossible d’importer l’image. Réessayez."
  ],
  "تعذّر تحميل الموديلات": [
    "Could not load styles",
    "Impossible de charger les modèles"
  ],
  "تأكد من الاسم والسعر والصورة والألوان والمقاسات": [
    "Check the name, price, image, colors and sizes",
    "Vérifiez le nom, le prix, l’image, les couleurs et les pointures"
  ],
  "موديل غير معروف": [
    "Unknown style",
    "Modèle inconnu"
  ],
  "تعذّر حفظ الموديل. جرّب مجددًا": [
    "Could not save the style. Try again.",
    "Impossible d’enregistrer le modèle. Réessayez."
  ],
  "اختار قسمًا صحيحًا": [
    "Choose a valid category",
    "Choisissez une catégorie valide"
  ],
  "تعذّر تغيير القسم. جرّب مجددًا": [
    "Could not change the category. Try again.",
    "Impossible de modifier la catégorie. Réessayez."
  ],
  "طلب غير صالح": [
    "Invalid request",
    "Requête non valide"
  ],
  "اكتب سبب الإلغاء (٣ إلى ٥٠٠ حرف).": [
    "Enter the cancellation reason (3–500 characters).",
    "Indiquez le motif d’annulation (3 à 500 caractères)."
  ],
  "الطلب غير موجود": [
    "Order not found",
    "Commande introuvable"
  ],
  "الطلب محذوف من الأرشيف": [
    "This order has been deleted",
    "Cette commande a été supprimée"
  ],
  "تعذّر إلغاء الطلب. حاول مجددًا.": [
    "Could not cancel the order. Try again.",
    "Impossible d’annuler la commande. Réessayez."
  ],
  "رقم الطلب غير صالح": [
    "Invalid order number",
    "Numéro de commande non valide"
  ],
  "الطلب غير موجود أو محذوف مسبقًا": [
    "Order not found or already deleted",
    "Commande introuvable ou déjà supprimée"
  ],
  "تعذّر حذف الطلب": [
    "Could not delete the order",
    "Impossible de supprimer la commande"
  ],
  "ما فيك تسجّل طلب ملغى.": [
    "A cancelled order cannot be registered.",
    "Une commande annulée ne peut pas être enregistrée."
  ],
  "تعذّر تسجيل الطلب. حاول مجددًا.": [
    "Could not register the order. Try again.",
    "Impossible d’enregistrer la commande. Réessayez."
  ],
  "الطلب ليس في أرشيف المحذوف": [
    "This order is not in the deleted archive",
    "Cette commande ne figure pas dans les archives des suppressions"
  ],
  "تعذّر إرجاع الطلب": [
    "Could not restore the order",
    "Impossible de restaurer la commande"
  ],
  "تأكد من الاسم، رقم الهاتف، المنطقة، العنوان والمنتجات.": [
    "Check your name, phone number, area, address and products.",
    "Vérifiez votre nom, numéro de téléphone, région, adresse et articles."
  ],
  "هناك منتج أو مقاس أو لون غير صالح. حدّث الصفحة وحاول مجددًا.": [
    "A product, size or color is no longer valid. Refresh the page and try again.",
    "Un article, une pointure ou une couleur n’est plus valide. Actualisez la page et réessayez."
  ],
  "تعذّر تسجيل الطلب الآن. حاول مجددًا أو تواصل معنا على واتساب.": [
    "Could not place your order right now. Try again or contact us on WhatsApp.",
    "Impossible de passer votre commande pour le moment. Réessayez ou contactez-nous sur WhatsApp."
  ],
  "تعذّر تسجيل الطلب": [
    "Could not register the order",
    "Impossible d’enregistrer la commande"
  ],
  "تعذّر عرض المنتجات الآن": [
    "Products are unavailable right now",
    "Les articles sont indisponibles pour le moment"
  ],
  "اشتراك غير صالح": [
    "Invalid subscription",
    "Abonnement non valide"
  ],
  "اختار فيديو MP4 أو WebM حتى 80 MB": [
    "Choose an MP4 or WebM video up to 80 MB",
    "Choisissez une vidéo MP4 ou WebM de 80 Mo maximum"
  ],
  "استخدم فيديو MP4 أو WebM": [
    "Use an MP4 or WebM video",
    "Utilisez une vidéo MP4 ou WebM"
  ],
  "تعذّر رفع الفيديو. جرّب مجددًا": [
    "Could not upload the video. Try again.",
    "Impossible d’importer la vidéo. Réessayez."
  ],
  "VERO | أحذية رجالية صنعت بإتقان في لبنان": [
    "VERO | Men’s shoes crafted in Lebanon",
    "VERO | Chaussures pour hommes fabriquées au Liban"
  ],
  "تسوّق أحذية VERO الرجالية من الجلد الطبيعي. صناعة لبنانية بخبرة تتجاوز 40 سنة.": [
    "Shop VERO men’s genuine leather shoes. Made in Lebanon with over 40 years of experience.",
    "Découvrez les chaussures VERO pour hommes en cuir véritable. Fabriquées au Liban avec plus de 40 ans d’expérience."
  ],
  "تعذّر الدخول": [
    "Unable to sign in",
    "Connexion impossible"
  ],
  "العودة إلى متجر VERO": [
    "Back to the VERO store",
    "Retour à la boutique VERO"
  ],
  "إدارة متجر VERO": [
    "VERO store management",
    "Gestion de la boutique VERO"
  ],
  "أدخل اسم المستخدم وكلمة المرور.": [
    "Enter your username and password.",
    "Saisissez votre nom d’utilisateur et votre mot de passe."
  ],
  "اسم المستخدم": [
    "Username",
    "Nom d’utilisateur"
  ],
  "كلمة المرور": [
    "Password",
    "Mot de passe"
  ],
  "عم نتحقّق…": [
    "Signing in…",
    "Connexion en cours…"
  ],
  "دخول": [
    "Sign in",
    "Se connecter"
  ],
  "حساب الطلبات": [
    "Orders account",
    "Compte des commandes"
  ],
  "صلاحيتك لعرض الطلبات.": [
    "You have permission to view orders.",
    "Vous avez l’autorisation de consulter les commandes."
  ],
  "افتح الطلبات": [
    "View orders",
    "Voir les commandes"
  ],
  "فشل رفع الصورة": [
    "Image upload failed",
    "Échec de l’importation de l’image"
  ],
  "اختار صورة للموديل": [
    "Choose a photo for this style",
    "Choisissez une photo pour ce modèle"
  ],
  "أدخل الطول للنمرة اللي حطّيت إلها عرض عند المشط": [
    "Enter the foot length for each size with a ball-width measurement",
    "Saisissez la longueur du pied pour chaque pointure dont la largeur à l’avant-pied est renseignée"
  ],
  "تعذّر حفظ الموديل": [
    "Could not save the style",
    "Impossible d’enregistrer le modèle"
  ],
  "انحفظ الموديل وصار ظاهر بالمتجر.": [
    "The style has been saved and is now visible in the store.",
    "Le modèle a été enregistré et est désormais visible dans la boutique."
  ],
  "تعذّر الحفظ": [
    "Could not save",
    "Enregistrement impossible"
  ],
  "تعذّر التعديل": [
    "Could not update",
    "Modification impossible"
  ],
  "رجع الموديل ظاهر بالمتجر.": [
    "The style is visible in the store again.",
    "Le modèle est de nouveau visible dans la boutique."
  ],
  "انخفى الموديل عن المتجر.": [
    "The style is now hidden from the store.",
    "Le modèle est désormais masqué dans la boutique."
  ],
  "تعذّر تغيير القسم": [
    "Could not change the category",
    "Impossible de modifier la catégorie"
  ],
  "انتقل «": [
    "Moved “",
    "«"
  ],
  "» إلى قسم": [
    "” to category",
    "» a été déplacé dans la catégorie"
  ],
  "المتجر": [
    "Store",
    "Boutique"
  ],
  "إدارة موديلات VERO": [
    "VERO style management",
    "Gestion des modèles VERO"
  ],
  "أضف موديل جديد أو عدّل صورته، سعره، ألوانه ومقاساته.": [
    "Add a style or edit its photo, price, colors and sizes.",
    "Ajoutez un modèle ou modifiez sa photo, son prix, ses couleurs et ses pointures."
  ],
  "عرض الطلبات": [
    "View orders",
    "Voir les commandes"
  ],
  "المستخدمون": [
    "Users",
    "Utilisateurs"
  ],
  "تسجيل الخروج": [
    "Sign out",
    "Se déconnecter"
  ],
  "الموديلات": [
    "Styles",
    "Modèles"
  ],
  "موديل جديد": [
    "New style",
    "Nouveau modèle"
  ],
  "فلتر أقسام الموديلات": [
    "Filter styles by category",
    "Filtrer les modèles par catégorie"
  ],
  "عم نحمّل الموديلات…": [
    "Loading styles…",
    "Chargement des modèles…"
  ],
  "ظاهر بالمتجر": [
    "Visible in the store",
    "Visible dans la boutique"
  ],
  "مخفي": [
    "Hidden",
    "Masqué"
  ],
  "القسم": [
    "Category",
    "Catégorie"
  ],
  "قسم": [
    "Category",
    "Catégorie"
  ],
  "تعديل": [
    "Edit",
    "Modifier"
  ],
  "إخفاء": [
    "Hide",
    "Masquer"
  ],
  "إظهار": [
    "Show",
    "Afficher"
  ],
  "تعديل الموديل": [
    "Edit style",
    "Modifier le modèle"
  ],
  "اسم الموديل": [
    "Style name",
    "Nom du modèle"
  ],
  "مثلًا: لوفر جلد بني": [
    "For example: brown leather loafer",
    "Par exemple : mocassin en cuir marron"
  ],
  "السعر بالدولار": [
    "Price in USD",
    "Prix en dollars US"
  ],
  "وصف مختصر": [
    "Short description",
    "Description courte"
  ],
  "افصل بين الألوان بفاصلة.": [
    "Separate colors with a comma.",
    "Séparez les couleurs par une virgule."
  ],
  "المقاسات المتوفرة": [
    "Available sizes",
    "Pointures disponibles"
  ],
  "افصل بين المقاسات بفاصلة.": [
    "Separate sizes with a comma.",
    "Séparez les pointures par une virgule."
  ],
  "قياسات قالب هالموديل": [
    "Measurements for this style",
    "Mesures de ce modèle"
  ],
  "اختياري: حط طول القدم المناسب لكل نمرة بالسنتيمتر والعرض عند المشط حسب قياساتكن الفعلية. الخانة الفارغة ما بتظهر للزبون.": [
    "Optional: enter the foot length and ball width for each size in centimetres, using your actual measurements. Empty fields are hidden from customers.",
    "Facultatif : indiquez la longueur du pied et la largeur à l’avant-pied en centimètres pour chaque pointure, selon vos mesures réelles. Les champs vides ne sont pas affichés aux clients."
  ],
  "نمرة": [
    "Size",
    "Pointure"
  ],
  "طول القدم (سم)": [
    "Foot length (cm)",
    "Longueur du pied (cm)"
  ],
  "طول القدم لنمرة": [
    "Foot length for size",
    "Longueur du pied pour la pointure"
  ],
  "بالسنتيمتر": [
    "in centimetres",
    "en centimètres"
  ],
  "سم": [
    "cm",
    "cm"
  ],
  "العرض عند المشط لنمرة": [
    "Ball width for size",
    "Largeur à l’avant-pied pour la pointure"
  ],
  "اختياري": [
    "Optional",
    "Facultatif"
  ],
  "ملاحظة عن القالب": [
    "Fit note",
    "Remarque sur le chaussant"
  ],
  "مثلًا: قالب واسع من الأمام": [
    "For example: a roomy toe box",
    "Par exemple : avant-pied large"
  ],
  "صورة الموديل": [
    "Style photo",
    "Photo du modèle"
  ],
  "JPG أو PNG أو WebP، حتى 6 MB. للموديل الموجود، اتركها فارغة لتحافظ على الصورة.": [
    "JPG, PNG or WebP, up to 6 MB. Leave empty to keep an existing style’s photo.",
    "JPG, PNG ou WebP, 6 Mo maximum. Laissez ce champ vide pour conserver la photo d’un modèle existant."
  ],
  "الصورة الحالية": [
    "Current photo",
    "Photo actuelle"
  ],
  "الصورة المختارة:": [
    "Selected photo:",
    "Photo sélectionnée :"
  ],
  "إظهار الموديل بالمتجر": [
    "Show style in the store",
    "Afficher le modèle dans la boutique"
  ],
  "عم نحفظ…": [
    "Saving…",
    "Enregistrement…"
  ],
  "احفظ التعديل": [
    "Save changes",
    "Enregistrer les modifications"
  ],
  "أضف الموديل": [
    "Add style",
    "Ajouter le modèle"
  ],
  "غير مسموح بإدارة المستخدمين": [
    "You cannot manage users",
    "Vous n’avez pas l’autorisation de gérer les utilisateurs"
  ],
  "العودة": [
    "Back",
    "Retour"
  ],
  "إضافة وتعديل الموديلات": [
    "Add and edit styles",
    "Ajouter et modifier les modèles"
  ],
  "تعذّر التحميل": [
    "Could not load",
    "Chargement impossible"
  ],
  "انحفظ المستخدم. التعديلات على الصلاحية بتفعَل عند دخوله مجددًا.": [
    "User saved. Permission changes take effect when they sign in again.",
    "Utilisateur enregistré. Les nouvelles autorisations prendront effet à sa prochaine connexion."
  ],
  "توقف الحساب وانتهت جلساته المفتوحة.": [
    "The account has been disabled and its active sessions have ended.",
    "Le compte a été désactivé et ses sessions ouvertes ont été fermées."
  ],
  "تفعّل الحساب.": [
    "The account has been enabled.",
    "Le compte a été activé."
  ],
  "إدارة المتجر": [
    "Store management",
    "Gestion de la boutique"
  ],
  "مستخدمو VERO": [
    "VERO users",
    "Utilisateurs VERO"
  ],
  "أضف حسابًا للطلبات أو للموديلات، وعدّل الصلاحيات من هون.": [
    "Add accounts for orders or styles and manage their permissions here.",
    "Ajoutez des comptes pour les commandes ou les modèles et gérez leurs autorisations ici."
  ],
  "الطلبات": [
    "Orders",
    "Commandes"
  ],
  "الحسابات": [
    "Accounts",
    "Comptes"
  ],
  "حذف وإرجاع الطلبات": [
    "Delete and restore orders",
    "Supprimer et restaurer les commandes"
  ],
  "تسجيل الطلب": [
    "Register order",
    "Enregistrer la commande"
  ],
  "الإحصاءات": [
    "Statistics",
    "Statistiques"
  ],
  "فعّال": [
    "Active",
    "Actif"
  ],
  "موقوف": [
    "Disabled",
    "Désactivé"
  ],
  "إيقاف": [
    "Disable",
    "Désactiver"
  ],
  "تفعيل": [
    "Enable",
    "Activer"
  ],
  "تعديل مستخدم": [
    "Edit user",
    "Modifier l’utilisateur"
  ],
  "مستخدم جديد": [
    "New user",
    "Nouvel utilisateur"
  ],
  "الاسم": [
    "Name",
    "Nom"
  ],
  "بالأحرف الإنجليزية والأرقام، مثل ali.orders": [
    "Use Latin letters and numbers, e.g. ali.orders",
    "Utilisez des lettres latines et des chiffres, par exemple ali.orders"
  ],
  "الصلاحيات": [
    "Permissions",
    "Autorisations"
  ],
  "عرض الإحصاءات ومجاميع المبيعات": [
    "View statistics and sales totals",
    "Consulter les statistiques et les totaux des ventes"
  ],
  "حذف الطلبات وإرجاعها من الأرشيف": [
    "Delete orders and restore them from the archive",
    "Supprimer les commandes et les restaurer depuis les archives"
  ],
  "اتركها فارغة للمحافظة عليها، أو اكتب كلمة جديدة لتغييرها.": [
    "Leave blank to keep it, or enter a new password to change it.",
    "Laissez vide pour le conserver, ou saisissez un nouveau mot de passe pour le modifier."
  ],
  "8 أحرف على الأقل. أعطِها للموظف مباشرة.": [
    "At least 8 characters. Share it directly with the employee.",
    "Au moins 8 caractères. Communiquez-le directement à l’employé."
  ],
  "الحساب فعّال": [
    "Account enabled",
    "Compte actif"
  ],
  "حفظ المستخدم": [
    "Save user",
    "Enregistrer l’utilisateur"
  ],
  "تعذّر تحميل الفيديو الحالي": [
    "Could not load the current video",
    "Impossible de charger la vidéo actuelle"
  ],
  "حجم الفيديو يجب أن يكون أقل من 80 MB": [
    "The video must be smaller than 80 MB",
    "La vidéo doit faire moins de 80 Mo"
  ],
  "تعذّر رفع الفيديو": [
    "Could not upload the video",
    "Impossible d’importer la vidéo"
  ],
  "تم نشر فيديو مراحل التصنيع على الموقع.": [
    "The manufacturing video has been published on the website.",
    "La vidéo de fabrication a été publiée sur le site."
  ],
  "فيديو مراحل التصنيع": [
    "Manufacturing video",
    "Vidéo de fabrication"
  ],
  "ارفع فيديو المصنع ليظهر بقسم «كيف منصنّع حذاءك؟». رفع فيديو جديد يستبدل الفيديو المعروض.": [
    "Upload your factory video for the “Inside our factory” section. A new upload replaces the current video.",
    "Importez la vidéo de votre atelier pour la rubrique « Au cœur de notre atelier ». Une nouvelle vidéo remplace la vidéo actuelle."
  ],
  "الفيديو الحالي": [
    "Current video",
    "Vidéo actuelle"
  ],
  "اختار فيديو": [
    "Choose a video",
    "Choisissez une vidéo"
  ],
  "MP4 أو WebM حتى 80 MB. يُفضّل فيديو ٤٥–٦٠ ثانية مضغوط بدقة 720p.": [
    "MP4 or WebM, up to 80 MB. A compressed 45–60 second video at 720p is recommended.",
    "MP4 ou WebM, 80 Mo maximum. Une vidéo compressée de 45 à 60 secondes en 720p est recommandée."
  ],
  "عم نرفع الفيديو…": [
    "Uploading video…",
    "Importation de la vidéo…"
  ],
  "رفع وتبديل الفيديو": [
    "Upload and replace video",
    "Importer et remplacer la vidéo"
  ],
  "رفع ونشر الفيديو": [
    "Upload and publish video",
    "Importer et publier la vidéo"
  ],
  "خدمة التنبيهات غير جاهزة بعد.": [
    "Notifications are not ready yet.",
    "Les notifications ne sont pas encore disponibles."
  ],
  "اسمح بالإشعارات من إعدادات المتصفح وحاول مجددًا.": [
    "Allow notifications in your browser settings and try again.",
    "Autorisez les notifications dans les paramètres du navigateur et réessayez."
  ],
  "ما قدرنا نحفظ اشتراك التنبيهات. حاول مجددًا.": [
    "Could not save your notification subscription. Try again.",
    "Impossible d’enregistrer votre abonnement aux notifications. Réessayez."
  ],
  "التنبيهات مفعّلة على هيدا الجهاز.": [
    "Notifications are enabled on this device.",
    "Les notifications sont activées sur cet appareil."
  ],
  "تعذّر تفعيل التنبيهات.": [
    "Could not enable notifications.",
    "Impossible d’activer les notifications."
  ],
  "بعتنا إشعار تجريبي لهيدا الجهاز. انتظر ثواني.": [
    "A test notification has been sent to this device. Please wait a few seconds.",
    "Une notification de test a été envoyée à cet appareil. Patientez quelques secondes."
  ],
  "تعذّر إرسال الإشعار التجريبي.": [
    "Could not send the test notification.",
    "Impossible d’envoyer la notification de test."
  ],
  "حذف الطلب": [
    "Delete order",
    "Supprimer la commande"
  ],
  "من القوائم والإحصاءات؟": [
    "from the lists and statistics?",
    "des listes et des statistiques ?"
  ],
  "العودة إلى VERO": [
    "Back to VERO",
    "Retour à VERO"
  ],
  "الإدارة": [
    "Management",
    "Gestion"
  ],
  "طلبات VERO": [
    "VERO orders",
    "Commandes VERO"
  ],
  "فلتر حالة الطلبات": [
    "Filter by order status",
    "Filtrer par statut de commande"
  ],
  "الجديدة": [
    "New",
    "Nouvelles"
  ],
  "أرشيف المسجّلة": [
    "Registered archive",
    "Archives des commandes enregistrées"
  ],
  "أرشيف الملغاة": [
    "Cancelled archive",
    "Archives des annulations"
  ],
  "أرشيف المحذوف": [
    "Deleted archive",
    "Archives des suppressions"
  ],
  "تنبيهات الطلبات": [
    "Order notifications",
    "Notifications des commandes"
  ],
  "تنبيه عند وصول طلب جديد": [
    "Get notified of new orders",
    "Recevoir une notification pour chaque nouvelle commande"
  ],
  "فعّل الإشعارات على كل كمبيوتر أو آيفون بدك يوصله التنبيه. الحسابات التي تشاهد الطلبات يمكنها التفعيل.": [
    "Enable notifications on each computer or iPhone where you want to receive them. Accounts with order access can enable this feature.",
    "Activez les notifications sur chaque ordinateur ou iPhone souhaité. Les comptes autorisés à consulter les commandes peuvent activer cette fonction."
  ],
  "على الآيفون: افتح هيدي الصفحة من Safari، اضغط مشاركة ثم «إضافة إلى الشاشة الرئيسية»، وافتحها من الأيقونة لتفعيل الإشعارات. على الكمبيوتر استخدم متصفحًا يدعم الإشعارات.": [
    "On iPhone, open this page in Safari, tap Share, then Add to Home Screen. Open it from that icon to enable notifications. On a computer, use a browser that supports notifications.",
    "Sur iPhone, ouvrez cette page dans Safari, touchez Partager puis Sur l’écran d’accueil. Ouvrez-la depuis cette icône pour activer les notifications. Sur ordinateur, utilisez un navigateur compatible."
  ],
  "لحظة...": [
    "Please wait…",
    "Veuillez patienter…"
  ],
  "تأكيد تفعيل الإشعارات": [
    "Confirm notifications",
    "Confirmer l’activation des notifications"
  ],
  "فعّل الإشعارات على هيدا الجهاز": [
    "Enable notifications on this device",
    "Activer les notifications sur cet appareil"
  ],
  "جرّب الإشعار": [
    "Test notification",
    "Tester les notifications"
  ],
  "ملخّص المنتجات المطلوبة": [
    "Ordered products summary",
    "Récapitulatif des articles commandés"
  ],
  "فلاتر الطلبات": [
    "Order filters",
    "Filtres des commandes"
  ],
  "كل الأقسام": [
    "All categories",
    "Toutes les catégories"
  ],
  "غير محدد": [
    "Unspecified",
    "Non précisé"
  ],
  "الموديل": [
    "Style",
    "Modèle"
  ],
  "كل الموديلات": [
    "All styles",
    "Tous les modèles"
  ],
  "من تاريخ": [
    "From date",
    "À partir du"
  ],
  "إلى تاريخ": [
    "To date",
    "Jusqu’au"
  ],
  "مسح الفلاتر": [
    "Clear filters",
    "Réinitialiser les filtres"
  ],
  "عدد الطلبات": [
    "Number of orders",
    "Nombre de commandes"
  ],
  "عدد الأزواج": [
    "Number of pairs",
    "Nombre de paires"
  ],
  "مجموع قيمتها": [
    "Total value",
    "Valeur totale"
  ],
  "هيدي الطلبات محفوظة أدناه للتوثيق، ولا تُحتسب ضمن إحصاءات المبيعات.": [
    "These orders are kept below for reference and are excluded from sales statistics.",
    "Ces commandes sont conservées ci-dessous à titre de référence et sont exclues des statistiques de vente."
  ],
  "سعر الزوج": [
    "Price per pair",
    "Prix par paire"
  ],
  "المجموع": [
    "Total",
    "Total"
  ],
  "الإجمالي": [
    "Grand total",
    "Total général"
  ],
  "ما في طلبات لهيدا الاختيار بعد.": [
    "No orders match this selection yet.",
    "Aucune commande ne correspond à cette sélection pour le moment."
  ],
  "الأرقام بحسب الطلبات الظاهرة في القسم المختار، باستثناء الملغاة والمحذوفة، وقبل تأكيد التسليم.": [
    "Figures reflect the orders shown in the selected section, excluding cancelled and deleted orders, before delivery confirmation.",
    "Les chiffres correspondent aux commandes de la rubrique sélectionnée, hors commandes annulées ou supprimées, avant confirmation de la livraison."
  ],
  "تفاصيل الطلبات": [
    "Order details",
    "Détails des commandes"
  ],
  "ما في طلبات لعرضها.": [
    "No orders to display.",
    "Aucune commande à afficher."
  ],
  "تكبير صورة": [
    "Enlarge photo",
    "Agrandir la photo"
  ],
  "صورة": [
    "Photo",
    "Photo"
  ],
  "مقاس": [
    "Size",
    "Pointure"
  ],
  "رابط الموديل": [
    "Style link",
    "Lien du modèle"
  ],
  "افتح الصورة": [
    "Open photo",
    "Ouvrir la photo"
  ],
  "ملاحظات:": [
    "Notes:",
    "Remarques :"
  ],
  "الحالة:": [
    "Status:",
    "Statut :"
  ],
  "سجّل الطلب:": [
    "Registered by:",
    "Enregistrée par :"
  ],
  "ألغى الطلب:": [
    "Cancelled by:",
    "Annulée par :"
  ],
  "السبب:": [
    "Reason:",
    "Motif :"
  ],
  "حذف الطلب:": [
    "Deleted by:",
    "Supprimée par :"
  ],
  "حذف سابقًا:": [
    "Previously deleted by:",
    "Supprimée précédemment par :"
  ],
  "أرجع الطلب:": [
    "Restored by:",
    "Restaurée par :"
  ],
  "إرجاع الطلب": [
    "Restore order",
    "Restaurer la commande"
  ],
  "جارٍ الحفظ...": [
    "Saving…",
    "Enregistrement…"
  ],
  "سجّل الطلب": [
    "Register order",
    "Enregistrer la commande"
  ],
  "إلغاء الطلب": [
    "Cancel order",
    "Annuler la commande"
  ],
  "سبب الإلغاء": [
    "Cancellation reason",
    "Motif d’annulation"
  ],
  "اكتب سبب إلغاء الطلب": [
    "Enter the cancellation reason",
    "Saisissez le motif d’annulation"
  ],
  "تأكيد الإلغاء": [
    "Confirm cancellation",
    "Confirmer l’annulation"
  ],
  "تراجع": [
    "Back",
    "Retour"
  ],
  "إغلاق الصورة": [
    "Close photo",
    "Fermer la photo"
  ],
  "رجوع إلى الطلبات": [
    "Back to orders",
    "Retour aux commandes"
  ],
  "غير مسموح بعرض الطلبات": [
    "You cannot view orders",
    "Vous n’avez pas l’autorisation de consulter les commandes"
  ],
  "افتح إدارة الموديلات": [
    "Open style management",
    "Ouvrir la gestion des modèles"
  ],
  "تعذّر عرض الطلبات الآن": [
    "Orders cannot be displayed right now",
    "Impossible d’afficher les commandes pour le moment"
  ],
  "جرّب لاحقًا.": [
    "Try again later.",
    "Réessayez plus tard."
  ],
  "الموديل غير موجود | VERO": [
    "Style not found | VERO",
    "Modèle introuvable | VERO"
  ],
  "مرحباً VERO، بدي استفسر عن": [
    "Hello VERO, I’d like to ask about",
    "Bonjour VERO, je souhaite me renseigner sur"
  ],
  "فعّل JavaScript لإضافة المنتج إلى السلة، أو تواصل معنا عبر واتساب.": [
    "Enable JavaScript to add products to your cart, or contact us on WhatsApp.",
    "Activez JavaScript pour ajouter des articles au panier, ou contactez-nous sur WhatsApp."
  ],
  "تعذّر إلغاء الطلب.": [
    "Could not cancel the order.",
    "Impossible d’annuler la commande."
  ],
  "قالب مريح مع رخم عالي": [
    "Comfortable fit with a high instep",
    "Chaussant confortable avec un cou-de-pied haut"
  ],
  "مرحباً VERO، ثبّتت طلب من الموقع.": [
    "Hello VERO, I placed an order on the website.",
    "Bonjour VERO, j’ai passé une commande sur le site."
  ],
  "رقم الطلب": [
    "Order number",
    "Numéro de commande"
  ],
  "الهاتف": [
    "Phone",
    "Téléphone"
  ],
  "العنوان": [
    "Address",
    "Adresse"
  ],
  "المنتجات": [
    "Products",
    "Articles"
  ],
  "جديد": [
    "New",
    "Nouvelle"
  ],
  "مسجّل": [
    "Registered",
    "Enregistrée"
  ],
  "ملغى": [
    "Cancelled",
    "Annulée"
  ],
  "طلب جديد من VERO": [
    "New VERO order",
    "Nouvelle commande VERO"
  ],
  "زوج": [
    "pair",
    "paire"
  ],
  "تنبيهات VERO جاهزة": [
    "VERO notifications are ready",
    "Les notifications VERO sont prêtes"
  ],
  "رح يصلك إشعار هون عند تسجيل طلب جديد.": [
    "You’ll receive a notification here when a new order is placed.",
    "Vous recevrez une notification ici lors d’une nouvelle commande."
  ],
  "افتح لوحة الطلبات للتفاصيل.": [
    "Open the orders dashboard for details.",
    "Ouvrez le tableau des commandes pour plus de détails."
  ],
  "صنع بعناية": [
    "MADE WITH CARE",
    "FABRIQUÉ AVEC SOIN"
  ],
  "حرفتنا": [
    "OUR CRAFT",
    "NOTRE SAVOIR-FAIRE"
  ]
};
  const languages={ar:{name:'عربي',flag:'🇱🇧'},en:{name:'English',flag:'🇬🇧'},fr:{name:'Français',flag:'🇫🇷'}};
  const storage={get:()=>{try{return localStorage.getItem('vero-language')}catch{return null}},set:value=>{try{localStorage.setItem('vero-language',value)}catch{}}};
  let lang=storage.get()||'ar';if(!languages[lang])lang='ar';
  const escapeRegExp=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  // One longest-match pass: a shorter word must never consume part of a phrase.
  const pattern=new RegExp('(?<![\\p{L}\\p{M}])(?:'+Object.keys(dictionary).sort((a,b)=>b.length-a.length).map(escapeRegExp).join('|')+')(?![\\p{L}\\p{M}])','gu');
  const translate=(value,target=lang)=>target==='ar'?String(value):String(value).replace(pattern,source=>dictionary[source][target==='en'?0:1]).replace(/،/g,',').replace(/؛/g,';').replace(/؟/g,'?');
  const textState=new WeakMap(),attributeState=new WeakMap();
  const skip='#language-dialog,.language-toggle,script,style,title,noscript,[translate="no"],[data-no-translate]';
  const apply=root=>{
    if(root.nodeType===3){
      if(root.parentElement?.closest(skip+",textarea"))return;
      let state=textState.get(root);if(!state||root.nodeValue!==state.rendered)state={original:root.nodeValue};
      state.rendered=translate(state.original);textState.set(root,state);if(root.nodeValue!==state.rendered)root.nodeValue=state.rendered;return;
    }
    if(root.nodeType!==1||root.closest(skip))return;
    let attributes=attributeState.get(root);if(!attributes){attributes={};attributeState.set(root,attributes)}
    for(const attribute of ['alt','aria-label','placeholder','title'])if(root.hasAttribute(attribute)){
      const current=root.getAttribute(attribute);let state=attributes[attribute];if(!state||current!==state.rendered)state={original:current};
      state.rendered=translate(state.original);attributes[attribute]=state;if(current!==state.rendered)root.setAttribute(attribute,state.rendered);
    }
    // Keep submitted values stable while translating labels, including implicit option values.
    if(root.tagName==='OPTION'&&!root.hasAttribute('value'))root.setAttribute('value',root.textContent);
    if(!root.hasAttribute('data-no-translate-href')&&root.tagName==='A'&&root.href.startsWith('https://wa.me/')&&root.href.includes('text=')){
      const current=root.getAttribute('href');let state=attributes.href;if(!state||current!==state.rendered)state={original:current};
      const url=new URL(state.original,location.href);url.searchParams.set('text',translate(new URL(state.original,location.href).searchParams.get('text')||''));state.rendered=url.href;attributes.href=state;if(current!==state.rendered)root.setAttribute('href',state.rendered);
    }
    if(root.tagName==='TIME'&&root.dateTime){root.textContent=new Date(root.dateTime).toLocaleString(lang==='ar'?'ar-LB':lang==='fr'?'fr-FR':'en-GB',{timeZone:'Asia/Beirut'});return;}
    for(const child of root.childNodes)apply(child);
  };
  let observer,button,dialog,originalTitle=document.title,renderedTitle=document.title;
  const refresh=()=>{
    observer?.disconnect();
    document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    apply(document.body);
    if(document.title!==renderedTitle)originalTitle=document.title;renderedTitle=translate(originalTitle);document.title=renderedTitle;
    if(button){button.textContent=`${languages[lang].flag} ${languages[lang].name}`;button.setAttribute('aria-label',lang==='ar'?'اختيار اللغة':lang==='fr'?'Choisir la langue':'Choose language')}
    observer?.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['alt','aria-label','placeholder','title','href']});
  };
  const setLanguage=next=>{if(!languages[next])return;lang=next;storage.set(lang);refresh();dialog?.close();window.dispatchEvent(new CustomEvent('vero:languagechange',{detail:{language:lang}}))};
  window.veroI18n={translate,setLanguage,get language(){return lang},refresh};
  const setup=()=>{
    button=document.createElement('button');button.className='language-toggle';button.type='button';
    const header=document.querySelector('.head');if(header)header.append(button);else{const bar=document.createElement('div');bar.className='language-toolbar';bar.append(button);document.body.prepend(bar)}
    dialog=document.createElement('dialog');dialog.id='language-dialog';dialog.className='language-dialog';dialog.innerHTML='<div class="language-panel"><div class="language-mark">VERO</div><h2>اختر اللغة · Choose a language · Choisissez une langue</h2><div class="language-options"></div></div>';document.body.append(dialog);
    const options=dialog.querySelector('.language-options');Object.entries(languages).forEach(([code,item])=>{const option=document.createElement('button');option.type='button';option.lang=code;option.innerHTML=`<span aria-hidden="true">${item.flag}</span> ${item.name}`;option.addEventListener('click',()=>setLanguage(code));options.append(option)});
    button.addEventListener('click',()=>dialog.showModal());
    let pending=false;observer=new MutationObserver(()=>{if(pending)return;pending=true;queueMicrotask(()=>{pending=false;refresh()})});
    refresh();if(!storage.get())dialog.showModal();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();

})();
