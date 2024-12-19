document.addEventListener('DOMContentLoaded', () => {
  // 1. Website Fade-In Effect
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 2s ease-in-out';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 200);

  // 2. Toggle Theme
  const toggleThemeButton = document.createElement('button');
  toggleThemeButton.textContent = 'Toggle Theme';
  toggleThemeButton.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    document.body.style.backgroundColor = isDark ? '#2D2D2D' : '#f4f4f4';
    document.body.style.color = isDark ? '#ffffff' : '#333';
  });
  document.body.appendChild(toggleThemeButton);

  // 3. Song Interface Modal
  const createSongModal = (songTitle, songSource, imageSrc) => {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1000;
    `;
    modal.innerHTML = `
      <img src="${imageSrc}" alt="${songTitle}" style="width: 100%; height: auto; border-radius: 8px;">
      <h3>${songTitle}</h3>
      <audio controls autoplay>
        <source src="${songSource}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <button style="margin-top: 10px; padding: 10px 20px; background-color: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Close
      </button>
    `;
    document.body.appendChild(modal);

    modal.querySelector('button').addEventListener('click', () => {
      modal.remove();
    });
  };

  // Add click event for all songs
  document.querySelectorAll('#songs tr').forEach((row, index) => {
    if (index > 0) { // Skip header row
      row.addEventListener('click', () => {
        const songTitle = row.querySelector('td:nth-child(1)').textContent;
        const songSource = row.querySelector('audio source').src;
        const imageSrc = 'default-song.jpg'; // Replace with actual image paths if available
        createSongModal(songTitle, songSource, imageSrc);
      });
    }
  });

  // 4. Dynamic Song Addition
  const addSongButton = document.createElement('button');
  addSongButton.textContent = 'Add Song';
  addSongButton.style.cssText = `
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  addSongButton.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>New Song</td>
      <td><audio controls><source src="new-song.mp3" type="audio/mpeg"></audio></td>
      <td><input type="checkbox"></td>
    `;
    document.querySelector('#songs table').appendChild(newRow);
  });
  document.getElementById('songs').appendChild(addSongButton);

  // 5. Cookie Consent Modal
  const cookieConsentModal = document.createElement('div');
  cookieConsentModal.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background-color: #ffffff;
    padding: 10px 15px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  `;
  cookieConsentModal.innerHTML = `
    <p>We use cookies to enhance your experience. Do you accept?</p>
    <button style="margin: 5px; padding: 5px 10px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">
      Accept
    </button>
    <button style="margin: 5px; padding: 5px 10px; background-color: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">
      Reject
    </button>
  `;
  document.body.appendChild(cookieConsentModal);
  cookieConsentModal.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => cookieConsentModal.remove());
  });

  // 6. Registration Form
  const registrationForm = document.createElement('form');
  registrationForm.style.cssText = `
    margin: 20px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 400px;
  `;
  registrationForm.innerHTML = `
    <h3>Register</h3>
    <input type="text" placeholder="Name" required style="margin-bottom: 10px; width: 100%; padding: 10px;">
    <input type="email" placeholder="Email" required style="margin-bottom: 10px; width: 100%; padding: 10px;">
    <input type="password" placeholder="Password" required style="margin-bottom: 10px; width: 100%; padding: 10px;">
    <input type="text" placeholder="Captcha" required style="margin-bottom: 10px; width: 100%; padding: 10px;">
    <button type="submit" style="background-color: #007bff; color: white; padding: 10px; border: none; border-radius: 5px;">Submit</button>
  `;
  document.body.appendChild(registrationForm);

  // 7. Background Music
  const backgroundMusic = document.createElement('audio');
  backgroundMusic.src = 'background-music.mp3';
  backgroundMusic.loop = true;
  backgroundMusic.play();

  // 8. Instagram Login Inputs
  const instagramInputs = document.createElement('div');
  instagramInputs.innerHTML = `
    <input type="text" placeholder="Username" style="margin: 10px; padding: 10px;">
    <input type="password" placeholder="Password" style="margin: 10px; padding: 10px;">
    <button style="background-color: #007bff; color: white; padding: 10px 15px; border: none; border-radius: 5px;">Login</button>
  `;
  document.body.appendChild(instagramInputs);
});
