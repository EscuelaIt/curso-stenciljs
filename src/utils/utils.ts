import axios from 'axios';
import { getAssetPath } from '@stencil/core';

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function getSVG(url: string): Promise<string> {
  return axios
    .get(getAssetPath(url))
    .then(x => x.data)
    .catch(e => console.log(e));
  // return fetch(getAssetPath(url)).then(x => x.text());
}
