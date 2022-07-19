/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators';

import {TabIndicator} from './lib/tab-indicator';
import {styles} from './lib/tab-indicator-styles.css';

declare global {
  interface HTMLElementTagNameMap {
    'md-tab-indicator': MdTabIndicator;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
@customElement('md-tab-indicator')
export class MdTabIndicator extends TabIndicator {
  static override styles = [styles];
}