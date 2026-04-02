/*
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Provider, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OktaAuthConfigService } from './services/auth-config.serice';
import { OktaAuthFactoryService } from './services/auth-factory.service';
import { OktaConfig, OKTA_CONFIG, OKTA_AUTH } from './models/okta.config';

/**
 * Provides Okta authentication services for standalone Angular applications.
 *
 * @example
 * ```typescript
 * // In bootstrapApplication or route providers:
 * import { provideOktaAuth } from '@okta/okta-angular';
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideOktaAuth({ oktaAuth })
 *   ]
 * });
 * ```
 *
 * @param config - The Okta configuration containing an OktaAuth instance
 * @returns An array of providers for Okta authentication
 */
export function provideOktaAuth(config?: OktaConfig): Provider[] {
  return [
    { provide: OKTA_CONFIG, useValue: config },
    OktaAuthConfigService,
    {
      provide: OKTA_AUTH,
      useFactory: OktaAuthFactoryService.createOktaAuth,
      deps: [
        OktaAuthConfigService,
        [new Optional(), Router],
        [new Optional(), Location]
      ]
    },
  ];
}
