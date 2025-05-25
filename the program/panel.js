document.getElementById('analyzeBtn').onclick = async function() {
  // Placeholder: In a real plugin, you'd get the selected video's audio here
  const fakeTranscript = "Welcome to my travel vlog. Today we visit Paris and explore the Eiffel Tower...";

  // Call your AI backend (e.g., OpenAI API) for ideas
  const response = await fetch('http://localhost:3000/generate-ideas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ transcript: fakeTranscript })
  });
  const data = await response.json();
  document.getElementById('ideas').innerText = data.ideas.join('\n');
};
