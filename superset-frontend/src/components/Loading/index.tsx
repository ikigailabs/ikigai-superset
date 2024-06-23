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

import React from 'react';
import { styled } from '@superset-ui/core';
import cls from 'classnames';
import Loader from 'src/assets/images/loading.gif';

export type PositionOption =
  | 'floating'
  | 'inline'
  | 'inline-centered'
  | 'normal';
export interface Props {
  position?: PositionOption;
  className?: string;
  image?: string;
}

// eslint-disable-next-line theme-colors/no-literal-colors
const LoaderImg = styled.div`
  z-index: 99;
  width: 50px;
  height: unset;
  position: relative;
  margin: 10px;
  text-align: center;
  animation: shimmerLogo 1.5s infinite;
  mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  &.inline {
    margin: 0px;
    width: 30px;
  }
  &.inline-centered {
    margin: 0 auto;
    width: 30px;
    display: block;
  }
  &.floating {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @keyframes shimmerLogo {
    100% {
      mask-position: left;
    }
  }
`;
export default function Loading({
  position = 'floating',
  image,
  className,
}: Props) {
  return (
    <LoaderImg
      className={cls('loading', position, className)}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <img src={image || Loader} alt="Loading..." />
    </LoaderImg>
  );
}
