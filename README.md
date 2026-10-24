# Aqarat | عقرات

منصة عقارات مصرية قابلة للتوسع، مجهزة لـ GitHub + Vercel + Supabase.

## التشغيل
npm install
cp .env.example .env.local
# ضع مفاتيح Supabase ثم:
npm run dev

## قاعدة البيانات
نفّذ `supabase/schema.sql` داخل Supabase SQL Editor.

## الربح المقترح
- باقات شهرية للشركات والوسطاء.
- إعلانات مميزة وBoost.
- صفحات شركات مميزة.
- Leads مدفوعة.
- إعلانات ورعاية مناطق.
- رسوم خدمة/عمولة فقط بعد مراجعة المتطلبات القانونية.

## قبل الإنتاج
إكمال Supabase Auth، سياسات RLS الدقيقة، Storage للصور، مراجعة الإعلانات، حماية Admin، rate limiting، وسياسات الخصوصية والشروط.
