"use client";
import React, { useState, useEffect } from "react";
import { ReactPixelTrack } from "./reactPixel";

function Form() {
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");

  const submitCalback = () => {
    ReactPixelTrack().then((ReactPixel) => {
      ReactPixel.track("Lead");
    });
  };

  useEffect(() => {
    let form = document.getElementById("form");
    form?.addEventListener("submit", submitCalback);

    return () => {
      form?.removeEventListener("submit", submitCalback);
    };
  }, []);

  return (
    <form
      id="form"
      className="form-promo-bbs"
      action="https://app.loops.id/save-order/pemesanan-generos-customer-service-3"
      method="POST"
    >
      <div>
        <label> Nama lengkap * </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
          }}
          placeholder="Tulis nama Anda"
          required
        />
      </div>

      <div>
        <label>Nomor Whatsapp Aktif *</label>
        <br />
        <input
          placeholder="Sebutkan nomor HP aktif Anda: contoh 081234567890"
          type="text"
          id="phone"
          value={telepon}
          onChange={(e) => {
            setTelepon(e.target.value);
          }}
          pattern="[0]{1}[0-9]{8,12}"
          name="phone"
          required
        />
      </div>

      <input value="AMBIL PROMO VIA WHATSAPP" type="submit" />
    </form>
  );
}

export default Form;
