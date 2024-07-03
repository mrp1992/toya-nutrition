// pages/index.js
import { useState } from 'react';

export default function Home() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/openaiApi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await res.json();
        setResponse(data.result);
    };

    return (
        <div>
            <h1>OpenAI GPT-4 Demo</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                    cols={50}
                />
                <button type="submit">Submit</button>
            </form>
            {response && <div><strong>Response:</strong><p>{response}</p></div>}
        </div>
    );
}
