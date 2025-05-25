document.getElementById('analyzeBtn').onclick = async function() {
  // In a real extension, you would get the selected video's transcript from Premiere Pro.
  // For now, use a placeholder transcript for testing.
  const fakeTranscript = "Welcome to my travel vlog. Today we visit Paris and explore the Eiffel Tower...";

  // Call your AI backend for ideas
  const response = await fetch('http://localhost:3000/generate-ideas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ transcript: fakeTranscript })
  });
  const data = await response.json();
  document.getElementById('ideas').innerText = data.ideas.join('\n');
};
