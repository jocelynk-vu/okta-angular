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

import { NgModule, ModuleWithProviders } from '@angular/core';
import { OktaCallbackComponent } from './components/callback.component';
import { OktaHasAnyGroupDirective } from './has-any-group.directive';
import { OktaConfig } from './models/okta.config';
import { provideOktaAuth } from './okta.providers';

/**
 * @deprecated Use `provideOktaAuth()` instead for standalone applications.
 *
 * @example
 * ```typescript
 * // Standalone (recommended):
 * bootstrapApplication(AppComponent, {
 *   providers: [provideOktaAuth({ oktaAuth })]
 * });
 *
 * // NgModule (deprecated):
 * @NgModule({ imports: [OktaAuthModule.forRoot({ oktaAuth })] })
 * ```
 */
@NgModule({
  imports: [
    OktaCallbackComponent,
    OktaHasAnyGroupDirective,
  ],
  exports: [
    OktaCallbackComponent,
    OktaHasAnyGroupDirective,
  ],
})
export class OktaAuthModule {
  static forRoot(config?: OktaConfig): ModuleWithProviders<OktaAuthModule> {
    return {
      ngModule: OktaAuthModule,
      providers: provideOktaAuth(config),
    };
  }
}
