---
layout: post
title:  "Jekyll - A static website generator"
description: "Github pages - static website development with Jekyll"
summary: "Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more."
author: "Baboyma Kagniniwa"
date: "2025-01-20"
categories: [news]
tags: [jekyll, web, static, blog]
---

# Quickstart
Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more.

## Prerequisites
To install Jekyll, you need to have Ruby and RubyGems installed. You can check if you have them installed by running the following commands in your terminal:

```bash
ruby -v
gem -v
```
If you see version numbers for both Ruby and RubyGems, you have them installed. If not, you can install them using a package manager like Homebrew (for macOS) or apt-get (for Ubuntu).
For example, on macOS, you can run:

```bash
brew install ruby
```
On Ubuntu, you can run:

```bash
sudo apt-get install ruby-full
```
If you are using Windows, you can install Ruby using the RubyInstaller. You can download it from the [RubyInstaller website](https://rubyinstaller.org/).
You can also use the Windows Subsystem for Linux (WSL) to run a Linux distribution on your Windows machine and install Ruby and Jekyll there.
## Installation
Jekyll is a Ruby Gem, so you can install it using the gem command. Open your terminal and run the following command:

```bash
gem install jekyll bundler
```
This will install Jekyll and Bundler, which is a dependency manager for Ruby. Bundler helps you manage the gems your project depends on.
## Creating a new Jekyll site
Once you have Jekyll installed, you can create a new Jekyll site by running the following command in your terminal:

## Jekyll requires the following:

1. Ruby version 2.7.0 or higher
2. RubyGems
3. GCC and Make
4. See Requirements for guides and details.

## Instructions

1. Install all prerequisites.
2. Install the jekyll and bundler gems.
`gem install jekyll bundler`
3. Create a new Jekyll site at ./myblog.
`jekyll new myblog`
4. Change into your new directory.
`cd myblog`
5. Build the site and make it available on a local server.
`bundle exec jekyll serve`
6. Browse to http://localhost:4000