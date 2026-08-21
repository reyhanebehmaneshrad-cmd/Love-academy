"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

export default function RegisterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "ارسال نشد");
      }

      setStatus("ok");
      setMessage("درخواست ثبت‌نام شما دریافت شد. به‌زودی پیام می‌دهیم.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("ارسال نشد. دوباره تلاش کنید یا از واتساپ پیام بدهید.");
    }
  }

  return (
    <form className="register-form" onSubmit={onSubmit}>
      <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" />

      <label>
        نام و نام خانوادگی
        <input name="name" required minLength={2} placeholder="مثلاً سارا محمدی" />
      </label>

      <label>
        شماره تماس یا واتساپ
        <input name="phone" required minLength={10} placeholder="0912xxxxxxx" />
      </label>

      <label>
        تلگرام (اختیاری)
        <input name="telegram" placeholder="@username" />
      </label>

      <label>
        هدف شما از دوره
        <textarea name="note" rows={4} placeholder="کمی بنویسید رابطه را از کجا می‌خواهید جلو ببرید." />
      </label>

      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "در حال ارسال..." : "ارسال درخواست ثبت‌نام"}
      </button>

      {message && (
        <p className={status === "ok" ? "form-ok" : "form-error"}>{message}</p>
      )}
    </form>
  );
}
