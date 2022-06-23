/* index.js */
import { waitForCompleteClick } from './helpers.js';

waitForCompleteClick().then(() => {
  console.log('Complete clicked');
});
