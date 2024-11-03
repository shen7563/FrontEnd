import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>뉴스 및 여론 요약 서비스</h1>
      <div className="button-group">
        <button>요약 요청</button>
      </div>
      <div className="results" id="results">
        <h2>뉴스 요약</h2>
        <div className="news-item">
          <h3>뉴스 제목 1</h3>
          <p>이곳에 뉴스 요약이 표시됩니다. 간결하고 핵심적인 내용으로 요약된 뉴스 기사입니다.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            원문 보기
          </a>
        </div>
        <div className="news-item">
          <h3>뉴스 제목 2</h3>
          <p>이곳에 뉴스 요약이 표시됩니다. 간결하고 핵심적인 내용으로 요약된 뉴스 기사입니다.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            원문 보기
          </a>
        </div>

        <h2>여론 요약</h2>
        <div className="opinion-item">
          <h4>긍정적인 여론</h4>
          <p>이곳에 긍정적인 여론 요약이 표시됩니다. 예: "이번 정책은 경제에 긍정적인 영향을 미칠 것으로 예상됩니다."</p>
        </div>
        <div className="opinion-item">
          <h4>부정적인 여론</h4>
          <p>이곳에 부정적인 여론 요약이 표시됩니다. 예: "정책이 충분히 검토되지 않았고, 부정적인 결과를 초래할 수 있습니다."</p>
        </div>
        <div className="opinion-item">
          <h4>중립적인 여론</h4>
          <p>이곳에 중립적인 여론 요약이 표시됩니다. 예: "해당 정책은 전문가들 사이에서도 의견이 분분합니다."</p>
        </div>
      </div>
    </div>
  );
}

export default App;
