# AwePlayer Monorepo

AwePlayer is an elegant and modern media player.

## Quick Demo

[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/AwePlayer/player/tree/main/apps/example)

## Installation

Using npm:

```bash
npm install @awe-player/svelte @awe-player/icons
```

Using pnpm:

```bash
pnpm add @awe-player/svelte @awe-player/icons
```

## Usage

```js
import { AwePlayer } from '@awe-player/svelte';
import '@awe-player/icons/dist/awe-icon.css';

<AwePlayer
	src={[
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
	]}
/>;
```

TODO:

1. Support for react
1. Thumbnail support
1. Volume Slider
1. Captions support
1. Custom banners
1. Quality/Source control support

```
NOTE: As this is my first package that i have published on npm. I appreciate any and all feedbacks on it.
```
