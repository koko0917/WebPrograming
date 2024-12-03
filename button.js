// 애니메이션 데이터
const animeData = [
  { title: '디지몬', genre: 'Adventure', description: '디지몬과 함께하는 소년들의 이야기.', img: 'images/digimon (1).jpg' },
  { title: '원피스', genre: 'Adventure', description: '해적왕을 꿈꾸는 소년의 모험.', img: 'images/button/Onepiece.png' },
  { title: '세일러문', genre: 'Magic Girls', description: '마법 소녀들이 세계를 구하는 이야기.', img: 'images/button/SailorMoon.png' },
  { title: '꼬마마법사 레미', genre: 'Magic Girls', description: '마법을 쓰는 소녀 레미의 모험을 그린 애니메이션.', img: 'images/button/magical-do-re-mi.png' },
  { title: '닥터 슬럼프', genre: 'Comedy', description: '과학자와 로봇의 엉뚱하고 유머러스한 이야기', img: 'images/button/dr-slump2.png' },
  { title: '무적코털 보보보', genre: 'Comedy', description: '제국의 압제에 맞서 두발의 자유를 외치며 분연히 일어난 사람들의 이야기', img: 'images/button/bobobo.png' },
  { title: '마징가 제트', genre: 'Sci-fi/Robots', description: '로봇 마징가 Z와 함께 악당들과 싸우며 지구를 지키는 이야기', img: 'images/button/mazinger-z.png' },
  { title: '은하철도 999', genre: 'Sci-fi/Robots', description: '소년이 기계 몸을 얻기 위해 메텔과 은하초특급 999호를 타고 우주를 여행하는 이야기.', img: 'images/button/galaxy-express-999.png' },
  { title: '소년탐정 김전일', genre: 'Mystery/Horror', description: '명탐점인 할아버지의 피를 이어받은 김전일이 사건을 해결해나가는 이야기.', img: 'images/button/young-kindaichi-returns2.jpg' },
  { title: '괴담 레스토랑', genre: 'Mystery/Horror', description: '일본의 공포를 소재로 하는 옴니버스식 장편 시리즈.', img: 'images/button/thriller-restaurant.jpg' },
  { title: '러브 콤플렉스', genre: 'Romance', description: '운명적인 사랑의 교차.', img: 'images/button/love-com.jpg' },
  { title: '클라나드', genre: 'Romance', description: '감동적인 사랑과 가족 이야기.', img: 'images/button/Clannad.png' },
  { title: '엉덩이 탐정', genre: 'Fantasy/Family', description: '단서를 찾아 범인을 잡는 엉덩이 탐정의 추리 이야기', img: 'images/button/ButtDetective.jpg' },
  { title: '우리집 3공주', genre: 'Fantasy/Family', description: '천방지축 세 딸들의 우당탕탕 대소동!', img: 'images/button/my-three-daughters.jpg' },
  { title: '아수라', genre: 'Drama', description: '끔찍한 기근으로 황폐해진 나라에서 살기 위해 살인에 의지하는 아이의 투쟁. ', img: 'images/button/asura.jpg' },
  { title: '걸즈 밴드 크라이', genre: 'Drama', description: '음악과 청춘을 다룬 소녀들의 밴드 이야기.', img: 'images/button/Gbc.jpg' }
];

// 필터링 및 화면에 표시하기
function filterAnime(genre) {
  const animeList = document.getElementById('animeList');
  animeList.innerHTML = ''; // 기존 콘텐츠 초기화

  // 전체 장르 처리하기
  const filteredAnime = genre === 'All' 
      ? animeData // 전체 데이터를 사용하기
      : animeData.filter(anime => anime.genre === genre);
  // 애니메이션에 대한 데이터가 있을 경우 나타내기
  if (filteredAnime.length > 0) {
      filteredAnime.forEach(anime => {
          const card = document.createElement('div');
          card.className = 'anime-card';
          card.innerHTML = `
              <div class="image" style="background-color: #f0f0f0; height: 100px; background-image: url('${anime.img}'); background-size: cover;"></div>
              <h3>${anime.title}</h3>
              <p>${anime.description}</p>
          `;
          animeList.appendChild(card);
      });
  } else {
      animeList.innerHTML = '<p>해당 장르의 애니메이션이 없습니다.</p>';
  }
}
