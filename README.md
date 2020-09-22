# 3d-product-module
> A one-day design sprint proof of concept for a 3D product demo plugin

![](scrolling.gif)

## Table of Contents

1. [Description](#Description)
1. [Usage](#Usage)
1. [Requirements](#requirements)

## Description

> This component was written during a one-day design sprint. It was designed as a proof of concept for a plugin that, with inputs of a 3D model, some advertising copy, and a color scheme, would produce an interactive product display. I utilized Three.js for the rendering of the model, and have been impressed with its performance on a variety of hardware. Particular fun was had implementing a custom, scroll-sensitive parallax feature. It appears that the definitive React scrolling library has yet to be written -- a situation that gives front-end developers a great excuse to implement custom features and optimizations.

> A custom SVG overlay was mocked up as a finishing touch for end-of-day presentations, but its positioning still needs to be coordinated with the 3D model upon window resizing. Future attention would also need to be paid to modularizing the custom scrolling.

> This project was a tremendously enjoyable exercise working with some features that are beginning to be used by major enterprise shops. Lightweight 3D interactivity? Amazing!

## Usage

```sh
npm install
npm run build
npm start
```

> the demo is visible on port 8085

## Requirements

- Node > 6.13.0
