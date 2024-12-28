# ベースイメージを設定
FROM node:22.12.0

# 環境変数を設定
ENV LANG C.UTF-8
ENV TZ="Asia/Tokyo"

# 作業ディレクトリを設定
WORKDIR /app/frontend

# 作業ディレクトリにコピー
COPY package.json .
COPY package-lock.json .

# アプリケーションの依存関係をインストール
RUN npm install

# ポートを設定
EXPOSE 3000
