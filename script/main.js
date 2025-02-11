<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- Cập nhật thumbnail hình ảnh -->
  <meta property="og:image" content="img/IMG_1593.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <title>雲雲點我!</title>
  <link rel="shortcut icon" type="image/png" href="./img/heart.svg" />
  <link rel="stylesheet" href="style/style.css" />
  <style>
    /* CSS để căn giữa nút */
    #playButton {
      position: fixed;
      bottom: 20px; /* Đặt cách đáy trang 20px */
      left: 50%; /* Đặt ngang giữa màn hình */
      transform: translateX(-50%); /* Điều chỉnh để đảm bảo nó chính xác ở giữa */
      padding: 20px 40px;
      background-color: #ff69b4;
      color: white;
      font-size: 20px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 9999; /* Đảm bảo nút sẽ nằm trên các phần tử khác */
    }
  </style>
</head>
<body>

  <!-- Nút phát nhạc -->
  <button id="playButton">Bấm tui!</button>

  <!-- Nội dung chính của trang -->
  <div class="container">
    <div class="one">
      <h1 class="one">
        <span id="name"></span>
      </h1>
      <p class="two" id="greetingText">Cô gái xinh đẹp!</p>
    </div>
    <div class="three">
      <p>Hôm nay là ngày Valentine đầu tiên của tụi mình!!! :D</p>
    </div>
    <div class="four">
      <div class="text-box">
        <p class="hbd-chatbox">
          Chúc bạn một ngày Valentine tràn đầy niềm vui và hạnh phúc.
        </p>
        <p class="fake-btn">♥雲雲♥</p>
      </div>
    </div>
    <div class="five">
      <p class="idea-1">Valentine này, tui không cần gì nhiều</p>
      <p class="idea-2">chỉ cần được bên bạn.</p>
      <p class="idea-3">
        Cảm ơn bạn đã đến và cho tui cơ hội đồng hành cùng bạn.
      </p>
      <p class="idea-4">Dù là Valentine hay bất kỳ ngày nào khác,</p>
      <p class="idea-5">
        tui mong bạn luôn <strong>hạnh phúc</strong> và <strong>vui vẻ</strong>!
        <span>:)</span>
      </p>
      <p class="idea-6">
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </p>
    </div>
    <div class="six">
      <img src="img/vector.jpg" alt="Girl Image" class="girl-dp" id="imagePath" />
      <div class="wish">
        <h3 class="wish-hbd">情人節快樂</h3>
        <h5 id="wishText">kuch kuch</h5>
      </div>
    </div>
    <div class="seven">
      <div class="baloons">
        <img src="img/balloon.svg" alt="Balloon" />
        <img src="img/smiling.svg" alt="Smiling Face" />
        <img src="img/heart.svg" alt="Heart" />
        <img src="img/balloon.svg" alt="Balloon" />
        <img src="img/heart.svg" alt="Heart" />
        <img src="img/balloon.svg" alt="Balloon" />
        <img src="img/music-note.svg" alt="Music Note" />
        <img src="img/heart.svg" alt="Heart" />
        <img src="img/balloon.svg" alt="Balloon" />
        <img src="img/happy.svg" alt="Happy Face" />
        <img src="img/smiling.svg" alt="Smiling Face" />
      </div>
    </div>
    <div class="eight">
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
    </div>
    <div class="nine">
      <p>Giờ thì xoay qua đây nhận quà nè!</p>
      <p id="replay">Bấm vô đây để xem lại nha.</p>
      <p class="last-smile">:)</p>
    </div>
  </div>

  <!-- Thư viện JavaScript -->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
  <script type="text/babel" src="script/main.js"></script>

  <!-- JavaScript để phát nhạc và ẩn nút -->
  <script>
    var audio = new Audio('https://github.com/wowo456hcm/ValentineWish/raw/refs/heads/main/music/music.mp3?raw=true');
    
    // Xử lý sự kiện khi bấm nút
    document.getElementById('playButton').addEventListener('click', function() {
      audio.play();  // Phát nhạc
      this.style.display = 'none';  // Ẩn nút
    });
  </script>
</body>
</html>
