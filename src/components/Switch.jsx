import React, { useState } from "react";
import '../styles/switch.css'

const Switch = ({ checked, setChecked }) => {
    return (
        <div className="switch-container">
            <span>Dark mode</span>
            <label className="switch-label">
                <input type="checkbox" checked={checked} onChange={() => setChecked((prev) => !prev)} />
                <span className="switch-slider"></span>
            </label>
        </div>
    )
}

export default Switch
