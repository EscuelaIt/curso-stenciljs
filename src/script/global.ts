import { setMode } from '@stencil/core';

declare const Context: any;

const userAgent = navigator.userAgent;

if (/windows phone/i.test(userAgent)) {
  Context.mode = 'wp';
} else if (/android/i.test(userAgent)) {
  Context.mode = 'md';
} else if (/iPad|iPhone|iPod/.test(userAgent)) {
  Context.mode = 'ios';
} else {
  Context.mode = 'desktop';
}

setMode(() => {
  console.warn(Context.mode);

  // NOTE: you can write whatever you want here - it's up to you.
  return Context.mode;
});

export default async function () {
  await new Promise(_resolve => {
    setTimeout(() => console.log('Hello Tars charged'), 5000);
  });
  // or export default async function()
}
