import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import moment from "moment";
import "moment/locale/tr";
export default function NotDetay({ not }) {
  const { dokumanSil } = useFirestore("notlar");
  return (
    <div className="not-detay">
      <h4>{not.baslik}</h4>
      <p>{not.aciklama}</p>
      <p className="zaman">
        {moment(new Date(not.tarih?.toDate())).format("L")}
      </p>
      <span
        onClick={() => dokumanSil(not.id)}
        className="material-symbols-outlined"
      >
        delete_forever
      </span>
    </div>
  );
}
