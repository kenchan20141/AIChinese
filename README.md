# 神思 (Sansi) - DSE 中文科人工智能學習系統

**神思 (Sansi)** 是一款專為香港中學文憑試（HKDSE）中文科考生設計的 **Progressive Web App (PWA)**。  
本系統深度整合生成式 AI，提供從構思、寫作、評改到模擬評卷的全流程支援，採用純前端、無伺服器架構，結合沉浸式介面與本地數據庫，打造私隱安全、反應迅速且具儀式感的學習環境。

![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-orange)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20IndexedDB%20%7C%20GenAI-blue)
![Target](https://img.shields.io/badge/Exam-HKDSE-red)
![License](https://img.shields.io/badge/License-Proprietary%20(Educational)-red)

## 📖 設計理念

1. **極致沉浸感**  
   動態場景切換、環境音效、流暢轉場動畫（Shrink-Exit / Pop-Enter），有效緩解學習分心問題。

2. **人格化虛擬教師**  
   內建「陳 SIR」與多位虛擬閱卷員，模擬真實教師語氣、評分習慣與個性回饋。

3. **極致隱私保護**  
   所有創作、對話、評分紀錄全部儲存於瀏覽器 IndexedDB，**零上傳**、**零第三方存取**。

## 🏛️ 五大核心模組

### 1. ✍️ 敘事抒情寫作
- 文章點評（雙模型驗證 + 六維雷達圖：立意 / 取材 / 扣題 / 詳略 / 詞彙 / 文學性）
- 大綱邏輯檢核（起承轉合 / 三線結構）
- 解題指引 + 三個高潛力「寫作種子」
- 自動生成 50+ 敘事物象庫

### 2. ⚖️ 議論寫作
- 嚴格關鍵詞比對防偏題
- 謀篇、論點、論據、論證、文筆 五維聚焦分析
- 自動生成論點框架 + 古今中外論據 + 論證路徑

### 3. 📖 閱讀理解
- 點評模式：答題方向、引證準確性、推論嚴謹度
- 指引模式：層層遞進的引導問題 + 關鍵答題詞彙
- 訓練模式：連結外部閱讀練習資源

### 4. 🔗 整合拓展（實用文）
- 主題句與抄錄資料的邏輯關係分析
- 拓展方向扣題度與具體性評估
- 實時字數倒數 + 篇幅控制訓練

### 5. 📚 課外閱讀與思辨
- 深度書籍討論（可切換嚴肅 / 輕鬆語氣）
- 培養批判性思維與多元視角

## 🛠️ 語薈工具箱（Mind Map 整合 20+ 學習工具）

- **題孳** → AI 自動出卷（閱讀 + 寫作）
- **翻水** → 高分範文生成（敘事 / 議論雙版本）
- **智能原稿紙** → 模擬考試方格紙 + 格式 / 字數即時檢測
- **字斟・句酌** → 精準詞彙潤色
- **文樞 (Mensyu)** → 文言文篇章庫 + 語譯 + 精準詞解
- **背書神器** → 語音偵測自動重置倒數
- **文章幻燈片** → 作文轉視覺化簡報
- **OCR 文字識別** → 手寫筆記數位化
- **解憂雜貨店** → AI 心理支持伴侶
- ……及其他 10+ 實用工具

## 💻 技術棧

- Frontend: Vanilla JavaScript (ES6+), HTML5, CSS3
- Styling: CSS Variables, Keyframes, Glassmorphism
- Storage: IndexedDB（支援大量文字與 HTML 結構）
- Visualization: Chart.js（客製化雷達圖）
- Utilities: OpenCC（簡繁轉換）、Regex（Markdown 與 HTML 處理）
- Export: Client-side Blob 生成與下載

## ⚠️ 免責聲明

1. 本系統所有 AI 評分、建議、範文均由生成式模型產生，**僅供學習參考**，不代表香港考試及評核局（HKEAA）官方標準或立場。
2. 部分功能需聯網使用 AI 模型。
3. 建議使用最新版 Chrome / Edge / Safari 以確保 IndexedDB 與動畫效果完整支援。

## ©️ 版權與授權聲明

**Copyright © 2025 陳冠健 (Chan Kwun Kin). All Rights Reserved.**

本專案所有原始碼、介面設計、演算法邏輯、圖像素材、提示詞工程等，均為作者知識產權，受著作權法保護。

### 授權範圍（僅限特定對象）

**專屬授權對象**：中華基督教會基元中學 現任教職員 及 在校學生  
- 僅限校內教學、個人學習及非商業用途  
- **校外人士、補習社、商業機構未經作者書面授權，嚴禁使用**

### 嚴格禁止事項

本專案雖公開源碼供展示（Source Available），**但絕非開源軟體（Not Open Source）**。未經作者明確書面同意，嚴禁：

- 複製、散布、重新託管源代碼
- 修改、逆向工程、重製、打包為其他產品
- 用於任何形式商業行為、付費課程、補習教材

**Any unauthorized use, reproduction, modification, or distribution is strictly prohibited and may result in legal action.**

### Live2D 相關技術聲明

使用 **Live2D Cubism SDK** 由原圖製作成 2D 即時動畫的技術  
by  ![Live2D Logo](https://www.live2d.com/wp-content/themes/cubism_new/assets/img/sdk/live2d-logo_01.png)

**Live2D 素材使用受《無償提供素材使用授權協議》（版本 1.6，2025年2月3日修訂）約束**  
請務必詳閱完整協議，尤其是商用限制、大型企業使用條件及禁止事項。  
中文參考譯本：https://www.live2d.com/eula/live2d-free-material-license-agreement_cn.html  
日文原版（法律效力優先）：https://www.live2d.com/eula/live2d-free-material-license-agreement_jp.html

*Created with ❤️ for better Chinese Education in Hong Kong.*
