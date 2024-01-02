---
title: '🦺 ゲーム開発をはじめるにあたって'
topics: ['welcome']
authors:
    - tokunaga
description: 'README'
pubDate: 'Dec 30 2023'
heroImage: '/placeholder-hero.jpg'
---

## ご挨拶

はじめまして．

当ブログでは，[itch.io](https://itch.io)に自作のゲームをリリースするまでの過程を開発日誌として記録していきたいと思います．（ゲーム開発および3D モデリングは未経験[^1]です）

この発信を通して，ゲーム開発に興味のある方や実際に挑戦している方へ，少しでも参考になる情報やノウハウをお伝えできれば幸いです．

これからどうぞよろしくお願いいたします．

[^1]: 筆者は主に仕事で業務基幹システム系の保守開発をしています．Rust, Java, VB.NETで実務経験6 年です．

## ゲームエンジンの選定

当初，Unreal Engine 5 で開発を進めるつもるでしたが，PC スペック都合で諦めました．
EZbench というベンチマークソフトでPC の能力を計測した結果，616 という愛くるしいスコアを叩き出してしまったためです．
(理想は30000 以上)
![img](/img/spec2312.png)

というのも，愛機にはグラボを搭載しておらず，CPU 内蔵GPU のため致し方ありません．
本来こういったハイスペックが要求される作業には向かないミニPC のため，しばらくは [**Bevy**](https://bevyengine.org/) に頼ります．

## 準備

下記の準備は完了済みとしてこれから記事を投稿していくため，詳細は割愛いたします．

-   [Rust](https://www.rust-lang.org/ja/tools/install) のインストール
-   [VS Code](https://code.visualstudio.com/download) のインストール
-   [Bevy](https://bevyengine.org/learn/book/getting-started/) 利用のための諸準備
-   Windows 11 を搭載したPC

以上，楽しんでいきましょう．
