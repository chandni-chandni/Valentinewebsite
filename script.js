function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.textContent = "❤";
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(heart);
  }
}

function openLetter() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) {
    alert("Please enter a name first");
    return;
  }

  const formatted = name.charAt(0).toUpperCase() + name.slice(1);

  document.getElementById('greeting').textContent =
    "Dear " + formatted + ",";

  const shortNotes = [
    "Thinking of you today, " + formatted + ".",
    formatted + ", you are appreciated.",
    "A small reminder for you, " + formatted + "."
  ];

  document.getElementById('noteText').textContent =
    shortNotes[Math.floor(Math.random() * shortNotes.length)];

  const letters = [
    formatted + ", you have a way of making ordinary moments feel special. I hope this little note brings a soft smile to your face today.",

    "There is something quietly beautiful about the way you move through the world, " + formatted + ". This message is just a small reminder that you matter.",

    formatted + ", sometimes we forget how much warmth we bring into other people's lives. Today felt like the perfect day to say it.",

    "If today feels like any other day, I hope this changes it just a little, " + formatted + ". You deserve kindness and gentle moments."
  ];

  document.getElementById('letterBody').textContent =
    letters[Math.floor(Math.random() * letters.length)];

  document.getElementById('screen1').classList.add('hidden');
  document.getElementById('screen2').classList.remove('hidden');
}

function goBack() {
  document.getElementById('screen2').classList.add('hidden');
  document.getElementById('screen1').classList.remove('hidden');
}

function resetAll() {
  document.getElementById('nameInput').value = "";
  goBack();
}

document.getElementById('nameInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') openLetter();
});

createFloatingHearts();
