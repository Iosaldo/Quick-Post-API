async function postMessage(text) {
    try {
        const response = await fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text })
        });
        const data = await response.json();
        console.log('Sucesso:', data);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}
