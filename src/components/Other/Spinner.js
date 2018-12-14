import React from 'react';
import "./Spinner.css";

export function Spinner() {
    return(
        <div className="spiner">
            <div className="spiner_inner">
                <p className="text">Идет загрузка
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </p>
            </div>
        </div>
    )
}