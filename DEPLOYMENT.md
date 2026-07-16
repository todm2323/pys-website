# 網域與部署設定

正式網域為 `pysforklift.com.tw`，已寫入 `CNAME`、`sitemap.xml`、
`robots.txt`、各 html 的 canonical / og:url / og:image / JSON-LD 區塊。

## 方案 A：繼續用 GitHub Pages，只換網域（目前設定）

1. 跟網域註冊商（GoDaddy、Namecheap、台灣的 GANDI、網路中文等）
   買下 `pysforklift.com.tw`（若尚未購買，這步先完成）。
2. 在網域的 DNS 設定裡加入以下紀錄，指向 GitHub Pages：
   - 根網域（apex，例如 `pysforklift.com.tw`）用 **A 記錄**指到 GitHub Pages 的四組 IP：
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - `www` 子網域用 **CNAME 記錄**指到 `todm2323.github.io`。
3. 到 GitHub repo → Settings → Pages → Custom domain，填入
   `pysforklift.com.tw`，儲存後等待 DNS 檢查通過。
4. 打勾 **Enforce HTTPS**（DNS 生效後才能勾選，GitHub 會自動簽發
   Let's Encrypt 憑證）。
5. 確認 repo 根目錄的 `CNAME` 檔案內容是 `pysforklift.com.tw`
   （已建立好）。
6. 到 Google Search Console 新增這個網域資源，重新提交
   `sitemap.xml`，並用「網址審查」工具請求重新索引首頁。

這個方案完全不用搬家，成本只有網域費用（約 NT$300–1000/年）。

## 方案 B：搬到 Cloudflare Pages（想要更快 CDN / 內建表單再做）

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com) →
   Workers & Pages → Create → Pages → Connect to Git，選這個
   GitHub repo。
2. Build 設定：這是純靜態站，不需要 build command，
   Framework preset 選 **None**，Build output directory 填 `/`
   （專案根目錄）。
3. 部署完成後會拿到一個 `*.pages.dev` 的測試網址，先確認頁面正常。
4. 到該 Pages 專案的 Custom domains 分頁，加入 `pysforklift.com.tw` 與
   `www.pysforklift.com.tw`。
5. 把網域的 Nameserver 改成 Cloudflare 提供的兩組（在 Cloudflare
   加入網域時會顯示），或者只改 DNS 紀錄指向 Cloudflare（依你買網域
   的註冊商是否支援）。
6. Cloudflare 會自動簽發 SSL 憑證，SSL/TLS 模式建議設為
   **Full (strict)**。
7. 如果之後想把聯絡表單從「跳出郵件軟體」升級成「直接送出、後台
   收信」，可以改用 Cloudflare Pages Functions 或串接
   Netlify Forms／第三方表單服務（如 Formspree）。
8. 確認新網址上線、DNS 全部生效後，再到 GitHub repo Settings → Pages
   停用（或保留當備援）。同時到 Google Search Console 更新網域資源
   並重新提交 sitemap。

## 之後要做的收尾

- [x] DNS 設定完成、GitHub Pages Custom domain 綁定成功、HTTPS 已啟用
      （2026-07-16 驗證：`pysforklift.com.tw` 200 OK，`www` 301 轉根網域，
      舊的 `todm2323.github.io/pys-website/` 也已自動 301 轉到新網域）
- [ ] Google Search Console 驗證新網域、提交 sitemap.xml
- [ ] 檢查 Google Analytics / Search Console 裡的網址設定是否同步更新
