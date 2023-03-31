import { React, useState, useEffect } from "react";
import { useFirestore } from "../hooks/useFirestore";
export default function NotForm({ uid }) {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const { dokumanEkle, response } = useFirestore("notlar");

  const handleSubmit = async (e) => {
    e.preventDefault();

    dokumanEkle({
      uid,
      baslik,
      aciklama,
    });
  };
  useEffect(() => {
    if (response.success) {
      setBaslik("");
      setAciklama("");
    }
  }, [response.success]);
  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3> Yeni Bir Not Ekle</h3>
        <label>Not Başlık:</label>
        <input
          type="text"
          onChange={(e) => setBaslik(e.target.value)}
          value={baslik}
        />
        <label>Not Aciklama:</label>
        <input
          type="text"
          onChange={(e) => setAciklama(e.target.value)}
          value={aciklama}
        />
        <button type="submit">Not Ekle</button>
      </form>
    </div>
  );
}
