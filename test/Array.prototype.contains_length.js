// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should have length 1
author: Domenic Denicola
---*/

if (Array.prototype.contains.length !== 1) {
    $ERROR('Expected Array.prototype.contains.length to be 1');
}
