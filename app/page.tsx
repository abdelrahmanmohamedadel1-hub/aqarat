```tsx
import Link from "next/link";
import { db } from "@/lib/supabase";

export default async function Home() {
  let data: any[] = [];

  try {
    const r = await db()
      .from("properties")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(12);

    data = r.data || [];
  } catch {}

  return (
    <>
      <header className="top">
        <div className="navin">
          <Link href="/" className="brand">
            <span className="logo">ع</span>
            عقرات
          </Link>

          <nav className="navlinks">
            <Link href="/properties">العقارات</Link>
            <Link href="/dashboard">لوحة البائع</Link>
            <Link href="/admin">الإدارة</Link>
          </nav>

          <div className="navactions">
            <Link className="btn secondary" href="/dashboard">
              تسجيل الدخول
            </Link>

            <Link className="btn primary" href="/dashboard">
              ＋ اعرض عقارك
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <div className="heroContent">
            <span className="eyebrow">🏠 منصة العقارات المصرية</span>

            <h1>
              عقارك القادم يبدأ من هنا،{" "}
              <span>بثقة ووضوح.</span>
            </h1>

            <p>
              اكتشف عقارات للبيع والإيجار في مصر، قارن المواصفات والأسعار،
              وتعرّف على بيانات العقار والبائع قبل اتخاذ القرار.
            </p>

            <form className="search" action="/properties">
              <input
                name="q"
                placeholder="ابحث بالمنطقة أو اسم العقار..."
              />

              <select name="deal">
                <option value="">بيع أو إيجار</option>
                <option value="sale">بيع</option>
                <option value="rent">إيجار</option>
              </select>

              <select name="type">
                <option value="">كل الأنواع</option>
                <option value="apartment">شقة</option>
                <option value="villa">فيلا</option>
                <option value="land">أرض</option>
                <option value="commercial">تجاري</option>
              </select>

              <button className="btn primary" type="submit">
                بحث
              </button>
            </form>

            <div className="checks">
              <span>✓ تفاصيل واضحة</span>
              <span>✓ عقارات متنوعة</span>
              <span>✓ تواصل مباشر</span>
            </div>
          </div>

          <div className="heroImage">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="عقار حديث"
            />

            <div className="floatingCard">
              <strong>اكتشف بيتك القادم</strong>
              <small>عقارات متنوعة في مكان واحد</small>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="head">
            <div>
              <small>اختيارات عقرات</small>
              <h2>عقارات مميزة</h2>
            </div>

            <Link href="/properties" className="viewAll">
              عرض جميع العقارات ←
            </Link>
          </div>

          <div className="grid">
            {data.length ? (
              data.map((p) => (
                <Link
                  className="card"
                  key={p.id}
                  href={`/properties/${p.id}`}
                >
                  <div className="cardImage">
                    <img
                      src={p.image_url || "/placeholder.svg"}
                      alt={p.title}
                    />

                    <span className="cardBadge">
                      {p.verified ? "✓ موثّق" : "عقار"}
                    </span>

                    <span className="heart">♡</span>
                  </div>

                  <div className="cardbody">
                    <h3>{p.title}</h3>

                    <div className="muted">
                      📍 {p.city} - {p.area}
                    </div>

                    <div className="price">
                      {Number(p.price).toLocaleString("en-US")}{" "}
                      {p.price_currency}
                    </div>

                    <div className="meta">
                      <span>▦ {p.size_m2 || 0} م²</span>
                      <span>🛏 {p.rooms || 0} غرف</span>
                      <span>▣ {p.bathrooms || 0} حمام</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div
                className="panel"
                style={{ gridColumn: "1 / -1" }}
              >
                <h3>لا توجد عقارات منشورة حاليًا</h3>
                <p className="muted">
                  عندما يتم نشر العقارات من لوحة البائع ستظهر هنا
                  تلقائيًا.
                </p>

                <Link
                  href="/dashboard"
                  className="btn primary"
                >
                  أضف أول عقار
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="wrap">
          <div className="band">
            <div>
              <span className="bandLabel">لأصحاب العقارات</span>

              <h2>عندك عقار عايز تعرضه؟</h2>

              <p>
                أضف بيانات عقارك ووصل إعلانك إلى الأشخاص الباحثين
                عن عقارات مناسبة.
              </p>
            </div>

            <Link href="/dashboard" className="btn bandButton">
              ابدأ بإضافة عقارك ←
            </Link>
          </div>
        </section>

        <section className="wrap howSection">
          <div className="head">
            <div>
              <small>طريقة سهلة</small>
              <h2>كيف تعمل عقرات؟</h2>
            </div>
          </div>

          <div className="steps">
            <div className="step">
              <b>01</b>
              <div>
                <h3>ابحث وقارن</h3>
                <p>
                  استخدم البحث للوصول إلى العقارات الأقرب
                  لاحتياجاتك.
                </p>
              </div>
            </div>

            <div className="step">
              <b>02</b>
              <div>
                <h3>راجع التفاصيل</h3>
                <p>
                  افحص السعر والمساحة والمواصفات ومعلومات العقار.
                </p>
              </div>
            </div>

            <div className="step">
              <b>03</b>
              <div>
                <h3>تواصل مباشرة</h3>
                <p>
                  تواصل مع جهة الإعلان للاستفسار وترتيب المعاينة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerin">
          <div>
            <strong>عقرات | Aqarat</strong>
            <p>منصة عقارية مصرية للبحث عن العقارات بسهولة.</p>
          </div>

          <div className="footerLinks">
            <Link href="/properties">العقارات</Link>
            <Link href="/dashboard">لوحة البائع</Link>
            <Link href="/admin">الإدارة</Link>
          </div>

          <span>© 2026 Aqarat</span>
        </div>
      </footer>
    </>
  );
}
```
