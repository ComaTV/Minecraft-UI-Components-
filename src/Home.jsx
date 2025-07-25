import React from "react";
import Toggle from "./components/Toggle";

export default function Home() {

  return (
    <div style={{ background: '#2a2a2a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: 32 }}>
      <div style={{ textAlign: 'center', fontSize: 22, marginBottom: 24 }}>Normal</div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <div style={{ width: 40, textAlign: 'right', marginRight: 16, fontSize: 18 }}>On</div>
        <Toggle checked={true} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 40, textAlign: 'right', marginRight: 16, fontSize: 18 }}>Off</div>
        <Toggle checked={false} />
      </div>
    </div>
  );
}