import React from "react";
import Header from "../components/Header";
import HeroNewsLayout from "../components/HeroNewsLayout";
import Gallery from "../components/Gallery";
import { MOCK_HERO, MOCK_GALLERY } from "../lib/mock-config";
import "../styles/Home.module.css";

export default function Home() {
  const newsColumn = (
    <div>
      <h3>News</h3>
      <ul>
        <li>10:55 — Zranění hráče X (krátká zpráva)</li>
        <li>10:30 — Přenos potvrzen na O2 TV</li>
        <li>09:10 — Transfer update</li>
      </ul>
    </div>
  );

  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 1280, margin: "0 auto" }}>
        <HeroNewsLayout
          heroImage={MOCK_HERO.heroImage}
          heroTitle={MOCK_HERO.heroTitle}
          heroPerex={MOCK_HERO.heroPerex}
          newsColumn={newsColumn}
        />

        <section style={{ marginTop: 24 }}>
          <h2>Feature stories</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            <div style={{ padding: 12, borderRadius: 8, background: "#fff" }}>Hero 2 článek</div>
            <div style={{ padding: 12, borderRadius: 8, background: "#fff" }}>Hero 3 článek</div>
            <div style={{ padding: 12, borderRadius: 8, background: "#fff" }}>Hero 4 článek</div>
          </div>
        </section>

        <section style={{ marginTop: 24 }}>
          <h2>Gallery demo</h2>
          <Gallery images={MOCK_GALLERY} />
        </section>
      </main>
    </>
  );
}