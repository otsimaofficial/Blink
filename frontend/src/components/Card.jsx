import React from 'react';

export default function Card({ title, children }) {
    return (
        <div className="p-4 rounded shadow bg-white/5 text-white">
            <h3 className="font-bold mb-2">{title}</h3>
            <div>{children}</div>
        </div>
    );
}
