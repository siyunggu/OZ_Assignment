const API_URL = "https://api4.binance.com/api/v3/ticker/24hr";
const STORAGE_KEY = "favorites";
const REFRESH_MS = 1000;

const listEl = document.getElementById("coin-list");
const searchEl = document.getElementById("search");
const statusEl = document.getElementById("status");
const tabButtons = document.querySelectorAll(".tab");

let coins = [];                 // 최신 USDT 시세 목록
let currentTab = "all";         // "all" | "favorites"
let keyword = "";               // 검색어 (대문자)
let favorites = loadFavorites();
let isFetching = false;

/* ---------- LocalStorage ---------- */
function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

function toggleFavorite(symbol) {
  if (favorites.includes(symbol)) {
    favorites = favorites.filter((s) => s !== symbol);
  } else {
    favorites.push(symbol);
  }
  saveFavorites();
  render();
}

/* ---------- 데이터 요청 ---------- */
async function fetchTickers() {
  if (isFetching) return; // 이전 요청이 끝나기 전에는 중복 요청 방지
  isFetching = true;

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();

    // USDT 마켓만 사용
    coins = data.filter((item) => item.symbol.endsWith("USDT"));
    statusEl.textContent = "";
    render();
  } catch (err) {
    console.error(err);
    statusEl.textContent = "데이터를 불러오지 못했습니다. 잠시 후 다시 시도합니다.";
  } finally {
    isFetching = false;
  }
}

/* ---------- 렌더링 ---------- */
function formatNumber(value) {
  return Number(value).toLocaleString("en-US", { maximumFractionDigits: 8 });
}

function formatPercent(value) {
  const num = Number(value);
  const sign = num > 0 ? "+" : "";
  return sign + num.toFixed(2) + "%";
}

function getVisibleCoins() {
  return coins.filter((coin) => {
    if (currentTab === "favorites" && !favorites.includes(coin.symbol)) {
      return false;
    }
    return coin.symbol.includes(keyword);
  });
}

function render() {
  const visible = getVisibleCoins();

  if (visible.length === 0) {
    const message =
      currentTab === "favorites" && favorites.length === 0
        ? "관심항목이 없습니다. 전체보기에서 ☆를 눌러 추가하세요."
        : "표시할 항목이 없습니다.";
    listEl.innerHTML = `<tr><td colspan="6" class="empty">${message}</td></tr>`;
    return;
  }

  listEl.innerHTML = visible
    .map((coin) => {
      const percent = Number(coin.priceChangePercent);
      const colorClass = percent > 0 ? "up" : percent < 0 ? "down" : "";
      const isFav = favorites.includes(coin.symbol);

      return `
        <tr>
          <td>
            <button class="star ${isFav ? "on" : ""}" data-symbol="${coin.symbol}"
                    aria-label="${coin.symbol} 관심항목 ${isFav ? "해제" : "추가"}">
              ${isFav ? "★" : "☆"}
            </button>
          </td>
          <td class="symbol">${coin.symbol}</td>
          <td>${formatNumber(coin.lastPrice)}</td>
          <td class="${colorClass}">${formatPercent(percent)}</td>
          <td>${formatNumber(coin.highPrice)}</td>
          <td>${formatNumber(coin.lowPrice)}</td>
        </tr>`;
    })
    .join("");
}

/* ---------- 이벤트 ---------- */
// 별 버튼 (이벤트 위임: 1초마다 다시 그려져도 동작)
listEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".star");
  if (btn) toggleFavorite(btn.dataset.symbol);
});

// 검색
searchEl.addEventListener("input", () => {
  keyword = searchEl.value.trim().toUpperCase();
  render();
});

// 탭 전환
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentTab = btn.dataset.tab;
    tabButtons.forEach((b) => {
      const active = b === btn;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", active);
    });
    render();
  });
});

/* ---------- 시작 ---------- */
fetchTickers();
setInterval(fetchTickers, REFRESH_MS);