import React from 'react';
import Card from '../components/Card.jsx';

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Blink</h1>
            <Card title="Welcome">Predict, compete, and climb the leaderboard.</Card>
        </div>
    );
}
