/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

<<<<<<<< HEAD:superset-frontend/src/types/dom-to-image-more.d.ts
declare module 'dom-to-image-more' {
  export interface Options {
    filter?: ((node: Node) => boolean) | undefined;
    bgcolor?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    style?: {} | undefined;
    quality?: number | undefined;
    imagePlaceholder?: string | undefined;
    cacheBust?: boolean | undefined;
========
.new-component {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 16px;
  background: @lightest;
  cursor: move;

  &:not(.static):hover {
    background-color: #e8e8e8b7;
  }

  &.disable-hover:not(.static) {
    background: @lightest;
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.new-component-placeholder {
  position: relative;
  background: @gray-bg;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border: 1px solid @lightest;
  display: flex;
  align-items: center;
  justify-content: center;
  color: @gray;
  font-size: @font-size-xxl;

  &.fa-window-restore {
    font-size: @font-size-l;
  }

  &.fa-area-chart {
    font-size: @font-size-xl;
>>>>>>>> migration-2.0.1:superset-frontend/src/dashboard/stylesheets/components/new-component.less
  }

  class DomToImageMore {
    static toJpeg(node: Node, options?: Options): Promise<string>;
  }

  export default DomToImageMore;
}
