"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

export default function PopupImage(): JSX.Element | null {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    // Setiap kali user buka halaman, popup langsung muncul
    setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full animate-fade-in">
        {/* Klik gambar untuk menuju link promo */}
        <Link href="https://t.ly/Baliplay" target="_blank">
          <Image
            src="/Baliplay-slot.jpg"
            alt="Promo Baliplay"
            width={600}
            height={600}
            className="w-full h-auto cursor-pointer"
          />
        </Link>

        {/* Tombol Close */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black transition"
          aria-label="Close popup"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
