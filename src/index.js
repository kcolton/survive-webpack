// Imagine that import has been monkey patched by webpack
// or this was called webpackImport and it's less weird
import "./main.scss";

import buildComponent from "./component";

document.body.appendChild(buildComponent());
