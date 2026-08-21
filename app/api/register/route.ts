import { NextResponse } from "next/server";

function clean(value: unknown, max = 300) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 30);
  const telegram = clean(body.telegram, 50);
  const note = clean(body.note, 800);

  if (name.length < 2 || phone.length < 10) {
    return NextResponse.json({ error: "نام و شماره را کامل وارد کنید." }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "ارسال فعلاً فعال نیست." }, { status: 500 });
  }

  const text = [
    "ثبت‌نام جدید از love-academy.ir",
    `نام: ${name}`,
    `تلفن: ${phone}`,
    telegram ? `تلگرام: ${telegram}` : "",
    note ? `توضیح: ${note}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!telegramRes.ok) {
    return NextResponse.json({ error: "ارسال به تلگرام نشد." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
                             }
