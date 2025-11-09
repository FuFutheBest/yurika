---
title: Arch Notes
published: 2025-10-29
pinned: true
description: A collection of the problems and solutions I encountered while using Arch Linux.
tags: [Linux, Arch, Hyprland, Configuration]
category: Linux
licenseName: "Unlicensed"
author: FuFu
draft: false
image: "arch.webp"
date: 2025-10-29
pubDate: 2025-10-29
---

This blog will keep updating with the problems and solutions I encountered while using Arch Linux.

## System Info

`````bash
~> fastfetch -c ~/.config/fastfetch/safe_config.jsonc
                  -`                     ┌───────────────┬─────── fastfetch - 2.54.0 ────────────────────┐
                 .o+`                    │    Linux     │ Arch Linux x86_64                             │
                `ooo/                    │    Fetched   │ 2025-11-09 22:02:35 CST                       │
               `+oooo:                   │    Locale    │ en_US.UTF-8                                   │
              `+oooooo:                  │┌──────────────┬─────────── Desktop ──────────────────────────┐│
              -+oooooo+:                 ││   Session   │ Hyprland unknown (Wayland)                   ││
            `/:-:++oooo+:                ││ 󰍹  Display   │ 2560x1600 @ 240Hz                            ││
           `/++++/+++++++:               ││ 󰾲  G-Driver  │ nvidia (proprietary) 580.105.08              ││
          `/++++++++++++++:              ││ 󰾲  G-Driver  │ i915                                         ││
         `/+++ooooooooooooo/`            │└──────────────┴──────────────────────────────────────────────┘│
        ./ooosssso++osssssso+`           │┌──────────────┬─────────── Terminal ─────────────────────────┐│
       .oossssso-````/ossssss+`          ││   Shell     │ fish 4.1.2                                   ││
      -osssssso.      :ssssssso.         ││   Terminal  │ kitty 0.44.0                                 ││
     :osssssss/        osssso+++.        ││   Term Font │ JetBrainsMonoNF-Regular (16pt)               ││
    /ossssssss/        +ssssooo/-        ││ 󰔎  Colors    │ #EFD3C9 (FG) - #221819 (BG) [Dark]           ││
  `/ossssso+/:-        -:/+osssso+-      ││ 󰏖  Packages  │ 1973 (pacman), 32 (flatpak)                  ││
 `+sso+:-`                 `.-/+oso:     │└──────────────┴──────────────────────────────────────────────┘│
`++:.                           `-/+/    │┌──────────────┬───────── Development ────────────────────────┐│
.`                                 `/    ││   Rust      │ rustc 1.91.0                                 ││
                                         ││   Clang     │ clang 21.1.5                                 ││
                                         ││   NodeJS    │ node 25.1.0                                  ││
                                         ││   Go        │ go 1.25.4                                    ││
                                         ││ 󰊢  Git       │ git 2.51.2                                   ││
                                         │└──────────────┴──────────────────────────────────────────────┘│
                                         └───────────────────────────────────────────────────────────────┘
`````

(last updated: 2025-11-09)

## Grub

#### Open Secure Boot with Arch&Windows Dual Boot (双系统下开启安全启动)

Secure Boot is a security feature in a computer's firmware that ensures the system starts up using only ~~trusted and sate~~ Microsoft software, during the Arch Linux installation process, it is usually chosen to be disabled.
However, due to some reasons, it is necessary to enable Secure Boot.

安全启动是计算机固件中的一项安全功能，确保系统仅使用受信任和安全的软件启动, 在 Arch Linux 安装过程中通常选择关闭。
但因为~~一些原因~~要在 windows 下玩瓦罗兰特，战地等游戏，所以需要开启安全启动。

In short, the steps to enable Secure Boot in a dual-boot system with Arch Linux and Windows are as follows:

简而言之，在 Arch Linux 和 Windows 的双系统中启用安全启动的步骤如下：

- Use `openssl` to generate a public and private key pair.

  使用`openssl`生成一对公钥和私钥。

- Sign grub and the kernel with the private key.

  使用私钥对 grub 和内核进行签名。

- Use `arch-shim` as the bootloader.

  利用 `arch-shim` 来引导启动

[Detailed Guide (优质博客)](https://blog.azurezeng.com/arch-linux-grub-sb-with-font-and-some-optimization/)

## Hyprland

#### How to Disable Touchpad ? (禁用触摸板)

<a href="/posts/25_10_29_hypr_disable_touchpad/">Disable Touchpad in Hyprland</a>

#### Updating Issues (更新相关问题)

- <a href="/posts/25_11_09_update_to_hypr0.52.md">Dependency Issue when updating to Hyprland 0.52</a>

## Hardware

#### The keyboard backlight and the back light strip on my ASUS laptop are not working. (华硕笔记本键盘背光和背光条不工作)

```bash
sudo pacman -S asusctl
```

::github{repo="NeroReflex/asusctl"}

## Other

#### VPNS && Privacy (魔法和隐私保护)

- [VPNs](https://arch.icekylin.online/guide/rookie/transparent.html#v2raya)
- [Hogwarts](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/fxckGFW?id=%e5%b7%b2%e6%9c%89%e7%a7%91%e5%ad%a6%e4%b8%8a%e7%bd%91%e7%9a%84%e8%8a%82%e7%82%b9%e7%9a%84%e6%83%85%e5%86%b5)
- [Modern Privacy Protection](https://archlinuxstudio.github.io/ModernSecurityProtectionGuide/#/)
