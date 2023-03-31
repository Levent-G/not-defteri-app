import React from "react";
import NotForm from "../components/NotForm";
import { useAuthContext } from "../hooks/useAuthContext";
import NotDetay from "../components/NotDetay";
import { useCollection } from "../hooks/useCollection";
export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "notlar",
    ["uid", "==", user.uid],
    ["tarih", "desc"]
  );

  console.log(documents);
  return (
    <div className="home">
      <NotForm uid={user.uid} />
      <hr />
      <div className="notlar">
        {error && <div className="error">{error}</div>}
        {documents &&
          documents.map((doc) => <NotDetay not={doc} key={doc.id} />)}
      </div>
    </div>
  );
}
