/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { PkgJson } from "../types/PkgJson";

export const getEntrypoint = ({ bin, main }: PkgJson): string =>
  bin ? Object.values(bin)[0] : main || "index.js";